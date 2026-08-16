import { mergeConcepts } from "@/domain/concepts/merge";
import { concepts as legacyConcepts } from "./concepts";
import { generatedConcepts } from "./generated/concepts.generated";

export { themes } from "./themes";
export { authors } from "./authors";
export { caseStudies } from "./case-studies";

/**
 * Le corpus servi à l'application : les fiches héritées, remplacées une à une par les
 * fiches issues du pipeline documentaire à mesure qu'elles sont validées.
 *
 * `concepts.ts` est un pool à drainer, pas une source à enrichir : un nouveau concept
 * passe par `corpus/` (voir docs/corpus-workflow.md), jamais par une addition directe ici.
 */
export const concepts = mergeConcepts(legacyConcepts, generatedConcepts);
