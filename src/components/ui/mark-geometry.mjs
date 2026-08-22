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
 * Les six fixations sont à distance sensiblement égale du bord de la contre-forme — la pupille
 * en occupe entre 52 et 60 % du dégagement disponible dans tous les cas —, ce qui donne une
 * orbite régulière plutôt que six écarts d'amplitudes différentes. Le déplacement latéral est
 * le plus ample : c'est aussi le cas du regard réel, et c'est ce que la contre-forme ouverte
 * permet.
 *
 * Les noms disent la direction dominante, et non un axe exact : `up` penche vers la gauche,
 * `down` aussi. C'est l'orbite d'un œil, pas une rose des vents.
 *
 * Une pupille qui toucherait son anneau ne se lirait plus comme un regard mais comme un
 * défaut de centrage ; `npm test` vérifie ce dégagement plutôt que de le supposer.
 */
export const GAZE = {
  rest: [0, 0],
  up: [-9, -5],
  right: [11, 1.5],
  down: [-4, 6.5],
  left: [-11, 2],
  "up-right": [9, -4.5],
  "down-right": [5.5, 6.5],
};

/**
 * Les trois réglages de la paupière. Chacun corrige un défaut constaté à l'arrêt sur image,
 * et aucun n'est un ajustement de goût.
 */
export const LID = {
  /**
   * Le débord dans l'encre de l'anneau, tout autour de la découpe.
   *
   * À l'identique de la contre-forme, la paupière close aurait exactement le bord de l'anneau.
   * Deux contours lissés qui coïncident ne totalisent pas une couverture pleine — chacun couvre
   * à moitié le même pixel —, et l'œil clos apparaît alors **cerné d'un liséré sombre** au lieu
   * d'être un disque plein. En débordant, le bord lissé de la paupière tombe sur de l'encre, où
   * il ne se voit pas, et celui de l'anneau est couvert entièrement.
   *
   * Trois unités valent environ un pixel à la plus petite taille où cette animation joue — le
   * mot de l'écran de lancement —, et l'anneau en garde plus de trois sur son côté le plus fin.
   */
  bleed: 3,

  /**
   * La demi-largeur de la paupière, en multiple de celle de la découpe.
   *
   * C'est le réglage qui décide de la **forme de l'ouverture**, et le seul défaut de cette
   * animation qu'on ne voit qu'en mouvement. Une paupière aussi large que la contre-forme voit
   * sa propre pointe entrer dans le champ à mi-parcours : c'est alors elle, et non plus son
   * bord inférieur, qui borne l'ouverture — le noir prend une forme d'amande crantée au lieu
   * d'un croissant, et le clignement se lit comme une encoche.
   *
   * Débordant latéralement, ses flancs sont hors de la découpe à toute hauteur : le bord
   * inférieur est le seul contour qui entre jamais dans le champ, et l'ouverture est un
   * croissant du début à la fin.
   */
  width: 1.6,

  /**
   * Le creux du bord inférieur, au centre.
   *
   * Une paupière haute est une **courbe rase**, pas un hémisphère : cinq unités de creux sur
   * une découpe qui en fait cinquante-cinq de haut. C'est ce qui distingue un bord de paupière
   * d'un volet — une arête droite — comme d'une bulle qui monterait.
   */
  sag: 5,
};

/**
 * La paupière : la forme qui descend sur la contre-forme, et la découpe qui la contient.
 *
 * Un clignement n'est pas une pupille qui s'écrase, c'est une paupière qui tombe. Elle est
 * découpée par la contre-forme parce qu'aucune position ne l'en dispense : hors de celle-ci
 * l'anneau est déjà de l'encre et le dehors est transparent, donc une paupière non découpée
 * peindrait une tache au-dessus du O. Il faudrait qu'elle soit plus haute que la contre-forme
 * pour la couvrir, et plus courte pour se cacher au-dessus.
 *
 * **La course est calée sur ce qu'on voit.** Relevée, le point le plus bas de son bord est
 * juste au-dessus du sommet de la découpe ; baissée, ses extrémités sont juste au-dessous de
 * son fond. La course vaut donc la hauteur de la découpe, plus le creux — le bord traverse le
 * champ pendant la quasi-totalité du trajet, et la durée écrite dans la partition est celle
 * qu'on perçoit. Une course plus longue que le champ ferait un clignement plus vif que sa
 * valeur, suivi d'un temps mort.
 */
export function lid(stroke) {
  const { rx, ry } = counter(stroke);
  const clip = { rx: rx + LID.bleed, ry: ry + LID.bleed };
  const halfWidth = clip.rx * LID.width;

  // Le niveau des extrémités du bord, paupière baissée : le fond de la découpe.
  const brow = CENTER + clip.ry;
  const travel = 2 * clip.ry + LID.sag;

  return {
    clip,
    halfWidth,
    /**
     * Un quadrilatère fermé par une quadratique. Le point de contrôle est à deux fois le creux
     * pour que la courbe passe exactement à un creux en son milieu, là où elle en est le plus
     * loin — une Bézier ne touche pas son point de contrôle.
     */
    path: [
      `M ${CENTER - halfWidth} ${brow - travel}`,
      `H ${CENTER + halfWidth}`,
      `V ${brow}`,
      `Q ${CENTER} ${brow + 2 * LID.sag} ${CENTER - halfWidth} ${brow}`,
      `Z`,
    ].join(" "),
    open: [0, -travel],
    closed: [0, 0],
  };
}

/**
 * L'ordonnée du bord de la paupière à un écart horizontal du centre, paupière baissée.
 *
 * Elle sert à vérifier la couverture plutôt qu'à dessiner : c'est la même quadratique, résolue
 * pour un `x` donné. Deux écritures d'une même courbe divergeraient, d'où celle-ci déduite de
 * `lid` et non recalculée.
 */
