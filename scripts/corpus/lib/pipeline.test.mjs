import { describe, expect, it } from "vitest";

import { CARD_LIMITS, validateCorpus, validateRecord } from "./validate.mjs";
import { buildQuotation, projectConcept, projectCorpus } from "./project.mjs";

/**
 * Carte minimale mais complète, servant de base aux cas de test. Les sources sont fictives
 * et n'ont pas vocation à documenter un vrai concept : ce qui est testé ici est le
 * garde-fou, pas le contenu.
 */
function carte(overrides = {}) {
  const base = {
    id: "concept-test",
    slug: "concept-test",
    status: "VALIDATED",
    title: "Concept de test",
    themes: ["bureaucratie-regles"],
    theme_labels: { "bureaucratie-regles": "Bureaucratie et règles" },
    authors: [{ name: "Auteur Un", app_author_id: "merton" }],
    quotation: {
      text: "Un passage de l'auteur, mot pour mot.",
      reference: "Auteur Un, Ouvrage, 1949.",
      locator: "p. 195",
      translation: { kind: "none" },
    },
    hook: "Et si la règle devenait plus importante que son objectif ?",
    summary: "Résumé bref.",
    sources: [
      {
        label: "Auteur Un, Ouvrage, 1949.",
        kind: "primary",
        locator: "chap. 6, p. 195",
        doi_isbn: "978-0-00-000000-0",
        consulted: "full-text",
      },
      {
        label: "Autre Auteur, Article, 1994.",
        kind: "secondary-academic",
        doi_isbn: "10.1000/xyz123",
        consulted: "full-text",
      },
    ],
    review: {
      reviewer: "contrôle",
      date: "2026-01-01",
      attribution: "confirmee",
      quotation: "verbatim",
      sources: "resolvent",
      prose: "fidele",
      verdict: "PASS",
      rounds: 1,
      notes: [],
    },
  };
  return structuredClone({ ...base, ...overrides });
}

const context = {
  dir: "validated",
  themeIds: new Set(["bureaucratie-regles", "pouvoir"]),
  authorIds: new Set(["merton", "march"]),
};

const errorsOf = (r, ctx = context) => validateRecord(r, ctx).errors;
const warningsOf = (r, ctx = context) => validateRecord(r, ctx).warnings;

// ---------------------------------------------------------------------------

describe("validateRecord — carte conforme", () => {
  it("ne relève aucune erreur", () => {
    expect(errorsOf(carte())).toEqual([]);
  });
});

describe("validateRecord — identité et état", () => {
  it("refuse un id qui n'est pas en kebab-case", () => {
    expect(errorsOf(carte({ id: "Concept_Test" }))).toContainEqual(expect.stringContaining("id"));
  });

  it("refuse un status incohérent avec le répertoire", () => {
    expect(errorsOf(carte({ status: "IN_REVIEW" }))).toContainEqual(
      expect.stringContaining("incohérent avec le répertoire")
    );
  });

  it("refuse un rejet non motivé", () => {
    const errors = errorsOf(carte({ status: "REJECTED", rejection_reason: null }), {
      ...context,
      dir: "rejected",
    });
    expect(errors).toContainEqual(expect.stringContaining("rejection_reason"));
  });
});

