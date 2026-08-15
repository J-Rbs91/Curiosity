"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { authors, themes, concepts } from "@/content";
import { getProgressService } from "@/services/progress";
import { computeAllAuthorsProgress } from "@/domain/authors";
import { computeAllThemesProgress } from "@/domain/themes";
import { ProgressBar } from "@/components/ui/ProgressBar";
import type { UserConceptProgress } from "@/types";

type Tab = "authors" | "themes";

export default function ExplorePage() {
  const [tab, setTab] = useState<Tab>("authors");
  const [mounted, setMounted] = useState(false);
  const [progressByConcept, setProgressByConcept] = useState<Map<string, UserConceptProgress>>(
    new Map()
  );

  useEffect(() => {
    const state = getProgressService().getState();
    // Lecture localStorage : impossible pendant le rendu serveur, doit se faire après le montage.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProgressByConcept(new Map(Object.entries(state.concepts)));
    setMounted(true);
  }, []);

  const authorsProgress = mounted
    ? computeAllAuthorsProgress(authors, concepts, progressByConcept)
    : [];
  const themesProgress = mounted
    ? computeAllThemesProgress(themes, concepts, authors, progressByConcept)
    : [];

  return (
    <div className="mx-auto max-w-md px-5 pt-8">
      <h1 className="font-serif-display text-2xl font-semibold text-ink">Explorer</h1>
      <p className="mt-2 text-[15px] text-ink-soft">
        La carte des auteurs et des grandes problématiques de la discipline.
      </p>

      <div className="mt-6 flex gap-1 rounded-full bg-paper-raised p-1">
        {(["authors", "themes"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`min-h-9 flex-1 rounded-full text-sm font-medium transition-colors ${
              tab === t ? "bg-accent text-accent-contrast" : "text-ink-soft"
            }`}
          >
            {t === "authors" ? "Auteurs" : "Thèmes"}
          </button>
        ))}
      </div>

      <ul className="mt-6 space-y-3 pb-10">
        {tab === "authors" &&
          authorsProgress.map(({ author, encountered, totalConcepts, ratio }) => (
            <li key={author.id}>
              <Link
                href={`/explore/authors/${author.slug}`}
                className="block rounded-2xl border border-line p-4 hover:border-accent"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-serif-display text-lg font-semibold text-ink">
                    {author.name}
                  </span>
                  <span className="text-xs text-ink-soft">
                    {encountered}/{totalConcepts}
                  </span>
                </div>
                <p className="mt-1 text-sm text-ink-soft">{author.tagline}</p>
                <ProgressBar ratio={ratio} label={`Progression ${author.name}`} className="mt-3" />
              </Link>
            </li>
          ))}

        {tab === "themes" &&
          themesProgress.map(({ theme, encountered, totalConcepts, ratio }) => (
            <li key={theme.id}>
              <Link
                href={`/explore/themes/${theme.slug}`}
                className="block rounded-2xl border border-line p-4 hover:border-accent"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-serif-display text-lg font-semibold text-ink">
                    {theme.title}
                  </span>
                  <span className="text-xs text-ink-soft">
                    {encountered}/{totalConcepts}
                  </span>
                </div>
                <p className="mt-1 text-sm text-ink-soft">{theme.description}</p>
                <ProgressBar ratio={ratio} label={`Progression ${theme.title}`} className="mt-3" />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
