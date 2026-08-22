import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

import {
  CENTER,
  OUTER_R,
  PUPIL_R,
  STROKE,
  GAZE,
  GAZE_SEQUENCES,
  GAZE_SEQUENCE_NAMES,
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
  function played(keyframes: string, prefix: string) {
    return [
      ...block(css, `@keyframes ${keyframes}`).matchAll(
        /([\d.]+)%,\s*([\d.]+)%\s*\{\s*translate:\s*var\(--([a-z-]+)\)/g
      ),
    ].map(([, from, to, variable]) => ({
      position: variable.slice(prefix.length),
      from: Number(from),
      to: Number(to),
    }));
  }

  /**
   * Les intervalles laissés vides entre deux maintiens : les saccades, que l'interpolation
   * parcourt. Elles ne sont écrites nulle part, ce qui rend impossible d'en oublier une en
   * déplaçant une fixation.
   */
  const saccades = (score: typeof GAZE_SEQUENCES.scanning.gaze) =>
    score.slice(1).map(({ from }, i) => ({ from: score[i].to, to: from }));

  /**
   * Un clignement entier, paupière en mouvement comprise : de l'instant où elle quitte sa
   * position relevée à celui où elle y revient.
   *
   * C'est cette étendue qui compte, et non le seul maintien clos : ce qu'on voit d'un
   * clignement, c'est le bord qui descend et remonte, là où le disque plein ne tient qu'un
   * instant. Juger sur le maintien reviendrait à mesurer le sixième du phénomène.
   */
  const blinksOf = (score: typeof GAZE_SEQUENCES.scanning.blink) =>
    score.flatMap(({ position }, i) =>
      position === "closed" ? [{ from: score[i - 1].to, to: score[i + 1].from }] : []
    );

  /**
   * Ce qui est vérifié pour chacune des deux partitions, sans en nommer aucune : en ajouter une
   * troisième la soumet à tout ce qui suit sans qu'une ligne soit à écrire.
   */
  for (const name of GAZE_SEQUENCE_NAMES) {
    const sequence = GAZE_SEQUENCES[name];

    const tracks = [
      {
        keyframes: `gaze-${name}`,
        prefix: "gaze-",
        score: sequence.gaze,
        positions: Object.keys(GAZE),
      },
      {
        keyframes: `blink-${name}`,
        prefix: "lid-",
        score: sequence.blink,
        positions: ["open", "closed"],
      },
    ];

    for (const { keyframes, prefix, score, positions } of tracks) {
      /**
       * Seconde défaillance, et c'est celle qui est réellement arrivée pendant l'écriture : la
       * séquence tourne, et rien ne bouge.
       *
       * Le composant émet une propriété personnalisée par position, la feuille de style les
       * réclame par leur nom. Renommer une position dans la géométrie suffit à rompre le lien —
       * un `var()` qui ne résout rien ne produit pas d'erreur, il produit un déplacement nul.
       */
      it(`joue exactement la partition de @keyframes ${keyframes}`, () => {
        expect(played(keyframes, prefix)).toEqual(score);
      });

      it(`n'anime dans @keyframes ${keyframes} aucune position que la géométrie ne définit pas`, () => {
        const used = played(keyframes, prefix).map(({ position }) => position);
        expect(new Set(used).size).toBeGreaterThan(0);
        for (const position of used) expect(positions).toContain(position);
      });

      it(`ne déplace rien d'autre dans @keyframes ${keyframes}`, () => {
        // La règle du produit : deux propriétés animées, le déplacement et l'opacité. Une
        // animation de marque est le premier endroit où l'on est tenté d'ajouter une échelle ou
        // une rotation, et le premier endroit où cela se remarquerait.
        const declarations = [
          ...block(css, `@keyframes ${keyframes}`).matchAll(/^\s*([a-z-]+)\s*:/gm),
        ].map((m) => m[1]);
        expect(new Set(declarations)).toEqual(new Set(["translate"]));
      });

      it(`couvre la séquence entière dans @keyframes ${keyframes}`, () => {
        // Une partition qui ne part pas de 0 % ou ne va pas jusqu'à 100 % laisse l'état initial
        // ou final au hasard de ce que le navigateur interpole.
        expect(score.at(0)?.from).toBe(0);
        expect(score.at(-1)?.to).toBe(100);
      });
    }

    it(`porte la même durée sur les deux pistes de « ${name} », et c'est celle de la partition`, () => {
      // Deux durées différentes désaccorderaient les pistes, et la relance ne pourrait plus les
      // remettre à zéro d'un seul geste.
      const declared = [
        ...css.matchAll(
          new RegExp(`animation:\\s*(gaze|blink)-${name}\\s+var\\(--dur-gaze-${name}\\)`, "g")
        ),
      ];
      expect(declared.map((m) => m[1]).sort()).toEqual(["blink", "gaze"]);
      expect(css).toContain(`--dur-gaze-${name}: ${sequence.durationMs}ms`);
    });

    it(`n'attache « ${name} » qu'aux marques qui la demandent`, () => {
      // La feuille de style choisit la partition sur l'attribut que `Mark.tsx` pose. Une règle
      // qui viserait `.gaze` sans le qualifier ferait jouer les deux séquences à la fois, sur
      // toutes les marques — y compris celles qu'on a voulues immobiles.
      for (const track of ["gaze", "blink"]) {
        expect(css).toContain(`[data-gaze="${name}"] .${track} {`);
      }
    });

    it(`commence et finit « ${name} » au repos`, () => {
      // La condition de la boucle : l'état de départ est l'état d'arrivée, donc une relance ne
      // se voit pas sauter. C'est aussi l'état affiché en mouvement réduit.
      expect(sequence.gaze.at(0)?.position).toBe("rest");
      expect(sequence.gaze.at(-1)?.position).toBe("rest");
      expect(GAZE.rest).toEqual([0, 0]);
      expect(sequence.blink.at(0)?.position).toBe("open");
      expect(sequence.blink.at(-1)?.position).toBe("open");
    });

    it(`tient les clignements de « ${name} » sous le seuil de scintillement`, () => {
      // Fermé, le O est un disque d'encre pleine : à ce contraste, des fermetures rapprochées
      // seraient un scintillement, et la méthode l'interdit sans condition.
      //
      // Le seuil opposable est de trois par seconde, soit 333 ms entre deux départs. Le contrôle
      // est posé à 400 ms pour garder une marge. Il porte sur la partition plutôt que sur la
      // bonne volonté de celui qui la modifiera.
      const blinks = blinksOf(sequence.blink);
      expect(blinks.length).toBeGreaterThan(0);

      // La boucle repasse par le début : le dernier clignement d'un passage et le premier du
      // suivant sont séparés par la fin de séquence, puis par la plus courte des pauses.
      const starts = blinks.map(({ from }) => (from / 100) * sequence.durationMs);
      const wrapped = [
        ...starts,
        starts[0] + sequence.durationMs + Math.min(...sequence.replayPausesMs),
      ];

      for (let i = 1; i < wrapped.length; i++) {
        expect(wrapped[i] - wrapped[i - 1], `clignements ${i} et ${i + 1}`).toBeGreaterThan(400);
      }
    });

    it(`laisse la paupière relevée pendant que le regard se déplace — « ${name} »`, () => {
      // Un clignement au milieu d'une saccade masquerait le déplacement qui fait tout le
      // travail, et un œil réel cligne au changement de zone d'intérêt, pas en route.
      for (const saccade of saccades(sequence.gaze)) {
        for (const blink of blinksOf(sequence.blink)) {
          expect(
            blink.from < saccade.to && blink.to > saccade.from,
            `saccade ${saccade.from}–${saccade.to} % recouverte par un clignement ${blink.from}–${blink.to} %`
          ).toBe(false);
        }
      }
    });
  }
});