describe("validateRecord — les sept éléments de la carte", () => {
  it("exige un titre", () => {
    expect(errorsOf(carte({ title: "" }))).toContainEqual(expect.stringContaining("title"));
  });

  it("exige au moins un auteur nommé", () => {
    expect(errorsOf(carte({ authors: [] }))).toContainEqual(expect.stringContaining("authors"));
    expect(errorsOf(carte({ authors: [{ app_author_id: "merton" }] }))).toContainEqual(
      expect.stringContaining("name")
    );
  });

  it("exige au moins un thème", () => {
    expect(errorsOf(carte({ themes: [] }))).toContainEqual(expect.stringContaining("themes"));
  });

  it("accepte un thème inconnu de l'application s'il porte un libellé", () => {
    const nouveau = carte({ themes: ["sociologie-du-risque"], theme_labels: {} });
    expect(errorsOf(nouveau)).toContainEqual(expect.stringContaining("theme_labels"));

    const libelle = carte({
      themes: ["sociologie-du-risque"],
      theme_labels: { "sociologie-du-risque": "Sociologie du risque" },
    });
    expect(errorsOf(libelle)).toEqual([]);
    expect(warningsOf(libelle)).toContainEqual(expect.stringContaining("thème nouveau"));
  });

  it("signale un auteur sans page dans l'application sans bloquer", () => {
    const inconnu = carte({ authors: [{ name: "Joan Acker", app_author_id: "acker" }] });
    expect(errorsOf(inconnu)).toEqual([]);
    expect(warningsOf(inconnu)).toContainEqual(expect.stringContaining("acker"));
  });

  it("exige accroche et résumé pour publier", () => {
    expect(errorsOf(carte({ hook: "" }))).toContainEqual(expect.stringContaining("hook"));
    expect(errorsOf(carte({ summary: "" }))).toContainEqual(expect.stringContaining("summary"));
  });

  it("laisse un candidat sans accroche ni résumé : il n'est pas encore écrit", () => {
    const candidat = carte({ status: "CANDIDATE", hook: "", summary: "", sources: [] });
    const { errors, warnings } = validateRecord(candidat, { ...context, dir: "candidates" });
    expect(errors).toEqual([]);
    expect(warnings.length).toBeGreaterThan(0);
  });
});

describe("validateRecord — longueurs d'affichage", () => {
  it("refuse de publier une accroche qui déborde de l'écran", () => {
    const long = carte({ hook: "?".repeat(CARD_LIMITS.hook + 1) });
    expect(errorsOf(long)).toContainEqual(expect.stringContaining("hook"));
  });

  it("refuse de publier un résumé trop long", () => {
    const long = carte({ summary: "x".repeat(CARD_LIMITS.summary + 1) });
    expect(errorsOf(long)).toContainEqual(expect.stringContaining("summary"));
  });

  it("refuse de publier un titre trop long", () => {
    const long = carte({ title: "x".repeat(CARD_LIMITS.title + 1) });
    expect(errorsOf(long)).toContainEqual(expect.stringContaining("title"));
  });

  it("signale sans bloquer tant que la fiche est en atelier", () => {
    const long = carte({ status: "IN_REVIEW", summary: "x".repeat(CARD_LIMITS.summary + 1) });
    const { errors, warnings } = validateRecord(long, { ...context, dir: "review" });
    expect(errors).toEqual([]);
    expect(warnings).toContainEqual(expect.stringContaining("summary"));
  });
});

describe("validateRecord — citation", () => {
  it("accepte une carte sans citation", () => {
    const sans = carte({ quotation: null, review: { ...carte().review, quotation: "absente" } });
    expect(errorsOf(sans)).toEqual([]);
  });

  it("exige une référence et un localisateur", () => {
    expect(errorsOf(carte({ quotation: { text: "x", locator: "p. 1" } }))).toContainEqual(
      expect.stringContaining("reference")
    );
    expect(errorsOf(carte({ quotation: { text: "x", reference: "Ouvrage" } }))).toContainEqual(
      expect.stringContaining("locator")
    );
  });

  it("refuse une citation trop longue pour la carte", () => {
    const q = { ...carte().quotation, text: "x".repeat(CARD_LIMITS.quotation + 1) };
    expect(errorsOf(carte({ quotation: q }))).toContainEqual(expect.stringContaining("caractères"));
  });

  it("exige traducteur et édition pour une traduction publiée", () => {
    const q = { ...carte().quotation, translation: { kind: "published", translator: "X" } };
    expect(errorsOf(carte({ quotation: q }))).toContainEqual(expect.stringContaining("traducteur"));
  });

  it("exige que la provenance d'une traduction de notre fait soit dite", () => {
    const q = { ...carte().quotation, translation: { kind: "in-house" } };
    expect(errorsOf(carte({ quotation: q }))).toContainEqual(
      expect.stringContaining("traduction ≠ équivalence")
    );
  });
});

