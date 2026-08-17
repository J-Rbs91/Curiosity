import type { CSSProperties } from "react";

import {
  CENTER,
  OUTER_R,
  PUPIL_R,
  STROKE,
  GAZE,
  counter,
} from "@/components/ui/mark-geometry.mjs";

/**
 * L'œil — le O de CuriOsity, avec sa pupille.
 *
 * Le dessin n'est pas décrit ici : il vient de `mark-geometry.mjs`, que partagent ce composant
 * et le générateur des icônes. Ce fichier ne décide que de deux choses — la taille optique et
 * le fait que le regard joue ou non.
 *
 * **Ce que le mouvement a le droit de faire.** L'application n'anime rien au repos ; c'est
 * écrit dans `docs/ux-direction.md` et c'est ce qui rend son mouvement supportable à la
 * centième ouverture. La pupille ne fait donc pas exception : la séquence se déclenche au
 * montage, joue quatre saccades, et se repose au centre. Elle ne boucle pas. C'est aussi ce
 * que fait un œil quand il découvre quelque chose, ce qui est le seul argument qui compte ici.
 */

/** La boîte tracée par le O, marges comprises : le cercle extérieur et rien d'autre. */
const VIEW_BOX = `${CENTER - OUTER_R} ${CENTER - OUTER_R} ${OUTER_R * 2} ${OUTER_R * 2}`;

/**
 * Une fixation, écrite comme une paire de longueurs prête à entrer dans `translate`.
 *
 * Deux longueurs séparées par une espace, et non par une virgule : `translate` est la propriété
 * de déplacement, pas la fonction du même nom qu'on écrit dans `transform`. Une virgule y rend
 * la valeur invalide, et une valeur invalide issue d'un `var()` ne produit pas d'erreur — elle
 * produit un déplacement nul, c'est-à-dire une animation qui tourne sans que rien ne bouge.
 */
const at = ([dx, dy]: readonly number[]) => `${dx}px ${dy}px`;

/**
 * Les positions du regard passent par des propriétés personnalisées, et les temps restent
 * dans `globals.css`.
 *
 * C'est ce qui évite de recopier les coordonnées dans la feuille de style : la géométrie n'a
 * qu'une définition, le rythme n'en a qu'une autre, et aucune des deux ne peut dériver sans
 * que l'autre le suive.
 */
const GAZE_VARIABLES = {
  "--gaze-rest": at(GAZE.rest),
  "--gaze-up": at(GAZE.up),
  "--gaze-right": at(GAZE.right),
  "--gaze-down": at(GAZE.down),
} as CSSProperties;

export type MarkProps = {
  /**
   * `icon` quand la marque est seule, `text` quand elle est dans le mot — voir le motif de ces
   * deux graisses dans `mark-geometry.mjs`.
   */
  optical?: keyof typeof STROKE;
  /** Joue la séquence du regard au montage. Une fois, puis repos. */
  animate?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function Mark({
  optical = "icon",
  animate = false,
  className,
  style,
}: MarkProps) {
  const stroke = STROKE[optical];
  const { rx, ry } = counter(stroke);

  return (
    <svg
      viewBox={VIEW_BOX}
      className={className}
      style={animate ? { ...GAZE_VARIABLES, ...style } : style}
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
        className={animate ? "gaze" : undefined}
        cx={CENTER}
        cy={CENTER}
        r={PUPIL_R}
      />
    </svg>
  );
}
