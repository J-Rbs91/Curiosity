/**
 * Validation des enregistrements du corpus maître.
 *
 * Fonctions pures : aucune lecture disque, aucun accès réseau. Les entrées/sorties
 * sont dans io.mjs, l'exécutable dans ../validate.mjs.
 *
 * Ce fichier est le garde-fou technique du workflow (docs/corpus-workflow.md) : il
 * applique les règles qui ne doivent dépendre de la discipline d'aucun agent. Les
 * assouplir demande de modifier le document d'abord.
 */

const ID_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const STATUSES = ["CANDIDATE", "IN_REVIEW", "VALIDATED", "REJECTED"];
const AUTHORSHIPS = ["SOLE_AUTHOR", "COAUTHORED", "ASSOCIATED_WITH"];

/** Le répertoire est l'état : cette table est la seule autorité sur la correspondance. */
export const STATUS_BY_DIR = {
  candidates: "CANDIDATE",
  review: "IN_REVIEW",
  validated: "VALIDATED",
  rejected: "REJECTED",
};

const isFilled = (v) => typeof v === "string" && v.trim().length > 0;
const asArray = (v) => (Array.isArray(v) ? v : []);

/**
 * Longueurs maximales des champs qui composent la carte.
 *
 * Ce ne sont pas des préférences de style : la carte doit tenir dans un écran de
 * téléphone **sans défilement**, et ces trois champs sont les seuls dont la longueur
 * varie. Les valeurs correspondent à ce qui tient réellement à la lecture — deux lignes
 * pour l'accroche, trois pour le résumé, quatre pour la citation.
 *
 * Elles ont été **mesurées**, pas devinées : rendu de la carte sur un écran de 390 × 844,
 * bloc par bloc, avec tous les champs à leur maximum simultané. Une accroche coûte 0,83
 * pixel par caractère, un résumé 0,60, une citation 0,72.
 *
 * La contrainte est ici plutôt que dans une consigne parce qu'une consigne s'oublie : le
 * premier lot a produit des accroches de 311 caractères et des résumés de 805, tous
 * excellents et tous inaffichables.
 */
export const CARD_LIMITS = {
  hook_question: 100,
  short_explanation: 200,
  key_quotation: 200,
  sources: 5,
};

/**
 * Tous les nombres écrits dans un texte, en chaînes normalisées.
 * Sert la règle « un chiffre sans source ne sort pas » : une date, un effectif ou un
 * pourcentage qui apparaît dans la prose pédagogique doit exister dans le bloc de preuve.
 */
function numbersIn(text) {
  return new Set((String(text).match(/\d+/g) ?? []).filter((n) => n.length > 0));
}

/** Champs de `pedagogy` qui finissent sous les yeux d'un lecteur. */
function pedagogyProse(pedagogy) {
  if (!pedagogy || typeof pedagogy !== "object") return [];
  return [pedagogy.hook_question, pedagogy.short_explanation].filter(isFilled);
}

function checkSources(evidence, status, errors) {
  const primary = asArray(evidence.primary_sources);
  primary.forEach((s, i) => {
    const at = `evidence.primary_sources[${i}]`;
    if (!isFilled(s?.citation)) errors.push(`${at}.citation manquante`);
    if (!isFilled(s?.locator))
      errors.push(`${at}.locator manquant — une source non localisable n'est pas une source`);
    if (!isFilled(s?.evidence))
      errors.push(`${at}.evidence manquante — on vérifie ce que la source dit, pas qu'elle existe`);
    if (!isFilled(s?.doi_isbn) && !isFilled(s?.url))
      errors.push(`${at} : ni DOI/ISBN ni URL — une référence introuvable n'existe pas`);
  });

  asArray(evidence.secondary_sources)
    .concat(asArray(evidence.francophone_sources))
    .forEach((s, i) => {
      const at = `evidence.secondary/francophone_sources[${i}]`;
      if (!isFilled(s?.citation)) errors.push(`${at}.citation manquante`);
      if (!isFilled(s?.establishes))
        errors.push(`${at}.establishes manquant — dire ce que la source établit, pas la résumer`);
      if (s?.level && s.level !== "B" && s.level !== "C")
        errors.push(`${at}.level « ${s.level} » : seuls les niveaux B et C s'enregistrent comme sources`);
    });

  if (status !== "VALIDATED") return;

  if (primary.length === 0)
    errors.push("VALIDATED sans source primaire : l'attribution n'est pas établie");
  else if (primary.every((s) => s?.consulted === "metadata-only"))
    errors.push(
      "VALIDATED sur des sources primaires consultées en métadonnées seules : rien n'a été lu"
    );

  const secondary = asArray(evidence.secondary_sources).concat(
    asArray(evidence.francophone_sources).filter((s) => s?.level === "B")
  );
  if (secondary.length === 0)
    errors.push(
      "VALIDATED sans source secondaire académique : l'interprétation n'est confirmée par personne"
    );
}

