/**
 * Projection : carte du corpus → objet `Concept` consommé par l'application.
 *
 * Sens unique et quasi mécanique. Rien ne s'ajoute ici qui ne soit dans la fiche :
 * corriger une carte affichée, c'est corriger le corpus puis reprojeter.
 *
 * Cette étape composait autrefois des phrases — la note d'attribution était assemblée à
 * partir de l'auteur associé et de l'année de la première source primaire. Elle a produit
 * « Concept coécrit par Michel Crozier et Erhard Friedberg (1960) » pour une cosignature
 * attestée en 1979. Une phrase affichée ne se compose plus : elle s'écrit dans la fiche,
 * où elle peut être lue et contrôlée.
 */

const asArray = (v) => (Array.isArray(v) ? v : []);
const isFilled = (v) => typeof v === "string" && v.trim().length > 0;

/**
 * « Traduit de l'allemand », « traduit du russe » — pas « traduit de allemand ».
 *
 * La langue d'origine est saisie en toutes lettres ; un code ISO (`de`, `en`) ne se décline
 * pas et la mention se réduit alors au traducteur, ce qui reste juste.
 */
function sourceLanguageClause(language) {
  if (!isFilled(language) || language.trim().length <= 3) return "";
  const name = language.trim();
  return /^[aeiouyàâäéèêëïîôöùûüh]/i.test(name) ? ` de l'${name}` : ` du ${name}`;
}

/** La citation telle qu'elle sera lue. Une traduction ne passe jamais pour la parole de l'auteur. */
export function buildQuotation(record) {
  const q = record?.quotation;
  if (!q || !isFilled(q.text)) return undefined;

  /*
   * Le point final de la notice tombe avant le localisateur : les notices bibliographiques
   * se terminent par un point, et la jonction rendait « …, p. 560-568., p. 563 ».
   */
  const notice = isFilled(q.reference) ? q.reference.trim().replace(/\.$/, "") : "";
  const projected = {
    text: q.text,
    reference: [notice, q.locator].filter(isFilled).join(", "),
  };

  // Omis, et non vidé : le champ ne doit exister que s'il porte un nom, sinon la légende
  // afficherait la virgule qui le séparait de la notice.
  if (isFilled(q.attributed_to)) projected.attributedTo = q.attributed_to;

  const t = q.translation ?? {};
  const from = sourceLanguageClause(q.original_language);
  if (t.kind === "published") {
    projected.translationNote = [
      `Traduit${from} par ${t.translator}`,
      isFilled(t.edition) ? ` (${t.edition})` : "",
    ].join("");
  } else if (t.kind === "in-house") {
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
  return asArray(record?.sources)
    .filter((s) => isFilled(s?.label))
    .map((s) => {
      const source = { label: s.label, kind: s.kind };
      /*
       * Le localisateur ne se répète pas : une notice d'article se termine par sa
       * pagination, et la ligne rendait « …, p. 1-25. · p. 1-25 · 10.2307/2392088 ». Il
       * reste affiché lorsqu'il situe *dans* la source — un chapitre, une section, une
       * page précise à l'intérieur de l'étendue annoncée.
       */
      const locator = isFilled(s.locator) && !s.label.includes(s.locator) ? s.locator : null;
      const reference = [locator, s.doi_isbn].filter(isFilled).join(" · ");
      if (isFilled(reference)) source.reference = reference;
      const url = sourceUrl(s);
      if (url) source.url = url;
      return source;
    });
}

/** Carte du corpus → `Concept`. L'appelant garantit que la fiche est VALIDATED. */
export function projectConcept(record) {
  /*
   * Les libellés d'affichage sont portés par la fiche, pas cherchés dans les tables de
   * l'application : c'est ce qui permet au corpus d'introduire un auteur ou un thème que
   * l'application ne connaît pas encore.
   */
  const authorLabel = asArray(record.authors)
    .map((a) => a?.name)
    .filter(isFilled)
    .join(", ");
  const themes = asArray(record.themes);
  const themeLabel = record.theme_labels?.[themes[0]];

  const concept = {
    id: record.id,
    slug: record.slug,
    title: record.title,
    authorLabel,
    hookQuestion: record.hook,
    shortExplanation: record.summary,
    authors: asArray(record.authors)
      .map((a) => a?.app_author_id)
      .filter(isFilled),
    themes,
  };

  if (isFilled(themeLabel)) concept.themeLabel = themeLabel;
  if (isFilled(record.attribution_note)) concept.attributionNote = record.attribution_note;

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
