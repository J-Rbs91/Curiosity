import { describe, expect, it } from "vitest";

import {
  buildCitation,
  compareReference,
  corpusFragment,
  normalizeCitation,
  normalizeCrossref,
  normalizeHal,
  normalizeOpenAlex,
  normalizeSemanticScholar,
  normalizeZotero,
} from "./normalize.mjs";

/* Extraits de réponses réelles, réduits aux champs que le pipeline consomme. */

const OPENALEX = {
  id: "https://openalex.org/W2073072243",
  doi: "https://doi.org/10.2307/2392088",
  display_name: "A Garbage Can Model of Organizational Choice",
  publication_year: 1972,
  type: "article",
  language: "en",
  cited_by_count: 9000,
  authorships: [
    { author: { display_name: "Michael D. Cohen" } },
    { author: { display_name: "James G. March" } },
    { author: { display_name: "Johan P. Olsen" } },
  ],
  primary_location: { source: { display_name: "Administrative Science Quarterly" } },
  open_access: { oa_url: null },
};

const CROSSREF = {
  DOI: "10.2307/2392088",
  title: ["A Garbage Can Model of Organizational Choice"],
  author: [
    { given: "Michael D.", family: "Cohen" },
    { given: "James G.", family: "March" },
  ],
  issued: { "date-parts": [[1972, 3]] },
  type: "journal-article",
  "container-title": ["Administrative Science Quarterly"],
  publisher: "JSTOR",
  language: "en",
};

const HAL = {
  halId_s: "halshs-00000001",
  title_s: ["Le pouvoir et la règle"],
  authFullName_s: ["Erhard Friedberg"],
  producedDateY_i: 1993,
  docType_s: "OUV",
  publisher_s: "Seuil",
  language_s: ["fr"],
  uri_s: "https://shs.hal.science/halshs-00000001",
};

describe("normalisation — une forme unique pour quatre formats", () => {
  it("lit une notice OpenAlex", () => {
    const work = normalizeOpenAlex(OPENALEX);
    expect(work.doi).toBe("10.2307/2392088");
    expect(work.authors).toHaveLength(3);
    expect(work.year).toBe(1972);
    expect(work.kind).toBe("article");
    expect(work.reachable).toBe(true);
  });

  it("lit une notice Crossref et recompose les noms", () => {
    const work = normalizeCrossref(CROSSREF);
    expect(work.authors).toEqual(["Michael D. Cohen", "James G. March"]);
    expect(work.year).toBe(1972);
    expect(work.url).toBe("https://doi.org/10.2307/2392088");
  });

  it("lit une notice HAL, y compris sans DOI", () => {
    const work = normalizeHal(HAL);
    expect(work.doi).toBeNull();
    expect(work.language).toBe("fr");
    expect(work.kind).toBe("other");
    // Sans DOI mais avec une URI stable : la référence reste atteignable.
    expect(work.reachable).toBe(true);
  });

  it("extrait l'année d'une date Zotero et retient la clé", () => {
    const work = normalizeZotero({
      key: "ABCD1234",
      data: {
        title: "Le Phénomène bureaucratique",
        creators: [{ creatorType: "author", firstName: "Michel", lastName: "Crozier" }],
        date: "1963-01-01",
        itemType: "book",
        publisher: "Seuil",
        ISBN: "978-2-02-000603-7",
        language: "fr",
      },
    });
    expect(work.year).toBe(1963);
    expect(work.kind).toBe("book");
    expect(work.isbn).toBe("978-2-02-000603-7");
    expect(work.zotero_key).toBe("ABCD1234");
  });

  it("normalise un DOI quelle que soit sa forme", () => {
    expect(normalizeSemanticScholar({ externalIds: { DOI: "https://doi.org/10.1000/XYZ" } }).doi).toBe(
      "10.1000/xyz"
    );
  });

  it("marque comme inatteignable une notice sans identifiant ni URL", () => {
    expect(normalizeSemanticScholar({ title: "Sans identifiant" }).reachable).toBe(false);
  });
});

describe("corpus_fragment", () => {
  it("sort toujours en métadonnées seules, sans localisation ni extrait", () => {
    const fragment = normalizeOpenAlex(OPENALEX).corpus_fragment;
    expect(fragment.consulted).toBe("metadata-only");
    expect(fragment.locator).toBeNull();
    expect(fragment.evidence).toBeNull();
  });

  it("porte le DOI comme identifiant atteignable", () => {
    expect(normalizeOpenAlex(OPENALEX).corpus_fragment.doi_isbn).toBe("10.2307/2392088");
  });

  it("retombe sur l'ISBN quand il n'y a pas de DOI", () => {
    const fragment = corpusFragment({ citation: "x", kind: "book", isbn: "978-2-02-000603-7" });
    expect(fragment.doi_isbn).toBe("978-2-02-000603-7");
  });
});

describe("buildCitation", () => {
  it("compose une référence lisible", () => {
    expect(
      buildCitation({
        authors: ["Michael D. Cohen", "James G. March", "Johan P. Olsen"],
        title: "A Garbage Can Model of Organizational Choice",
        venue: "Administrative Science Quarterly",
        year: 1972,
      })
    ).toBe(
      "Michael D. Cohen, James G. March et Johan P. Olsen, A Garbage Can Model of Organizational Choice, Administrative Science Quarterly, 1972"
    );
  });

  it("abrège au-delà de quatre auteurs plutôt que d'allonger la ligne", () => {
    expect(buildCitation({ authors: ["A", "B", "C", "D", "E"], year: 2000 })).toBe("A et al., 2000");
  });
});

describe("normalizeCitation", () => {
  it("conserve contexte et intention, et rappelle qui écrit la phrase", () => {
    const citation = normalizeCitation({
      contexts: ["Following Cohen, March and Olsen (1972), decisions are…"],
      intents: ["background"],
      isInfluential: true,
      citingPaper: { title: "Un article citant", year: 1998, externalIds: { DOI: "10.1/abc" } },
    });
    expect(citation.contexts).toHaveLength(1);
    expect(citation.intents).toEqual(["background"]);
    expect(citation._warning).toContain("texte citant");
  });
});

describe("compareReference", () => {
  const canonical = normalizeCrossref(CROSSREF);

  it("ne conclut rien quand la notice est introuvable", () => {
    expect(compareReference({ year: 1972 }, null).resolved).toBe(false);
  });

  it("ne signale aucun écart quand tout concorde", () => {
    const result = compareReference(
      { year: 1972, title: "A Garbage Can Model of Organizational Choice", author: "March" },
      canonical
    );
    expect(result.mismatches).toEqual([]);
  });

  it("signale une année qui ne correspond pas", () => {
    expect(compareReference({ year: 1976 }, canonical).mismatches.join(" ")).toContain("1976");
  });

  it("signale un auteur absent de la notice", () => {
    expect(compareReference({ author: "Herbert Simon" }, canonical).mismatches.join(" ")).toContain(
      "Simon"
    );
  });

  it("tolère un titre partiel plutôt que de crier au faux", () => {
    expect(compareReference({ title: "Garbage Can Model" }, canonical).mismatches).toEqual([]);
  });
});
