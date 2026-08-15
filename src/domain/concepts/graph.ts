import type { Concept, ConceptId } from "@/types";

/** Index concept[] par id pour des lookups O(1). Pure, sans dépendance au contenu concret. */
export function indexConcepts(concepts: Concept[]): Map<ConceptId, Concept> {
  return new Map(concepts.map((c) => [c.id, c]));
}

export function getConcept(
  index: Map<ConceptId, Concept>,
  id: ConceptId
): Concept | undefined {
  return index.get(id);
}

/** Vrai si tous les prérequis du concept ont déjà été rencontrés (masteryScore >= 1). */
export function prerequisitesMet(
  concept: Concept,
  masteryByConcept: Map<ConceptId, number>
): boolean {
  return concept.prerequisites.every((id) => (masteryByConcept.get(id) ?? 0) >= 1);
}

export function getRelatedConcepts(
  index: Map<ConceptId, Concept>,
  concept: Concept
): Concept[] {
  return concept.relatedConcepts
    .map((id) => index.get(id))
    .filter((c): c is Concept => Boolean(c));
}

export function getOppositeConcepts(
  index: Map<ConceptId, Concept>,
  concept: Concept
): Concept[] {
  return (concept.oppositeConcepts ?? [])
    .map((id) => index.get(id))
    .filter((c): c is Concept => Boolean(c));
}

export function getPrerequisiteConcepts(
  index: Map<ConceptId, Concept>,
  concept: Concept
): Concept[] {
  return concept.prerequisites
    .map((id) => index.get(id))
    .filter((c): c is Concept => Boolean(c));
}

export function getDeepeningConcepts(
  index: Map<ConceptId, Concept>,
  concept: Concept
): Concept[] {
  return (concept.deepensInto ?? [])
    .map((id) => index.get(id))
    .filter((c): c is Concept => Boolean(c));
}

export function conceptsByAuthor(concepts: Concept[], authorId: string): Concept[] {
  return concepts.filter((c) => c.authors.includes(authorId));
}

export function conceptsByTheme(concepts: Concept[], themeId: string): Concept[] {
  return concepts.filter((c) => c.themes.includes(themeId));
}

/**
 * Concepts reliant deux auteurs déjà rencontrés (même thème ou concepts liés croisés) :
 * sert au moteur pédagogique pour proposer des sessions de connexion/comparaison.
 */
export function sharedThemes(
  themes: string[]
): (a: Concept, b: Concept) => boolean {
  const set = new Set(themes);
  return (a, b) => a.themes.some((t) => set.has(t)) && b.themes.some((t) => set.has(t));
}

export function findBridgeConcepts(
  concepts: Concept[],
  authorIdA: string,
  authorIdB: string
): Concept[] {
  const byA = new Set(conceptsByAuthor(concepts, authorIdA).map((c) => c.id));
  return conceptsByAuthor(concepts, authorIdB).filter((c) =>
    c.relatedConcepts.some((id) => byA.has(id))
  );
}
