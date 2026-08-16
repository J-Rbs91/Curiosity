/**
 * Projection : enregistrement maître → objet `Concept` consommé par l'application.
 *
 * Sens unique et mécanique. Rien ne s'ajoute ici qui ne soit dans l'enregistrement :
 * corriger une fiche affichée, c'est corriger le corpus puis reprojeter.
 */

const asArray = (v) => (Array.isArray(v) ? v : []);
const isFilled = (v) => typeof v === "string" && v.trim().length > 0;

/** Voir `CARD_LIMITS.sources` dans validate.mjs : la carte en montre cinq au plus. */
const MAX_CARD_SOURCES = 5;

function listFr(names) {
  if (names.length <= 1) return names[0] ?? "";
  return `${names.slice(0, -1).join(", ")} et ${names[names.length - 1]}`;
}

/**
 * La ligne qui rétablit l'attribution réelle sous le titre, quand elle ne se réduit pas
 * à un nom. C'est la traduction à l'écran de « auteur principal ≠ auteur unique » et de
 * « association ≠ paternité » : sans elle, l'application fabrique lentement une histoire
 * intellectuelle fausse, par simplification d'affichage.
 */
export function buildAttributionNote(record) {
  const attribution = record?.attribution ?? {};
  const names = asArray(attribution.authors).map((a) => a?.name).filter(isFilled);
  const origin = attribution.term_origin ?? {};
  const year = asArray(record?.evidence?.primary_sources).find((s) => s?.year)?.year;
  const parts = [];

  if (attribution.authorship === "COAUTHORED" && names.length > 1) {
    const under = isFilled(attribution.associated_author)
      ? `, habituellement rangé sous ${attribution.associated_author}`
      : "";
    parts.push(`Concept coécrit par ${listFr(names)}${year ? ` (${year})` : ""}${under}.`);
  } else if (attribution.authorship === "ASSOCIATED_WITH") {
    parts.push(
      `Concept associé à ${attribution.associated_author}, qui ne l'a pas créé${
        names.length > 0 ? ` : ${listFr(names)}` : ""
      }.`
    );
  }

  if (isFilled(origin.coined_by) && !names.includes(origin.coined_by))
    parts.push(`Terme forgé par ${origin.coined_by}${isFilled(origin.coined_in) ? ` (${origin.coined_in})` : ""}.`);

  return parts.length > 0 ? parts.join(" ") : undefined;
}

/**
 * « Traduit de l'allemand », « traduit du russe » — pas « traduit de allemand ».
 *
 * La langue d'origine est saisie en toutes lettres ; un code ISO (`de`, `en`) ne se
 * décline pas et la mention se réduit alors au traducteur, ce qui reste juste.
 */
function sourceLanguageClause(language) {
  if (!isFilled(language) || language.trim().length <= 3) return "";
  const name = language.trim();
  return /^[aeiouyàâäéèêëïîôöùûüh]/i.test(name) ? ` de l'${name}` : ` du ${name}`;
}

/**
 * La citation telle qu'elle sera lue. Deux choses s'y jouent : la référence doit permettre
 * de rouvrir le texte, et une traduction ne doit jamais passer pour la parole de l'auteur.
 * Une traduction publiée nomme son traducteur ; une traduction de notre fait le dit.
 */
export function buildQuotation(record) {
  const quotation = record?.evidence?.key_quotation;
  if (!quotation || !isFilled(quotation.text)) return undefined;

  const source = asArray(record?.evidence?.primary_sources)[quotation.primary_source_index];
  const attributedTo =
    quotation.attributed_to ??
    record?.attribution?.associated_author ??
    asArray(record?.attribution?.authors)[0]?.name ??
    "";

  const reference = [source?.citation, quotation.locator].filter(isFilled).join(", ");

  const projected = { text: quotation.text, attributedTo, reference };

  const translation = quotation.translation ?? {};
  const from = sourceLanguageClause(quotation.original_language);
  if (translation.kind === "published") {
    projected.translationNote = [
      `Traduit${from} par ${translation.translator}`,
      isFilled(translation.edition) ? ` (${translation.edition})` : "",
    ].join("");
  } else if (translation.kind === "in-house") {
    projected.translationNote = `Traduit${from} pour cette fiche — traduction non publiée`;
  }

  return projected;
}

