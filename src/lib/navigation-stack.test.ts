import { describe, it, expect } from "vitest";
import {
  intentBetween,
  parentEntry,
  parentOf,
  reconcileTrail,
  samePath,
  stepsBackTo,
  type TrailEntry,
} from "./navigation-tree";

/**
 * La pile réelle et la trace, rejouées ensemble sur tous les parcours de l'application.
 *
 * Les tests de `navigation-tree.test.ts` interrogent la trace seule ; ils ne pouvaient donc
 * pas voir le défaut rapporté, qui n'apparaît qu'au moment où l'on **confronte** la trace à
 * la pile du navigateur : un retour annonçant « Explorer » et atterrissant sur Aujourd'hui.
 * Ce fichier tient les deux à la fois, applique à chaque clic le geste que `TreeLink`
 * choisirait, et vérifie sur chaque écran de chaque parcours l'unique propriété qui compte :
 *
 *     un retour atteint l'écran qu'il annonce.
 *
 * Avant correction, l'exploration exhaustive jusqu'à sept gestes rendait 32 parcours fautifs
 * — tous des variantes du même désaccord : un remplacement avait consommé une entrée de la
 * pile sans en retirer de la trace, et le dépilement comptait un cran de trop.
 */

const chemin = (href: string) => href.split("?")[0];

interface Entree {
  href: string;
  /** La place de cette entrée dans la pile — ici, son rang, puisque la pile est modélisée. */
  position: number;
}

interface Etat {
  pile: Entree[];
  trail: TrailEntry[];
}

function inscrit(trail: TrailEntry[], entree: Entree): TrailEntry[] {
  return reconcileTrail(trail, {
    href: entree.href,
    pathname: chemin(entree.href),
    label: entree.href,
    position: entree.position,
  });
}

function courant(etat: Etat): Entree {
  return etat.pile[etat.pile.length - 1];
}

/** Ce que fait un clic sur `href` depuis l'état donné, geste de `TreeLink` compris. */
function clic(etat: Etat, href: string): { etat: Etat; corrige: boolean } {
  const ici = courant(etat);
  const intention = intentBetween(chemin(ici.href), chemin(href));
  let pile = etat.pile.slice();
  let corrige = false;

  if (intention === "descend") {
    pile.push({ href, position: ici.position + 1 });
  } else if (intention === "sibling") {
    pile[pile.length - 1] = { href, position: ici.position };
  } else {
    const pas = stepsBackTo(etat.trail, chemin(href), ici.position);
    if (pas === null) {
      pile[pile.length - 1] = { href, position: ici.position };
    } else {
      pile = pile.slice(0, ici.position - pas + 1);
      /*
       * Le filet de `climb.ts` : si la traversée n'a pas mené où le lien l'annonçait, on
       * remplace. Il est modélisé pour que le test dise **aussi** quand il a dû servir —
       * `corrige` doit rester faux partout, sans quoi le calcul des crans se trompe encore.
       */
      if (!samePath(chemin(pile[pile.length - 1].href), chemin(href))) {
        corrige = true;
        pile[pile.length - 1] = { href, position: pile[pile.length - 1].position };
      }
    }
  }

  return { etat: { pile, trail: inscrit(etat.trail, pile[pile.length - 1]) }, corrige };
}

/** Le bouton retour du système : une entrée de moins, et rien d'autre. */
function retourSysteme(etat: Etat): Etat {
  const pile = etat.pile.slice(0, -1);
  return { pile, trail: inscrit(etat.trail, pile[pile.length - 1]) };
}

/** Ce que `BackLink` affiche sur l'écran courant : sa destination et son nom. */
function retour(etat: Etat): { href: string; label: string } | null {
  const ici = courant(etat);
  const dessus = parentEntry(etat.trail);
  if (dessus) return { href: dessus.href, label: dessus.label };
  const repli = REPLIS[chemin(ici.href)] ?? parentOf(chemin(ici.href));
  return repli ? { href: repli, label: repli } : null;
}

/**
 * Le graphe des liens de l'application, réduit à un exemplaire par nature d'écran. Deux
 * thèmes suffisent à couvrir « le frère » ; ce qui compte est la nature des liens, pas leur
 * nombre.
 */
const LIENS: Record<string, string[]> = {
  "/": ["/explore/", "/passees/", "/explore/concept/approfondir/?c=a"],
  "/explore/": [
    "/explore/",
    "/explore/?vue=themes",
    "/explore/?vue=auteurs",
    "/explore/domains/d/",
    "/explore/themes/t/",
    "/explore/authors/w/",
    "/settings/",
  ],
  "/explore/domains/d/": ["/explore/themes/t/", "/explore/themes/u/"],
  "/explore/themes/t/": ["/explore/concept/?c=a", "/explore/concept/?c=b"],
  "/explore/themes/u/": ["/explore/concept/?c=b"],
  "/explore/authors/w/": ["/explore/concept/?c=a"],
  "/passees/": ["/explore/concept/?c=a", "/explore/concept/?c=b"],
  "/explore/concept/": ["/explore/concept/approfondir/?c=a"],
  "/explore/concept/approfondir/": [],
  "/settings/": [],
};

