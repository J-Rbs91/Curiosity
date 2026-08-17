/**
 * Rangement de `attribution.term_origin` et de `associated_author` pour l'affichage.
 *
 * La projection (scripts/corpus/lib/project.mjs) compose la ligne d'attribution de la
 * carte avec « Terme forgé par {coined_by} ({coined_in}) ». Ces deux champs attendent donc
 * un NOM et une RÉFÉRENCE. L'analyste de réception y avait écrit son raisonnement complet
 * — ce qui est excellent dans un dossier de preuve, mais illisible sur une carte : la
 * ligne d'attribution de l'isomorphisme faisait à elle seule plus de 1 600 caractères.
 *
 * Rien n'est retiré du dossier : la prose est DÉPLACÉE dans `note`, sous un intitulé qui
 * dit d'où elle vient. Seuls changent le champ où elle se trouve et sa forme d'affichage.
 */

import { readFile, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

const fixes = {
  "inertie-structurelle-et-selection": {
    /*
     * `null` : l'expression est de Hannan et Freeman eux-mêmes. La projection n'ajoute
     * alors aucune clause « Terme forgé par… », ce qui est exact — le crédit qu'ils
     * donnent à leurs prédécesseurs porte sur l'IDÉE, pas sur le terme, et se lit dans
     * `note`.
     */
    coined_by: null,
    associated_author: "l'écologie des populations, plutôt que sous l'un des deux noms",
  },
  "isomorphisme-institutionnel": {
    coined_by: "Amos Hawley",
    coined_in:
      "« Human ecology », in D. L. Sills (dir.), International Encyclopedia of the Social Sciences, New York, Macmillan, 1968, p. 328-337 — référence donnée par DiMaggio et Powell eux-mêmes, p. 149",
    associated_author: "« DiMaggio et Powell », toujours cités ensemble",
  },
};

for (const [id, fix] of Object.entries(fixes)) {
  const file = resolve(ROOT, `corpus/review/${id}.json`);
  const record = JSON.parse(await readFile(file, "utf8"));
  const t = record.attribution.term_origin;

  const deplace = [];
  if (t.coined_by) deplace.push(`CE QUI ÉTAIT EN \`coined_by\` : ${t.coined_by}`);
  if ("coined_in" in fix && t.coined_in)
    deplace.push(`CE QUI ÉTAIT EN \`coined_in\` : ${t.coined_in}`);

  t.note = [
    ...deplace,
    t.note ? `NOTE D'ORIGINE : ${t.note}` : null,
    "RANGEMENT — `coined_by` et `coined_in` sont affichés tels quels sur la carte par la projection ; ils ne peuvent donc porter qu'un nom et une référence. Le raisonnement de l'analyste de réception, déplacé ici, n'a pas été modifié d'un mot.",
  ]
    .filter(Boolean)
    .join("\n\n");

  t.coined_by = fix.coined_by;
  if ("coined_in" in fix) t.coined_in = fix.coined_in;

  record.attribution.associated_author = fix.associated_author;
  record.provenance.updated_at = "2026-08-17";

  await writeFile(file, `${JSON.stringify(record, null, 2)}\n`, "utf8");
  console.log(`${id} : term_origin rangé, associated_author resserré.`);
}
