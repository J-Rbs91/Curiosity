"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { concepts, authors, themes } from "@/content";
import { indexConcepts, getRelatedConcepts, getPrerequisiteConcepts } from "@/domain/concepts/graph";
import { getProgressService } from "@/services/progress";
import { masteryLabel } from "@/domain/progress/mastery";
import { ConceptMetaTags } from "@/components/concept/ConceptMetaTags";
import { Screen } from "@/components/motion/Screen";
import { SCREEN_MOTION } from "@/components/motion/screen-motion";
import { Button } from "@/components/ui/Button";
import { storePendingSession } from "@/lib/pending-session";
import type { MasteryScore, UserConceptProgress, SessionPlan } from "@/types";

const conceptIndex = indexConcepts(concepts);

export default function ConceptDetailPage() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();
  const concept = concepts.find((c) => c.slug === params.slug);
  const [progress, setProgress] = useState<UserConceptProgress | undefined>(undefined);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Lecture localStorage : impossible pendant le rendu serveur, doit se faire après le montage.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (concept) setProgress(getProgressService().getState().concepts[concept.id]);
    setMounted(true);
  }, [concept]);

  if (!concept) return notFound();

  const conceptAuthors = authors.filter((a) => concept.authors.includes(a.id));
  const conceptThemes = themes.filter((t) => concept.themes.includes(t.id));
  const related = getRelatedConcepts(conceptIndex, concept);
  const prerequisites = getPrerequisiteConcepts(conceptIndex, concept);
  const alreadyKnown = (progress?.masteryScore ?? 0) >= 1;

  function studyNow() {
    const plan: SessionPlan = {
      id: `manual-${concept!.id}-${Date.now()}`,
      type: alreadyKnown ? "review" : "discovery",
      primaryConceptId: concept!.id,
      estimatedMinutes: 5,
      headline: concept!.hookQuestion,
    };
    storePendingSession(plan);
    router.push("/learn", { transitionTypes: SCREEN_MOTION.enterSession });
  }

  return (
    <Screen>
      <div className="mx-auto max-w-md px-5 pt-8 pb-10">
        {/*
         * Une destination nommée plutôt qu'un retour d'historique : cette fiche
         * s'atteint depuis un auteur, un thème, la liste des révisions ou la
         * fin d'une session, et dans ce dernier cas un retour arrière renvoyait
         * dans la session qu'on venait de terminer. L'auteur et le thème
         * d'origine restent à un geste, juste en dessous.
         */}
        <Link
          href="/explore"
          transitionTypes={SCREEN_MOTION.back}
          className="press -ml-1 inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-accent"
        >
          <ArrowLeft size={16} />
          Explorer
        </Link>

        <p className="mt-4 text-xs font-medium uppercase tracking-wide text-accent">
          {mounted ? masteryLabel((progress?.masteryScore ?? 0) as MasteryScore) : ""}
        </p>
        <h1 className="mt-1 font-serif-display text-2xl font-semibold text-ink">{concept.title}</h1>
        <p className="mt-3 text-[15px] italic leading-relaxed text-ink-soft">
          {concept.hookQuestion}
        </p>

        <div className="mt-4">
          <ConceptMetaTags authors={conceptAuthors} themes={conceptThemes} />
        </div>

        <p className="mt-6 text-[17px] leading-relaxed text-ink">{concept.shortExplanation}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
          {concept.detailedExplanation}
        </p>

        <div className="mt-6 rounded-2xl border border-line bg-paper-raised p-4">
          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-accent">
            Dans une organisation
          </p>
          <p className="text-[15px] leading-relaxed text-ink-soft">{concept.concreteExample}</p>
        </div>

        {prerequisites.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xs font-medium uppercase tracking-wide text-accent">Prérequis</h2>
            <ConceptLinkList concepts={prerequisites} />
          </div>
        )}

        {related.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xs font-medium uppercase tracking-wide text-accent">
              Concepts reliés
            </h2>
            <ConceptLinkList concepts={related} />
          </div>
        )}

        <Button onClick={studyNow} className="mt-8 w-full">
          {alreadyKnown ? "Réviser ce concept" : "Découvrir ce concept"}
        </Button>
      </div>
    </Screen>
  );
}

function ConceptLinkList({ concepts: items }: { concepts: typeof concepts }) {
  return (
    <ul className="mt-2 flex flex-wrap gap-2">
      {items.map((c) => (
        <li key={c.id}>
          <Link
            href={`/explore/concepts/${c.slug}`}
            transitionTypes={SCREEN_MOTION.deeper}
            className="press inline-flex rounded-full border border-line px-3 py-1.5 text-sm text-ink hover:border-accent hover:text-accent"
          >
            {c.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
