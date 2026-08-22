// @vitest-environment jsdom
import { beforeEach, describe, expect, it } from "vitest";
import {
  LocalStorageProgressRepository,
  createEmptyProgressState,
} from "./progress.repository";
import type { ProgressState } from "@/types";

const KEY = "curiosity.progress.v3";
const KEY_V2 = "curiosity.progress.v2";

describe("LocalStorageProgressRepository", () => {
  beforeEach(() => window.localStorage.clear());

  it("rend un état vide quand rien n'a été enregistré", () => {
    expect(new LocalStorageProgressRepository().load()).toEqual(createEmptyProgressState());
  });

  it("relit ce qu'il a écrit", () => {
    const repository = new LocalStorageProgressRepository();
    const state: ProgressState = {
      ...createEmptyProgressState(),
      seen: ["bureaucratie", "anomie"],
      daily: { day: "2026-01-01", conceptId: "anomie" },
    };
    repository.save(state);

    expect(repository.load()).toEqual(state);
  });

  it("n'écrit que les identifiants", () => {
    const repository = new LocalStorageProgressRepository();
    repository.save({ ...createEmptyProgressState(), seen: ["bureaucratie"] });

    // Ce que le stockage pèse est le sujet même de cette version : une carte y coûte son
    // identifiant, et rien d'autre. Aucune date, aucun compteur.
    const brut = window.localStorage.getItem(KEY)!;
    expect(JSON.parse(brut)).toEqual({ version: 3, seen: ["bureaucratie"] });
    expect(brut).not.toMatch(/SeenAt|encounters/);
  });

  it("repart à zéro sur un stockage illisible plutôt que d'échouer", () => {
    window.localStorage.setItem(KEY, "{ pas du json");
    expect(new LocalStorageProgressRepository().load()).toEqual(createEmptyProgressState());
  });

  it("ignore un état dont la forme n'est pas celle attendue", () => {
    window.localStorage.setItem(KEY, JSON.stringify({ version: 3, seen: [{ id: "x" }] }));
    expect(new LocalStorageProgressRepository().load()).toEqual(createEmptyProgressState());
  });

  it("efface tout", () => {
    const repository = new LocalStorageProgressRepository();
    repository.save({ ...createEmptyProgressState(), seen: ["bureaucratie"] });
    repository.clear();

    expect(repository.load().seen).toEqual([]);
  });

  describe("reprise d'un état v2", () => {
    const v2 = {
      version: 2,
      concepts: {
        anomie: {
          conceptId: "anomie",
          firstSeenAt: "2026-01-01T09:00:00.000Z",
          lastSeenAt: "2026-03-01T09:00:00.000Z",
          encounters: 2,
        },
        bureaucratie: {
          conceptId: "bureaucratie",
          firstSeenAt: "2026-02-01T09:00:00.000Z",
          lastSeenAt: "2026-02-01T09:00:00.000Z",
          encounters: 1,
        },
      },
      daily: { day: "2026-03-01", conceptId: "anomie" },
    };

    it("garde les cartes vues, rangées de la plus ancienne à la plus récente", () => {
      window.localStorage.setItem(KEY_V2, JSON.stringify(v2));

      // Bureaucratie a été vue en février, anomie revue en mars : c'est la dernière
      // rencontre qui ordonne, comme le faisait `lastSeenAt`.
      expect(new LocalStorageProgressRepository().load()).toEqual({
        version: 3,
        seen: ["bureaucratie", "anomie"],
        daily: { day: "2026-03-01", conceptId: "anomie" },
      });
    });

    it("ne repasse pas par l'ancienne clé une fois la reprise faite", () => {
      window.localStorage.setItem(KEY_V2, JSON.stringify(v2));
      new LocalStorageProgressRepository().load();

      expect(window.localStorage.getItem(KEY_V2)).toBeNull();
      expect(JSON.parse(window.localStorage.getItem(KEY)!).seen).toEqual([
        "bureaucratie",
        "anomie",
      ]);
    });

    it("n'écrase pas un état v3 déjà écrit", () => {
      window.localStorage.setItem(KEY_V2, JSON.stringify(v2));
      window.localStorage.setItem(KEY, JSON.stringify({ version: 3, seen: ["taylorisme"] }));

      expect(new LocalStorageProgressRepository().load().seen).toEqual(["taylorisme"]);
    });

    it("ne ressuscite pas un historique effacé", () => {
      const repository = new LocalStorageProgressRepository();
      window.localStorage.setItem(KEY_V2, JSON.stringify(v2));
      repository.clear();

      expect(repository.load().seen).toEqual([]);
    });

    it("ignore un état v1, qui décrivait une autre application", () => {
      // Sessions, quiz et maîtrise : le convertir produirait des données qui n'ont jamais
      // rien signifié dans celle-ci.
      window.localStorage.setItem(KEY_V2, JSON.stringify({ version: 1, sessions: [] }));
      expect(new LocalStorageProgressRepository().load()).toEqual(createEmptyProgressState());
    });
  });
});