function sourceUrl(source) {
  if (isFilled(source?.url)) return source.url;
  const ref = source?.doi_isbn;
  if (isFilled(ref) && /^10\.\d{4,}\//.test(ref)) return `https://doi.org/${ref}`;
  return undefined;
}

function projectSources(record) {
  const evidence = record?.evidence ?? {};
  const map = (list, kind, referenceOf) =>
    asArray(list)
      .filter((s) => isFilled(s?.citation))
      .map((s) => {
        const source = { label: s.citation, kind };
        const reference = referenceOf(s);
        if (isFilled(reference)) source.reference = reference;
        const url = sourceUrl(s);
        if (url) source.url = url;
        return source;
      });

  /*
   * Cinq sources au maximum, et les sources primaires d'abord.
   *
   * Une fiche bien instruite en porte vingt ou trente : toutes les projeter noierait le
   * texte de l'auteur au milieu des commentateurs, et ferait déborder la carte. Ce qui
   * est retenu est ce qui permet de remonter au texte ; le reste vit dans le corpus, qui
   * est là pour ça.
   */
  return [
    ...map(evidence.primary_sources, "primary", (s) =>
      [s.locator, s.doi_isbn].filter(isFilled).join(" · ")
    ),
    ...map(evidence.secondary_sources, "secondary-academic", (s) => s.doi_isbn),
    ...map(evidence.francophone_sources, "francophone-reception", (s) => s.doi_isbn),
  ].slice(0, MAX_CARD_SOURCES);
}

/** Enregistrement maître → `Concept`. L'appelant garantit que le record est VALIDATED. */
export function projectConcept(record) {
  const pedagogy = record?.pedagogy ?? {};
  const graph = record?.graph ?? {};
  const ids = (list) => asArray(list).map((r) => r?.id).filter(isFilled);

  /*
   * Les libellés d'affichage sont portés par la fiche, pas cherchés dans les tables de
   * l'application. C'est ce qui permet au corpus d'introduire un auteur ou un thème que
   * l'application ne connaît pas encore : la carte l'affiche par son nom, et une page
   * dédiée pourra lui être consacrée plus tard, ou jamais.
   */
  const authorLabel = asArray(record?.attribution?.authors)
    .map((a) => a?.name)
    .filter(isFilled)
    .join(", ");
  const firstTheme = asArray(graph.themes)[0];
  const themeLabel = graph.theme_labels?.[firstTheme] ?? null;

  const concept = {
    id: record.id,
    slug: record.slug,
    title: record.canonical_name_fr,
    authorLabel,
    hookQuestion: pedagogy.hook_question,
    shortExplanation: pedagogy.short_explanation,
    detailedExplanation: pedagogy.detailed_explanation,
    authors: asArray(record?.attribution?.authors)
      .map((a) => a?.app_author_id)
      .filter(isFilled),
    themes: asArray(graph.themes),
    relatedConcepts: ids(graph.related),
    prerequisites: ids(graph.prerequisites),
    concreteExample: pedagogy.concrete_example,
    analysisQuestions: asArray(pedagogy.analysis_questions),
    quiz: asArray(pedagogy.quiz).map((q) => {
      const question = {
        id: q.id,
        type: q.type,
        prompt: q.prompt,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
      };
      if (asArray(q.choices).length > 0) question.choices = q.choices;
      return question;
    }),
    difficulty: graph.difficulty,
  };

  if (isFilled(themeLabel)) concept.themeLabel = themeLabel;

  const opposites = ids(graph.opposites);
  if (opposites.length > 0) concept.oppositeConcepts = opposites;
  const deepens = ids(graph.deepens_into);
  if (deepens.length > 0) concept.deepensInto = deepens;

  const note = buildAttributionNote(record);
  if (note) concept.attributionNote = note;

  const quotation = buildQuotation(record);
  if (quotation) concept.quotation = quotation;

  const sources = projectSources(record);
  if (sources.length > 0) concept.sources = sources;

  return concept;
}

/** Ordre stable des fiches générées : le diff d'une reprojection doit rester lisible. */
export function projectCorpus(records) {
  return records
    .filter((r) => r?.status === "VALIDATED")
    .slice()
    .sort((a, b) => a.id.localeCompare(b.id, "fr"))
    .map(projectConcept);
}
