import type { ConceptId, ProgressState } from "@/types";
import {
  type ProgressRepository,
  getProgressRepository,
} from "@/repositories/progress.repository";

/**
 * Ce que l'application retient d'un lecteur : les cartes qu'il a déjà vues, dans l'ordre.
 *
 * Rien d'autre. Il n'y a ni score, ni niveau, ni révision programmée — ce sont des notions
 * de session d'apprentissage, et il n'y en a plus. Les deux seules questions auxquelles ce
 * service répond sont : *quelle carte n'a-t-il pas encore lue ?* et *lesquelles a-t-il
 * lues avant celle d'aujourd'hui ?*
 */
export class ProgressService {
  constructor(private repository: ProgressRepository = getProgressRepository()) {}

  getState(): ProgressState {
    return this.repository.load();
  }

  /** Les cartes vues, de la plus anciennement rencontrée à la plus récente. */
  seen(): ConceptId[] {
    return this.getState().seen;
  }

  seenIds(): Set<ConceptId> {
    return new Set(this.seen());
  }

  /**
   * Les cartes déjà rencontrées, **la plus récente d'abord** : l'ordre où on les relit.
   *
   * C'est la même liste que `seen()`, retournée. Elle n'est pas stockée deux fois — un
   * historique et une mémoire de tirage qui se contrediraient un jour vaudraient moins
   * que la lecture à l'envers d'une seule liste.
   */
  history(): ConceptId[] {
    return [...this.seen()].reverse();
  }

  /**
   * Enregistre qu'une carte a été affichée.
   *
   * Une carte déjà vue **se déplace en fin de liste** au lieu d'y être ajoutée une
   * seconde fois : la liste reste sans doublon, donc bornée par le corpus, et sa fin
   * reste la plus récemment rencontrée. Revoir la carte déjà en fin de liste n'écrit
   * rien — c'est le cas de chaque réouverture d'une même journée, et il ne doit pas
   * coûter une écriture.
   */
  recordSeen(conceptId: ConceptId): void {
    const state = this.getState();
    const seen = state.seen;
    if (seen[seen.length - 1] === conceptId) return;

    this.repository.save({
      ...state,
      seen: [...seen.filter((id) => id !== conceptId), conceptId],
    });
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

  /**
   * Oublier. `clear` plutôt qu'un enregistrement vide : le stockage doit être *retiré*, y
   * compris l'éventuel état d'une version antérieure que le dépôt reprend — un état vide
   * écrit par-dessus l'aurait laissé en place, à occuper de la place pour une mémoire que
   * le lecteur vient justement de demander à effacer.
   */
  reset(): void {
    this.repository.clear();
  }
}

let service: ProgressService | null = null;

export function getProgressService(): ProgressService {
  if (!service) service = new ProgressService();
  return service;
}
