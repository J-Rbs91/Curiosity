"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Settings } from "lucide-react";
import { authors, themes, concepts } from "@/content";
import { getProgressService } from "@/services/progress";
import { computeAllAuthorsProgress } from "@/domain/authors";
import { computeAllThemesProgress } from "@/domain/themes";
import { needsReview, isUnderstood } from "@/domain/progress/mastery";
import { ProgressBar } from "@/components/ui/ProgressBar";
import type { UserConceptProgress, MasteryScore } from "@/types";

export default function ProgressPage() {
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

  const allProgress = Array.from(progressByConcept.values());
  const encountered = allProgress.filter((p) => p.masteryScore >= 1).length;
  const understood = allProgress.filter((p) => isUnderstood(p.masteryScore as MasteryScore)).length;
  const toReview = allProgress.filter((p) => needsReview(p.masteryScore as MasteryScore)).length;

  const authorsProgress = mounted
    ? computeAllAuthorsProgress(authors, concepts, progressByConcept)
    : [];
  const themesProgress = mounted
    ? computeAllThemesProgress(themes, concepts, authors, progressByConcept)
    : [];

  return (
    <div className="mx-auto max-w-md px-5 pt-8 pb-10">
      <div className="flex items-center justify-between">
        <h1 className="font-serif-display text-2xl font-semibold text-ink">Votre exploration</h1>
        <Link
          href="/settings"
          aria-label="Réglages"
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft hover:text-ink"
        >
          <Settings size={20} />
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <Stat value={encountered} label="rencontrés" />
        <Stat value={understood} label="compris" />
        <Stat value={toReview} label="à revoir" />
      </div>

      <h2 className="mt-10 text-xs font-medium uppercase tracking-wide text-accent">Auteurs</h2>
      <ul className="mt-3 space-y-4">
        {authorsProgress.map(({ author, ratio, encountered: e, totalConcepts }) => (
          <li key={author.id}>
            <div className="flex items-baseline justify-between text-sm">
              <span className="text-ink">{author.name}</span>
              <span className="text-ink-soft">
                {e}/{totalConcepts}
              </span>
            </div>
            <ProgressBar ratio={ratio} label={`Progression ${author.name}`} className="mt-1.5" />
          </li>
        ))}
      </ul>

      <h2 className="mt-10 text-xs font-medium uppercase tracking-wide text-accent">Thèmes</h2>
      <ul className="mt-3 space-y-4">
        {themesProgress.map(({ theme, ratio, encountered: e, totalConcepts }) => (
          <li key={theme.id}>
            <div className="flex items-baseline justify-between text-sm">
              <span className="text-ink">{theme.title}</span>
              <span className="text-ink-soft">
                {e}/{totalConcepts}
              </span>
            </div>
            <ProgressBar ratio={ratio} label={`Progression ${theme.title}`} className="mt-1.5" />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="rounded-2xl border border-line p-4 text-center">
      <p className="font-serif-display text-2xl font-semibold text-ink">{value}</p>
      <p className="mt-0.5 text-xs text-ink-soft">{label}</p>
    </div>
  );
}
