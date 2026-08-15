"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getProgressService } from "@/services/progress";
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
    router.push("/");
  }

  return (
    <div className="mx-auto max-w-md px-5 pt-8 pb-10">
      <h1 className="font-serif-display text-2xl font-semibold text-ink">Réglages</h1>

      <fieldset className="mt-8">
        <legend className="text-xs font-medium uppercase tracking-wide text-accent">
          Niveau d&apos;explication
        </legend>
        <div className="mt-3 flex gap-2">
          {EXPLANATION_LEVELS.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              aria-pressed={settings.explanationLevel === value}
              onClick={() => update({ explanationLevel: value })}
              className={`min-h-11 flex-1 rounded-full border px-3 text-sm font-medium transition-colors ${
                settings.explanationLevel === value
                  ? "border-accent bg-accent-soft text-accent"
                  : "border-line text-ink-soft"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-8">
        <legend className="text-xs font-medium uppercase tracking-wide text-accent">
          Durée préférée
        </legend>
        <div className="mt-3 flex gap-2">
          {DURATIONS.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              aria-pressed={settings.preferredDuration === value}
              onClick={() => update({ preferredDuration: value })}
              className={`min-h-11 flex-1 rounded-full border px-3 text-sm font-medium transition-colors ${
                settings.preferredDuration === value
                  ? "border-accent bg-accent-soft text-accent"
                  : "border-line text-ink-soft"
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
            className="text-sm font-medium text-warn"
          >
            Réinitialiser la progression
          </button>
        ) : (
          <div className="space-y-3">
            <p className="text-sm text-ink-soft">
              Toutes vos données locales (progression, historique) seront effacées définitivement.
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
  );
}
