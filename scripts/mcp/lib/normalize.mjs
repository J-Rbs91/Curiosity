/**
 * Normalisation des réponses des bases documentaires.
 *
 * Quatre fournisseurs, quatre formats, une seule forme en sortie : sans cela, chaque agent
 * réapprendrait à lire OpenAlex, Crossref, Semantic Scholar et Zotero, et se tromperait
 * différemment sur chacun.
 *
 * Fonctions pures, testées sans réseau (normalize.test.mjs).
 */

const isFilled = (v) => typeof v === "string" && v.trim().length > 0;
const asArray = (v) => (Array.isArray(v) ? v : []);

/** Types du schéma corpus (`primarySource.kind`) — tout le reste tombe dans `other`. */
function normalizeKind(raw) {
  const type = String(raw ?? "").toLowerCase();
  if (type.includes("chapter")) return "chapter";
  if (type.includes("book") || type === "monograph") return "book";
  if (type.includes("journal") || type.includes("article") || type.includes("paper"))
    return "article";
  return "other";
}

function cleanDoi(raw) {
  if (!isFilled(raw)) return null;
  return raw
    .trim()
    .replace(/^https?:\/\/(dx\.)?doi\.org\//i, "")
    .replace(/^doi:/i, "")
    .toLowerCase();
}

function frenchList(names) {
  if (names.length === 0) return "";
  if (names.length === 1) return names[0];
  if (names.length > 4) return `${names[0]} et al.`;
  return `${names.slice(0, -1).join(", ")} et ${names[names.length - 1]}`;
}

/**
 * Chaîne de citation lisible. Elle ne prétend pas respecter une norme bibliographique :
 * elle doit être reconnaissable par un humain et vérifiable, le DOI portant l'identité.
 */
export function buildCitation({ authors = [], title, venue, year, publisher }) {
  const parts = [];
  const people = frenchList(authors.filter(isFilled));
  if (isFilled(people)) parts.push(people);
  if (isFilled(title)) parts.push(title);
  if (isFilled(venue)) parts.push(venue);
  if (isFilled(publisher) && publisher !== venue) parts.push(publisher);
  if (year) parts.push(String(year));
  return parts.join(", ");
}

/**
 * Fragment prêt à coller dans `primary_sources` / `secondary_sources`.
 *
 * Il sort **toujours** en `consulted: "metadata-only"`, sans localisation ni extrait, et
 * le validateur refuse une fiche validée sur cette seule base. C'est délibéré : une base
 * bibliographique atteste qu'un texte existe, jamais ce qu'il dit. Passer le fragment à
 * `excerpt` ou `full-text` est un geste d'agent, après lecture, jamais un défaut d'outil.
 */
export function corpusFragment(work) {
  return {
    citation: work.citation,
    year: work.year ?? null,
    language: work.language ?? null,
    kind: work.kind,
    doi_isbn: work.doi ?? work.isbn ?? null,
    url: work.url ?? null,
    locator: null,
    evidence: null,
    consulted: "metadata-only",
  };
}

function finalize(work) {
  const citation = buildCitation(work);
  const complete = {
    ...work,
    citation,
    reachable: Boolean(work.doi || work.isbn || work.url),
  };
  return { ...complete, corpus_fragment: corpusFragment(complete) };
}

export function normalizeOpenAlex(item) {
  const doi = cleanDoi(item?.doi);
  return finalize({
    source: "openalex",
    id: item?.id ?? null,
    title: item?.display_name ?? item?.title ?? null,
    authors: asArray(item?.authorships).map((a) => a?.author?.display_name).filter(isFilled),
    year: item?.publication_year ?? null,
    kind: normalizeKind(item?.type),
    venue: item?.primary_location?.source?.display_name ?? null,
    publisher: item?.primary_location?.source?.host_organization_name ?? null,
    language: item?.language ?? null,
    doi,
    isbn: null,
    url: doi ? `https://doi.org/${doi}` : (item?.primary_location?.landing_page_url ?? null),
    oa_url: item?.best_oa_location?.pdf_url ?? item?.open_access?.oa_url ?? null,
    cited_by_count: item?.cited_by_count ?? null,
  });
}

export function normalizeCrossref(item) {
  const doi = cleanDoi(item?.DOI);
  const authors = asArray(item?.author)
    .map((a) => [a?.given, a?.family].filter(isFilled).join(" ") || a?.name)
    .filter(isFilled);
  return finalize({
    source: "crossref",
    id: doi,
    title: asArray(item?.title)[0] ?? null,
    authors,
    year: asArray(asArray(item?.issued?.["date-parts"])[0])[0] ?? null,
    kind: normalizeKind(item?.type),
    venue: asArray(item?.["container-title"])[0] ?? null,
    publisher: item?.publisher ?? null,
    language: item?.language ?? null,
    doi,
    isbn: asArray(item?.ISBN)[0] ?? null,
    url: doi ? `https://doi.org/${doi}` : (item?.URL ?? null),
    oa_url: null,
    cited_by_count: item?.["is-referenced-by-count"] ?? null,
  });
}

export function normalizeSemanticScholar(item) {
  const external = item?.externalIds ?? {};
  const doi = cleanDoi(external.DOI);
  return finalize({
    source: "semantic_scholar",
    id: item?.paperId ?? null,
    title: item?.title ?? null,
    authors: asArray(item?.authors).map((a) => a?.name).filter(isFilled),
    year: item?.year ?? null,
    kind: normalizeKind(asArray(item?.publicationTypes)[0]),
    venue: item?.venue ?? null,
    publisher: null,
    language: null,
    doi,
    isbn: null,
    url: doi ? `https://doi.org/${doi}` : (item?.url ?? null),
    oa_url: item?.openAccessPdf?.url ?? null,
    cited_by_count: item?.citationCount ?? null,
  });
}

/** Zotero (API locale) : la bibliothèque personnelle, souvent la seule à porter les ouvrages. */
export function normalizeZotero(item) {
  const data = item?.data ?? item ?? {};
  const authors = asArray(data.creators)
    .filter((c) => c?.creatorType === "author" || !c?.creatorType)
    .map((c) => [c?.firstName, c?.lastName].filter(isFilled).join(" ") || c?.name)
    .filter(isFilled);
  const doi = cleanDoi(data.DOI);
  const year = /\b(1[5-9]\d{2}|20\d{2})\b/.exec(String(data.date ?? ""))?.[1];
  return finalize({
    source: "zotero",
    id: item?.key ?? data.key ?? null,
    title: data.title ?? null,
    authors,
    year: year ? Number(year) : null,
    kind: normalizeKind(data.itemType),
    venue: data.publicationTitle ?? data.bookTitle ?? null,
    publisher: data.publisher ?? null,
    language: data.language ?? null,
    doi,
    isbn: isFilled(data.ISBN) ? data.ISBN : null,
    url: doi ? `https://doi.org/${doi}` : (isFilled(data.url) ? data.url : null),
    oa_url: null,
    cited_by_count: null,
    zotero_key: item?.key ?? data.key ?? null,
  });
}

/**
 * HAL — l'archive ouverte française.
 *
 * Elle n'était pas dans la commande initiale, et elle est pourtant décisive ici : OpenAlex,
 * Crossref et Semantic Scholar sont indexés sur le DOI, quand une grande partie de la
 * littérature francophone en sciences sociales n'en a pas. Sans elle, la « couche
 * francophone cherchée en amont » resterait une intention.
 */
export function normalizeHal(doc) {
  const doi = cleanDoi(doc?.doiId_s);
  return finalize({
    source: "hal",
    id: doc?.halId_s ?? null,
    title: asArray(doc?.title_s)[0] ?? doc?.title_s ?? null,
    authors: asArray(doc?.authFullName_s),
    year: doc?.producedDateY_i ?? null,
    kind: normalizeKind(doc?.docType_s),
    venue: doc?.journalTitle_s ?? doc?.bookTitle_s ?? null,
    publisher: doc?.publisher_s ?? null,
    language: asArray(doc?.language_s)[0] ?? null,
    doi,
    isbn: asArray(doc?.isbn_s)[0] ?? null,
    url: doi ? `https://doi.org/${doi}` : (doc?.uri_s ?? null),
    oa_url: doc?.fileMain_s ?? null,
    cited_by_count: null,
  });
}

/**
 * Citation de Semantic Scholar, avec ses contextes et son intention.
 *
 * `contexts` est la phrase du **texte citant**, jamais celle du texte cité. C'est ce qui
 * permet de voir ce qu'une source fait dire à l'auteur avant de l'ouvrir — et c'est
 * exactement pour cela qu'elle ne peut jamais servir de citation de l'auteur.
 */
export function normalizeCitation(edge) {
  const paper = edge?.citingPaper ?? edge?.citedPaper ?? {};
  return {
    ...normalizeSemanticScholar(paper),
    contexts: asArray(edge?.contexts),
    intents: asArray(edge?.intents),
    influential: edge?.isInfluential ?? null,
    _warning:
      "`contexts` est écrit par le texte citant, pas par l'auteur cité : jamais une source primaire, jamais une citation d'auteur.",
  };
}

/**
 * Confronte une référence attendue à ce que la base renvoie.
 *
 * Ne rend jamais un verdict global : elle liste les écarts. « La référence existe » et
 * « la référence est celle qu'on croit » sont deux questions différentes, et c'est la
 * seconde qui fait perdre les corpus.
 */
export function compareReference(expected, canonical) {
  const mismatches = [];
  if (!canonical) return { resolved: false, mismatches: ["aucune notice trouvée"] };

  if (expected?.year && canonical.year && Number(expected.year) !== Number(canonical.year))
    mismatches.push(`année attendue ${expected.year}, notice ${canonical.year}`);

  if (isFilled(expected?.title) && isFilled(canonical.title)) {
    const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9àâäéèêëïîôöùûüç]+/g, " ").trim();
    const a = normalize(expected.title);
    const b = normalize(canonical.title);
    if (!b.includes(a) && !a.includes(b)) mismatches.push(`titre attendu « ${expected.title} », notice « ${canonical.title} »`);
  }

  if (isFilled(expected?.author) && canonical.authors.length > 0) {
    const family = expected.author.split(/\s+/).pop().toLowerCase();
    if (!canonical.authors.some((a) => a.toLowerCase().includes(family)))
      mismatches.push(`auteur « ${expected.author} » absent de la notice (${canonical.authors.join(", ")})`);
  }

  return { resolved: true, mismatches };
}