/** Le repli que l'écran passe lui-même à `BackLink`, là où l'arbre ne suffit pas. */
const REPLIS: Record<string, string> = {
  "/explore/concept/approfondir/": "/explore/concept/?c=a",
};

/** La barre de navigation, présente sur tous les écrans. */
const NAV = ["/", "/explore/"];

function liens(href: string): string[] {
  return [...(LIENS[chemin(href)] ?? []), ...NAV];
}

const PROFONDEUR = 7;

describe("pile réelle et trace", () => {
  it("fait atteindre à chaque retour l'écran qu'il annonce", () => {
    const fautes: string[] = [];
    const vus = new Set<string>();

    const explorer = (etat: Etat, journal: string[]) => {
      const cle = JSON.stringify([
        etat.pile.map((e) => e.href),
        etat.trail.map((e) => `${e.href}@${e.position}`),
      ]);
      if (vus.has(cle) || journal.length > PROFONDEUR) return;
      vus.add(cle);

      const annonce = retour(etat);
      if (annonce && etat.pile.length > 1) {
        const { etat: apres, corrige } = clic(etat, annonce.href);
        const atteint = courant(apres).href;
        if (!samePath(chemin(atteint), chemin(annonce.href)) || corrige) {
          fautes.push(
            `${journal.join(" > ")}\n    annonce « ${annonce.label} » (${annonce.href})` +
              `\n    atteint ${atteint}${corrige ? " (rattrapé par le filet)" : ""}` +
              `\n    pile ${JSON.stringify(etat.pile.map((e) => e.href))}` +
              `\n    trace ${JSON.stringify(etat.trail.map((e) => e.href))}`
          );
        }
        explorer(apres, [...journal, `retour(${annonce.href})`]);
      }

      for (const href of liens(courant(etat).href)) {
        explorer(clic(etat, href).etat, [...journal, href]);
      }
      if (etat.pile.length > 1) {
        explorer(retourSysteme(etat), [...journal, "retour système"]);
      }
    };

    const depart: Etat = {
      pile: [{ href: "/", position: 0 }],
      trail: inscrit([], { href: "/", position: 0 }),
    };
    explorer(depart, ["/"]);

    expect(fautes.join("\n\n")).toBe("");
  });

  it("ne garde pas dans la trace un ancêtre que la pile n'a plus", () => {
    /*
     * Le parcours mesuré : la carte du jour, les cartes précédentes, une fiche, puis
     * l'onglet Explorer — une remontée vers un nœud absent de la trace, donc un
     * remplacement. L'entrée de la fiche est consommée ; celles des cartes précédentes
     * restent dessous, mais la trace ne les connaît plus.
     */
    let etat: Etat = {
      pile: [{ href: "/", position: 0 }],
      trail: inscrit([], { href: "/", position: 0 }),
    };
    for (const href of ["/passees/", "/explore/concept/?c=a", "/explore/"]) {
      etat = clic(etat, href).etat;
    }
    expect(etat.pile.map((e) => e.href)).toEqual(["/", "/passees/", "/explore/"]);
    expect(etat.trail.map((e) => e.href)).toEqual(["/", "/explore/"]);

    // Puis l'onglet Aujourd'hui : deux crans réels, et non un seul cran de trace.
    expect(stepsBackTo(etat.trail, "/", courant(etat).position)).toBe(2);
    const apres = clic(etat, "/").etat;
    expect(courant(apres).href).toBe("/");
    /*
     * Avant correction, ce geste atterrissait sur `/passees/`, et la trace y accrochait
     * « Explorer » comme parent : le retour de cet écran annonçait Explorer et ramenait sur
     * Aujourd'hui. La trace ne garde plus de nœud dont la place n'est pas sous nous.
     */
    expect(apres.trail.map((e) => e.href)).toEqual(["/"]);
  });

  it("remplace plutôt que dépiler quand les places manquent", () => {
    // Trace écrite par une version antérieure, ou stockage refusé : aucune place inscrite.
    const sansPlace: TrailEntry[] = [
      { href: "/", pathname: "/", level: 0, label: "Aujourd'hui" },
      { href: "/explore/", pathname: "/explore/", level: 1, label: "Explorer" },
    ];
    expect(stepsBackTo(sansPlace, "/", 1)).toBeNull();
    expect(stepsBackTo(sansPlace, "/", null)).toBeNull();
  });
});
