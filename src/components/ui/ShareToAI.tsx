"use client";

import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import { buildConceptPrompt, type ConceptPromptInput } from "@/domain/concepts/ai-prompt";

type Feedback = "idle" | "copied" | "failed";

const FEEDBACK_MS = 3000;

/**
 * Le bouton « + » : envoie le concept à une application d'IA installée sur
 * l'appareil.
 *
 * Aucune application n'est nommée ni détectée. Le partage passe par la feuille
 * de partage du système, qui liste déjà les applications capables de recevoir du
 * texte — c'est le système qui sait ce qui est installé, pas nous. Une liste
 * maintenue à la main serait fausse le jour de sa première mise en ligne.
 *
 * Là où le partage natif n'existe pas — un navigateur de bureau —, le prompt
 * part dans le presse-papiers, et on le dit.
 */
export function ShareToAI({
  concept,
  authors,
  themes,
  className = "",
}: ConceptPromptInput & { className?: string }) {
  const [feedback, setFeedback] = useState<Feedback>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  function flash(next: Feedback) {
    setFeedback(next);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setFeedback("idle"), FEEDBACK_MS);
  }

  async function share() {
    const text = buildConceptPrompt({ concept, authors, themes });

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        // Volontairement `text` seul : plusieurs applications préfèrent le titre
        // au corps quand les deux sont fournis, et n'emporteraient alors que le
        // nom du concept au lieu de la demande.
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
    <div className={`relative inline-flex ${className}`}>
      <button
        type="button"
        onClick={share}
        aria-label="Envoyer ce concept à une application d'IA"
        className="press flex h-11 w-11 items-center justify-center rounded-full text-ink-faint hover:bg-paper-raised hover:text-ink"
      >
        <Plus size={22} strokeWidth={1.75} />
      </button>

      {feedback !== "idle" && (
        <p
          role="status"
          className="enter-rise pointer-events-none absolute right-0 bottom-full mb-2 w-max rounded-full bg-paper-raised px-3 py-1.5 text-xs text-ink-soft"
        >
          {feedback === "copied" ? "Prompt copié" : "Copie impossible"}
        </p>
      )}
    </div>
  );
}
