import { describe, expect, it } from "vitest";

import { generatedConcepts } from "@/content/generated/concepts.generated";
import { generatedDeepenings } from "@/content/generated/deepenings.generated";
import { deepenedConceptIds } from "@/content/generated/deepenings-index.generated";

/**
 * Ce que ces tests tiennent n'est pas la qualité des textes, qui se lit, mais le contrat
 * entre les trois fichiers projetés : l'index doit dire exactement ce que porte le module des
 * textes, et chaque texte doit avoir une carte derrière lui.
 *
 * L'enjeu est concret. L'index décide de l'apparence du bouton « Approfondir » sur toute
 * l'application ; les textes ne sont chargés que par l'écran qui les affiche. Si les deux
 * divergent, le bouton mène à un écran introuvable, ou bien un texte écrit reste
 * inaccessible sans que rien ne le signale.
 */

describe("projection des approfondissements", () => {
  it("indexe exactement les textes projetés", () => {
    expect([...deepenedConceptIds].sort()).toEqual(
      generatedDeepenings.map((d) => d.conceptId).sort()
    );
  });

  it("ne projette aucun texte sans sa carte", () => {
    const cartes = new Set(generatedConcepts.map((c) => c.id));
    for (const { conceptId } of generatedDeepenings) expect(cartes.has(conceptId)).toBe(true);
  });

  it("ne projette pas deux textes pour une même carte", () => {
    const ids = generatedDeepenings.map((d) => d.conceptId);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("n'affiche jamais de tiret cadratin", () => {
    // La règle vaut pour tout ce que le lecteur voit : docs/corpus-workflow.md.
    for (const deepening of generatedDeepenings) {
      const affiche = [
        ...deepening.lead,
        ...deepening.sections.flatMap((s) => [s.title, ...s.paragraphs]),
        ...deepening.limits,
      ];
      for (const texte of affiche) expect(texte, deepening.conceptId).not.toMatch(/—/);
    }
  });

  it("porte les trois blocs sur chaque texte", () => {
    for (const deepening of generatedDeepenings) {
      expect(deepening.lead.length, deepening.conceptId).toBeGreaterThan(0);
      expect(deepening.sections.length, deepening.conceptId).toBeGreaterThanOrEqual(3);
      // La frontière documentaire n'est pas facultative : un texte long tiré de cinq sources
      // dépasse ce qu'elles établissent, et ce champ est l'endroit où il le déclare.
      expect(deepening.limits.length, deepening.conceptId).toBeGreaterThan(0);
    }
  });
});
