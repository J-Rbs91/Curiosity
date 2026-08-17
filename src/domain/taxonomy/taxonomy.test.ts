import { describe, expect, it } from "vitest";
import { createTaxonomy } from "./index";
import { authors, concepts, domains, families, taxonomy, themes } from "@/content";
import type { Author, Concept, Domain, Family, Theme } from "@/types";

/**
 * Deux séries d'épreuves, et elles ne disent pas la même chose.
 *
 * La première porte sur le **mécanisme**, sur une taxonomie inventée de quelques lignes :
 * elle vérifie que rattacher, ordonner et compter fonctionnent, indépendamment de toute
 * discipline. La seconde porte sur la **configuration réelle** — quatre familles, onze
 * domaines, l'ordre demandé — et c'est elle qui attrape une faute de saisie dans
 * `src/content/taxonomy.ts`, qu'aucun type ne peut attraper puisque les identifiants sont
 * des chaînes.
 */

// --- une taxonomie de laboratoire -----------------------------------------

const family = (id: string, order: number): Family => ({
  id,
  slug: id,
  label: id,
  question: `Question de ${id} ?`,
  order,
});

const domain = (id: string, familyId: string, order: number): Domain => ({
  id,
  slug: id,
  label: id,
  tagline: "",
  familyId,
  order,
  description: "",
});

const theme = (id: string, domainId: string): Theme => ({
  id,
  slug: id,
  title: id,
  tagline: "",
  keywords: [],
  description: "",
  domain: domainId,
});

const concept = (id: string, themeIds: string[], domainId?: string): Concept => ({
  id,
  slug: id,
  title: id,
  hookQuestion: "?",
  shortExplanation: "",
  authors: [],
  themes: themeIds,
  ...(domainId ? { domain: domainId } : {}),
});

const author = (id: string, domainId: string): Author => ({
  id,
  slug: id,
  name: id,
  tagline: "",
  keywords: [],
  bio: "",
  themes: [],
  domain: domainId,
});

/** Deux familles, trois domaines, dont un délibérément vide. */
function laboratoire() {
  return createTaxonomy({
    families: [family("f2", 2), family("f1", 1)],
    domains: [
      domain("d1b", "f1", 2),
      domain("d1a", "f1", 1),
      domain("d2", "f2", 1),
      domain("vide", "f2", 2),
    ],
    themes: [theme("t1", "d1a"), theme("t2", "d1b"), theme("t3", "d2")],
    authors: [author("a1", "d1a"), author("a2", "d2")],
    concepts: [concept("c1", ["t1"]), concept("c2", ["t2"]), concept("c3", ["t3"])],
  });
}

describe("createTaxonomy — ordre", () => {
  it("range les familles par leur rang déclaré, jamais par leur nom", () => {
    expect(laboratoire().families.map((f) => f.id)).toEqual(["f1", "f2"]);
  });

  it("range les domaines par famille, puis par rang dans la famille", () => {
    expect(laboratoire().domains.map((d) => d.id)).toEqual(["d1a", "d1b", "d2", "vide"]);
  });
});

describe("createTaxonomy — rattachement", () => {
  const t = laboratoire();

  it("limite les domaines proposés à ceux de la famille choisie", () => {
    // C'est la dépendance qui fait un filtre cohérent : choisir une famille ne doit jamais
    // laisser proposer un domaine d'une autre.
    expect(t.domainsOf("f1").map((d) => d.id)).toEqual(["d1a", "d1b"]);
    expect(t.domainsOf("f2").map((d) => d.id)).toEqual(["d2", "vide"]);
  });

  it("remonte de la carte au domaine par son thème, sans qu'elle le déclare", () => {
    expect(t.domainOfConcept(concept("x", ["t2"]))?.id).toBe("d1b");
  });

  it("laisse une carte déclarer son domaine quand son thème est inconnu", () => {
    // Le cas d'une fiche qui introduit un thème que l'application ne connaît pas encore :
    // sans ce champ, elle n'apparaîtrait dans aucun domaine.
    expect(t.domainOfConcept(concept("x", ["inconnu"], "d2"))?.id).toBe("d2");
  });

  it("préfère le domaine déclaré à celui du thème", () => {
    expect(t.domainOfConcept(concept("x", ["t1"], "d2"))?.id).toBe("d2");
  });

  it("ne situe pas une carte que rien ne rattache, plutôt que de la ranger au hasard", () => {
    expect(t.domainOfConcept(concept("x", ["inconnu"]))).toBeUndefined();
  });

  it("rend la famille d'un domaine, et rien pour un domaine inconnu", () => {
    expect(t.familyOf("d1b")?.id).toBe("f1");
    expect(t.familyOf("jamais-declare")).toBeUndefined();
  });
});

describe("createTaxonomy — périmètres de sélection", () => {
  const t = laboratoire();

  it("tire dans tout le corpus, dans une famille, dans un domaine ou dans un thème", () => {
    expect(t.conceptsIn({ kind: "all" }).map((c) => c.id)).toEqual(["c1", "c2", "c3"]);
    expect(t.conceptsIn({ kind: "family", id: "f1" }).map((c) => c.id)).toEqual(["c1", "c2"]);
    expect(t.conceptsIn({ kind: "domain", id: "d1b" }).map((c) => c.id)).toEqual(["c2"]);
    expect(t.conceptsIn({ kind: "theme", id: "t3" }).map((c) => c.id)).toEqual(["c3"]);
  });

  it("rend une liste vide, et non une erreur, pour un périmètre sans contenu", () => {
    expect(t.conceptsIn({ kind: "domain", id: "vide" })).toEqual([]);
    expect(t.conceptsIn({ kind: "family", id: "jamais-declaree" })).toEqual([]);
  });
});

