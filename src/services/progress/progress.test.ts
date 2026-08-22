import { describe, expect, it } from "vitest";
import { ProgressService } from "./index";
import {
  createEmptyProgressState,
  type ProgressRepository,
} from "@/repositories/progress.repository";
import type { ProgressState } from "@/types";

class InMemoryProgressRepository implements ProgressRepository {
  ecritures = 0;
  constructor(private state: ProgressState = createEmptyProgressState()) {}
  load(): ProgressState {
    return this.state;
  }
  save(state: ProgressState): void {
    this.ecritures += 1;
    this.state = state;
  }
  clear(): void {
    this.state = createEmptyProgressState();
  }
}

describe("ProgressService", () => {
  it("retient une carte affichée", () => {
    const service = new ProgressService(new InMemoryProgressRepository());
    service.recordSeen("bureaucratie");

    expect(service.seen()).toEqual(["bureaucratie"]);
    expect(service.seenIds().has("bureaucratie")).toBe(true);
  });

  it("range les cartes de la plus anciennement vue à la plus récente", () => {
    const service = new ProgressService(new InMemoryProgressRepository());
    service.recordSeen("bureaucratie");
    service.recordSeen("anomie");

    expect(service.seen()).toEqual(["bureaucratie", "anomie"]);
  });

  it("déplace une carte revue au lieu de l'inscrire deux fois", () => {
    const service = new ProgressService(new InMemoryProgressRepository());
    service.recordSeen("bureaucratie");
    service.recordSeen("anomie");
    service.recordSeen("bureaucratie");

    // Le corpus étant fini, une carte finit par revenir : la liste doit rester bornée par
    // le corpus, et sa fin rester la carte la plus récemment rencontrée.
    expect(service.seen()).toEqual(["anomie", "bureaucratie"]);
  });

  it("n'écrit rien quand la carte affichée est déjà la dernière vue", () => {
    const repository = new InMemoryProgressRepository();
    const service = new ProgressService(repository);
    service.recordSeen("bureaucratie");
    // Rouvrir l'application dans la journée redonne la même carte : c'est le cas courant,
    // et il ne doit pas coûter une écriture.
    service.recordSeen("bureaucratie");

    expect(repository.ecritures).toBe(1);
  });

  it("relit l'historique la plus récente d'abord", () => {
    const service = new ProgressService(new InMemoryProgressRepository());
    service.recordSeen("bureaucratie");
    service.recordSeen("anomie");

    expect(service.history()).toEqual(["anomie", "bureaucratie"]);
    // Retourner la liste ne doit pas la retourner dans le stockage.
    expect(service.seen()).toEqual(["bureaucratie", "anomie"]);
  });

  it("oublie tout à la demande", () => {
    const service = new ProgressService(new InMemoryProgressRepository());
    service.recordSeen("bureaucratie");
    service.setDaily("2026-08-18", "bureaucratie");
    service.reset();

    expect(service.seen()).toEqual([]);
    expect(service.getState().daily).toBeUndefined();
  });
});
