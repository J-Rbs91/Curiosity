import type { Author, Concept, UserConceptProgress } from "@/types";
import { conceptsByAuthor } from "@/domain/concepts/graph";
import { isUnderstood } from "@/domain/progress/mastery";

export interface AuthorProgress {
  author: Author;
  totalConcepts: number;
  encountered: number;
  understood: number;
  /** 0..1 */
  ratio: number;
}

export function computeAuthorProgress(
  author: Author,
  concepts: Concept[],
  progressByConcept: Map<string, UserConceptProgress>
): AuthorProgress {
  const authorConcepts = conceptsByAuthor(concepts, author.id);
  let encountered = 0;
  let understood = 0;

  for (const concept of authorConcepts) {
    const progress = progressByConcept.get(concept.id);
    if (progress && progress.masteryScore >= 1) encountered += 1;
    if (progress && isUnderstood(progress.masteryScore)) understood += 1;
  }

  const totalConcepts = authorConcepts.length;
  return {
    author,
    totalConcepts,
    encountered,
    understood,
    ratio: totalConcepts === 0 ? 0 : understood / totalConcepts,
  };
}

export function computeAllAuthorsProgress(
  authors: Author[],
  concepts: Concept[],
  progressByConcept: Map<string, UserConceptProgress>
): AuthorProgress[] {
  return authors.map((a) => computeAuthorProgress(a, concepts, progressByConcept));
}
