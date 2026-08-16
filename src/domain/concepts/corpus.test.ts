import { describe, expect, it } from "vitest";
import { composeCorpus } from "./corpus";
import type { Concept } from "@/types";

function concept(id: string, title = id): Concept {
  return {
    id,
    slug: id,
    title,
    hookQuestion: "?",
    shortExplanation: "",
    authors: [],
    themes: [],
  };
}

describe("composeCorpus", () => {
  it("ne sert que les fiches vérifiées quand l'échafaudage est exclu", () => {
    const corpus = composeCorpus([concept("a")], [concept("b")], { includeFixtures: false });
    expect(corpus.map((c) => c.id)).toEqual(["a"]);
  });

  it("rend un corpus vide plutôt que de le remplir d'échafaudage", () => {
    expect(composeCorpus([], [concept("b")], { includeFixtures: false })).toEqual([]);
  });

  it("marque toute fiche d'échafaudage servie", () => {
    const corpus = composeCorpus([], [concept("b")], { includeFixtures: true });
    expect(corpus[0].provenance).toBe("fixture");
  });

  it("ne marque jamais une fiche vérifiée", () => {
    const corpus = composeCorpus([concept("a")], [], { includeFixtures: true });
    expect(corpus[0].provenance).toBeUndefined();
  });

  it("fait disparaître l'échafaudage d'un concept instruit depuis", () => {
    const corpus = composeCorpus([concept("a", "vérifié")], [concept("a", "échafaudage")], {
      includeFixtures: true,
    });
    expect(corpus).toHaveLength(1);
    expect(corpus[0].title).toBe("vérifié");
    expect(corpus[0].provenance).toBeUndefined();
  });

  it("place les fiches vérifiées avant l'échafaudage", () => {
    const corpus = composeCorpus([concept("z")], [concept("a")], { includeFixtures: true });
    expect(corpus.map((c) => c.id)).toEqual(["z", "a"]);
  });

  it("ne modifie pas les tableaux d'entrée", () => {
    const fixtures = [concept("b")];
    composeCorpus([], fixtures, { includeFixtures: true });
    expect(fixtures[0].provenance).toBeUndefined();
  });
});
