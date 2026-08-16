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
                  "press w-full min-h-11 rounded-2xl border px-4 py-3 text-left text-[15px] leading-snug",
                  !showState && "border-transparent bg-paper-raised hover:bg-paper-contact",
                  showState && isCorrectChoice && "border-good bg-good/10 text-ink",
                  showState && isSelected && !isCorrectChoice && "border-warn bg-warn/10 text-ink",
                  showState && !isSelected && !isCorrectChoice && "border-transparent bg-paper-raised opacity-50",
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
                  "press min-h-11 flex-1 rounded-2xl border px-4 py-3 text-[15px] font-medium",
                  !showState && "border-transparent bg-paper-raised hover:bg-paper-contact",
                  showState && isCorrectChoice && "border-good bg-good/10",
                  showState && isSelected && !isCorrectChoice && "border-warn bg-warn/10",
                  showState && !isSelected && !isCorrectChoice && "border-transparent bg-paper-raised opacity-50",
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
              className="press text-sm font-medium text-accent underline underline-offset-4"
            >
              Voir une réponse modèle
            </button>
          )}
          {selected !== null && selfAssessed === null && (
            <div className="enter-rise rounded-2xl bg-paper-raised p-4 text-[15px] leading-relaxed">
              {question.correctAnswer}
            </div>
          )}
        </div>
      )}

      {revealed && question.type !== "open" && (
        /*
         * La correction arrive juste sous la réponse, en montant : c'est le
         * seul mouvement de cet écran, et il désigne l'endroit à lire. La
         * couleur ne porte jamais l'information seule — « Exact » et « Pas
         * tout à fait » sont écrits.
         */
        <div
          className={[
            "enter-rise rounded-2xl border p-4 text-[14px] leading-relaxed",
            wasCorrect ? "border-good bg-good/10" : "border-warn bg-warn/10",
          ].join(" ")}
        >
          <p className={`mb-1 font-medium ${wasCorrect ? "text-good" : "text-warn"}`}>
            {wasCorrect ? "Exact." : "Pas tout à fait."}
          </p>
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
