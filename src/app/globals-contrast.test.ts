import { describe, expect, it } from "vitest";

import { cssBlock } from "@/test/globals-css";

/**
 * Ce que ces tests protègent, et pourquoi ils existent.
 *
 * Depuis qu'il y a deux thèmes, chaque rôle de couleur a deux valeurs, et **aucune des deux
 * ne se vérifie à l'œil**. Un rapport de contraste ne se devine pas : `#5e5345` sur `#edddc0`
 * paraît confortable et vaut 5,61:1 ; `#9dabb3` sur le même fond paraît lisible et vaut 1,76.
 * C'est exactement la défaillance que la méthode nomme — une échelle construite à l'œil
 * produit des paliers qui échouent, et on le découvre en audit.
 *
 * Deux défaillances sont possibles ici, et elles sont toutes les deux silencieuses.
 *
 * **Une valeur retouchée fait passer un couple sous son seuil.** Personne ne le voit : le
 * texte reste affiché, simplement moins lisible, et la personne pour qui il devient illisible
 * n'est pas celle qui a fait la retouche.
 *
 * **Un rôle est ajouté à un thème et oublié dans l'autre.** Il hérite alors silencieusement de
 * la valeur du thème sombre — un gris clair au milieu d'une page crème — et rien n'échoue.
 *
 * Les seuils sont ceux de WCAG 2.1, et ce sont les trois, pas deux : 4,5:1 pour du texte
 * courant, 3:1 pour un objet graphique ou un composant d'interface — bordure fonctionnelle,
 * icône porteuse de sens, anneau de focus —, aucun pour un filet qui ne porte pas de fonction.
 * La troisième ligne est celle qu'on oublie, et c'est elle qui couvre les deux points les plus
 * souvent manqués.
 */

/** La luminance relative de WCAG 2.1, et sa linéarisation par canal. */
function relativeLuminance(hex: string): number {
  const canaux = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * canaux[0] + 0.7152 * canaux[1] + 0.0722 * canaux[2];
}

