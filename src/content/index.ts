import type { Concept } from "@/types";
import { composeCorpus } from "@/domain/concepts/corpus";
import { generatedConcepts } from "./generated/concepts.generated";
import { fixtureConcepts } from "./fixtures/concepts.fixture";

export { themes } from "./themes";
export { authors } from "./authors";

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
