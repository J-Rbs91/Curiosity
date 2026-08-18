import type { Concept, ConceptId } from "@/types";
import { composeCorpus } from "@/domain/concepts/corpus";
import { createTaxonomy } from "@/domain/taxonomy";
import { generatedConcepts } from "./generated/concepts.generated";
import { deepenedConceptIds } from "./generated/deepenings-index.generated";
import { fixtureConcepts } from "./fixtures/concepts.fixture";
import { themes } from "./themes";
import { authors } from "./authors";
import { domains, families } from "./taxonomy";

export { themes } from "./themes";
export { authors } from "./authors";
export { domains, families } from "./taxonomy";

/**
 * Les fiches d'échafaudage ne sont pas du contenu : ce sont des données de travail
 * (`fixtures/concepts.fixture.ts`), écrites avant tout dispositif de vérification pour
 * que les écrans puissent être construits. Elles n'atteignent
 * donc jamais un lecteur réel.
 *
 * Le commutateur est explicite plutôt que déduit du seul `NODE_ENV`, pour qu'un build de
 * démonstration puisse les inclure **en le disant**, et pour qu'un build de production ne
 * puisse pas les inclure par accident. `NEXT_PUBLIC_*` est inliné à la compilation : la
 * décision est prise au build, pas à l'exécution, ce qui convient à une PWA statique.
 */
const fixturesRequested = process.env.NEXT_PUBLIC_CORPUS_FIXTURES;
export const fixturesEnabled =
  fixturesRequested === "on" ||
  (fixturesRequested !== "off" && process.env.NODE_ENV !== "production");

/**
 * Le corpus servi à l'application : les fiches validées par le pipeline documentaire,
 * augmentées en développement seulement des fiches d'échafaudage, marquées comme telles.
 *
 * Il peut être vide, et c'est un état légitime tant que l'instruction documentaire n'a pas
 * produit sa première fiche. Les écrans doivent le supporter — remplir le corpus pour
 * éviter un écran vide reviendrait à préférer un contenu faux à un contenu absent.
 */
export const concepts: Concept[] = composeCorpus(generatedConcepts, fixtureConcepts, {
  includeFixtures: fixturesEnabled,
});

/**
 * La taxonomie résolue : le seul objet que les écrans interrogent pour se situer.
 *
 * Elle est construite ici, une fois, sur le corpus effectivement servi — fiches
 * d'échafaudage comprises quand elles le sont. C'est ce qui fait que « ce domaine a-t-il du
 * contenu ? » répond juste dans les deux cas, sans qu'aucun écran n'ait à savoir lequel.
 */
export const taxonomy = createTaxonomy({ families, domains, themes, authors, concepts });

/**
 * Cette carte a-t-elle un approfondissement écrit ?
 *
 * Seuls les identifiants sont chargés ici, jamais les textes : ils pèsent une trentaine de
 * milliers de mots, et l'écran du jour n'a besoin de rien de tout cela pour décider où mène
 * son bouton. Le module qui les porte n'est chargé que par l'écran qui les affiche.
 *
 * La réponse est fausse pour toute fiche d'échafaudage, et elle doit l'être : un texte long
 * écrit sur une carte non vérifiée propagerait l'invérifié au lieu de le contenir.
 */
const deepened = new Set<ConceptId>(deepenedConceptIds);

export function hasDeepening(conceptId: ConceptId): boolean {
  return deepened.has(conceptId);
}
