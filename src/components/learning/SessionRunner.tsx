"use client";

import { startTransition, useMemo, useRef, useState, ViewTransition } from "react";
import Link from "next/link";
import { ArrowLeft, X } from "lucide-react";
import type { MasteryScore } from "@/types";
import type { ResolvedSession } from "@/domain/sessions/resolve";
import { SESSION_TYPE_META } from "@/domain/sessions";
import { SCREEN_MOTION } from "@/components/motion/screen-motion";
import { Button } from "@/components/ui/Button";
import { ShareToAI } from "@/components/ui/ShareToAI";
import { ConceptMetaTags } from "@/components/concept/ConceptMetaTags";
import { ConceptSummaryCard } from "@/components/concept/ConceptSummaryCard";
import { QuizQuestionView } from "@/components/quiz/QuizQuestionView";
import { StepDots } from "@/components/learning/StepDots";

type Phase = "question" | "explanation" | "context" | "connection" | "quiz" | "result";

interface AnswerResult {
  masteryScore: MasteryScore;
  nextReviewAt?: string;
}

interface SessionRunnerProps {
  resolved: ResolvedSession;
  onEnterExplanation: () => void;
  onEnterConnection: () => void;
  onAnswer: (wasCorrect: boolean) => AnswerResult;
  onFinish: () => void;
}

const CONNECTION_EYEBROW: Record<string, string> = {
  connection: "Vous connaissez déjà",
  comparison: "À comparer",
  deepening: "Pour aller plus loin",
};

const PHASE_MOTION = {
  next: "phase-next",
  prev: "phase-prev",
} as const;

