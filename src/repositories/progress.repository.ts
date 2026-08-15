import type { ProgressState, UserConceptProgress, SessionRecord, UserSettings } from "@/types";

const STORAGE_KEY = "curiosity.progress.v1";
const CURRENT_VERSION = 1;

export const DEFAULT_SETTINGS: UserSettings = {
  explanationLevel: "standard",
  preferredDuration: 5,
  firstLaunchCompleted: false,
};

export function createEmptyProgressState(): ProgressState {
  return {
    version: CURRENT_VERSION,
    concepts: {},
    settings: { ...DEFAULT_SETTINGS },
    sessionHistory: [],
  };
}

/**
 * Interface de persistance de la progression. Le reste de l'application ne connaît
 * que cette interface : remplacer localStorage par Supabase/Postgres plus tard ne
 * demandera qu'une nouvelle implémentation, sans toucher services/ ni components/.
 */
export interface ProgressRepository {
  load(): ProgressState;
  save(state: ProgressState): void;
  reset(): void;
}

function isValidProgressState(value: unknown): value is ProgressState {
  if (!value || typeof value !== "object") return false;
  const v = value as Partial<ProgressState>;
  return (
    typeof v.version === "number" &&
    typeof v.concepts === "object" &&
    v.concepts !== null &&
    Array.isArray(v.sessionHistory) &&
    typeof v.settings === "object" &&
    v.settings !== null
  );
}

/** Implémentation localStorage. Tolère données absentes, corrompues, ou venant d'un environnement sans window (SSR). */
export class LocalStorageProgressRepository implements ProgressRepository {
  private cache: ProgressState | null = null;

  load(): ProgressState {
    if (this.cache) return this.cache;

    if (typeof window === "undefined") {
      return createEmptyProgressState();
    }

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        this.cache = createEmptyProgressState();
        return this.cache;
      }
      const parsed = JSON.parse(raw) as unknown;
      if (!isValidProgressState(parsed)) {
        this.cache = createEmptyProgressState();
        return this.cache;
      }
      this.cache = migrateIfNeeded(parsed);
      return this.cache;
    } catch {
      this.cache = createEmptyProgressState();
      return this.cache;
    }
  }

  save(state: ProgressState): void {
    this.cache = state;
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Stockage indisponible (mode privé, quota dépassé...) : on continue en mémoire.
    }
  }

  reset(): void {
    this.cache = createEmptyProgressState();
    if (typeof window === "undefined") return;
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }
}

function migrateIfNeeded(state: ProgressState): ProgressState {
  if (state.version === CURRENT_VERSION) return state;
  return { ...createEmptyProgressState(), ...state, version: CURRENT_VERSION };
}

export type { UserConceptProgress, SessionRecord };

let singleton: ProgressRepository | null = null;

/** Point d'accès unique utilisé par la couche services. */
export function getProgressRepository(): ProgressRepository {
  if (!singleton) {
    singleton = new LocalStorageProgressRepository();
  }
  return singleton;
}
