import type { Concept } from "@/types";

/**
 * Fusionne le corpus hérité (`src/content/concepts.ts`, rédigé avant la mise en place du
 * pipeline documentaire) et le corpus projeté (`src/content/generated/`, produit par
 * `npm run corpus:build` à partir de fiches validées).
 *
 * La fusion se fait **par identifiant**, et la fiche vérifiée gagne toujours. C'est ce
 * qui rend la reprise progressive : un concept qui sort validé du pipeline remplace
 * silencieusement son homologue hérité, sans qu'aucune relation du graphe ne se casse,
 * puisque les identifiants sont conservés d'un bout à l'autre.
 *
 * L'ordre du corpus hérité est préservé — un remplacement se fait sur place — et les
 * concepts entièrement nouveaux sont ajoutés à la suite.
 */
export function mergeConcepts(legacy: Concept[], generated: Concept[]): Concept[] {
  const verified = new Map(generated.map((c) => [c.id, c]));
  const merged = legacy.map((c) => verified.get(c.id) ?? c);
  const legacyIds = new Set(legacy.map((c) => c.id));
  return [...merged, ...generated.filter((c) => !legacyIds.has(c.id))];
}
