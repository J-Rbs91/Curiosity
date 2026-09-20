import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

/**
 * Le pack de preuve ne ramassait que `corpus/evidence/<id>/lecture.json`, alors que le nom de
 * ce fichier n'est qu'une convention tardive. Neuf dossiers — les plus épais du dépôt, ceux de
 * la sociologie des organisations — portent leur lecture dans `evidence.primary-reading.json`
 * et leur réception dans `evidence.reception.json` ; six autres déposent la réception à côté
 * d'un `lecture.json`. Tout cela était invisible au fact-check, qui se rabattait alors sur le
 * seul enregistrement validé sans jamais le dire.
 *
 * Le dossier d'une carte est donc pris pour ce qu'il est : son répertoire entier.
 */

/**
 * Ce que le scout dépose n'est pas une preuve de lecture. `scouting.json` enregistre où l'on a
 * cherché, ce qui semblait atteignable et pourquoi le candidat a été retenu — des jugements
 * formés avant toute lecture. L'admettre au pack offrirait au mappeur des appuis qui ne
 * prétendent rien avoir lu.
 */
export const FICHIERS_HORS_PREUVE = new Set(["scouting.json"]);

/**
 * Les fichiers de preuve du dossier d'une carte, triés par nom pour que deux exécutions
 * produisent le même pack.
 */
export function listEvidenceFiles(evidenceDir) {
  if (!existsSync(evidenceDir) || !statSync(evidenceDir).isDirectory()) return [];

  return readdirSync(evidenceDir)
    .filter((name) => name.endsWith(".json"))
    .filter((name) => !FICHIERS_HORS_PREUVE.has(name))
    .sort()
    .map((name) => ({ name, file: path.join(evidenceDir, name) }));
}

/**
 * L'origine d'un support nomme le fichier dont il sort. Sans cela, deux fichiers du même
 * dossier qui portent tous deux une clé `evidence` rendraient des chemins JSON identiques, et
 * leurs supports se confondraient dans le pack.
 */
export function evidenceOrigin(fileName) {
  return `evidence:${fileName}`;
}

/**
 * Le dossier d'une carte tel qu'un contrôle de citation doit le voir : l'enregistrement validé
 * **et** les fichiers de preuve, en un seul texte brut où chercher une phrase entre guillemets.
 *
 * L'enregistrement seul ne suffit pas, parce que c'est un résumé. Sur
 * `regulation-controle-autonome`, les verbatim des p. 10 et p. 15-16 sont exacts dans une
 * lecture primaire déclarée `full-text` et absents de l'enregistrement validé : le contrôle des
 * citations les signalait comme non sourcés. C'est le même angle mort que celui du pack de
 * preuve, à un composant près, et il coûte la même chose — un avertissement faux apprend à
 * ignorer les avertissements, jusqu'au jour où l'un d'eux est vrai.
 *
 * On concatène le texte brut plutôt que d'énumérer des champs : décider d'avance où une
 * citation a le droit de se trouver dans un dossier reviendrait à recréer la convention de
 * nommage que ce module existe pour ne plus croire.
 */
export function dossierBrut(record, evidenceDir) {
  const preuves = listEvidenceFiles(evidenceDir).map(({ file }) => readFileSync(file, "utf8"));
  return [JSON.stringify(record), ...preuves].join("\n");
}
