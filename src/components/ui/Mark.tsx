"use client";

import { useCallback, useEffect, useId, useRef, type CSSProperties } from "react";

import {
  CENTER,
  OUTER_R,
  PUPIL_R,
  STROKE,
  GAZE,
  GAZE_SEQUENCES,
  counter,
  lid,
} from "@/components/ui/mark-geometry.mjs";

/**
 * L'œil — le O de CuriOsity, avec sa pupille et sa paupière.
 *
 * Le dessin n'est pas décrit ici : il vient de `mark-geometry.mjs`, que partagent ce composant
 * et le générateur des icônes. Ce fichier ne décide que de deux choses — la taille optique et
 * le fait que le regard joue ou non.
 *
 * **Ce que le mouvement a le droit de faire.** L'application n'anime rien au repos ; c'est
 * écrit dans `docs/ux-direction.md` et c'est ce qui rend son mouvement supportable à la
 * centième ouverture. Une séquence se joue, se repose au centre, puis se relance après une
 * pause tirée au hasard, tant que l'écran qui la porte est affiché.
 *
 * **Il y a deux séquences, et `gaze` dit laquelle joue.** `scanning` à l'ouverture, où rien
 * n'attend derrière elle ; `waiting` dans le o du titre d'Explorer, qui est un onglet et se
 * revoit. Ce que ces deux partitions font du même dessin est écrit dans `mark-geometry.mjs` —
 * ici, on ne fait que nommer celle qui joue.
 *
 * **Pourquoi un nom et non un booléen.** Un `animate` vrai ou faux ne saurait pas dire laquelle
 * des deux, et il faudrait une seconde propriété pour le préciser — donc un état où l'on
 * demande une séquence sans l'animer. Une propriété qui vaut `undefined`, `scanning` ou
 * `waiting` rend cet état inexprimable, et son absence garde la marque immobile : l'animer reste
 * un geste, jamais un oubli.
 *
 * **Pourquoi un composant client.** La pause aléatoire est la seule chose de cette séquence que
 * le CSS ne sait pas exprimer. Le reste — les positions, les temps, les courbes — reste
 * déclaratif et composé, et le JavaScript ne fait que rappeler la partition : il n'en connaît
 * ni les valeurs ni la durée.
 */

/** La boîte tracée par le O, marges comprises : le cercle extérieur et rien d'autre. */
const VIEW_BOX = `${CENTER - OUTER_R} ${CENTER - OUTER_R} ${OUTER_R * 2} ${OUTER_R * 2}`;

/**
 * Une position, écrite comme une paire de longueurs prête à entrer dans `translate`.
 *
 * Deux longueurs séparées par une espace, et non par une virgule : `translate` est la propriété
 * de déplacement, pas la fonction du même nom qu'on écrit dans `transform`. Une virgule y rend
 * la valeur invalide, et une valeur invalide issue d'un `var()` ne produit pas d'erreur — elle
 * produit un déplacement nul, c'est-à-dire une animation qui tourne sans que rien ne bouge.
 */
const at = ([dx, dy]: readonly number[]) => `${dx}px ${dy}px`;

/**
 * Les positions passent par des propriétés personnalisées, et les temps restent dans
 * `globals.css`.
 *
 * C'est ce qui évite de recopier les coordonnées dans la feuille de style : la géométrie n'a
 * qu'une définition, le rythme n'en a qu'une autre, et aucune des deux ne peut dériver sans
 * que l'autre le suive.
 *
 * Les fixations sont dérivées de la géométrie plutôt qu'énumérées : en ajouter une ne doit pas
 * demander de penser à ce fichier, sans quoi la nouvelle position serait réclamée par la
 * feuille de style et jamais émise.
 */
const GAZE_VARIABLES = Object.fromEntries(
  Object.entries(GAZE).map(([name, position]) => [`--gaze-${name}`, at(position)])
) as CSSProperties;

/** Le regard qui parcourt, ou celui qui attend — voir `GAZE_SEQUENCES`. */
export type GazeName = keyof typeof GAZE_SEQUENCES;

export type MarkProps = {
  /**
   * `icon` quand la marque est seule, `text` quand elle est dans le mot — voir le motif de ces
   * deux graisses dans `mark-geometry.mjs`.
   */
  optical?: keyof typeof STROKE;
  /**
   * La séquence à jouer, en boucle espacée de pauses aléatoires. Omise, la marque est
   * immobile : pupille au centre, paupière relevée.
   */
  gaze?: GazeName;
  className?: string;
  style?: CSSProperties;
};

