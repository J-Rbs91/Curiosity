import { describe, expect, it } from "vitest";
import { countedPath, GOATCOUNTER_ENDPOINT, GOATCOUNTER_SETTINGS } from "./analytics";

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
