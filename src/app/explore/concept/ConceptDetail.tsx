"use client";

import { notFound, useSearchParams } from "next/navigation";
import { concepts, authors, themes, taxonomy } from "@/content";
import { ConceptMetaTags } from "@/components/concept/ConceptMetaTags";
import { ConceptQuotation } from "@/components/concept/ConceptQuotation";
import { ConceptSourceList } from "@/components/concept/ConceptSources";
import { Screen } from "@/components/motion/Screen";
import { BackLink } from "@/components/ui/BackLink";
import { DeepenButton } from "@/components/ui/DeepenButton";
import { espacesFrancaises } from "@/lib/typographie";

/**
 * La fiche d'un concept, atteinte depuis un auteur ou un thème.
 *
 * Elle porte la même matière que la carte du jour — il n'y en a pas d'autre — mais sans la
 * contrainte d'un écran : les sources y sont dépliées, les rattachements cliquables, et
 * rien n'est masqué. C'est la différence entre rencontrer un concept et aller le chercher.
 */
export function ConceptDetail() {
  const slug = useSearchParams().get("c");
  const concept = concepts.find((c) => c.slug === slug);

  if (!concept) return notFound();

  const conceptAuthors = authors.filter((a) => concept.authors.includes(a.id));
  const conceptThemes = themes.filter((t) => concept.themes.includes(t.id));
  const conceptDomain = taxonomy.domainOfConcept(concept);

  return (
    <Screen>
      {/*
       * La colonne d'un écran de lecture, et non la mesure de lecture posée sur tout
       * l'écran. La différence tient en une phrase : la largeur de la page ne commande
       * plus celle des paragraphes.
       *
       * Le titre y gagne — 30 px bornés à 496 px se cassaient en trois lignes là où ils
       * en tiennent sur une — et les sources y gagnent davantage : elles attendaient tout
       * en bas d'un écran qui avait 300 px de vide à droite du texte. Le corps, lui, ne
       * bouge pas : il reste à 496 px, parce que c'est la ligne qui le décide et que la
       * fenêtre n'a jamais rien eu à en dire.
       */}
      <div className="column column-editorial pt-10 pb-12">
        {/*
         * Une destination nommée plutôt qu'un retour d'historique : cette fiche s'atteint
         * depuis un auteur ou un thème, et un retour arrière renverrait parfois hors de
         * l'application.
         */}
        <BackLink />

        <div className="reading-shell">
          <div className="reading-layout">
            {/*
             * L'en-tête : ce qui nomme la carte et ce qui la situe. Il prend la mesure du
             * titre, plus large que celle du corps, et c'est tout ce qui le distingue.
             *
             * `div` et non `header` : à ce niveau du document, `header` deviendrait un
             * repère de bannière, c'est-à-dire l'en-tête du site — que cette application
             * n'a pas, et qu'elle s'interdit d'avoir.
             */}
            <div className="reading-head">
              <h1 className="mt-6 font-serif-display text-2xl font-semibold leading-tight text-ink">
                {concept.title}
              </h1>

              {/*
               * Les pastilles ne couvrent que les auteurs et thèmes auxquels l'application
               * consacre une page. Le corpus peut en introduire d'autres : ceux-là s'affichent
               * par leur nom, sans lien, plutôt que de disparaître.
               *
               * Elles restent dans l'en-tête et ne descendent pas au rail : ce sont des
               * destinations, pas de l'appareil documentaire, et le rail ne doit rien
               * porter qui se clique comme une navigation.
               */}
              {(conceptAuthors.length > 0 || conceptThemes.length > 0 || conceptDomain) && (
                <div className="mt-5">
                  <ConceptMetaTags
                    authors={conceptAuthors}
                    themes={conceptThemes}
                    domain={conceptDomain}
                  />
                </div>
              )}
              {conceptAuthors.length === 0 && concept.authorLabel && (
                <p className="mt-5 text-sm text-ink-soft">{concept.authorLabel}</p>
              )}

              {/*
               * Une fiche d'échafaudage n'est servie qu'en développement, mais tant qu'elle est
               * à l'écran elle doit dire ce qu'elle est : rien de ce qu'elle affirme n'a été
               * vérifié, et la confondre avec une fiche instruite fausserait toute relecture.
               */}
              {concept.provenance === "fixture" && (
                <p className="mt-4 max-w-note text-xs leading-relaxed text-ink-faint">
                  Fiche d&apos;échafaudage : contenu écrit sans vérification documentaire, en
                  attente d&apos;instruction. Ne pas s&apos;y fier.
                </p>
              )}

              {concept.attributionNote && (
                <p className="mt-4 max-w-note text-xs leading-relaxed text-ink-faint">
                  {concept.attributionNote}
                </p>
              )}
            </div>

            {/*
             * Le corps, borné par la ligne et par elle seule. L'écart qui le sépare de
             * l'en-tête vient de `.reading-body` : porté par l'accroche, il aurait été le
             * seul de l'écran à disparaître quand la composition passe à deux colonnes.
             *
             * Même ordre que la carte du jour : la question d'abord, la parole d'auteur
             * ensuite.
             */}
            <div className="reading-body">
              <p className="font-serif-display text-lg font-semibold leading-snug text-ink">
                {espacesFrancaises(concept.hookQuestion)}
              </p>

              {concept.quotation && (
                <div className="mt-8">
                  <ConceptQuotation quotation={concept.quotation} />
                </div>
              )}
              <p className="mt-5 text-md leading-relaxed text-ink-soft">
                {concept.shortExplanation}
              </p>
            </div>

            {/*
             * Les sources — sous le texte sur un téléphone, à côté de lui dès que la place
             * existe. C'est le même bloc, le même composant et la même liste : ce qui
             * change est l'endroit où la grille le pose, jamais ce qu'il contient.
             *
             * Rien n'est dupliqué, et c'est la seule façon correcte de faire différer deux
             * mises en page : une seconde liste rendue pour le desktop aurait divergé de
             * la première au premier ajout de champ.
             */}
            {concept.sources && concept.sources.length > 0 && (
              <aside className="reading-rail" aria-labelledby="fiche-sources">
                <h2 id="fiche-sources" className="eyebrow">
                  Sources
                </h2>
                <div className="mt-3">
                  <ConceptSourceList sources={concept.sources} />
                </div>
              </aside>
            )}

            {/* L'action reste sous le corps, dans la colonne du corps : c'est ce qu'on
                fait après avoir lu, pas une commodité rangée sur le côté. */}
            <div className="reading-after">
              <DeepenButton concept={concept} />
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
}
