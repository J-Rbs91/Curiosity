/**
 * Les sens de circulation du produit. C'est le seul endroit où ils sont nommés :
 * un lien déclare dans quel sens il emmène, `Screen` fait la correspondance vers
 * les classes CSS, et les valeurs de mouvement vivent dans `globals.css`.
 * Voir docs/ux-direction.md.
 *
 * - `deeper` : on descend dans l'arbre (Explorer → auteur → concept).
 * - `lateral` : pas de côté entre frères — onglet, concept voisin. L'écran ne
 *   bouge pas : raconter un changement de lieu là où il n'y a pas de
 *   profondeur désorienterait plus que le silence.
 * - `back` : remontée d'un niveau. Employé seulement dans le cas de repli où la
 *   remontée ne peut pas se faire en dépilant — sinon la traversée est pilotée
 *   par le navigateur, qui n'emporte aucun type.
 *
 * Un pas de côté peut porter un **sens** en plus de son intention, et c'est un
 * second axe, pas un quatrième sens de circulation : voir `LateralMotion`.
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

/**
 * Le sens d'un pas de côté, quand la surface qui l'offre en connaît un.
 *
 * L'intention, elle, ne se déclare jamais à la main : elle se déduit de la
 * comparaison des niveaux, et c'est ce qui empêche un écran d'oublier comment
 * on en sort. Le sens ne peut pas se déduire de la même façon — rien dans
 * l'arbre ne dit que « Domaines » est à gauche d'« Auteurs ». Cet ordre est une
 * propriété de la barre d'onglets, et elle seule peut le dire.
 *
 * D'où un axe séparé : `lateral` reste porté par le type, et le sens s'y ajoute
 * quand il existe. Un pas de côté qui n'en porte pas — un concept voisin, où
 * aucun ordre n'est affiché — se comporte exactement comme avant.
 */
export type LateralMotion = "next" | "prev";

/** Les listes attendues par `<Link transitionTypes>`, sens compris. */
export const LATERAL_MOTION: Record<LateralMotion, string[]> = {
  next: ["lateral", "lateral-next"],
  prev: ["lateral", "lateral-prev"],
};

/**
 * Ce que le contenu d'une coupe joue selon le sens du pas — et rien sans sens.
 *
 * `SCREEN_MOTION_CLASSES` porte `lateral: "none"` et le reconnaît en premier :
 * l'écran reste donc immobile pendant qu'une coupe se remplace, ce qui est le
 * point. Seul le contenu bouge, et il bouge dans le sens où l'onglet vient de
 * se déplacer.
 */
export const LATERAL_MOTION_CLASSES = {
  "lateral-next": "lateral-next",
  "lateral-prev": "lateral-prev",
  default: "none",
} as const;

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
