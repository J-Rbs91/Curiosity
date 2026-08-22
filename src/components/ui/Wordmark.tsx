import type { CSSProperties } from "react";

import { Mark, type GazeName } from "@/components/ui/Mark";

/**
 * Les deux mots dont le O est l'œil — le nom du produit, et le titre d'Explorer.
 *
 * Ils sont ensemble ici parce que ce qui les distingue est **la lettre qu'ils remplacent** et
 * **le regard qu'ils portent**, et qu'on ne peut juger d'un de ces réglages qu'à côté de
 * l'autre. Le mécanisme, lui, est le même et n'est écrit qu'une fois : couper le mot, poser le
 * dessin dans le trou, et le rendre à la synthèse vocale comme un mot entier.
 *
 * **Ce que lit un lecteur d'écran.** Le mot est annoncé une fois, entier. Sans cela, l'œil étant
 * un dessin et non un caractère, la synthèse vocale dirait « curi » puis « sity ».
 */

/**
 * L'ajustement du dessin à la place d'une lettre, en em de la police qui l'entoure.
 *
 * Les trois valeurs sont **relevées sur le glyphe remplacé**, et non choisies : `size` est la
 * hauteur de son encre, `shift` la part de cette encre qui descend sous la ligne de base, et
 * `side` ce qu'il faut laisser de part et d'autre pour que le mot garde exactement la chasse
 * qu'il aurait sans substitution.
 *
 * Prendre la hauteur de l'encre plutôt que la hauteur de référence — capitale ou hauteur d'œil —
 * est ce qui règle le débord d'un seul geste : une forme ronde doit dépasser en haut et en bas
 * pour paraître aussi haute qu'une forme plate, et le glyphe remplacé le fait déjà, dans la
 * proportion que son dessinateur a retenue. Il n'y a donc pas de débord à décider, seulement une
 * boîte à recopier.
 */
type Fit = {
  /** Hauteur de l'encre du glyphe remplacé — le diamètre du O, marge comprise. */
  size: number;
  /** Ce que cette encre descend sous la ligne de base. */
  shift: number;
  /** Approche de part et d'autre, prise de la chasse du glyphe remplacé. */
  side: number;
};

/**
 * Le O d'Inter en capitale, graisse 600 : encre de 0,747 em, dont 0,010 sous la ligne de base.
 *
 * Les valeurs retenues sont un peu au-dessus — 0,752 et 0,0125 —, et ce sont celles qui ont été
 * vérifiées à l'écran plutôt que déduites : voir `docs/ux-direction.md`. L'écart est de l'ordre
 * du demi-pour-cent et ne se voit pas ; l'écrire ainsi évite surtout de rejouer un réglage
 * validé pour l'aligner sur une décimale.
 */
const INTER_CAP: Fit = { size: 0.752, shift: 0.0125, side: 0.032 };

/**
 * Le o de la Source Serif 4 en bas de casse, graisse 600 : encre de 0,522 em — 0,508 de hauteur
 * d'œil plus son débord —, dont 0,014 sous la ligne de base, pour une chasse de 0,590 em.
 *
 * **Pourquoi le dessin reste rond quand la lettre ne l'est pas.** Le o de cette serif est très
 * légèrement plus haut que large, 522 contre 508 ; le O de la marque est un cercle parfait, et
 * c'est ce qui le garde lisible comme un O. C'est donc la **hauteur** qui est recopiée, pas la
 * largeur : une forme ronde s'aligne sur ses voisines par le haut et par le bas, jamais par les
 * flancs. Les 0,014 em de largeur que le cercle prend en trop sont repris sur les approches —
 * 0,034 au lieu de 0,041 —, si bien que le mot occupe la chasse qu'il occuperait sans
 * substitution. Serrer un peu un rond n'est d'ailleurs pas un pis-aller : on mesure son
 * dégagement à son point le plus large, où il n'est tangent que sur un point.
 *
 * **Pourquoi la minuscule ne se rattrape pas par une capitale.** Le nom du produit met une
 * capitale au milieu du mot pour que l'œil ait la hauteur du C qui le précède — sans quoi il
 * disparaîtrait entre les hampes. « Explorer » est un titre d'écran, pas une marque : une
 * capitale au milieu y serait lue comme une faute de composition, et c'est le dessin qui
 * descend à la hauteur d'œil plutôt que le mot qui monte.
 */
const SERIF_X: Fit = { size: 0.522, shift: 0.014, side: 0.034 };

export type EyedWordProps = {
  /**
   * Joue le regard, en boucle espacée de pauses aléatoires — voir `Mark`.
   *
   * Un booléen, et non le nom d'une séquence : **laquelle** jouer est une décision de dessin,
   * qui appartient au mot et se lit plus bas à côté de ses autres cotes ; **si** elle joue est
   * une décision de place, qui appartient à l'écran et se paie sur le budget de mouvement du §7
   * de `docs/ux-direction.md`. Laisser l'appelant choisir la partition permettrait de poser le
   * regard qui cherche dans un en-tête qu'on revient voir, ce qui est exactement ce que ce
   * fichier existe pour empêcher.
   */
  animate?: boolean;
  className?: string;
  style?: CSSProperties;
};

