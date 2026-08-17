#!/usr/bin/env node
/**
 * `npm run corpus:build`
 *
 * Projette corpus/validated/ vers src/content/generated/concepts.generated.ts.
 * Refuse de produire quoi que ce soit si la validation échoue : le contrôle ne peut pas
 * être sauté, même quand le sujet est urgent.
 */

import { writeFile } from "node:fs/promises";

import { GENERATED_FILE, loadAppContent, loadRecords, relative } from "./lib/io.mjs";
import { validateCorpus, validateRecord } from "./lib/validate.mjs";
import { projectCorpus } from "./lib/project.mjs";

const { themes, authors, domains, fixtureConcepts } = await loadAppContent();
const themeIds = new Set(themes.map((t) => t.id));
const authorIds = new Set(authors.map((a) => a.id));
const domainIds = new Set(domains.map((d) => d.id));

const records = await loadRecords();

const failures = [];
for (const { dir, file, record } of records) {
  const { errors } = validateRecord(record, { dir, themeIds, authorIds, domainIds });
  if (errors.length > 0) failures.push({ file, errors });
}
const corpus = validateCorpus(records);

if (failures.length > 0 || corpus.errors.length > 0) {
  console.error("Projection refusée : le corpus ne passe pas la validation.\n");
  for (const { file, errors } of failures) {
    console.error(relative(file));
    for (const message of errors) console.error(`  ✗ ${message}`);
  }
  for (const message of corpus.errors) console.error(`  ✗ ${message}`);
  console.error("\nCorrigez le corpus maître, puis reprojetez. N'éditez pas le fichier généré.");
  process.exit(1);
}

const concepts = projectCorpus(records.map(({ record }) => record));

const file = `/*
 * Fichier généré par \`npm run corpus:build\` — ne pas éditer à la main.
 *
 * Source : corpus/validated/*.json. Toute correction se fait dans l'enregistrement
 * maître, puis se reprojette : c'est ce qui garantit qu'aucune phrase affichée par
 * l'application n'existe sans un enregistrement sourcé et contrôlé derrière elle.
 *
 * Voir docs/corpus-workflow.md.
 */

import type { Concept } from "@/types";

export const generatedConcepts: Concept[] = ${JSON.stringify(concepts, null, 2)};
`;

await writeFile(GENERATED_FILE, file, "utf8");

console.log(`${concepts.length} concept(s) projeté(s) vers ${relative(GENERATED_FILE)}`);

// Une fiche d'échafaudage dont le concept vient d'être instruit n'a plus de raison
// d'exister : elle est déjà retirée de l'affichage, autant la retirer du dépôt.
const superseded = concepts.filter((c) => fixtureConcepts.some((f) => f.id === c.id));
if (superseded.length > 0)
  console.log(
    `${superseded.length} concept(s) rendent caduc leur échafaudage : ${superseded
      .map((c) => c.id)
      .join(", ")}\n` +
      "Ces entrées peuvent être supprimées de src/content/fixtures/concepts.fixture.ts."
  );
