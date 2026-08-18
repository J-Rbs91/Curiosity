import { describe, it, expect } from "vitest";
import {
  levelOf,
  parentOf,
  rootSectionOf,
  intentBetween,
  reconcileTrail,
  stepsBackTo,
  parentEntry,
  type TrailEntry,
} from "./navigation-tree";

function entree(href: string, label = "x"): Omit<TrailEntry, "level"> {
  return { href, pathname: href.split("?")[0], label };
}

/** Rejoue un parcours complet et rend la trace obtenue. */
function parcours(...hrefs: string[]): TrailEntry[] {
  return hrefs.reduce<TrailEntry[]>((trail, href) => reconcileTrail(trail, entree(href)), []);
}

describe("niveaux de l'arbre", () => {
  it("place la racine, les branches et les feuilles", () => {
    expect(levelOf("/")).toBe(0);
    expect(levelOf("/explore")).toBe(1);
    expect(levelOf("/explore/authors/weber")).toBe(2);
    expect(levelOf("/explore/domains/sociologie-des-organisations")).toBe(2);
    expect(levelOf("/settings")).toBe(2);
    // Un thème est sous un domaine, parce que la page d'un domaine liste ses thèmes : le
    // lien qu'on y suit est une descente dans le contenu. Au même niveau, il remplaçait
    // l'entrée d'historique et faisait disparaître le domaine de la trace.
    expect(levelOf("/explore/themes/pouvoir")).toBe(3);
    expect(levelOf("/explore/concept")).toBe(4);
  });

  it("traite le slash final comme la même route", () => {
    // Le site est exporté avec un slash final. Sans cette normalisation,
    // `/explore/` tombait au niveau d'une feuille inconnue et la remontée
    // sautait un cran.
    for (const chemin of ["/explore", "/settings", "/explore/authors/weber", "/explore/concept"]) {
      expect(levelOf(`${chemin}/`)).toBe(levelOf(chemin));
      expect(parentOf(`${chemin}/`)).toBe(parentOf(chemin));
    }
    expect(intentBetween("/explore/authors/weber/", "/explore/")).toBe("climb");
    expect(intentBetween("/explore/", "/explore/authors/weber/")).toBe("descend");
  });

  it("donne un parent de repli à tout écran sauf la racine", () => {
    expect(parentOf("/")).toBeNull();
    expect(parentOf("/explore/themes/pouvoir")).toBe("/explore?vue=themes");
    expect(parentOf("/explore/concept/")).toBe("/explore");
  });

  it("ramène chaque coupe d'Explorer sur son propre onglet", () => {
    // Remonter d'un auteur sur l'onglet des domaines ferait perdre la liste d'où l'on vient.
    expect(parentOf("/explore/authors/weber")).toBe("/explore?vue=auteurs");
    expect(parentOf("/explore/themes/pouvoir")).toBe("/explore?vue=themes");
    // « Domaines » est la vue par défaut : son adresse ne porte pas de recherche.
    expect(parentOf("/explore/domains/sociologie-des-organisations")).toBe("/explore");
  });
});

describe("intention de navigation", () => {
  it("descend en s'enfonçant dans la hiérarchie", () => {
    expect(intentBetween("/explore", "/explore/authors/weber")).toBe("descend");
    expect(intentBetween("/", "/explore")).toBe("descend");
  });

  it("traite l'ouverture d'un thème depuis son domaine comme une descente", () => {
    // C'est le lien que la page d'un domaine porte neuf fois. Traité comme un pas de côté,
    // il effaçait le domaine de la pile : un seul retour depuis le thème en sortait.
    expect(
      intentBetween("/explore/domains/sociologie-des-organisations", "/explore/themes/pouvoir")
    ).toBe("descend");
    // Entrer par l'onglet « Thèmes » saute le niveau du domaine, et reste une descente.
    expect(intentBetween("/explore", "/explore/themes/pouvoir")).toBe("descend");
  });

  it("traite deux nœuds de même niveau comme des frères", () => {
    expect(intentBetween("/explore/concept/", "/explore/concept/")).toBe("sibling");
    expect(intentBetween("/explore", "/explore")).toBe("sibling");
    expect(intentBetween("/explore/authors/weber", "/settings")).toBe("sibling");
    expect(intentBetween("/explore/themes/pouvoir", "/explore/themes/decision")).toBe("sibling");
  });

  it("remonte en revenant vers la racine", () => {
    expect(intentBetween("/explore/concept/", "/explore")).toBe("climb");
    expect(intentBetween("/explore", "/")).toBe("climb");
  });
});

