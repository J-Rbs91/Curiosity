import { describe, it, expect } from "vitest";
import { buildConceptPrompt } from "./ai-prompt";
import type { Concept, Domain } from "@/types";

const domain: Domain = {
  id: "organizational-sociology",
  slug: "sociologie-des-organisations",
  label: "Sociologie des organisations",
  tagline: "",
  familyId: "humans-organizations",
  order: 1,
  description: "",
};

const concept: Concept = {
  id: "rationalite-limitee",
  slug: "rationalite-limitee",
  title: "Rationalité limitée",
  themeLabel: "Décision",
  authorLabel: "Herbert A. Simon",
  hookQuestion: "Pourquoi personne ne compare toutes les options ?",
  shortExplanation:
    "Un décideur s'arrête à la première solution satisfaisante plutôt que d'explorer toutes les options.",
  quotation: {
    text: "rationality is bounded when it falls short of omniscience",
    attributedTo: "Herbert A. Simon",
    reference: "Nobel Memorial Lecture, 1978, p. 356",
    translationNote: "Traduit de l'anglais pour cette fiche — traduction non publiée",
  },
  sources: [
    {
      label: "Simon, Rational Decision-Making in Business Organizations, 1978",
      kind: "primary",
      reference: "p. 356",
    },
  ],
  authors: ["simon"],
  themes: ["decision"],
};

describe("buildConceptPrompt", () => {
  const prompt = buildConceptPrompt({ concept, domain });

  it("cadre l'IA dans le domaine d'où vient la carte", () => {
    /*
     * La discipline était écrite en dur, ce qui restait vrai tant qu'il n'y en avait qu'une.
     * Demander une explication de sociologie des organisations sur un concept d'ergonomie ne
     * produit pas d'erreur visible — seulement une réponse cadrée par la mauvaise discipline.
     */
    expect(prompt).toContain("Tu es un pédagogue spécialiste de Sociologie des organisations.");
    expect(prompt).toContain("Domaine : Sociologie des organisations");
  });

  it("emporte les éléments de la carte", () => {
    expect(prompt).toContain("Décision");
    expect(prompt).toContain("Rationalité limitée");
    expect(prompt).toContain("Herbert A. Simon");
    expect(prompt).toContain(concept.shortExplanation);
  });

  it("emporte la citation avec sa référence et sa mention de traduction", () => {
    // C'est ce qui a coûté le plus cher à établir, et ce qui empêchera l'IA de partir
    // sur une vulgarisation. Le transmettre est tout l'intérêt du bouton.
    expect(prompt).toContain("rationality is bounded when it falls short of omniscience");
    expect(prompt).toContain("Nobel Memorial Lecture, 1978, p. 356");
    expect(prompt).toContain("traduction non publiée");
  });

  it("emporte les sources vérifiées", () => {
    expect(prompt).toContain("Sources vérifiées");
    expect(prompt).toContain("Simon, Rational Decision-Making in Business Organizations, 1978");
  });

  it("demande de tenir l'attribution transmise pour exacte", () => {
    // La mémoire d'un modèle n'a pas été vérifiée sur les textes ; ces éléments-là, si.
    expect(prompt).toContain("Tiens-les pour exacts");
    expect(prompt).toContain("plutôt que de les corriger");
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

  it("reste lisible quand ni domaine, ni auteur, ni thème ne sont renseignés", () => {
    const orphelin = buildConceptPrompt({
      concept: { ...concept, authorLabel: undefined, themeLabel: undefined, sources: undefined },
    });
    // Une discipline de repli serait une attribution inventée — exactement ce que le reste
    // du prompt s'emploie à empêcher. Le pédagogue reste alors sans spécialité.
    expect(orphelin).toContain("Tu es un pédagogue. Je veux comprendre");
    expect(orphelin).not.toContain("Domaine :");
    expect(orphelin).not.toContain("Thème :");
    expect(orphelin).toContain("non précisé");
    expect(orphelin).not.toContain("Sources vérifiées");
  });
});
