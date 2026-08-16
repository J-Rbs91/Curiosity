import type { Concept } from "@/types";

/**
 * Compose le corpus servi à l'application.
 *
 * Deux natures de données s'y croisent, et elles ne sont pas de même rang. Les fiches
 * **vérifiées** sortent du pipeline documentaire : chacune a une source primaire
 * localisée et est passée par un contrôle indépendant. Les fiches **d'échafaudage** ont
 * été écrites de mémoire pour construire l'application, avant qu'aucun de ces contrôles
 * n'existe.
 *
 * D'où l'asymétrie assumée de cette fonction : les vérifiées passent toujours et en
 * premier, les autres ne passent que si on les a explicitement demandées, portent une
 * marque, et disparaissent dès que le concept correspondant a été instruit. Il n'y a pas
 * de fusion champ par champ entre les deux : une fiche d'échafaudage n'est pas une
 * version antérieure d'une fiche vérifiée, c'est un objet d'une autre nature.
 */
export function composeCorpus(
  verified: Concept[],
  fixtures: Concept[],
  { includeFixtures }: { includeFixtures: boolean }
): Concept[] {
  if (!includeFixtures) return verified;

  const verifiedIds = new Set(verified.map((c) => c.id));
  const scaffolding = fixtures
    .filter((c) => !verifiedIds.has(c.id))
    .map((c) => ({ ...c, provenance: "fixture" as const }));

  return [...verified, ...scaffolding];
}
