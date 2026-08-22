"use client";

/**
 * La place réelle de l'écran courant dans la pile d'historique du navigateur.
 *
 * **Le défaut qu'elle corrige.** La remontée dépile — `history.go(-n)` — et le nombre de
 * crans était compté dans la **trace**, c'est-à-dire dans la représentation qu'a
 * l'application du chemin parcouru. Les deux ne coïncident que tant que l'invariant de
 * `navigation-tree.ts` tient : une entrée d'historique par nœud de la trace. Or il ne tient
 * pas toujours. Un remplacement — pas de côté, ou remontée de repli vers un nœud absent de
 * la trace — consomme l'entrée courante sans toucher à celles du dessous, qui restent alors
 * celles d'une autre branche ; la trace, elle, se recompose comme si de rien n'était. À
 * partir de là les deux comptes divergent, et `go(-n)` dépasse : le lien annonce une
 * destination et en atteint une autre, le plus souvent la racine, qui est le fond de la
 * pile. C'est le défaut observé — « ← Explorer » qui ramène sur Aujourd'hui.
 *
 * **Le principe.** Ne plus compter des nœuds, mais soustraire des positions. Chaque entrée
 * d'historique reçoit un numéro de place, écrit dans son `history.state` — qui survit au
 * rechargement, à la mise en veille, et qui revient tel quel quand on retraverse l'entrée.
 * La trace retient ce numéro avec chaque nœud ; la remontée dépile alors exactement
 * `place(courant) − place(cible)` crans, un écart mesuré sur la pile réelle et non sur
 * l'idée qu'on s'en fait.
 *
 * **Ce qu'il faut savoir du geste.** Une entrée neuve ne porte pas encore de numéro, et son
 * numéro dépend de la façon dont on y est arrivé : empiler ouvre une place de plus,
 * remplacer réoccupe la même. Le navigateur ne le dit pas ; l'application, elle, le sait —
 * toute navigation interne passe par `TreeLink`, qui l'annonce ici juste avant de partir.
 * Un geste qui n'est pas le nôtre — bouton retour du système, glissement d'iOS,
 * rechargement, lien partagé — ne s'annonce pas, et n'a pas à le faire : il retombe sur le
 * numéro déjà inscrit dans l'entrée, ou à défaut sur celui que la trace a retenu pour ce
 * chemin.
 */

/** Le nom sous lequel la place est rangée dans `history.state`, à côté de ce qu'y met Next. */
const CLE = "curiosityPosition";

/** Le geste qui a mené à l'écran suivant, annoncé par le lien qui l'a déclenché. */
export type Geste = "empile" | "remplace";

/**
 * La place de la dernière entrée vue. Elle ne sert qu'à numéroter la suivante : l'entrée
 * elle-même porte son numéro, et c'est lui qui fait foi partout ailleurs.
 */
let derniere: number | null = null;
let geste: Geste | null = null;

/** Annonce le geste sur le point d'être fait. Consommé par la synchronisation qui suit. */
export function noteGeste(g: Geste): void {
  geste = g;
}

function etatCourant(): Record<string, unknown> {
  const etat = window.history.state;
  return etat && typeof etat === "object" ? (etat as Record<string, unknown>) : {};
}

/**
 * Numérote l'écran affiché et rend sa place. Appelé une fois par écran, par `TrailKeeper`.
 *
 * `connue` est la place que la trace retient pour ce chemin, s'il l'a déjà été. Elle ne sert
 * que de filet : Next réécrit `history.state` à chaque navigation, et si une réécriture
 * emportait notre numéro, une traversée ultérieure vers cette entrée retomberait sinon sur
 * une place inventée.
 */
export function syncPosition(connue: number | null = null): number {
  if (typeof window === "undefined") return 0;

  const etat = etatCourant();
  const inscrite = etat[CLE];
  if (typeof inscrite === "number") {
    geste = null;
    derniere = inscrite;
    return inscrite;
  }

  const place =
    geste === "empile"
      ? (derniere ?? -1) + 1
      : geste === "remplace"
        ? (derniere ?? 0)
        : (connue ?? derniere ?? 0);

  geste = null;
  derniere = place;
  try {
    window.history.replaceState({ ...etat, [CLE]: place }, "");
  } catch {
    // Une écriture d'état refusée ne casse rien de visible : faute de numéro, la remontée
    // remplace au lieu de dépiler — la pile n'enfle pas, elle cesse seulement de raccourcir.
  }
  return place;
}

/** La place de l'écran courant, sans rien écrire. `null` si elle n'est pas connue. */
export function position(): number | null {
  if (typeof window === "undefined") return null;
  const inscrite = etatCourant()[CLE];
  return typeof inscrite === "number" ? inscrite : derniere;
}
