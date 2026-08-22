"use client";

import { useSyncExternalStore } from "react";

/** La préférence système, telle que le navigateur l'expose. */
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/*
 * Rien à surveiller : la préférence est lue une fois, à l'ouverture de l'écran qui la
 * demande.
 *
 * C'est un choix et non un oubli. Le mouvement réduit est une propriété de
 * l'environnement, pas un état qui change pendant qu'on regarde — et les deux endroits qui
 * l'interrogent s'en servent pour décider s'ils **jouent** quelque chose, pas pour décider
 * de quoi a l'air ce qu'ils jouent. Une bascule en cours de séquence ne rendrait pas
 * l'écran plus conforme : elle l'interromprait au milieu.
 *
 * L'abonnement est donc un désabonnement immédiat, et la fonction est déclarée une fois
 * plutôt qu'à chaque rendu — `useSyncExternalStore` réabonne à chaque changement
 * d'identité de celle qu'on lui passe.
 */
const NEVER_CHANGES = () => () => {};

/** Au rendu serveur, on suppose l'absence de préférence : c'est l'état de la majorité. */
const SERVER_SNAPSHOT = () => false;

const clientSnapshot = () => window.matchMedia(REDUCED_MOTION_QUERY).matches;

/**
 * `prefers-reduced-motion: reduce`, pour ce qui doit être **sauté** et non ralenti.
 *
 * La feuille de style suffit à tout le reste : les entrées sont déclarées en
 * `no-preference` et le repli global ramène toute animation à une durée nulle. Ce qu'elle ne
 * sait pas faire est ce que deux endroits du produit demandent — retirer un moment au lieu
 * de l'accélérer :
 *
 * — l'attente d'« Approfondir », qui ne serait plus qu'un délai devant un texte prêt (§6 de
 *   `docs/ux-direction.md`) ;
 * — le clignement du seuil, dont il ne resterait qu'un voile qui apparaît et disparaît sans
 *   rien porter (§7).
 *
 * Dans les deux cas, la machine à états doit sauter l'étape, ce qui est une décision de
 * JavaScript. D'où ce point unique : deux `useSyncExternalStore` recopiés auraient fini par
 * différer sur la valeur rendue côté serveur, qui est la seule des trois qu'on ne voit pas
 * en développant.
 */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(NEVER_CHANGES, clientSnapshot, SERVER_SNAPSHOT);
}
