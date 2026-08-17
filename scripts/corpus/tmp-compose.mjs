/**
 * Composition d'une fiche de review à partir des deux fragments de corpus/evidence/<id>/.
 *
 * Script de circonstance : la chaîne d'agents ayant été coupée en cours de session, la
 * fusion mécanique des fragments est faite ici plutôt que par corpus-card-writer. Il ne
 * FABRIQUE rien — il recopie les fragments, et n'ajoute que ce qui est écrit dans la
 * table `authored` ci-dessous, seule partie rédigée.
 */

import { readFile, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const TODAY = "2026-08-17";

const read = async (p) => JSON.parse(await readFile(resolve(ROOT, p), "utf8"));
const arr = (v) => (Array.isArray(v) ? v : []);

/* ------------------------------------------------------------------ *
 * La seule partie rédigée. Tout le reste est recopié des fragments.
 * ------------------------------------------------------------------ */
const authored = {
  "inertie-structurelle-et-selection": {
    canonical_name_fr: "Inertie structurelle et sélection",
    scope_rationale:
      "Le concept répond à une question que les théories de l'adaptation laissent ouverte : pourquoi les organisations changent-elles si peu, et si lentement, alors que leurs dirigeants le veulent. Il déplace l'explication du côté de ce qui fait la fiabilité d'une organisation, et il est enseignable : un lecteur reconnaît le mécanisme dans toute organisation dont la valeur tient à ce qu'elle refait la même chose à l'identique.",
    hook_question:
      "Ce qui rend une organisation fiable peut-il être ce qui l'empêche de changer ?",
    short_explanation:
      "Reproduire sa structure à l'identique est ce qui rend une organisation fiable et redevable. Hannan et Freeman en tirent le prix : l'inertie, que la sélection retient.",
    themes: ["changement-organisationnel"],
    difficulty: 3,
    difficulty_rationale:
      "Le mécanisme lui-même est simple, mais il exige de tenir deux niveaux d'analyse à la fois : ce qui arrive à une organisation et ce qui arrive à une population d'organisations. Le renversement de 1984 — l'inertie n'est plus la prémisse de la sélection mais son produit — n'est lisible qu'à cette condition.",
    quotation_pick: "fragment_carte",
    traceability: [
      {
        claim: "Reproduire sa structure à l'identique est ce qui rend une organisation fiable et redevable.",
        evidence_ref: "evidence.key_quotation — « A prerequisite for reliable and accountable performance is the capacity to reproduce a structure with high fidelity » (1984, p. 162)",
      },
      {
        claim: "Hannan et Freeman en tirent le prix : l'inertie, que la sélection retient.",
        evidence_ref: "evidence.key_quotation et evidence.concept_definition — « The price paid for high-fidelity reproduction is structural inertia » (p. 162) ; Theorem 1, p. 155",
      },
    ],
  },

  "isomorphisme-institutionnel": {
    canonical_name_fr: "Isomorphisme institutionnel",
    canonical_name_note:
      "Le nom long établi par le lecteur primaire — « Isomorphisme institutionnel (coercitif, mimétique, normatif) » — fait 60 caractères pour 48 admis sur la carte. Les trois mécanismes sont donc portés par la citation et le résumé, pas par le titre.",
    scope_rationale:
      "L'article renverse la question ordinaire de la théorie des organisations : il ne demande pas pourquoi les organisations diffèrent mais pourquoi elles se ressemblent, et répond sans passer par l'efficacité. Il porte sur le fonctionnement et le changement des organisations, il est attribué sans contestation, et son mécanisme se reconnaît dans n'importe quel secteur où les acteurs s'observent les uns les autres.",
    hook_question:
      "Pourquoi des organisations concurrentes finissent-elles par tant se ressembler ?",
    short_explanation:
      "DiMaggio et Powell l'expliquent par trois pressions — la contrainte, l'imitation face à l'incertitude, la professionnalisation — et non par l'efficacité.",
    themes: ["changement-organisationnel", "bureaucratie-regles"],
    difficulty: 3,
    difficulty_rationale:
      "Aucun prérequis conceptuel, mais deux obstacles de lecture : il faut accepter qu'une pratique se répande sans être plus efficace, et ne pas réduire les trois mécanismes à l'imitation, qui est le seul que la vulgarisation retient.",
    quotation_pick: "forme_courte",
    traceability: [
      {
        claim: "DiMaggio et Powell l'expliquent par trois pressions — la contrainte, l'imitation face à l'incertitude, la professionnalisation.",
        evidence_ref: "evidence.concept_definition — « We identify three mechanisms through which institutional isomorphic change occurs, each with its own antecedents » (1983, p. 150)",
      },
      {
        claim: "et non par l'efficacité",
        evidence_ref: "evidence.concept_definition — « processes that make organizations more similar without necessarily making them more efficient » (p. 147) ; voir aussi p. 153-154",
      },
    ],
  },

  "organisation-genree": {
    canonical_name_fr: "Organisation genrée",
    scope_rationale:
      "Le concept porte sur l'objet le plus formel de l'organisation — la définition d'un poste et la construction de la hiérarchie — et montre ce que cette forme présuppose. Il éclaire donc le fonctionnement organisationnel lui-même, et non les attitudes de ses membres ; l'attribution à Joan Acker est établie sans contestation.",
    hook_question:
      "Un poste décrit comme neutre peut-il présupposer un certain type de vie ?",
    short_explanation:
      "Chez Acker, le genre n'entre pas dans l'organisation du dehors. La définition d'un poste suppose un travailleur sans attaches, dont un autre assure la vie hors travail.",
    themes: ["organisation-formelle-reelle"],
    difficulty: 3,
    difficulty_rationale:
      "Le mécanisme est accessible sans prérequis, mais il demande de renoncer à une évidence : que les catégories d'organisation (le poste, le grade) sont des contenants vides. La difficulté est de lecture, pas de vocabulaire.",
    quotation_pick: "fragment_court",
    traceability: [
      {
        claim: "Chez Acker, le genre n'entre pas dans l'organisation du dehors.",
        evidence_ref: "evidence.concept_definition — « Gender is not an addition to ongoing processes, conceived as gender neutral. Rather, it is an integral part of those processes » (1990, p. 146)",
      },
      {
        claim: "La définition d'un poste suppose un travailleur sans attaches, dont un autre assure la vie hors travail.",
        evidence_ref: "evidence.key_quotation — « a disembodied worker who exists only for the work » et « while his wife or another woman takes care of his personal needs and his children » (p. 149)",
      },
    ],
  },

  "regulation-controle-autonome": {
    canonical_name_fr: "Régulation de contrôle et régulation autonome",
    scope_rationale:
      "Le couple donne une description du rapport entre les règles de la direction et celles que les exécutants se donnent, sans traiter les secondes comme un résidu informel. Il porte directement sur la règle, la coopération et le pouvoir dans l'organisation, et Reynaud en est l'auteur reconnu sans contestation.",
    hook_question:
      "Les règles qu'une équipe se donne sont-elles un désordre ou une autre régulation ?",
    short_explanation:
      "Reynaud oppose les règles de la direction à celles des exécutants. Les secondes ne sont ni spontanées ni informelles : ce sont des stratégies contre le contrôle.",
    themes: ["organisation-formelle-reelle", "pouvoir"],
    difficulty: 3,
    difficulty_rationale:
      "Le vocabulaire est simple mais trompeur : « autonome » ne veut dire ni libre, ni spontané, ni informel, et « contrôle » ne désigne pas une surveillance mais une position. Le concept se comprend seulement si l'on abandonne ces trois équivalences.",
    quotation_pick: "short_form",
    traceability: [
      {
        claim: "Reynaud oppose les règles de la direction à celles des exécutants.",
        evidence_ref: "evidence.concept_definition — régulation de contrôle « descend du sommet vers la base » (1988, p. 6) ; régulation autonome produite « par les groupes d'exécutants eux-mêmes » (p. 6)",
      },
      {
        claim: "Les secondes ne sont ni spontanées ni informelles : ce sont des stratégies contre le contrôle.",
        evidence_ref: "evidence.key_quotation et evidence.concept_definition — « une stratégie en réponse à leurs efforts de contrôle » qui « conquiert des positions de pouvoir contre ce contrôle » (p. 12) ; « n'est pas officieuse ou informelle » (p. 10)",
      },
    ],
  },
};

/* Le couple auteur→mention exigé par le validateur sur les fiches coécrites. */
const associatedAuthor = {
  "inertie-structurelle-et-selection":
    "Hannan et Freeman, cités conjointement — le concept est le plus souvent rangé sous l'écologie des populations plutôt que sous l'un des deux noms",
  "isomorphisme-institutionnel":
    "DiMaggio et Powell, cités conjointement — la réception n'attribue le concept à aucun des deux séparément",
};

/* Choix de la citation : chaque fragment porte déjà une forme calibrée pour la carte. */
function pickQuotation(primary, pick) {
  const q = primary.evidence.key_quotation;
  const base = {
    language: q.language,
    original_language: q.original_language,
    translation: q.translation,
    attributed_to: q.attributed_to,
    primary_source_index: q.primary_source_index,
  };

  if (pick === "fragment_carte") {
    const f = q._fragment_carte_150;
    return {
      ...base,
      text: f.text_fr,
      original_text: f.original_en,
      locator: q.locator,
      _card_fit_note: `Forme courte préparée par le lecteur primaire (${f.longueur} caractères). ${f.note}`,
    };
  }
  if (pick === "forme_courte") {
    const f = q._forme_courte_150_signes;
    return {
      ...base,
      text: f.text,
      original_text: f.original_text,
      locator: f.locator,
      _card_fit_note: `AUTRE PASSAGE que la citation longue du dossier, et non une coupe de celle-ci : ${f.AVERTISSEMENT} ${f.reserve}`,
    };
  }
  if (pick === "fragment_court") {
    const f = q._fragment_court_150;
    return {
      ...base,
      text: f.fr,
      original_text: f.en,
      locator: `${q.locator} — première phrase du passage, entière.`,
      _card_fit_note: `Forme courte préparée par le lecteur primaire (${f.longueur_fr} caractères). ${f.note}`,
    };
  }
  if (pick === "short_form") {
    const f = q.short_form_150;
    return {
      ...base,
      text: f.text,
      original_text: q.original_text,
      locator: q.locator,
      _card_fit_note: `Forme courte préparée par le lecteur primaire (${f.length} caractères). ${f.note}`,
    };
  }
  throw new Error(`pick inconnu : ${pick}`);
}

async function compose(id) {
  const primary = await read(`corpus/evidence/${id}/evidence.primary-reading.json`);
  const reception = await read(`corpus/evidence/${id}/evidence.reception.json`);
  const scouting = await read(`corpus/evidence/${id}/scouting.json`).catch(() => null);
  const a = authored[id];
  if (!a) throw new Error(`pas de contenu rédigé pour ${id}`);

  const pe = primary.evidence;
  const re = reception.evidence;
  const attribution = reception.attribution ?? primary.attribution_input;

  const secondary = arr(re.secondary_sources);
  const francophone = arr(re.francophone_sources);

  const record = {
    $schema: "../schema/concept.record.schema.json",
    id,
    slug: id,
    status: "IN_REVIEW",
    canonical_name_fr: a.canonical_name_fr,
    canonical_name_en: primary.canonical_name_en ?? null,

    scope: { in_scope: true, rationale: a.scope_rationale },

    attribution: {
      authors: arr(attribution.authors).map((x) => ({
        name: x.name,
        app_author_id: x.app_author_id ?? null,
      })),
      authorship: attribution.authorship,
      associated_author:
        attribution.authorship === "SOLE_AUTHOR"
          ? null
          : associatedAuthor[id] ?? attribution.associated_author ?? null,
      term_origin: attribution.term_origin ?? null,
      _reception_verdict: attribution.verdict ?? null,
    },

    evidence: {
      concept_definition: pe.concept_definition,
      mechanism: arr(pe.mechanism),
      conditions: pe.conditions,
      key_quotation: pickQuotation(primary, a.quotation_pick),
      primary_sources: arr(pe.primary_sources),
      secondary_sources: secondary,
      francophone_sources: francophone,
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
      hook_question: a.hook_question,
      short_explanation: a.short_explanation,
      traceability: a.traceability,
    },

    graph: {
      themes: a.themes,
      difficulty: a.difficulty,
      difficulty_rationale: a.difficulty_rationale,
      related: [],
      opposites: [],
      prerequisites: [],
      deepens_into: [],
    },

    validation: {
      primary_source_confirmed: primary.validation_input?.primary_source_confirmed === true,
      secondary_confirmation: secondary.length > 0,
      francophone_layer_searched:
        primary.validation_input?.francophone_layer_searched === true || francophone.length > 0,
      evidence_review: { verdict: "PENDING", notes: [], rounds: 0 },
      pedagogy_review: { verdict: "PENDING", no_new_claims: null, notes: [], rounds: 0 },
      confidence_flags: [
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
      candidate_origin: scouting ? "cartographie + scout" : "scout",
      runs: [
        primary.provenance_fragment ?? { agent: "corpus-primary-reader", at: "2026-08-16" },
        reception.provenance_fragment ?? { agent: "corpus-reception-analyst", at: "2026-08-16" },
        {
          agent: "composition mécanique (scripts/corpus/tmp-compose.mjs)",
          at: TODAY,
          action:
            "Fusion des deux fragments de corpus/evidence/ en enregistrement de review. Les champs rédigés (scope.rationale, pedagogy, graph) sont écrits à la main dans la table `authored` du script ; tout le reste est recopié sans modification. La chaîne d'agents corpus-* n'était plus disponible dans la session.",
          reserve:
            "Cette fiche N'A PAS été relue par corpus-blind-reviewer : validation.evidence_review et validation.pedagogy_review sont en PENDING, et elle ne peut donc pas passer en corpus/validated/.",
        },
      ],
    },
  };

  if (a.canonical_name_note) record._canonical_name_note = a.canonical_name_note;

  await writeFile(
    resolve(ROOT, `corpus/review/${id}.json`),
    `${JSON.stringify(record, null, 2)}\n`,
    "utf8"
  );

  const L = (s) => (s ?? "").length;
  console.log(
    `${id}\n  nom ${L(record.canonical_name_fr)}/48 · accroche ${L(
      record.pedagogy.hook_question
    )}/85 · résumé ${L(record.pedagogy.short_explanation)}/170 · citation ${L(
      record.evidence.key_quotation.text
    )}/150 · sources ${record.evidence.primary_sources.length}P/${secondary.length}S/${francophone.length}F`
  );
}

for (const id of Object.keys(authored)) await compose(id);
