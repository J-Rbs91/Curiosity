import type { ProgressState } from "@/types";

const STORAGE_KEY = "curiosity.progress.v2";
const CURRENT_VERSION = 2;

/**
 * Persistance de la progression.
 *
 * La v2 ne conserve que les cartes déjà vues : sans session ni quiz, il n'y a plus de
 * maîtrise à mesurer, plus de révision à programmer, plus d'historique de session à tenir.
 * Les états v1 ne sont pas migrés — ils décrivaient une application qui n'existe plus, et
 * une conversion produirait des données qui n'ont jamais rien signifié.
 */
export function createEmptyProgressState(): ProgressState {
  return {
    version: CURRENT_VERSION,
    concepts: {},
    settings: { firstLaunchCompleted: false },
  };
}

export interface ProgressRepository {
  load(): ProgressState;
  save(state: ProgressState): void;
  clear(): void;
}

function isProgressState(value: unknown): value is ProgressState {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Partial<ProgressState>;
  return (
    typeof v.version === "number" &&
    typeof v.concepts === "object" &&
    v.concepts !== null &&
    typeof v.settings === "object" &&
    v.settings !== null
  );
}

export class LocalStorageProgressRepository implements ProgressRepository {
  load(): ProgressState {
    if (typeof window === "undefined") return createEmptyProgressState();
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return createEmptyProgressState();
      const parsed: unknown = JSON.parse(raw);
      if (!isProgressState(parsed) || parsed.version !== CURRENT_VERSION)
        return createEmptyProgressState();
      return parsed;
    } catch {
      // Un stockage illisible ne doit jamais empêcher l'application de s'ouvrir : on
      // repart à zéro plutôt que d'échouer sur une donnée qui ne vaut de toute façon
      // qu'une liste de cartes déjà vues.
      return createEmptyProgressState();
    }
  }

  save(state: ProgressState): void {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Quota dépassé ou stockage refusé : la carte du jour reste juste, seule la
      // mémoire de ce qui a été vu se perd.
    }
  }

  clear(): void {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(STORAGE_KEY);
  }
}

let repository: ProgressRepository | null = null;

export function getProgressRepository(): ProgressRepository {
  if (!repository) repository = new LocalStorageProgressRepository();
  return repository;
}
