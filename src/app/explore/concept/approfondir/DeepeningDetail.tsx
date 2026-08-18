"use client";

import { notFound, useSearchParams } from "next/navigation";
import { concepts } from "@/content";
import { generatedDeepenings } from "@/content/generated/deepenings.generated";
import { ConceptSourceList } from "@/components/concept/ConceptSources";
import { Screen } from "@/components/motion/Screen";
import { BackLink } from "@/components/ui/BackLink";
import { HandoffButton } from "@/components/ui/HandoffButton";
import type { Deepening } from "@/types";

/**
 * Le texte qui prolonge la carte.
 *
 * C'est le seul écran de l'application qui se lit en défilant, et le seul dont le contenu ne
 * tient pas dans une hauteur. La carte du jour est bornée par construction, la fiche d'un
 * concept l'est presque ; ici on a mille cinq cents mots, et prétendre les faire tenir
 * reviendrait à ne pas les écrire.
 *
 * **Le module des textes n'est importé que d'ici.** Il pèse une trentaine de milliers de mots,
 * et l'application n'a besoin de rien de tout cela avant qu'on ait appuyé sur « Approfondir » :
 * la découpe par route de Next suffit à ce qu'il ne parte qu'avec cet écran, à condition que
 * personne d'autre ne l'importe. Le reste de l'application passe par
 * `hasDeepening`, qui ne connaît que les identifiants.
 */
