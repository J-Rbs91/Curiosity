"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/types";
import { Button } from "@/components/ui/Button";

interface QuizQuestionViewProps {
  question: QuizQuestion;
  onAnswered: (wasCorrect: boolean) => void;
}

export function QuizQuestionView({ question, onAnswered }: QuizQuestionViewProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [selfAssessed, setSelfAssessed] = useState<boolean | null>(null);

  const revealed = question.type === "open" ? selfAssessed !== null : selected !== null;
  const wasCorrect =
    question.type === "open"
      ? Boolean(selfAssessed)
      : selected === question.correctAnswer;

  return (
    <div className="space-y-5">
      <p className="text-lg leading-relaxed text-ink">{question.prompt}</p>

      {question.type === "mcq" && (
        <div className="space-y-2.5">
          {question.choices?.map((choice, index) => {
            const value = String(index);
            const isSelected = selected === value;
            const isCorrectChoice = value === question.correctAnswer;
            const showState = selected !== null;

            return (
              <button
                key={value}
                type="button"
                disabled={selected !== null}
                onClick={() => setSelected(value)}
                aria-pressed={isSelected}
                className={[
                  "w-full min-h-11 rounded-2xl border px-4 py-3 text-left text-[15px] leading-snug transition-colors",
                  !showState && "border-line hover:border-accent",
                  showState && isCorrectChoice && "border-good bg-good/10 text-ink",
                  showState && isSelected && !isCorrectChoice && "border-warn bg-warn/10 text-ink",
                  showState && !isSelected && !isCorrectChoice && "border-line opacity-60",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {choice}
              </button>
            );
          })}
        </div>
      )}

      {question.type === "true-false" && (
        <div className="flex gap-3">
          {["true", "false"].map((value) => {
            const isSelected = selected === value;
            const isCorrectChoice = value === question.correctAnswer;
            const showState = selected !== null;
            return (
              <button
                key={value}
                type="button"
                disabled={selected !== null}
                onClick={() => setSelected(value)}
                className={[
                  "min-h-11 flex-1 rounded-2xl border px-4 py-3 text-[15px] font-medium transition-colors",
                  !showState && "border-line hover:border-accent",
                  showState && isCorrectChoice && "border-good bg-good/10",
                  showState && isSelected && !isCorrectChoice && "border-warn bg-warn/10",
                  showState && !isSelected && !isCorrectChoice && "border-line opacity-60",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {value === "true" ? "Vrai" : "Faux"}
              </button>
            );
          })}
        </div>
      )}

      {question.type === "open" && (
        <div className="space-y-3">
          {selfAssessed === null && (
            <button
              type="button"
              onClick={() => setSelected("shown")}
              className="text-sm font-medium text-accent underline underline-offset-4"
            >
              Voir une réponse modèle
            </button>
          )}
          {selected !== null && selfAssessed === null && (
            <div className="rounded-2xl border border-line bg-paper-raised p-4 text-[15px] leading-relaxed">
              {question.correctAnswer}
            </div>
          )}
        </div>
      )}

      {revealed && question.type !== "open" && (
        <div
          className={[
            "rounded-2xl border p-4 text-[14px] leading-relaxed",
            wasCorrect ? "border-good bg-good/10" : "border-warn bg-warn/10",
          ].join(" ")}
        >
          <p className="mb-1 font-medium">{wasCorrect ? "Exact." : "Pas tout à fait."}</p>
          <p className="text-ink-soft">{question.explanation}</p>
        </div>
      )}

      {question.type === "open" && selected !== null && selfAssessed === null && (
        <div className="flex gap-3">
          <Button variant="secondary" onClick={() => setSelfAssessed(false)}>
            À retravailler
          </Button>
          <Button onClick={() => setSelfAssessed(true)}>J&apos;avais compris</Button>
        </div>
      )}

      {revealed && (
        <Button onClick={() => onAnswered(wasCorrect)} className="w-full">
          Continuer
        </Button>
      )}
    </div>
  );
}
