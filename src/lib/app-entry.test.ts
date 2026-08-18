import { describe, it, expect } from "vitest";
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
