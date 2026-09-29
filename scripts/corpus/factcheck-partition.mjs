#!/usr/bin/env node
/**
 * Partitionne un `verification-bundle.json` que `--bundle` a rendu en
 * `PARTITION_REQUIRED`.
 *
 * FACTCHECK_PROTOCOL.md §2 et §7 exigent la partition et interdisent la
 * troncature : « Un dépassement ne donne jamais le droit de supprimer une
 * preuve ou un paragraphe pour faire rentrer le dossier. » Le dépôt savait
 * détecter le dépassement et ne savait pas le résoudre : chaque passage
 * réimprovisait le découpage, sans garantie qu'aucun claim ne se perde.
 *
 * Ce script ne découpe que la liste des claims. Les champs de tête du bundle —
 * `candidate_sha256`, `map_sha256`, `signal_notice`, `signal_lexique` — sont
 * recopiés à l'identique dans chaque partition, et chaque claim y garde ses
 * appuis entiers, son `uncited_support_signal` compris. Un claim est dans
 * exactement une partition.
 *
 * Il refuse de rendre une partition qui dépasse encore le budget, et refuse
 * de rendre quoi que ce soit si le compte des claims ne se retrouve pas.
 *
 * L'estimateur est celui de `deepening-factcheck.mjs` : 3 caractères par token,
 * volontairement prudent. Le budget de 300 000 est un plafond, pas une cible :
 * `--parts=N` permet d'équilibrer plus large que le strict nécessaire.
 *
 *   node scripts/corpus/factcheck-partition.mjs --only=<conceptId> [--parts=N]
 *
 * La sortie est le manifeste des partitions, à passer aux vérificateurs — un
 * agent frais par partition, aucun ne voyant les autres.
 */
import fs from "node:fs/promises";
import path from "node:path";

const BUDGET_TOKENS = 300_000;
const ESTIMATED_CHARS_PER_TOKEN = 3;
const ROOT = path.resolve(import.meta.dirname, "..", "..");

function option(name) {
  const prefix = `--${name}=`;
  const value = process.argv.find((arg) => arg.startsWith(prefix));
  return value ? value.slice(prefix.length) : null;
}

function estimateTokens(value) {
  return Math.ceil(JSON.stringify(value).length / ESTIMATED_CHARS_PER_TOKEN);
}

function fail(message) {
  console.error(message);
  process.exit(2);
}

const conceptId = option("only");
if (!conceptId) {
  fail("usage: node scripts/corpus/factcheck-partition.mjs --only=<conceptId> [--parts=N]");
}

const dir = path.join(ROOT, "corpus", "deepening-audits", "work", conceptId);
const bundleFile = option("bundle") || path.join(dir, "verification-bundle.json");

let bundle;
try {
  bundle = JSON.parse(await fs.readFile(bundleFile, "utf8"));
} catch (error) {
  fail(`bundle illisible: ${bundleFile}\n${error.message}`);
}

const { claims, estimated_tokens: bundleTokens, status, ...head } = bundle;
if (!Array.isArray(claims) || !claims.length) fail("le bundle ne porte aucun claim");

const requested = Number(option("parts") || 0);
if (option("parts") && (!Number.isInteger(requested) || requested < 1)) {
  fail("--parts attend un entier >= 1");
}
const count = requested || Math.ceil((bundleTokens || estimateTokens(bundle)) / BUDGET_TOKENS);
const perPart = Math.ceil(claims.length / count);

const groups = [];
for (let i = 0; i < claims.length; i += perPart) groups.push(claims.slice(i, i + perPart));

const manifest = [];
for (const [index, group] of groups.entries()) {
  const part = {
    ...head,
    partition: {
      index: index + 1,
      total: groups.length,
      claim_ids: group.map((claim) => claim.claim_id),
    },
    claims: group,
  };
  part.estimated_tokens = estimateTokens(part);
  part.status = part.estimated_tokens <= BUDGET_TOKENS ? "READY" : "PARTITION_REQUIRED";
  manifest.push({
    file: path.relative(ROOT, path.join(dir, `verification-bundle.part${index + 1}.json`)),
    claims: group.length,
    first_claim: group[0].claim_id,
    last_claim: group.at(-1).claim_id,
    estimated_tokens: part.estimated_tokens,
    status: part.status,
  });
  part._pending = JSON.stringify(part, null, 2) + "\n";
  groups[index] = part;
}

// Les refus viennent avant toute écriture : une partition fautive ne doit pas
// exister sur le disque, où un agent pourrait la lire.
const placed = groups.flatMap((part) => part.claims);
if (placed.length !== claims.length) {
  fail(`perte de claims: ${placed.length} répartis pour ${claims.length} au bundle`);
}
if (new Set(placed.map((claim) => claim.claim_id)).size !== claims.length) {
  fail("claim_id dupliqué ou manquant dans les partitions");
}
const tooBig = manifest.filter((entry) => entry.status !== "READY");
if (tooBig.length) {
  fail(
    `${tooBig.length} partition(s) dépassent encore ${BUDGET_TOKENS} tokens estimés ; ` +
      `relancer avec --parts=${count + tooBig.length}`,
  );
}

for (const part of groups) {
  const { _pending, ...rest } = part;
  await fs.writeFile(path.join(dir, `verification-bundle.part${rest.partition.index}.json`), _pending);
}

console.log(
  JSON.stringify(
    {
      concept_id: conceptId,
      candidate_sha256: head.candidate_sha256,
      claims_au_bundle: claims.length,
      claims_repartis: placed.length,
      bundle_estimated_tokens: bundleTokens ?? null,
      budget_tokens: BUDGET_TOKENS,
      parts: manifest,
    },
    null,
    2,
  ),
);
