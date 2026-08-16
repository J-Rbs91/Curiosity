"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getProgressService } from "@/services/progress";
import { Screen } from "@/components/motion/Screen";
import { SCREEN_MOTION } from "@/components/motion/screen-motion";
import { Button } from "@/components/ui/Button";
import type { ExplanationLevel, PreferredDuration, UserSettings } from "@/types";
import { DEFAULT_SETTINGS } from "@/repositories/progress.repository";

const EXPLANATION_LEVELS: { value: ExplanationLevel; label: string }[] = [
  { value: "accessible", label: "Accessible" },
  { value: "standard", label: "Standard" },
  { value: "approfondi", label: "Approfondi" },
];

const DURATIONS: { value: PreferredDuration; label: string }[] = [
  { value: 2, label: "2 min" },
  { value: 5, label: "5 min" },
  { value: 10, label: "10 min" },
];

export default function SettingsPage() {
  const router = useRouter();
  const [settings, setSettings] = useState<UserSettings>(DEFAULT_SETTINGS);
  const [confirmingReset, setConfirmingReset] = useState(false);

  useEffect(() => {
    // Lecture localStorage : impossible pendant le rendu serveur, doit se faire après le montage.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSettings(getProgressService().getState().settings);
  }, []);

  function update(partial: Partial<UserSettings>) {
    setSettings(getProgressService().updateSettings(partial));
  }

  function resetProgress() {
    getProgressService().resetAll();
    setConfirmingReset(false);
    router.push("/", { transitionTypes: SCREEN_MOTION.back });
  }

  return (
    <Screen>
      <div className="mx-auto max-w-md px-5 pt-8 pb-10">
        {/*
         * Le retour est nommé et pointe vers l'écran d'où l'on vient
         * réellement. Un écran atteint par une icône et quitté par un onglet
         * de la barre laisse l'utilisateur sans chemin inverse.
         */}
        <Link
          href="/progress"
          transitionTypes={SCREEN_MOTION.back}
          className="press -ml-1 inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-accent"
        >
          <ArrowLeft size={16} />
          Votre exploration
        </Link>

        <h1 className="mt-3 font-serif-display text-2xl font-semibold text-ink">Réglages</h1>

        <fieldset className="mt-8">
          <legend className="text-xs font-medium uppercase tracking-wide text-ink-faint">
            Niveau d&apos;explication
          </legend>
          <div className="mt-3 flex gap-2">
            {EXPLANATION_LEVELS.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                aria-pressed={settings.explanationLevel === value}
                onClick={() => update({ explanationLevel: value })}
                className={`press min-h-11 flex-1 rounded-full px-3 text-sm font-medium ${
                  settings.explanationLevel === value
                    ? "bg-accent text-accent-contrast"
                    : "bg-paper-raised text-ink-soft hover:bg-paper-contact"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-8">
          <legend className="text-xs font-medium uppercase tracking-wide text-ink-faint">
            Durée préférée
          </legend>
          <div className="mt-3 flex gap-2">
            {DURATIONS.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                aria-pressed={settings.preferredDuration === value}
                onClick={() => update({ preferredDuration: value })}
                className={`press min-h-11 flex-1 rounded-full px-3 text-sm font-medium ${
                  settings.preferredDuration === value
                    ? "bg-accent text-accent-contrast"
                    : "bg-paper-raised text-ink-soft hover:bg-paper-contact"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="mt-12 border-t border-line pt-6">
          {!confirmingReset ? (
            <button
              type="button"
              onClick={() => setConfirmingReset(true)}
              className="press text-sm font-medium text-warn"
            >
              Réinitialiser la progression
            </button>
          ) : (
            <div className="enter-rise space-y-3">
              <p className="text-sm text-ink-soft">
                Toutes vos données locales (progression, historique) seront effacées
                définitivement.
              </p>
              <div className="flex gap-3">
                <Button variant="secondary" onClick={() => setConfirmingReset(false)}>
                  Annuler
                </Button>
                <Button variant="primary" onClick={resetProgress}>
                  Confirmer
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Screen>
  );
}
