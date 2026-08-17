"use client";

import type { useRouter } from "next/navigation";
import { readTrail, stepsBackTo } from "@/lib/navigation-tree";
import { SCREEN_MOTION } from "@/components/motion/screen-motion";

type Router = ReturnType<typeof useRouter>;

/**
 * Remonter l'arbre depuis du code impératif — quitter une session, confirmer un
 * effacement. `TreeLink` fait la même chose pour un lien ; les deux passent par
 * ici pour qu'il n'existe qu'une seule façon de remonter.
 *
 * Dépiler plutôt que naviguer est ce qui maintient l'invariant : la pile reste le
 * chemin de la racine au nœud courant, donc le bouton retour du système continue
 * de remonter l'arbre après ce geste. Une session quittée disparaît de la pile —
 * sans quoi un appui sur retour la ressuscite, terminée ou non.
 */
export function climbTo(router: Router, href: string): void {
  const pas = stepsBackTo(readTrail(), href.split("?")[0]);
  if (pas !== null) {
    window.history.go(-pas);
    return;
  }
  // Nœud absent de la pile : dépiler à l'aveugle sortirait de l'application.
  router.replace(href, { transitionTypes: SCREEN_MOTION.back });
}
