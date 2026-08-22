import { describe, expect, it } from "vitest";
import { pastCards } from "./past-cards";
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

describe("pastCards", () => {
  it("ne rend rien quand rien n'a été lu", () => {
    expect(pastCards(corpus, [])).toEqual([]);
  });

  it("rend les cartes lues, la plus récente d'abord", () => {
    expect(pastCards(corpus, ["a", "b", "c"]).map((c) => c.id)).toEqual(["c", "b", "a"]);
  });

  it("écarte la carte à l'écran de sa propre liste", () => {
    expect(pastCards(corpus, ["a", "b", "c"], "c").map((c) => c.id)).toEqual(["b", "a"]);
  });

  it("écarte la carte à l'écran même lue il y a longtemps", () => {
    // Le corpus est fini : une carte revient. Celle du jour n'a pas à figurer dans les
    // cartes précédentes sous prétexte qu'on l'avait déjà vue.
    expect(pastCards(corpus, ["a", "b", "c"], "a").map((c) => c.id)).toEqual(["c", "b"]);
  });

  it("écarte sans bruit une carte que le corpus ne contient plus", () => {
    // Conséquence assumée de ne stocker que des identifiants : une fiche retirée du
    // corpus disparaît de l'historique plutôt que d'y ouvrir sur une page introuvable.
    expect(pastCards(corpus, ["a", "retiree", "b"]).map((c) => c.id)).toEqual(["b", "a"]);
  });

  it("ne rend jamais deux fois la même carte", () => {
    // La liste stockée est déjà sans doublon — c'est `recordSeen` qui le garantit — et
    // rien ici ne doit en réintroduire.
    const cartes = pastCards(corpus, ["a", "b", "c", "d"]);
    expect(new Set(cartes.map((c) => c.id)).size).toBe(cartes.length);
  });
});
