"use client";

import { useEffect, useState } from "react";
import { taxonomy } from "@/content";
import { getProgressService } from "@/services/progress";
import { dayKey, pickDailyConcept } from "@/domain/concepts/next-card";
import type { Concept } from "@/types";
import { Screen } from "@/components/motion/Screen";
import { Button } from "@/components/ui/Button";
import { ConceptQuotation } from "@/components/concept/ConceptQuotation";
import { ConceptSourceList } from "@/components/concept/ConceptSources";
import { DeepenButton } from "@/components/ui/DeepenButton";
import { Wordmark } from "@/components/ui/Wordmark";

/**
 * La hauteur d'un écran, barre de navigation déduite.
 *
 * `AppShell` réserve déjà la hauteur de la barre en remplissage bas : un enfant en `100svh`
 * produit donc exactement un écran de défilement — le seul que cette page ne doit jamais
 * avoir. Une hauteur fixe, et non un minimum : si le contenu n'y tient pas, c'est un défaut
 * à corriger dans la fiche, pas un défilement à offrir.
 */
const SCREEN_HEIGHT = "calc(100svh - var(--nav-height) - env(safe-area-inset-bottom))";

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
    const today = dayKey();
    /*
     * Le tirage porte sur tout le corpus, et il le dit — plutôt que de recevoir la liste des
     * cartes sans qu'on sache de quel périmètre elle vient. Le jour où l'on voudra une carte
     * d'une famille ou d'un domaine, c'est ce périmètre qui change, et rien d'autre : le
     * tirage lui-même ne connaît ni domaine ni discipline.
     */
    const next = pickDailyConcept(
      taxonomy.conceptsIn({ kind: "all" }),
      seen,
      today,
      state.daily
    );
    // Lecture localStorage et tirage de la carte : impossibles pendant le rendu serveur,
    // faits une seule fois par ouverture de l'écran.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFirstLaunch(!state.settings.firstLaunchCompleted);
    setConcept(next);
    setMounted(true);
    if (next) {
      // Le tirage du jour est arrêté ici et pas ailleurs : rouvrir l'application dans
      // l'heure doit redonner la même carte, y compris après un changement de corpus.
      if (state.daily?.day !== today || state.daily.conceptId !== next.id)
        service.setDaily(today, next.id);
      service.recordSeen(next.id);
    }
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
        <div
          className="stagger mx-auto flex max-w-md flex-col justify-center gap-8 px-6"
          style={{ height: SCREEN_HEIGHT }}
        >
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
        <div
          className="stagger mx-auto flex max-w-md flex-col justify-center gap-10 px-6"
          style={{ height: SCREEN_HEIGHT }}
        >
          {/*
           * Le seul endroit de l'application où la marque se montre, et le seul où son regard
           * joue. Ailleurs, l'écran ne porte que ce qu'il y a à comprendre — c'est la décision
           * du §5 de `docs/ux-direction.md`, et une signature en en-tête permanent la casserait
           * pour ne rien apprendre à personne. Ici, on se présente : c'est la seule fois.
           */}
          <Wordmark animate className="text-[34px] text-ink" />
          <h1 className="font-serif-display text-[32px] font-semibold leading-tight text-ink">
            Comprendre comment fonctionnent réellement le travail et les organisations.
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
       * Le titre, l'accroche, le résumé et la citation sont plafonnés en longueur par le
       * validateur du corpus (`CARD_LIMITS`), sur des valeurs mesurées ici même : la carte
       * est rendue tous champs au maximum, et on compare sa hauteur à la place disponible.
       */}
      <div
        className="mx-auto flex max-w-md flex-col justify-center px-6 py-6"
        style={{ height: SCREEN_HEIGHT }}
      >
        <ConceptCard concept={concept} />
      </div>
    </Screen>
  );
}

/**
 * L'échelle typographique de la carte, en une seule valeur.
 *
 * Toutes les tailles de la carte sont exprimées en `em` de cette base : la changer met tout
 * à l'échelle d'un coup, interlignes et écarts compris. C'est ce qui permet à la même fiche
 * de tenir sur un écran de 667 points comme sur un de 900 sans qu'on ait à raccourcir le
 * texte pour le plus petit — un plafond de caractères calibré sur l'iPhone SE aurait appauvri
 * la carte partout ailleurs.
 *
 * 16 px au-delà de 844 points de haut, 13 px à 667 : la carte rétrécit, elle ne défile pas.
 */
