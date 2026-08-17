"use client";

import { notFound } from "next/navigation";
import { TreeLink } from "@/components/navigation/TreeLink";
import { themes, concepts, authors } from "@/content";
import { Screen } from "@/components/motion/Screen";
import { BackLink } from "@/components/ui/BackLink";

export function ThemeDetail({ slug }: { slug: string }) {
  const theme = themes.find((t) => t.slug === slug);

  if (!theme) return notFound();

  const themeConcepts = concepts.filter((c) => c.themes.includes(theme.id));
  const contributingAuthorIds = new Set(themeConcepts.flatMap((c) => c.authors));
  const contributingAuthors = authors.filter((a) => contributingAuthorIds.has(a.id));

  return (
    <Screen>
      <div className="mx-auto max-w-md px-6 pt-10 pb-12">
        {/* Le retour ramène sur l'onglet d'où l'on vient, pas sur le premier. */}
        <BackLink />

        <h1 className="mt-6 font-serif-display text-[30px] font-semibold leading-tight text-ink">
          {theme.title}
        </h1>
        <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">{theme.description}</p>

        {contributingAuthors.length > 0 && (
          <p className="mt-4 text-sm text-ink-faint">
            {contributingAuthors.map((a) => a.name).join(", ")}
          </p>
        )}

        <ul className="stagger mt-10 space-y-1">
          {themeConcepts.map((concept) => (
            <li key={concept.id}>
              <TreeLink
                href={`/explore/concept/?c=${concept.slug}`}
                className="press-soft block rounded-2xl py-3.5 text-[17px] text-ink hover:bg-paper-raised"
              >
                {concept.title}
              </TreeLink>
            </li>
          ))}
        </ul>
      </div>
    </Screen>
  );
}
