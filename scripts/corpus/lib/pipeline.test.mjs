import { describe, expect, it } from "vitest";

import { validateCorpus, validateRecord } from "./validate.mjs";
import { buildAttributionNote, buildQuotation, projectConcept } from "./project.mjs";

/**
 * Fiche minimale mais complète, servant de base aux cas de test. Les sources sont
 * fictives et n'ont pas vocation à documenter un vrai concept : ce qui est testé ici
 * est le garde-fou, pas le contenu.
 */
function record(overrides = {}) {
  const base = {
    id: "concept-test",
    slug: "concept-test",
    status: "VALIDATED",
    canonical_name_fr: "Concept de test",
    scope: { in_scope: true, rationale: "Sert les tests du pipeline." },
    attribution: {
      authors: [{ name: "Auteur Un", app_author_id: "merton" }],
      authorship: "SOLE_AUTHOR",
      associated_author: null,
      term_origin: { coined_by: null, coined_in: null, note: null },
    },
    evidence: {
      concept_definition: "Définition dans les termes de l'auteur.",
      mechanism: ["une règle est posée", "la conformité devient le critère"],
      primary_sources: [
        {
          citation: "Auteur Un, Ouvrage, 1949",
          year: 1949,
          doi_isbn: "978-0-00-000000-0",
          locator: "chap. 6, p. 195",
          evidence: "Passage établissant le point.",
          consulted: "excerpt",
        },
      ],
      secondary_sources: [
        {
          citation: "Autre Auteur, Article, 1994",
          doi_isbn: "10.1000/xyz123",
          role: "attribution",
          level: "B",
          establishes: "Rattache le concept à son auteur.",
        },
      ],
      francophone_sources: [],
      known_ambiguities: ["Le terme circule dans un sens plus large."],
      limitations: [],
    },
    pedagogy: {
      hook_question: "Et si la règle devenait plus importante que son objectif ?",
      short_explanation: "Résumé bref.",
      detailed_explanation: "Le mécanisme mis en phrases.",
      concrete_example: "Une situation où le mécanisme est visible.",
      example_setting: "administration",
      analysis_questions: ["Quel mécanisme est à l'œuvre ici ?"],
      quiz: [
        {
          id: "concept-test-q1",
          type: "mcq",
          prompt: "Question ?",
          choices: ["Faux", "Vrai"],
          correctAnswer: "1",
          explanation: "Parce que le mécanisme.",
        },
      ],
      traceability: [{ claim: "Résumé bref.", evidence_ref: "mechanism[0]" }],
    },
    graph: {
      themes: ["bureaucratie-regles"],
      difficulty: 2,
      related: [
        {
          id: "bureaucratie",
          relation_kind: "thematic_proximity",
          justification: "Même objet.",
          source: null,
        },
      ],
      prerequisites: [],
    },
    validation: {
      primary_source_confirmed: true,
      secondary_confirmation: true,
      francophone_layer_searched: true,
      evidence_review: { verdict: "PASS", rounds: 1, notes: [] },
      pedagogy_review: { verdict: "PASS", no_new_claims: true, rounds: 1, notes: [] },
      confidence_flags: [],
    },
    rejection_reason: null,
    provenance: { created_at: "2026-01-01", updated_at: "2026-01-01", pipeline_version: "1" },
  };
  return structuredClone({ ...base, ...overrides });
}

const context = {
  dir: "validated",
  themeIds: new Set(["bureaucratie-regles"]),
  authorIds: new Set(["merton", "march"]),
};

const errorsOf = (r, ctx = context) => validateRecord(r, ctx).errors;

describe("validateRecord — fiche conforme", () => {
  it("ne relève aucune erreur", () => {
    expect(errorsOf(record())).toEqual([]);
  });
});

