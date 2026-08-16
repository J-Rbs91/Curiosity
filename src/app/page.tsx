"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { concepts, authors, themes, caseStudies } from "@/content";
import { getProgressService } from "@/services/progress";
import { selectNextSession } from "@/services/learning-engine";
import { SESSION_TYPE_META } from "@/domain/sessions";
import type { SessionPlan } from "@/types";
import { storePendingSession } from "@/lib/pending-session";
import { Screen } from "@/components/motion/Screen";
import { SCREEN_MOTION } from "@/components/motion/screen-motion";
import { Button } from "@/components/ui/Button";

const CONTENT = { concepts, authors, themes, caseStudies };

export default function TodayPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [firstLaunch, setFirstLaunch] = useState(false);
  const [plan, setPlan] = useState<SessionPlan | null>(null);

  useEffect(() => {
    const service = getProgressService();
    const state = service.getState();
    // Lecture localStorage + tirage du moteur pédagogique : ne peut se faire qu'après le
    // montage côté client, une seule fois par ouverture de l'écran.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFirstLaunch(!state.settings.firstLaunchCompleted);
    setPlan(selectNextSession(CONTENT, state));
    setMounted(true);
  }, []);

  function start() {
    if (!plan) return;
    getProgressService().markFirstLaunchCompleted();
    storePendingSession(plan);
    router.push("/learn", { transitionTypes: SCREEN_MOTION.enterSession });
  }

  if (!mounted) {
    return <div className="min-h-svh" aria-hidden />;
  }

  if (firstLaunch) {
    return (
      <Screen>
        <div className="stagger mx-auto flex min-h-svh max-w-md flex-col justify-center gap-8 px-6">
          <p className="text-xs font-medium uppercase tracking-wide text-ink-faint">
            Sociologie des organisations
          </p>
          <h1 className="font-serif-display text-[30px] font-semibold leading-snug text-ink">
            Comprendre comment fonctionnent réellement les organisations.
          </h1>
          <p className="text-[17px] leading-relaxed text-ink-soft">
            Quelques minutes à chaque ouverture pour découvrir, relier et appliquer les grands
            concepts de sociologie des organisations.
          </p>
          <Button onClick={start} className="w-fit" disabled={!plan}>
            Commencer
          </Button>
        </div>
      </Screen>
    );
  }

  const primary = plan ? concepts.find((c) => c.id === plan.primaryConceptId) : undefined;
  const primaryAuthors = primary
    ? authors.filter((a) => primary.authors.includes(a.id))
    : [];
  const primaryThemes = primary ? themes.filter((t) => primary.themes.includes(t.id)) : [];

  return (
    <Screen>
      {/*
       * La proposition du jour n'existe qu'après lecture de la progression
       * locale. Elle arrive donc toujours après le premier rendu : la cascade
       * transforme cette apparition en arrivée plutôt qu'en surgissement.
       */}
      <div className="stagger mx-auto flex min-h-svh max-w-md flex-col justify-center gap-8 px-6">
        <p className="text-xs font-medium uppercase tracking-wide text-ink-faint">
          Sociologie des organisations
        </p>

        {plan && (
          <>
            <div className="space-y-3">
              <p className="text-sm font-medium text-ink-soft">Aujourd&apos;hui</p>
              <h1 className="font-serif-display text-[26px] font-semibold leading-snug text-ink">
                {plan.headline}
              </h1>
            </div>

            <p className="text-sm text-ink-soft">
              {primaryAuthors.map((a) => a.name).join(", ")}
              {primaryAuthors.length > 0 && primaryThemes.length > 0 && " · "}
              {primaryThemes.map((t) => t.title).join(", ")} · {plan.estimatedMinutes} min
            </p>

            <Button onClick={start} className="w-fit">
              {SESSION_TYPE_META[plan.type].verb}
            </Button>
          </>
        )}
      </div>
    </Screen>
  );
}
