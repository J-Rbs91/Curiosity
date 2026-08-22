import { afterEach, describe, expect, it, vi } from "vitest";

import {
  DEFAULT_PREFERENCE,
  THEME_PREFERENCES,
  THEME_SCRIPT,
  THEME_STORAGE_KEY,
  isThemePreference,
  readPreference,
  resolveTheme,
  type ResolvedTheme,
  type ThemePreference,
} from "@/lib/theme";

/**
 * Ce que ces tests protègent, et pourquoi ils existent.
 *
 * La résolution d'un thème est écrite **deux fois** : une fois en TypeScript, que
 * l'application appelle, et une fois en JavaScript brut dans `THEME_SCRIPT`, que le navigateur
 * exécute pendant l'analyse du HTML. Ce doublon n'est pas un oubli — un script qui doit
 * s'exécuter avant que React existe ne peut pas importer un module —, mais c'est exactement la
 * situation que le §10 de `docs/ux-direction.md` nomme : deux implémentations d'un même
 * mécanisme divergent, toujours.
 *
 * La divergence serait ici parfaitement silencieuse. Rien n'échouerait : l'application
 * s'ouvrirait dans un thème, puis basculerait dans l'autre au premier rendu de `ThemeKeeper`.
 * C'est-à-dire précisément l'éclair que ce script existe pour supprimer, réintroduit par le
 * script lui-même.
 *
 * D'où le troisième bloc : il **exécute** la chaîne, dans un document simulé, et compare sa
 * réponse à celle de `resolveTheme` sur les huit entrées possibles.
 */

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("la préférence lue", () => {
  /** Un `localStorage` de fortune : ce que le module attend, et rien de plus. */
  function stubStockage(valeur: string | null, casse = false) {
    vi.stubGlobal("window", {
      localStorage: {
        getItem: () => {
          if (casse) throw new DOMException("stockage refusé");
          return valeur;
        },
      },
    });
  }

  for (const attendu of THEME_PREFERENCES) {
    it(`rend « ${attendu} » quand c'est ce qui est enregistré`, () => {
      stubStockage(attendu);
      expect(readPreference()).toBe(attendu);
    });
  }

  /*
   * Les trois façons dont la lecture peut mal tourner, et elles rendent toutes le défaut. Une
   * seule d'entre elles est théorique : les deux autres arrivent pour de bon — un navigateur
   * en navigation privée qui refuse le stockage, et une clé écrite par une version antérieure.
   */
  it("rend le défaut quand rien n'est enregistré", () => {
    stubStockage(null);
    expect(readPreference()).toBe(DEFAULT_PREFERENCE);
  });

  it("rend le défaut sur une valeur inconnue plutôt que de la propager", () => {
    stubStockage("sepia");
    expect(readPreference()).toBe(DEFAULT_PREFERENCE);
  });

  it("rend le défaut quand le stockage est refusé, sans lever", () => {
    stubStockage(null, true);
    expect(() => readPreference()).not.toThrow();
    expect(readPreference()).toBe(DEFAULT_PREFERENCE);
  });

  it("ne reconnaît que les trois préférences", () => {
    expect(THEME_PREFERENCES.every(isThemePreference)).toBe(true);
    for (const faux of ["", "Clair", "auto", null, 3, undefined]) {
      expect(isThemePreference(faux), `« ${String(faux)} »`).toBe(false);
    }
  });
});

describe("la règle de résolution", () => {
  const CAS: Array<[ThemePreference, boolean, ResolvedTheme]> = [
    ["system", true, "light"],
    ["system", false, "dark"],
    ["light", true, "light"],
    ["light", false, "light"],
    ["dark", true, "dark"],
    ["dark", false, "dark"],
  ];

  for (const [preference, systemeClair, attendu] of CAS) {
    it(`« ${preference} » + système ${systemeClair ? "clair" : "sombre"} → ${attendu}`, () => {
      expect(resolveTheme(preference, systemeClair)).toBe(attendu);
    });
  }

  /*
   * Un thème choisi est un thème choisi : c'est la moitié de l'intérêt d'avoir trois options
   * plutôt que deux, et une régression y serait invisible tant qu'on développe sur une machine
   * dont le système est dans le même thème que sa préférence.
   */
  it("n'écoute le système que si on le lui a demandé", () => {
    for (const fixe of ["light", "dark"] as const) {
      expect(resolveTheme(fixe, true)).toBe(resolveTheme(fixe, false));
    }
  });
});

describe("le script d'ouverture dit la même chose que la règle", () => {
  /**
   * Exécute `THEME_SCRIPT` dans un document simulé et rend l'attribut qu'il a posé.
   *
   * Le script est du JavaScript brut destiné au navigateur : il n'a ni import ni export, et
   * l'évaluer est la seule façon de le vérifier autrement qu'en le relisant. Les trois choses
   * qu'il touche — le stockage, la requête média, l'élément racine — sont fournies ici, et
   * rien d'autre : s'il en atteignait une quatrième, il échouerait.
   */
  function executer(stocke: string | null, systemeClair: boolean, casse = false): string | null {
    let pose: string | null = null;
    const localStorage = {
      getItem: (cle: string) => {
        if (casse) throw new DOMException("stockage refusé");
        expect(cle, "le script lit une autre clé que la sienne").toBe(THEME_STORAGE_KEY);
        return stocke;
      },
    };
    const matchMedia = (requete: string) => ({ matches: requete.includes("light") && systemeClair });
    const document = {
      documentElement: {
        setAttribute: (nom: string, valeur: string) => {
          expect(nom).toBe("data-theme");
          pose = valeur;
        },
      },
    };
    new Function("localStorage", "matchMedia", "document", THEME_SCRIPT)(
      localStorage,
      matchMedia,
      document
    );
    return pose;
  }

  for (const preference of [...THEME_PREFERENCES, null, "sepia"] as const) {
    for (const systemeClair of [true, false]) {
      const attendu = resolveTheme(
        isThemePreference(preference) ? preference : DEFAULT_PREFERENCE,
        systemeClair
      );
      it(`« ${String(preference)} » + système ${systemeClair ? "clair" : "sombre"} → ${attendu}`, () => {
        expect(executer(preference, systemeClair)).toBe(attendu);
      });
    }
  }

  /*
   * Et le cas qui compte le plus, parce qu'il décide si l'application s'ouvre ou pas : un
   * stockage qui lève. Le script doit alors ne rien poser du tout — l'attribut absent vaut le
   * thème par défaut — et surtout ne pas laisser l'exception remonter, où elle interromprait
   * l'analyse du document.
   */
  it("sort en silence quand le stockage est refusé, sans rien poser", () => {
    expect(() => executer(null, false, true)).not.toThrow();
    expect(executer(null, false, true)).toBeNull();
  });
});
