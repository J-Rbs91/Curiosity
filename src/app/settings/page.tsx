"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getProgressService } from "@/services/progress";
import { Screen } from "@/components/motion/Screen";
import { BackLink } from "@/components/ui/BackLink";
import { climbTo } from "@/components/navigation/climb";
import { Button } from "@/components/ui/Button";
import { ThemeChoice } from "@/components/ui/ThemeChoice";

/**
 * Deux choses, et la frontière entre elles est ce qui justifie que cet écran existe.
 *
 * **Ce qu'un lecteur doit pouvoir faire de ses données** — les effacer. Retirer cette action
 * l'enfermerait dans un historique qu'il ne pourrait plus défaire.
 *
 * **La condition dans laquelle il lit** — le thème. Les réglages retirés au §5 de
 * `docs/ux-direction.md` réglaient tous le *contenu* : niveau d'explication, durée de
 * lecture. Ils ont été retirés parce que la difficulté d'un concept se lit dans son texte,
 * pas dans une préférence choisie une fois pour toutes. Un thème ne règle rien du contenu ;
 * il règle la lumière dans laquelle on le lit, et c'est la seule chose que le lecteur sait
 * mieux que nous. Ce n'est donc pas la réouverture de la porte que le §5 a fermée.
 *
 * L'ordre suit la fréquence : on change de thème plus souvent qu'on n'efface son historique,
 * et une action irréversible ne se met pas en tête d'écran.
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
      <div className="mx-auto max-w-md px-6 pt-10 pb-12 md:max-w-read">
        <BackLink />

        <h1 className="mt-4 font-serif-display text-2xl font-semibold text-ink">Réglages</h1>

        <div style={{ marginTop: "var(--gap-section)" }}>
          <ThemeChoice />
        </div>

        <div style={{ marginTop: "var(--gap-group)" }}>
          {!confirming ? (
            <button
              type="button"
              onClick={() => setConfirming(true)}
              className="press -ml-2 inline-flex min-h-11 items-center px-2 text-sm font-medium text-warn"
            >
              Effacer l&rsquo;historique des cartes déjà lues
            </button>
          ) : (
            <div className="enter-rise space-y-4">
              <p className="text-sm leading-relaxed text-ink-soft">
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