describe("validateRecord — le contrôle ne peut pas être sauté", () => {
  it("refuse une fiche validée dont le contrôleur aveugle n'a pas conclu", () => {
    const r = record();
    r.validation.evidence_review.verdict = "REWORK";
    expect(errorsOf(r).join(" ")).toContain("passe A");
  });

  it("refuse une fiche validée dont la prose n'a pas été confrontée à la preuve", () => {
    const r = record();
    r.validation.pedagogy_review.no_new_claims = false;
    expect(errorsOf(r).join(" ")).toContain("n'ajoute aucune affirmation");
  });

  it("refuse une fiche validée sans couche francophone cherchée", () => {
    const r = record();
    r.validation.francophone_layer_searched = false;
    expect(errorsOf(r).join(" ")).toContain("couche francophone");
  });

  it("refuse un statut incohérent avec le répertoire", () => {
    expect(errorsOf(record({ status: "CANDIDATE" })).join(" ")).toContain("incohérent avec le répertoire");
  });
});

describe("validateRecord — hiérarchie des sources", () => {
  it("refuse une source primaire non atteignable", () => {
    const r = record();
    r.evidence.primary_sources[0].doi_isbn = null;
    expect(errorsOf(r).join(" ")).toContain("introuvable");
  });

  it("refuse une source primaire non localisée", () => {
    const r = record();
    r.evidence.primary_sources[0].locator = "";
    expect(errorsOf(r).join(" ")).toContain("locator");
  });

  it("refuse une validation appuyée sur des métadonnées seules", () => {
    const r = record();
    r.evidence.primary_sources[0].consulted = "metadata-only";
    expect(errorsOf(r).join(" ")).toContain("métadonnées seules");
  });

  it("refuse une fiche validée sans source secondaire académique", () => {
    const r = record();
    r.evidence.secondary_sources = [];
    expect(errorsOf(r).join(" ")).toContain("sans source secondaire");
  });
});

describe("validateRecord — attribution", () => {
  it("refuse un concept coécrit déclaré avec un seul auteur", () => {
    const r = record();
    r.attribution.authorship = "COAUTHORED";
    r.attribution.associated_author = "Auteur Un";
    expect(errorsOf(r).join(" ")).toContain("auteur principal ≠ auteur unique");
  });

  it("exige un auteur de rattachement quand la paternité n'est pas exclusive", () => {
    const r = record();
    r.attribution.authorship = "ASSOCIATED_WITH";
    expect(errorsOf(r).join(" ")).toContain("associated_author");
  });

  it("refuse un auteur inconnu de l'application", () => {
    const r = record();
    r.attribution.authors[0].app_author_id = "durkheim";
    expect(errorsOf(r).join(" ")).toContain("absent de src/content/authors.ts");
  });
});

describe("validateRecord — mécanisme et pédagogie", () => {
  it("refuse un mécanisme réduit à une étape", () => {
    const r = record();
    r.evidence.mechanism = ["une seule étape"];
    expect(errorsOf(r).join(" ")).toContain("au moins deux étapes");
  });

  it("refuse un chiffre présent dans la prose et absent de la preuve", () => {
    const r = record();
    r.pedagogy.detailed_explanation = "Dans son enquête de 1963, l'auteur observe ce mécanisme.";
    expect(errorsOf(r).join(" ")).toContain("« 1963 »");
  });

  it("accepte un chiffre qui figure dans les sources", () => {
    const r = record();
    r.pedagogy.detailed_explanation = "Formulé en 1949, ce mécanisme reste observable.";
    expect(errorsOf(r)).toEqual([]);
  });

  it("refuse un QCM dont la bonne réponse sort des choix", () => {
    const r = record();
    r.pedagogy.quiz[0].correctAnswer = "3";
    expect(errorsOf(r).join(" ")).toContain("hors des choix");
  });

  it("signale une fiche validée sans aucune incertitude déclarée", () => {
    const r = record();
    r.evidence.known_ambiguities = [];
    const { errors, warnings } = validateRecord(r, context);
    expect(errors).toEqual([]);
    expect(warnings.join(" ")).toContain("sans aucune incertitude déclarée");
  });
});

