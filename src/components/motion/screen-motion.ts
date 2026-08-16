/**
 * Les quatre sens de circulation du produit. C'est le seul endroit où ils sont
 * nommés : un lien déclare dans quel sens il emmène, `Screen` fait la
 * correspondance vers les classes CSS, et les valeurs de mouvement vivent dans
 * `globals.css`. Voir docs/ux-direction.md.
 *
 * - `deeper` : on descend dans le corpus (Explorer → auteur → concept).
 * - `back` : on remonte d'un niveau.
 * - `enterSession` / `leaveSession` : la session d'apprentissage monte
 *   par-dessus l'application, et repart par où elle est venue.
 *
 * Le passage d'un onglet principal à un autre n'est volontairement pas dans
 * cette liste : ce sont trois destinations de même niveau, pas une hiérarchie.
 * Les faire glisser reviendrait à raconter une profondeur qui n'existe pas, et
 * à payer une transition plusieurs fois par session pour rien.
 *
 * Ce module ne porte pas `"use client"` : ses valeurs sont lues aussi bien
 * depuis un composant serveur que depuis un composant client.
 */
export type ScreenMotion = "deeper" | "back" | "enterSession" | "leaveSession";

/** Les listes attendues par `<Link transitionTypes>` et `router.push`. */
export const SCREEN_MOTION: Record<ScreenMotion, string[]> = {
  deeper: ["deeper"],
  back: ["back"],
  enterSession: ["enterSession"],
  leaveSession: ["leaveSession"],
};

export const SCREEN_MOTION_CLASSES = {
  deeper: "screen-deeper",
  back: "screen-back",
  enterSession: "screen-enter-session",
  leaveSession: "screen-leave-session",
  /*
   * Sans type déclaré — retour navigateur, rafraîchissement, changement
   * d'onglet principal — aucune direction n'est connue, donc rien ne bouge.
   * Inventer un sens serait pire que de n'en montrer aucun.
   */
  default: "none",
} as const;
