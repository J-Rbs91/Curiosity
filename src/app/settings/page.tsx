"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getProgressService } from "@/services/progress";
import { resetDailyDiscoverySignal } from "@/lib/daily-discovery";
import { Screen } from "@/components/motion/Screen";
import { BackLink } from "@/components/ui/BackLink";
import { climbTo } from "@/components/navigation/climb";
import { Button } from "@/components/ui/Button";
import { ThemeChoice } from "@/components/ui/ThemeChoice";

/**
 * Deux choses, et la frontière entre elles est ce qui justifie que cet écran existe.
 *
 * **Ce qu'un lecteur doit pouvoir faire de ses données** — les effacer.
 * **La condition dans laquelle il lit** — le thème.
 */
export default function SettingsPage() {
  const router = useRouter();
  const [confirming, setConfirming] = useState(false);

  function resetProgress() {
    getProgressService().reset();

    // Le shell Android ne lit pas le localStorage : il reçoit uniquement une projection du
    // statut « carte du jour découverte ». L'effacement doit donc retirer ce signal au même
    // instant que la progression, puis prévenir le rappel web.
    resetDailyDiscoverySignal();

    setConfirming(false);
    climbTo(router, "/");
  }

  return (
    <Screen>
      <div className="column column-read pt-10 pb-12">
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
                Les cartes déjà rencontrées seront oubliées définitivement. Les propositions
                repartiront de zéro.
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
