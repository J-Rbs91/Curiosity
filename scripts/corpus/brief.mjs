#!/usr/bin/env node
/**
 * `node scripts/corpus/brief.mjs <id> --pass=A|B`
 *
 * Produit le dossier remis au contrôleur aveugle, dans corpus/review/<id>.brief.json.
 *
 * Sa raison d'être est de rendre l'aveuglement **mécanique** plutôt que promis : le
 * contrôleur ne doit pas savoir ce que les agents amont pensent de la fiche. Tout ce qui
 * porte une confiance, une intention ou un historique est retiré ici — verdicts déjà
 * rendus, drapeaux de confiance, journal des agents, justification d'entrée dans le
 * périmètre. Il reste les affirmations, l'attribution et les sources.
 *
 * Passe A : la preuve seule, avant toute rédaction pédagogique.
 * Passe B : la preuve et la prose, pour la seule question « cette prose ajoute-t-elle
 *           quelque chose que les sources n'établissent pas ? ».
 */

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { CORPUS_DIR, RECORD_DIRS, relative } from "./lib/io.mjs";

const [id, ...flags] = process.argv.slice(2);
const pass = (flags.find((f) => f.startsWith("--pass="))?.split("=")[1] ?? "A").toUpperCase();

if (!id || !["A", "B"].includes(pass)) {
  console.error("usage : node scripts/corpus/brief.mjs <id> --pass=A|B");
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
  pass,
  id: record.id,
  canonical_name_fr: record.canonical_name_fr,
  canonical_name_en: record.canonical_name_en ?? null,
  attribution: record.attribution,
  evidence: record.evidence,
};

if (pass === "B") {
  brief.pedagogy = record.pedagogy;
  // Une relation du graphe est une affirmation : « filiation documentée » se contrôle
  // comme le reste, pas seulement par l'intégrité des identifiants.
  brief.graph = record.graph;
}

brief._instructions =
  pass === "A"
    ? "Refaites votre propre recherche. Tranchez fait par fait : attribution, source primaire, interprétation, concordance des sources. Rendez un verdict PASS / REWORK / REJECT dans corpus/review/" +
      id +
      ".verdict.json."
    : "Confrontez chaque phrase de `pedagogy` au bloc `evidence`. Question unique : cette prose ajoute-t-elle quelque chose que les sources n'établissent pas ? Rendez un verdict dans corpus/review/" +
      id +
      ".verdict.json.";

const target = path.join(CORPUS_DIR, "review", `${id}.brief.json`);
await writeFile(target, `${JSON.stringify(brief, null, 2)}\n`, "utf8");

console.log(`Dossier aveugle (passe ${pass}) : ${relative(target)}`);
console.log(
  `Retiré de ${relative(source)} : validation, provenance, scope${pass === "A" ? ", graph" : ""}, rejection_reason.`
);
