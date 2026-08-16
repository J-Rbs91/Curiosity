#!/usr/bin/env node
/**
 * `npm run corpus:preview -- <id> [<id>…]`
 *
 * Projette une ou plusieurs fiches **sans le verrou de publication**, pour les regarder à
 * l'écran avant qu'elles soient contrôlées.
 *
 * Ce n'est pas une porte dérobée dans le dispositif, et il ne faut pas qu'elle le
 * devienne. Trois choses l'en empêchent :
 *
 * 1. Elle **écrit ailleurs** — `src/content/generated/concepts.preview.ts`, ignoré par git
 *    et jamais importé par l'application en production.
 * 2. Elle **contrôle tout le reste**. Seul le gating (verdicts du contrôleur aveugle) est
 *    sauté ; une fiche mal formée, une source sans DOI, un chiffre non sourcé ou une
 *    citation non localisée fait échouer l'aperçu comme elle ferait échouer la projection.
 * 3. Elle **le dit**, à chaque exécution et dans le fichier produit.
 *
 * Voir une carte avant de la valider est un besoin légitime — c'est même le seul moyen de
 * juger d'une accroche ou d'un exemple. Publier sans contrôle n'en est pas un.
 */

import { writeFile } from "node:fs/promises";
import path from "node:path";

import { CONTENT_DIR, loadAppContent, loadRecords, relative } from "./lib/io.mjs";
import { validateRecord } from "./lib/validate.mjs";
import { projectConcept } from "./lib/project.mjs";

const wanted = new Set(process.argv.slice(2));
if (wanted.size === 0) {
  console.error("usage : npm run corpus:preview -- <id> [<id>…]");
  process.exit(2);
}

const { themes, authors } = await loadAppContent();
const themeIds = new Set(themes.map((t) => t.id));
const authorIds = new Set(authors.map((a) => a.id));

const records = (await loadRecords()).filter(({ record }) => wanted.has(record?.id));
const missing = [...wanted].filter((id) => !records.some(({ record }) => record?.id === id));
if (missing.length > 0) {
  console.error(`Introuvable(s) dans corpus/ : ${missing.join(", ")}`);
  process.exit(1);
}

/** Le gating est la seule règle levée : tout le reste doit passer. */
const GATING = /VALIDATED (alors que|avec|sans)/;

let blocked = 0;
for (const { dir, file, record } of records) {
  const errors = validateRecord(record, { dir, themeIds, authorIds }).errors.filter(
    (message) => !GATING.test(message)
  );
  if (errors.length === 0) continue;
  console.error(`\n${relative(file)}`);
  for (const message of errors) console.error(`  ✗ ${message}`);
  blocked += errors.length;
}

if (blocked > 0) {
  console.error("\nAperçu refusé : ces erreurs ne relèvent pas du contrôle documentaire mais de la fiche elle-même.");
  process.exit(1);
}

const concepts = records
  .map(({ record }) => record)
  .sort((a, b) => a.id.localeCompare(b.id, "fr"))
  .map(projectConcept);

const target = path.join(CONTENT_DIR, "generated", "concepts.preview.ts");
await writeFile(
  target,
  `/*
 * APERÇU — produit par \`npm run corpus:preview\`, NON PUBLIABLE.
 *
 * Ces fiches n'ont pas passé le contrôle aveugle : leurs verdicts sont encore en attente
 * ou en correction. Le fichier est ignoré par git et n'est jamais servi en production.
 * Il existe pour regarder une carte, pas pour la publier.
 */

import type { Concept } from "@/types";

export const previewConcepts: Concept[] = ${JSON.stringify(concepts, null, 2)};
`,
  "utf8"
);

console.log(`${concepts.length} carte(s) en aperçu → ${relative(target)}`);
console.log("Non contrôlées, non publiables. `npm run corpus:build` reste seul juge de ce qui sort.");