export function lidEdge(stroke, offset) {
  const { clip, halfWidth } = lid(stroke);
  return CENTER + clip.ry + LID.sag * (1 - (offset / halfWidth) ** 2);
}

/**
 * La durée de la séquence entière — regards et clignements sur la même horloge.
 *
 * Deux pistes d'images clés de durée identique restent synchronisées sans qu'on ait à les
 * accorder, et se relancent ensemble d'un seul geste. C'est la raison pour laquelle il n'y a
 * qu'une durée ici, et non une par piste.
 */
export const MARK_SEQUENCE_MS = 4800;

/**
 * Les pauses entre deux passages, en millisecondes, tirées au hasard à chaque fin.
 *
 * Deux valeurs, et pas un intervalle continu : ce qui casse l'impression de mécanique n'est
 * pas la finesse du tirage mais le fait qu'on ne puisse pas anticiper le prochain départ.
 * Deux durées franchement différentes y suffisent, et restent des valeurs qu'on peut lire.
 *
 * La pause court **après** la séquence, elle n'est pas une période : la séquence dure déjà
 * 4,8 s, une période de 2,34 s n'existerait pas.
 */
export const REPLAY_PAUSES_MS = [2340, 5670];

/**
 * La partition du regard, en intervalles de maintien.
 *
 * Chaque entrée dit « la pupille est à cette fixation, de tel pourcentage à tel autre ». Les
 * saccades ne sont pas écrites : ce sont les intervalles laissés vides entre deux maintiens,
 * que l'interpolation parcourt. C'est la forme même des images clés, et c'est ce qui rend
 * impossible d'oublier une saccade en modifiant une fixation.
 *
 * Sur 4 800 ms, un point vaut 48 ms. Les valeurs ne sont donc pas rondes par hasard : une
 * saccade vaut 3 points, soit 144 ms — la durée d'un retour à l'appui —, et une fixation
 * 5 ou 5,5 points, soit 240 à 264 ms. Ce sont les ordres de grandeur du regard humain, et ce
 * sont exactement ceux de la séquence de 1 600 ms qui précède celle-ci.
 *
 * **Pourquoi la séquence est trois fois plus longue sans être ralentie.** Étirer les mêmes
 * quatre saccades donnerait des fixations de 1,1 s : un point qui fixe, plus un œil qui
 * regarde. Le temps supplémentaire achète donc des **événements**, pas de la lenteur — un
 * second regard sur trois fixations que le premier n'a pas visitées, et trois clignements.
 * Le second regard emprunte le côté droit de l'orbite là où le premier tenait le gauche :
 * rejouer le même arc se lirait comme une boucle dans la boucle.
 *
 * Les deux longs maintiens au repos — 32,5 à 52 et 79 à 100 — ne sont pas des temps morts :
 * ce sont les moments où la paupière travaille, et où un œil réel ne déplace pas son regard.
 */
export const GAZE_SCORE = [
  { position: "rest", from: 0, to: 4 },
  { position: "up", from: 7, to: 12.5 },
  { position: "right", from: 15.5, to: 21 },
  { position: "down", from: 24, to: 29.5 },
  { position: "rest", from: 32.5, to: 52 },
  { position: "left", from: 55, to: 60 },
  { position: "up-right", from: 63, to: 68 },
  { position: "down-right", from: 71, to: 76 },
  { position: "rest", from: 79, to: 100 },
];

/**
 * La partition de la paupière, dans la même unité et sur la même horloge.
 *
 * Trois clignements, et ils ne sont pas interchangeables :
 *
 * - **Deux rapides**, à la charnière des deux regards. Un œil réel cligne au moment où il
 *   change de zone d'intérêt, pas au milieu d'une fixation ; c'est ce placement qui articule
 *   la séquence en deux temps au lieu de la couper en deux.
 * - **Un long**, à la fin, plus lent à se relever qu'à tomber — 336 ms contre 204. C'est ce
 *   qui fait que la séquence se termine au lieu de s'arrêter.
 *
 * **Ce qu'un clignement ne doit pas devenir.** Fermé, le O est un disque d'encre pleine : à
 * ce contraste, deux fermetures trop rapprochées seraient un scintillement, et la méthode
 * l'interdit sans condition. Deux garde-fous, tous deux vérifiés par les tests :
 *
 * 1. Les fermetures sont espacées d'au moins un tiers de seconde — ici 480 ms au plus serré,
 *    soit un peu plus de deux par seconde là où le seuil est à trois.
 * 2. La fermeture est un **balayage** de 108 ms, pas une bascule : ce qu'on voit est un bord
 *    qui descend, et le disque plein ne tient que 36 ms. C'est ce qui fait lire une paupière
 *    plutôt qu'un flash, et c'est pour cela que la durée de fermeture ne se raccourcit pas.
 */
export const BLINK_SCORE = [
  { position: "open", from: 0, to: 34 },
  { position: "closed", from: 36.25, to: 37 },
  { position: "open", from: 39.75, to: 44 },
  { position: "closed", from: 46.25, to: 47 },
  { position: "open", from: 49.75, to: 80.5 },
  { position: "closed", from: 84.75, to: 90.5 },
  { position: "open", from: 97.5, to: 100 },
];

/**
 * L'ordre dans lequel les fixations sont jouées, repos compris aux deux bouts.
 *
 * Déduit de la partition plutôt que réécrit : c'est elle qui décide, et deux listes finiraient
 * par ne plus dire la même chose.
 */
export const GAZE_SEQUENCE = GAZE_SCORE.map(({ position }) => position);

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
  favicon: 0.94,
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
