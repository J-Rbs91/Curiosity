/**
 * La géométrie des deux icônes de la navigation, et la partition de l'aiguille.
 *
 * Ces deux dessins ne sont pas des icônes ordinaires : ils **changent d'état**. Le livre
 * s'ouvre et se referme, l'aiguille cherche le nord. Un dessin qui bouge ne peut plus être une
 * chaîne de caractères recopiée d'une bibliothèque : il faut savoir où est la charnière du
 * livre et où est le centre de l'aiguille, sans quoi le pivot se fait à côté et le mouvement
 * se lit comme un défaut de centrage plutôt que comme une ouverture.
 *
 * D'où ce fichier : les deux dessins sont **dérivés** de quelques mesures, et les mesures sont
 * exactement ce que les transformations ont besoin de connaître.
 *
 * Toutes les valeurs sont exprimées dans la boîte de 24 × 24 des icônes du produit — celle de
 * `lucide-react`, que la navigation employait jusqu'ici et que les autres écrans emploient
 * toujours. Ces deux icônes doivent rester des sœurs des autres : même boîte, même graisse,
 * mêmes extrémités arrondies.
 *
 * Contrairement à son voisin `mark-geometry.mjs`, ce module est en TypeScript : aucun script
 * Node ne le lit, seuls le composant et son test le consomment, et il gagne à être typé.
 */

/** Le côté de la boîte de coordonnées, et le centre optique des deux icônes. */
export const BOX = 24;
export const CENTER = BOX / 2;

/**
 * Les deux graisses de trait, reprises telles quelles du réglage précédent : l'entrée allumée
 * est plus grasse, et c'est l'un des trois porteurs de l'état actif — avec la couleur et le
 * repère de position. Le mouvement, lui, n'en porte aucun ; il ne fait que le rendre sensible.
 */
export const STROKE = { rest: 1.5, active: 2 };

/* --------------------------------------------------------------------------
 * Le livre — deux plats, une charnière
 * -------------------------------------------------------------------------- */

/**
 * Le livre est fait de **deux plats rectangulaires, symétriques par rapport au dos**, et rien
 * d'autre n'est dessiné : ce qui penche, ce qui bascule et ce qui glisse est obtenu par
 * transformation.
 *
 * **Un plat est un rectangle.** C'est la correction qui a tout remis en place : la descente des
 * pages vers la reliure était d'abord écrite dans le tracé, et le livre fermé en héritait donc
 * un trapèze — une forme qui n'est celle d'aucun livre. Or cette descente n'appartient pas au
 * plat : elle appartient à l'*ouverture*. Un livre ouvert à plat a ses pages inclinées vers la
 * gouttière, un livre fermé a ses plats droits, et c'est exactement ce qu'un cisaillement
 * autour du dos exprime — `skewY`, d'un signe pour chaque plat, qui vaut zéro à l'état fermé.
 *
 * **Un plat qui bascule d'un demi-tour se projette en un `scaleX`.** La largeur apparente d'une
 * surface qui pivote vaut son cosinus, et le cosinus passe de 1 à −1 en un demi-tour : ce n'est
 * pas une astuce d'animation, c'est la projection orthographique exacte du geste. Comme les
 * deux plats sont l'image l'un de l'autre dans le miroir du dos, le plat rabattu **retombe
 * exactement sur l'autre** — et il y retombe *cisaillement compris*, parce que le miroir d'un
 * cisaillement d'un signe est le cisaillement de l'autre signe.
 *
 * **Le dos, lui, ne fait que se déplacer.** Ouvert, il est la ligne de gouttière, confondue
 * avec le bord relié des deux plats ; fermé, il se décale sur la couverture et devient la
 * reliure qu'on voit sur tout livre posé. C'est le même trait, vu par la tranche puis de face.
 *
 * Tout cela interdit le fondu enchaîné entre deux dessins : il n'y a qu'un dessin, et trois
 * propriétés qui changent.
 */
