"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getProgressService } from "@/services/progress";
import { Screen } from "@/components/motion/Screen";
import { BackLink } from "@/components/ui/BackLink";
import { climbTo } from "@/components/navigation/climb";
import { Button } from "@/components/ui/Button";

/**
 * Il n'y a plus rien à régler : ni niveau d'explication, ni durée de lecture.
 * Ne reste que ce qu'un utilisateur doit pouvoir faire de ses propres données —
 * les effacer. Un écran pour une seule action, mais retirer cette action
 * enfermerait l'utilisateur dans un historique qu'il ne pourrait plus défaire.
 */
export default function SettingsPage() {
  const router = useRouter();
  const [confirming, setConfirming] = useState(false);

  function resetProgress() {
    getProgressService().reset();
    setConfirming(false);
    /*
     * Quitter les réglages est une remontée : on dépile plutôt que d'empiler,
     * sans quoi l'écran d'effacement resterait derrière et le bouton retour du
     * système y ramènerait après que les données ont été effacées.
     */
    climbTo(router, "/");
  }

  return (
    <Screen>
      <div className="mx-auto max-w-md px-6 pt-10 pb-12">
        <BackLink />

        <h1 className="mt-4 font-serif-display text-[28px] font-semibold text-ink">Réglages</h1>

        <div className="mt-12">
          {!confirming ? (
            <button
              type="button"
              onClick={() => setConfirming(true)}
              className="press -ml-2 inline-flex min-h-11 items-center px-2 text-sm font-medium text-warn"
            >
              Effacer mes données
            </button>
          ) : (
            <div className="enter-rise space-y-4">
              <p className="text-[15px] leading-relaxed text-ink-soft">
                Les cartes déjà rencontrées seront oubliées
                définitivement. Les propositions repartiront de zéro.
              </p>
              <div className="flex gap-3">
                <Button variant="secondary" onClick={() => setConfirming(false)}>
                  Annuler
                </Button>
                <Button onClick={resetProgress}>Effacer</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Screen>
  );
}