/**
 * La relance, et la seule part de la séquence qui soit impérative.
 *
 * Elle rejoue les animations déjà déclarées au lieu d'en décrire de nouvelles : l'interface
 * d'animation du navigateur suffit à les remettre à zéro, elles restent composées hors du fil
 * principal, et aucune durée ni aucune position n'est écrite ici.
 *
 * Le repli en mouvement réduit n'a rien de particulier à faire : sans animation, aucune fin
 * d'animation n'est annoncée, la pause ne s'arme jamais, et la marque reste au repos.
 */
function useSequenceLoop(gaze: GazeName | undefined) {
  const root = useRef<SVGSVGElement | null>(null);
  const pending = useRef<number | undefined>(undefined);

  // Le seul risque de ce mécanisme : une pause qui survit à l'écran qui l'a demandée.
  useEffect(() => () => window.clearTimeout(pending.current), []);

  return {
    root,
    replayAfterPause: useCallback(() => {
      const svg = root.current;
      if (!gaze || !svg || typeof svg.getAnimations !== "function") return;

      // Chaque séquence a ses pauses : celle qui attend se repose deux fois plus longtemps
      // entre deux passages, et c'est une part de ce qui la distingue de celle qui parcourt.
      const pauses = GAZE_SEQUENCES[gaze].replayPausesMs;
      const pause = pauses[Math.floor(Math.random() * pauses.length)];
      pending.current = window.setTimeout(() => {
        // Les deux pistes portent la même durée et le même état de départ : les remettre à
        // zéro ensemble suffit à les garder accordées, sans les nommer ni les compter.
        for (const animation of svg.getAnimations({ subtree: true })) {
          animation.currentTime = 0;
          animation.play();
        }
      }, pause);
    }, [gaze]),
  };
}

export function Mark({ optical = "icon", gaze, className, style }: MarkProps) {
  const stroke = STROKE[optical];
  const { rx, ry } = counter(stroke);
  const eyelid = lid(stroke);
  const { root, replayAfterPause } = useSequenceLoop(gaze);

  // La contre-forme sert deux fois — de trou dans l'anneau, et de découpe pour la paupière.
  // L'identifiant est propre à l'instance : deux marques animées sur une même page se
  // découperaient l'une l'autre si elles partageaient le sien.
  const counterId = `mark-counter-${useId()}`;

  const animation = {
    ...GAZE_VARIABLES,
    "--lid-open": at(eyelid.open),
    "--lid-closed": at(eyelid.closed),
  } as CSSProperties;

  return (
    <svg
      ref={root}
      viewBox={VIEW_BOX}
      // La séquence est choisie par la feuille de style, pas par ce fichier : c'est elle qui
      // attache une partition et une durée à chaque nom, et elle seule qui sait les écrire.
      data-gaze={gaze}
      className={className}
      style={gaze ? { ...animation, ...style } : style}
      fill="currentColor"
      aria-hidden
      focusable="false"
    >
      {/*
       * L'anneau est un chemin à deux sous-tracés en règle « evenodd », et non un cercle tracé :
       * le tracé du SVG est d'épaisseur constante, alors que cet anneau est fin sur les côtés
       * et épais en haut et en bas. C'est ce contraste inversé qui ouvre la contre-forme et
       * fait lire un œil là où trois cercles concentriques ne donnaient qu'une cible.
       */}
      <path
        d={`M ${CENTER} ${CENTER - OUTER_R} A ${OUTER_R} ${OUTER_R} 0 1 0 ${CENTER} ${CENTER + OUTER_R} A ${OUTER_R} ${OUTER_R} 0 1 0 ${CENTER} ${CENTER - OUTER_R} Z M ${CENTER} ${CENTER - ry} A ${rx} ${ry} 0 1 0 ${CENTER} ${CENTER + ry} A ${rx} ${ry} 0 1 0 ${CENTER} ${CENTER - ry} Z`}
        fillRule="evenodd"
      />
      <circle
        className={gaze ? "gaze" : undefined}
        cx={CENTER}
        cy={CENTER}
        r={PUPIL_R}
        onAnimationEnd={gaze ? replayAfterPause : undefined}
      />
      {gaze && (
        <>
          <defs>
            <clipPath id={counterId}>
              <ellipse cx={CENTER} cy={CENTER} rx={eyelid.clip.rx} ry={eyelid.clip.ry} />
            </clipPath>
          </defs>
          {/*
           * La découpe est portée par le groupe et le déplacement par la paupière : sur le même
           * élément, la découpe suivrait le déplacement et ne découperait plus rien.
           *
           * La paupière vient après la pupille, donc au-dessus d'elle. Sa position au repos est
           * écrite ici plutôt que laissée à l'animation, parce que c'est celle qui s'affiche
           * quand l'animation n'a pas lieu — en mouvement réduit, la paupière est relevée.
           */}
          <g clipPath={`url(#${counterId})`}>
            <path className="blink" d={eyelid.path} style={{ translate: "var(--lid-open)" }} />
          </g>
        </>
      )}
    </svg>
  );
}
