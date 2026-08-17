"use client";

import { notFound, useSearchParams } from "next/navigation";
import { concepts, authors, themes, taxonomy } from "@/content";
import { ConceptMetaTags } from "@/components/concept/ConceptMetaTags";
import { ConceptQuotation } from "@/components/concept/ConceptQuotation";
import { ConceptSourceList } from "@/components/concept/ConceptSources";
import { Screen } from "@/components/motion/Screen";
import { BackLink } from "@/components/ui/BackLink";
import { DeepenButton } from "@/components/ui/DeepenButton";

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
      <div className="mx-auto max-w-md px-6 pt-10 pb-12">
        {/*
         * Une destination nommée plutôt qu'un retour d'historique : cette fiche s'atteint
         * depuis un auteur ou un thème, et un retour arrière renverrait parfois hors de
         * l'application.
         */}
        <BackLink />

        <h1 className="mt-6 font-serif-display text-[30px] font-semibold leading-tight text-ink">
          {concept.title}
        </h1>

        {/*
         * Les pastilles ne couvrent que les auteurs et thèmes auxquels l'application
         * consacre une page. Le corpus peut en introduire d'autres : ceux-là s'affichent
         * par leur nom, sans lien, plutôt que de disparaître.
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
          <p className="mt-5 text-[15px] text-ink-soft">{concept.authorLabel}</p>
        )}

        {/*
         * Une fiche d'échafaudage n'est servie qu'en développement, mais tant qu'elle est
         * à l'écran elle doit dire ce qu'elle est : rien de ce qu'elle affirme n'a été
         * vérifié, et la confondre avec une fiche instruite fausserait toute relecture.
         */}
        {concept.provenance === "fixture" && (
          <p className="mt-4 text-[13px] leading-relaxed text-ink-faint">
            Fiche d&apos;échafaudage : contenu écrit sans vérification documentaire, en
            attente d&apos;instruction. Ne pas s&apos;y fier.
          </p>
        )}

        {concept.attributionNote && (
          <p className="mt-4 text-[13px] leading-relaxed text-ink-faint">
            {concept.attributionNote}
          </p>
        )}

        {concept.quotation && (
          <div className="mt-8">
            <ConceptQuotation quotation={concept.quotation} />
          </div>
        )}

        <p className="mt-8 font-serif-display text-[19px] leading-snug text-ink">
          {concept.hookQuestion}
        </p>
        <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">
          {concept.shortExplanation}
        </p>

        {concept.sources && concept.sources.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">
              Sources
            </h2>
            <div className="mt-3">
              <ConceptSourceList sources={concept.sources} />
            </div>
          </div>
        )}

        <div className="mt-12">
          <DeepenButton concept={concept} />
        </div>
      </div>
    </Screen>
  );
}
