"use client";

import { useEffect, useRef, useState } from "react";
import { buildConceptPrompt, type ConceptPromptInput } from "@/domain/concepts/ai-prompt";
import { Button } from "@/components/ui/Button";

type Feedback = "idle" | "copied" | "failed";

const FEEDBACK_MS = 3000;

/**
 * « Approfondir » — l'unique action de la carte.
 *
 * Le nom dit ce que le lecteur veut faire ; le partage n'est que le moyen d'y arriver.
 * Appuyer propose d'envoyer le concept à une application d'IA installée sur l'appareil,
 * qui prend le relais de l'explication : l'application ne produit rien au-delà de la carte.
 *
 * Le fonctionnement du partage lui-même reste à reprendre — c'est une conversation à
 * avoir, pas un détail d'implémentation.
 *
 * Aucune application n'est nommée ni détectée. Le partage passe par la feuille de partage
 * du système, qui liste déjà les applications capables de recevoir du texte : c'est le
 * système qui sait ce qui est installé, pas nous. Une liste maintenue à la main serait
 * fausse le jour de sa première mise en ligne.
 *
 * Là où le partage natif n'existe pas — un navigateur de bureau —, le prompt part dans le
 * presse-papiers, et on le dit.
 */
export function DeepenButton({ concept }: ConceptPromptInput) {
  const [feedback, setFeedback] = useState<Feedback>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  function flash(next: Feedback) {
    setFeedback(next);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setFeedback("idle"), FEEDBACK_MS);
  }

  async function share() {
    const text = buildConceptPrompt({ concept });

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        // Volontairement `text` seul : plusieurs applications préfèrent le titre au corps
        // quand les deux sont fournis, et n'emporteraient alors que le nom du concept au
        // lieu de la demande.
        await navigator.share({ text });
        return;
      } catch (error) {
        // Un partage annulé par l'utilisateur n'est pas un échec : ne rien dire.
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(text);
      flash("copied");
    } catch {
      flash("failed");
    }
  }

  return (
    <div className="relative inline-flex w-fit">
      <Button onClick={share}>Approfondir</Button>
      {feedback !== "idle" && (
        <p
          role="status"
          className="enter-rise pointer-events-none absolute left-0 bottom-full mb-2 w-max rounded-full bg-paper-raised px-3 py-1.5 text-xs text-ink-soft"
        >
          {feedback === "copied" ? "Prompt copié" : "Copie impossible"}
        </p>
      )}
    </div>
  );
}
