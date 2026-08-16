"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Settings } from "lucide-react";
import { authors, themes, concepts } from "@/content";
import { getProgressService } from "@/services/progress";
import { computeAllAuthorsProgress } from "@/domain/authors";
import { computeAllThemesProgress } from "@/domain/themes";
import { needsReview, isUnderstood, masteryLabel } from "@/domain/progress/mastery";
import { Screen } from "@/components/motion/Screen";
import { SCREEN_MOTION } from "@/components/motion/screen-motion";
import { ProgressBar } from "@/components/ui/ProgressBar";
import type { UserConceptProgress, MasteryScore } from "@/types";

/** Au-delà, la liste cesse d'être une invitation et redevient un inventaire. */
const REVIEW_SHORTLIST = 5;

export default function ProgressPage() {
  const [progressByConcept, setProgressByConcept] = useState<Map<string, UserConceptProgress>>(
    new Map()
  );

  useEffect(() => {
    const state = getProgressService().getState();
    // Lecture localStorage : impossible pendant le rendu serveur, doit se faire après le montage.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProgressByConcept(new Map(Object.entries(state.concepts)));
  }, []);

  const allProgress = Array.from(progressByConcept.values());
  const encountered = allProgress.filter((p) => p.masteryScore >= 1).length;
  const understood = allProgress.filter((p) => isUnderstood(p.masteryScore as MasteryScore)).length;

  /*
   * « À revoir » était un chiffre qui ne menait nulle part. Un indicateur qui
   * ne déclenche aucune action est décoratif : il est maintenant suivi des
   * concepts qu'il compte, chacun ouvrant sa fiche, d'où la révision se lance.
   */
  const toReview = allProgress
    .filter((p) => needsReview(p.masteryScore as MasteryScore))
    .sort((a, b) => (a.nextReviewAt ?? "").localeCompare(b.nextReviewAt ?? ""))
    .map((p) => ({ progress: p, concept: concepts.find((c) => c.id === p.conceptId) }))
    .filter((entry): entry is { progress: UserConceptProgress; concept: (typeof concepts)[number] } =>
      Boolean(entry.concept)
    );

  const authorsProgress = computeAllAuthorsProgress(authors, concepts, progressByConcept);
  const themesProgress = computeAllThemesProgress(themes, concepts, authors, progressByConcept);

  return (
    <Screen>
      <div className="mx-auto max-w-md px-5 pt-8 pb-10">
        <div className="flex items-center justify-between">
          <h1 className="font-serif-display text-2xl font-semibold text-ink">Votre exploration</h1>
          <Link
            href="/settings"
            transitionTypes={SCREEN_MOTION.deeper}
            aria-label="Réglages"
            className="press -mr-2 flex h-9 w-9 items-center justify-center rounded-full text-ink-soft hover:text-ink"
          >
            <Settings size={20} />
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <Stat value={encountered} label="rencontrés" />
          <Stat value={understood} label="compris" />
          <Stat value={toReview.length} label="à revoir" />
        </div>

        {toReview.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xs font-medium uppercase tracking-wide text-accent">À revoir</h2>
            <ul className="stagger mt-3 space-y-2">
              {toReview.slice(0, REVIEW_SHORTLIST).map(({ progress, concept }) => (
                <li key={concept.id}>
                  <Link
                    href={`/explore/concepts/${concept.slug}`}
                    transitionTypes={SCREEN_MOTION.deeper}
                    className="press-soft flex items-center justify-between gap-3 rounded-2xl border border-line px-4 py-3 hover:border-accent"
                  >
                    <span className="text-[15px] text-ink">{concept.title}</span>
                    <span className="shrink-0 text-xs text-ink-soft">
                      {masteryLabel(progress.masteryScore)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            {toReview.length > REVIEW_SHORTLIST && (
              <p className="mt-3 text-xs text-ink-soft">
                {toReview.length - REVIEW_SHORTLIST} autres concepts attendent une révision. Ils
                reviendront d&apos;eux-mêmes dans les propositions du jour.
              </p>
            )}
          </section>
        )}

        {/*
         * Une seule mesure par barre, la même sur les deux écrans : la barre
         * portait jusqu'ici la part de concepts compris pendant que le chiffre
         * à côté comptait les concepts rencontrés, ce qui donnait une barre
         * vide en face d'un « 1/6 ». Le décompte des rencontres reste lisible
         * en haut de cet écran et concept par concept sur la page d'un auteur.
         */}
        <h2 className="mt-10 text-xs font-medium uppercase tracking-wide text-accent">Auteurs</h2>
        <ul className="mt-3 space-y-4">
          {authorsProgress.map(({ author, ratio, understood: u, totalConcepts }) => (
            <li key={author.id}>
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="text-ink">{author.name}</span>
                <span className="shrink-0 text-ink-soft">
                  {u}/{totalConcepts} compris
                </span>
              </div>
              <ProgressBar
                ratio={ratio}
                label={`Concepts compris chez ${author.name}`}
                className="mt-1.5"
              />
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-xs font-medium uppercase tracking-wide text-accent">Thèmes</h2>
        <ul className="mt-3 space-y-4">
          {themesProgress.map(({ theme, ratio, understood: u, totalConcepts }) => (
            <li key={theme.id}>
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="text-ink">{theme.title}</span>
                <span className="shrink-0 text-ink-soft">
                  {u}/{totalConcepts} compris
                </span>
              </div>
              <ProgressBar
                ratio={ratio}
                label={`Concepts compris dans ${theme.title}`}
                className="mt-1.5"
              />
            </li>
          ))}
        </ul>
      </div>
    </Screen>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="rounded-2xl border border-line p-4 text-center">
      <p className="font-serif-display text-2xl font-semibold text-ink tabular-nums">{value}</p>
      <p className="mt-0.5 text-xs text-ink-soft">{label}</p>
    </div>
  );
}
