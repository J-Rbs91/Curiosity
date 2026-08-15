"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import type { ExplanationLevel, MasteryScore } from "@/types";
import type { ResolvedSession } from "@/domain/sessions/resolve";
import { SESSION_TYPE_META } from "@/domain/sessions";
import { masteryLabel } from "@/domain/progress/mastery";
import { Button } from "@/components/ui/Button";
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
  explanationLevel: ExplanationLevel;
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

export function SessionRunner({
  resolved,
  explanationLevel,
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
  const [showDetailed, setShowDetailed] = useState(explanationLevel === "approfondi");
  const [answerResult, setAnswerResult] = useState<AnswerResult | null>(null);
  const phase = phases[phaseIndex];

  const quizQuestion = useMemo(
    () => primary.quiz.find((q) => q.type === "mcq") ?? primary.quiz[0],
    [primary]
  );

  function goNext() {
    if (phase === "question") onEnterExplanation();
    if (phase === "connection") onEnterConnection();
    setPhaseIndex((i) => Math.min(i + 1, phases.length - 1));
  }

  return (
    <div className="mx-auto flex min-h-svh max-w-md flex-col px-5 pt-6">
      <div className="flex items-center justify-between pb-6">
        <StepDots total={phases.length} current={phaseIndex} />
        <Link
          href="/"
          aria-label="Quitter la session"
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft hover:text-ink"
        >
          <X size={20} />
        </Link>
      </div>

      <div className="flex-1 pb-10">
        {phase === "question" && (
          <div className="flex min-h-[60svh] flex-col justify-center gap-6">
            <p className="text-xs font-medium uppercase tracking-wide text-accent">
              {meta.label} · {plan.estimatedMinutes} min
            </p>
            <h1 className="font-serif-display text-[28px] font-semibold leading-snug text-ink">
              {plan.headline}
            </h1>
            <p className="text-sm text-ink-soft">Prenez un instant pour y réfléchir.</p>
            <Button onClick={goNext} className="w-fit">
              {meta.verb}
            </Button>
          </div>
        )}

        {phase === "explanation" && (
          <div className="space-y-5">
            <h2 className="font-serif-display text-2xl font-semibold text-ink">{primary.title}</h2>
            <p className="text-[17px] leading-relaxed text-ink">{primary.shortExplanation}</p>
            {!showDetailed ? (
              <button
                type="button"
                onClick={() => setShowDetailed(true)}
                className="text-sm font-medium text-accent underline underline-offset-4"
              >
                Approfondir le mécanisme
              </button>
            ) : (
              <p className="text-[15px] leading-relaxed text-ink-soft">{primary.detailedExplanation}</p>
            )}
            <ConceptMetaTags authors={primaryAuthors} themes={primaryThemes} />
            <Button onClick={goNext} className="w-full">
              Continuer
            </Button>
          </div>
        )}

        {phase === "context" && (
          <div className="space-y-5">
            {isCaseStudy && caseStudy ? (
              <>
                <h2 className="font-serif-display text-xl font-semibold text-ink">{caseStudy.title}</h2>
                <p className="text-[15px] leading-relaxed text-ink">{caseStudy.situation}</p>
                <div className="space-y-4">
                  {caseStudy.readings.map((reading) => {
                    const author = resolved.authors.find((a) => a.id === reading.authorId);
                    return (
                      <div key={reading.authorId} className="rounded-2xl border border-line p-4">
                        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-accent">
                          Lecture {author?.name ?? reading.authorId}
                        </p>
                        <p className="text-[15px] leading-relaxed text-ink-soft">{reading.analysis}</p>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <>
                <p className="text-xs font-medium uppercase tracking-wide text-accent">
                  Dans une organisation
                </p>
                <p className="text-[17px] leading-relaxed text-ink">{primary.concreteExample}</p>
                {primary.analysisQuestions[0] && (
                  <p className="rounded-2xl border border-line bg-paper-raised p-4 text-[15px] italic leading-relaxed text-ink-soft">
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
          <div className="space-y-5">
            <p className="text-[15px] leading-relaxed text-ink">
              {plan.type === "comparison"
                ? `${primary.title} et ${secondary.title} touchent un problème commun, mais pas de la même manière.`
                : plan.type === "deepening"
                  ? `Pour aller plus loin, ce concept prolonge directement ${primary.title.toLowerCase()}.`
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
          <div className="space-y-5">
            <p className="text-xs font-medium uppercase tracking-wide text-accent">Vérification</p>
            <QuizQuestionView
              question={quizQuestion}
              onAnswered={(wasCorrect) => {
                const result = onAnswer(wasCorrect);
                setAnswerResult(result);
                setPhaseIndex((i) => Math.min(i + 1, phases.length - 1));
              }}
            />
          </div>
        )}

        {phase === "result" && (
          <div className="flex min-h-[50svh] flex-col justify-center gap-6">
            <p className="text-xs font-medium uppercase tracking-wide text-accent">Résultat</p>
            <h2 className="font-serif-display text-2xl font-semibold text-ink">
              {primary.title} — {masteryLabel(answerResult?.masteryScore ?? 1)}
            </h2>
            {answerResult?.nextReviewAt && (
              <p className="text-sm text-ink-soft">
                Prochaine révision proposée le{" "}
                {new Date(answerResult.nextReviewAt).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                })}
                .
              </p>
            )}
            <Button onClick={onFinish} className="w-fit">
              Terminer
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
