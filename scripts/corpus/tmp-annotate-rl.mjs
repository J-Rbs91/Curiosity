/**
 * rationalite-limitee : consignation de la sortie de lot.
 *
 * La fiche a épuisé ses deux tours de correction en passe B (B-tour1, B-tour2, B-tour3).
 * Le protocole interdit un quatrième tour. Rien de la fiche n'est modifié ici — ni la
 * prose, ni la preuve, ni les verdicts : on écrit seulement ce que l'enchaînement des
 * verdicts apprend, pour que la reprise ne recommence pas au même endroit.
 */

import { readFile, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const file = resolve(ROOT, "corpus/review/rationalite-limitee.json");
const record = JSON.parse(await readFile(file, "utf8"));

record._sortie_de_lot = {
  date: "2026-08-17",
  motif:
    "Deux tours de correction épuisés en passe B. Le protocole plafonne à deux tours : la fiche sort du lot et attend un complément documentaire plutôt que de retenir les autres. Aucun quatrième tour n'a été tenté.",

  historique: [
    "passe A — REWORK, puis PASS au tour 2 (corpus/review/.history/rationalite-limitee.verdict.A-tour2.json). La preuve, elle, est confirmée : source primaire vérifiée en première main sur le PDF de la Fondation Nobel, 37 énoncés recollationnés à leur page, citation clé vérifiée verbatim p. 356.",
    "passe B tour 1 — REWORK, no_new_claims: false.",
    "passe B tour 2 — REWORK, no_new_claims: false, interpretation: « trop-large ».",
    "passe B tour 3 — REWORK, no_new_claims: false, interpretation: « trop-etroite ».",
  ],

  ce_que_l_oscillation_apprend: {
    constat:
      "Le contrôleur a renvoyé la carte pour excès de portée, puis, une fois corrigée, pour défaut de portée. Une lecture rapide y verrait un contrôleur qui se contredit. La lecture des deux verdicts montre l'inverse : il est constant, et c'est le DOSSIER DE PREUVE qui envoie deux signaux incompatibles.",
    piece_en_cause:
      "La phrase de la p. 349 de la conférence Nobel — « a strong positive case for replacing the classical theory... when we examine situations involving decision making under uncertainty and imperfect competition » — est rangée dans `evidence.conditions.appears_when`, c'est-à-dire parmi les conditions d'apparition du PHÉNOMÈNE.",
    pourquoi_c_est_le_probleme:
      "Le contrôleur établit au tour 3 que cette phrase porte sur le domaine où l'argument plaide le REMPLACEMENT de la théorie classique en économie — un énoncé de programme théorique — et non sur l'extension du phénomène. Le même texte écrit p. 353 : « The phenomenon observed in Milwaukee is ubiquitous in human decision making. » Tant que la phrase de programme est classée comme condition d'apparition, le rédacteur qui suit le dossier restreint indûment la portée ; le rédacteur qui suit le texte l'étend et se fait reprendre au tour suivant. Les deux corrections successives sont donc rationnelles, et aucune ne peut aboutir.",
    ou_se_repare_la_fiche:
      "Dans `corpus/evidence/rationalite-limitee/evidence.primary-reading.json`, pas dans la prose. Il faut que le lecteur primaire tranche le statut de la p. 349 face à la p. 353 : condition d'apparition du phénomène, ou domaine de pertinence de l'argument économique. Une fois cet arbitrage écrit, la carte se rédige en une passe.",
    portee_de_ce_constat:
      "Ce n'est pas propre à cette fiche. Un dossier qui classe un énoncé de programme théorique parmi les conditions d'apparition d'un phénomène produira la même oscillation sur n'importe quel concept. C'est un point à vérifier en amont, à la lecture primaire.",
  },

  autres_defauts_releves_et_non_corriges: [
    "TRANSCRIPTION — `pedagogy.traceability[1]` porte une citation soudée : « the failures of omniscience are largely failures of knowing all the alternatives... and inability to calculate consequences ». Le texte de la p. 356 porte trois termes, dont le deuxième (« uncertainty about relevant exogenous events ») est supprimé, et la coupe est signalée par « ... » au lieu de « […] ». Défaut réel, à corriger — laissé en l'état ici parce qu'y toucher serait un quatrième tour de correction non contrôlé.",
    "COUVERTURE — ni `hook_question` ni `short_explanation` ne mentionnent la borne externe. Simon en pose deux (p. 353 : « both because of limited computational power and because of uncertainty in the external world »), et le bloc de preuve avertit lui-même qu'une présentation n'imputant la limite qu'au cerveau force le texte.",
    "CE QUI EST ACQUIS ET NE DOIT PAS ÊTRE REFAIT — le contrôleur confirme explicitement : « quand l'omniscience manque » est le bon point de référence et évite le piège « limitée = inférieure » ; la carte ne confond jamais rationalité limitée et biais ou irrationalité ; « options » applique correctement la note de traduction.",
  ],

  etat_reel_de_la_fiche:
    "IN_REVIEW. Preuve confirmée, prose non validée. Elle ne peut pas passer en corpus/validated/ : validation.pedagogy_review.verdict est en REWORK et no_new_claims est faux.",
};

record.provenance.updated_at = "2026-08-17";
record.provenance.runs.push({
  agent: "consignation de sortie de lot (scripts/corpus/tmp-annotate-rl.mjs)",
  at: "2026-08-17",
  action:
    "Ajout du bloc `_sortie_de_lot`. Aucun champ existant n'a été modifié : ni la prose, ni la preuve, ni les verdicts.",
});

await writeFile(file, `${JSON.stringify(record, null, 2)}\n`, "utf8");
console.log("rationalite-limitee : sortie de lot consignée, aucun champ existant modifié.");