const CARD_SCALE = "clamp(0.78rem, 0.105rem + 1.695vh, 1rem)";

/**
 * La carte : thème, concept, citation, accroche, résumé, auteur, sources.
 *
 * C'est tout ce que l'application produit. L'approfondissement est délégué — « Approfondir »
 * emporte la carte et ses sources vers l'IA du lecteur, avec un prompt qui demande à celle-ci
 * de tenir l'attribution transmise pour exacte. Ce qui a coûté le plus cher à établir est
 * précisément ce qui empêchera l'IA de partir sur une vulgarisation.
 *
 * L'ordre suit celui de la première version : le thème situe, le concept se nomme, le texte
 * se lit, et **l'auteur signe à la fin**. C'est l'inverse d'une fiche encyclopédique, et
 * c'est délibéré — on découvre un concept, pas une notice d'auteur. La citation, quand elle
 * existe, s'insère avant l'accroche : elle est ce que l'auteur a écrit, la signature qui
 * suit la rattache à son nom.
 */
function ConceptCard({ concept }: { concept: Concept }) {
  const [showSources, setShowSources] = useState(false);
  const sources = concept.sources ?? [];

  return (
    <div
      className="stagger flex max-h-full min-h-0 flex-col gap-[1.6em]"
      style={{ fontSize: CARD_SCALE }}
    >
      <div className="flex flex-col gap-[0.6em]">
        {/* Rendu sous condition, et non laissé vide : une ligne absente ne doit pas laisser
            l'écart qu'elle aurait occupé. */}
        {concept.themeLabel && (
          <p className="text-[0.75em] font-medium uppercase tracking-[0.12em] text-ink-faint">
            {concept.themeLabel}
          </p>
        )}
        <h1 className="font-serif-display text-[1.85em] font-semibold leading-[1.15] text-ink">
          {concept.title}
        </h1>
      </div>

      {/*
       * Les sources prennent la place du texte plutôt que de s'ajouter dessous : c'est ce
       * qui garantit qu'ouvrir les sources ne fait jamais déborder l'écran. On consulte ou
       * on lit, pas les deux à la fois — et le concept reste sous les yeux dans les deux cas.
       */}
      {showSources ? (
        /*
         * Les sources défilent dans leur propre cadre, et elles sont les seules.
         *
         * Cinq notices bibliographiques complètes ne tiennent pas sur un écran de téléphone,
         * et les raccourcir reviendrait à retirer ce qui permet de rouvrir le texte — c'est
         * exactement ce que la carte existe pour donner. Ce qui doit rester fixe est le
         * reste : le concept en tête, la signature et les deux actions au pied ne bougent
         * pas, si bien qu'on ne perd jamais de vue ce qu'on est en train de sourcer.
         */
        <div className="enter-rise flex min-h-0 flex-1 flex-col gap-[0.8em] overflow-y-auto">
          <ConceptSourceList sources={sources} />
          {/*
           * La note d'attribution appartient à la vue des sources, pas à la face de la carte :
           * elle dit ce que le corpus sait de la paternité du concept — coauteurs rétablis,
           * paternité discutée — et redit donc, mot pour mot, ce que la ligne d'auteur affiche
           * déjà. Sur la face, elle coûtait deux lignes pour ne rien apprendre.
           */}
          {concept.attributionNote && (
            <p className="text-[0.8em] leading-relaxed text-ink-faint">
              {concept.attributionNote}
            </p>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-[1.1em]">
          {concept.quotation && <ConceptQuotation quotation={concept.quotation} />}
          <p className="font-serif-display text-[1.15em] leading-snug text-ink">
            {concept.hookQuestion}
          </p>
          <p className="text-[1em] leading-relaxed text-ink-soft">{concept.shortExplanation}</p>
        </div>
      )}

      {concept.authorLabel && (
        <p className="text-[0.94em] text-ink-soft">{concept.authorLabel}</p>
      )}

      {/* Les deux actions sur une même ligne : approfondir se lit d'abord, les sources
          restent à portée sans réclamer l'attention. */}
      <div className="flex items-center gap-5">
        <DeepenButton concept={concept} />
        {sources.length > 0 && (
          <button
            type="button"
            onClick={() => setShowSources((value) => !value)}
            aria-expanded={showSources}
            className="press text-[0.75em] font-medium uppercase tracking-[0.12em] text-ink-faint hover:text-ink"
          >
            {showSources ? "Revenir au concept" : `Sources · ${sources.length}`}
          </button>
        )}
      </div>
    </div>
  );
}
