"use client";

import { notFound } from "next/navigation";
import { themes, authors, taxonomy } from "@/content";
import { Screen } from "@/components/motion/Screen";
import { BackLink } from "@/components/ui/BackLink";
import { ListHeading, ListRow } from "@/components/ui/ListRow";
import { SituatingText } from "@/components/ui/SituatingText";
import { espacesFrancaises } from "@/lib/typographie";

export function ThemeDetail({ slug }: { slug: string }) {
  const theme = themes.find((t) => t.slug === slug);

  if (!theme) return notFound();

  const domain = taxonomy.domain(theme.domain);
  const themeConcepts = taxonomy.conceptsIn({ kind: "theme", id: theme.id });
  const contributingAuthorIds = new Set(themeConcepts.flatMap((c) => c.authors));
  const contributingAuthors = authors.filter((a) => contributingAuthorIds.has(a.id));

  return (
    <Screen>
      <div className="mx-auto max-w-md px-6 pt-10 pb-12">
        {/* Le retour ramène sur l'onglet d'où l'on vient, pas sur le premier. */}
        <BackLink />

        {/* Le domaine situe le thème, comme le thème situe le concept sur la carte. */}
        {domain && <p className="mt-6 eyebrow">{domain.label}</p>}
        <h1 className="mt-2 font-serif-display text-2xl font-semibold leading-tight text-ink">
          {theme.title}
        </h1>

        {/* Même ordre que sur une page de domaine : la liste passe avant la dissertation. */}
        <SituatingText lead={theme.tagline} full={theme.description} label="la description" />

        {contributingAuthors.length > 0 && (
          <p className="mt-4 text-sm text-ink-faint">
            {contributingAuthors.map((a) => a.name).join(", ")}
          </p>
        )}

        {/*
         * Les concepts du thème, annoncés comme tels.
         *
         * C'est le chemin que le lecteur emprunte : il choisit un thème pour arriver à des
         * concepts, et de là à leur carte. Sans en-tête, la liste se lisait comme une suite
         * de titres flottant sous la description — et quand le corpus était vide, elle ne se
         * lisait pas du tout : l'écran s'arrêtait après le paragraphe, sans qu'on puisse
         * distinguer « ce thème n'a pas encore de concept » de « ce thème n'en a pas ».
         */}
        <section style={{ marginTop: "var(--gap-section)" }}>
          <ListHeading count={themeConcepts.length}>Concepts</ListHeading>

          {themeConcepts.length === 0 ? (
            <p className="mt-4 text-sm leading-relaxed text-ink-faint">
              Aucun concept de ce thème n&apos;a encore terminé son instruction documentaire.
            </p>
          ) : (
            <ul className="stagger rows anchored">
              {themeConcepts.map((concept) => (
                /* L'accroche sous le titre : elle dit ce qu'on trouvera derrière, ce qu'un
                   titre de concept seul ne fait jamais. */
                <ListRow
                  key={concept.id}
                  href={`/explore/concept/?c=${concept.slug}`}
                  title={concept.title}
                  tagline={espacesFrancaises(concept.hookQuestion)}
                />
              ))}
            </ul>
          )}
        </section>
      </div>
    </Screen>
  );
}