export const BOOK = {
  /** Demi-largeur du livre ouvert, c'est-à-dire la largeur d'un plat. */
  half: 10.5,
  /**
   * Le haut et le bas du plat. 10,5 × 15 est un rapport de livre — l'ancien dessin, plus étroit
   * d'un cinquième, se lisait comme une porte avant de se lire comme un volume.
   */
  top: 4.5,
  bottom: 19.5,
  /**
   * L'arrondi de la gouttière — les deux coins extérieurs. Les coins du dos, eux, restent
   * vifs : c'est là que le plat est relié, et un livre n'est arrondi que du côté où on l'ouvre.
   */
  radius: 2,
  /**
   * L'inclinaison des pages du livre ouvert, en degrés, autour du dos.
   *
   * Elle lève le bord extérieur d'une page et demie de trait — assez pour que la silhouette
   * plonge vers la reliure et se lise comme un volume ouvert, trop peu pour qu'une page
   * paraisse fuir. Au-delà d'une douzaine de degrés, le livre ouvert se met à ressembler à un
   * oiseau.
   */
  tilt: 8.5,
  /**
   * La reliure : de combien le dos se décale sur la couverture quand le livre se referme.
   *
   * C'est le seul trait qui distingue un livre fermé d'un rectangle, et il faut qu'il tienne à
   * 20 px : en deçà de deux unités, il se colle au bord et les deux traits n'en font plus qu'un.
   */
  band: 2.4,
};

/**
 * Le déplacement qui recentre le livre fermé.
 *
 * Fermé, le livre n'occupe que le plat de droite : il pèserait sur un bord de la boîte et
 * l'entrée se lirait de travers. Le groupe se déplace donc d'un demi-plat pendant la bascule.
 * Ce n'est pas une correction cosmétique — un livre qu'on referme *change* de centre, et ce
 * déplacement est celui-là.
 */
export const COVER_SHIFT = -BOOK.half / 2;

/** Arrondi des nombres au millième : un chemin lisible, et stable d'un rendu à l'autre. */
const n = (value: number) => Number(value.toFixed(3));

/**
 * Un plat, tracé en entier — dos compris.
 *
 * Il se referme sur lui-même parce que le dos n'est plus le trait qui joint les deux plats : ce
 * trait s'en va former la reliure. Un plat qui compterait sur lui pour fermer son contour
 * s'ouvrirait donc en même temps que le livre.
 *
 * `side` vaut −1 pour le plat de gauche, +1 pour celui de droite. Les deux plats sortent de la
 * même fonction : c'est ce qui garantit la symétrie dont dépend la bascule, et le test le
 * vérifie point par point.
 */
export function leaf(side: -1 | 1): string {
  const { half, top, bottom, radius: r } = BOOK;
  const outer = CENTER + side * half;
  const corner = outer - side * r;
  // Le sens de l'arc suit le sens de parcours : à droite on tourne dans le sens des aiguilles,
  // à gauche dans l'autre.
  const sweep = side > 0 ? 1 : 0;

  return [
    `M${CENTER} ${top}`,
    `H${n(corner)}`,
    `A${r} ${r} 0 0 ${sweep} ${n(outer)} ${n(top + r)}`,
    `V${n(bottom - r)}`,
    `A${r} ${r} 0 0 ${sweep} ${n(corner)} ${bottom}`,
    `H${CENTER}`,
    "Z",
  ].join(" ");
}

/** L'inclinaison d'un plat quand le livre est ouvert : le bord extérieur se lève. */
export const tiltOf = (side: -1 | 1) => `${-side * BOOK.tilt}deg`;

/**
 * Le dos — ligne de gouttière quand le livre est ouvert, reliure quand il est fermé.
 *
 * Il court sur toute la hauteur du plat, et le cisaillement ne le touche pas : celui-ci pivote
 * autour de cette abscisse, où il ne déplace rien. Ouvert, le trait est donc exactement
 * confondu avec le bord relié des deux plats ; il n'apparaît qu'en s'en écartant.
 */
export const SPINE_PATH = `M${CENTER} ${BOOK.top}V${BOOK.bottom}`;

/* --------------------------------------------------------------------------
 * La boussole — un cadran, une aiguille
 * -------------------------------------------------------------------------- */

/** Le cadran, à l'identique de l'icône employée jusqu'ici. */
export const RING_R = 10;

/**
 * L'aiguille : un losange allongé, pointé au nord-est, aux flancs adoucis.
 *
 * Ce dessin est celui de `lucide-react` — l'icône reste celle qu'on connaît, et le test le
 * vérifie sommet par sommet. Il est ici **redérivé** de ses quatre mesures au lieu d'être
 * recopié, pour une raison de fond : l'aiguille tourne, et une aiguille tourne autour de son
 * centre. Un chemin recopié est centré par chance ; un chemin construit à partir d'un centre
 * l'est par construction, et le pivot de la rotation est le même point que celui du cadran.
 */
