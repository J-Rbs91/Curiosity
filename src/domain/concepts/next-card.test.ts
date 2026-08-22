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
    expect(pickDailyConcept([], [], "2026-08-17")).toBeUndefined();
  });

  it("rend la même carte à chaque ouverture d'une même journée", () => {
    const first = pickDailyConcept(corpus, [], "2026-08-17");
    const held = { day: "2026-08-17", conceptId: first!.id };
    // Le lecteur rouvre l'application dans l'heure : c'est la même carte, même si elle
    // est désormais marquée comme vue.
    expect(pickDailyConcept(corpus, [first!.id], "2026-08-17", held)?.id).toBe(first!.id);
  });

  it("tire la même carte sans mémoire, la date suffisant à la déterminer", () => {
    // Un lecteur qui vide son stockage en cours de journée ne doit pas changer de carte.
    expect(pickDailyConcept(corpus, [], "2026-08-17")?.id).toBe(
      pickDailyConcept(corpus, [], "2026-08-17")?.id
    );
  });

  it("change de carte au jour suivant", () => {
    const today = pickDailyConcept(corpus, [], "2026-08-17")!;
    const held = { day: "2026-08-17", conceptId: today.id };
    expect(pickDailyConcept(corpus, [today.id], "2026-08-18", held)?.id).not.toBe(today.id);
  });

  it("montre d'abord ce qui n'a pas été vu", () => {
    expect(pickDailyConcept(corpus, ["a", "b", "c"], "2026-08-17")?.id).toBe("d");
  });

  it("recommence par la plus ancienne quand tout a été vu", () => {
    // Le rang remplace l'horodatage : la tête de liste est la carte le plus anciennement
    // rencontrée, et c'est elle qui revient.
    expect(pickDailyConcept(corpus, ["b", "c", "a", "d"], "2026-08-17")?.id).toBe("b");
  });

  it("ne redonne pas la carte de la veille tant qu'il reste autre chose", () => {
    const held = { day: "2026-08-16", conceptId: "a" };
    expect(pickDailyConcept(corpus, ["a", "b", "c", "d"], "2026-08-17", held)?.id).not.toBe("a");
  });

  it("propose la seule carte du corpus même si elle vient d'être vue", () => {
    const held = { day: "2026-08-16", conceptId: "a" };
    expect(pickDailyConcept([concept("a")], ["a"], "2026-08-17", held)?.id).toBe("a");
  });

  it("retire une carte du jour disparue du corpus au lieu de laisser l'écran vide", () => {
    const held = { day: "2026-08-17", conceptId: "disparue" };
    expect(pickDailyConcept(corpus, [], "2026-08-17", held)).toBeDefined();
  });
});
