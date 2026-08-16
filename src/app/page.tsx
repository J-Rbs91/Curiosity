"use client";

import { useEffect, useState } from "react";
import { concepts } from "@/content";
import { getProgressService } from "@/services/progress";
import { pickNextConcept } from "@/domain/concepts/next-card";
import type { Concept } from "@/types";
import { Screen } from "@/components/motion/Screen";
import { Button } from "@/components/ui/Button";
import { ConceptQuotation } from "@/components/concept/ConceptQuotation";
import { ConceptSourceList } from "@/components/concept/ConceptSources";
import { DeepenButton } from "@/components/ui/DeepenButton";

export default function TodayPage() {
  const [mounted, setMounted] = useState(false);
  const [firstLaunch, setFirstLaunch] = useState(false);
  const [concept, setConcept] = useState<Concept | undefined>(undefined);

  useEffect(() => {
    const service = getProgressService();
    const state = service.getState();
    const seen = new Map(
      Object.values(state.concepts).map((c) => [c.conceptId, c.lastSeenAt] as const)
    );
    const next = pickNextConcept(concepts, seen);
    // Lecture localStorage et tirage de la carte : impossibles pendant le rendu serveur,
    // faits une seule fois par ouverture de l'écran.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFirstLaunch(!state.settings.firstLaunchCompleted);
    setConcept(next);
    setMounted(true);
    if (next) service.recordSeen(next.id);
  }, []);

  if (!mounted) return <div className="min-h-svh" aria-hidden />;

  /*
   * Corpus vide : rien à proposer, et surtout rien à inventer. C'est l'état normal tant que
   * l'instruction documentaire n'a pas rendu sa première carte, et il vaut mieux l'afficher
   * tel quel qu'ouvrir l'application sur un contenu invérifié.
   */
  if (!concept) {
    return (
      <Screen>
        <div className="stagger mx-auto flex min-h-svh max-w-md flex-col justify-center gap-8 px-6">
          <h1 className="font-serif-display text-[30px] font-semibold leading-tight text-ink">
            Le corpus est en cours de constitution.
          </h1>
          <p className="text-[17px] leading-relaxed text-ink-soft">
            Aucun concept n&apos;a encore terminé son instruction documentaire. Rien ne
            s&apos;affichera ici tant qu&apos;une carte n&apos;aura pas été établie sur ses
            sources.
          </p>
        </div>
      </Screen>
    );
  }

  if (firstLaunch) {
    return (
      <Screen>
        <div className="stagger mx-auto flex min-h-svh max-w-md flex-col justify-center gap-10 px-6">
          <h1 className="font-serif-display text-[32px] font-semibold leading-tight text-ink">
            Comprendre comment fonctionnent réellement les organisations.
          </h1>
          <p className="text-[17px] leading-relaxed text-ink-soft">
            Un concept à la fois, à chaque ouverture.
          </p>
          <Button onClick={() => { getProgressService().markFirstLaunchCompleted(); setFirstLaunch(false); }} className="w-fit">
            Commencer
          </Button>
        </div>
      </Screen>
    );
  }

  return (
    <Screen>
      {/*
       * Une hauteur fixe, et non un minimum : la carte doit tenir dans l'écran, et si elle
       * n'y tient pas c'est un défaut à corriger dans la fiche, pas un défilement à offrir.
       * Les longueurs de l'accroche, du résumé et de la citation sont plafonnées par le
       * validateur du corpus, sur des valeurs mesurées ici.
       *
       * On retranche la barre de navigation : `AppShell` réserve déjà sa hauteur en
       * remplissage bas, si bien qu'un enfant en `100svh` produit exactement un écran de
       * défilement — le seul que cette page ne doit jamais avoir.
       */}
      <div
        className="mx-auto flex max-w-md flex-col justify-center px-6 py-6"
        style={{ height: "calc(100svh - var(--nav-height) - env(safe-area-inset-bottom))" }}
      >
        <ConceptCard concept={concept} />
      </div>
    </Screen>
  );
}

/**
 * La carte : thème, concept, citation, auteur, accroche, résumé, sources.
 *
 * C'est tout ce que l'application produit. L'approfondissement est délégué — « Approfondir »
 * emporte la carte et ses sources vers l'IA du lecteur, avec un prompt qui demande à celle-ci
 * de tenir l'attribution transmise pour exacte. Ce qui a coûté le plus cher à établir est
 * précisément ce qui empêchera l'IA de partir sur une vulgarisation.
 */
function ConceptCard({ concept }: { concept: Concept }) {
  const [showSources, setShowSources] = useState(false);
  const sources = concept.sources ?? [];

  return (
    <div className="stagger flex flex-col gap-4">
      <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">
        {concept.themeLabel}
      </p>

      <h1 className="font-serif-display text-[30px] font-semibold leading-[1.15] text-ink">
        {concept.title}
      </h1>

      {concept.quotation && <ConceptQuotation quotation={concept.quotation} />}

      <div>
        <p className="text-[15px] text-ink-soft">{concept.authorLabel}</p>
        {concept.attributionNote && (
          <p className="mt-1 text-[13px] leading-relaxed text-ink-faint">
            {concept.attributionNote}
          </p>
        )}
      </div>

      {/*
       * Les sources prennent la place du résumé plutôt que de s'ajouter dessous : c'est ce
       * qui garantit qu'ouvrir les sources ne fait jamais déborder l'écran. On consulte ou
       * on lit, pas les deux à la fois — et le concept reste sous les yeux dans les deux cas.
       */}
      {showSources ? (
        <div className="enter-rise">
          <ConceptSourceList sources={sources} />
        </div>
      ) : (
        <>
          <p className="font-serif-display text-[19px] leading-snug text-ink">
            {concept.hookQuestion}
          </p>
          <p className="text-[16px] leading-relaxed text-ink-soft">{concept.shortExplanation}</p>
        </>
      )}

      {sources.length > 0 && (
        <button
          type="button"
          onClick={() => setShowSources((value) => !value)}
          aria-expanded={showSources}
          className="press w-fit text-xs font-medium uppercase tracking-[0.12em] text-ink-faint hover:text-ink"
        >
          {showSources ? "Revenir au concept" : `Sources · ${sources.length}`}
        </button>
      )}

      <DeepenButton concept={concept} />
    </div>
  );
}
