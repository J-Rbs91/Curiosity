import type { Concept, ConceptId } from "@/types";

/**
 * Les cartes déjà rencontrées, la plus récente d'abord — ce que l'écran des cartes
 * passées affiche, et ce que la carte du jour compte pour savoir s'il y a lieu de
 * proposer d'y aller.
 *
 * **Ce n'est pas un calendrier, et c'est le point.** Une carte n'entre dans la mémoire du
 * lecteur qu'au moment où elle s'affiche : deux jours sans ouvrir l'application n'y
 * laissent rien, parce qu'aucune carte n'a été tirée ces jours-là. Ces cartes-là ne sont
 * pas « manquées », elles sont encore devant — le tirage les proposera. Il n'y a donc
 * aucun trou à combler ni aucune date à afficher : la liste est celle de ce qui a été lu,
 * dans l'ordre où ça l'a été.
 *
 * `current` est la carte à l'écran, écartée de sa propre liste : la proposer comme carte
 * passée ferait revenir là où l'on est.
 *
 * Une carte que le corpus ne contient plus est écartée sans bruit. C'est la conséquence de
 * ne stocker que des identifiants — un titre stocké survivrait au retrait de sa fiche, mais
 * il ouvrirait sur une page introuvable, et l'application aurait gardé une copie du corpus
 * pour ne rien pouvoir en montrer.
 */
export function pastCards(
  concepts: Concept[],
  seen: ConceptId[],
  current?: ConceptId
): Concept[] {
  const parId = new Map(concepts.map((c) => [c.id, c] as const));

  const cartes: Concept[] = [];
  for (let i = seen.length - 1; i >= 0; i -= 1) {
    const id = seen[i];
    if (id === current) continue;
    const concept = parId.get(id);
    if (concept) cartes.push(concept);
  }
  return cartes;
}
