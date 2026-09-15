"use client";

import { useEffect, useState } from "react";
import { notFound, useSearchParams } from "next/navigation";
import { concepts } from "@/content";
import { generatedDeepenings } from "@/content/generated/deepenings.generated";
import { ConceptSourceList } from "@/components/concept/ConceptSources";
import { Screen } from "@/components/motion/Screen";
import { BackLink } from "@/components/ui/BackLink";
import { HandoffButton } from "@/components/ui/HandoffButton";
import { ReadingLoader } from "@/components/ui/ReadingLoader";
import { AUDIENCE_EVENTS, countEvent } from "@/lib/analytics";
import { drawDeepeningWaitMs } from "@/lib/deepening-wait";
import { useReducedMotion } from "@/lib/reduced-motion";
import { espacesFrancaises } from "@/lib/typographie";
import type { Deepening } from "@/types";

/**
 * L’attente accompagne uniquement l’ouverture du texte. En mouvement réduit,
 * le contenu est disponible immédiatement.
 */
function useDeepeningWait() {
  const mouvementReduit = useReducedMotion();
  const [dureeMs] = useState(drawDeepeningWaitMs);
  const [ecoulee, setEcoulee] = useState(false);

  useEffect(() => {
    if (mouvementReduit) return;
    const minuteur = window.setTimeout(() => setEcoulee(true), dureeMs);
    return () => window.clearTimeout(minuteur);
  }, [mouvementReduit, dureeMs]);

  return { dureeMs, terminee: ecoulee || mouvementReduit };
}

/**
 * Écran lecteur de l’approfondissement.
 *
 * Important : `deepening.limits` est une frontière documentaire interne utilisée
 * pendant la rédaction, l’audit et le fact-checking. Elle ne fait pas partie du
 * contenu éditorial et n’est donc jamais rendue ici.
 */
export function DeepeningDetail() {
  const slug = useSearchParams().get("c");
  const concept = concepts.find((c) => c.slug === slug);
  const deepening = concept && generatedDeepenings.find((d) => d.conceptId === concept.id);
  const attente = useDeepeningWait();

  useEffect(() => {
    if (!deepening) return;
    countEvent(AUDIENCE_EVENTS.approfondir);
  }, [deepening]);

  if (!concept || !deepening) return notFound();

  if (!attente.terminee) {
    return (
      <Screen>
        <ReadingLoader durationMs={attente.dureeMs} />
      </Screen>
    );
  }

  return (
    <Screen>
      <article className="enter-rise column column-editorial column-serif pt-10 pb-12">
        <BackLink fallback={`/explore/concept/?c=${encodeURIComponent(concept.slug)}`} />

        <div className="reading-shell">
          <div className="reading-layout reading-long">
            <header className="reading-head">
              {concept.themeLabel && <p className="eyebrow mt-6">{concept.themeLabel}</p>}

              <h1 className="mt-2 font-serif-display text-2xl font-semibold leading-tight text-ink">
                {concept.title}
              </h1>

              <p className="mt-2 text-sm text-ink-faint">
                {[concept.authorLabel, `${readingMinutes(deepening)} minutes`]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            </header>

            <div className="reading-body">
              <p className="font-serif-display text-lg font-semibold leading-snug text-ink">
                {espacesFrancaises(concept.hookQuestion)}
              </p>

              <div className="reading" style={{ marginTop: "var(--gap-section)" }}>
                {deepening.lead.map((paragraphe, index) => (
                  <p key={index}>{espacesFrancaises(paragraphe)}</p>
                ))}
              </div>

              {deepening.sections.map((section) => (
                <section key={section.title} style={{ marginTop: "var(--gap-group)" }}>
                  <h2 className="font-serif-display text-lg font-semibold leading-snug text-ink">
                    {espacesFrancaises(section.title)}
                  </h2>
                  <div className="reading mt-3">
                    {section.paragraphs.map((paragraphe, index) => (
                      <p key={index}>{espacesFrancaises(paragraphe)}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {concept.sources && concept.sources.length > 0 && (
              <aside className="reading-rail" aria-labelledby="approfondissement-sources">
                <h2 id="approfondissement-sources" className="eyebrow">
                  Sources
                </h2>
                <div className="mt-3">
                  <ConceptSourceList sources={concept.sources} />
                </div>
              </aside>
            )}

            <div className="reading-after">
              <p className="reading-aside text-sm leading-relaxed text-ink-soft">
                Ce texte s&apos;arrête là où s&apos;arrêtent ses sources. Pour le prolonger,
                emportez-les avec le concept vers l&apos;IA de votre choix.
              </p>
              <div className="mt-4">
                <HandoffButton concept={concept} />
              </div>
            </div>
          </div>
        </div>
      </article>
    </Screen>
  );
}

/**
 * La durée annoncée correspond uniquement au texte réellement lu.
 * Le champ interne `limits` n’entre donc pas dans le calcul.
 */
function readingMinutes(deepening: Deepening): number {
  const texte = [
    ...deepening.lead,
    ...deepening.sections.flatMap((s) => s.paragraphs),
  ].join(" ");
  return Math.max(1, Math.ceil(texte.split(/\s+/).filter(Boolean).length / 200));
}
