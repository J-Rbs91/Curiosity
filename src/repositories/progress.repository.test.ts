// @vitest-environment jsdom
import { describe, expect, it, beforeEach } from "vitest";
import { LocalStorageProgressRepository, createEmptyProgressState } from "./progress.repository";

describe("LocalStorageProgressRepository", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("retourne un état vide quand aucune donnée n'existe", () => {
    const repo = new LocalStorageProgressRepository();
    expect(repo.load()).toEqual(createEmptyProgressState());
  });

  it("ne plante pas sur des données corrompues et retombe sur un état vide", () => {
    window.localStorage.setItem("curiosity.progress.v1", "{ not valid json");
    const repo = new LocalStorageProgressRepository();
    expect(repo.load()).toEqual(createEmptyProgressState());
  });

  it("ne plante pas sur des données valides mais de forme inattendue", () => {
    window.localStorage.setItem("curiosity.progress.v1", JSON.stringify({ foo: "bar" }));
    const repo = new LocalStorageProgressRepository();
    expect(repo.load()).toEqual(createEmptyProgressState());
  });

  it("la progression survit à un rechargement (nouvelle instance du repository)", () => {
    const repo = new LocalStorageProgressRepository();
    const state = createEmptyProgressState();
    state.concepts["bureaucratie"] = {
      conceptId: "bureaucratie",
      encounters: 1,
      masteryScore: 1,
      correctAnswers: 0,
      incorrectAnswers: 0,
    };
    repo.save(state);

    const reloaded = new LocalStorageProgressRepository();
    expect(reloaded.load().concepts["bureaucratie"]?.masteryScore).toBe(1);
  });

  it("la réinitialisation efface les données persistées", () => {
    const repo = new LocalStorageProgressRepository();
    repo.save({
      ...createEmptyProgressState(),
      concepts: {
        bureaucratie: {
          conceptId: "bureaucratie",
          encounters: 1,
          masteryScore: 1,
          correctAnswers: 0,
          incorrectAnswers: 0,
        },
      },
    });

    repo.reset();

    const reloaded = new LocalStorageProgressRepository();
    expect(reloaded.load()).toEqual(createEmptyProgressState());
  });
});