describe("validateRecord — citation de l'auteur", () => {
  /** Fiche dont la source primaire est en français : aucune traduction en jeu. */
  function quoted(quotation = {}) {
    const r = record();
    r.evidence.primary_sources[0].language = "fr";
    r.evidence.key_quotation = {
      text: "Le passage tel qu'il est imprimé.",
      language: "fr",
      primary_source_index: 0,
      locator: "chap. 6, p. 195",
      translation: { kind: "none" },
      ...quotation,
    };
    return r;
  }

  it("accepte une citation localisée dans une source réellement consultée", () => {
    expect(errorsOf(quoted())).toEqual([]);
  });

  it("reste facultative — un concept sans passage citable est une fiche valide", () => {
    expect(errorsOf(record())).toEqual([]);
  });

  it("refuse une citation qui ne pointe sur aucune source primaire", () => {
    expect(errorsOf(quoted({ primary_source_index: 7 })).join(" ")).toContain("ne pointe sur aucune");
  });

  it("refuse de citer un texte consulté en métadonnées seules", () => {
    const r = quoted();
    r.evidence.primary_sources[0].consulted = "metadata-only";
    expect(errorsOf(r).join(" ")).toContain("qu'on n'a pas ouvert");
  });

  it("refuse une citation sans localisation", () => {
    expect(errorsOf(quoted({ locator: "" })).join(" ")).toContain("bonne page");
  });

  it("refuse un extrait d'ouvrage déguisé en citation", () => {
    expect(errorsOf(quoted({ text: "mot ".repeat(200) })).join(" ")).toContain("citation courte");
  });

  it("détecte une traduction silencieuse quand la langue de la source diffère", () => {
    const r = quoted({ language: "fr" });
    r.evidence.primary_sources[0].language = "de";
    expect(errorsOf(r).join(" ")).toContain("traduction ≠ équivalence");
  });

  it("exige traducteur et édition pour une traduction publiée", () => {
    const r = quoted({ translation: { kind: "published", translator: null, edition: null } });
    r.evidence.primary_sources[0].language = "de";
    expect(errorsOf(r).join(" ")).toContain("traducteur et son édition");
  });

  it("exige le texte original quand la traduction est de notre fait", () => {
    const r = quoted({ translation: { kind: "in-house" } });
    r.evidence.primary_sources[0].language = "de";
    expect(errorsOf(r).join(" ")).toContain("revenir au texte");
  });

  it("refuse de prêter à un auteur les mots d'un ouvrage collectif", () => {
    const r = quoted();
    r.attribution.authorship = "COAUTHORED";
    r.attribution.authors.push({ name: "Auteur Deux", app_author_id: null });
    r.attribution.associated_author = "Auteur Un";
    expect(errorsOf(r).join(" ")).toContain("les mots de trois");
  });
});

describe("buildQuotation", () => {
  function quoted(quotation) {
    const r = record();
    r.evidence.primary_sources[0].language = "de";
    r.evidence.key_quotation = {
      text: "Le passage traduit.",
      language: "fr",
      original_language: "allemand",
      original_text: "Der Satz.",
      primary_source_index: 0,
      locator: "chap. 6, p. 195",
      ...quotation,
    };
    return r;
  }

  it("compose une référence qui permet de rouvrir le texte", () => {
    const q = buildQuotation(quoted({ translation: { kind: "none" } }));
    expect(q.reference).toBe("Auteur Un, Ouvrage, 1949, chap. 6, p. 195");
    expect(q.attributedTo).toBe("Auteur Un");
  });

  it("nomme le traducteur d'une traduction publiée", () => {
    const q = buildQuotation(
      quoted({ translation: { kind: "published", translator: "J. Freund", edition: "Plon, 1971" } })
    );
    expect(q.translationNote).toBe("Traduit de l'allemand par J. Freund (Plon, 1971)");
  });

  it("avoue une traduction non publiée plutôt que de la faire passer pour l'auteur", () => {
    const q = buildQuotation(quoted({ translation: { kind: "in-house" } }));
    expect(q.translationNote).toContain("non publiée");
  });

  it("élide correctement la langue d'origine", () => {
    const allemand = buildQuotation(quoted({ translation: { kind: "in-house" } }));
    expect(allemand.translationNote).toContain("de l'allemand");

    const russe = buildQuotation(
      quoted({ original_language: "russe", translation: { kind: "in-house" } })
    );
    expect(russe.translationNote).toContain("du russe");
  });

  it("omet la langue plutôt que d'accorder un code ISO", () => {
    const q = buildQuotation(quoted({ original_language: "de", translation: { kind: "in-house" } }));
    expect(q.translationNote).toBe("Traduit pour cette fiche — traduction non publiée");
  });

  it("ne stocke pas les guillemets : le texte reste comparable à l'édition", () => {
    const q = buildQuotation(quoted({ translation: { kind: "none" } }));
    expect(q.text).toBe("Le passage traduit.");
  });

  it("n'invente rien quand aucun passage n'a été établi", () => {
    expect(buildQuotation(record())).toBeUndefined();
  });
});

