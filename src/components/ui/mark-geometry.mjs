/**
 * La géométrie de l'œil — une seule définition, trois consommateurs.
 *
 * Le composant React (`Mark.tsx`), le générateur d'icônes (`scripts/icons/build-icons.mjs`)
 * et les fichiers déposés dans `public/icons/` lisent tous ces valeurs. Recopier un nombre
 * dans l'un des trois produirait une marque qui diverge d'un support à l'autre sans que
 * personne ne s'en aperçoive : les trois rendus ne sont jamais regardés côte à côte.
 *
 * Le fichier est en `.mjs` plutôt qu'en `.ts` parce que le générateur tourne sous Node sans
 * étape de compilation. `allowJs` le rend lisible depuis TypeScript, et des constantes
 * numériques n'ont besoin d'aucune annotation pour être typées correctement.
 *
 * Toutes les valeurs sont exprimées dans une boîte de 100 × 100, la marque centrée en
 * (50, 50). Un SVG mis à l'échelle par son `viewBox` rend ces unités proportionnelles par
 * construction : la règle « les amplitudes s'expriment en pourcentage, jamais en pixels »
 * est ici tenue par le système de coordonnées lui-même.
 */

/** Le côté de la boîte de coordonnées. */
export const BOX = 100;

/** Le centre optique de la marque. */
export const CENTER = BOX / 2;

/**
 * Rayon extérieur du O — un cercle parfait, et c'est ce qui le garde lisible comme un O.
 *
 * 39 sur 100 laisse la marge dont un cadrage d'icône a besoin sans que la marque flotte.
 */
export const OUTER_R = 39;

/**
 * La contre-forme, et la décision qui fait tout le travail.
 *
 * Un anneau d'épaisseur constante avec un point au milieu ne se lit pas comme un œil : il se
 * lit comme une cible, ou comme un bouton d'enregistrement. Trois cercles concentriques et
 * réguliers sont exactement ce que le regard humain reconnaît le moins comme un regard. Cela
 * a été vérifié en dessinant les deux, côte à côte, de 16 à 160 px.
 *
 * Ce qui renverse la lecture est d'ouvrir la contre-forme **plus large que haute** : le
 * contour extérieur reste un cercle — donc un O —, tandis que l'intérieur devient une
 * ouverture. L'anneau est alors fin sur les côtés et épais en haut et en bas, ce qui est
 * l'inverse du contraste d'un O de labeur. Ce n'est pas une coquetterie typographique : ce
 * contraste inversé est précisément ce qui empêche la figure de retomber sur le disque
 * concentrique, et il ne s'applique qu'à ce seul caractère, qui n'est plus tout à fait une
 * lettre.
 *
 * Le rapport entre les deux épaisseurs est tenu constant (≈ 1,6) d'une taille optique à
 * l'autre : c'est lui qui fait la forme, pas les valeurs absolues.
 */
export const STROKE = {
  /**
   * Taille d'icône : la marque est seule, et parfois minuscule. Un favicon de 16 px rend un
   * filet de moins de 1,5 px comme une tache grise plutôt que comme un contour ; le côté fin
   * ne descend donc pas sous 9.
   */
  icon: { side: 9, cap: 14.5 },
  /**
   * Taille de texte : la marque est dans le mot, et l'anneau doit peser ce que pèsent les
   * fûts des lettres qui l'entourent. À la graisse d'icône, le O serait le seul caractère
   * gras du mot et se lirait comme une faute de composition.
   */
  text: { side: 7.4, cap: 12 },
};

/** Demi-axes de la contre-forme, déduits de l'épaisseur : le O n'a qu'un rayon extérieur. */
export function counter(stroke) {
  return { rx: OUTER_R - stroke.side, ry: OUTER_R - stroke.cap };
}

/** Rayon de la pupille. Assez grande pour se voir à 16 px, assez petite pour avoir où aller. */
export const PUPIL_R = 11;

/**
 * Le parcours du regard, en positions successives de la pupille.
 *
 * Ce ne sont pas des points choisis pour dessiner une figure : ce sont des **fixations**.
 * L'œil humain ne balaie pas continûment, il saute — une saccade de quelques dizaines de
 * millisecondes, puis un arrêt de deux à trois cents. C'est ce rythme qui distingue un
 * regard d'un point qui flotte, et c'est la seule raison pour laquelle ce mouvement a le
 * droit d'exister dans une application qui n'anime rien au repos : il commence, il finit,
 * et il se repose au centre.
 *
 * Les trois fixations sont à distance sensiblement égale du bord de la contre-forme — la
 * pupille en atteint environ 72 % dans les trois cas —, ce qui donne une orbite régulière
 * plutôt que trois écarts d'amplitudes différentes. Le déplacement latéral est le plus ample :
 * c'est aussi le cas du regard réel, et c'est ce que la contre-forme ouverte permet.
 *
 * Une pupille qui toucherait son anneau ne se lirait plus comme un regard mais comme un
 * défaut de centrage ; `npm test` vérifie ce dégagement plutôt que de le supposer.
 */
export const GAZE = {
  rest: [0, 0],
  up: [-9, -5],
  right: [11, 1.5],
  down: [-4, 6.5],
};

/** L'ordre dans lequel les fixations sont jouées, repos compris aux deux bouts. */
export const GAZE_SEQUENCE = ["rest", "up", "right", "down", "rest"];

/**
 * Occupation de la marque selon le support, en fraction du côté du canevas.
 *
 * Un même chiffre partout donnerait une icône d'application trop pleine et un favicon trop
 * vide. Ce sont des décisions de cadrage : `maskable` est petit parce qu'Android recadre
 * l'icône selon une forme qu'on ne connaît pas à l'avance, et `favicon` est grand parce qu'à
 * 16 px chaque pixel perdu en marge est un pixel de moins pour dire ce qu'on est.
 */
export const FILL = {
  /** Icône PWA « any » et apple-touch : le système applique lui-même son masque. */
  app: 0.58,
  /** Icône maskable : la zone sûre est un cercle de 80 % du côté ; on reste bien en deçà. */
  maskable: 0.46,
  /** Favicon : la marque occupe presque tout, sans quoi elle disparaît dans l'onglet. */
  favicon: 0.72,
};

/** Rayon des coins, en fraction du côté. Le favicon adoucit moins : à 16 px, un grand rayon mange la marque. */
export const CORNER = {
  app: 0.225,
  favicon: 0.18,
};

/**
 * Les deux seules couleurs de la marque, reprises de l'échelle de neutres de l'application
 * (`src/app/globals.css`). Le fond est le fond du produit, l'encre est `--n-50` — la valeur
 * qui, dans cette interface, ne dit qu'une chose : voici ce qu'il faut regarder.
 */
export const COLOR = {
  ground: "#000000",
  ink: "#fafafa",
};
