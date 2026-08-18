// @vitest-environment jsdom
import { beforeEach, describe, expect, it } from "vitest";
import {
  LocalStorageProgressRepository,
  createEmptyProgressState,
} from "./progress.repository";
import type { ProgressState } from "@/types";

const KEY = "curiosity.progress.v2";

describe("LocalStorageProgressRepository", () => {
  beforeEach(() => window.localStorage.clear());

  it("rend un état vide quand rien n'a été enregistré", () => {
    expect(new LocalStorageProgressRepository().load()).toEqual(createEmptyProgressState());
  });

  it("relit ce qu'il a écrit", () => {
    const repository = new LocalStorageProgressRepository();
    const state: ProgressState = {
      ...createEmptyProgressState(),
      concepts: {
        bureaucratie: {
          conceptId: "bureaucratie",
          firstSeenAt: "2026-01-01T00:00:00.000Z",
          lastSeenAt: "2026-01-01T00:00:00.000Z",
          encounters: 1,
        },
      },
    };
    repository.save(state);

    expect(repository.load()).toEqual(state);
  });

  it("repart à zéro sur un stockage illisible plutôt que d'échouer", () => {
    window.localStorage.setItem(KEY, "{ pas du json");
    expect(new LocalStorageProgressRepository().load()).toEqual(createEmptyProgressState());
  });

  it("ignore un état d'une version antérieure", () => {
    // La v1 décrivait une application avec sessions, quiz et maîtrise : la convertir
    // produirait des données qui n'ont jamais rien signifié dans celle-ci.
    window.localStorage.setItem(KEY, JSON.stringify({ version: 1, concepts: {} }));
    expect(new LocalStorageProgressRepository().load().version).toBe(2);
  });

  it("efface tout", () => {
    const repository = new LocalStorageProgressRepository();
    repository.save({
      ...createEmptyProgressState(),
      concepts: {
        bureaucratie: {
          conceptId: "bureaucratie",
          firstSeenAt: "2026-08-18T08:00:00.000Z",
          lastSeenAt: "2026-08-18T08:00:00.000Z",
          encounters: 1,
        },
      },
    });
    repository.clear();

    expect(repository.load().concepts).toEqual({});
  });
});