describe("trace du parcours", () => {
  it("n'enfle pas quand on passe d'un frère à l'autre", () => {
    const trail = parcours(
      "/",
      "/explore",
      "/explore/authors/weber",
      "/explore/concept/?c=a",
      "/explore/concept/?c=b",
      "/explore/concept/?c=c"
    );
    // Trois concepts visités, un seul niveau de profondeur consommé.
    expect(trail.map((e) => e.pathname)).toEqual([
      "/",
      "/explore",
      "/explore/authors/weber",
      "/explore/concept/",
    ]);
    // Et c'est bien le dernier concept que la trace retient.
    expect(trail[3].href).toBe("/explore/concept/?c=c");
  });

  it("garde le domaine quand on ouvre un de ses thèmes", () => {
    // Le parcours mesuré au navigateur avant correction rendait
    // ["/", "/explore", "/explore/themes/pouvoir"] : le domaine était perdu, et le retour
    // depuis le thème sortait du domaine au lieu d'y ramener.
    const trail = parcours(
      "/",
      "/explore",
      "/explore/domains/sociologie-des-organisations",
      "/explore/themes/pouvoir"
    );
    expect(trail.map((e) => e.pathname)).toEqual([
      "/",
      "/explore",
      "/explore/domains/sociologie-des-organisations",
      "/explore/themes/pouvoir",
    ]);
    expect(parentEntry(trail)?.pathname).toBe("/explore/domains/sociologie-des-organisations");
    expect(stepsBackTo(trail, "/explore/domains/sociologie-des-organisations")).toBe(1);
  });

  it("se tronque quand on remonte sur un nœud déjà traversé", () => {
    const descendu = parcours("/", "/explore", "/explore/authors/weber", "/explore/concept/?c=a");
    const remonte = reconcileTrail(descendu, entree("/explore"));
    expect(remonte.map((e) => e.pathname)).toEqual(["/", "/explore"]);
  });

  it("reconstruit un chemin cohérent depuis une arrivée directe en profondeur", () => {
    const froid = parcours("/explore/concept/?c=a");
    expect(froid).toHaveLength(1);
    expect(stepsBackTo(froid, "/explore")).toBeNull();
  });
});

describe("dépilement", () => {
  const trail = parcours("/", "/explore", "/explore/authors/weber", "/explore/concept/?c=a");

  it("compte les pas jusqu'à un ancêtre", () => {
    expect(stepsBackTo(trail, "/explore/authors/weber")).toBe(1);
    expect(stepsBackTo(trail, "/explore")).toBe(2);
    expect(stepsBackTo(trail, "/")).toBe(3);
  });

  it("refuse de dépiler vers un nœud absent de la trace", () => {
    // Dépiler à l'aveugle ferait sortir de l'application.
    expect(stepsBackTo(trail, "/explore/themes/pouvoir")).toBeNull();
  });

  it("refuse de dépiler vers le nœud courant", () => {
    expect(stepsBackTo(trail, "/explore/concept/")).toBeNull();
  });

  it("nomme le nœud du dessus, pour étiqueter un retour sans mentir", () => {
    const nomme = parcours("/", "/explore", "/explore/authors/weber", "/explore/concept/?c=a").map(
      (e, i) => ({ ...e, label: ["Aujourd'hui", "Explorer", "Max Weber", "Bureaucratie"][i] })
    );
    expect(parentEntry(nomme)?.label).toBe("Max Weber");
    expect(parentEntry([nomme[0]])).toBeNull();
  });
});

describe("branche de premier niveau", () => {
  it("rattache chaque écran à l'onglet qui doit s'allumer", () => {
    expect(rootSectionOf("/")).toBe("/");
    expect(rootSectionOf("/explore")).toBe("/explore");
    expect(rootSectionOf("/explore/domains/sociologie-des-organisations/")).toBe("/explore");
    expect(rootSectionOf("/explore/themes/pouvoir/")).toBe("/explore");
    expect(rootSectionOf("/explore/concept/")).toBe("/explore");
    // Route de premier niveau dans l'URL, enfant d'Explorer dans l'arbre : c'est le cas
    // qui laissait la barre de navigation sans aucune entrée allumée.
    expect(rootSectionOf("/settings")).toBe("/explore");
  });

  it("n'allume aucune entrée sur une route absente de l'arbre", () => {
    expect(rootSectionOf("/nimportequoi")).toBe("");
  });
});
