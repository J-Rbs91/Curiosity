import type { Concept, ConceptId } from "@/types";

/**
 * Choisit la carte à montrer maintenant.
 *
 * Ce qui remplace le moteur pédagogique, et qui tient en une règle : **montrer d'abord ce
 * qui n'a pas été vu.** L'ancien moteur pondérait six types de session, calculait des
 * scores de maîtrise et programmait des révisions ; il servait un produit qui n'existe
 * plus. Ici, il n'y a rien à réviser — il y a des cartes, et l'ordre dans lequel on les
 * rencontre.
 *
 * Quand tout a été vu, on recommence par la plus ancienne : le corpus est fini, la
 * curiosité ne l'est pas.
 */
export function pickNextConcept(
  concepts: Concept[],
  seen: Map<ConceptId, string>,
  currentId?: ConceptId
): Concept | undefined {
  if (concepts.length === 0) return undefined;

  // Ne jamais reproposer la carte affichée à l'instant, sauf si c'est la seule.
  const eligible = concepts.filter((c) => c.id !== currentId);
  const pool = eligible.length > 0 ? eligible : concepts;

  const unseen = pool.filter((c) => !seen.has(c.id));
  if (unseen.length > 0) return unseen[Math.floor(Math.random() * unseen.length)];

  return [...pool].sort((a, b) => (seen.get(a.id) ?? "").localeCompare(seen.get(b.id) ?? ""))[0];
}
