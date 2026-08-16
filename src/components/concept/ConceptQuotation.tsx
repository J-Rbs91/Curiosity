import type { Quotation } from "@/types";

/**
 * Le seul endroit de l'application où c'est l'auteur qui parle.
 *
 * Deux décisions s'y tiennent. Les guillemets sont posés par le composant, jamais stockés
 * dans le corpus : le texte enregistré doit rester le texte, comparable caractère par
 * caractère à l'édition. Et la référence est toujours affichée, y compris la mention de
 * traduction : une phrase de Weber lue en français est passée par quelqu'un, et taire ce
 * quelqu'un reviendrait à présenter une interprétation comme une parole d'auteur.
 */
export function ConceptQuotation({ quotation }: { quotation: Quotation }) {
  return (
    <figure className="border-l border-line pl-4">
      <blockquote className="font-serif-display text-[17px] leading-relaxed text-ink">
        «&#8239;{quotation.text}&#8239;»
      </blockquote>
      <figcaption className="mt-2 text-xs leading-relaxed text-ink-faint">
        {quotation.attributedTo}, {quotation.reference}
        {quotation.translationNote && <> · {quotation.translationNote}</>}
      </figcaption>
    </figure>
  );
}
