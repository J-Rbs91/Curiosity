import { describe, expect, it } from "vitest";
import { nextMasteryScore, isUnderstood, needsReview, masteryLabel } from "./mastery";

describe("nextMasteryScore", () => {
  it("augmente le score d'un cran en cas de bonne réponse", () => {
    expect(nextMasteryScore(1, true)).toBe(2);
    expect(nextMasteryScore(3, true)).toBe(4);
  });

  it("plafonne à 5", () => {
    expect(nextMasteryScore(5, true)).toBe(5);
  });

  it("redescend d'un cran en cas de mauvaise réponse", () => {
    expect(nextMasteryScore(3, false)).toBe(2);
  });

  it("ne redescend jamais sous 1 (le concept reste 'découvert')", () => {
    expect(nextMasteryScore(1, false)).toBe(1);
  });
});

describe("isUnderstood / needsReview", () => {
  it("considère compris à partir de 3", () => {
    expect(isUnderstood(2)).toBe(false);
    expect(isUnderstood(3)).toBe(true);
  });

  it("signale un besoin de révision pour les scores 1 et 2", () => {
    expect(needsReview(0)).toBe(false);
    expect(needsReview(1)).toBe(true);
    expect(needsReview(2)).toBe(true);
    expect(needsReview(3)).toBe(false);
  });
});

describe("masteryLabel", () => {
  it("retourne un libellé pour chaque score", () => {
    expect(masteryLabel(0)).toBe("Jamais vu");
    expect(masteryLabel(5)).toBe("Maîtrisé");
  });
});
