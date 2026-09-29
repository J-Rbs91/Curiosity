#!/usr/bin/env node
/**
 * Recolle les `verification.partN.json` d'une carte partitionnee en un seul
 * `verification.json`, celui que `--gate` lit.
 *
 * Le pendant de `factcheck-partition.mjs`. La partition n'a de valeur que si la
 * validation finale couvre tous les claims du map d'origine
 * (FACTCHECK_PROTOCOL §7) : c'est ce que ce script verifie avant d'ecrire, en
 * confrontant les verdicts recoltes au claim map lui-meme et non aux partitions,
 * qui pourraient toutes manquer le meme claim.
 *
 * Il ne juge rien et ne reecrit aucun verdict : il concatene, et refuse.
 *
 *   node scripts/corpus/factcheck-merge-verification.mjs --only=<conceptId>
 */
import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..", "..");

function option(name) {
  const prefix = `--${name}=`;
  const value = process.argv.find((arg) => arg.startsWith(prefix));
  return value ? value.slice(prefix.length) : null;
}

function fail(message) {
  console.error(message);
  process.exit(2);
}

const conceptId = option("only");
if (!conceptId) fail("usage: node scripts/corpus/factcheck-merge-verification.mjs --only=<conceptId>");

const dir = path.join(ROOT, "corpus", "deepening-audits", "work", conceptId);
const mapFile = path.join(dir, "claim-map.json");
if (!existsSync(mapFile)) fail(`claim map introuvable: ${mapFile}`);
const map = JSON.parse(await fs.readFile(mapFile, "utf8"));
const expected = (map.claims || []).map((claim) => claim.claim_id);
if (!expected.length) fail("le claim map ne porte aucun claim");

const partFiles = (await fs.readdir(dir))
  .filter((name) => /^verification\.part\d+\.json$/.test(name))
  .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));
if (!partFiles.length) fail("aucun verification.partN.json dans le repertoire de travail");

const results = [];
const shas = new Set();
const seen = new Map();
for (const name of partFiles) {
  const part = JSON.parse(await fs.readFile(path.join(dir, name), "utf8"));
  if (part.concept_id !== conceptId) fail(`${name}: concept_id incorrect (${part.concept_id})`);
  if (!Array.isArray(part.results)) fail(`${name}: results doit etre un tableau`);
  shas.add(part.candidate_sha256);
  for (const result of part.results) {
    if (seen.has(result.claim_id)) {
      fail(`${result.claim_id} a un verdict dans ${seen.get(result.claim_id)} et dans ${name}`);
    }
    seen.set(result.claim_id, name);
    results.push(result);
  }
}

if (shas.size !== 1) fail(`les partitions ne portent pas le meme candidate_sha256: ${[...shas].join(", ")}`);
const unknown = results.filter((result) => !expected.includes(result.claim_id)).map((r) => r.claim_id);
if (unknown.length) fail(`verdict(s) pour claim(s) absent(s) du map: ${unknown.join(", ")}`);
const missing = expected.filter((id) => !seen.has(id));
if (missing.length) fail(`claim(s) sans verdict apres recollement: ${missing.join(", ")}`);

// L'ordre du map, pas celui des partitions : la lecture du rapport suit le texte.
results.sort((a, b) => expected.indexOf(a.claim_id) - expected.indexOf(b.claim_id));

const merged = {
  protocol_version: 2,
  concept_id: conceptId,
  candidate_sha256: [...shas][0],
  partitions: partFiles.map((name) => path.relative(ROOT, path.join(dir, name))),
  results,
};
const output = path.join(dir, "verification.json");
await fs.writeFile(output, JSON.stringify(merged, null, 2) + "\n");

const counts = {};
for (const result of results) counts[result.verdict] = (counts[result.verdict] || 0) + 1;
console.log(
  JSON.stringify(
    {
      concept_id: conceptId,
      partitions: partFiles.length,
      claims_au_map: expected.length,
      verdicts_recoltes: results.length,
      par_verdict: counts,
      artifact: path.relative(ROOT, output),
    },
    null,
    2,
  ),
);