describe("validateRecord — sources", () => {
  it("refuse une source sans DOI, ISBN ni URL", () => {
    const sources = [{ ...carte().sources[0], doi_isbn: null, url: null }];
    expect(errorsOf(carte({ sources }))).toContainEqual(expect.stringContaining("introuvable"));
  });

  it("refuse un niveau de source inconnu", () => {
    const sources = [{ ...carte().sources[0], kind: "blog" }];
    expect(errorsOf(carte({ sources }))).toContainEqual(expect.stringContaining("kind"));
  });

  it("refuse plus de cinq sources : la carte n'en montre pas davantage", () => {
    const one = carte().sources[0];
    const sources = Array.from({ length: CARD_LIMITS.sources + 1 }, () => ({ ...one }));
    expect(errorsOf(carte({ sources }))).toContainEqual(expect.stringContaining("au plus"));
  });

  it("refuse un localisateur qui est une note de contrôle et non un pointeur", () => {
    const sources = [
      {
        ...carte().sources[0],
        locator: "Article entier, p. 149-164, lu intégralement. Sections : BACKGROUND (p. 149-150) ; …",
      },
    ];
    expect(errorsOf(carte({ sources }))).toContainEqual(expect.stringContaining("pointeur"));
  });

  it("refuse une notice qui porte un commentaire de dossier", () => {
    const sources = [{ ...carte().sources[0], label: "Auteur Un, Ouvrage, 1949. ".repeat(12) }];
    expect(errorsOf(carte({ sources }))).toContainEqual(expect.stringContaining("commentaire"));
  });

  it("laisse un candidat porter ses notes de lecture", () => {
    const sources = [{ ...carte().sources[0], locator: "x".repeat(200) }];
    const candidat = carte({ status: "CANDIDATE", sources });
    const { errors, warnings } = validateRecord(candidat, { ...context, dir: "candidates" });
    expect(errors).toEqual([]);
    expect(warnings).toContainEqual(expect.stringContaining("pointeur"));
  });

  it("refuse de publier sans source primaire", () => {
    const sources = [{ ...carte().sources[1] }];
    expect(errorsOf(carte({ sources }))).toContainEqual(
      expect.stringContaining("sans source primaire")
    );
  });

  it("refuse de publier si aucune source primaire n'a été ouverte", () => {
    const sources = [
      { ...carte().sources[0], consulted: "metadata-only" },
      { ...carte().sources[1] },
    ];
    expect(errorsOf(carte({ sources }))).toContainEqual(
      expect.stringContaining("qu'on n'a pas ouvert")
    );
  });
});

describe("validateRecord — verrou de publication", () => {
  it("refuse de publier sans verdict PASS", () => {
    const review = { ...carte().review, verdict: "REWORK" };
    expect(errorsOf(carte({ review }))).toContainEqual(expect.stringContaining("REWORK"));
  });

  it("refuse de publier sur une attribution douteuse", () => {
    const review = { ...carte().review, attribution: "douteuse" };
    expect(errorsOf(carte({ review }))).toContainEqual(expect.stringContaining("attribution"));
  });

  it("refuse de publier une prose qui excède les sources", () => {
    const review = { ...carte().review, prose: "deborde" };
    expect(errorsOf(carte({ review }))).toContainEqual(expect.stringContaining("prose"));
  });

  it("refuse de publier une citation non relevée sur le texte", () => {
    const review = { ...carte().review, quotation: "non-verifiee" };
    expect(errorsOf(carte({ review }))).toContainEqual(expect.stringContaining("citation"));
  });

  it("refuse de publier des sources qui ne résolvent pas", () => {
    const review = { ...carte().review, sources: "introuvables" };
    expect(errorsOf(carte({ review }))).toContainEqual(expect.stringContaining("sources"));
  });

  it("rejette au-delà de trois tours de correction", () => {
    const review = { ...carte().review, rounds: 4 };
    expect(errorsOf(carte({ review }))).toContainEqual(expect.stringContaining("3 tours"));
  });

  it("laisse une fiche en atelier échapper au verrou", () => {
    const atelier = carte({ status: "IN_REVIEW", review: { verdict: "PENDING" } });
    expect(validateRecord(atelier, { ...context, dir: "review" }).errors).toEqual([]);
  });
});

describe("validateCorpus", () => {
  it("refuse deux fiches de même id", () => {
    const records = [
      { dir: "validated", record: carte() },
      { dir: "review", record: carte({ status: "IN_REVIEW", slug: "autre" }) },
    ];
    expect(validateCorpus(records).errors).toContainEqual(expect.stringContaining("deux fois"));
  });

  it("refuse deux fiches de même slug", () => {
    const records = [
      { dir: "validated", record: carte() },
      { dir: "review", record: carte({ id: "autre", status: "IN_REVIEW" }) },
    ];
    expect(validateCorpus(records).errors).toContainEqual(expect.stringContaining("slug"));
  });

  it("ne dit rien d'un corpus sain", () => {
    expect(validateCorpus([{ dir: "validated", record: carte() }]).errors).toEqual([]);
  });
});

