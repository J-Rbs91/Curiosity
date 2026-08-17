"use client";

import { notFound } from "next/navigation";
import { TreeLink } from "@/components/navigation/TreeLink";
import { authors, concepts } from "@/content";
import { Screen } from "@/components/motion/Screen";
import { BackLink } from "@/components/ui/BackLink";

export function AuthorDetail({ slug }: { slug: string }) {
  const author = authors.find((a) => a.slug === slug);

  if (!author) return notFound();

  const authorConcepts = concepts.filter((c) => c.authors.includes(author.id));

  return (
    <Screen>
      <div className="mx-auto max-w-md px-6 pt-10 pb-12">
        <BackLink />

        <h1 className="mt-6 font-serif-display text-[30px] font-semibold leading-tight text-ink">
          {author.name}
        </h1>
        {author.years && <p className="mt-1 text-sm text-ink-faint">{author.years}</p>}
        <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">{author.bio}</p>

        <ul className="stagger mt-10 space-y-1">
          {authorConcepts.map((concept) => (
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
