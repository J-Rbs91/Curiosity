"use client";

import { useEffect, useState } from "react";
import { taxonomy } from "@/content";
import { getProgressService } from "@/services/progress";
import { dayKey, pickDailyConcept } from "@/domain/concepts/next-card";
import { onReentry, takeOpening } from "@/lib/app-entry";
import type { Concept } from "@/types";
import { Screen } from "@/components/motion/Screen";
import { Button } from "@/components/ui/Button";
import { ConceptQuotation } from "@/components/concept/ConceptQuotation";
import { ConceptSourceList } from "@/components/concept/ConceptSources";
import { DeepenButton } from "@/components/ui/DeepenButton";
import { Wordmark } from "@/components/ui/Wordmark";
import { ScreenSkeleton } from "@/components/ui/ScreenSkeleton";

/**
 * La hauteur d'un écran, barre de navigation déduite.
 *
 * `AppShell` réserve déjà la hauteur de la barre en remplissage bas : un enfant en `100svh`
 * occupe donc exactement un écran. C'est un plancher, pas une hauteur fixe : `CARD_SCALE`
 * garde la carte courante compacte, mais rien ne garantit qu'une carte tienne toujours sans
 * défiler — et la forcer à tenir en rétrécissant encore le texte coûterait plus cher que le
 * défilement qu'on lui refuserait. Le plancher fait que la carte reste centrée quand elle
 * tient, et que la page défile plutôt que de perdre silencieusement son bas quand elle ne
 * tient pas.
 */
const SCREEN_HEIGHT = "calc(100svh - var(--nav-height) - env(safe-area-inset-bottom))";

