/**
 * Rangement des derniers champs affichés — suite de tmp-fix-locators.mjs et
 * tmp-fix-citations.mjs, appliqué aux fiches que ces deux-là ne visaient pas.
 *
 * Même défaut, même règle. `project.mjs` construit la référence affichée sous la citation
 * en collant `primary_sources[i].citation` et `key_quotation.locator` ; les deux champs
 * sont donc lus par un lecteur, alors qu'ils avaient été remplis comme un dossier de
 * preuve. Il restait onze champs dans ce cas, jusqu'à 1 540 caractères pour un locator et
 * 976 pour une citation.
 *
 * Ce qui sort du champ affiché n'est pas supprimé : il passe dans `_locator_note` et
 * `_citation_note`, sur le même objet, où le contrôleur aveugle le retrouve mot pour mot.
 *
 * Deux précautions propres à ce lot :
 *
 * - Trois locators portaient un AVERTISSEMENT D'AFFICHAGE contre une fausse attribution —
 *   le passage de garbage-can-model est de 2012 et non de 1972, celui de rationalite-limitee
 *   de la conférence Nobel de 1978 et non d'Administrative Behavior, celui de
 *   zones-incertitude de l'article de 1960 et non des deux livres. La date est donc gardée
 *   DANS le pointeur affiché : c'est le seul endroit où elle protège encore le lecteur.
 *
 * - Pour les citations, la coupe ne porte jamais sur la référence elle-même (auteurs,
 *   titre, éditeur, année, pages), mais sur ce qui s'y était ajouté : listes de rééditions,
 *   collections, LCCN, notes liminaires, affiliations, remarques d'OCR.
 */

import { readFile, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

const pointeurs = {
  "deplacement-des-buts": "p. 563, colonne de gauche",
  "garbage-can-model": "Section « The Progeny of Garbage Can Ideas », p. 28 (texte de 2012)",
  "rationalite-limitee":
    "Conférence Nobel de 1978, section « CHARACTERIZING BOUNDED RATIONALITY », p. 356",
  "zones-incertitude":
    "Section « L'apparition de nouvelles relations de pouvoir », p. 73 (article de 1960)",
};

const coupes = {
  "deplacement-des-buts": [
    {
      index: 1,
      citation:
        "Robert K. Merton, Social Theory and Social Structure, New York, The Free Press, 1968 [1949], ISBN 0-02-921130-1.",
    },
  ],
  "garbage-can-model": [
    {
      index: 1,
      citation:
        "Michael D. Cohen, James G. March et Johan P. Olsen, « ‘A Garbage Can Model’ at Forty », in Alessandro Lomi et J. Richard Harrison (dir.), The Garbage Can Model of Organizational Choice, Bingley, Emerald, 2012, p. 19-30.",
    },
  ],
  "isomorphisme-institutionnel": [
    {
      index: 1,
      citation:
        "Paul J. DiMaggio et Walter W. Powell, « The Iron Cage Revisited », in W. W. Powell et P. J. DiMaggio (dir.), The New Institutionalism in Organizational Analysis, Chicago, The University of Chicago Press, 1991, p. 63-82.",
    },
  ],
  "regulation-controle-autonome": [
    {
      index: 1,
      citation:
        "Jean-Daniel Reynaud, « Conflit et régulation sociale. Esquisse d'une théorie de la régulation conjointe », Revue française de sociologie, XX-2, avril-juin 1979, p. 367-376.",
    },
  ],
  "zones-incertitude": [
    {
      index: 7,
      citation:
        "Michel Crozier, Le Phénomène bureaucratique, Paris, Éditions du Seuil, 1963, 414 p. (rééd. « Points », 1993, ISBN 2-02-000603-0).",
    },
    {
      index: 8,
      citation:
        "Michel Crozier et Erhard Friedberg, L'Acteur et le système. Les contraintes de l'action collective, Paris, Éditions du Seuil, 1977, 436 p., ISBN 2-02-004677-6.",
    },
  ],
};

const RANGEMENT_LOCATOR =
  "RANGEMENT — `locator` est affiché tel quel sur la carte, à la suite de la référence de la source ; il ne porte donc que le pointeur. Le détail de vérification ci-dessus n'a pas été modifié d'un mot.";
const RANGEMENT_CITATION =
  "RANGEMENT — `citation` est affichée telle quelle sous la citation de la carte et dans la liste des sources ; elle ne porte donc que la référence bibliographique. Rien n'a été modifié dans la notice ci-dessus.";

const ids = new Set([...Object.keys(pointeurs), ...Object.keys(coupes)]);

for (const id of ids) {
  const file = resolve(ROOT, `corpus/review/${id}.json`);
  const record = JSON.parse(await readFile(file, "utf8"));

  const pointeur = pointeurs[id];
  if (pointeur) {
    const q = record.evidence.key_quotation;
    if (q._locator_note) throw new Error(`${id} : _locator_note déjà présent, rangement refait ?`);
    q._locator_note = [
      `LOCALISATION COMPLÈTE ÉTABLIE PAR LE LECTEUR PRIMAIRE : ${q.locator}`,
      RANGEMENT_LOCATOR,
      q._card_fit_note ? `SUR LA FORME COURTE RETENUE : ${q._card_fit_note}` : null,
    ]
      .filter(Boolean)
      .join("\n\n");

    const avant = q.locator.length;
    q.locator = pointeur;
    console.log(`${id} · locator : ${avant} → ${pointeur.length} caractères`);
  }

  for (const { index, citation } of coupes[id] ?? []) {
    const source = record.evidence.primary_sources[index];
    if (source._citation_note)
      throw new Error(`${id}[${index}] : _citation_note déjà présent, rangement refait ?`);
    const avant = source.citation.length;
    source._citation_note = [
      `NOTICE COMPLÈTE ÉTABLIE PAR LE LECTEUR PRIMAIRE : ${source.citation}`,
      RANGEMENT_CITATION,
    ].join("\n\n");
    source.citation = citation;
    console.log(`${id} · primary_sources[${index}] : ${avant} → ${citation.length} caractères`);
  }

  record.provenance.updated_at = "2026-08-17";
  await writeFile(file, `${JSON.stringify(record, null, 2)}\n`, "utf8");
}
