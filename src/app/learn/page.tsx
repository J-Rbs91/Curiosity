"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { concepts, authors, themes, caseStudies } from "@/content";
import { getProgressService } from "@/services/progress";
import { selectNextSession } from "@/services/learning-engine";
import { resolveSessionPlan, type ResolvedSession } from "@/domain/sessions/resolve";
import { readPendingSession, clearPendingSession } from "@/lib/pending-session";
import { SessionRunner } from "@/components/learning/SessionRunner";
import { Screen } from "@/components/motion/Screen";
import { SCREEN_MOTION } from "@/components/motion/screen-motion";
import type { MasteryScore } from "@/types";

const CONTENT = { concepts, authors, themes, caseStudies };

export default function LearnPage() {
  const router = useRouter();
  const [resolved, setResolved] = useState<ResolvedSession | null>(null);
  const knownAtStart = useRef<Set<string>>(new Set());

  useEffect(() => {
    const service = getProgressService();
    const state = service.getState();
    const plan = readPendingSession() ?? selectNextSession(CONTENT, state);
    const next = resolveSessionPlan(plan, CONTENT);

    if (!next) {
      router.replace("/");
      return;
    }

    knownAtStart.current = new Set(
      Object.values(state.concepts)
        .filter((p) => p.masteryScore >= 1)
        .map((p) => p.conceptId)
    );
    // Résolution de la session (localStorage + moteur pédagogique) : ne peut se faire
    // qu'après le montage côté client, une seule fois par session.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setResolved(next);
  }, [router]);

  if (!resolved) {
    return <div className="min-h-svh" aria-hidden />;
  }

  const service = getProgressService();

  return (
    <Screen>
      <SessionRunner
        resolved={resolved}
        onEnterExplanation={() => {
          if (!knownAtStart.current.has(resolved.primary.id)) {
            service.recordDiscovery(resolved.primary.id);
          }
        }}
        onEnterConnection={() => {
          if (!resolved.secondary) return;
          if (!knownAtStart.current.has(resolved.secondary.id)) {
            service.recordDiscovery(resolved.secondary.id);
          } else {
            service.recordEncounter(resolved.secondary.id);
          }
        }}
        onAnswer={(wasCorrect) => {
          const updated = service.recordAnswer(resolved.primary.id, wasCorrect);
          service.recordSession({
            id: resolved.plan.id,
            type: resolved.plan.type,
            conceptIds: [
              resolved.primary.id,
              ...(resolved.secondary ? [resolved.secondary.id] : []),
            ],
            startedAt: new Date().toISOString(),
            completedAt: new Date().toISOString(),
            quizCorrect: wasCorrect ? 1 : 0,
            quizTotal: 1,
          });
          return {
            masteryScore: updated.masteryScore as MasteryScore,
            nextReviewAt: updated.nextReviewAt,
          };
        }}
        onFinish={() => {
          clearPendingSession();
          router.push("/", { transitionTypes: SCREEN_MOTION.leaveSession });
        }}
      />
    </Screen>
  );
}
