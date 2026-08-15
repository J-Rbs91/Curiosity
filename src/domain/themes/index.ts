import type { Theme, Concept, UserConceptProgress, Author } from "@/types";
import { conceptsByTheme } from "@/domain/concepts/graph";
import { isUnderstood } from "@/domain/progress/mastery";

export interface ThemeProgress {
  theme: Theme;
  totalConcepts: number;
  encountered: number;
  understood: number;
  ratio: number;
  contributingAuthors: Author[];
}

export function computeThemeProgress(
  theme: Theme,
  concepts: Concept[],
  authors: Author[],
  progressByConcept: Map<string, UserConceptProgress>
): ThemeProgress {
  const themeConcepts = conceptsByTheme(concepts, theme.id);
  let encountered = 0;
  let understood = 0;
  const authorIds = new Set<string>();

  for (const concept of themeConcepts) {
    const progress = progressByConcept.get(concept.id);
    if (progress && progress.masteryScore >= 1) encountered += 1;
    if (progress && isUnderstood(progress.masteryScore)) understood += 1;
    concept.authors.forEach((id) => authorIds.add(id));
  }

  const totalConcepts = themeConcepts.length;
  return {
    theme,
    totalConcepts,
    encountered,
    understood,
    ratio: totalConcepts === 0 ? 0 : understood / totalConcepts,
    contributingAuthors: authors.filter((a) => authorIds.has(a.id)),
  };
}

export function computeAllThemesProgress(
  themes: Theme[],
  concepts: Concept[],
  authors: Author[],
  progressByConcept: Map<string, UserConceptProgress>
): ThemeProgress[] {
  return themes.map((t) => computeThemeProgress(t, concepts, authors, progressByConcept));
}
