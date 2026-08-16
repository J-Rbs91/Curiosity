"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { concepts, authors, themes, caseStudies } from "@/content";
import { getProgressService } from "@/services/progress";
import { selectNextSession } from "@/services/learning-engine";
import type { Concept, SessionPlan } from "@/types";
import { storePendingSession } from "@/lib/pending-session";
import { Screen } from "@/components/motion/Screen";
import { SCREEN_MOTION } from "@/components/motion/screen-motion";
import { Button } from "@/components/ui/Button";
import { ShareToAI } from "@/components/ui/ShareToAI";

const CONTENT = { concepts, authors, themes, caseStudies };

export default function TodayPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [firstLaunch, setFirstLaunch] = useState(false);
  const [plan, setPlan] = useState<SessionPlan | null>(null);

  useEffect(() => {
    const state = getProgressService().getState();
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

  /*
   * Corpus vide : rien à proposer, et surtout rien à inventer. C'est l'état normal tant
   * que l'instruction documentaire n'a pas rendu sa première fiche, et il vaut mieux
   * l'afficher tel quel qu'ouvrir l'application sur un contenu invérifié.
   */
  if (!plan) {
    return (
      <Screen>
        <div className="stagger mx-auto flex min-h-svh max-w-md flex-col justify-center gap-8 px-6">
          <h1 className="font-serif-display text-[30px] font-semibold leading-tight text-ink">
            Le corpus est en cours de constitution.
          </h1>
          <p className="text-[17px] leading-relaxed text-ink-soft">
            Aucun concept n&apos;a encore terminé son instruction documentaire. Rien ne
            s&apos;affichera ici tant qu&apos;une fiche n&apos;aura pas été établie sur ses
            sources.
          </p>
        </div>
      </Screen>
    );
  }

  if (firstLaunch) {
    return (
      <Screen>
        <div className="stagger mx-auto flex min-h-svh max-w-md flex-col justify-center gap-10 px-6">
          <h1 className="font-serif-display text-[32px] font-semibold leading-tight text-ink">
            Comprendre comment fonctionnent réellement les organisations.
          </h1>
          <p className="text-[17px] leading-relaxed text-ink-soft">
            Un concept à la fois, à chaque ouverture.
          </p>
          <Button onClick={start} className="w-fit">
            Commencer
          </Button>
        </div>
      </Screen>
    );
  }

  const concept = plan
    ? concepts.find((c) => c.id === plan.primaryConceptId)
    : undefined;

  return (
    <Screen>
      {/*
       * L'écran du jour ne porte que quatre choses : le thème, le concept, son
       * résumé et son auteur. Tout le reste — durée annoncée, type de session,
       * niveau de maîtrise — a été retiré : c'était de l'information sur
       * l'application, pas sur ce qu'il y a à comprendre.
       */}
      <div className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16">
        {concept && <ConceptCard concept={concept} onStart={start} />}
      </div>
    </Screen>
  );
}

function ConceptCard({ concept, onStart }: { concept: Concept; onStart: () => void }) {
  const conceptAuthors = authors.filter((a) => concept.authors.includes(a.id));
  const conceptThemes = themes.filter((t) => concept.themes.includes(t.id));

  return (
    <div className="stagger flex flex-col gap-8">
      <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">
        {conceptThemes.map((t) => t.title).join(" · ")}
      </p>

      <h1 className="font-serif-display text-[34px] font-semibold leading-[1.15] text-ink">
        {concept.title}
      </h1>

      <p className="text-[18px] leading-relaxed text-ink-soft">{concept.shortExplanation}</p>

      <p className="text-[15px] text-ink-faint">
        {conceptAuthors.map((a) => a.name).join(", ")}
      </p>

      <div className="flex items-center gap-2">
        <Button onClick={onStart}>Approfondir</Button>
        <ShareToAI concept={concept} authors={conceptAuthors} themes={conceptThemes} />
      </div>
    </div>
  );
}
