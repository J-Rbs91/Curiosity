import { describe, expect, it } from "vitest";

import { CARD_LIMITS, validateRecord } from "./validate.mjs";
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
      traceability: [{ claim: "Résumé bref.", evidence_ref: "concept_definition" }],
    },
    graph: { themes: ["bureaucratie-regles"] },
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

  it("accepte un auteur que l'application ne connaît pas encore", () => {
    // Le corpus découvre les auteurs, l'application les reçoit. Exiger l'inverse ferait
    // de la table des auteurs le périmètre réel — huit noms — au lieu de la discipline.
    const r = record();
    r.attribution.authors[0].app_author_id = "gouldner";
    const { errors, warnings } = validateRecord(r, context);
    expect(errors).toEqual([]);
    expect(warnings.join(" ")).toContain("pas encore de page");
  });

  it("exige tout de même le nom de chaque auteur", () => {
    const r = record();
    r.attribution.authors[0].name = "";
    expect(errorsOf(r).join(" ")).toContain("name manquant");
  });
});

describe("validateRecord — pédagogie", () => {
  it("refuse un chiffre présent dans la prose et absent de la preuve", () => {
    const r = record();
    r.pedagogy.short_explanation = "Dans son enquête de 1963, l'auteur observe ce mécanisme.";
    expect(errorsOf(r).join(" ")).toContain("« 1963 »");
  });

  it("accepte un chiffre qui figure dans les sources", () => {
    const r = record();
    r.pedagogy.short_explanation = "Formulé en 1949, ce mécanisme reste observable.";
    expect(errorsOf(r)).toEqual([]);
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

  it("refuse une citation qui ne tiendrait pas dans la carte", () => {
    expect(errorsOf(quoted({ text: "mot ".repeat(200) })).join(" ")).toContain("tenir dans la carte");
  });

  it("se contente de le signaler tant que la fiche est en atelier", () => {
    // Une longueur excessive est un défaut de rédaction : elle doit bloquer la
    // publication, pas le travail en cours. Sans cette distinction, toute fiche en
    // contrôle rendait l'intégration continue rouge.
    const r = quoted({ text: "mot ".repeat(200) });
    r.status = "IN_REVIEW";
    const { errors, warnings } = validateRecord(r, { ...context, dir: "review" });
    expect(errors).toEqual([]);
    expect(warnings.join(" ")).toContain("tenir dans la carte");
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
  });

  it("ne répète pas le nom que la notice porte déjà", () => {
    // La notice commence par convention par son auteur : le nom affiché en tête de légende
    // le redisait mot pour mot.
    const q = buildQuotation(quoted({ translation: { kind: "none" } }));
    expect(q.attributedTo).toBeUndefined();
  });

  it("nomme l'auteur du passage quand ce n'est pas celui de la notice", () => {
    // Le cas d'un ouvrage collectif : la notice est celle du volume, la phrase est de
    // quelqu'un. Taire le nom attribuerait le passage au directeur de publication.
    const q = buildQuotation(
      quoted({ attributed_to: "Auteur Deux", translation: { kind: "none" } })
    );
    expect(q.attributedTo).toBe("Auteur Deux");
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

describe("la carte doit tenir dans un écran", () => {
  /*
   * Ces limites ont été mesurées sur un rendu réel en 390 × 844, tous champs au maximum
   * simultané. Elles sont dans le validateur et non dans une consigne parce qu'une
   * consigne s'oublie : le premier lot a produit des accroches de 311 caractères et des
   * résumés de 805, tous excellents et tous inaffichables.
   */
  it("refuse une accroche qui déborde", () => {
    const r = record();
    r.pedagogy.hook_question = "?".repeat(CARD_LIMITS.hook_question + 1);
    expect(errorsOf(r).join(" ")).toContain("la carte déborderait");
  });

  it("refuse un résumé qui déborde", () => {
    const r = record();
    r.pedagogy.short_explanation = "x".repeat(CARD_LIMITS.short_explanation + 1);
    expect(errorsOf(r).join(" ")).toContain("la carte déborderait");
  });

  it("accepte les champs pile à la limite", () => {
    const r = record();
    r.pedagogy.hook_question = "?".repeat(CARD_LIMITS.hook_question);
    r.pedagogy.short_explanation = "x".repeat(CARD_LIMITS.short_explanation);
    expect(errorsOf(r)).toEqual([]);
  });

  it("ne projette jamais plus de cinq sources", () => {
    const r = record();
    r.evidence.secondary_sources = Array.from({ length: 12 }, (_, i) => ({
      citation: `Source ${i}`,
      establishes: "…",
      level: "B",
    }));
    expect(projectConcept(r).sources).toHaveLength(CARD_LIMITS.sources);
  });

  it("garde les sources primaires en tête quand il faut trancher", () => {
    const r = record();
    r.evidence.francophone_sources = Array.from({ length: 9 }, (_, i) => ({
      citation: `Réception ${i}`,
      establishes: "…",
      level: "C",
    }));
    expect(projectConcept(r).sources[0].kind).toBe("primary");
  });
});

describe("la carte projetée", () => {
  it("porte les sept éléments et rien d'autre", () => {
    const r = record();
    r.graph.theme_labels = { "bureaucratie-regles": "Bureaucratie et règles" };
    r.evidence.primary_sources[0].language = "fr";
    r.evidence.key_quotation = {
      text: "Le passage.",
      language: "fr",
      primary_source_index: 0,
      locator: "p. 195",
      translation: { kind: "none" },
    };
    const c = projectConcept(r);

    expect(c.themeLabel).toBe("Bureaucratie et règles"); // THÈME
    expect(c.title).toBe("Concept de test"); // CONCEPT
    expect(c.quotation.text).toBe("Le passage."); // CITATION
    expect(c.authorLabel).toBe("Auteur Un"); // AUTEUR
    expect(c.hookQuestion).toBeTruthy(); // ACCROCHE
    expect(c.shortExplanation).toBeTruthy(); // RÉSUMÉ
    expect(c.sources.length).toBeGreaterThan(0); // SOURCES

    // Ce qui servait la session d'apprentissage ne doit plus être projeté.
    for (const parti of ["detailedExplanation", "concreteExample", "quiz", "difficulty",
                         "relatedConcepts", "prerequisites", "analysisQuestions"])
      expect(c[parti]).toBeUndefined();
  });

  it("ne projette jamais plus de cinq sources", () => {
    const r = record();
    r.evidence.secondary_sources = Array.from({ length: 12 }, (_, i) => ({
      citation: `Source ${i}`,
      establishes: "…",
      level: "B",
    }));
    expect(projectConcept(r).sources).toHaveLength(CARD_LIMITS.sources);
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
    expect(buildAttributionNote(r)).toContain("Michael D. Cohen, James G. March et Johan P. Olsen");
  });
});
