"use client";

import { notFound } from "next/navigation";
import { authors, concepts } from "@/content";
import { Screen } from "@/components/motion/Screen";
import { BackLink } from "@/components/ui/BackLink";
import { ListHeading, ListRow } from "@/components/ui/ListRow";
import { SituatingText } from "@/components/ui/SituatingText";
import { espacesFrancaises } from "@/lib/typographie";

export function AuthorDetail({ slug }: { slug: string }) {
  const author = authors.find((a) => a.slug === slug);

  if (!author) return notFound();

  const authorConcepts = concepts.filter((c) => c.authors.includes(author.id));

  return (
    <Screen>
      <div className="mx-auto max-w-md px-6 pt-10 pb-12 md:max-w-page">
        <BackLink />

        <h1 className="mt-6 font-serif-display text-2xl font-semibold leading-tight text-ink">
          {author.name}
        </h1>
        {author.years && <p className="mt-1 text-sm text-ink-faint">{author.years}</p>}
        <SituatingText lead={author.tagline} full={author.bio} label="la biographie" />

        {/* Même traitement que pour un thème : la liste s'annonce, et son absence se dit. */}
        <section style={{ marginTop: "var(--gap-section)" }}>
          <ListHeading count={authorConcepts.length}>Concepts</ListHeading>

          {authorConcepts.length === 0 ? (
            <p className="mt-4 max-w-read text-sm leading-relaxed text-ink-faint">
              Aucun concept de cet auteur n&apos;a encore terminé son instruction documentaire.
            </p>
          ) : (
            <ul className="stagger rows rows-wide anchored">
              {authorConcepts.map((concept) => (
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