export const NEEDLE = {
  /** Demi-longueur, de la pointe au centre. */
  long: 6,
  /** Demi-largeur, du flanc au centre. */
  across: 3,
  /** L'orientation de la pointe, en degrés, dans le repère du SVG où les y descendent. */
  bearing: -45,
  /** L'arrondi des deux flancs. Les pointes, elles, restent des pointes. */
  radius: 2,
};

type Point = readonly [number, number];

/**
 * Les quatre sommets de l'aiguille, dans l'ordre du tracé : pointe nord, flanc est, pointe
 * sud, flanc ouest. C'est un parcours dans le sens des aiguilles d'une montre, ce dont
 * `roundedPolygon` a besoin pour tourner ses coins du bon côté.
 */
export function needleCorners(): { at: Point; radius: number }[] {
  const radians = (NEEDLE.bearing * Math.PI) / 180;
  const along: Point = [Math.cos(radians), Math.sin(radians)];
  const across: Point = [-along[1], along[0]];
  const from = (unit: Point, distance: number): Point => [
    CENTER + unit[0] * distance,
    CENTER + unit[1] * distance,
  ];

  return [
    { at: from(along, NEEDLE.long), radius: 0 },
    { at: from(across, NEEDLE.across), radius: NEEDLE.radius },
    { at: from(along, -NEEDLE.long), radius: 0 },
    { at: from(across, -NEEDLE.across), radius: NEEDLE.radius },
  ];
}

/**
 * Un polygone à coins arrondis, parcouru dans le sens des aiguilles d'une montre.
 *
 * Le rayon demandé est celui du cercle inscrit dans le coin ; ce qu'il faut en déduire est la
 * longueur à retrancher sur chacune des deux arêtes, et elle dépend de l'angle du coin — d'où
 * la tangente. Un rayon de zéro laisse le sommet vif.
 */
function roundedPolygon(corners: { at: Point; radius: number }[]): string {
  const parts = corners.flatMap(({ at, radius }, index) => {
    const move = index === 0 ? "M" : "L";
    if (radius === 0) return [`${move}${n(at[0])} ${n(at[1])}`];

    const toward = (other: Point): Point => {
      const [dx, dy] = [other[0] - at[0], other[1] - at[1]];
      const length = Math.hypot(dx, dy);
      return [dx / length, dy / length];
    };
    const previous = toward(corners[(index - 1 + corners.length) % corners.length].at);
    const next = toward(corners[(index + 1) % corners.length].at);

    const half = Math.acos(previous[0] * next[0] + previous[1] * next[1]) / 2;
    const trim = radius / Math.tan(half);
    const on = (unit: Point): string =>
      `${n(at[0] + unit[0] * trim)} ${n(at[1] + unit[1] * trim)}`;

    return [`${move}${on(previous)}`, `A${radius} ${radius} 0 0 1 ${on(next)}`];
  });

  return [...parts, "Z"].join(" ");
}

export const NEEDLE_PATH = roundedPolygon(needleCorners());

/**
 * La partition de l'aiguille : les positions qu'elle tient successivement, en degrés d'écart
 * au nord, la dernière étant le nord lui-même.
 *
 * Une aiguille aimantée ne se pose pas : elle dépasse, revient, dépasse encore moins, et
 * s'arrête. Ce sont ces **quatre mouvements amortis** qui font lire « elle a cherché », là où
 * une rotation unique ne dirait rien du tout. L'amortissement vaut un peu moins de moitié d'un
 * écart au suivant, ce qui est le régime d'une aiguille réelle.
 *
 * Ce que la partition ne fait jamais, et le test le tient : aucun écart n'approche le quart de
 * tour. Une aiguille oscille autour d'une direction, elle ne fait pas le tour du cadran — et
 * l'icône, elle, doit rester lisible pendant qu'elle bouge.
 *
 * Le rythme, lui, n'est pas ici : il est dans les pourcentages des images clés de
 * `globals.css`. Les positions sont la géométrie, les instants sont le mouvement, et les deux
 * ne se recopient pas l'un l'autre — même partage que pour le regard de la marque.
 */
export const NEEDLE_SWING = [34, -14, 6, -2, 0];
