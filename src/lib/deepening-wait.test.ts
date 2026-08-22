import { describe, expect, it } from "vitest";

import { DEEPENING_WAIT_MS, drawDeepeningWaitMs } from "@/lib/deepening-wait";
import { GAZE_SEQUENCES } from "@/components/ui/mark-geometry.mjs";

/**
 * Ce que ces contrôles protègent.
 *
 * L'attente et la partition qui l'occupe sont deux fichiers, et ils doivent tomber juste
 * ensemble : la lecture se termine quand le texte arrive parce que la durée tirée devient la
 * durée de l'animation, et pour aucune autre raison. Un plancher retouché d'un côté et pas de
 * l'autre ne casse rien de visible — il produit une attente qui finit pendant que l'œil lit
 * encore, ou un œil qui a fini depuis une demi-seconde.
 */
describe("l'attente d'« Approfondir »", () => {
  it("tient les deux bornes annoncées", () => {
    expect(drawDeepeningWaitMs(() => 0)).toBe(DEEPENING_WAIT_MS.min);
    // `Math.random` ne rend jamais 1 : la borne haute est une limite, et c'est elle qu'on vise.
    expect(drawDeepeningWaitMs(() => 0.999999)).toBe(DEEPENING_WAIT_MS.max);
  });

  it("ne sort jamais de l'intervalle", () => {
    for (let i = 0; i <= 100; i++) {
      const duree = drawDeepeningWaitMs(() => i / 100);
      expect(duree).toBeGreaterThanOrEqual(DEEPENING_WAIT_MS.min);
      expect(duree).toBeLessThanOrEqual(DEEPENING_WAIT_MS.max);
    }
  });

  it("rend une durée entière, parce qu'une propriété CSS la reçoit en millisecondes", () => {
    for (const tirage of [0.1234, 0.5, 0.87654]) {
      expect(Number.isInteger(drawDeepeningWaitMs(() => tirage))).toBe(true);
    }
  });

  it("prend pour plancher la durée nominale de la partition qui l'occupe", () => {
    // La feuille de style ne peut déclarer qu'une durée ; l'écran la remplace par celle qu'il a
    // tirée. Si ces deux valeurs divergeaient, la fraction de seconde qui précède le tirage
    // jouerait une partition à la mauvaise échelle, et le contrôle du scintillement porterait
    // sur un cas qui n'existe pas.
    expect(GAZE_SEQUENCES.reading.durationMs).toBe(DEEPENING_WAIT_MS.min);
  });

  it("garde un tirage assez large pour qu'on ne puisse pas l'anticiper", () => {
    // Une attente constante s'apprend en trois appuis. L'écart doit rester perceptible : moins
    // d'un quart du plancher, et deux tirages se ressemblent trop pour que ce soit encore un
    // tirage.
    const ecart = DEEPENING_WAIT_MS.max - DEEPENING_WAIT_MS.min;
    expect(ecart).toBeGreaterThan(DEEPENING_WAIT_MS.min / 4);
    // Et la partition ne se déforme plus si on l'étire au-delà de moitié : les saccades
    // cessent d'être des sauts, et la pupille se met à flotter.
    expect(DEEPENING_WAIT_MS.max).toBeLessThanOrEqual(DEEPENING_WAIT_MS.min * 1.5);
  });
});
