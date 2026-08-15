import { describe, expect, it, beforeEach } from "vitest";
import { ProgressService } from "./index";
import { createEmptyProgressState, type ProgressRepository } from "@/repositories/progress.repository";
import type { ProgressState } from "@/types";

class InMemoryProgressRepository implements ProgressRepository {
  private state: ProgressState = createEmptyProgressState();

  load(): ProgressState {
    return this.state;
  }

  save(state: ProgressState): void {
    this.state = state;
  }

  reset(): void {
    this.state = createEmptyProgressState();
  }
}

describe("ProgressService", () => {
  let repository: InMemoryProgressRepository;
  let service: ProgressService;

  beforeEach(() => {
    repository = new InMemoryProgressRepository();
    service = new ProgressService(repository);
  });

  it("enregistre une découverte avec un score de départ et une prochaine révision à J+1", () => {
    const now = new Date("2026-01-01T00:00:00.000Z");
    const progress = service.recordDiscovery("bureaucratie", now);

    expect(progress.masteryScore).toBe(1);
    expect(progress.encounters).toBe(1);
    expect(progress.discoveredAt).toBe(now.toISOString());
    expect(progress.nextReviewAt).toBe(new Date("2026-01-02T00:00:00.000Z").toISOString());
  });

  it("met à jour le score de maîtrise après une réponse", () => {
    const now = new Date("2026-01-01T00:00:00.000Z");
    service.recordDiscovery("bureaucratie", now);

    const afterCorrect = service.recordAnswer("bureaucratie", true, now);
    expect(afterCorrect.masteryScore).toBe(2);
    expect(afterCorrect.correctAnswers).toBe(1);
    expect(afterCorrect.incorrectAnswers).toBe(0);

    const afterIncorrect = service.recordAnswer("bureaucratie", false, now);
    expect(afterIncorrect.masteryScore).toBe(1);
    expect(afterIncorrect.incorrectAnswers).toBe(1);
  });

  it("programme la prochaine révision à chaque réponse", () => {
    const now = new Date("2026-01-01T00:00:00.000Z");
    service.recordDiscovery("bureaucratie", now);
    const progress = service.recordAnswer("bureaucratie", true, now);
    // 2e rencontre => palier J+4
    expect(progress.nextReviewAt).toBe(new Date("2026-01-05T00:00:00.000Z").toISOString());
  });

  it("conserve l'historique des réponses correctes/incorrectes au fil des sessions", () => {
    const now = new Date("2026-01-01T00:00:00.000Z");
    service.recordDiscovery("bureaucratie", now);
    service.recordAnswer("bureaucratie", true, now);
    const progress = service.recordAnswer("bureaucratie", true, now);
    expect(progress.correctAnswers).toBe(2);
    expect(progress.encounters).toBe(3);
  });

  it("persiste au travers du repository (simulateur de rechargement)", () => {
    service.recordDiscovery("bureaucratie", new Date("2026-01-01T00:00:00.000Z"));
    const reloadedService = new ProgressService(repository);
    expect(reloadedService.getConceptProgress("bureaucratie")).toBeDefined();
  });

  it("la réinitialisation efface toute la progression", () => {
    service.recordDiscovery("bureaucratie", new Date("2026-01-01T00:00:00.000Z"));
    service.resetAll();
    expect(service.getAllProgress()).toHaveLength(0);
  });
});
