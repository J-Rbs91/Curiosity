import { describe, expect, it } from "vitest";
import {
  URGENCY_FIRST_HOUR,
  URGENCY_GROUNDS,
  URGENCY_LAST_HOUR,
  URGENCY_STEPS,
  msUntilNextStep,
  urgencyGround,
  urgencyStep,
} from "./daily-urgency";

/** Un instant local, écrit en heure locale : c'est celle que le rappel lit. */
const at = (hour: number, minute = 0, day = 15) =>
  new Date(2026, 7, day, hour, minute, 0, 0);

describe("le palier du rappel", () => {
  it("laisse le fond noir de minuit à 10 h 59", () => {
    for (const hour of [0, 1, 7, 10]) {
      expect(urgencyStep({ now: at(hour), discovered: false })).toBe(0);
    }
    expect(urgencyStep({ now: at(10, 59), discovered: false })).toBe(0);
  });

  it("ouvre la progression à 11 h et l'achève à 23 h", () => {
    expect(urgencyStep({ now: at(URGENCY_FIRST_HOUR), discovered: false })).toBe(1);
    expect(urgencyStep({ now: at(URGENCY_LAST_HOUR), discovered: false })).toBe(URGENCY_STEPS);
  });

  it("avance d'un palier par heure, sans trou ni saut", () => {
    for (let hour = URGENCY_FIRST_HOUR; hour <= URGENCY_LAST_HOUR; hour += 1) {
      expect(urgencyStep({ now: at(hour), discovered: false })).toBe(
        hour - URGENCY_FIRST_HOUR + 1
      );
    }
  });

  it("tient le palier pendant toute l'heure", () => {
    for (const minute of [0, 1, 30, 59]) {
      expect(urgencyStep({ now: at(14, minute), discovered: false })).toBe(4);
    }
  });

  it("garde le rouge maximal jusqu'à 23 h 59", () => {
    expect(urgencyStep({ now: at(23, 59), discovered: false })).toBe(URGENCY_STEPS);
  });

  /*
   * La règle qui commande tout le reste : la découverte l'emporte sur l'heure, à n'importe
   * quelle heure. Il n'y a pas de « sauf après 22 h », pas de retour progressif.
   */
  it("revient au noir dès que la carte est découverte, à toute heure", () => {
    for (let hour = 0; hour < 24; hour += 1) {
      expect(urgencyStep({ now: at(hour), discovered: true })).toBe(0);
    }
  });

  /*
   * Le palier ne dépend que de l'heure qu'il est. Une application restée fermée de 11 h à
   * 22 h ne doit pas rattraper onze paliers : elle en affiche un, celui de 22 h.
   */
  it("se déduit de l'heure courante et non des paliers manqués", () => {
    expect(urgencyStep({ now: at(22), discovered: false })).toBe(12);
  });

  it("ne sort pas de la rampe si l'horloge rend une heure aberrante", () => {
    const step = urgencyStep({ now: { getHours: () => 99 } as Date, discovered: false });
    expect(urgencyGround(step)).toBeDefined();
    expect(step).toBeLessThanOrEqual(URGENCY_STEPS);
  });
});

describe("la rampe du noir au rouge", () => {
  it("compte un fond par palier, palier noir compris", () => {
    expect(URGENCY_GROUNDS).toHaveLength(URGENCY_STEPS + 1);
  });

  it("part du noir et arrive au rouge pur", () => {
    expect(URGENCY_GROUNDS[0]).toBe("#000000");
    expect(URGENCY_GROUNDS[URGENCY_STEPS]).toBe("#ff0000");
  });

  /*
   * Teinte et saturation constantes, formulées de la façon la plus vérifiable qui soit : sur
   * l'axe du rouge pur, le vert et le bleu sont nuls à tous les paliers. Une dérive de teinte
   * ou un passage hors gamut se verrait ici avant de se voir à l'écran.
   */
  it("reste exactement sur l'axe du rouge : ni vert ni bleu", () => {
    for (const ground of URGENCY_GROUNDS) {
      expect(ground).toMatch(/^#[0-9a-f]{2}0000$/);
    }
  });

  it("s'éclaircit à chaque palier, sans jamais reculer ni stagner", () => {
    const rouge = (hex: string) => parseInt(hex.slice(1, 3), 16);
    for (let step = 1; step <= URGENCY_STEPS; step += 1) {
      expect(rouge(URGENCY_GROUNDS[step])).toBeGreaterThan(rouge(URGENCY_GROUNDS[step - 1]));
    }
  });

  /*
   * Le premier palier doit se distinguer du noir : c'est la raison d'être du plancher de la
   * rampe. Sans lui il vaudrait `#010000`, et les deux premières heures ne diraient rien.
   */
  it("rend le premier palier visible plutôt que théorique", () => {
    expect(parseInt(URGENCY_GROUNDS[1].slice(1, 3), 16)).toBeGreaterThanOrEqual(0x18);
  });

  it("borne les paliers hors échelle au lieu de rendre un fond absent", () => {
    expect(urgencyGround(-3)).toBe("#000000");
    expect(urgencyGround(999)).toBe("#ff0000");
  });
});

describe("l'échéance du prochain palier", () => {
  it("vise le début de l'heure suivante", () => {
    expect(msUntilNextStep(at(14, 0))).toBe(60 * 60 * 1000);
    expect(msUntilNextStep(at(14, 59))).toBe(60 * 1000);
  });

  /*
   * Minuit est une échéance comme une autre, et c'est ce qui permet de n'avoir aucune
   * réinitialisation à programmer : le rendez-vous horaire de 23 h porte le changement de jour.
   */
  it("traverse minuit sans échéance particulière", () => {
    const veille = at(23, 30);
    const attendu = new Date(2026, 7, 16, 0, 0, 0, 0).getTime() - veille.getTime();
    expect(msUntilNextStep(veille)).toBe(attendu);
  });

  /*
   * Une horloge reculée — passage à l'heure d'hiver, correction réseau pendant que
   * l'application est ouverte — placerait l'échéance derrière nous, et une minuterie à zéro
   * se rappellerait sans fin. Le plancher d'une seconde est ce qui l'en empêche.
   */
  it("ne rend jamais d'échéance nulle ou passée, horloge reculée comprise", () => {
    for (let heure = 0; heure < 24; heure += 1) {
      for (const minute of [0, 30, 59]) {
        expect(msUntilNextStep(at(heure, minute))).toBeGreaterThanOrEqual(1000);
      }
    }
    const recule = new Date(at(14, 30));
    recule.setMilliseconds(999);
    expect(msUntilNextStep(recule)).toBeGreaterThanOrEqual(1000);
  });
});
