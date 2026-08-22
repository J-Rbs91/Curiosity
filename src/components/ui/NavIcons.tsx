"use client";

import type { CSSProperties, ReactNode } from "react";

import {
  BOX,
  CENTER,
  COVER_SHIFT,
  NEEDLE_PATH,
  BOOK,
  NEEDLE_SWING,
  RING_R,
  SPINE_PATH,
  STROKE,
  leaf,
  tiltOf,
} from "@/components/ui/nav-icon-geometry";

/**
 * Les deux icônes de la navigation — celles qui savent qu'on vient de changer de section.
 *
 * **Pourquoi elles ne viennent plus de la bibliothèque.** Une icône de jeu est un dessin par
 * état : un livre ouvert, un livre fermé, et rien entre les deux. Passer de l'un à l'autre ne
 * peut alors se faire qu'en fondu, c'est-à-dire en montrant deux objets superposés là où il
 * n'y en a qu'un. Ici les deux états sont **deux positions d'un même dessin**, et la
 * transition est le trajet entre elles.
 *
 * **Ce qui déclenche le mouvement, et ce qui l'interdit.** Le livre ne se dessine pas
 * différemment selon l'état : il est dans un état, et le navigateur interpole. Une transition
 * ne se joue qu'au changement — jamais au montage, jamais deux fois, jamais en boucle. La
 * règle « une seule fois par activation » n'est donc pas gardée par du code, elle est la
 * nature même du mécanisme employé.
 *
 * L'aiguille, elle, joue une partition en plusieurs temps, ce qu'une transition ne sait pas
 * exprimer : c'est une animation, et une animation appliquée en permanence à l'entrée allumée
 * se rejouerait à chaque montage. D'où `activation`, qui est le seul renseignement que ces
 * composants demandent au dehors : le rang du changement de section en cours. Il ne change pas
 * quand on descend dans la branche déjà ouverte, et c'est exactement ce qu'il fallait
 * distinguer.
 *
 * **Le mouvement ne porte rien.** La graisse du trait, la couleur et le repère de position
 * disent l'entrée active, comme avant ; l'animation ne fait que rendre le changement sensible
 * à l'endroit où on vient de cliquer. Coupée — en mouvement réduit —, l'interface reste
 * exacte : voir `globals.css`, section « Les deux icônes de la navigation ».
 */

export type NavIconProps = {
  /** L'entrée est celle de la branche où l'on se trouve. */
  active: boolean;
  /**
   * Le rang du changement de section, tenu par `MainNav`. Zéro tant qu'aucun n'a eu lieu : à
   * l'ouverture de l'application, l'état s'affiche, il ne se joue pas.
   */
  activation: number;
  size: number;
  className?: string;
};

type GlyphProps = {
  active: boolean;
  /** L'état lu par la feuille de style — c'est elle qui décide ce qu'il déplace. */
  state: string;
  size: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

/**
 * L'enveloppe commune aux deux icônes : la boîte, la graisse, les extrémités.
 *
 * Elle tient à ce que ces deux dessins restent des sœurs de celles de la bibliothèque, qui
 * servent partout ailleurs. Un réglage qui divergerait ici ne se verrait pas dans la barre —
 * il se verrait entre la barre et le reste de l'application.
 */
function Glyph({ active, state, size, className, style, children }: GlyphProps) {
  return (
    <svg
      viewBox={`0 0 ${BOX} ${BOX}`}
      width={size}
      height={size}
      data-state={state}
      className={className ? `nav-icon ${className}` : "nav-icon"}
      // La graisse est une propriété animable, et elle est ici plutôt qu'en attribut pour
      // cette seule raison : elle s'épaissit avec la couleur, sur la même durée.
      style={{ strokeWidth: active ? STROKE.active : STROKE.rest, ...style }}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
    >
      {children}
    </svg>
  );
}

/** Les mesures du livre, passées à la feuille de style : chacune n'a qu'une source. */
const BOOK_VARIABLES = {
  "--book-shift": `${COVER_SHIFT}px`,
  "--spine-band": `${BOOK.band}px`,
} as CSSProperties;

/** Chaque plat porte son propre sens d'inclinaison ; la feuille de style décide quand il joue. */
const leafStyle = (side: -1 | 1) => ({ "--leaf-tilt": tiltOf(side) }) as CSSProperties;

/**
 * Le livre — ouvert sur « Aujourd'hui », fermé à plat ailleurs.
 *
 * Trois traits, deux rectangles et un dos. Ouvert, les plats s'inclinent vers la reliure ;
 * fermé, ils sont droits, le plat de gauche s'est rabattu sur l'autre, le dos s'est décalé
 * sur la couverture et le volume s'est recentré. Aucun de ces quatre mouvements ne redessine
 * quoi que ce soit — voir `nav-icon-geometry.ts`.
 *
 * L'ordre du tracé compte : le plat mobile passe **sous** le plat fixe, comme une couverture
 * qu'on rabat sur le volume, et le dos passe au-dessus des deux, parce qu'une reliure se voit.
 */
export function BookIcon({ active, size, className }: NavIconProps) {
  return (
    <Glyph
      active={active}
      state={active ? "open" : "closed"}
      size={size}
      className={className}
      style={BOOK_VARIABLES}
    >
      <g className="nav-book">
        <path className="nav-leaf nav-book-cover" style={leafStyle(-1)} d={leaf(-1)} />
        <path className="nav-leaf" style={leafStyle(1)} d={leaf(1)} />
        <path className="nav-spine" d={SPINE_PATH} />
      </g>
    </Glyph>
  );
}

/** Les positions de la partition, en propriétés personnalisées ; les instants sont dans le CSS. */
const SWING_VARIABLES = Object.fromEntries(
  NEEDLE_SWING.map((angle, index) => [`--swing-${index + 1}`, `${angle}deg`])
) as CSSProperties;

/**
 * La boussole — l'aiguille cherche le nord à l'arrivée sur « Explorer », et ne bouge plus.
 *
 * La partition est relancée par la clé de l'aiguille, et non par une classe qu'on retirerait
 * pour la remettre : une animation CSS ne se rejoue qu'au montage de l'élément qui la porte,
 * et un élément dont la clé change est un élément neuf. Ce que cette clé refuse de faire est
 * le point important — elle ne bouge pas quand on navigue **à l'intérieur** d'Explorer, où la
 * section reste la même et où rien ne s'active.
 *
 * Le cadran, lui, n'est pas dans le groupe qui tourne : c'est le boîtier, il est fixe.
 */
export function CompassIcon({ active, activation, size, className }: NavIconProps) {
  return (
    <Glyph
      active={active}
      state={active && activation > 0 ? "finding" : "still"}
      size={size}
      className={className}
      style={SWING_VARIABLES}
    >
      <circle cx={CENTER} cy={CENTER} r={RING_R} />
      <path key={activation} className="nav-needle" d={NEEDLE_PATH} />
    </Glyph>
  );
}