describe("validateRecord — graphe", () => {
  it("refuse une filiation documentée sans source", () => {
    const r = record();
    r.graph.related[0].relation_kind = "documented_filiation";
    expect(errorsOf(r).join(" ")).toContain("corrélation historique");
  });

  it("n'exige ni thème ni difficulté d'une fiche candidate", () => {
    // Le graphe est écrit en fin de chaîne : les réclamer plus tôt ferait inventer une
    // affirmation non instruite pour satisfaire l'outil.
    const r = record({ status: "CANDIDATE" });
    r.graph = { themes: [], related: [] };
    expect(errorsOf(r, { ...context, dir: "candidates" })).toEqual([]);
  });

  it("exige thème et difficulté dès qu'une fiche est validée", () => {
    const r = record();
    r.graph = { themes: [], related: [] };
    const errors = errorsOf(r).join(" ");
    expect(errors).toContain("graph.themes vide");
    expect(errors).toContain("difficulty");
  });

  it("contrôle une difficulté hors bornes même sur une candidate", () => {
    const r = record({ status: "CANDIDATE" });
    r.graph = { themes: [], difficulty: 9 };
    expect(errorsOf(r, { ...context, dir: "candidates" }).join(" ")).toContain("hors de 1..5");
  });

  it("refuse un thème inconnu de l'application", () => {
    const r = record();
    r.graph.themes = ["sociologie-generale"];
    expect(errorsOf(r).join(" ")).toContain("absent de src/content/themes.ts");
  });

  it("refuse un concept qui se référence lui-même", () => {
    const r = record();
    r.graph.related[0].id = r.id;
    expect(errorsOf(r).join(" ")).toContain("lui-même");
  });
});

describe("validateCorpus", () => {
  const wrap = (r) => ({ dir: "validated", file: `${r.id}.json`, record: r });

  it("refuse qu'une fiche vérifiée s'appuie sur ce qui ne l'est pas", () => {
    // « bureaucratie » n'existe que dans l'échafaudage : la relation ne peut pas passer.
    const { errors } = validateCorpus([wrap(record())]);
    expect(errors.join(" ")).toContain("aucune fiche validée");
  });

  it("accepte une relation entre deux fiches validées", () => {
    const cited = record({ id: "bureaucratie", slug: "bureaucratie" });
    cited.graph.related = [];
    const { errors } = validateCorpus([wrap(record()), wrap(cited)]);
    expect(errors).toEqual([]);
  });

  it("détecte un cycle de prérequis", () => {
    const a = record({ id: "a", slug: "a" });
    a.graph.related = [];
    a.graph.prerequisites = [{ id: "b", why: "…" }];
    const b = record({ id: "b", slug: "b" });
    b.graph.related = [];
    b.graph.prerequisites = [{ id: "a", why: "…" }];

    const { errors } = validateCorpus([wrap(a), wrap(b)]);
    expect(errors.join(" ")).toContain("cycle de prérequis");
  });

  it("détecte un identifiant en double", () => {
    const { errors } = validateCorpus([wrap(record()), wrap(record())]);
    expect(errors.join(" ")).toContain("deux fois");
  });
});

