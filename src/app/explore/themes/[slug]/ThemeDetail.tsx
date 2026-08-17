"use client";

import { notFound } from "next/navigation";
import { TreeLink } from "@/components/navigation/TreeLink";
import { themes, authors, taxonomy } from "@/content";
import { Screen } from "@/components/motion/Screen";
import { BackLink } from "@/components/ui/BackLink";

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
        {domain && (
          <p className="mt-6 text-[13px] font-medium uppercase tracking-[0.12em] text-ink-faint">
            {domain.label}
          </p>
        )}
        <h1 className="mt-2 font-serif-display text-[30px] font-semibold leading-tight text-ink">
          {theme.title}
        </h1>
        <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">{theme.description}</p>

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
        <section className="mt-10">
          <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">
            {themeConcepts.length > 0
              ? `Concepts · ${themeConcepts.length}`
              : "Concepts"}
          </h2>

          {themeConcepts.length === 0 ? (
            <p className="mt-4 text-[15px] leading-relaxed text-ink-faint">
              Aucun concept de ce thème n&apos;a encore terminé son instruction documentaire.
            </p>
          ) : (
            <ul className="stagger mt-3 space-y-1">
              {themeConcepts.map((concept) => (
                <li key={concept.id}>
                  <TreeLink
                    href={`/explore/concept/?c=${concept.slug}`}
                    className="press-soft block rounded-2xl py-3.5 text-[17px] text-ink hover:bg-paper-raised"
                  >
                    {concept.title}
                    {/* L'accroche sous le titre : elle dit ce qu'on trouvera derrière, ce
                        qu'un titre de concept seul ne fait jamais. */}
                    <span className="mt-1 block text-[14px] leading-snug text-ink-soft">
                      {concept.hookQuestion}
                    </span>
                  </TreeLink>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </Screen>
  );
}
