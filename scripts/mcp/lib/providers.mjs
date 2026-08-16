/**
 * Accès réseau aux bases documentaires. Tout ce qui sort d'ici est déjà normalisé.
 *
 * Aucune clé n'est nécessaire : OpenAlex et Crossref sont ouverts, Semantic Scholar l'est
 * avec un débit réduit, Zotero est local. Deux variables d'environnement améliorent les
 * choses sans être requises :
 *
 * - `CORPUS_CONTACT_EMAIL` : place les appels OpenAlex et Crossref dans le « polite pool »,
 *   nettement plus rapide et plus stable.
 * - `SEMANTIC_SCHOLAR_API_KEY` : lève la limitation de débit du pool anonyme.
 */

const CONTACT = process.env.CORPUS_CONTACT_EMAIL ?? "";
const S2_KEY = process.env.SEMANTIC_SCHOLAR_API_KEY ?? "";
const ZOTERO_BASE = process.env.ZOTERO_LOCAL_API ?? "http://localhost:23119/api/users/0";
const USER_AGENT = `Curiosity-corpus/1 (+https://github.com/J-Rbs91/Curiosity${CONTACT ? `; mailto:${CONTACT}` : ""})`;

import {
  normalizeCitation,
  normalizeCrossref,
  normalizeHal,
  normalizeOpenAlex,
  normalizeSemanticScholar,
  normalizeZotero,
} from "./normalize.mjs";

/**
 * Un échec réseau ne doit jamais ressembler à une absence de résultat : une base
 * silencieuse ferait conclure « pas de source » là où il n'y a qu'un 429. Les erreurs
 * remontent donc telles quelles, et les 429/5xx sont réessayés avant d'abandonner.
 */
async function get(url, { headers = {}, attempts = 3, timeoutMs = 20000 } = {}) {
  let lastError;
  for (let attempt = 0; attempt < attempts; attempt++) {
    if (attempt > 0) await new Promise((r) => setTimeout(r, 500 * 2 ** attempt));
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetch(url, {
        headers: { "User-Agent": USER_AGENT, Accept: "application/json", ...headers },
        signal: controller.signal,
      });
      if (response.status === 429 || response.status >= 500) {
        lastError = new Error(`${response.status} ${response.statusText} — ${url}`);
        continue;
      }
      if (response.status === 404) return null;
      if (!response.ok) throw new Error(`${response.status} ${response.statusText} — ${url}`);
      return await response.json();
    } catch (error) {
      lastError = error;
      if (error.name !== "AbortError" && attempt === attempts - 1) throw error;
    } finally {
      clearTimeout(timer);
    }
  }
  throw lastError ?? new Error(`échec de ${url}`);
}

const polite = (params) => {
  if (CONTACT) params.set("mailto", CONTACT);
  return params;
};

/**
 * Un DOI contient une barre oblique qui est **structurelle** : `10.2307/2392088`. L'encoder
 * comme un caractère quelconque casse la résolution — Crossref rend alors 404, ce qui se
 * lit « référence introuvable » alors que la référence est parfaitement valide. On encode
 * donc segment par segment.
 */