/**
 * La citation est le seul élément de l'application qui ne passe pas par nos mots. Elle
 * n'est donc admise que si elle est rattachable à un texte réellement ouvert, localisée,
 * et explicite sur sa traduction. Le caractère verbatim, lui, ne s'automatise pas : c'est
 * le contrôleur aveugle qui le vérifie contre l'édition.
 */
function checkQuotation(record, errors, warnings) {
  const quotation = record?.evidence?.key_quotation;
  if (!quotation) return;

  const primary = asArray(record?.evidence?.primary_sources);
  const at = "evidence.key_quotation";

  if (!isFilled(quotation.text)) errors.push(`${at}.text vide`);
  else if (quotation.text.length > CARD_LIMITS.key_quotation) {
    // Une longueur excessive est un défaut de rédaction, pas d'instruction : elle bloque
    // la publication mais pas le travail en cours. Tant que la fiche est en atelier, elle
    // se signale ; en `validated/`, elle interdit la projection.
    const message = `${at}.text : ${quotation.text.length} caractères pour ${CARD_LIMITS.key_quotation} au plus — la citation doit tenir dans la carte`;
    if (record?.status === "VALIDATED") errors.push(message);
    else warnings.push(message);
  }
  if (!isFilled(quotation.locator))
    errors.push(`${at}.locator manquant — une citation qu'on ne peut pas rouvrir à la bonne page ne vaut rien`);
  if (!isFilled(quotation.language)) errors.push(`${at}.language manquante`);

  const index = quotation.primary_source_index;
  const source = Number.isInteger(index) ? primary[index] : undefined;
  if (!source) {
    errors.push(`${at}.primary_source_index « ${index} » ne pointe sur aucune source primaire`);
  } else if (source.consulted === "metadata-only") {
    errors.push(`${at} : la source visée n'a été consultée qu'en métadonnées — on ne cite pas un texte qu'on n'a pas ouvert`);
  }

  const translation = quotation.translation ?? {};
  const translated =
    source && isFilled(source.language) && isFilled(quotation.language)
      ? source.language !== quotation.language
      : translation.kind === "published" || translation.kind === "in-house";

  if (translated && translation.kind !== "published" && translation.kind !== "in-house")
    errors.push(
      `${at} : le passage est cité dans une autre langue que sa source sans traduction déclarée — traduction ≠ équivalence`
    );
  if (translation.kind === "published" && (!isFilled(translation.translator) || !isFilled(translation.edition)))
    errors.push(`${at}.translation : une traduction publiée se cite avec son traducteur et son édition`);
  if (translation.kind === "in-house" && !isFilled(quotation.original_text))
    errors.push(
      `${at} : traduction de notre fait sans original_text — le lecteur comme le contrôleur doivent pouvoir revenir au texte`
    );

  if (record?.attribution?.authorship !== "SOLE_AUTHOR" && !isFilled(quotation.attributed_to))
    errors.push(
      `${at}.attributed_to manquant sur un concept à plusieurs auteurs : on ne prête pas à l'un les mots de trois`
    );
}

function checkGating(record, errors) {
  const v = record.validation ?? {};
  const evidenceReview = v.evidence_review ?? {};
  const pedagogyReview = v.pedagogy_review ?? {};

  if (v.primary_source_confirmed !== true)
    errors.push("VALIDATED alors que validation.primary_source_confirmed n'est pas vrai");
  if (v.secondary_confirmation !== true)
    errors.push("VALIDATED alors que validation.secondary_confirmation n'est pas vrai");
  if (v.francophone_layer_searched !== true)
    errors.push(
      "VALIDATED sans couche francophone cherchée — elle se cherche en amont, pas en relecture"
    );
  if (evidenceReview.verdict !== "PASS")
    errors.push(`VALIDATED avec passe A du contrôleur aveugle en « ${evidenceReview.verdict} »`);
  if (pedagogyReview.verdict !== "PASS")
    errors.push(`VALIDATED avec passe B du contrôleur aveugle en « ${pedagogyReview.verdict} »`);
  if (pedagogyReview.no_new_claims !== true)
    errors.push("VALIDATED sans confirmation que la prose n'ajoute aucune affirmation");
  for (const [name, review] of [
    ["evidence_review", evidenceReview],
    ["pedagogy_review", pedagogyReview],
  ]) {
    if (typeof review.rounds === "number" && review.rounds > 3)
      errors.push(`validation.${name}.rounds = ${review.rounds} : au-delà de 3 tours, la fiche se rejette`);
  }
}

