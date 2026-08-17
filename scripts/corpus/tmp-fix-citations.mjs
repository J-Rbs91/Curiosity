/**
 * Rangement de `primary_sources[].citation` sur les trois sources affichées sous la
 * citation de la carte.
 *
 * Même défaut que `term_origin.coined_by` et que `key_quotation.locator` : le champ est
 * rendu tel quel à l'écran, et il avait été rempli comme une notice de dossier. La source
 * de Reynaud allait jusqu'à afficher l'adresse postale du CNAM.
 *
 * Ce qui est retiré de `citation` est une information vraie et utile : elle passe dans
 * `_citation_note`, sur la même source, et reste sous les yeux du contrôleur.
 */

import { readFile, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

const coupes = {
  "regulation-controle-autonome": [
    {
      index: 0,
      citation:
        "Jean-Daniel Reynaud, « Les régulations dans les organisations : régulation de contrôle et régulation autonome », Revue française de sociologie, XXIX-1, janvier-mars 1988, p. 5-18.",
    },
  ],
  "organisation-genree": [
    {
      index: 0,
      citation:
        "Joan Acker, « Hierarchies, Jobs, Bodies: A Theory of Gendered Organizations », Gender & Society, vol. 4, n° 2, juin 1990, p. 139-158.",
    },
  ],
  "isomorphisme-institutionnel": [
    {
      index: 2,
      citation:
        "Paul DiMaggio et Walter Powell, « Le néo-institutionnalisme dans l'analyse des organisations », traduit par Delphine Dulong et Bastien François, Politix, vol. 10, n° 40, 1997, p. 113-154.",
    },
  ],
};

for (const [id, entrees] of Object.entries(coupes)) {
  const file = resolve(ROOT, `corpus/review/${id}.json`);
  const record = JSON.parse(await readFile(file, "utf8"));

  for (const { index, citation } of entrees) {
    const source = record.evidence.primary_sources[index];
    const avant = source.citation.length;
    source._citation_note = [
      `NOTICE COMPLÈTE ÉTABLIE PAR LE LECTEUR PRIMAIRE : ${source.citation}`,
      "RANGEMENT — `citation` est affichée telle quelle sous la citation de la carte et dans la liste des sources ; elle ne porte donc que la référence bibliographique. Rien n'a été modifié dans la notice ci-dessus.",
    ].join("\n\n");
    source.citation = citation;
    console.log(`${id} · primary_sources[${index}] : ${avant} → ${citation.length} caractères`);
  }

  record.provenance.updated_at = "2026-08-17";
  await writeFile(file, `${JSON.stringify(record, null, 2)}\n`, "utf8");
}
