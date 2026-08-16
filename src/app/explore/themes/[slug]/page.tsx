"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { themes, concepts, authors } from "@/content";
import { conceptsByTheme } from "@/domain/concepts/graph";
import { getProgressService } from "@/services/progress";
import { masteryLabel } from "@/domain/progress/mastery";
import { Screen } from "@/components/motion/Screen";
import { SCREEN_MOTION } from "@/components/motion/screen-motion";
import type { MasteryScore, UserConceptProgress } from "@/types";

export default function ThemeDetailPage() {
  const params = useParams<{ slug: string }>();
  const theme = themes.find((t) => t.slug === params.slug);
  const [progress, setProgress] = useState<Record<string, UserConceptProgress>>({});

  useEffect(() => {
    // Lecture localStorage : impossible pendant le rendu serveur, doit se faire après le montage.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProgress(getProgressService().getState().concepts);
  }, []);

  if (!theme) return notFound();

  const themeConcepts = conceptsByTheme(concepts, theme.id);
  const contributingAuthorIds = new Set(themeConcepts.flatMap((c) => c.authors));
  const contributingAuthors = authors.filter((a) => contributingAuthorIds.has(a.id));

  return (
    <Screen>
      <div className="mx-auto max-w-md px-5 pt-8 pb-10">
        {/* Le retour ramène sur l'onglet d'où l'on vient, pas sur le premier. */}
        <Link
          href="/explore?vue=themes"
          transitionTypes={SCREEN_MOTION.back}
          className="press -ml-1 inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-accent"
        >
          <ArrowLeft size={16} />
          Explorer
        </Link>
        <h1 className="mt-3 font-serif-display text-2xl font-semibold text-ink">{theme.title}</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-ink">{theme.description}</p>

        {contributingAuthors.length > 0 && (
          <p className="mt-4 text-sm text-ink-soft">
            Éclairé notamment par {contributingAuthors.map((a) => a.name).join(", ")}.
          </p>
        )}

        <h2 className="mt-8 text-xs font-medium uppercase tracking-wide text-ink-faint">
          Concepts ({themeConcepts.length})
        </h2>
        <ul className="stagger mt-3 space-y-2">
          {themeConcepts.map((concept) => {
            const p = progress[concept.id];
            return (
              <li key={concept.id}>
                <Link
                  href={`/explore/concepts/${concept.slug}`}
                  transitionTypes={SCREEN_MOTION.deeper}
                  className="press-soft flex items-center justify-between gap-3 rounded-2xl bg-paper-raised px-4 py-3 hover:bg-paper-contact"
                >
                  <span className="text-[15px] text-ink">{concept.title}</span>
                  <span className="shrink-0 text-xs text-ink-soft">
                    {masteryLabel((p?.masteryScore ?? 0) as MasteryScore)}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Screen>
  );
}