export function SessionRunner({
  resolved,
  onEnterExplanation,
  onEnterConnection,
  onAnswer,
  onFinish,
}: SessionRunnerProps) {
  const { plan, primary, secondary, caseStudy, primaryAuthors, primaryThemes } = resolved;
  const meta = SESSION_TYPE_META[plan.type];
  const isCaseStudy = plan.type === "case-study" && caseStudy;

  const phases = useMemo<Phase[]>(() => {
    const list: Phase[] = ["question", "explanation", "context"];
    if (secondary && !isCaseStudy) list.push("connection");
    list.push("quiz", "result");
    return list;
  }, [secondary, isCaseStudy]);

  const [phaseIndex, setPhaseIndex] = useState(0);
  const [direction, setDirection] = useState<keyof typeof PHASE_MOTION>("next");
  const [showDetailed, setShowDetailed] = useState(false);
  const phase = phases[phaseIndex];

  /*
   * Une phase peut être revue en revenant en arrière ; son effet
   * d'enregistrement, lui, ne se rejoue pas. Sans cette trace, un aller-retour
   * compterait deux rencontres et avancerait la date de révision d'un concept
   * que l'utilisateur n'a vu qu'une fois.
   */
  const recorded = useRef<Set<Phase>>(new Set());

  const quizQuestion = useMemo(
    () => primary.quiz.find((q) => q.type === "mcq") ?? primary.quiz[0],
    [primary]
  );

  /* Le résultat est terminal : y revenir rejouerait une réponse déjà comptée. */
  const canGoBack = phaseIndex > 0 && phase !== "result";

  function recordOnce(current: Phase, effect: () => void) {
    if (recorded.current.has(current)) return;
    recorded.current.add(current);
    effect();
  }

  function goTo(nextIndex: number, nextDirection: keyof typeof PHASE_MOTION) {
    /*
     * `startTransition` est ce qui fait de ce changement d'état une transition :
     * sans lui, React remplace le contenu sans laisser au navigateur l'occasion
     * d'animer la sortie de l'ancien et l'entrée du nouveau.
     */
    startTransition(() => {
      setDirection(nextDirection);
      setPhaseIndex(Math.min(Math.max(nextIndex, 0), phases.length - 1));
    });
  }

  function goNext() {
    if (phase === "question") recordOnce(phase, onEnterExplanation);
    if (phase === "connection") recordOnce(phase, onEnterConnection);
    goTo(phaseIndex + 1, "next");
  }

  function goBack() {
    if (!canGoBack) return;
    goTo(phaseIndex - 1, "prev");
  }

  const motionClass = PHASE_MOTION[direction];

  return (
    <div className="mx-auto flex min-h-svh max-w-md flex-col px-6 pt-6">
      <div className="flex items-center gap-3 pb-10">
        <button
          type="button"
          onClick={goBack}
          disabled={!canGoBack}
          aria-label="Revenir à l'étape précédente"
          className="press -ml-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-ink-faint hover:text-ink disabled:pointer-events-none disabled:opacity-0"
        >
          <ArrowLeft size={18} />
        </button>
        <div className="flex-1">
          <StepDots total={phases.length} current={phaseIndex} />
        </div>
        <Link
          href="/"
          transitionTypes={SCREEN_MOTION.leaveSession}
          aria-label="Quitter la session"
          className="press -mr-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-ink-faint hover:text-ink"
        >
          <X size={18} />
        </Link>
      </div>

      <div className="flex-1 pb-12">
        <ViewTransition key={phase} enter={motionClass} exit={motionClass} default="none">
          <div>
            {phase === "question" && (
              <div className="flex min-h-[58svh] flex-col justify-center gap-10">
                <h1 className="font-serif-display text-[30px] font-semibold leading-[1.2] text-ink">
                  {plan.headline}
                </h1>
                <Button onClick={goNext} className="w-fit">
                  {meta.verb}
                </Button>
              </div>
            )}

            {phase === "explanation" && (
              <div className="space-y-7">
                <h2 className="font-serif-display text-[26px] font-semibold leading-tight text-ink">
                  {primary.title}
                </h2>
                <p className="text-[18px] leading-relaxed text-ink">{primary.shortExplanation}</p>
                {!showDetailed ? (
                  <button
                    type="button"
                    onClick={() => setShowDetailed(true)}
                    className="press text-sm text-ink-faint underline underline-offset-4 hover:text-ink"
                  >
                    Le mécanisme en détail
                  </button>
                ) : (
                  <p className="enter-rise text-[15px] leading-relaxed text-ink-soft">
                    {primary.detailedExplanation}
                  </p>
                )}
                <ConceptMetaTags authors={primaryAuthors} themes={primaryThemes} />
                <Button onClick={goNext} className="w-full">
                  Continuer
                </Button>
              </div>
            )}

            {phase === "context" && (
              <div className="space-y-7">
                {isCaseStudy && caseStudy ? (
                  <>
                    <h2 className="font-serif-display text-[22px] font-semibold leading-tight text-ink">
                      {caseStudy.title}
                    </h2>
                    <p className="text-[17px] leading-relaxed text-ink">{caseStudy.situation}</p>
                    <div className="stagger space-y-5">
                      {caseStudy.readings.map((reading) => {
                        const author = resolved.authors.find((a) => a.id === reading.authorId);
                        return (
                          <div key={reading.authorId}>
                            <p className="mb-1.5 text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">
                              {author?.name ?? reading.authorId}
                            </p>
                            <p className="text-[15px] leading-relaxed text-ink-soft">
                              {reading.analysis}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-[18px] leading-relaxed text-ink">{primary.concreteExample}</p>
                    {primary.analysisQuestions[0] && (
                      <p className="text-[15px] italic leading-relaxed text-ink-faint">
                        {primary.analysisQuestions[0]}
                      </p>
                    )}
                  </>
                )}
                <Button onClick={goNext} className="w-full">
                  Continuer
                </Button>
              </div>
            )}

            {phase === "connection" && secondary && (
              <div className="space-y-7">
                <p className="text-[17px] leading-relaxed text-ink">
                  {plan.type === "comparison"
                    ? `${primary.title} et ${secondary.title} touchent un problème commun, mais pas de la même manière.`
                    : plan.type === "deepening"
                      ? `Ce concept prolonge directement ${primary.title.toLowerCase()}.`
                      : `Vous avez déjà rencontré un concept relié à ${primary.title.toLowerCase()}.`}
                </p>
                <ConceptSummaryCard
                  concept={secondary}
                  authors={resolved.authors.filter((a) => secondary.authors.includes(a.id))}
                  eyebrow={CONNECTION_EYEBROW[plan.type] ?? "Concept lié"}
                />
                <Button onClick={goNext} className="w-full">
                  Continuer
                </Button>
              </div>
            )}

            {phase === "quiz" && quizQuestion && (
              <QuizQuestionView
                question={quizQuestion}
                onAnswered={(wasCorrect) => {
                  onAnswer(wasCorrect);
                  goTo(phaseIndex + 1, "next");
                }}
              />
            )}

            {phase === "result" && (
              /*
               * Rien à annoncer ici : la correction a déjà été lue à l'écran
               * précédent, et l'état d'avancement du concept ne s'affiche nulle
               * part dans l'application. Ne reste que la sortie, et deux façons
               * de prolonger.
               */
              <div className="flex min-h-[50svh] flex-col justify-center gap-10">
                <h2 className="enter-mark font-serif-display text-[26px] font-semibold leading-tight text-ink">
                  {primary.title}
                </h2>
                <div className="flex flex-wrap items-center gap-2">
                  <Button onClick={onFinish}>Terminer</Button>
                  <Link
                    href={`/explore/concepts/${primary.slug}`}
                    transitionTypes={SCREEN_MOTION.leaveSession}
                    className="press flex min-h-11 items-center rounded-full px-4 text-[15px] text-ink-faint hover:text-ink"
                  >
                    La fiche
                  </Link>
                  <ShareToAI
                    concept={primary}
                    authors={primaryAuthors}
                    themes={primaryThemes}
                  />
                </div>
              </div>
            )}
          </div>
        </ViewTransition>
      </div>
    </div>
  );
}
