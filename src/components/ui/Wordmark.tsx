import type { CSSProperties } from "react";

import { Mark } from "@/components/ui/Mark";

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
 * **Ce que lit un lecteur d'écran.** Le mot est annoncé une fois, entier. Sans cela, l'œil
 * étant un dessin et non un caractère, la synthèse vocale dirait « curi » puis « sity ».
 */

export type WordmarkProps = {
  /** Joue la séquence du regard, en boucle espacée de pauses aléatoires — voir `Mark`. */
  animate?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function Wordmark({ animate = false, className, style }: WordmarkProps) {
  return (
    <span
      role="img"
      aria-label="Curiosity"
      className={`font-sans font-semibold tracking-[-0.01em] whitespace-nowrap ${className ?? ""}`}
      style={style}
    >
      <span aria-hidden>Curi</span>
      {/*
       * Les trois valeurs qui alignent le dessin sur les lettres.
       *
       * La hauteur vaut la hauteur de capitale d'Inter — 0,727 em — majorée du débord dont
       * toute forme ronde a besoin pour paraître aussi haute qu'une forme plate. Le décalage
       * vertical répartit ce débord de part et d'autre : sans lui, le O dépasserait en haut et
       * s'arrêterait net sur la ligne de base. Les approches reprennent celles du O d'Inter,
       * faute de quoi le mot s'ouvrirait autour de sa propre marque.
       *
       * Ces valeurs ont été vérifiées à l'écran, pas déduites : voir `docs/ux-direction.md`.
       */}
      <Mark
        optical="text"
        animate={animate}
        className="inline-block mx-[0.032em]"
        style={{ width: "0.752em", height: "0.752em", verticalAlign: "-0.0125em" }}
      />
      <span aria-hidden>sity</span>
    </span>
  );
}
