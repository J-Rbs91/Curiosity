// @vitest-environment jsdom
import { beforeEach, describe, expect, it, vi } from "vitest";
import { getProgressService } from "@/services/progress";
import { dayKey } from "@/domain/concepts/next-card";
import {
  dailyThresholdLabel,
  isDailyCardDiscovered,
  markDailyCardDiscovered,
  onDailyDiscovery,
  resetDailyDiscoverySignal,
} from "./daily-discovery";

const AUJOURD_HUI = new Date(2026, 7, 15, 14, 30);
const DEMAIN = new Date(2026, 7, 16, 9, 0);
const NATIVE_COOKIE = "curiosity_daily_discovered";

function tirer(jour: Date, conceptId = "bureaucratie") {
  getProgressService().setDaily(dayKey(jour), conceptId);
}

function activerAndroidNatif() {
  Object.defineProperty(window, "Capacitor", {
    configurable: true,
    value: { getPlatform: () => "android" },
  });
}

function desactiverAndroidNatif() {
  Reflect.deleteProperty(window, "Capacitor");
}

function effacerCookie() {
  document.cookie = `${NATIVE_COOKIE}=; Path=/; Max-Age=0`;
}

describe("le statut « concept du jour découvert »", () => {
  beforeEach(() => {
    window.localStorage.clear();
    getProgressService().reset();
    desactiverAndroidNatif();
    effacerCookie();
  });

  it("est faux tant que la carte n'a pas été ouverte", () => {
    tirer(AUJOURD_HUI);
    expect(isDailyCardDiscovered(AUJOURD_HUI)).toBe(false);
  });

  it("devient vrai dès que la carte est découverte", () => {
    tirer(AUJOURD_HUI);
    markDailyCardDiscovered(AUJOURD_HUI);
    expect(isDailyCardDiscovered(AUJOURD_HUI)).toBe(true);
  });

  it("ne vaut plus le lendemain, sans remise à zéro programmée", () => {
    tirer(AUJOURD_HUI);
    markDailyCardDiscovered(AUJOURD_HUI);
    expect(isDailyCardDiscovered(DEMAIN)).toBe(false);
  });

  it("repart à faux quand le tirage du lendemain a eu lieu", () => {
    tirer(AUJOURD_HUI);
    markDailyCardDiscovered(AUJOURD_HUI);
    tirer(DEMAIN, "anomie");
    expect(isDailyCardDiscovered(DEMAIN)).toBe(false);
  });

  it("n'écrit et n'annonce qu'une fois par jour", () => {
    tirer(AUJOURD_HUI);
    const temoin = vi.fn();
    const off = onDailyDiscovery(temoin);

    for (let i = 0; i < 5; i += 1) markDailyCardDiscovered(AUJOURD_HUI);

    expect(temoin).toHaveBeenCalledTimes(1);
    off();
  });

  it("n'annonce rien quand aucune carte du jour n'a été tirée", () => {
    const temoin = vi.fn();
    const off = onDailyDiscovery(temoin);

    markDailyCardDiscovered(AUJOURD_HUI);

    expect(temoin).not.toHaveBeenCalled();
    expect(isDailyCardDiscovered(AUJOURD_HUI)).toBe(false);
    off();
  });

  it("ne déclare pas découverte une carte d'un autre jour", () => {
    tirer(AUJOURD_HUI);
    markDailyCardDiscovered(DEMAIN);
    expect(isDailyCardDiscovered(AUJOURD_HUI)).toBe(false);
  });

  it("laisse se désabonner", () => {
    tirer(AUJOURD_HUI);
    const temoin = vi.fn();
    onDailyDiscovery(temoin)();
    markDailyCardDiscovered(AUJOURD_HUI);
    expect(temoin).not.toHaveBeenCalled();
  });

  it("s'efface avec la progression", () => {
    tirer(AUJOURD_HUI);
    markDailyCardDiscovered(AUJOURD_HUI);
    getProgressService().reset();
    expect(isDailyCardDiscovered(AUJOURD_HUI)).toBe(false);
  });
});

describe("la projection vers le shell Android", () => {
  beforeEach(() => {
    window.localStorage.clear();
    getProgressService().reset();
    activerAndroidNatif();
    effacerCookie();
  });

  it("écrit uniquement le jour découvert", () => {
    tirer(AUJOURD_HUI);
    markDailyCardDiscovered(AUJOURD_HUI);

    expect(document.cookie).toContain(
      `${NATIVE_COOKIE}=${dayKey(AUJOURD_HUI)}`,
    );
  });

  it("répare un marqueur périmé à la lecture", () => {
    document.cookie = `${NATIVE_COOKIE}=${dayKey(AUJOURD_HUI)}; Path=/`;
    expect(document.cookie).toContain(NATIVE_COOKIE);

    expect(isDailyCardDiscovered(DEMAIN)).toBe(false);
    expect(document.cookie).not.toContain(NATIVE_COOKIE);
  });

  it("retire le marqueur et annonce après un effacement utilisateur", () => {
    tirer(AUJOURD_HUI);
    markDailyCardDiscovered(AUJOURD_HUI);

    const temoin = vi.fn();
    const off = onDailyDiscovery(temoin);
    resetDailyDiscoverySignal();

    expect(document.cookie).not.toContain(NATIVE_COOKIE);
    expect(temoin).toHaveBeenCalledTimes(1);
    off();
  });

  it("ne crée aucun cookie dans la PWA web", () => {
    desactiverAndroidNatif();
    tirer(AUJOURD_HUI);
    markDailyCardDiscovered(AUJOURD_HUI);
    expect(document.cookie).not.toContain(NATIVE_COOKIE);
  });
});

describe("le libellé du seuil", () => {
  beforeEach(() => {
    window.localStorage.clear();
    getProgressService().reset();
    desactiverAndroidNatif();
    effacerCookie();
  });

  it("annonce la découverte tant que la carte du jour n'a pas été ouverte", () => {
    tirer(AUJOURD_HUI);
    expect(dailyThresholdLabel(isDailyCardDiscovered(AUJOURD_HUI))).toBe("Concept du jour");
  });

  it("annonce la relecture quand la carte du jour a déjà été découverte", () => {
    tirer(AUJOURD_HUI);
    markDailyCardDiscovered(AUJOURD_HUI);
    expect(dailyThresholdLabel(isDailyCardDiscovered(AUJOURD_HUI))).toBe(
      "Revoir le concept du jour",
    );
  });

  it("redevient une découverte le lendemain", () => {
    tirer(AUJOURD_HUI);
    markDailyCardDiscovered(AUJOURD_HUI);
    expect(dailyThresholdLabel(isDailyCardDiscovered(DEMAIN))).toBe("Concept du jour");
  });
});
