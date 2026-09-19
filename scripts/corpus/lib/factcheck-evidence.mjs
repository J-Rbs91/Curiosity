import { existsSync, readdirSync, statSync } from "node:fs";
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
