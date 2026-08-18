#!/usr/bin/env node
/**
 * `npm run corpus:deepen`
 *
 * Projette corpus/deepenings/*.json vers src/content/generated/deepenings.generated.ts.
 *
 * Deux fichiers sortent, et c'est délibéré. Le premier porte les textes — une trentaine de
 * milliers de mots, que seul l'écran d'approfondissement charge. Le second ne porte que les
 * identifiants, il pèse quelques centaines d'octets, et c'est lui que le reste de
 * l'application interroge pour savoir si le bouton mène quelque part. Sans cette séparation,
 * ouvrir la carte du jour téléchargerait tous les approfondissements du corpus pour décider
 * de l'apparence d'un bouton.
 *
 * Refuse de produire quoi que ce soit si un approfondissement ne passe pas le contrôle : un
 * texte affiché sans carte validée derrière lui serait exactement ce que le dispositif
 * documentaire existe pour empêcher.
 *
 * Deux options, et elles existent pour la même raison : les approfondissements s'écrivent en
 * parallèle, un agent par carte. `--check` contrôle sans écrire, `--only=<id>` ne regarde
 * qu'un fichier. Sans elles, trente agents projetteraient en même temps vers le même fichier
 * généré, et chacun validerait au passage les fichiers que les autres sont en train
 * d'écrire : le contrôle échouerait sur des textes qui n'ont rien à se reprocher.
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { CONTENT_DIR, CORPUS_DIR, loadRecords, relative } from "./lib/io.mjs";
import {
  countWords,
  projectDeepening,
  unsourcedQuotations,
  validateDeepening,
} from "./lib/deepenings.mjs";

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

/*
 * Projeter un seul approfondissement écraserait le fichier généré avec lui seul : tous les
 * autres disparaîtraient de l'application sans qu'aucune erreur ne le dise. `--only` ne
 * s'emploie donc que pour contrôler.
 */
if (only && !checkOnly) {
  console.error("--only ne s'emploie qu'avec --check : projeter un seul texte effacerait les autres.");
  process.exit(1);
}

const records = (await loadRecords()).filter(
  ({ dir, record }) => dir === "validated" && typeof record?.id === "string"
);
const validatedIds = new Set(records.map(({ record }) => record.id));

/*
 * L'enregistrement sérialisé, tel quel : c'est contre lui que se vérifient les citations du
 * texte. Le comparer à l'objet plutôt qu'au fichier serait plus propre en apparence, mais
 * une citation peut se trouver n'importe où dans la fiche — dans les notes de rédaction,
 * dans le bloc du contrôleur, dans le libellé d'une source —, et énumérer ces endroits
 * reviendrait à décider d'avance où un rédacteur a le droit de citer.
 */
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

  // Le nom du fichier est l'identifiant : deux fichiers pour une même carte projetteraient
  // deux textes dont un seul serait affiché, sans que rien ne dise lequel.
  const attendu = `${record?.conceptId}.json`;
  if (record?.conceptId && entry !== attendu)
    errors.push(`nom de fichier : attendu ${attendu}`);
  if (record?.conceptId && vus.has(record.conceptId))
    errors.push(`conceptId en double : ${record.conceptId}`);

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

/*
 * Les citations qui ne se retrouvent pas dans la fiche. Averti, jamais bloquant : les
 * guillemets français servent aussi à mettre un mot en relief, et un contrôle bloquant sur
 * cette ambiguïté ferait retirer les guillemets plutôt que vérifier les citations.
 */
const suspectes = deepenings
  .map((d) => ({ id: d.conceptId, citations: unsourcedQuotations(d, dossiers.get(d.conceptId)) }))
  .filter(({ citations }) => citations.length > 0);

if (suspectes.length > 0) {
  console.warn("\nCitations absentes de la fiche, à relire :\n");
  for (const { id, citations } of suspectes) {
    console.warn(`corpus/deepenings/${id}.json`);
    for (const citation of citations) console.warn(`  ? « ${citation} »`);
  }
  console.warn(
    "\nUne mise en relief entre guillemets est normale. Une phrase attribuée à un auteur " +
      "et absente du dossier ne l'est pas.\n"
  );
}

if (checkOnly) {
  const total = deepenings.reduce((n, d) => n + countWords(d), 0);
  console.log(`${projected.length} approfondissement(s) contrôlé(s), ${total} mots. Rien projeté.`);
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
/*
 * Les seuls identifiants, sans les textes. Ce module est chargé partout où un bouton doit
 * savoir s'il mène quelque part ; celui qui porte les textes ne l'est que par l'écran qui
 * les affiche.
 */

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
    `${total} mots au total, ${Math.round(total / (projected.length || 1))} en moyenne`
);

// Une carte validée sans approfondissement n'est pas une erreur — le bouton retombe alors
// sur le passage de relais vers une IA —, mais c'est la file de travail, et elle doit se voir.
const sans = [...validatedIds].filter((id) => !vus.has(id)).sort();
if (sans.length > 0)
  console.log(`\n${sans.length} carte(s) validée(s) sans approfondissement :\n  ${sans.join("\n  ")}`);
