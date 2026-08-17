import type {
  Author,
  Concept,
  Domain,
  DomainId,
  Family,
  FamilyId,
  Theme,
  ThemeId,
} from "@/types";

/**
 * La taxonomie, résolue une fois pour toute l'application.
 *
 * Ce module ne contient **aucune donnée** : il reçoit les familles, les domaines, les
 * thèmes, les auteurs et les cartes, et rend l'objet que les écrans interrogent. C'est ce
 * qui permet de le tester sur une taxonomie inventée de trois lignes, et c'est ce qui
 * garantit qu'aucun écran n'a à savoir *comment* un concept est rattaché à son domaine —
 * seulement à le demander.
 *
 * Le rattachement, justement. Une carte porte ses thèmes ; un thème porte son domaine ; un
 * domaine porte sa famille. Une carte connaît donc son domaine **sans le déclarer**, et
 * c'est délibéré : le corpus a été instruit avant que les domaines n'existent, et exiger de
 * lui un champ de plus aurait fait dépendre huit fiches vérifiées d'une réécriture. Le
 * champ `Concept.domain` ne sert qu'au cas que l'héritage ne couvre pas — une fiche dont
 * aucun thème n'est connu de l'application.
 */

export interface TaxonomySource {
  families: Family[];
  domains: Domain[];
  themes: Theme[];
  authors: Author[];
  concepts: Concept[];
}

/**
 * Ce sur quoi une sélection de cartes peut porter.
 *
 * Un seul type pour les quatre niveaux, plutôt qu'une fonction par niveau : le tirage d'une
 * carte, le comptage d'un domaine et la liste d'un thème posent la même question à des
 * hauteurs différentes de l'arbre. Le jour où une cinquième hauteur apparaît — un auteur,
 * une période —, elle s'ajoute ici et tous les appelants en héritent.
 */
export type CorpusScope =
  | { kind: "all" }
  | { kind: "family"; id: FamilyId }
  | { kind: "domain"; id: DomainId }
  | { kind: "theme"; id: ThemeId };

export interface Taxonomy {
  /** Les familles, dans leur ordre déclaré. */
  families: Family[];
  /** Tous les domaines, ordonnés par famille puis par rang. */
  domains: Domain[];

  family(id: FamilyId | undefined): Family | undefined;
  familyBySlug(slug: string): Family | undefined;
  domain(id: DomainId | undefined): Domain | undefined;
  domainBySlug(slug: string): Domain | undefined;

  /** Les domaines d'une famille, dans leur ordre déclaré. */
  domainsOf(familyId: FamilyId): Domain[];
  familyOf(domainId: DomainId): Family | undefined;

  /** Le domaine d'une carte : déclaré par elle, sinon hérité de son premier thème connu. */
  domainOfConcept(concept: Concept): Domain | undefined;

  themesOf(domainId: DomainId): Theme[];
  authorsOf(domainId: DomainId): Author[];

  /** Les cartes d'un périmètre, quel qu'en soit le niveau. */
  conceptsIn(scope: CorpusScope): Concept[];

  /**
   * Un domaine **déclaré** a-t-il effectivement du contenu ?
   *
   * La question a un sens parce que les deux avancent séparément : un domaine entre dans la
   * taxonomie le jour où on décide de le couvrir, et reçoit ses cartes bien plus tard. Un
   * écran qui ne distinguerait pas les deux présenterait « 0 résultat » là où il faut lire
   * « corpus en cours de constitution ».
   */
  hasCorpus(domainId: DomainId): boolean;
}

const byOrder = <T extends { order: number }>(a: T, b: T) => a.order - b.order;

export function createTaxonomy(source: TaxonomySource): Taxonomy {
  const families = [...source.families].sort(byOrder);

  const familyById = new Map(families.map((f) => [f.id, f]));
  const familyBySlug = new Map(families.map((f) => [f.slug, f]));
  const familyRank = new Map(families.map((f, index) => [f.id, index]));

  /*
   * Un domaine rattaché à une famille inconnue passe en fin de liste plutôt que de faire
   * échouer la construction. C'est une faute de configuration, et les tests de la taxonomie
   * l'attrapent ; à l'exécution, elle ne doit pas coûter l'application entière au lecteur.
   */
  const domains = [...source.domains].sort(
    (a, b) =>
      (familyRank.get(a.familyId) ?? families.length) -
        (familyRank.get(b.familyId) ?? families.length) || byOrder(a, b)
  );

  const domainById = new Map(domains.map((d) => [d.id, d]));
  const domainBySlug = new Map(domains.map((d) => [d.slug, d]));

  const domainsByFamily = new Map<FamilyId, Domain[]>(families.map((f) => [f.id, []]));
  for (const domain of domains) domainsByFamily.get(domain.familyId)?.push(domain);

  const domainOfTheme = new Map<ThemeId, DomainId>(
    source.themes.map((theme) => [theme.id, theme.domain])
  );

  function resolveDomainId(concept: Concept): DomainId | undefined {
    if (concept.domain) return concept.domain;
    for (const themeId of concept.themes) {
      const domainId = domainOfTheme.get(themeId);
      if (domainId) return domainId;
    }
    return undefined;
  }

  /* Calculé une fois : chaque écran de domaine interroge sinon tout le corpus à nouveau. */
  const conceptsByDomain = new Map<DomainId, Concept[]>();
  for (const concept of source.concepts) {
    const domainId = resolveDomainId(concept);
    if (!domainId) continue;
    const bucket = conceptsByDomain.get(domainId);
    if (bucket) bucket.push(concept);
    else conceptsByDomain.set(domainId, [concept]);
  }

  const conceptsOf = (domainId: DomainId) => conceptsByDomain.get(domainId) ?? [];

  return {
    families,
    domains,

    family: (id) => (id === undefined ? undefined : familyById.get(id)),
    familyBySlug: (slug) => familyBySlug.get(slug),
    domain: (id) => (id === undefined ? undefined : domainById.get(id)),
    domainBySlug: (slug) => domainBySlug.get(slug),

    domainsOf: (familyId) => domainsByFamily.get(familyId) ?? [],
    familyOf: (domainId) => familyById.get(domainById.get(domainId)?.familyId ?? ""),

    domainOfConcept: (concept) => domainById.get(resolveDomainId(concept) ?? ""),

    themesOf: (domainId) => source.themes.filter((t) => t.domain === domainId),
    authorsOf: (domainId) => source.authors.filter((a) => a.domain === domainId),

    conceptsIn(scope) {
      switch (scope.kind) {
        case "all":
          return source.concepts;
        case "domain":
          return conceptsOf(scope.id);
        case "family":
          return (domainsByFamily.get(scope.id) ?? []).flatMap((d) => conceptsOf(d.id));
        case "theme":
          return source.concepts.filter((c) => c.themes.includes(scope.id));
      }
    },

    hasCorpus: (domainId) => conceptsOf(domainId).length > 0,
  };
}
