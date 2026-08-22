import { describe, it, expect, vi } from "vitest";
import { isReentry, REENTRY_AFTER_MS, type Departure } from "./app-entry";

const MIDI = new Date("2026-08-18T12:00:00").getTime();
const sortie = (ecoule: number, day = "2026-08-18"): Departure => ({ at: MIDI - ecoule, day });

describe("réouverture ou reprise", () => {
  it("ne conclut rien quand l'application n'a jamais été quittée", () => {
    // C'est le démarrage à froid : il arrive déjà sur `start_url`, il n'y a rien à corriger.
    expect(isReentry(null, MIDI, "2026-08-18")).toBe(false);
  });

  it("rend l'écran quitté à qui revient tout de suite", () => {
    // Le cas le plus fréquent, et celui qu'une redirection systématique casserait :
    // on est allé lire une notification, on veut retrouver sa place.
    expect(isReentry(sortie(10_000), MIDI, "2026-08-18")).toBe(false);
    expect(isReentry(sortie(REENTRY_AFTER_MS - 1_000), MIDI, "2026-08-18")).toBe(false);
  });

  it("compte comme une réouverture au-delà du seuil", () => {
    expect(isReentry(sortie(REENTRY_AFTER_MS), MIDI, "2026-08-18")).toBe(true);
    expect(isReentry(sortie(6 * 60 * 60 * 1000), MIDI, "2026-08-18")).toBe(true);
  });

  it("compte comme une réouverture dès que le jour a changé, si courte que soit l'absence", () => {
    // Deux minutes de part et d'autre de minuit : la carte du jour n'est plus la même, et
    // laisser celle de la veille à l'écran serait faux quel que soit le temps écoulé.
    expect(isReentry(sortie(2 * 60 * 1000, "2026-08-17"), MIDI, "2026-08-18")).toBe(true);
  });

  it("ne redirige pas sur une horloge qui recule", () => {
    // Changement de fuseau ou correction d'heure : un écart négatif n'est pas une absence.
    expect(isReentry(sortie(-3 * 60 * 60 * 1000), MIDI, "2026-08-18")).toBe(false);
  });
});

/**
 * L'ouverture en attente vit dans l'état du module : chaque cas repart d'un module neuf,
 * comme un document neuf le ferait.
 */
async function documentNeuf() {
  vi.resetModules();
  return import("./app-entry");
}

describe("l'ouverture en attente", () => {
  it("attend dès le document neuf", async () => {
    const { isOpeningPending } = await documentNeuf();
    expect(isOpeningPending()).toBe(true);
  });

  it("survit à un aller-retour par Explorer tant que le seuil n'est pas franchi", async () => {
    const { isOpeningPending } = await documentNeuf();
    // Le défaut corrigé : l'écran d'Aujourd'hui interroge l'ouverture à chaque montage — un
    // par passage sur l'onglet — et la consulter ne doit pas la dépenser. Sans quoi partir
    // sur Explorer depuis l'accueil puis revenir affichait la carte d'elle-même.
    expect(isOpeningPending()).toBe(true);
    expect(isOpeningPending()).toBe(true);
  });

  it("se dépense au franchissement, et une seule fois", async () => {
    const { isOpeningPending, spendOpening } = await documentNeuf();
    spendOpening();
    expect(isOpeningPending()).toBe(false);
    // Revenir sur Aujourd'hui après avoir franchi le seuil rend la carte, sans quoi
    // l'accueil deviendrait une taxe sur chaque changement d'onglet.
    spendOpening();
    expect(isOpeningPending()).toBe(false);
  });

  it("se réarme à la réouverture", async () => {
    const { announceReentry, isOpeningPending, spendOpening } = await documentNeuf();
    spendOpening();
    announceReentry();
    expect(isOpeningPending()).toBe(true);
  });
});
