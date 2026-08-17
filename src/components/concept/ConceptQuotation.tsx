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
export function ConceptQuotation({ quotation }: { quotation: Quotation }) {
  return (
    <figure className="border-l border-line pl-[1em]">
      <blockquote className="font-serif-display text-[1.05em] leading-relaxed text-ink">
        «&#8239;{quotation.text}&#8239;»
      </blockquote>
      <figcaption className="mt-[0.5em] text-[0.75em] leading-relaxed text-ink-faint">
        {/* Le nom n'est là que s'il n'est pas déjà en tête de la référence — sans quoi la
            légende répétait « Joan Acker, Joan Acker, "Hierarchies…" ». La virgule appartient
            au nom, pas à la référence : elle disparaît avec lui. */}
        {quotation.attributedTo && <>{quotation.attributedTo}, </>}
        {quotation.reference}
        {quotation.translationNote && <> · {quotation.translationNote}</>}
      </figcaption>
    </figure>
  );
}
