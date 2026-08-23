// @vitest-environment jsdom
import { beforeEach, describe, expect, it, vi } from "vitest";
import { getProgressService } from "@/services/progress";
import { dayKey } from "@/domain/concepts/next-card";
import {
  dailyThresholdLabel,
  isDailyCardDiscovered,
  markDailyCardDiscovered,
  onDailyDiscovery,
} from "./daily-discovery";

const AUJOURD_HUI = new Date(2026, 7, 15, 14, 30);
const DEMAIN = new Date(2026, 7, 16, 9, 0);

/** Poser une carte du jour, comme le fait le tirage de l'écran d'Aujourd'hui. */
function tirer(jour: Date, conceptId = "bureaucratie") {
  getProgressService().setDaily(dayKey(jour), conceptId);
}

describe("le statut « concept du jour découvert »", () => {
  beforeEach(() => {
    window.localStorage.clear();
    getProgressService().reset();
  });

  it("est faux tant que la carte n'a pas été ouverte", () => {
    tirer(AUJOURD_HUI);
    expect(isDailyCardDiscovered(AUJOURD_HUI)).toBe(false);
  });

  it("devient vrai dès que la carte est découverte", () => {
    tirer(AUJOURD_HUI);
    markDailyCardDiscovered(AUJOURD_HUI);
    expect(isDailyCardDiscovered(AUJOURD_HUI)).toBe(true);
  });

  /*
   * Le cœur de la règle de minuit : le statut est porté par la carte du jour, donc il cesse
   * de valoir avec elle. Aucun réveil, aucune purge programmée — juste une comparaison de
   * jours civils, qui reste juste après une nuit, un redémarrage ou un changement de fuseau.
   */
  it("ne vaut plus le lendemain, sans qu'aucune remise à zéro n'ait lieu", () => {
    tirer(AUJOURD_HUI);
    markDailyCardDiscovered(AUJOURD_HUI);
    expect(isDailyCardDiscovered(DEMAIN)).toBe(false);
  });

  it("repart à faux quand le tirage du lendemain a eu lieu", () => {
    tirer(AUJOURD_HUI);
    markDailyCardDiscovered(AUJOURD_HUI);
    tirer(DEMAIN, "anomie");
    expect(isDailyCardDiscovered(DEMAIN)).toBe(false);
  });

  /*
   * Le rappel ne doit dépendre en rien du nombre d'ouvertures : découvrir la carte dix fois
   * n'écrit qu'une fois, et n'annonce qu'une fois.
   */
  it("n'écrit et n'annonce qu'une fois par jour, quel que soit le nombre d'ouvertures", () => {
    tirer(AUJOURD_HUI);
    const temoin = vi.fn();
    const off = onDailyDiscovery(temoin);

    for (let i = 0; i < 5; i += 1) markDailyCardDiscovered(AUJOURD_HUI);

    expect(temoin).toHaveBeenCalledTimes(1);
    off();
  });

  it("n'annonce rien quand aucune carte du jour n'a été tirée", () => {
    const temoin = vi.fn();
    const off = onDailyDiscovery(temoin);

    markDailyCardDiscovered(AUJOURD_HUI);

    expect(temoin).not.toHaveBeenCalled();
    expect(isDailyCardDiscovered(AUJOURD_HUI)).toBe(false);
    off();
  });

  it("ne déclare pas découverte une carte d'un autre jour", () => {
    tirer(AUJOURD_HUI);
    markDailyCardDiscovered(DEMAIN);
    expect(isDailyCardDiscovered(AUJOURD_HUI)).toBe(false);
  });

  it("laisse se désabonner", () => {
    tirer(AUJOURD_HUI);
    const temoin = vi.fn();
    onDailyDiscovery(temoin)();
    markDailyCardDiscovered(AUJOURD_HUI);
    expect(temoin).not.toHaveBeenCalled();
  });

  /*
   * L'oubli demandé depuis les Réglages efface aussi le statut : le lecteur repart d'une
   * mémoire vide, et le rappel doit repartir avec elle.
   */
  it("s'efface avec la progression", () => {
    tirer(AUJOURD_HUI);
    markDailyCardDiscovered(AUJOURD_HUI);
    getProgressService().reset();
    expect(isDailyCardDiscovered(AUJOURD_HUI)).toBe(false);
  });
});

describe("le libellé du seuil", () => {
  beforeEach(() => {
    window.localStorage.clear();
    getProgressService().reset();
  });

  it("annonce la découverte tant que la carte du jour n'a pas été ouverte", () => {
    tirer(AUJOURD_HUI);
    expect(dailyThresholdLabel(isDailyCardDiscovered(AUJOURD_HUI))).toBe("Concept du jour");
  });

  /*
   * Le cas visé : rouvrir l'application dans la journée après avoir lu la carte. Le seuil
   * se réaffiche — c'est la règle de l'ouverture, elle ne change pas — mais ce qu'il promet
   * est une relecture, et il le dit.
   */
  it("annonce la relecture quand la carte du jour a déjà été découverte", () => {
    tirer(AUJOURD_HUI);
    markDailyCardDiscovered(AUJOURD_HUI);
    expect(dailyThresholdLabel(isDailyCardDiscovered(AUJOURD_HUI))).toBe(
      "Revoir le concept du jour",
    );
  });

  /*
   * Et il repart de lui-même au passage de minuit : le statut est porté par la carte du
   * jour, donc la relecture d'hier ne déteint pas sur la découverte d'aujourd'hui.
   */
  it("redevient une découverte le lendemain", () => {
    tirer(AUJOURD_HUI);
    markDailyCardDiscovered(AUJOURD_HUI);
    expect(dailyThresholdLabel(isDailyCardDiscovered(DEMAIN))).toBe("Concept du jour");
  });
});