/**
 * Valide un enregistrement isolé.
 * `dir` est le répertoire de corpus/ où il se trouve (candidates, review, validated, rejected).
 */
export function validateRecord(record, { dir, themeIds = new Set(), authorIds = new Set() } = {}) {
  const errors = [];
  const warnings = [];
  const push = (list, msg) => list.push(msg);

  // --- identité et état ---------------------------------------------------
  if (!ID_PATTERN.test(record?.id ?? "")) errors.push(`id « ${record?.id} » invalide (kebab-case attendu)`);
  if (!ID_PATTERN.test(record?.slug ?? "")) errors.push(`slug « ${record?.slug} » invalide`);
  if (!STATUSES.includes(record?.status)) errors.push(`status « ${record?.status} » inconnu`);
  if (dir && STATUS_BY_DIR[dir] && record?.status !== STATUS_BY_DIR[dir])
    errors.push(
      `status « ${record?.status} » incohérent avec le répertoire corpus/${dir}/ (attendu « ${STATUS_BY_DIR[dir]} »)`
    );
  if (!isFilled(record?.canonical_name_fr)) errors.push("canonical_name_fr manquant");
  if (record?.status === "REJECTED" && !isFilled(record?.rejection_reason))
    errors.push("REJECTED sans rejection_reason : un rejet non motivé revient toujours");

  // --- périmètre ----------------------------------------------------------
  if (!record?.scope || typeof record.scope.in_scope !== "boolean")
    errors.push("scope.in_scope manquant");
  else if (record.scope.in_scope !== true && record.status !== "REJECTED")
    errors.push("scope.in_scope = false hors de corpus/rejected/");
  if (!isFilled(record?.scope?.rationale)) errors.push("scope.rationale manquant");

  // --- attribution --------------------------------------------------------
  const attribution = record?.attribution ?? {};
  const authors = asArray(attribution.authors);
  if (authors.length === 0) errors.push("attribution.authors vide");
  if (!AUTHORSHIPS.includes(attribution.authorship))
    errors.push(`attribution.authorship « ${attribution.authorship} » inconnu`);
  if (attribution.authorship === "COAUTHORED" && authors.length < 2)
    errors.push("COAUTHORED avec un seul auteur : auteur principal ≠ auteur unique");
  if (attribution.authorship !== "SOLE_AUTHOR" && !isFilled(attribution.associated_author))
    errors.push(`${attribution.authorship} sans associated_author`);
  /*
   * Le corpus découvre les auteurs ; l'application les reçoit. Un `app_author_id` inconnu
   * de `src/content/authors.ts` n'est donc pas une faute : c'est un auteur que le champ
   * a fait apparaître et auquel l'application ne consacre pas encore de page. Exiger
   * l'inverse ferait de la table des auteurs le périmètre réel du corpus — huit noms —
   * alors que le périmètre est la discipline.
   *
   * Le nom, lui, est obligatoire : c'est lui qui s'affiche sur la carte, sans dépendre
   * d'aucune table.
   */
  for (const [i, author] of authors.entries())
    if (!isFilled(author?.name)) errors.push(`attribution.authors[${i}].name manquant`);
  const appAuthorIds = authors.map((a) => a?.app_author_id).filter(isFilled);
  for (const id of appAuthorIds)
    if (authorIds.size > 0 && !authorIds.has(id))
      push(
        warnings,
        `attribution : « ${id} » n'a pas encore de page dans src/content/authors.ts — la carte l'affichera par son nom`
      );

  // --- preuve -------------------------------------------------------------
  const evidence = record?.evidence ?? {};
  if (!isFilled(evidence.concept_definition)) errors.push("evidence.concept_definition manquante");
  checkSources(evidence, record?.status, errors);
  checkQuotation(record, errors, warnings);

  // --- pédagogie ----------------------------------------------------------
  const pedagogy = record?.pedagogy ?? {};
  const prose = pedagogyProse(pedagogy);
  if (record?.status === "VALIDATED") {
    for (const field of ["hook_question", "short_explanation"])
      if (!isFilled(pedagogy[field])) errors.push(`pedagogy.${field} manquant`);

    // La carte doit tenir dans un écran : ces deux champs y sont affichés en entier.
    for (const field of ["hook_question", "short_explanation"]) {
      const length = (pedagogy[field] ?? "").length;
      if (length > CARD_LIMITS[field])
        errors.push(
          `pedagogy.${field} : ${length} caractères pour ${CARD_LIMITS[field]} au plus — la carte déborderait de l'écran`
        );
    }
    if (asArray(pedagogy.traceability).length === 0)
      push(warnings, "pedagogy.traceability vide : aucune phrase n'est rattachée à la preuve");
  }

  if (prose.length > 0) {
    const sourced = numbersIn(JSON.stringify(evidence) + JSON.stringify(attribution));
    const unsourced = new Set();
    for (const text of prose) for (const n of numbersIn(text)) if (!sourced.has(n)) unsourced.add(n);
    for (const n of unsourced)
      errors.push(
        `pedagogy : le nombre « ${n} » n'apparaît nulle part dans evidence — un chiffre sans source ne sort pas`
      );
  }

  // --- graphe -------------------------------------------------------------
  const graph = record?.graph ?? {};
  const themes = asArray(graph.themes);
  if (themes.length === 0 && record?.status === "VALIDATED") errors.push("graph.themes vide");
  // Même raison que pour les auteurs : un thème que le champ fait apparaître ne peut pas
  // être refusé par la table des neuf thèmes écrite avant toute instruction. Il lui faut
  // en revanche un libellé, faute de quoi la carte n'aurait rien à afficher.
  for (const t of themes)
    if (themeIds.size > 0 && !themeIds.has(t)) {
      if (!isFilled(graph.theme_labels?.[t]))
        errors.push(
          `graph.themes : « ${t} » est inconnu de l'application et n'a pas de libellé dans graph.theme_labels`
        );
      else push(warnings, `graph.themes : « ${t} » est un thème nouveau, affiché par son libellé`);
    }


  // --- verrou de publication ---------------------------------------------
  if (record?.status === "VALIDATED") {
    checkGating(record, errors);
    const declaredUncertainty =
      asArray(evidence.known_ambiguities).length +
      asArray(evidence.limitations).length +
      asArray(record?.validation?.confidence_flags).length;
    if (declaredUncertainty === 0)
      push(
        warnings,
        "fiche validée sans aucune incertitude déclarée (known_ambiguities, limitations, confidence_flags) : suspecte, pas exemplaire"
      );
  }

  return { id: record?.id, errors, warnings };
}

