import { describe, it, expect } from "vitest";
import { buildConceptPrompt } from "./ai-prompt";
import type { Author, Concept, Theme } from "@/types";

const concept = {
  id: "c1",
  slug: "rationalite-limitee",
  title: "Rationalité limitée",
  hookQuestion: "Pourquoi personne ne compare toutes les options ?",
  shortExplanation:
    "Un décideur s'arrête à la première solution satisfaisante plutôt que d'explorer toutes les options.",
  detailedExplanation: "…",
  authors: ["a1"],
  themes: ["t1"],
  relatedConcepts: [],
  prerequisites: [],
  concreteExample: "…",
  analysisQuestions: [],
  quiz: [],
  difficulty: 2,
} as unknown as Concept;

const authors = [{ id: "a1", name: "Herbert A. Simon" }] as Author[];
const themes = [{ id: "t1", title: "Décision" }] as Theme[];

describe("buildConceptPrompt", () => {
  const prompt = buildConceptPrompt({ concept, authors, themes });

  it("transmet les quatre éléments visibles à l'écran", () => {
    expect(prompt).toContain("Décision");
    expect(prompt).toContain("Rationalité limitée");
    expect(prompt).toContain(concept.shortExplanation);
    expect(prompt).toContain("Herbert A. Simon");
  });

  it("interdit explicitement de nommer un niveau", () => {
    expect(prompt).toContain("N'annonce jamais de niveau");
    for (const interdit of ["pour un débutant", "niveau intermédiaire", "niveau avancé"]) {
      // Ces expressions ne doivent apparaître que dans la consigne qui les proscrit.
      expect(prompt).toContain(`« ${interdit} »`);
    }
  });

  it("demande des exemples, des sources et des recommandations", () => {
    expect(prompt).toContain("Trois exemples");
    expect(prompt).toContain("SOURCES");
    expect(prompt).toContain("POUR ALLER PLUS LOIN");
  });

  it("demande de signaler une référence incertaine plutôt que de l'inventer", () => {
    expect(prompt).toContain("au lieu de l'inventer");
  });

  it("reste lisible quand un concept n'a ni auteur ni thème rattaché", () => {
    const orphelin = buildConceptPrompt({ concept, authors: [], themes: [] });
    expect(orphelin).toContain("sociologie des organisations");
    expect(orphelin).toContain("non précisé");
    expect(orphelin).not.toContain("Auteur de référence : \n");
  });
});
