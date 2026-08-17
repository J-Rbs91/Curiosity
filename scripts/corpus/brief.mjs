#!/usr/bin/env node
/**
 * `node scripts/corpus/brief.mjs <id>`
 *
 * Produit le dossier remis au contrôleur aveugle, dans corpus/review/<id>.brief.json.
 *
 * Sa raison d'être est de rendre l'aveuglement **mécanique** plutôt que promis : le
 * contrôleur ne doit pas savoir ce que les agents amont pensent de la fiche. Tout ce qui
 * porte une confiance, une intention ou un historique est retiré ici — verdicts déjà
 * rendus, drapeaux de confiance, journal des agents, justification d'entrée dans le
 * périmètre. Il reste les affirmations, l'attribution et les sources.
 *
 * Un seul dossier, une seule invocation, deux questions distinctes tranchées ensemble :
 * la preuve est-elle vraie, et la prose lui ajoute-t-elle quelque chose ? Elles l'étaient
 * auparavant en deux passes, ce qui faisait rouvrir et retélécharger les mêmes sources
 * deux fois pour une carte de 400 caractères. Le gating, lui, garde bien ses deux
 * verdicts : ce sont deux jugements, rendus en une lecture.
 */

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { CORPUS_DIR, RECORD_DIRS, relative } from "./lib/io.mjs";

const [id] = process.argv.slice(2);

if (!id) {
  console.error("usage : node scripts/corpus/brief.mjs <id>");
  process.exit(2);
}

let record = null;
let source = null;
for (const dir of RECORD_DIRS) {
  const file = path.join(CORPUS_DIR, dir, `${id}.json`);
  try {
    record = JSON.parse(await readFile(file, "utf8"));
    source = file;
    break;
  } catch {
    // fiche absente de ce répertoire
  }
}

if (!record) {
  console.error(`Aucun enregistrement « ${id} » dans corpus/.`);
  process.exit(1);
}

const brief = {
  id: record.id,
  canonical_name_fr: record.canonical_name_fr,
  canonical_name_en: record.canonical_name_en ?? null,
  attribution: record.attribution,
  evidence: record.evidence,
  pedagogy: record.pedagogy,
  // Le thème est une affirmation de rattachement : il se contrôle comme le reste, pas
  // seulement par l'intégrité de son identifiant.
  graph: record.graph,
};

brief._instructions =
  "Refaites votre propre recherche. Tranchez deux questions, dans cet ordre. " +
  "(1) LA PREUVE : attribution, source primaire, interprétation, concordance des sources. " +
  "(2) LA FIDÉLITÉ : confrontez chaque phrase de `pedagogy` au bloc `evidence` — cette prose " +
  "ajoute-t-elle quelque chose que les sources n'établissent pas ? Aucun chiffre ni aucune date " +
  "de la prose ne doit être absent de la preuve. " +
  `Rendez un verdict unique portant les deux jugements dans corpus/review/${id}.verdict.json.`;

const target = path.join(CORPUS_DIR, "review", `${id}.brief.json`);
await writeFile(target, `${JSON.stringify(brief, null, 2)}\n`, "utf8");

console.log(`Dossier aveugle : ${relative(target)}`);
console.log(
  `Retiré de ${relative(source)} : validation, provenance, scope, rejection_reason.`
);
