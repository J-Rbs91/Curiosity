import { describe, expect, it } from "vitest";
import { ProgressService } from "./index";
import {
  createEmptyProgressState,
  type ProgressRepository,
} from "@/repositories/progress.repository";
import type { ProgressState } from "@/types";

class InMemoryProgressRepository implements ProgressRepository {
  constructor(private state: ProgressState = createEmptyProgressState()) {}
  load(): ProgressState {
    return this.state;
  }
  save(state: ProgressState): void {
    this.state = state;
  }
  clear(): void {
    this.state = createEmptyProgressState();
  }
}

describe("ProgressService", () => {
  it("retient une carte affichée", () => {
    const service = new ProgressService(new InMemoryProgressRepository());
    const seen = service.recordSeen("bureaucratie", new Date("2026-01-01T09:00:00.000Z"));

    expect(seen.encounters).toBe(1);
    expect(seen.firstSeenAt).toBe("2026-01-01T09:00:00.000Z");
    expect(service.seenIds().has("bureaucratie")).toBe(true);
  });

  it("compte les rencontres suivantes sans perdre la première", () => {
    const service = new ProgressService(new InMemoryProgressRepository());
    service.recordSeen("bureaucratie", new Date("2026-01-01T09:00:00.000Z"));
    const again = service.recordSeen("bureaucratie", new Date("2026-02-01T09:00:00.000Z"));

    expect(again.encounters).toBe(2);
    expect(again.firstSeenAt).toBe("2026-01-01T09:00:00.000Z");
    expect(again.lastSeenAt).toBe("2026-02-01T09:00:00.000Z");
  });

  it("oublie tout à la demande", () => {
    const service = new ProgressService(new InMemoryProgressRepository());
    service.recordSeen("bureaucratie");
    service.setDaily("2026-08-18", "bureaucratie");
    service.reset();

    expect(service.seenIds().size).toBe(0);
    expect(service.getState().daily).toBeUndefined();
  });
});
