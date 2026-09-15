#!/usr/bin/env node
/**
 * `npm run corpus:deepen`
 *
 * Projette corpus/deepenings/*.json vers src/content/generated/deepenings.generated.ts.
 *
 * `limits` reste dans le corpus maître comme frontière documentaire interne mais n'est jamais
 * projeté vers l'application. Le texte lecteur est uniquement `lead + sections`.
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { CONTENT_DIR, CORPUS_DIR, loadRecords, relative } from "./lib/io.mjs";
import {
  countWords,
  projectDeepening,
  unsourcedQuotations,
  validateDeepening,
} from "./lib/deepenings-v2.mjs";

const DEEPENINGS_DIR = path.join(CORPUS_DIR, "deepenings");
const GENERATED = path.join(CONTENT_DIR, "generated", "deepenings.generated.ts");
const GENERATED_INDEX = path.join(CONTENT_DIR, "generated", "deepenings-index.generated.ts");

const ENTETE = (source) => `/*
 * Fichier généré par \`npm run corpus:deepen\` — ne pas éditer à la main.
 *
 * Source : ${source}. Toute correction se fait dans le fichier maître, puis se
 * reprojette : c'est ce qui garantit qu'aucune phrase affichée par l'application n'existe
 * sans un texte relu derrière elle.
 *
 * Voir corpus/deepenings/PROTOCOLE.md.
 */`;

const checkOnly = process.argv.includes("--check");
const only = process.argv.find((arg) => arg.startsWith("--only="))?.slice("--only=".length);

if (only && !checkOnly) {
  console.error("--only ne s'emploie qu'avec --check : projeter un seul texte effacerait les autres.");
  process.exit(1);
}

const records = (await loadRecords()).filter(
  ({ dir, record }) => dir === "validated" && typeof record?.id === "string"
);
const validatedIds = new Set(records.map(({ record }) => record.id));
const dossiers = new Map(records.map(({ record }) => [record.id, JSON.stringify(record)]));

let entries = [];
try {
  entries = (await readdir(DEEPENINGS_DIR))
    .filter((name) => name.endsWith(".json"))
    .filter((name) => !only || name === `${only}.json`)
    .sort();
} catch {
  console.error(`Répertoire absent : ${relative(DEEPENINGS_DIR)}`);
  process.exit(1);
}

const deepenings = [];
const failures = [];
const vus = new Set();

for (const entry of entries) {
  const file = path.join(DEEPENINGS_DIR, entry);
  let record;
  try {
    record = JSON.parse(await readFile(file, "utf8"));
  } catch (error) {
    failures.push({ file: entry, errors: [`JSON illisible — ${error.message}`] });
    continue;
  }

  const errors = validateDeepening(record, { conceptIds: validatedIds });
  const attendu = `${record?.conceptId}.json`;
  if (record?.conceptId && entry !== attendu) errors.push(`nom de fichier : attendu ${attendu}`);
  if (record?.conceptId && vus.has(record.conceptId)) errors.push(`conceptId en double : ${record.conceptId}`);

  if (errors.length > 0) {
    failures.push({ file: entry, errors });
    continue;
  }

  vus.add(record.conceptId);
  deepenings.push(record);
}

if (failures.length > 0) {
  console.error("Projection refusée : un approfondissement ne passe pas le contrôle.\n");
  for (const { file, errors } of failures) {
    console.error(`corpus/deepenings/${file}`);
    for (const message of errors) console.error(`  ✗ ${message}`);
  }
  console.error("\nCorrigez le fichier maître, puis reprojetez. N'éditez pas le fichier généré.");
  process.exit(1);
}

if (only && entries.length === 0) {
  console.error(`Aucun approfondissement pour « ${only} » dans ${relative(DEEPENINGS_DIR)}`);
  process.exit(1);
}

const projected = deepenings
  .map(projectDeepening)
  .sort((a, b) => a.conceptId.localeCompare(b.conceptId));

const suspectes = deepenings
  .map((d) => ({ id: d.conceptId, citations: unsourcedQuotations(d, dossiers.get(d.conceptId)) }))
  .filter(({ citations }) => citations.length > 0);

if (suspectes.length > 0) {
  console.warn("\nCitations absentes de la fiche, à relire :\n");
  for (const { id, citations } of suspectes) {
    console.warn(`corpus/deepenings/${id}.json`);
    for (const citation of citations) console.warn(`  ? « ${citation} »`);
  }
  console.warn("\nLe content gate v2 reste l'autorité sémantique avant publication.\n");
}

if (checkOnly) {
  const total = deepenings.reduce((n, d) => n + countWords(d), 0);
  console.log(`${projected.length} approfondissement(s) contrôlé(s), ${total} mots visibles. Rien projeté.`);
  process.exit(0);
}

await writeFile(
  GENERATED,
  `${ENTETE("corpus/deepenings/*.json")}

import type { Deepening } from "@/types";

export const generatedDeepenings: Deepening[] = ${JSON.stringify(projected, null, 2)};
`,
  "utf8"
);

await writeFile(
  GENERATED_INDEX,
  `${ENTETE("corpus/deepenings/*.json")}

import type { ConceptId } from "@/types";

export const deepenedConceptIds: readonly ConceptId[] = ${JSON.stringify(
    projected.map((d) => d.conceptId),
    null,
    2
  )};
`,
  "utf8"
);

const total = deepenings.reduce((n, d) => n + countWords(d), 0);
console.log(
  `${projected.length} approfondissement(s) projeté(s) vers ${relative(GENERATED)}\n` +
    `${total} mots visibles au total, ${Math.round(total / (projected.length || 1))} en moyenne`
);

const sans = [...validatedIds].filter((id) => !vus.has(id)).sort();
if (sans.length > 0)
  console.log(`\n${sans.length} carte(s) validée(s) sans approfondissement :\n  ${sans.join("\n  ")}`);
