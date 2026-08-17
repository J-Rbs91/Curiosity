import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

import {
  CENTER,
  OUTER_R,
  PUPIL_R,
  STROKE,
  GAZE,
  GAZE_SEQUENCE,
  counter,
} from "@/components/ui/mark-geometry.mjs";

/**
 * Ce que ces tests protègent, et pourquoi ils existent.
 *
 * La marque n'est regardée qu'à un seul endroit — l'écran de premier lancement — et ses neuf
 * autres exemplaires sont des fichiers générés que personne ne rouvre. Une valeur retouchée
 * dans la géométrie peut donc casser le dessin sans que rien ne le signale : ni le compilateur,
 * ni le lint, ni un rendu qu'on ne regarde pas.
 *
 * Deux défaillances sont possibles, et elles sont toutes les deux silencieuses.
 */

describe("géométrie de la marque", () => {
  /**
   * Première défaillance : la pupille sort de sa contre-forme, ou la frôle.
   *
   * Elle cesse alors de se lire comme un regard pour se lire comme un défaut de centrage. Le
   * contrôle est fait dans les deux tailles optiques, parce que la contre-forme est plus
   * étroite à la graisse d'icône et que c'est donc elle qui tranche.
   */
  for (const optical of ["icon", "text"] as const) {
    const { rx, ry } = counter(STROKE[optical]);

    it(`garde la pupille dans la contre-forme à toutes les fixations — graisse ${optical}`, () => {
      for (const [name, [dx, dy]] of Object.entries(GAZE)) {
        // Le disque de la pupille tient dans l'ellipse si l'ellipse rétrécie du rayon de la
        // pupille contient encore son centre. C'est une condition suffisante et légèrement
        // pessimiste, ce qui est exactement ce qu'on veut d'une marge de sécurité.
        const occupation = (dx / (rx - PUPIL_R)) ** 2 + (dy / (ry - PUPIL_R)) ** 2;
        expect(occupation, `fixation « ${name} »`).toBeLessThan(0.9);
      }
    });

    it(`garde un anneau visible à 16 px — graisse ${optical}`, () => {
      // Le côté fin de l'anneau est le point le plus fragile du dessin. Rapporté au diamètre
      // extérieur, il doit rester au-dessus de ce qu'un favicon de 16 px sait rendre : en deçà
      // d'un pixel, le contour devient une tache grise plutôt qu'un trait.
      const thinnest = OUTER_R - rx;
      expect((thinnest / (2 * OUTER_R)) * 16).toBeGreaterThan(1.2);
    });
  }

  it("place le contour extérieur dans la boîte", () => {
    expect(CENTER + OUTER_R).toBeLessThanOrEqual(100);
    expect(CENTER - OUTER_R).toBeGreaterThanOrEqual(0);
  });
});

describe("cohérence entre la géométrie et la feuille de style", () => {
  const css = readFileSync(new URL("../../app/globals.css", import.meta.url), "utf8");
  const keyframes = block(css, "@keyframes gaze");

  /** Le bloc d'une règle, accolades appariées : lire jusqu'à la fin du fichier lirait tout le reste. */
  function block(source: string, opening: string) {
    const start = source.indexOf(opening);
    expect(start, `règle « ${opening} » absente de globals.css`).toBeGreaterThan(-1);
    let depth = 0;
    for (let i = source.indexOf("{", start); i < source.length; i++) {
      if (source[i] === "{") depth++;
      else if (source[i] === "}" && --depth === 0) return source.slice(start, i + 1);
    }
    throw new Error(`règle « ${opening} » non refermée`);
  }

  /**
   * Seconde défaillance, et c'est celle qui est réellement arrivée pendant l'écriture : la
   * séquence tourne, et rien ne bouge.
   *
   * Le composant émet une propriété personnalisée par fixation, la feuille de style les
   * réclame par leur nom. Renommer une fixation dans la géométrie suffit à rompre le lien —
   * un `var()` qui ne résout rien ne produit pas d'erreur, il produit un déplacement nul.
   */
  for (const name of Object.keys(GAZE)) {
    it(`déclare la fixation « ${name} » dans @keyframes gaze`, () => {
      expect(keyframes).toContain(`var(--gaze-${name})`);
    });
  }

  it("n'anime aucune position que la géométrie ne définit pas", () => {
    const used = [...keyframes.matchAll(/var\(--gaze-([a-z]+)\)/g)].map((m) => m[1]);
    expect(new Set(used)).toEqual(new Set(Object.keys(GAZE)));
  });

  it("commence et finit la séquence au repos", () => {
    expect(GAZE_SEQUENCE.at(0)).toBe("rest");
    expect(GAZE_SEQUENCE.at(-1)).toBe("rest");
    expect(GAZE.rest).toEqual([0, 0]);
  });

  it("ne déplace que la pupille, et rien d'autre", () => {
    // La règle du produit : deux propriétés animées, le déplacement et l'opacité. Une
    // animation de marque est le premier endroit où l'on est tenté d'ajouter une échelle ou
    // une rotation, et le premier endroit où cela se remarquerait.
    const declarations = [...keyframes.matchAll(/^\s*([a-z-]+)\s*:/gm)].map((m) => m[1]);
    expect(new Set(declarations)).toEqual(new Set(["translate"]));
  });
});
