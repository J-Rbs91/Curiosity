import type {
  ProgressState,
  UserConceptProgress,
  SessionRecord,
  UserSettings,
  ConceptId,
  MasteryScore,
} from "@/types";
import {
  type ProgressRepository,
  getProgressRepository,
  createEmptyProgressState,
} from "@/repositories/progress.repository";
import { nextMasteryScore, DISCOVERY_MASTERY_SCORE } from "@/domain/progress/mastery";
import { computeNextReviewDate } from "@/services/spaced-repetition";

/**
 * Service de progression : orchestre le repository et la logique pure de domain/.
 * C'est la seule couche que les composants React doivent appeler pour lire/écrire
 * la progression utilisateur.
 */
export class ProgressService {
  constructor(private repository: ProgressRepository = getProgressRepository()) {}

  getState(): ProgressState {
    return this.repository.load();
  }

  getConceptProgress(conceptId: ConceptId): UserConceptProgress | undefined {
    return this.getState().concepts[conceptId];
  }

  getAllProgress(): UserConceptProgress[] {
    return Object.values(this.getState().concepts);
  }

  /** Première rencontre d'un concept (session discovery), avant toute question de vérification. */
  recordDiscovery(conceptId: ConceptId, now: Date = new Date()): UserConceptProgress {
    const state = this.getState();
    const nowIso = now.toISOString();
    const existing = state.concepts[conceptId];

    const updated: UserConceptProgress = existing
      ? { ...existing, lastSeenAt: nowIso, encounters: existing.encounters + 1 }
      : {
          conceptId,
          discoveredAt: nowIso,
          lastSeenAt: nowIso,
          encounters: 1,
          masteryScore: DISCOVERY_MASTERY_SCORE,
          correctAnswers: 0,
          incorrectAnswers: 0,
          nextReviewAt: computeNextReviewDate(1, now).toISOString(),
        };

    const nextState: ProgressState = {
      ...state,
      concepts: { ...state.concepts, [conceptId]: updated },
    };
    this.repository.save(nextState);
    return updated;
  }

  /** Rencontre d'un concept sans question de vérification (ex. concept secondaire d'une session connection). */
  recordEncounter(conceptId: ConceptId, now: Date = new Date()): UserConceptProgress {
    const state = this.getState();
    const nowIso = now.toISOString();
    const existing = state.concepts[conceptId];

    const updated: UserConceptProgress = existing
      ? { ...existing, lastSeenAt: nowIso, encounters: existing.encounters + 1 }
      : {
          conceptId,
          discoveredAt: nowIso,
          lastSeenAt: nowIso,
          encounters: 1,
          masteryScore: DISCOVERY_MASTERY_SCORE,
          correctAnswers: 0,
          incorrectAnswers: 0,
          nextReviewAt: computeNextReviewDate(1, now).toISOString(),
        };

    const nextState: ProgressState = {
      ...state,
      concepts: { ...state.concepts, [conceptId]: updated },
    };
    this.repository.save(nextState);
    return updated;
  }

  /** Réponse à une question de vérification : met à jour le score de maîtrise et programme la prochaine révision. */
  recordAnswer(
    conceptId: ConceptId,
    wasCorrect: boolean,
    now: Date = new Date()
  ): UserConceptProgress {
    const state = this.getState();
    const nowIso = now.toISOString();
    const existing = state.concepts[conceptId];

    const currentMastery: MasteryScore = existing?.masteryScore ?? DISCOVERY_MASTERY_SCORE;
    const encounters = (existing?.encounters ?? 0) + 1;

    const updated: UserConceptProgress = {
      conceptId,
      discoveredAt: existing?.discoveredAt ?? nowIso,
      lastSeenAt: nowIso,
      encounters,
      masteryScore: nextMasteryScore(currentMastery, wasCorrect),
      nextReviewAt: computeNextReviewDate(encounters, now).toISOString(),
      correctAnswers: (existing?.correctAnswers ?? 0) + (wasCorrect ? 1 : 0),
      incorrectAnswers: (existing?.incorrectAnswers ?? 0) + (wasCorrect ? 0 : 1),
    };

    const nextState: ProgressState = {
      ...state,
      concepts: { ...state.concepts, [conceptId]: updated },
    };
    this.repository.save(nextState);
    return updated;
  }

  recordSession(record: SessionRecord): void {
    const state = this.getState();
    const nextState: ProgressState = {
      ...state,
      sessionHistory: [...state.sessionHistory, record].slice(-200),
    };
    this.repository.save(nextState);
  }

  updateSettings(partial: Partial<UserSettings>): UserSettings {
    const state = this.getState();
    const settings = { ...state.settings, ...partial };
    this.repository.save({ ...state, settings });
    return settings;
  }

  markFirstLaunchCompleted(): void {
    this.updateSettings({ firstLaunchCompleted: true });
  }

  resetAll(): ProgressState {
    this.repository.reset();
    const empty = createEmptyProgressState();
    this.repository.save(empty);
    return empty;
  }
}

let singleton: ProgressService | null = null;

export function getProgressService(): ProgressService {
  if (!singleton) singleton = new ProgressService();
  return singleton;
}