function contrast(a: string, b: string): number {
  const [la, lb] = [relativeLuminance(a), relativeLuminance(b)];
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

/**
 * Les déclarations d'un bloc, `var()` résolus.
 *
 * Les rôles ne portent pas de valeur littérale — ils renvoient à un barreau de l'échelle, qui
 * est la couche primitive. Suivre le renvoi est donc obligatoire, et le faire ici plutôt que
 * dans chaque cas de test évite d'écrire deux fois la même résolution. La chaîne est courte
 * par construction (un rôle, un barreau) ; la borne existe pour qu'un cycle échoue plutôt que
 * de tourner.
 */
function tokensOf(bloc: string): Map<string, string> {
  const brut = new Map<string, string>();
  for (const [, nom, valeur] of bloc.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) {
    brut.set(nom, valeur.trim());
  }

  const resolus = new Map<string, string>();
  for (const [nom] of brut) {
    let valeur = brut.get(nom)!;
    for (let saut = 0; valeur.startsWith("var(") && saut < 8; saut++) {
      const cible = valeur.slice(4, valeur.indexOf(")")).trim();
      const suivante = brut.get(cible);
      expect(suivante, `« ${nom} » renvoie à « ${cible} », absent du même bloc`).toBeDefined();
      valeur = suivante!;
    }
    resolus.set(nom, valeur);
  }
  return resolus;
}

const SOMBRE = tokensOf(cssBlock(":root {"));
const CLAIR = tokensOf(cssBlock(':root[data-theme="light"] {'));

/**
 * Les rôles, et eux seuls : c'est le contrat que les composants consomment. Les barreaux des
 * deux échelles — `--n-*` et `--c-*` — sont la couche primitive et n'ont pas à se
 * correspondre un à un.
 */
const ROLES = [
  "--paper",
  "--paper-raised",
  "--paper-contact",
  "--ink",
  "--ink-reading",
  "--ink-soft",
  "--ink-faint",
  "--line",
  "--line-strong",
  "--accent",
  "--accent-soft",
  "--accent-contrast",
  "--good",
  "--warn",
] as const;

type Role = (typeof ROLES)[number];

/**
 * Chaque couple qui porte quelque chose, avec son seuil et l'endroit où il se voit.
 *
 * La colonne « où » n'est pas décorative : elle est ce qui permet, quand un test échoue, de
 * savoir quel écran regarder. Un seuil de 0 dit qu'aucune règle ne s'applique — le couple
 * figure alors pour que sa valeur soit relevée, jamais pour qu'elle soit jugée.
 */
const COUPLES: Array<[Role, Role, number, string]> = [
  ["--ink", "--paper", 4.5, "le texte principal, partout"],
  ["--ink-reading", "--paper", 4.5, "les mille cinq cents mots de « Approfondir »"],
  ["--ink-soft", "--paper", 4.5, "le texte secondaire : phrases de liste, résumés"],
  ["--ink-faint", "--paper", 4.5, "les chapeaux en capitales, le lien de retour"],
  ["--ink", "--paper-raised", 4.5, "une ligne de liste au survol, la feuille « Ouvrir dans une IA »"],
  ["--ink-soft", "--paper-raised", 4.5, "une pastille de mot-clé"],
  ["--ink-faint", "--paper-raised", 4.5, "un onglet inactif d'Explorer, une option de thème non retenue"],
  ["--ink", "--paper-contact", 4.5, "une pastille de mot-clé au ton accent"],
  ["--accent-contrast", "--accent", 4.5, "le bouton principal, « Approfondir », l'onglet actif"],
  ["--warn", "--paper", 4.5, "« Effacer l'historique des cartes déjà lues »"],
  ["--good", "--paper", 4.5, "déclaré, sans usage aujourd'hui — le seuil vaut d'avance"],
  ["--line-strong", "--paper", 3, "la bordure du bouton secondaire"],
  ["--accent", "--paper", 3, "l'anneau de focus, le repère de position, l'icône active"],
  ["--accent", "--paper-raised", 3, "le même anneau, sur une surface levée"],
  ["--accent", "--paper-contact", 3, "le même anneau, sur une surface au contact"],
  ["--paper-raised", "--paper", 0, "l'écart qui fait voir un survol"],
  ["--paper-contact", "--paper", 0, "l'écart qui fait voir un contact"],
  ["--line", "--paper", 0, "un filet : il ne porte aucune fonction, et n'a donc aucun seuil"],
];

describe("les deux thèmes portent les mêmes rôles", () => {
  for (const [nom, tokens] of [
    ["sombre", SOMBRE],
    ["clair", CLAIR],
  ] as const) {
    it(`définit les quatorze rôles — thème ${nom}`, () => {
      for (const role of ROLES) {
        const valeur = tokens.get(role);
        expect(valeur, `« ${role} » manque au thème ${nom}`).toBeDefined();
        /*
         * Et il vaut une couleur littérale sur six chiffres. Un rôle laissé à `inherit`, à un
         * mot-clé ou à un `var()` non résolu passerait les tests de contraste en les faisant
         * porter sur autre chose que ce que le navigateur rendra.
         */
        expect(valeur, `« ${role} » du thème ${nom} n'est pas un hexadécimal à six chiffres`).toMatch(
          /^#[0-9a-f]{6}$/
        );
      }
    });
  }

  /*
   * Le thème clair n'a pas le droit d'être *plus court* que le sombre. C'est la défaillance
   * décrite en tête : un rôle ajouté d'un côté seulement n'échoue nulle part, il hérite.
   */
  it("n'ajoute pas de rôle d'un seul côté", () => {
    /*
     * Le critère est « ce qui vaut une couleur », et non une liste tenue à la main : c'est ce
     * qui fait que ce test attrape un rôle ajouté demain sans qu'on ait pensé à l'inscrire
     * ici. Le bloc sombre porte aussi les durées, les courbes et les écarts — ils ne valent
     * pas une couleur et sortent d'eux-mêmes. Les barreaux des deux échelles sont écartés
     * nommément : ce sont deux couches primitives distinctes, et elles n'ont aucune raison de
     * se correspondre.
     */
    const couleursDe = (tokens: Map<string, string>) =>
      new Set(
        [...tokens]
          .filter(([nom, valeur]) => /^#[0-9a-f]{6}$/.test(valeur) && !/^--[nc]-\d+$/.test(nom))
          .map(([nom]) => nom)
      );
    expect(couleursDe(CLAIR)).toEqual(couleursDe(SOMBRE));
  });
});

describe("les couples porteurs tiennent leur seuil", () => {
  for (const [nom, tokens] of [
    ["sombre", SOMBRE],
    ["clair", CLAIR],
  ] as const) {
    for (const [avant, arriere, seuil, ou] of COUPLES) {
      if (seuil === 0) continue;
      it(`${avant} sur ${arriere} ≥ ${seuil}:1 — thème ${nom}`, () => {
        const rapport = contrast(tokens.get(avant)!, tokens.get(arriere)!);
        expect(rapport, `${ou} — ${tokens.get(avant)} sur ${tokens.get(arriere)}`).toBeGreaterThanOrEqual(
          seuil
        );
      });
    }
  }
});

/**
 * Et la hiérarchie des encres, qui n'est pas une affaire de seuil mais d'ordre.
 *
 * « Un titre se repère, un texte se lit » : le texte de lecture suivie reste **sous** le texte
 * principal, et au-dessus du texte secondaire. C'est vrai dans le sombre par construction, et
 * le thème clair devait le refaire tenir sur un fond dont le plafond de contraste est plus bas
 * — c'est là que l'ordre pouvait se perdre sans que rien n'échoue.
 */
describe("l'ordre des encres survit au changement de thème", () => {
  for (const [nom, tokens] of [
    ["sombre", SOMBRE],
    ["clair", CLAIR],
  ] as const) {
    it(`principal > lecture > secondaire > tertiaire — thème ${nom}`, () => {
      const fond = tokens.get("--paper")!;
      const rapports = (["--ink", "--ink-reading", "--ink-soft", "--ink-faint"] as const).map(
        (role) => contrast(tokens.get(role)!, fond)
      );
      for (let i = 0; i < rapports.length - 1; i++) {
        expect(rapports[i], `thème ${nom}, barreau ${i}`).toBeGreaterThan(rapports[i + 1]);
      }
    });
  }
});
