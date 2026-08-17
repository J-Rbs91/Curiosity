import { describe, expect, it } from "vitest";
import { dayKey, pickDailyConcept } from "./next-card";
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

const corpus = ["a", "b", "c", "d"].map(concept);

describe("dayKey", () => {
  it("rend le jour civil local, et non le jour UTC", () => {
    // 31 décembre 23 h en heure locale : le jour du lecteur est encore le 31, quelle que
    // soit l'heure à Greenwich. Un toISOString() aurait rendu le 1er janvier.
    expect(dayKey(new Date(2026, 11, 31, 23, 30))).toBe("2026-12-31");
  });

  it("complète le mois et le jour sur deux chiffres", () => {
    expect(dayKey(new Date(2026, 0, 5, 12, 0))).toBe("2026-01-05");
  });
});

describe("pickDailyConcept", () => {
  it("ne propose rien sur un corpus vide", () => {
    expect(pickDailyConcept([], new Map(), "2026-08-17")).toBeUndefined();
  });

  it("rend la même carte à chaque ouverture d'une même journée", () => {
    const first = pickDailyConcept(corpus, new Map(), "2026-08-17");
    const held = { day: "2026-08-17", conceptId: first!.id };
    // Le lecteur rouvre l'application dans l'heure : c'est la même carte, même si elle
    // est désormais marquée comme vue.
    const seen = new Map([[first!.id, "2026-08-17T09:00:00.000Z"]]);
    expect(pickDailyConcept(corpus, seen, "2026-08-17", held)?.id).toBe(first!.id);
  });

  it("tire la même carte sans mémoire, la date suffisant à la déterminer", () => {
    // Un lecteur qui vide son stockage en cours de journée ne doit pas changer de carte.
    expect(pickDailyConcept(corpus, new Map(), "2026-08-17")?.id).toBe(
      pickDailyConcept(corpus, new Map(), "2026-08-17")?.id
    );
  });

  it("change de carte au jour suivant", () => {
    const today = pickDailyConcept(corpus, new Map(), "2026-08-17")!;
    const held = { day: "2026-08-17", conceptId: today.id };
    const seen = new Map([[today.id, "2026-08-17T09:00:00.000Z"]]);
    expect(pickDailyConcept(corpus, seen, "2026-08-18", held)?.id).not.toBe(today.id);
  });

  it("montre d'abord ce qui n'a pas été vu", () => {
    const seen = new Map([
      ["a", "2026-01-01T00:00:00.000Z"],
      ["b", "2026-01-01T00:00:00.000Z"],
      ["c", "2026-01-01T00:00:00.000Z"],
    ]);
    expect(pickDailyConcept(corpus, seen, "2026-08-17")?.id).toBe("d");
  });

  it("recommence par la plus ancienne quand tout a été vu", () => {
    const seen = new Map([
      ["a", "2026-03-01T00:00:00.000Z"],
      ["b", "2026-01-01T00:00:00.000Z"],
      ["c", "2026-02-01T00:00:00.000Z"],
      ["d", "2026-04-01T00:00:00.000Z"],
    ]);
    expect(pickDailyConcept(corpus, seen, "2026-08-17")?.id).toBe("b");
  });

  it("ne redonne pas la carte de la veille tant qu'il reste autre chose", () => {
    const seen = new Map(corpus.map((c) => [c.id, "2026-01-01T00:00:00.000Z"]));
    const held = { day: "2026-08-16", conceptId: "a" };
    expect(pickDailyConcept(corpus, seen, "2026-08-17", held)?.id).not.toBe("a");
  });

  it("propose la seule carte du corpus même si elle vient d'être vue", () => {
    const seen = new Map([["a", "2026-01-01T00:00:00.000Z"]]);
    const held = { day: "2026-08-16", conceptId: "a" };
    expect(pickDailyConcept([concept("a")], seen, "2026-08-17", held)?.id).toBe("a");
  });

  it("retire une carte du jour disparue du corpus au lieu de laisser l'écran vide", () => {
    const held = { day: "2026-08-17", conceptId: "disparue" };
    expect(pickDailyConcept(corpus, new Map(), "2026-08-17", held)).toBeDefined();
  });
});
