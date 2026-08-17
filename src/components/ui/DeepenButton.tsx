"use client";

import { useEffect, useRef, useState } from "react";
import { buildAISharePayload } from "@/domain/concepts/ai-handoff";
import { taxonomy } from "@/content";
import { absoluteUrl } from "@/lib/base-path";
import { Button } from "@/components/ui/Button";
import type { Concept } from "@/types";

type Feedback = "idle" | "copied" | "failed";

const FEEDBACK_MS = 3000;

/**
 * « Approfondir » — l'unique action de la carte.
 *
 * Le nom dit ce que le lecteur veut faire ; le partage n'est que le moyen d'y arriver.
 * Appuyer propose d'envoyer le concept à une application d'IA installée sur l'appareil,
 * qui prend le relais de l'explication : l'application ne produit rien au-delà de la carte.
 *
 * Ce qui part n'est pas la carte, mais un dossier complet — instructions pédagogiques et
 * documentaires, carte, corpus de sources, lien de retour — assemblé par
 * `@/domain/concepts/ai-handoff`. Le bouton ne connaît pas ce contenu : il résout ce que
 * l'écran ne sait pas (la place de la carte dans la taxonomie, l'adresse sous laquelle
 * l'application est servie) et transmet le reste.
 *
 * Aucune application n'est nommée ni détectée. Le partage passe par la feuille de partage
 * du système, qui liste déjà les applications capables de recevoir du texte : c'est le
 * système qui sait ce qui est installé, pas nous. Une liste maintenue à la main serait
 * fausse le jour de sa première mise en ligne.
 *
 * Là où le partage natif n'existe pas — un navigateur de bureau —, le prompt part dans le
 * presse-papiers, et on le dit.
 */
export function DeepenButton({ concept }: { concept: Concept }) {
  const [feedback, setFeedback] = useState<Feedback>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  function flash(next: Feedback) {
    setFeedback(next);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setFeedback("idle"), FEEDBACK_MS);
  }

  async function share() {
    // Le domaine est résolu ici plutôt que passé par l'appelant : les deux écrans qui
    // portent ce bouton n'ont pas à savoir dans quelle discipline se trouve la carte, ni
    // sous quelle adresse l'application est servie.
    const domain = taxonomy.domainOfConcept(concept);
    const text = buildAISharePayload({
      concept,
      domain,
      family: domain && taxonomy.familyOf(domain.id),
      url: absoluteUrl(`/explore/concept/?c=${encodeURIComponent(concept.slug)}`),
    });

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