export default function TodayPage() {
  const [mounted, setMounted] = useState(false);
  const [ouverture, setOuverture] = useState(false);
  const [concept, setConcept] = useState<Concept | undefined>(undefined);

  useEffect(() => {
    const tirer = () => {
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
      // Lecture localStorage et tirage de la carte : impossibles pendant le rendu serveur.
      setConcept(next);
      setMounted(true);
      if (next) {
        // Le tirage du jour est arrêté ici et pas ailleurs : rouvrir l'application dans
        // l'heure doit redonner la même carte, y compris après un changement de corpus.
        if (state.daily?.day !== today || state.daily.conceptId !== next.id)
          service.setDaily(today, next.id);
        service.recordSeen(next.id);
      }
    };

    /*
     * L'accueil s'interpose quand une ouverture est en attente, et il la consomme. Il ne
     * s'interpose donc pas quand on arrive ici depuis Explorer : ce serait une taxe sur
     * chaque changement d'onglet, sur l'écran qu'on vient justement voir.
     */
    const ouvrir = () => {
      if (takeOpening()) setOuverture(true);
    };

    tirer();
    ouvrir();
    /*
     * Et à chaque réouverture, pas seulement au montage. Une application installée est mise
     * en arrière-plan bien plus souvent qu'elle n'est fermée : quand la réouverture trouve
     * cet écran déjà affiché, rien ne se remonte, et la carte de la veille resterait à
     * l'écran alors que le jour a changé. Le critère de réouverture est dans `app-entry.ts`.
     */
    return onReentry(() => {
      tirer();
      ouvrir();
    });
  }, []);

  /*
  * Le tirage a besoin du `localStorage`, qui n'existe pas au rendu serveur : cet écran
  * n'a donc rien à pré-rendre. Il montrait un bloc vide ; il montre la place que la carte
  * va prendre, ce qui distingue une attente d'une panne.
  */
  if (!mounted) return <ScreenSkeleton lines={4} />;

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
          style={{ minHeight: SCREEN_HEIGHT }}
        >
          <h1 className="font-serif-display text-2xl font-semibold leading-tight text-ink">
            Le corpus est en cours de constitution.
          </h1>
          <p className="text-md leading-relaxed text-ink-soft">
            Aucun concept n&apos;a encore terminé son instruction documentaire. Rien ne
            s&apos;affichera ici tant qu&apos;une carte n&apos;aura pas été établie sur ses
            sources.
          </p>
        </div>
      </Screen>
    );
  }

  /*
   * L'accueil, à chaque ouverture de l'application — et non plus au seul premier lancement.
   *
   * Ce n'est pas un écran de présentation qu'on aurait laissé traîner : c'est le seuil. On
   * ouvre l'application pour une carte et une seule, et la franchir volontairement est ce
   * qui fait la différence entre consulter et tomber dessus. La phrase qui s'y lit le dit
   * depuis toujours — « à chaque ouverture ».
   *
   * Ce qui le rend supportable tous les jours est ailleurs, dans `app-entry.ts` : une
   * ouverture n'est pas un retour au premier plan. Revenir de ses messages au bout de dix
   * secondes ne le rejoue pas, et aller d'Explorer à Aujourd'hui non plus.
   */
  if (ouverture) {
    return (
      <Screen>
        <div
          className="stagger mx-auto flex max-w-md flex-col justify-center gap-10 px-6"
          style={{ minHeight: SCREEN_HEIGHT }}
        >
          {/*
           * Le seul endroit de l'application où la marque se montre, et le seul où son regard
           * joue. Ailleurs, l'écran ne porte que ce qu'il y a à comprendre — c'est la décision
           * du §5 de `docs/ux-direction.md`, et une signature en en-tête permanent la casserait
           * pour ne rien apprendre à personne. Ici, on se présente ; ailleurs, jamais.
           */}
          <Wordmark animate className="text-[2.125rem] text-ink" />
          {/*
           * Le surtitre nomme le champ, le titre nomme ce qu'on y couvre.
           *
           * Il ne nomme plus une discipline — « sociologie des organisations » l'était, et
           * elle n'est plus qu'un domaine sur onze. « Les sciences de l'action organisée »
           * nomme ce que les onze ont en commun, ce qui reste vrai à mesure que le corpus
           * s'ouvre. Le surtitre est groupé avec le titre plutôt que posé en enfant direct
           * de la colonne : à `gap-10`, il en serait détaché au point de ne plus se lire
           * comme sa ligne de tête.
           */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">
              Les sciences de l&apos;action organisée
            </p>
            <h1 className="font-serif-display text-xl font-semibold leading-tight text-ink">
              Sciences du travail, des organisations et des systèmes
            </h1>
          </div>
          <p className="text-md leading-relaxed text-ink-soft">
            Une exploration interdisciplinaire des sciences du travail, des organisations et
            des systèmes.
          </p>
          {/*
           * Le libellé nomme ce qu'on obtient, pas l'action qu'on exécute. « Commencer »
           * convenait à un écran de première fois — il ouvrait l'application. Au seuil de
           * chaque ouverture, il ne dit plus rien de ce qui attend derrière, alors que
           * c'est précisément la seule chose que le lecteur vient chercher.
           */}
          <Button onClick={() => setOuverture(false)} className="w-fit">
            Concept du jour
          </Button>
        </div>
      </Screen>
    );
  }

  return (
    <Screen>
      {/*
       * Le titre, l'accroche, le résumé et la citation restent plafonnés en longueur par le
       * validateur du corpus : la carte reste courte par construction, et non parce que
       * l'écran refuserait de défiler pour la montrer en entier.
       */}
      <div
        className="mx-auto flex max-w-md flex-col justify-center px-6 py-6"
        style={{ minHeight: SCREEN_HEIGHT }}
      >
        {/*
         * Le même surtitre qu'au seuil, et pour la même raison : la carte du jour peut venir
         * de n'importe lequel des onze domaines, et rien d'autre sur cet écran ne dit de quel
         * champ elle relève. Il se distingue du libellé de thème qui ouvre la carte par sa
         * place — hors du cadre de la carte, au-dessus d'elle — et par son échelle, qui est
         * celle de l'écran et non celle de la carte : `CARD_SCALE` ne le fait pas rétrécir.
         */}
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">
          Les sciences de l&apos;action organisée
        </p>
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
 * **La pente a été redressée** : la borne haute est désormais atteinte vers 716 points au
 * lieu de 844, et un écran de 667 rend 15,0 px au lieu de 13,0. Mesuré sur l'ancien
 * réglage, le résumé — le texte qu'on vient lire — tombait à 13,0 px, le libellé de thème
 * et la référence de citation à 9,7 px, les notices de sources à 10,4 px : l'écran vu tous
 * les jours était celui où l'on lisait le plus petit, sur une application dont c'est la
 * seule fonction.
 *
 * La place gagnée vient de la légende de citation, qui occupait cinq lignes et repart aux
 * sources — voir `ConceptQuotation`.
 *
 * **Le plancher, lui, n'a presque pas bougé, et c'est mesuré.** Sur un écran de 320 × 568,
 * la plus grande base à laquelle la carte tient encore sans défiler est de 13 px : c'est
 * elle qui commande le plancher, pas le confort de lecture. Un plancher plus généreux
 * ferait défiler la carte sur ce petit écran plus souvent qu'il ne le faudrait — et il
 * l'avait fait : la première version de ce réglage faisait déborder cet écran-là de 168 px.
 * Le défilement de page reste le filet pour les cartes que ce plancher ne suffit pas à
 * caler (voir `SCREEN_HEIGHT`) : la carte n'a plus à rétrécir jusqu'à l'illisible pour
 * tenir coûte que coûte.
 *
 * | Écran | Base rendue | Base maximale qui tient |
 * |---|---|---|
 * | 320 × 568 | 12,8 px | 13 px |
 * | 360 × 640 | 14,4 px | 15 px |
 * | 375 × 667 | 15,0 px | 15,75 px |
 * | 390 × 844 | 16,0 px | 17 px |
 *
 * La base reste en rem, donc indexée sur la préférence de taille de police du lecteur.
 */
const CARD_SCALE = "clamp(0.8rem, 0.01rem + 2.222vh, 1rem)";

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
 * c'est délibéré — on découvre un concept, pas une notice d'auteur.
 *
 * **L'accroche passe devant la citation.** Elle est la question que la carte pose, écrite
 * pour être lue en premier ; la citation est la réponse de l'auteur, et une réponse placée
 * avant sa question se lit comme une épigraphe dont on ne sait pas encore quoi faire.
 * L'enchaînement va désormais de la question à la parole d'auteur puis à l'explication, et
 * le bloc citaire — encadré, sa légende en petit — ne s'interpose plus entre le titre et la
 * phrase qui l'ouvre : le haut de la carte reste du texte qui se lit d'un trait.
 */
function ConceptCard({ concept }: { concept: Concept }) {
  const [showSources, setShowSources] = useState(false);
  const sources = concept.sources ?? [];

  return (
    <div
      className="stagger flex min-h-0 flex-col gap-[1.6em]"
      /*
       * Le plafond de hauteur ne vaut que pour la vue des sources : c'est lui qui force le
       * défilement à rester interne à cette vue (voir plus bas). Sur la face de la carte, il
       * n'y en a pas — si le contenu dépasse un écran, c'est la page qui défile plutôt que le
       * bas de la carte qui devient inaccessible.
       */
      style={{ fontSize: CARD_SCALE, maxHeight: showSources ? SCREEN_HEIGHT : undefined }}
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
          <p className="font-serif-display text-[1.15em] leading-snug text-ink">
            {concept.hookQuestion}
          </p>
          {concept.quotation && <ConceptQuotation quotation={concept.quotation} compact />}
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
          /*
           * La taille de ce bouton ne suit pas `CARD_SCALE`, et sa hauteur minimale est
           * celle du reste de l'application.
           *
           * Il mesurait 74 × 15 px sur un écran de 667 points — sous le seuil de 24 px
           * de WCAG 2.5.8, et loin des 44 px recommandés au doigt — parce qu'il n'avait
           * ni remplissage ni hauteur propre : sa taille était celle de son texte, lequel
           * rétrécissait avec la carte. Or « Revenir au concept » est le seul moyen de
           * quitter la vue des sources. Un contrôle n'est pas du contenu : il n'a pas à
           * rapetisser avec lui, et « Approfondir » ne le faisait déjà pas.
           */
          <button
            type="button"
            onClick={() => setShowSources((value) => !value)}
            aria-expanded={showSources}
            className="press -mx-2 inline-flex min-h-11 items-center px-2 text-xs font-medium uppercase tracking-[0.12em] text-ink-faint hover:text-ink"
          >
            {showSources ? "Revenir au concept" : `Sources · ${sources.length}`}
          </button>
        )}
      </div>
    </div>
  );
}