function EyedWord({
  label,
  before,
  after,
  fit,
  gaze,
  animate = false,
  className,
  style,
}: EyedWordProps & {
  label: string;
  before: string;
  after: string;
  fit: Fit;
  gaze: GazeName;
}) {
  return (
    <span role="img" aria-label={label} className={className} style={style}>
      <span aria-hidden>{before}</span>
      {/*
       * La graisse optique est celle du texte dans les deux cas : l'anneau est dans un mot, et
       * doit peser ce que pèsent les lettres qui l'entourent. La graisse d'icône y ferait le
       * seul caractère gras du mot — voir le motif des deux graisses dans `mark-geometry.mjs`.
       *
       * La partition, elle, vient du mot ; `animate` ne décide que si elle joue.
       */}
      <Mark
        optical="text"
        gaze={animate ? gaze : undefined}
        className="inline-block"
        style={{
          width: `${fit.size}em`,
          height: `${fit.size}em`,
          verticalAlign: `${-fit.shift}em`,
          marginInline: `${fit.side}em`,
        }}
      />
      <span aria-hidden>{after}</span>
    </span>
  );
}

/**
 * Le nom, avec son œil à la place du O.
 *
 * **Pourquoi le sans-serif.** La règle du produit est écrite : « la serif porte ce qui se lit,
 * le sans porte ce qui se choisit » — un nom est une étiquette, pas un texte. Elle se double
 * ici d'une raison de dessin : l'anneau est d'épaisseur presque constante, comme les fûts
 * d'Inter, alors qu'il détonnerait à côté du contraste de la Source Serif.
 *
 * **Pourquoi une majuscule au milieu du mot.** C'est ce qui fait exister la marque comme
 * marque : sans elle, l'œil serait un o de bas de casse, plus petit que les hampes qui
 * l'entourent, et il disparaîtrait. La capitale lui donne la hauteur du C initial, et le mot
 * se lit comme deux fois « curiosité » — le nom, et le geste.
 *
 * **Le regard qu'il porte est `scanning`.** C'est le mot qui dit « curiosité » : son œil
 * parcourt, saute d'une fixation à l'autre et cligne à la charnière de deux regards. Le geste
 * que le nom nomme est celui-là même que le dessin fait.
 */
export function Wordmark({ animate = false, className, style }: EyedWordProps) {
  return (
    <EyedWord
      label="Curiosity"
      before="Curi"
      after="sity"
      fit={INTER_CAP}
      gaze="scanning"
      animate={animate}
      className={`font-sans font-semibold tracking-[-0.01em] whitespace-nowrap ${className ?? ""}`}
      style={style}
    />
  );
}

/**
 * Le titre d'Explorer, avec le même œil à la place de son o.
 *
 * **Ce qui change par rapport au nom, et ce qui ne change pas.** Le dessin est le même, jusqu'à
 * la graisse ; ce sont ses trois cotes qui changent, parce que la lettre qu'il remplace n'est ni
 * de la même police, ni de la même casse — voir `SERIF_X`. Le titre ne fixe donc ni famille ni
 * taille : il les tient du `h1` qui le porte, comme le ferait le mot qu'il remplace.
 *
 * **Le regard qu'il porte est `waiting`, et ce n'est pas une économie.** Rejouer ici la
 * partition d'ouverture aurait été le geste facile, et il aurait dit le contraire de l'écran :
 * un œil qui balaie six positions en 4,8 secondes cherche quelque chose, alors que cette page
 * est celle où **c'est le lecteur qui choisit**. `waiting` ne fait que quatre saccades, toutes
 * dans le même sens, tient ses fixations plus d'une seconde et ne cligne que lentement — un œil
 * posé, qui attend qu'on se décide. Les deux partitions sont écrites côte à côte dans
 * `mark-geometry.mjs`, et `npm test` vérifie qu'elles ne convergent pas.
 *
 * **Pourquoi ce n'est pas une signature de plus.** Un logo posé en en-tête permanent
 * n'apprendrait rien à qui est déjà entré, et le §4 de `docs/ux-direction.md` l'exclut toujours.
 * Ce qui est ici n'est pas la marque : c'est le titre de l'écran, écrit dans la serif des titres
 * et à la taille des titres, dont une lettre est dessinée. Le mot lu reste « Explorer ».
 */
export function ExploreTitle({ animate = false, className, style }: EyedWordProps) {
  return (
    <EyedWord
      label="Explorer"
      before="Expl"
      after="rer"
      fit={SERIF_X}
      gaze="waiting"
      animate={animate}
      className={`whitespace-nowrap ${className ?? ""}`}
      style={style}
    />
  );
}
