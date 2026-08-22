import type { ConceptId, ProgressState } from "@/types";

const STORAGE_KEY = "curiosity.progress.v3";
const LEGACY_KEY_V2 = "curiosity.progress.v2";
const CURRENT_VERSION = 3;

/**
 * Persistance de la progression.
 *
 * La v3 ne conserve qu'une **suite d'identifiants** : les cartes rencontrées, de la plus
 * anciennement vue à la plus récente. La v2 tenait autour de chaque identifiant une
 * première rencontre, une dernière rencontre et un compteur — quatre champs dont aucun ne
 * commandait quoi que ce soit, pour un poids six fois supérieur à celui de l'identifiant
 * seul. Ce que le tirage demande à cette mémoire, c'est *quelles cartes ont été vues* et
 * *dans quel ordre* ; une liste ordonnée le dit en entier. Voir `ProgressState`.
 *
 * Les états v2 **sont repris**, eux, à la différence des v1 qui décrivaient une
 * application à sessions et à quiz : l'ordre des dernières rencontres suffit à les
 * reconstituer sans rien inventer, et c'est précisément l'historique que l'écran des
 * cartes passées existe pour montrer. Le perdre à la mise à jour aurait vidé cet écran
 * chez les seuls lecteurs qui avaient quelque chose à y voir.
 */
export function createEmptyProgressState(): ProgressState {
  return {
    version: CURRENT_VERSION,
    seen: [],
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
    Array.isArray(v.seen) &&
    v.seen.every((id) => typeof id === "string")
  );
}

/**
 * L'état v2, tel qu'il est encore écrit dans les navigateurs à cette mise à jour.
 * Il n'a pas à exister ailleurs : rien dans l'application ne le produit plus.
 */
interface LegacyStateV2 {
  version: number;
  concepts: Record<ConceptId, { conceptId: ConceptId; lastSeenAt: string }>;
  daily?: { day: string; conceptId: ConceptId };
}

function isLegacyStateV2(value: unknown): value is LegacyStateV2 {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Partial<LegacyStateV2>;
  return v.version === 2 && typeof v.concepts === "object" && v.concepts !== null;
}

/**
 * Reprend un état v2 : les cartes vues, rangées par dernière rencontre croissante.
 *
 * Une entrée sans `lastSeenAt` lisible n'est pas écartée — elle a bien été vue, c'est la
 * seule chose que la v3 retient — mais elle se range en tête, au plus ancien, faute de
 * quoi la comparer aux autres reviendrait à lui inventer une date.
 */
function fromLegacyV2(legacy: LegacyStateV2): ProgressState {
  const seen = Object.values(legacy.concepts)
    .filter((c) => c && typeof c.conceptId === "string")
    .sort((a, b) => (a.lastSeenAt ?? "").localeCompare(b.lastSeenAt ?? ""))
    .map((c) => c.conceptId);

  return { version: CURRENT_VERSION, seen, daily: legacy.daily };
}

export class LocalStorageProgressRepository implements ProgressRepository {
  load(): ProgressState {
    if (typeof window === "undefined") return createEmptyProgressState();
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (!isProgressState(parsed) || parsed.version !== CURRENT_VERSION)
          return createEmptyProgressState();
        return parsed;
      }
      return this.migrate();
    } catch {
      // Un stockage illisible ne doit jamais empêcher l'application de s'ouvrir : on
      // repart à zéro plutôt que d'échouer sur une donnée qui ne vaut de toute façon
      // qu'une liste de cartes déjà vues.
      return createEmptyProgressState();
    }
  }

  /**
   * La reprise de l'état v2, faite une fois : elle réécrit sous la clé v3 et retire
   * l'ancienne, si bien qu'aucune lecture ultérieure n'y repasse — et que le lecteur ne
   * traîne pas deux copies de son historique.
   */
  private migrate(): ProgressState {
    const legacy = window.localStorage.getItem(LEGACY_KEY_V2);
    if (!legacy) return createEmptyProgressState();

    const parsed: unknown = JSON.parse(legacy);
    const state = isLegacyStateV2(parsed) ? fromLegacyV2(parsed) : createEmptyProgressState();
    this.save(state);
    window.localStorage.removeItem(LEGACY_KEY_V2);
    return state;
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
    // L'ancienne clé part avec : la laisser ferait ressusciter l'historique effacé à la
    // prochaine lecture, par la reprise ci-dessus.
    window.localStorage.removeItem(LEGACY_KEY_V2);
  }
}

let repository: ProgressRepository | null = null;

export function getProgressRepository(): ProgressRepository {
  if (!repository) repository = new LocalStorageProgressRepository();
  return repository;
}
