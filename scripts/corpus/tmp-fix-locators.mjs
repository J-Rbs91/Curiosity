/**
 * Rangement de `key_quotation.locator`.
 *
 * La projection affiche ce champ tel quel sous la citation, à la suite de la référence de
 * la source. Il ne peut donc porter qu'un POINTEUR — section, page — permettant de rouvrir
 * le texte au bon endroit. Les lecteurs primaires y avaient joint, avec raison dans un
 * dossier de preuve, le détail de leur vérification : coupure de page, relecture sur
 * l'image plutôt que sur l'OCR, phrase complète d'où la coupe est tirée. Le rendu à
 * l'écran a montré ce que cela donne — jusqu'à 458 caractères de prose de contrôle sur une
 * carte qui doit tenir dans un écran de téléphone.
 *
 * Rien n'est supprimé : ce qui sortait du pointeur passe dans `_locator_note`, à côté, et
 * reste sous les yeux du contrôleur aveugle.
 */

import { readFile, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

const pointeurs = {
  "inertie-structurelle-et-selection": "Section « CONCLUSIONS », p. 162-163",
  "isomorphisme-institutionnel": "Résumé de l'article, p. 147",
  "organisation-genree": "Section « ORGANIZATION AS GENDERED PROCESSES », p. 149",
  "regulation-controle-autonome": "Section « 4. — Des relations de pouvoir spécifiques », p. 12",
};

for (const [id, pointeur] of Object.entries(pointeurs)) {
  const file = resolve(ROOT, `corpus/review/${id}.json`);
  const record = JSON.parse(await readFile(file, "utf8"));
  const q = record.evidence.key_quotation;

  q._locator_note = [
    `LOCALISATION COMPLÈTE ÉTABLIE PAR LE LECTEUR PRIMAIRE : ${q.locator}`,
    "RANGEMENT — `locator` est affiché tel quel sur la carte, à la suite de la référence de la source ; il ne porte donc que le pointeur. Le détail de vérification ci-dessus n'a pas été modifié d'un mot.",
    q._card_fit_note ? `SUR LA FORME COURTE RETENUE : ${q._card_fit_note}` : null,
  ]
    .filter(Boolean)
    .join("\n\n");

  const avant = q.locator.length;
  q.locator = pointeur;
  record.provenance.updated_at = "2026-08-17";

  await writeFile(file, `${JSON.stringify(record, null, 2)}\n`, "utf8");
  console.log(`${id} : locator ${avant} → ${pointeur.length} caractères`);
}
