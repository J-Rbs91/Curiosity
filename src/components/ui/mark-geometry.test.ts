import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

import {
  CENTER,
  OUTER_R,
  PUPIL_R,
  STROKE,
  GAZE,
  GAZE_SCORE,
  GAZE_SEQUENCE,
  BLINK_SCORE,
  MARK_SEQUENCE_MS,
  REPLAY_PAUSES_MS,
  counter,
  lid,
  lidEdge,
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

    /**
     * Les deux extrêmes de la paupière, sur toute la largeur de la découpe et non au seul
     * centre — c'est aux bords que les deux courbes se rapprochent, et c'est donc là qu'une
     * erreur de réglage se verrait d'abord.
     *
     * Vingt et un points suffisent : les deux courbes sont lisses et monotones sur chaque
     * moitié, aucun défaut ne peut se cacher entre deux échantillons.
     */
    const acrossTheCounter = Array.from({ length: 21 }, (_, i) => {
      const { clip } = lid(STROKE[optical]);
      return (clip.rx * (i - 10)) / 10;
    });

    it(`dégage entièrement la contre-forme, paupière relevée — graisse ${optical}`, () => {
      const { clip, open } = lid(STROKE[optical]);

      for (const offset of acrossTheCounter) {
        // Le bord de la paupière, relevé, doit passer au-dessus du sommet de la découpe. Sinon
        // l'œil ne s'ouvre jamais tout à fait, et le défaut se lit comme un regard mi-clos.
        const edge = lidEdge(STROKE[optical], offset) + open[1];
        const top = CENTER - clip.ry * Math.sqrt(1 - (offset / clip.rx) ** 2);
        expect(edge, `écart ${offset}`).toBeLessThanOrEqual(top);
      }
    });

    it(`couvre entièrement la contre-forme, paupière baissée — graisse ${optical}`, () => {
      const { clip, closed } = lid(STROKE[optical]);

      for (const offset of acrossTheCounter) {
        // Baissée, elle doit descendre sous le fond de la découpe. Un découvert d'un pixel au
        // fond de l'œil clos serait un croissant noir qui ne se referme pas.
        const edge = lidEdge(STROKE[optical], offset) + closed[1];
        const bottom = CENTER + clip.ry * Math.sqrt(1 - (offset / clip.rx) ** 2);
        expect(edge, `écart ${offset}`).toBeGreaterThanOrEqual(bottom);
      }
    });

    it(`garde les flancs de la paupière hors de la découpe — graisse ${optical}`, () => {
      // La propriété qui fait que l'ouverture est un croissant et non une amande : seul le bord
      // inférieur entre dans le champ. Un flanc qui y entrerait bornerait l'ouverture à sa
      // place, et le clignement se lirait comme une encoche.
      const { clip, halfWidth } = lid(STROKE[optical]);
      expect(halfWidth).toBeGreaterThan(clip.rx);
    });

    it(`garde la paupière dans l'encre de l'anneau — graisse ${optical}`, () => {
      // Le débord ne doit pas manger l'anneau jusqu'à son bord extérieur : il se cache dans
      // l'encre, il ne la remplace pas. Le côté fin est le point qui tranche.
      expect(lid(STROKE[optical]).clip.rx).toBeLessThan(OUTER_R);
      expect(lid(STROKE[optical]).clip.ry).toBeLessThan(OUTER_R);
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
   * La partition telle que la feuille de style la joue réellement, relue depuis le CSS.
   *
   * C'est cette relecture qui autorise à écrire les images clés à la main : le CSS ne sait pas
   * importer la partition, mais rien n'oblige à lui faire confiance. Un pourcentage retouché
   * d'un côté et pas de l'autre échoue ici, alors qu'à l'écran il produirait une séquence
   * simplement un peu fausse — le genre de défaut que personne ne voit et que personne ne
   * corrige.
   */
  function played(name: string, prefix: string) {
    return [
      ...block(css, `@keyframes ${name}`).matchAll(
        /([\d.]+)%,\s*([\d.]+)%\s*\{\s*translate:\s*var\(--([a-z-]+)\)/g
      ),
    ].map(([, from, to, variable]) => ({
      position: variable.slice(prefix.length),
      from: Number(from),
      to: Number(to),
    }));
  }

  const tracks = [
    { name: "gaze", prefix: "gaze-", score: GAZE_SCORE, positions: Object.keys(GAZE) },
    {
      name: "blink",
      prefix: "lid-",
      score: BLINK_SCORE,
      positions: ["open", "closed"],
    },
  ];

  for (const { name, prefix, score, positions } of tracks) {
    /**
     * Seconde défaillance, et c'est celle qui est réellement arrivée pendant l'écriture : la
     * séquence tourne, et rien ne bouge.
     *
     * Le composant émet une propriété personnalisée par position, la feuille de style les
     * réclame par leur nom. Renommer une position dans la géométrie suffit à rompre le lien —
     * un `var()` qui ne résout rien ne produit pas d'erreur, il produit un déplacement nul.
     */
    it(`joue exactement la partition de @keyframes ${name}`, () => {
      expect(played(name, prefix)).toEqual(score);
    });

    it(`n'anime dans @keyframes ${name} aucune position que la géométrie ne définit pas`, () => {
      const used = played(name, prefix).map(({ position }) => position);
      expect(new Set(used).size).toBeGreaterThan(0);
      for (const position of used) expect(positions).toContain(position);
    });

    it(`ne déplace rien d'autre dans @keyframes ${name}`, () => {
      // La règle du produit : deux propriétés animées, le déplacement et l'opacité. Une
      // animation de marque est le premier endroit où l'on est tenté d'ajouter une échelle ou
      // une rotation, et le premier endroit où cela se remarquerait.
      const declarations = [
        ...block(css, `@keyframes ${name}`).matchAll(/^\s*([a-z-]+)\s*:/gm),
      ].map((m) => m[1]);
      expect(new Set(declarations)).toEqual(new Set(["translate"]));
    });

    it(`couvre la séquence entière dans @keyframes ${name}`, () => {
      // Une partition qui ne part pas de 0 % ou ne va pas jusqu'à 100 % laisse l'état initial
      // ou final au hasard de ce que le navigateur interpole.
      expect(score.at(0)?.from).toBe(0);
      expect(score.at(-1)?.to).toBe(100);
    });
  }

  it("porte la même durée sur les deux pistes, et c'est celle de la partition", () => {
    // Deux durées différentes désaccorderaient les pistes, et la relance ne pourrait plus les
    // remettre à zéro d'un seul geste.
    const declared = [...css.matchAll(/animation:\s*(gaze|blink)\s+var\(--dur-gaze\)/g)];
    expect(declared.map((m) => m[1]).sort()).toEqual(["blink", "gaze"]);
    expect(css).toContain(`--dur-gaze: ${MARK_SEQUENCE_MS}ms`);
  });

  it("commence et finit la séquence au repos", () => {
    // La condition de la boucle : l'état de départ est l'état d'arrivée, donc une relance ne
    // se voit pas sauter. C'est aussi l'état affiché en mouvement réduit.
    expect(GAZE_SEQUENCE.at(0)).toBe("rest");
    expect(GAZE_SEQUENCE.at(-1)).toBe("rest");
    expect(GAZE.rest).toEqual([0, 0]);
    expect(BLINK_SCORE.at(0)?.position).toBe("open");
    expect(BLINK_SCORE.at(-1)?.position).toBe("open");
  });

  /**
   * Un clignement entier, paupière en mouvement comprise : de l'instant où elle quitte sa
   * position relevée à celui où elle y revient.
   *
   * C'est cette étendue qui compte, et non le seul maintien clos : ce qu'on voit d'un
   * clignement, c'est le bord qui descend et remonte — 108 et 132 ms —, là où le disque plein
   * ne tient que 36 ms. Juger sur le maintien reviendrait à mesurer le sixième du phénomène.
   */
  const blinks = BLINK_SCORE.flatMap(({ position }, i) =>
    position === "closed" ? [{ from: BLINK_SCORE[i - 1].to, to: BLINK_SCORE[i + 1].from }] : []
  );

  it("tient les clignements sous le seuil de scintillement", () => {
    // Fermé, le O est un disque d'encre pleine : à ce contraste, des fermetures rapprochées
    // seraient un scintillement, et la méthode l'interdit sans condition.
    //
    // Le seuil opposable est de trois par seconde, soit 333 ms entre deux départs. Le contrôle
    // est posé à 400 ms pour garder une marge : la partition la plus serrée est à 480, c'est-à-
    // dire un peu plus de deux clignements par seconde. Le contrôle porte sur la partition
    // plutôt que sur la bonne volonté de celui qui la modifiera.
    expect(blinks.length).toBeGreaterThan(0);

    // La boucle repasse par le début : le dernier clignement d'un passage et le premier du
    // suivant sont séparés par la fin de séquence, puis par la plus courte des pauses.
    const starts = blinks.map(({ from }) => (from / 100) * MARK_SEQUENCE_MS);
    const wrapped = [...starts, starts[0] + MARK_SEQUENCE_MS + Math.min(...REPLAY_PAUSES_MS)];

    for (let i = 1; i < wrapped.length; i++) {
      expect(wrapped[i] - wrapped[i - 1], `clignements ${i} et ${i + 1}`).toBeGreaterThan(400);
    }
  });

  it("laisse la paupière relevée pendant que le regard se déplace", () => {
    // Un clignement au milieu d'une saccade masquerait le déplacement qui fait tout le
    // travail, et un œil réel cligne au changement de zone d'intérêt, pas en route.
    const saccades = GAZE_SCORE.slice(1).map(({ from }, i) => ({ from: GAZE_SCORE[i].to, to: from }));

    for (const saccade of saccades) {
      for (const blink of blinks) {
        expect(
          blink.from < saccade.to && blink.to > saccade.from,
          `saccade ${saccade.from}–${saccade.to} % recouverte par un clignement ${blink.from}–${blink.to} %`
        ).toBe(false);
      }
    }
  });
});
