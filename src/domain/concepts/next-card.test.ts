import { describe, expect, it } from "vitest";
import { pickNextConcept } from "./next-card";
import type { Concept } from "@/types";

const concept = (id: string): Concept => ({
  id,
  slug: id,
  title: id,
  hookQuestion: "?",
  shortExplanation: "",
  authors: [],
  themes: [],
});

describe("pickNextConcept", () => {
  it("ne propose rien sur un corpus vide", () => {
    expect(pickNextConcept([], new Map())).toBeUndefined();
  });

  it("montre d'abord ce qui n'a pas été vu", () => {
    const seen = new Map([["a", "2026-01-01T00:00:00.000Z"]]);
    const picked = pickNextConcept([concept("a"), concept("b")], seen);
    expect(picked?.id).toBe("b");
  });

  it("évite de reproposer la carte affichée à l'instant", () => {
    const seen = new Map([
      ["a", "2026-01-02T00:00:00.000Z"],
      ["b", "2026-01-01T00:00:00.000Z"],
    ]);
    expect(pickNextConcept([concept("a"), concept("b")], seen, "b")?.id).toBe("a");
  });

  it("recommence par la plus ancienne quand tout a été vu", () => {
    const seen = new Map([
      ["a", "2026-03-01T00:00:00.000Z"],
      ["b", "2026-01-01T00:00:00.000Z"],
      ["c", "2026-02-01T00:00:00.000Z"],
    ]);
    expect(pickNextConcept([concept("a"), concept("b"), concept("c")], seen)?.id).toBe("b");
  });

  it("propose la seule carte du corpus même si elle vient d'être vue", () => {
    const seen = new Map([["a", "2026-01-01T00:00:00.000Z"]]);
    expect(pickNextConcept([concept("a")], seen, "a")?.id).toBe("a");
  });
});
