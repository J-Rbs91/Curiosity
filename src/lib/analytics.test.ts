import { describe, expect, it } from "vitest";
import {
  AUDIENCE_EVENTS,
  countedPath,
  countEvent,
  countPageview,
  GOATCOUNTER_ENDPOINT,
  GOATCOUNTER_SETTINGS,
} from "./analytics";

describe("countedPath", () => {
  it("enregistre le chemin tel quel quand il n'y a pas de recherche", () => {
    expect(countedPath("/explore/", "")).toBe("/explore/");
  });

  it("conserve la recherche, qui porte l'identité de l'écran", () => {
    expect(countedPath("/explore/concept/", "c=zone-d-incertitude")).toBe(
      "/explore/concept/?c=zone-d-incertitude"
    );
  });

  it("n'ajoute aucun préfixe d'hébergement", () => {
    // Ce que `usePathname` rend est déjà dépourvu du `basePath` : deux hébergements
    // différents doivent produire la même ligne dans le tableau de bord.
    expect(countedPath("/passees/", "")).toBe("/passees/");
  });

  it("rend la racine plutôt qu'un chemin vide", () => {
    expect(countedPath("", "")).toBe("/");
  });
});

describe("réglages du compteur", () => {
  it("vise le site dédié à Curiosity, pas celui du CV", () => {
    expect(GOATCOUNTER_ENDPOINT).toBe("https://curiosity.goatcounter.com/count");
  });

  it("désarme le comptage automatique, qui manquerait toutes les navigations internes", () => {
    expect(JSON.parse(GOATCOUNTER_SETTINGS)).toEqual({ no_onload: true });
  });
});

describe("gestes comptés", () => {
  it("nomme les trois gestes qui n'ont pas d'adresse à eux", () => {
    expect(AUDIENCE_EVENTS).toEqual({
      carteDuJour: "carte-du-jour",
      approfondir: "approfondir",
      poursuiteIa: "poursuite-ia",
    });
  });

  it("ne compte rien hors du navigateur, où le compteur n'existe pas", () => {
    // Le rendu serveur traverse ces écrans : un accès à `window` y serait une erreur, pas
    // une vue perdue.
    expect(() => countEvent(AUDIENCE_EVENTS.approfondir)).not.toThrow();
    expect(countPageview("/")).toBe(false);
  });
});