describe("createTaxonomy — domaine déclaré et domaine pourvu", () => {
  const t = laboratoire();

  it("distingue un domaine ouvert d'un domaine qui a du contenu", () => {
    expect(t.domain("vide")).toBeDefined();
    expect(t.hasCorpus("vide")).toBe(false);
    expect(t.hasCorpus("d1a")).toBe(true);
  });

  it("expose thèmes et auteurs d'un domaine, vides compris", () => {
    expect(t.themesOf("d1a").map((x) => x.id)).toEqual(["t1"]);
    expect(t.authorsOf("vide")).toEqual([]);
  });
});

describe("createTaxonomy — extensibilité", () => {
  it("accueille un domaine supplémentaire sans rien d'autre qu'une déclaration", () => {
    /*
     * L'épreuve qui compte : un domaine ajouté à la seule configuration doit être complet —
     * ordonné dans sa famille, adressable par son slug, reconnu comme sans corpus. Si un
     * jour cette assertion demande de modifier un composant pour passer, l'architecture a
     * cessé d'être pilotée par les données.
     */
    const etendue = createTaxonomy({
      families: [family("f1", 1), family("f5", 5)],
      domains: [domain("d1a", "f1", 1), domain("nouveau", "f5", 1)],
      themes: [theme("t1", "d1a")],
      authors: [],
      concepts: [concept("c1", ["t1"])],
    });

    expect(etendue.domainBySlug("nouveau")?.familyId).toBe("f5");
    expect(etendue.domainsOf("f5").map((d) => d.id)).toEqual(["nouveau"]);
    expect(etendue.hasCorpus("nouveau")).toBe(false);
    expect(etendue.domains.map((d) => d.id)).toEqual(["d1a", "nouveau"]);
  });
});

// --- la configuration réelle ----------------------------------------------

describe("la taxonomie de l'application", () => {
  it("compte quatre familles, dans l'ordre demandé", () => {
    expect(taxonomy.families.map((f) => f.label)).toEqual([
      "Comprendre les humains et les organisations",
      "Comprendre le travail réel",
      "Comprendre la production et les systèmes",
      "Comprendre le pilotage",
    ]);
  });

  it("donne à chaque famille une question directrice", () => {
    for (const f of taxonomy.families) expect(f.question).toMatch(/\?$/);
  });

  it("compte onze domaines, chacun rattaché à une famille existante", () => {
    expect(taxonomy.domains).toHaveLength(11);
    for (const d of taxonomy.domains) expect(taxonomy.family(d.familyId)).toBeDefined();
  });

  it("range les domaines de chaque famille dans l'ordre demandé", () => {
    const labels = (familyId: string) => taxonomy.domainsOf(familyId).map((d) => d.label);
    expect(labels("humans-organizations")).toEqual([
      "Sociologie des organisations",
      "Sociologie du travail",
      "Psychologie du travail",
      "Économie comportementale",
    ]);
    expect(labels("real-work")).toEqual([
      "Ergonomie de l'activité",
      "Human Factors / ergonomie cognitive",
    ]);
    expect(labels("production-systems")).toEqual([
      "Operations Management",
      "Systems Thinking",
      "Cybernétique",
    ]);
    expect(labels("steering")).toEqual(["Théorie de la mesure / KPI", "Science de la décision"]);
  });

  it("n'emploie aucun identifiant ni slug deux fois", () => {
    const uniques = <T>(xs: T[]) => new Set(xs).size === xs.length;
    expect(uniques(families.map((f) => f.id))).toBe(true);
    expect(uniques(families.map((f) => f.slug))).toBe(true);
    expect(uniques(domains.map((d) => d.id))).toBe(true);
    expect(uniques(domains.map((d) => d.slug))).toBe(true);
  });

  it("rattache chaque thème et chaque auteur à un domaine déclaré", () => {
    // Sans quoi la page du domaine les perdrait sans rien dire.
    for (const t of themes) expect(taxonomy.domain(t.domain)).toBeDefined();
    for (const a of authors) expect(taxonomy.domain(a.domain)).toBeDefined();
  });
});

describe("la sociologie des organisations, domaine parmi les autres", () => {
  const sociologie = taxonomy.domainBySlug("sociologie-des-organisations");

  it("appartient à la famille « Comprendre les humains et les organisations »", () => {
    expect(sociologie).toBeDefined();
    expect(taxonomy.familyOf(sociologie!.id)?.id).toBe("humans-organizations");
  });

  it("recueille tout le corpus existant, sans qu'aucune fiche ait eu à le déclarer", () => {
    /*
     * La garantie de non-régression de la migration : les cartes instruites avant que les
     * domaines n'existent sont toutes rattachées, et aucune n'est restée en dehors.
     */
    expect(taxonomy.conceptsIn({ kind: "domain", id: sociologie!.id })).toHaveLength(
      concepts.length
    );
    expect(concepts.every((c) => c.domain === undefined)).toBe(true);
  });

  it("est le seul domaine pourvu, les dix autres attendant leur corpus", () => {
    const pourvus = taxonomy.domains.filter((d) => taxonomy.hasCorpus(d.id));
    expect(pourvus.map((d) => d.id)).toEqual([sociologie!.id]);
  });
});
