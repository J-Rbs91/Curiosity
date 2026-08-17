/**
 * couplage-lache : enregistrement CANDIDAT, pas fiche de review.
 *
 * Le dossier de preuve est complet du côté de la réception, mais l'article fondateur
 * (Weick 1976) n'a jamais pu être ouvert. Le lecteur primaire écrit lui-même que sa
 * chaîne « NE PASSE PAS le test de suffisance » : elle ne dit ni ce qui déclenche le
 * relâchement, ni ce qui l'intensifie, ni ce qui le fait disparaître. Une carte écrite
 * là-dessus enseignerait un commentaire rétrospectif d'une page à la place du texte.
 *
 * Le concept reste donc en `corpus/candidates/`, avec son blocage nommé et la voie de
 * déblocage écrite. Ce n'est pas un échec : c'est le résultat.
 */

import { readFile, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const ID = "couplage-lache";
const TODAY = "2026-08-17";

const read = async (p) => JSON.parse(await readFile(resolve(ROOT, p), "utf8"));
const arr = (v) => (Array.isArray(v) ? v : []);

const primary = await read(`corpus/evidence/${ID}/evidence.primary-reading.json`);
const reception = await read(`corpus/evidence/${ID}/evidence.reception.json`);
const pe = primary.evidence;
const re = reception.evidence;
const attribution = reception.attribution ?? primary.attribution_input;

const keepBC = (list) => arr(list).filter((s) => !s.level || s.level === "B" || s.level === "C");
const parked = [...arr(re.secondary_sources), ...arr(re.francophone_sources)].filter(
  (s) => s.level && s.level !== "B" && s.level !== "C"
);

const record = {
  $schema: "../schema/concept.record.schema.json",
  id: ID,
  slug: ID,
  status: "CANDIDATE",
  canonical_name_fr: "Couplage lâche",
  canonical_name_en: primary.canonical_name_en ?? null,

  _pourquoi_candidat_et_non_review: {
    blocage:
      "L'article fondateur — Karl E. Weick, « Educational Organizations as Loosely Coupled Systems », Administrative Science Quarterly, 21(1), 1976, p. 1-19, DOI 10.2307/2391875 — n'a pas pu être ouvert. Quinze voies d'accès ont été essayées (voir `acces_tente` dans le fragment de lecture primaire) ; aucune n'a rendu le texte.",
    consequence:
      "Tout ce que le dossier établit vient d'un commentaire rétrospectif d'UNE PAGE écrit treize ans après (Current Contents, 1989). Le lecteur primaire consigne lui-même que sa chaîne d'étapes « NE PASSE PAS le test de suffisance » : conditions d'apparition, d'intensification et de disparition sont toutes en « NON ÉTABLI ». Un lecteur ne pourrait pas reconnaître le mécanisme dans une organisation qu'il n'a jamais vue décrite.",
    pourquoi_pas_de_carte:
      "Écrire la carte reviendrait à enseigner le commentaire de 1989 à la place de l'article de 1976, et à faire passer pour le concept ce que son auteur en disait après coup. La citation disponible porte d'ailleurs un `_avertissement_obligatoire` du lecteur primaire : elle est de 1989, pas de 1976.",
    voie_de_deblocage:
      "Ouvrir l'ASQ 21(1), 1976, p. 1-19 — par JSTOR, par un dépôt institutionnel, ou par la réimpression de 2012 chez Springer (DOI 10.1007/978-3-642-27922-5_25, ISBN 9783642279218), qui n'a été atteinte qu'en métadonnées. À défaut, Orton & Weick 1990 (Academy of Management Review), resté fermé en HTTP 403, donnerait la forme savante actuelle du concept — mais ce serait une fiche sur la relecture de 1990, et elle devrait le dire dans son titre.",
    ce_qui_est_deja_acquis:
      "La réception est instruite et solide : l'attribution du TEXTE de 1976 à Weick seul, l'antériorité du terme (Glassman 1973), la genèse collective revendiquée par l'auteur lui-même, et le fait que la définition citée aujourd'hui comme « la » définition de Weick est en réalité celle d'Orton & Weick 1990. Ce travail n'est pas à refaire.",
  },

  scope: {
    in_scope: true,
    rationale:
      "Le concept porte sur la façon dont les parties d'une organisation tiennent ensemble — donc sur la coordination elle-même — et il est rattaché sans contestation à Weick. Il reste dans le périmètre ; ce qui manque n'est pas la pertinence, c'est l'accès au texte.",
  },

  attribution: {
    authors: arr(attribution.authors).map((x) => ({
      name: x.name,
      app_author_id: x.app_author_id ?? null,
    })),
    authorship: attribution.authorship,
    associated_author:
      attribution.authorship === "SOLE_AUTHOR" ? null : attribution.associated_author ?? null,
    term_origin: attribution.term_origin ?? null,
    _reception_verdict: attribution.verdict ?? null,
    _genese_collective: attribution.genese_collective_revendiquee_par_l_auteur ?? null,
    _forme_savante_actuelle: attribution.la_forme_savante_actuelle_est_coecrite ?? null,
  },

  evidence: {
    concept_definition: pe.concept_definition,
    mechanism: arr(pe.mechanism),
    conditions: pe.conditions,

    /*
     * `null`, et c'est un résultat, pas un oubli. Le seul passage citable ouvert est de
     * 1989 et porte un avertissement obligatoire du lecteur primaire : il n'est pas de
     * l'article de référence. Il est conservé ci-dessous pour que le travail ne soit pas
     * perdu, hors du champ que l'application affiche.
     */
    key_quotation: null,
    _passage_citable_ecarte: {
      motif:
        "Ce passage est de 1989, PAS de l'article de 1976, et il fait 367 caractères pour 150 admis sur la carte. L'afficher sous le nom du concept ferait passer un commentaire rétrospectif pour le texte fondateur.",
      passage: pe.key_quotation,
    },

    primary_sources: arr(pe.primary_sources),
    secondary_sources: keepBC(re.secondary_sources),
    francophone_sources: keepBC(re.francophone_sources),
    _sources_hors_niveaux_b_c: parked,
    translation_notes: [...arr(pe.translation_notes), ...arr(re.translation_notes)],
    known_ambiguities: [...arr(pe.known_ambiguities), ...arr(re.known_ambiguities)],
    common_misinterpretations: [
      ...arr(pe.common_misinterpretations),
      ...arr(re.common_misinterpretations),
    ],
    limitations: arr(pe.limitations),
    reception: re.reception ?? { consensus: null, debates: [], critiques: [] },
  },

  pedagogy: {
    hook_question: null,
    short_explanation: null,
    traceability: [],
  },

  graph: {
    themes: ["organisation-formelle-reelle"],
    difficulty: 3,
    difficulty_rationale:
      "Estimation provisoire, à refaire quand l'article de 1976 aura été lu : le peu qui est établi montre un concept dont la difficulté tient à ce qu'il refuse les deux simplifications habituelles (organisation lâche OU couplée ; lâche au début PUIS couplée).",
    related: [],
    opposites: [],
    prerequisites: [],
    deepens_into: [],
  },

  validation: {
    primary_source_confirmed: false,
    secondary_confirmation: keepBC(re.secondary_sources).length > 0,
    francophone_layer_searched: true,
    evidence_review: { verdict: "PENDING", notes: [], rounds: 0 },
    pedagogy_review: { verdict: "PENDING", no_new_claims: null, notes: [], rounds: 0 },
    confidence_flags: [
      "BLOQUANT — l'article de 1976 n'a pas été ouvert. Aucune carte ne peut être écrite tant qu'il ne l'est pas.",
      ...arr(primary.validation_input?.confidence_flags),
      ...arr(reception.non_etabli).map((x) =>
        typeof x === "string" ? `RÉCEPTION — NON ÉTABLI : ${x}` : x
      ),
    ],
  },

  rejection_reason: null,

  provenance: {
    created_at: TODAY,
    updated_at: TODAY,
    pipeline_version: "1",
    candidate_origin: "cartographie + scout",
    runs: [
      primary.provenance_fragment ?? { agent: "corpus-primary-reader", at: "2026-08-16" },
      reception.provenance_fragment ?? { agent: "corpus-reception-analyst", at: "2026-08-16" },
      {
        agent: "composition mécanique (scripts/corpus/tmp-compose-candidate.mjs)",
        at: TODAY,
        action:
          "Fusion des deux fragments en enregistrement CANDIDAT. Aucune carte n'a été rédigée : le dossier ne le permet pas.",
      },
    ],
  },
};

await writeFile(
  resolve(ROOT, `corpus/candidates/${ID}.json`),
  `${JSON.stringify(record, null, 2)}\n`,
  "utf8"
);
console.log(
  `${ID} → corpus/candidates/ · ${record.evidence.primary_sources.length} sources primaires dont ${
    record.evidence.primary_sources.filter((s) => s.consulted !== "metadata-only").length
  } ouverte(s) · citation : null (déclarée)`
);
