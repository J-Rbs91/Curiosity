"use client";

import type { useRouter } from "next/navigation";
import { position, noteGeste } from "@/lib/navigation-position";
import { readTrail, samePath, stepsBackTo } from "@/lib/navigation-tree";
import { withBasePath } from "@/lib/base-path";
import { SCREEN_MOTION } from "@/components/motion/screen-motion";

type Router = ReturnType<typeof useRouter>;

/**
 * Remonter l'arbre — et le seul endroit d'où l'application le fait. `TreeLink` s'en sert
 * pour ses liens de remontée, `EntryPoint` pour quitter une session ; deux implémentations
 * d'un même geste divergent toujours.
 *
 * Dépiler plutôt que naviguer est ce qui maintient l'invariant : la pile reste le chemin de
 * la racine au nœud courant, donc le bouton retour du système continue de remonter l'arbre
 * après ce geste. Une session quittée disparaît de la pile — sans quoi un appui sur retour
 * la ressuscite, terminée ou non.
 *
 * De combien de crans, c'est `stepsBackTo` qui le dit, en soustrayant deux places réelles
 * de la pile. Quand il ne peut pas répondre, on remplace : la pile n'enfle pas, et surtout
 * on n'a pas dépilé au hasard.
 */
export function climbTo(router: Router, href: string): void {
  const chemin = href.split("?")[0];
  const pas = stepsBackTo(readTrail(), chemin, position());

  if (pas === null) {
    /*
     * Nœud absent de la pile, ou places inconnues : arrivée directe par une URL partagée,
     * rechargement, trace écrite par une version antérieure. Dépiler à l'aveugle sortirait
     * de l'application ou tomberait sur un autre écran ; on remplace l'entrée courante.
     */
    noteGeste("remplace");
    router.replace(href, { transitionTypes: SCREEN_MOTION.back });
    return;
  }

  surveille(router, href, chemin);
  /*
   * Une remontée n'emporte aucun type de transition — le navigateur pilote lui-même une
   * traversée. C'est pourquoi l'animation par défaut d'un écran est celle du retour : voir
   * Screen.
   */
  window.history.go(-pas);
}

/** Au-delà, on considère que la traversée n'a pas eu lieu — un document non chargé les ignore. */
const DELAI_TRAVERSEE = 600;

/**
 * Le filet : vérifier qu'on est bien arrivé où le lien l'annonçait, et corriger sinon.
 *
 * Le calcul des crans ne peut plus se tromper tant que les places sont inscrites, mais il
 * n'est pas la seule chose qui puisse manquer : une entrée dont l'état a été réécrit, une
 * traversée refusée parce que le document n'a pas fini de charger, une pile amputée par le
 * navigateur qui en borne la longueur. Aucune de ces situations n'est rattrapable par le
 * raisonnement — elles se constatent après coup, et c'est ce que fait ce contrôle.
 *
 * Il rend la faute impossible plutôt qu'improbable : quel qu'ait été le désaccord entre la
 * trace et la pile, **un retour finit sur ce qu'il a annoncé**. C'est le défaut rapporté —
 * « ← Explorer » qui ramenait sur Aujourd'hui — traité à l'endroit où il se voit.
 */
function surveille(router: Router, href: string, chemin: string): void {
  let fait = false;

  const verifier = () => {
    if (fait) return;
    fait = true;
    window.removeEventListener("popstate", surPop);
    window.clearTimeout(minuteur);
    if (samePath(window.location.pathname, withBasePath(chemin))) return;
    noteGeste("remplace");
    router.replace(href, { transitionTypes: SCREEN_MOTION.back });
  };

  // La traversée est asynchrone : l'adresse n'est à jour qu'après `popstate`, et le tour de
  // boucle suivant laisse au routeur le temps d'en prendre acte.
  const surPop = () => window.setTimeout(verifier, 0);
  const minuteur = window.setTimeout(verifier, DELAI_TRAVERSEE);
  window.addEventListener("popstate", surPop, { once: true });
}
