import type { ConceptId, ProgressState, SeenConcept } from "@/types";
import {
  type ProgressRepository,
  getProgressRepository,
  createEmptyProgressState,
} from "@/repositories/progress.repository";

/**
 * Ce que l'application retient d'un lecteur : les cartes qu'il a déjà vues.
 *
 * Rien d'autre. Il n'y a ni score, ni niveau, ni révision programmée — ce sont des notions
 * de session d'apprentissage, et il n'y en a plus. La seule question à laquelle ce service
 * répond est : *quelle carte n'a-t-il pas encore lue ?*
 */
export class ProgressService {
  constructor(private repository: ProgressRepository = getProgressRepository()) {}

  getState(): ProgressState {
    return this.repository.load();
  }

  seenIds(): Set<ConceptId> {
    return new Set(Object.keys(this.getState().concepts));
  }

  /** Enregistre qu'une carte a été affichée. Idempotent sur la journée, sans y prétendre. */
  recordSeen(conceptId: ConceptId, now: Date = new Date()): SeenConcept {
    const state = this.getState();
    const nowIso = now.toISOString();
    const existing = state.concepts[conceptId];

    const updated: SeenConcept = existing
      ? { ...existing, lastSeenAt: nowIso, encounters: existing.encounters + 1 }
      : { conceptId, firstSeenAt: nowIso, lastSeenAt: nowIso, encounters: 1 };

    this.repository.save({
      ...state,
      concepts: { ...state.concepts, [conceptId]: updated },
    });
    return updated;
  }

  /**
   * Fixe la carte du jour. Appelé une fois par jour civil, au premier affichage.
   *
   * Le `recordSeen` correspondant est fait par l'appelant : voir une carte et retenir
   * laquelle a été tirée aujourd'hui sont deux faits distincts — la seconde survit à un
   * changement de corpus, la première non.
   */
  setDaily(day: string, conceptId: ConceptId): void {
    const state = this.getState();
    this.repository.save({ ...state, daily: { day, conceptId } });
  }

  markFirstLaunchCompleted(): void {
    const state = this.getState();
    this.repository.save({
      ...state,
      settings: { ...state.settings, firstLaunchCompleted: true },
    });
  }

  reset(): void {
    this.repository.save(createEmptyProgressState());
  }
}

let service: ProgressService | null = null;

export function getProgressService(): ProgressService {
  if (!service) service = new ProgressService();
  return service;
}