// ---------------------------------------------------------------------------

describe("buildQuotation", () => {
  it("joint la notice et le localisateur sans doubler le point final", () => {
    const q = buildQuotation(carte());
    expect(q.reference).toBe("Auteur Un, Ouvrage, 1949, p. 195");
  });

  it("n'affiche le nom que lorsqu'il apprend quelque chose", () => {
    expect(buildQuotation(carte()).attributedTo).toBeUndefined();
    const attribue = carte({
      quotation: { ...carte().quotation, attributed_to: "Coauteur du volume" },
    });
    expect(buildQuotation(attribue).attributedTo).toBe("Coauteur du volume");
  });

  it("nomme le traducteur d'une traduction publiée", () => {
    const q = buildQuotation(
      carte({
        quotation: {
          ...carte().quotation,
          original_language: "allemand",
          translation: { kind: "published", translator: "Julien Freund", edition: "Plon, 1971" },
        },
      })
    );
    expect(q.translationNote).toBe("Traduit de l'allemand par Julien Freund (Plon, 1971)");
  });

  it("avoue une traduction non publiée", () => {
    const q = buildQuotation(
      carte({
        quotation: {
          ...carte().quotation,
          original_language: "anglais",
          translation: { kind: "in-house", translator: "chaîne Curiosity" },
        },
      })
    );
    expect(q.translationNote).toContain("non publiée");
  });

  it("ne rend rien quand la fiche ne porte pas de citation", () => {
    expect(buildQuotation(carte({ quotation: null }))).toBeUndefined();
  });
});

describe("projectConcept", () => {
  it("rend les sept éléments de la carte", () => {
    const concept = projectConcept(carte());
    expect(concept).toMatchObject({
      id: "concept-test",
      slug: "concept-test",
      title: "Concept de test",
      themeLabel: "Bureaucratie et règles",
      authorLabel: "Auteur Un",
      hookQuestion: "Et si la règle devenait plus importante que son objectif ?",
      shortExplanation: "Résumé bref.",
      authors: ["merton"],
      themes: ["bureaucratie-regles"],
    });
    expect(concept.quotation.text).toBe("Un passage de l'auteur, mot pour mot.");
    expect(concept.sources).toHaveLength(2);
  });

  it("rend une source résolvable par son DOI", () => {
    const [, secondaire] = projectConcept(carte()).sources;
    expect(secondaire.url).toBe("https://doi.org/10.1000/xyz123");
  });

  it("n'invente pas d'URL pour un ISBN", () => {
    const [primaire] = projectConcept(carte()).sources;
    expect(primaire.url).toBeUndefined();
    expect(primaire.reference).toBe("chap. 6, p. 195 · 978-0-00-000000-0");
  });

  it("reprend la note d'attribution telle qu'elle est écrite, sans la composer", () => {
    const note = "Concept coécrit avec X, habituellement rangé sous Y.";
    expect(projectConcept(carte({ attribution_note: note })).attributionNote).toBe(note);
  });

  it("omet l'auteur applicatif quand l'application ne lui consacre pas de page", () => {
    const concept = projectConcept(carte({ authors: [{ name: "Joan Acker" }] }));
    expect(concept.authors).toEqual([]);
    expect(concept.authorLabel).toBe("Joan Acker");
  });
});

describe("projectCorpus", () => {
  it("ne projette que les fiches validées", () => {
    const records = [carte(), carte({ id: "en-atelier", slug: "en-atelier", status: "IN_REVIEW" })];
    expect(projectCorpus(records).map((c) => c.id)).toEqual(["concept-test"]);
  });

  it("rend un ordre stable", () => {
    const records = [
      carte({ id: "zeta", slug: "zeta" }),
      carte({ id: "alpha", slug: "alpha" }),
    ];
    expect(projectCorpus(records).map((c) => c.id)).toEqual(["alpha", "zeta"]);
  });
});
