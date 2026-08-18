import { describe, it, expect } from "vitest";
import { AI_DESTINATIONS } from "./ai-destinations";

/**
 * Une liste écrite à la main a deux façons de mal vieillir : se contredire, et se mettre à
 * recommander. Ces tests tiennent la seconde — la première demande un œil humain.
 */
describe("AI_DESTINATIONS", () => {
  it("propose des destinations, sans en faire un annuaire", () => {
    expect(AI_DESTINATIONS.length).toBeGreaterThan(2);
    expect(AI_DESTINATIONS.length).toBeLessThanOrEqual(6);
  });

  it("n'ouvre que des adresses https, sans schéma d'application propriétaire", () => {
    // Un schéma propriétaire échoue en silence quand l'application manque ; un lien https
    // ouvre l'application installée, ou le site à défaut.
    for (const { url } of AI_DESTINATIONS) {
      expect(() => new URL(url)).not.toThrow();
      expect(new URL(url).protocol).toBe("https:");
    }
  });

  it("ne met aucun prompt dans l'adresse", () => {
    /*
     * Le dossier fait 22 000 caractères : le passer en paramètre d'URL, c'est le faire
     * tronquer en route par un intermédiaire quelconque, et perdre les règles documentaires
     * sans que rien ne le signale. Il passe par le presse-papiers, qui n'a pas cette limite.
     */
    for (const { url } of AI_DESTINATIONS) {
      expect(new URL(url).search).toBe("");
    }
  });

  it("ne classe pas par préférence : l'ordre est alphabétique", () => {
    const noms = AI_DESTINATIONS.map((d) => d.name);
    expect(noms).toEqual([...noms].sort((a, b) => a.localeCompare(b, "fr")));
  });

  it("ne répète ni un nom ni une adresse", () => {
    expect(new Set(AI_DESTINATIONS.map((d) => d.name)).size).toBe(AI_DESTINATIONS.length);
    expect(new Set(AI_DESTINATIONS.map((d) => d.url)).size).toBe(AI_DESTINATIONS.length);
  });

  it("nomme chaque destination lisiblement", () => {
    for (const { name } of AI_DESTINATIONS) {
      expect(name.trim()).toBe(name);
      expect(name.length).toBeGreaterThan(0);
    }
  });
});
