import type { Quotation } from "@/types";

/**
 * Le seul endroit de l'application où c'est l'auteur qui parle.
 *
 * Deux décisions s'y tiennent. Les guillemets sont posés par le composant, jamais stockés
 * dans le corpus : le texte enregistré doit rester le texte, comparable caractère par
 * caractère à l'édition. Et la référence est toujours affichée, y compris la mention de
 * traduction : une phrase de Weber lue en français est passée par quelqu'un, et taire ce
 * quelqu'un reviendrait à présenter une interprétation comme une parole d'auteur.
 *
 * Les tailles sont en `em` : la citation suit l'échelle de la carte qui la porte, sans quoi
 * elle serait le seul bloc à ne pas rétrécir sur un petit écran — et c'est justement le plus
 * long.
 */
export function ConceptQuotation({
  quotation,
  compact = false,
}: {
  quotation: Quotation;
  /**
   * Sur la carte du jour : la légende se réduit à ce qui rattache la phrase à quelqu'un.
   *
   * Entière, elle occupait cinq lignes à 9,7 px sur un écran de 667 points et six lignes
   * sur un de 844 — soit, mesuré, plus de hauteur que la citation qu'elle légende. Le bloc
   * le plus long, le plus dense et le moins lisible de l'écran principal était un appareil
   * de notes, et il coupait en deux la partie de la carte qui doit se lire d'un trait.
   *
   * La notice complète — édition, pagination, mention de traduction — n'est pas perdue :
   * elle est dans la vue des sources, à un appui, et sur la fiche du concept, qui n'a
   * aucune contrainte de hauteur. La règle de la légende ne change pas pour autant : la
   * mention de traduction reste affichée partout où la référence l'est, parce qu'une
   * phrase passée par un traducteur ne peut pas se présenter comme une parole d'auteur.
   */
  compact?: boolean;
}) {
  return (
    <figure className="border-l border-line pl-[1em]">
      <blockquote className="font-serif-display text-[1.05em] leading-relaxed text-ink">
        «&#8239;{quotation.text}&#8239;»
      </blockquote>
      <figcaption className="mt-[0.5em] text-[0.8em] leading-relaxed text-ink-faint">
        {/* Le nom n'est là que s'il n'est pas déjà en tête de la référence — sans quoi la
            légende répétait « Joan Acker, Joan Acker, "Hierarchies…" ». La virgule appartient
            au nom, pas à la référence : elle disparaît avec lui. */}
        {quotation.attributedTo && <>{quotation.attributedTo}, </>}
        {compact ? shortReference(quotation.reference) : quotation.reference}
        {quotation.translationNote && <> · {quotation.translationNote}</>}
      </figcaption>
    </figure>
  );
}

/**
 * Le titre de l'ouvrage, sans son appareil bibliographique.
 *
 * La coupe se fait à la première virgule qui suit la fermeture du titre — guillemet
 * français ou anglais —, ce qui laisse le titre entier et retire l'éditeur, la collection,
 * l'année et la pagination. À défaut de titre repérable, la référence est rendue telle
 * quelle : mieux vaut une légende trop longue qu'une légende coupée au mauvais endroit,
 * qui laisserait croire à une source que le corpus ne dit pas.
 */
function shortReference(reference: string): string {
  const fin = reference.search(/[»"'],/);
  if (fin < 0) return reference;
  return reference.slice(0, fin + 1);
}
