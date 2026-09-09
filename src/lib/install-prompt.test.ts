// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  arrivedFromOutside,
  installPromptAvailable,
  installPromptUnavailable,
  needsManualInstall,
  promptInstall,
  runsAsApp,
  samePath,
  subscribeInstallPrompt,
  type InstallPromptEvent,
} from "@/lib/install-prompt";

/**
 * Ce que ces tests protègent : la moitié du module qui décide **si** l'on propose quelque
 * chose. La moitié qui l'affiche est un composant, et le reste — ce qu'un navigateur fait
 * réellement d'un `prompt()` — ne se vérifie que sur un appareil.
 */

/** Un `beforeinstallprompt` tel que Chromium l'émet, réponse du lecteur comprise. */
function inviterAInstaller(outcome: "accepted" | "dismissed") {
  const event = new Event("beforeinstallprompt", { cancelable: true }) as InstallPromptEvent;
  Object.assign(event, {
    prompt: vi.fn().mockResolvedValue(undefined),
    userChoice: Promise.resolve({ outcome }),
  });
  window.dispatchEvent(event);
  return event;
}

afterEach(() => {
  // Une invitation retenue survivrait au test suivant : on la dépense.
  if (installPromptAvailable()) void promptInstall();
  vi.unstubAllGlobals();
});

describe("l'invitation du navigateur", () => {
  it("n'existe pas tant que le navigateur ne l'a pas donnée", () => {
    expect(installPromptAvailable()).toBe(false);
  });

  it("est retenue plutôt que laissée au navigateur", async () => {
    const event = inviterAInstaller("accepted");
    expect(event.defaultPrevented).toBe(true);
    expect(installPromptAvailable()).toBe(true);
  });

  it("prévient l'écran quand elle arrive", () => {
    const listener = vi.fn();
    const desabonner = subscribeInstallPrompt(listener);
    inviterAInstaller("accepted");
    expect(listener).toHaveBeenCalled();
    desabonner();
  });

  it("rend ce que le lecteur a répondu", async () => {
    inviterAInstaller("accepted");
    await expect(promptInstall()).resolves.toBe("accepted");

    inviterAInstaller("dismissed");
    await expect(promptInstall()).resolves.toBe("dismissed");
  });

  it("ne sert qu'une fois : le navigateur ne la réémet pas", async () => {
    inviterAInstaller("accepted");
    await promptInstall();
    expect(installPromptAvailable()).toBe(false);
    await expect(promptInstall()).resolves.toBe("unavailable");
  });

  it("disparaît dès que l'application est installée, d'où qu'elle l'ait été", () => {
    inviterAInstaller("accepted");
    window.dispatchEvent(new Event("appinstalled"));
    expect(installPromptAvailable()).toBe(false);
  });

  it("ne montre rien au rendu serveur, où le navigateur n'existe pas", () => {
    expect(installPromptUnavailable()).toBe(false);
  });
});

describe("runsAsApp", () => {
  it("reconnaît l'application lancée depuis son icône", () => {
    vi.stubGlobal("matchMedia", (query: string) => ({
      matches: query === "(display-mode: standalone)",
      media: query,
    }));
    expect(runsAsApp()).toBe(true);
  });

  it("reconnaît le conteneur Android, qui n'a pas de mode d'affichage à déclarer", () => {
    vi.stubGlobal("matchMedia", () => ({ matches: false }));
    vi.stubGlobal("Capacitor", { getPlatform: () => "android" });
    expect(runsAsApp()).toBe(true);
  });

  it("rend faux dans un onglet ordinaire — le seul cas où il y a quelque chose à proposer", () => {
    vi.stubGlobal("matchMedia", () => ({ matches: false }));
    expect(runsAsApp()).toBe(false);
  });
});

describe("needsManualInstall", () => {
  const IPHONE =
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1";
  const IPAD_OS =
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15";
  const MAC =
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";
  const ANDROID =
    "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36";

  it("vaut pour iOS, qui n'a aucune API d'installation", () => {
    expect(needsManualInstall(IPHONE)).toBe(true);
  });

  it("rattrape l'iPad, qui se déclare Macintosh depuis iPadOS 13", () => {
    expect(needsManualInstall(IPAD_OS, 5)).toBe(true);
  });

  it("ne prend pas un Mac pour un iPad", () => {
    expect(needsManualInstall(MAC, 0)).toBe(false);
  });

  it("ne vaut pas pour Android, où l'invitation existe", () => {
    expect(needsManualInstall(ANDROID)).toBe(false);
  });
});

describe("d'où l'on arrive", () => {
  it("ignore la barre finale, qu'un lien partagé peut perdre en route", () => {
    expect(samePath("/Curiosity/explore/concept", "/Curiosity/explore/concept/")).toBe(true);
    expect(samePath("/Curiosity/explore/concept/", "/Curiosity/explore/concept/")).toBe(true);
  });

  it("ne confond pas deux écrans", () => {
    expect(samePath("/Curiosity/explore/", "/Curiosity/explore/concept/")).toBe(false);
  });

  it("ne répond rien hors du navigateur, où aucun document n'est ouvert", () => {
    expect(samePath(null, "/")).toBe(false);
  });

  it("reconnaît le chemin par lequel le document s'est ouvert", () => {
    // jsdom ouvre le document sur la racine : c'est le seul chemin d'arrivée observable
    // ici, et il suffit à établir que la comparaison porte bien sur lui.
    expect(arrivedFromOutside("/")).toBe(true);
    expect(arrivedFromOutside("/explore/concept/")).toBe(false);
  });
});
