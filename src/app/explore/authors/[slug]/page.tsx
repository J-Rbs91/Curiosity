"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { authors, concepts } from "@/content";
import { conceptsByAuthor } from "@/domain/concepts/graph";
import { getProgressService } from "@/services/progress";
import { masteryLabel } from "@/domain/progress/mastery";
import type { MasteryScore, UserConceptProgress } from "@/types";

export default function AuthorDetailPage() {
  const params = useParams<{ slug: string }>();
  const author = authors.find((a) => a.slug === params.slug);
  const [progress, setProgress] = useState<Record<string, UserConceptProgress>>({});

  useEffect(() => {
    // Lecture localStorage : impossible pendant le rendu serveur, doit se faire après le montage.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProgress(getProgressService().getState().concepts);
  }, []);

  if (!author) return notFound();

  const authorConcepts = conceptsByAuthor(concepts, author.id);

  return (
    <div className="mx-auto max-w-md px-5 pt-8 pb-10">
      <Link href="/explore" className="text-sm text-ink-soft hover:text-accent">
        ← Explorer
      </Link>
      <h1 className="mt-3 font-serif-display text-2xl font-semibold text-ink">{author.name}</h1>
      {author.years && <p className="text-sm text-ink-soft">{author.years}</p>}
      <p className="mt-3 text-[15px] leading-relaxed text-ink">{author.bio}</p>

      <h2 className="mt-8 text-xs font-medium uppercase tracking-wide text-accent">
        Concepts ({authorConcepts.length})
      </h2>
      <ul className="mt-3 space-y-2">
        {authorConcepts.map((concept) => {
          const p = progress[concept.id];
          return (
            <li key={concept.id}>
              <Link
                href={`/explore/concepts/${concept.slug}`}
                className="flex items-center justify-between rounded-2xl border border-line px-4 py-3 hover:border-accent"
              >
                <span className="text-[15px] text-ink">{concept.title}</span>
                <span className="text-xs text-ink-soft">
                  {masteryLabel((p?.masteryScore ?? 0) as MasteryScore)}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
