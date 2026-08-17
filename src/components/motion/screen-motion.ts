/**
 * Les sens de circulation du produit. C'est le seul endroit où ils sont nommés :
 * un lien déclare dans quel sens il emmène, `Screen` fait la correspondance vers
 * les classes CSS, et les valeurs de mouvement vivent dans `globals.css`.
 * Voir docs/ux-direction.md.
 *
 * - `deeper` : on descend dans l'arbre (Explorer → auteur → concept).
 * - `lateral` : pas de côté entre frères — onglet, concept voisin. Rien ne
 *   bouge : raconter un déplacement là où il n'y a pas de profondeur
 *   désorienterait plus que le silence.
 * - `back` : remontée d'un niveau. Employé seulement dans le cas de repli où la
 *   remontée ne peut pas se faire en dépilant — sinon la traversée est pilotée
 *   par le navigateur, qui n'emporte aucun type.
 *
 * Ce module ne porte pas `"use client"` : ses valeurs sont lues aussi bien
 * depuis un composant serveur que depuis un composant client.
 */
export type ScreenMotion = "deeper" | "lateral" | "back";

/** Les listes attendues par `<Link transitionTypes>` et `router.push`. */
export const SCREEN_MOTION: Record<ScreenMotion, string[]> = {
  deeper: ["deeper"],
  lateral: ["lateral"],
  back: ["back"],
};

export const SCREEN_MOTION_CLASSES = {
  deeper: "screen-deeper",
  lateral: "none",
  back: "screen-back",
  /*
   * Aucune animation par défaut, et c'est un constat mesuré, pas une préférence.
   *
   * Une navigation sans type déclaré est ici toujours une traversée de
   * l'historique : bouton retour du système, glissement latéral d'iOS,
   * dépilement provoqué par un lien de remontée. Or sur cette version, une
   * traversée **ne déclenche aucune transition de vue** — vérifié en comptant
   * les appels à `document.startViewTransition` : ils augmentent sur un lien
   * descendant, jamais sur un retour. Y placer une classe donnerait une
   * configuration qui ne joue jamais et qui laisserait croire le contraire.
   *
   * Conséquence assumée : une remontée est instantanée. C'est le prix de la
   * correction du sens du retour — la seule façon de garder l'animation aurait
   * été de naviguer au lieu de dépiler, ce qui laisse les entrées plus
   * profondes sous nous et fait redescendre le retour suivant dans l'arbre.
   * Sur iOS le glissement reste animé par le système lui-même.
   */
  default: "none",
} as const;
