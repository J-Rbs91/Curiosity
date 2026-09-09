"use client";

import { useState, useSyncExternalStore } from "react";
import { buildCardShare, shareAsText } from "@/domain/concepts/card-share";
import { absoluteUrl } from "@/lib/base-path";
import { AUDIENCE_EVENTS, countEvent } from "@/lib/analytics";
import type { Concept } from "@/types";

/** Ce que le bouton a à dire du geste précédent — rien, en général. */
type Etat = "repos" | "copie" | "echec";

const LIBELLE: Record<Etat, string> = {
  repos: "Partager",
  copie: "Lien copié",
  echec: "Copie impossible",
};

/**
 * Partager la carte — à quelqu'un, et pas à une IA.
 *
 * C'est le seul chemin par lequel l'application peut se faire connaître : elle n'a ni compte,
 * ni notification, ni fil, et rien de ce qu'un lecteur y fait n'est visible d'un autre. Un
 * concept qui a plu ne peut donc voyager que porté par celui qui l'a lu. Ce que reçoit
 * l'autre bout est une carte à lire et une application à installer — voir `InstallInvitation`,
 * qui l'accueille.
 *
 * **Ici la feuille du système est le bon chemin**, et c'est l'exact inverse de l'arbitrage
 * fait pour « Approfondir » (voir `HandoffButton`) : ce qui part est un message de trois
 * lignes destiné à une personne, pas un dossier de 22 000 caractères destiné à une
 * conversation. La feuille d'Android classe ses cibles par usage et propose donc en premier
 * les messageries — ce qui était le défaut quand on cherchait une IA, et qui est exactement
 * ce qu'il faut quand on cherche quelqu'un.
 *
 * Le presse-papiers reste le repli, pour le navigateur de bureau où `navigator.share`
 * n'existe pas, et pour la feuille refusée. Le lien y est alors **dans** le texte, ce que
 * `shareAsText` fait ; c'est la seule différence entre les deux chemins.
 *
 * Il n'y a pas de troisième état à l'écran, pas de feuille et pas de confirmation : le
 * libellé dit ce qui s'est passé, et un second appui recommence. Un partage réussi par le
 * système ne dit rien du tout — le système l'a déjà dit.
 */
export function ShareButton({ concept }: { concept: Concept }) {
  const [etat, setEtat] = useState<Etat>("repos");

  /*
   * L'existence de la feuille du système est une propriété de l'environnement, pas un état :
   * elle ne change jamais pendant la vie de l'écran, d'où un abonnement vide. Le troisième
   * argument est ce qui compte — la valeur rendue côté serveur, où `navigator` n'existe pas.
   * Sans lui, les deux rendus divergeraient. Même construction que `DeepenSheet`.
   */
  const feuilleSysteme = useSyncExternalStore(
    () => () => {},
    () => typeof navigator !== "undefined" && typeof navigator.share === "function",
    () => false
  );

  async function partager() {
    /*
     * Le geste se compte au départ, avant de savoir par quel chemin il passera : ce qu'on
     * veut savoir est combien de lecteurs partagent une carte, et la feuille du système ne
     * rend pas ce qu'elle en a fait — un partage abouti et un partage annulé lui sont
     * indiscernables.
     */
    countEvent(AUDIENCE_EVENTS.partage);

    const share = buildCardShare({
      concept,
      // L'adresse est résolue ici : l'écran qui porte ce bouton n'a pas à savoir sous quel
      // domaine l'application est servie.
      url: absoluteUrl(`/explore/concept/?c=${encodeURIComponent(concept.slug)}`),
    });

    if (feuilleSysteme) {
      try {
        await navigator.share(share);
        setEtat("repos");
        return;
      } catch (error) {
        // Un partage annulé n'est pas un échec, et n'appelle aucun repli : le lecteur a
        // renoncé, pas buté sur quelque chose.
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(shareAsText(share));
      setEtat("copie");
    } catch {
      setEtat("echec");
    }
  }

  return (
    <button
      type="button"
      onClick={partager}
      /*
       * Le libellé est le seul endroit où la copie se dit, et il faut donc qu'il se dise :
       * un nom accessible qui change sous le doigt n'est pas annoncé de façon fiable, alors
       * qu'une région vivante l'est. C'est ce que `DeepenSheet` obtient avec un `role="status"`
       * séparé ; ici il n'y a rien à séparer — le bouton *est* le message.
       */
      aria-live="polite"
      /*
       * La même construction que « Sources · n » sur la carte : une cible de 44 px obtenue
       * par le remplissage, ramenée au flux du texte par les marges négatives. Un contrôle
       * n'est pas du contenu et ne rapetisse pas avec la carte — sa taille ne suit donc pas
       * `--card-scale`.
       */
      className="press -mx-2 inline-flex min-h-11 items-center px-2 text-xs font-medium uppercase tracking-[0.12em] text-ink-faint hover:text-ink"
    >
      {LIBELLE[etat]}
    </button>
  );
}
