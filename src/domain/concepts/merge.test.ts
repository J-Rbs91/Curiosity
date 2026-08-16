import { describe, expect, it } from "vitest";
import { mergeConcepts } from "./merge";
import type { Concept } from "@/types";

function concept(id: string, title: string): Concept {
  return {
    id,
    slug: id,
    title,
    hookQuestion: "?",
    shortExplanation: "",
    detailedExplanation: "",
    authors: [],
    themes: [],
    relatedConcepts: [],
    prerequisites: [],
    concreteExample: "",
    analysisQuestions: [],
    quiz: [],
    difficulty: 1,
  };
}

describe("mergeConcepts", () => {
  it("remplace une fiche héritée par la fiche vérifiée de même identifiant", () => {
    const merged = mergeConcepts(
      [concept("a", "hérité A"), concept("b", "hérité B")],
      [concept("b", "vérifié B")]
    );

    expect(merged.map((c) => c.title)).toEqual(["hérité A", "vérifié B"]);
  });

  it("préserve l'ordre du corpus hérité et ajoute les nouveautés à la suite", () => {
    const merged = mergeConcepts(
      [concept("a", "A"), concept("b", "B")],
      [concept("c", "C"), concept("a", "A vérifié")]
    );

    expect(merged.map((c) => c.id)).toEqual(["a", "b", "c"]);
    expect(merged[0].title).toBe("A vérifié");
  });

  it("ne duplique jamais un identifiant", () => {
    const merged = mergeConcepts([concept("a", "A")], [concept("a", "A vérifié")]);
    expect(merged).toHaveLength(1);
  });

  it("rend le corpus hérité inchangé quand rien n'est encore validé", () => {
    const legacy = [concept("a", "A"), concept("b", "B")];
    expect(mergeConcepts(legacy, [])).toEqual(legacy);
  });
});
