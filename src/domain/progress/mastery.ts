import type { MasteryScore } from "@/types";

/**
 * 0 jamais vu · 1 découvert · 2 reconnu · 3 compris · 4 applicable · 5 maîtrisé
 * Une bonne réponse fait progresser d'un cran (plafonné à 5) ; une mauvaise réponse
 * fait redescendre d'un cran sans jamais repasser sous "découvert" (1), puisque
 * l'utilisateur a bien rencontré le concept au moins une fois.
 */
export function nextMasteryScore(
  current: MasteryScore,
  wasCorrect: boolean
): MasteryScore {
  if (wasCorrect) {
    return Math.min(5, current + 1) as MasteryScore;
  }
  return Math.max(1, current - 1) as MasteryScore;
}

/** Score de première découverte, avant toute question de vérification. */
export const DISCOVERY_MASTERY_SCORE: MasteryScore = 1;

export function isUnderstood(score: MasteryScore): boolean {
  return score >= 3;
}

export function needsReview(score: MasteryScore): boolean {
  return score >= 1 && score <= 2;
}