const encodeDoi = (doi) =>
  String(doi)
    .replace(/^https?:\/\/(dx\.)?doi\.org\//i, "")
    .split("/")
    .map(encodeURIComponent)
    .join("/");

// --- OpenAlex --------------------------------------------------------------

export async function searchOpenAlex({ query, limit = 10, yearFrom, yearTo, language, openAccessOnly }) {
  const filters = [];
  if (yearFrom) filters.push(`from_publication_date:${yearFrom}-01-01`);
  if (yearTo) filters.push(`to_publication_date:${yearTo}-12-31`);
  if (language) filters.push(`language:${language}`);
  if (openAccessOnly) filters.push("is_oa:true");

  const params = polite(new URLSearchParams({ search: query, per_page: String(limit) }));
  if (filters.length > 0) params.set("filter", filters.join(","));

  const data = await get(`https://api.openalex.org/works?${params}`);
  return (data?.results ?? []).map(normalizeOpenAlex);
}

export async function getOpenAlexByDoi(doi) {
  const data = await get(`https://api.openalex.org/works/https://doi.org/${encodeDoi(doi)}?${polite(new URLSearchParams())}`);
  return data ? normalizeOpenAlex(data) : null;
}

// --- Crossref --------------------------------------------------------------

export async function searchCrossref({ query, limit = 10, yearFrom, yearTo }) {
  // `language` n'est pas un champ sélectionnable chez Crossref : le demander rend un 400
  // sur toute la requête. La langue vient donc d'OpenAlex ou de HAL, pas d'ici.
  const params = polite(
    new URLSearchParams({
      "query.bibliographic": query,
      rows: String(limit),
      select: "DOI,title,author,issued,type,container-title,publisher,ISBN,URL,is-referenced-by-count",
    })
  );
  if (yearFrom || yearTo)
    params.set("filter", [yearFrom && `from-pub-date:${yearFrom}-01-01`, yearTo && `until-pub-date:${yearTo}-12-31`]
      .filter(Boolean)
      .join(","));

  const data = await get(`https://api.crossref.org/works?${params}`);
  return (data?.message?.items ?? []).map(normalizeCrossref);
}

export async function getCrossrefByDoi(doi) {
  const data = await get(`https://api.crossref.org/works/${encodeDoi(doi)}?${polite(new URLSearchParams())}`);
  return data?.message ? normalizeCrossref(data.message) : null;
}

/** Recherche par ISBN — la seule voie praticable pour beaucoup d'ouvrages du périmètre. */
export async function getCrossrefByIsbn(isbn) {
  const params = polite(new URLSearchParams({ filter: `isbn:${isbn}`, rows: "5" }));
  const data = await get(`https://api.crossref.org/works?${params}`);
  return (data?.message?.items ?? []).map(normalizeCrossref);
}

// --- Semantic Scholar ------------------------------------------------------

const S2_FIELDS = "title,year,authors.name,externalIds,venue,openAccessPdf,citationCount,publicationTypes";
const s2Headers = () => (S2_KEY ? { "x-api-key": S2_KEY } : {});

export async function searchSemanticScholar({ query, limit = 10, yearFrom, yearTo }) {
  const params = new URLSearchParams({ query, limit: String(limit), fields: S2_FIELDS });
  if (yearFrom || yearTo) params.set("year", `${yearFrom ?? ""}-${yearTo ?? ""}`);
  const data = await get(`https://api.semanticscholar.org/graph/v1/paper/search?${params}`, {
    headers: s2Headers(),
  });
  return (data?.data ?? []).map(normalizeSemanticScholar);
}

export async function getCitations(doi, { limit = 25 } = {}) {
  const params = new URLSearchParams({
    limit: String(limit),
    fields: `contexts,intents,isInfluential,${S2_FIELDS}`,
  });
  const data = await get(
    `https://api.semanticscholar.org/graph/v1/paper/DOI:${encodeDoi(doi)}/citations?${params}`,
    { headers: s2Headers() }
  );
  return (data?.data ?? []).map(normalizeCitation);
}

export async function getReferences(doi, { limit = 50 } = {}) {
  const params = new URLSearchParams({
    limit: String(limit),
    fields: `contexts,intents,isInfluential,${S2_FIELDS}`,
  });
  const data = await get(
    `https://api.semanticscholar.org/graph/v1/paper/DOI:${encodeDoi(doi)}/references?${params}`,
    { headers: s2Headers() }
  );
  return (data?.data ?? []).map(normalizeCitation);
}

// --- HAL -------------------------------------------------------------------

/**
 * L'archive ouverte française, sans clé ni quota. Indispensable ici : Crozier, Friedberg
 * et la réception française de Weber ou Simon vivent largement hors du monde des DOI, là
 * où les trois bases précédentes ne voient rien.
 */
const HAL_FIELDS =
  "halId_s,title_s,authFullName_s,producedDateY_i,doiId_s,uri_s,docType_s,journalTitle_s,bookTitle_s,publisher_s,language_s,isbn_s,fileMain_s";

async function halQuery(q, { limit, yearFrom, yearTo }) {
  const params = new URLSearchParams({ q, rows: String(limit), wt: "json", fl: HAL_FIELDS });
  if (yearFrom || yearTo) params.set("fq", `producedDateY_i:[${yearFrom ?? "*"} TO ${yearTo ?? "*"}]`);
  const data = await get(`https://api.archives-ouvertes.fr/search/?${params}`);
  return (data?.response?.docs ?? []).map(normalizeHal);
}

/**
 * HAL applique un **ET implicite** sur tous les termes : « Crozier zones d'incertitude
 * organisation » ne rend qu'un document, quand la phrase exacte « zones d'incertitude » en
 * rend trente, tous pertinents. Forcer un OU produit l'inverse — cent mille résultats dont
 * les premiers n'ont aucun rapport.
 *
 * On garde donc le ET, précis, et on retombe une fois sur la phrase exacte quand il ne rend
 * rien. La stratégie retenue est rapportée : l'agent doit savoir ce qui a réellement été
 * interrogé, sous peine de lire un silence comme une absence de littérature.
 */
export async function searchHal({ query, limit = 10, yearFrom, yearTo }) {
  const options = { limit, yearFrom, yearTo };
  const direct = await halQuery(query, options);
  if (direct.length > 0) return direct.map((w) => ({ ...w, hal_strategy: "tous les termes (ET)" }));

  const terms = query.trim().split(/\s+/);
  if (terms.length < 2) return direct;

  const phrase = await halQuery(`"${query.replace(/"/g, "")}"`, options);
  return phrase.map((w) => ({ ...w, hal_strategy: "phrase exacte, après un ET sans résultat" }));
}

// --- Zotero (API locale) ---------------------------------------------------

/**
 * Zotero doit tourner sur la machine, avec l'API locale activée
 * (Paramètres → Avancé → « Autoriser les autres applications de cet ordinateur à
 * communiquer avec Zotero »). Sans cela l'appel échoue franchement, ce qui vaut mieux
 * qu'un résultat vide interprété comme une bibliothèque sans le texte cherché.
 */
export async function searchZotero({ query, limit = 25 }) {
  const params = new URLSearchParams({ q: query, limit: String(limit), format: "json" });
  const data = await get(`${ZOTERO_BASE}/items?${params}`, { attempts: 1, timeoutMs: 5000 });
  return (data ?? []).map(normalizeZotero);
}

export async function getZoteroItem(key) {
  const data = await get(`${ZOTERO_BASE}/items/${encodeURIComponent(key)}?format=json`, {
    attempts: 1,
    timeoutMs: 5000,
  });
  return data ? normalizeZotero(data) : null;
}