/**
 * Ce qui sépare les deux partitions — et c'est la seule chose qui les sépare.
 *
 * Elles partagent le dessin, l'orbite et les fixations. Si l'on retouche leurs temps sans y
 * prendre garde, elles convergent : le regard qui attend se remet à parcourir, et l'écran
 * d'Explorer redit « cherche » là où il dit « choisis ». Rien dans le rendu ne le signalerait —
 * deux séquences un peu semblables restent deux séquences.
 *
 * Ces trois contrôles portent donc sur l'écart lui-même, pas sur des valeurs.
 */
describe("ce qui distingue le regard qui attend de celui qui parcourt", () => {
  const { scanning, waiting } = GAZE_SEQUENCES;

  /**
   * Les fixations d'une partition, en millisecondes réelles — les maintiens **hors du centre**.
   *
   * Les retours au repos en sont exclus, et ce n'est pas une commodité : un maintien au centre
   * n'est pas un regard tenu, c'est l'œil posé, et c'est là que la paupière travaille. Les
   * compter reviendrait à opposer le temps que « scanning » passe à cligner au temps que
   * « waiting » passe à regarder.
   */
  const fixations = (sequence: typeof scanning) =>
    sequence.gaze
      .filter(({ position }) => position !== "rest")
      .map(({ from, to }) => ((to - from) / 100) * sequence.durationMs);

  it("tient chaque fixation plus longtemps que l'autre ne l'a jamais tenue", () => {
    // C'est le temps, et lui seul, qui fait la différence entre chercher et attendre. La
    // fixation la plus courte de « waiting » doit dépasser la plus longue de « scanning » —
    // 864 ms contre 264 —, sans quoi les deux rythmes se recouvrent et l'écart cesse de se voir.
    expect(Math.min(...fixations(waiting))).toBeGreaterThan(Math.max(...fixations(scanning)));
  });

  it("fait moitié moins de saccades sur une fois et demie le temps", () => {
    // L'autre moitié de l'écart : le temps supplémentaire de « waiting » n'achète pas des
    // événements — c'est ce que faisait « scanning » —, il achète leur absence. Un contributeur
    // qui rallongerait la séquence en y ajoutant des étapes la ramènerait à un regard qui
    // parcourt, en plus lent.
    expect(waiting.gaze.length - 1).toBeLessThanOrEqual((scanning.gaze.length - 1) / 2);
    expect(waiting.durationMs).toBeGreaterThan(scanning.durationMs);
  });

  it("ne revient jamais sur ses pas", () => {
    // « waiting » descend un seul quart d'orbite — rest, up, left, down, puis retour. Aucun
    // demi-tour : le sens de rotation ne s'inverse pas d'un déplacement au suivant. C'est ce
    // qui manque à « scanning », qui change huit fois de direction, et c'est ce qui fait lire
    // un regard posé plutôt qu'un regard qui fouille.
    const path = waiting.gaze.map(({ position }) => GAZE[position as keyof typeof GAZE]);
    const moves = path.slice(1).map(([x, y], i) => [x - path[i][0], y - path[i][1]]);
    const turns = moves.slice(1).map(([x, y], i) => moves[i][0] * y - moves[i][1] * x);

    expect(turns.length).toBeGreaterThan(0);
    for (const turn of turns) expect(Math.sign(turn)).toBe(Math.sign(turns[0]));
  });

  it("ne cligne que lentement", () => {
    // Le double clignement rapide de « scanning » articulait deux regards ; il n'y en a qu'un
    // ici, et une fermeture vive y passerait pour un sursaut. Chaque clignement de « waiting »
    // dure donc plus que le plus long de « scanning ».
    const spans = (sequence: typeof scanning) =>
      sequence.blink.flatMap(({ position }, i) =>
        position === "closed"
          ? [
              ((sequence.blink[i + 1].from - sequence.blink[i - 1].to) / 100) *
                sequence.durationMs,
            ]
          : []
      );

    expect(Math.min(...spans(waiting))).toBeGreaterThan(Math.max(...spans(scanning)));
  });
});
