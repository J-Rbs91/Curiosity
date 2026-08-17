#!/usr/bin/env node
/**
 * `npm run corpus:validate`
 *
 * Vérifie chaque enregistrement du corpus maître, puis le corpus dans son ensemble.
 * Sort en code 1 à la première erreur : c'est ce qui empêche une fiche non contrôlée
 * d'atteindre l'application, indépendamment de la discipline des agents.
 */

import { loadAppContent, loadRecords, relative } from "./lib/io.mjs";
import { validateCorpus, validateRecord } from "./lib/validate.mjs";

const { themes, authors, domains } = await loadAppContent();
const themeIds = new Set(themes.map((t) => t.id));
const authorIds = new Set(authors.map((a) => a.id));
const domainIds = new Set(domains.map((d) => d.id));

const records = await loadRecords();

let errorCount = 0;
let warningCount = 0;

for (const { dir, file, record } of records) {
  const { errors, warnings } = validateRecord(record, { dir, themeIds, authorIds, domainIds });
  if (errors.length === 0 && warnings.length === 0) continue;
  console.log(`\n${relative(file)}`);
  for (const message of errors) console.log(`  ✗ ${message}`);
  for (const message of warnings) console.log(`  ~ ${message}`);
  errorCount += errors.length;
  warningCount += warnings.length;
}

const corpus = validateCorpus(records);
if (corpus.errors.length > 0 || corpus.warnings.length > 0) {
  console.log("\ncorpus (cohérence d'ensemble)");
  for (const message of corpus.errors) console.log(`  ✗ ${message}`);
  for (const message of corpus.warnings) console.log(`  ~ ${message}`);
  errorCount += corpus.errors.length;
  warningCount += corpus.warnings.length;
}

const validated = records.filter(({ record }) => record?.status === "VALIDATED").length;
console.log(
  `\n${records.length} enregistrement(s) · ${validated} validé(s) · ${errorCount} erreur(s) · ${warningCount} avertissement(s)`
);

if (errorCount > 0) {
  console.log("\nAucune projection n'est possible tant qu'une erreur subsiste.");
  process.exit(1);
}
