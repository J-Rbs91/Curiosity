import { describe, expect, it } from "vitest";

import { espacesFrancaises } from "@/lib/typographie";

const FINE = " ";
const INSECABLE = " ";

/**
 * Ce que ces tests tiennent est la propriété qui rend la fonction sûre : elle **remplace** une
 * espace, elle n'en **ajoute** jamais. Tout le reste — quel caractère devant quel signe — est
 * une convention, et une convention se relit ; celle-là est une invariante, et une invariante
 * se vérifie.
 */
describe("espaces de la ponctuation double", () => {
  it("pose une fine insécable devant les trois signes hauts", () => {
    expect(espacesFrancaises("Vraiment ?")).toBe(`Vraiment${FINE}?`);
    expect(espacesFrancaises("Vraiment !")).toBe(`Vraiment${FINE}!`);
    expect(espacesFrancaises("d'abord ; ensuite")).toBe(`d'abord${FINE}; ensuite`);
  });

  it("pose une insécable de chasse pleine devant le deux-points", () => {
    expect(espacesFrancaises("une liste : les tâches")).toBe(`une liste${INSECABLE}: les tâches`);
  });

  it("traite les deux guillemets, à la chasse pleine", () => {
    expect(espacesFrancaises("« activité empêchée »")).toBe(
      `«${INSECABLE}activité empêchée${INSECABLE}»`
    );
  });

  it("normalise les espaces déjà insécables plutôt que de les empiler", () => {
    for (const espace of [" ", " ", " ", " ", "  "]) {
      expect(espacesFrancaises(`Vraiment${espace}?`)).toBe(`Vraiment${FINE}?`);
    }
  });

  it("n'ajoute aucune espace là où il n'y en a pas", () => {
    expect(espacesFrancaises("Vraiment?")).toBe("Vraiment?");
    expect(espacesFrancaises("https://exemple.org/a?b=c")).toBe("https://exemple.org/a?b=c");
    expect(espacesFrancaises("10:30")).toBe("10:30");
  });

  it("laisse intact un texte sans ponctuation double", () => {
    const texte = "Le réel de l'activité déborde ce qui s'est fait.";
    expect(espacesFrancaises(texte)).toBe(texte);
  });
});
