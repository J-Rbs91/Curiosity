import type { Concept, ConceptId, DailyPick } from "@/types";

/**
 * Le jour civil du lecteur, au format `AAAA-MM-JJ`.
 *
 * Calculé sur l'heure locale et non sur UTC : la carte doit changer quand le lecteur change
 * de jour, pas quand Greenwich en change. À Paris en été, un `toISOString()` aurait fait
 * basculer la carte à 2 h du matin, en pleine soirée pour qui lit tard.
 */
export function dayKey(now: Date = new Date()): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

/**
 * Un entier stable tiré d'une chaîne (FNV-1a, 32 bits).
 *
 * Le tirage du jour doit être *reproductible* : deux ouvertures le même jour, sur le même
 * corpus, doivent rendre la même carte même si la mémoire du lecteur a été effacée entre
 * les deux. Un `Math.random()` ne le permet pas — et c'est précisément ce que faisait la
 * version précédente, qui retirait une carte au hasard à chaque ouverture.
 */
function hash(text: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i += 1) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
}

/**
 * La carte du jour.
 *
 * Une par jour, la même toute la journée, une autre le lendemain. C'est la promesse de
 * l'application, et elle a une conséquence de conception : le choix ne peut pas être refait
 * à chaque ouverture. Il est donc **mémorisé** (`previous`) et, à défaut de mémoire,
 * **reproductible** (tirage indexé sur la date).
 *
 * L'ordre des priorités :
 *
 * 1. Le choix déjà fait aujourd'hui, s'il porte sur une carte qui existe encore. Une fiche
 *    retirée du corpus entre deux ouvertures ne doit pas laisser un écran vide.
 * 2. Une carte jamais vue, tirée par la date.
 * 3. Quand tout a été vu, la plus anciennement rencontrée : le corpus est fini, la
 *    curiosité ne l'est pas.
 *
 * La carte de la veille est écartée tant qu'il reste autre chose à montrer — deux jours de
 * suite sur le même concept donneraient l'impression que l'application est cassée.
 */
export function pickDailyConcept(
  concepts: Concept[],
  seen: Map<ConceptId, string>,
  today: string = dayKey(),
  previous?: DailyPick
): Concept | undefined {
  if (concepts.length === 0) return undefined;

  if (previous?.day === today) {
    const held = concepts.find((c) => c.id === previous.conceptId);
    if (held) return held;
  }

  const eligible = previous ? concepts.filter((c) => c.id !== previous.conceptId) : concepts;
  const pool = eligible.length > 0 ? eligible : concepts;

  const unseen = pool.filter((c) => !seen.has(c.id));
  if (unseen.length > 0) return unseen[hash(today) % unseen.length];

  return [...pool].sort((a, b) => (seen.get(a.id) ?? "").localeCompare(seen.get(b.id) ?? ""))[0];
}