export function DeepeningDetail() {
  const slug = useSearchParams().get("c");
  const concept = concepts.find((c) => c.slug === slug);
  const deepening = concept && generatedDeepenings.find((d) => d.conceptId === concept.id);

  /*
   * Une carte sans approfondissement n'a pas d'écran ici, et n'en reçoit pas un de
   * remplacement : le bouton qui mène ici n'existe que lorsque le texte existe, si bien qu'une
   * arrivée sans texte est une adresse saisie ou un lien périmé, pas un état du produit.
   */
  if (!concept || !deepening) return notFound();

  return (
    <Screen>
      <article className="mx-auto max-w-md px-6 pt-10 pb-12">
        {/*
         * Le repli est la fiche du concept, avec son `?c=`. Sans lui, une arrivée directe ou
         * un rechargement remonterait vers `/explore/concept` sans slug, c'est-à-dire vers
         * l'écran « introuvable » : l'arbre ne connaît que les chemins, et deux fiches
         * partagent le même.
         */}
        <BackLink fallback={`/explore/concept/?c=${encodeURIComponent(concept.slug)}`} />

        {concept.themeLabel && <p className="eyebrow mt-6">{concept.themeLabel}</p>}

        <h1 className="mt-2 font-serif-display text-2xl font-semibold leading-tight text-ink">
          {concept.title}
        </h1>

        {/*
         * La durée est calculée, jamais stockée : elle changerait à la moindre correction du
         * texte, et deux valeurs à tenir cohérentes divergent toujours. Elle est là parce que
         * cet écran rompt l'attente construite par tous les autres, où tout tient sans
         * défiler : sans elle, on ne sait pas si l'on ouvre trois paragraphes ou un chapitre.
         */}
        <p className="mt-2 text-sm text-ink-faint">
          {[concept.authorLabel, `${readingMinutes(deepening)} minutes`]
            .filter(Boolean)
            .join(" · ")}
        </p>

        {/*
         * L'accroche revient en tête, et ce n'est pas une répétition : c'est la question à
         * laquelle tout ce qui suit répond. La reprendre ici rattache le texte à la carte
         * qu'on vient de quitter, et évite d'entrer dans mille cinq cents mots sans savoir ce
         * qu'on y cherche.
         */}
        <p className="mt-8 font-serif-display text-lg font-semibold leading-snug text-ink">
          {concept.hookQuestion}
        </p>

        <div className="mt-8 space-y-[1.1em] text-md leading-relaxed text-ink-soft">
          {deepening.lead.map((paragraphe, index) => (
            <p key={index}>{paragraphe}</p>
          ))}
        </div>

        {deepening.sections.map((section) => (
          <section key={section.title} style={{ marginTop: "var(--gap-section)" }}>
            {/*
             * La serif porte ce qui se lit, le sans porte ce qui se choisit : un titre de
             * section se lit, il n'étiquette pas. C'est la règle du §5 de
             * `docs/ux-direction.md`, et c'est ce qui distingue ces titres du chapeau en
             * capitales qui les surplombe.
             */}
            <h2 className="font-serif-display text-lg font-semibold leading-snug text-ink">
              {section.title}
            </h2>
            <div className="mt-4 space-y-[1.1em] text-md leading-relaxed text-ink-soft">
              {section.paragraphs.map((paragraphe, index) => (
                <p key={index}>{paragraphe}</p>
              ))}
            </div>
          </section>
        ))}

        {/*
         * La frontière documentaire, à l'endroit où elle se voit.
         *
         * Elle est en fin de texte et non en tête : placée avant, elle se lirait comme un
         * avertissement sur la fiabilité de ce qui suit, alors qu'elle dit l'inverse. Ce qui
         * précède est établi ; ce bloc nomme ce qui ne l'est pas, et ne peut se comprendre
         * qu'une fois qu'on sait de quoi il parle.
         *
         * Le filet et la couleur atténuée le rangent visuellement du côté de l'appareil
         * documentaire, avec les sources, plutôt que du côté du texte.
         */}
        <section
          className="border-t border-line pt-6"
          style={{ marginTop: "var(--gap-section)" }}
        >
          <h2 className="eyebrow">Ce que la carte n&apos;établit pas</h2>
          <div className="mt-3 space-y-[0.9em] text-sm leading-relaxed text-ink-faint">
            {deepening.limits.map((limite, index) => (
              <p key={index}>{limite}</p>
            ))}
          </div>
        </section>

        {concept.sources && concept.sources.length > 0 && (
          <section style={{ marginTop: "var(--gap-section)" }}>
            <h2 className="eyebrow">Sources</h2>
            <div className="mt-3">
              <ConceptSourceList sources={concept.sources} />
            </div>
          </section>
        )}

        {/*
         * Le passage de relais vers une IA, rétrogradé mais pas supprimé.
         *
         * Il était l'unique action de la carte ; il est maintenant ce qui vient après avoir
         * lu. C'est l'ordre juste : ce texte répond aux questions qu'on avait en arrivant,
         * il ne peut pas répondre à celles qu'il fait naître, et c'est pour celles-là qu'un
         * interlocuteur sert à quelque chose. Le dossier qui part reste le même, carte et
         * corpus compris.
         */}
        <div style={{ marginTop: "var(--gap-section)" }}>
          <p className="text-sm leading-relaxed text-ink-soft">
            Ce texte s&apos;arrête là où s&apos;arrête le corpus de la carte. Pour le
            prolonger, emportez la carte et ses sources vers l&apos;IA de votre choix.
          </p>
          <div className="mt-4">
            <HandoffButton concept={concept} />
          </div>
        </div>
      </article>
    </Screen>
  );
}

/**
 * La durée de lecture, arrondie à la minute supérieure.
 *
 * 200 mots par minute : c'est le bas de la fourchette usuelle pour une lecture attentive, et
 * c'est le bon côté où se tromper. Une durée annoncée trop courte est un manquement à la
 * parole donnée ; une durée trop longue ne coûte rien à personne.
 */
function readingMinutes(deepening: Deepening): number {
  const texte = [
    ...deepening.lead,
    ...deepening.sections.flatMap((s) => s.paragraphs),
    ...deepening.limits,
  ].join(" ");
  return Math.max(1, Math.ceil(texte.split(/\s+/).filter(Boolean).length / 200));
}
