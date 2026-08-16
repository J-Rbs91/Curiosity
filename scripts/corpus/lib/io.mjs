/**
 * Entrées/sorties du pipeline corpus : lecture des enregistrements, lecture du contenu
 * applicatif. Tout ce qui touche au disque est ici, pour que validate.mjs et project.mjs
 * restent purs et testables.
 */

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

export const ROOT = path.resolve(import.meta.dirname, "../../..");
export const CORPUS_DIR = path.join(ROOT, "corpus");
export const CONTENT_DIR = path.join(ROOT, "src", "content");
export const GENERATED_FILE = path.join(CONTENT_DIR, "generated", "concepts.generated.ts");

/** Répertoires porteurs d'état. `_template/`, `schema/` et `evidence/` n'en sont pas. */
export const RECORD_DIRS = ["candidates", "review", "validated", "rejected"];

async function readJson(file) {
  const raw = await readFile(file, "utf8");
  try {
    return JSON.parse(raw);
  } catch (error) {
    throw new Error(`JSON illisible : ${path.relative(ROOT, file)} — ${error.message}`);
  }
}

/** Tous les enregistrements du corpus, avec le répertoire qui porte leur état. */
export async function loadRecords() {
  const records = [];
  for (const dir of RECORD_DIRS) {
    let entries = [];
    try {
      entries = await readdir(path.join(CORPUS_DIR, dir));
    } catch {
      continue; // répertoire absent : rien à charger, pas une erreur
    }
    for (const entry of entries.filter((e) => e.endsWith(".json")).sort()) {
      const file = path.join(CORPUS_DIR, dir, entry);
      const record = await readJson(file);
      records.push({ dir, file, record });
    }
  }
  return records;
}

/**
 * Contenu applicatif actuel. Les modules de src/content sont du TypeScript sans
 * dépendance de valeur : Node les charge directement (type stripping), ce qui évite de
 * dupliquer la liste des thèmes ou des auteurs dans le pipeline.
 */
export async function loadAppContent() {
  const load = async (name) => import(pathToFileURL(path.join(CONTENT_DIR, `${name}.ts`)).href);
  const [themes, authors, concepts, caseStudies] = await Promise.all([
    load("themes"),
    load("authors"),
    load("concepts"),
    load("case-studies"),
  ]);
  return {
    themes: themes.themes,
    authors: authors.authors,
    legacyConcepts: concepts.concepts,
    caseStudies: caseStudies.caseStudies,
  };
}

export function relative(file) {
  return path.relative(ROOT, file);
}