/**
 * Contrôles qui ne se voient qu'à l'échelle du corpus : doublons, références pendantes,
 * cycles de prérequis.
 *
 * Une relation d'une fiche validée ne peut viser qu'une **autre fiche validée**. Pointer
 * vers une fiche candidate, ou vers l'échafaudage de `src/content/fixtures/`, ferait
 * entrer dans le graphe d'un concept vérifié une dépendance qui ne l'est pas — et un
 * prérequis non vérifié conditionne l'accès à un concept vérifié, ce qui est pire encore.
 * Le graphe se construit donc au rythme du corpus, pas à celui des intentions.
 */
export function validateCorpus(records) {
  const errors = [];
  const warnings = [];

  const byId = new Map();
  const bySlug = new Map();
  for (const { dir, record } of records) {
    const where = `corpus/${dir}/${record?.id}.json`;
    if (byId.has(record?.id))
      errors.push(`id « ${record.id} » présent deux fois : ${byId.get(record.id)} et ${where}`);
    else byId.set(record?.id, where);
    if (record?.slug) {
      if (bySlug.has(record.slug))
        errors.push(`slug « ${record.slug} » présent deux fois : ${bySlug.get(record.slug)} et ${where}`);
      else bySlug.set(record.slug, where);
    }
  }

  const validated = records.filter(({ record }) => record?.status === "VALIDATED").map((r) => r.record);
  const universe = new Set(validated.map((r) => r.id));

  const refsOf = (record) => [
    ...asArray(record.graph?.related),
    ...asArray(record.graph?.opposites),
    ...asArray(record.graph?.prerequisites),
    ...asArray(record.graph?.deepens_into),
  ];

  for (const record of validated)
    for (const ref of refsOf(record))
      if (isFilled(ref?.id) && !universe.has(ref.id))
        errors.push(
          `${record.id} : référence « ${ref.id} » ne désigne aucune fiche validée — une fiche vérifiée ne s'appuie pas sur ce qui ne l'est pas`
        );

  // Cycle de prérequis : le moteur pédagogique ne pourrait jamais débloquer les concepts.
  const prereqs = new Map(
    validated.map((r) => [r.id, asArray(r.graph?.prerequisites).map((p) => p?.id).filter(isFilled)])
  );
  const state = new Map();
  const walk = (id, trail) => {
    if (state.get(id) === "done") return;
    if (state.get(id) === "visiting") {
      errors.push(`cycle de prérequis : ${[...trail, id].join(" → ")}`);
      return;
    }
    state.set(id, "visiting");
    for (const next of prereqs.get(id) ?? []) if (prereqs.has(next)) walk(next, [...trail, id]);
    state.set(id, "done");
  };
  for (const id of prereqs.keys()) walk(id, []);

  return { errors, warnings };
}
