#!/usr/bin/env node
/**
 * `npm run corpus:brief -- <id>`
 *
 * Produit le dossier remis au contrôleur, dans corpus/review/<id>.brief.json.
 *
 * Sa raison d'être est de rendre l'aveuglement **mécanique** plutôt que promis : le
 * contrôleur ne doit pas savoir ce que les agents amont pensent de la fiche. Tout ce qui
 * porte une confiance, une intention ou un historique est retiré ici — verdict déjà rendu,
 * notes internes, chemin du dossier documentaire. Il reste la carte et ses sources, c'est-
 * à-dire exactement ce qu'un lecteur verra.
 *
 * C'est le changement de fond du dispositif. Le dossier remis pesait auparavant jusqu'à
 * 171 000 caractères — mécanisme détaillé, conditions d'apparition, contresens répertoriés,
 * notes de traduction, réception — pour une carte de 600. Le contrôle s'y épuisait, et les
 * huit fiches instruites ont toutes été renvoyées en correction sur des champs que personne
 * n'affiche. On ne contrôle plus que ce qui s'affiche.
 */

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { CORPUS_DIR, RECORD_DIRS, relative } from "./lib/io.mjs";

const [id] = process.argv.slice(2);

if (!id) {
  console.error("usage : npm run corpus:brief -- <id>");
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
  console.error(`Aucune carte « ${id} » dans corpus/.`);
  process.exit(1);
}

const brief = {
  id: record.id,
  title: record.title,
  // Le thème est une affirmation de rattachement : il se contrôle comme le reste.
  themes: record.themes,
  theme_labels: record.theme_labels ?? {},
  authors: record.authors,
  attribution_note: record.attribution_note ?? null,
  quotation: record.quotation ?? null,
  hook: record.hook,
  summary: record.summary,
  sources: record.sources,
};

brief._instructions =
  "Refaites votre propre recherche, sans rien supposer de ce qui précède. Quatre questions, " +
  "et rien d'autre. " +
  "(1) ATTRIBUTION : le concept est-il de cet auteur ? Association n'est pas paternité. " +
  "(2) CITATION : le passage est-il verbatim, à l'endroit annoncé, dans un texte que vous avez " +
  "ouvert vous-même ? Une traduction se déclare. " +
  "(3) SOURCES : chaque référence affichée résout-elle vers ce qu'elle annonce ? " +
  "(4) PROSE : `hook` et `summary` affirment-ils quelque chose que les sources ne portent pas ? " +
  "Ne relevez que ce qui touche l'un de ces quatre points : ce dossier est la carte entière, " +
  "il n'y a rien derrière à vérifier. " +
  `Rendez un verdict dans corpus/review/${id}.verdict.json, aux champs attribution, quotation, ` +
  "sources, prose, verdict (PASS/REWORK/REJECT) et notes.";

const target = path.join(CORPUS_DIR, "review", `${id}.brief.json`);
await writeFile(target, `${JSON.stringify(brief, null, 2)}\n`, "utf8");

console.log(`Dossier aveugle : ${relative(target)}`);
console.log(`Retiré de ${relative(source)} : review, notes, dossier, status.`);
