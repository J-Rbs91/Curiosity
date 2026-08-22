"use client";

import { useEffect, useState } from "react";
import { taxonomy } from "@/content";
import { getProgressService } from "@/services/progress";
import { dayKey } from "@/domain/concepts/next-card";
import { pastCards } from "@/domain/concepts/past-cards";
import type { Concept } from "@/types";
import { Screen } from "@/components/motion/Screen";
import { BackLink } from "@/components/ui/BackLink";
import { ListRow } from "@/components/ui/ListRow";
import { ScreenSkeleton } from "@/components/ui/ScreenSkeleton";
import { espacesFrancaises } from "@/lib/typographie";

/**
 * Les cartes déjà lues, la plus récente d'abord.
 *
 * **Ce n'est pas un journal, et il n'y a aucune date à l'écran.** Rien n'en est stocké :
 * la mémoire du lecteur est une suite d'identifiants, et l'ordre y dit tout ce qu'une date
 * dirait — voir `ProgressState`. Une date n'aurait d'ailleurs rien à dater : une carte est
 * tirée le jour où l'application s'ouvre, et deux jours sans l'ouvrir ne produisent aucune
 * carte plutôt que deux cartes manquées. Ces deux cartes-là sont encore devant.
 *
 * **La liste est celle des cartes, pas celle des jours.** Le corpus étant fini, une carte
 * revue plus tard remonte en tête au lieu d'y figurer deux fois : on cherche une fiche
 * qu'on a lue, jamais l'occurrence d'une lecture.
 *
 * Chaque ligne mène à la fiche complète — celle d'Explorer, sources dépliées — et non à
 * une reconstitution de la carte du jour : relire, c'est aller au texte, pas rejouer un
 * écran.
 */
export default function PastCardsPage() {
  /*
   * `null` n'est pas la liste vide : c'est « pas encore lue ». La distinction porte
   * l'écran — une liste vide a une phrase à afficher, et l'afficher au premier rendu la
   * ferait clignoter chez tous ceux qui ont bien un historique.
   */
  const [cartes, setCartes] = useState<Concept[] | null>(null);

  useEffect(() => {
    const state = getProgressService().getState();
    /*
     * La carte du jour est écartée de sa propre liste — elle est à un geste de retour, et
     * s'y proposer ferait revenir là d'où l'on vient. Elle ne l'est que si elle est encore
     * celle d'aujourd'hui : le choix de la veille, lui, est bien une carte passée.
     */
    const today = state.daily?.day === dayKey() ? state.daily.conceptId : undefined;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCartes(pastCards(taxonomy.conceptsIn({ kind: "all" }), state.seen, today));
  }, []);

  // La liste vient du `localStorage` : elle n'existe pas au rendu serveur, et cet écran
  // réserve donc sa place plutôt que d'afficher un titre suivi de rien.
  if (cartes === null) return <ScreenSkeleton lines={5} measure="wide" />;

  return (
    <Screen>
      <div className="column column-wide pt-10 pb-12">
        <BackLink />

        <h1 className="mt-6 max-w-title font-serif-display text-2xl font-semibold text-ink">
          Cartes précédentes
        </h1>

        {cartes.length === 0 ? (
          /*
           * Atteignable par l'adresse seule : le lien de la carte du jour ne s'affiche pas
           * tant qu'il n'y a rien ici. La phrase dit pourquoi c'est vide plutôt que de le
           * constater — une liste vide sans raison se lit comme une panne.
           */
          <p className="mt-6 max-w-read text-md leading-relaxed text-ink-soft">
            La carte d&apos;aujourd&apos;hui est la première. Les suivantes se rangeront ici,
            à mesure que vous les ouvrirez.
          </p>
        ) : (
          <>
            {/*
             * Le compte et l'ordre en une phrase, plutôt que le chapeau de liste habituel.
             *
             * Ce chapeau nomme ce qu'une liste contient — « Concepts », « Thèmes » — et il
             * aurait redit ici le titre de l'écran. Ce que le lecteur ignore n'est pas ce
             * qu'il regarde, c'est dans quel sens la liste est rangée : rien à l'écran ne
             * le dit, faute de date, et une liste dont on ne sait pas si elle commence ou
             * finit par hier se parcourt à l'envers une fois sur deux.
             */}
            <p className="mt-3 max-w-read text-sm leading-relaxed text-ink-faint">
              {cartes.length === 1
                ? "Une carte déjà lue."
                : `${cartes.length} cartes déjà lues.`}{" "}
              La plus récente en tête.
            </p>
            <ul className="stagger rows rows-wide" style={{ marginTop: "var(--gap-anchor)" }}>
              {cartes.map((concept) => (
                <ListRow
                  key={concept.id}
                  href={`/explore/concept/?c=${concept.slug}`}
                  title={concept.title}
                  tagline={espacesFrancaises(concept.hookQuestion)}
                  keywords={[concept.themeLabel, concept.authorLabel].filter(
                    (label): label is string => Boolean(label)
                  )}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    </Screen>
  );
}
