/**
 * Répétition espacée simple : Découverte → J+1 → J+4 → J+10 → J+30,
 * puis un palier fixe de 30 jours au-delà (le score de maîtrise, lui,
 * continue d'évoluer via domain/progress/mastery).
 */
const REVIEW_INTERVALS_DAYS = [1, 4, 10, 30];
const STEADY_STATE_INTERVAL_DAYS = 30;

function intervalForEncounter(encounters: number): number {
  const index = Math.max(0, encounters - 1);
  return REVIEW_INTERVALS_DAYS[index] ?? STEADY_STATE_INTERVAL_DAYS;
}

export function computeNextReviewDate(encounters: number, from: Date): Date {
  const days = intervalForEncounter(encounters);
  const next = new Date(from);
  next.setDate(next.getDate() + days);
  return next;
}

export function isReviewDue(nextReviewAt: string | undefined, now: Date): boolean {
  if (!nextReviewAt) return false;
  return new Date(nextReviewAt).getTime() <= now.getTime();
}