describe("la carte de l'application", () => {
  /**
   * Contrat entre le corpus et l'écran : thème, concept, citation, auteur, accroche,
   * résumé, sources. Si l'un de ces éléments cessait d'être garanti par la validation,
   * la carte se composerait avec un trou — et c'est le genre de régression qui ne se voit
   * qu'en production.
   */
  it("est entièrement composable depuis une fiche validée", () => {
    const r = record();
    r.evidence.primary_sources[0].language = "fr";
    r.evidence.key_quotation = {
      text: "Le passage.",
      language: "fr",
      primary_source_index: 0,
      locator: "p. 195",
      translation: { kind: "none" },
    };
    const concept = projectConcept(r);

    expect(concept.themes.length).toBeGreaterThan(0); // THÈME
    expect(concept.title).toBeTruthy(); // CONCEPT
    expect(concept.quotation.text).toBe("Le passage."); // CITATION
    expect(concept.authors.length).toBeGreaterThan(0); // AUTEUR
    expect(concept.hookQuestion).toBeTruthy(); // ACCROCHE
    expect(concept.shortExplanation).toBeTruthy(); // RÉSUMÉ
    expect(concept.sources.length).toBeGreaterThan(0); // SOURCES
  });

  it("reste composable sans citation — le seul élément facultatif", () => {
    const concept = projectConcept(record());
    expect(concept.quotation).toBeUndefined();
    for (const field of ["themes", "title", "authors", "hookQuestion", "shortExplanation", "sources"])
      expect(concept[field]).toBeTruthy();
  });

  it("refuse de valider une fiche dont la carte serait trouée", () => {
    const r = record();
    r.pedagogy.hook_question = "";
    r.graph.themes = [];
    const errors = errorsOf(r).join(" ");
    expect(errors).toContain("hook_question");
    expect(errors).toContain("themes");
  });
});

describe("projectConcept", () => {
  it("produit un objet Concept conforme au type de l'application", () => {
    const concept = projectConcept(record());

    expect(concept.id).toBe("concept-test");
    expect(concept.title).toBe("Concept de test");
    expect(concept.authors).toEqual(["merton"]);
    expect(concept.relatedConcepts).toEqual(["bureaucratie"]);
    expect(concept.quiz[0].choices).toHaveLength(2);
    expect(concept.difficulty).toBe(2);
  });

  it("distingue les niveaux de source au lieu de tout ranger en interprétation", () => {
    const concept = projectConcept(record());
    expect(concept.sources.map((s) => s.kind)).toEqual(["primary", "secondary-academic"]);
    expect(concept.sources[1].url).toBe("https://doi.org/10.1000/xyz123");
  });

  it("n'ajoute pas de note d'attribution quand l'auteur est unique", () => {
    expect(buildAttributionNote(record())).toBeUndefined();
  });

  it("rétablit les coauteurs d'un concept rangé sous un seul nom", () => {
    const r = record();
    r.attribution.authors = [
      { name: "Michael D. Cohen", app_author_id: null },
      { name: "James G. March", app_author_id: "march" },
      { name: "Johan P. Olsen", app_author_id: null },
    ];
    r.attribution.authorship = "COAUTHORED";
    r.attribution.associated_author = "James G. March";
    r.evidence.primary_sources[0].year = 1972;

    const note = buildAttributionNote(r);
    expect(note).toContain("Michael D. Cohen, James G. March et Johan P. Olsen");
    expect(note).toContain("1972");
    expect(note).toContain("James G. March");
  });

  it("signale un terme forgé par un tiers", () => {
    const r = record();
    r.attribution.term_origin = { coined_by: "Un Commentateur", coined_in: "1978", note: null };
    expect(buildAttributionNote(r)).toContain("Terme forgé par Un Commentateur");
  });
});
