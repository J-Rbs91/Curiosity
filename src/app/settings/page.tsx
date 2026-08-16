"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getProgressService } from "@/services/progress";
import { Screen } from "@/components/motion/Screen";
import { SCREEN_MOTION } from "@/components/motion/screen-motion";
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
    router.push("/", { transitionTypes: SCREEN_MOTION.back });
  }

  return (
    <Screen>
      <div className="mx-auto max-w-md px-6 pt-10 pb-12">
        <Link
          href="/explore"
          transitionTypes={SCREEN_MOTION.back}
          className="press -ml-1 inline-flex items-center gap-1.5 text-sm text-ink-faint hover:text-ink"
        >
          <ArrowLeft size={16} />
          Explorer
        </Link>

        <h1 className="mt-4 font-serif-display text-[28px] font-semibold text-ink">Réglages</h1>

        <div className="mt-12">
          {!confirming ? (
            <button
              type="button"
              onClick={() => setConfirming(true)}
              className="press text-sm font-medium text-warn"
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
