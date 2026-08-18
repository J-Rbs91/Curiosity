/**
 * L'arbre de navigation, et le contrat qui fait que le bouton retour du système
 * descend cet arbre au lieu de rejouer l'historique des visites.
 *
 * Quatre niveaux sous la racine, et tous les chemins ne les traversent pas tous :
 * Aujourd'hui · Explorer · domaine ou auteur · thème · concept. Entrer par l'onglet
 * « Thèmes » saute le troisième, ce qui est sans conséquence — seule la comparaison des
 * niveaux compte, jamais leur contiguïté.
 *
 * Le problème qu'il règle. Le bouton retour d'Android — comme celui du
 * navigateur et le glissement latéral d'iOS — rejoue la **pile d'historique**,
 * c'est-à-dire la chronologie de ce que le lecteur a visité. Or personne ne se
 * représente une application comme une chronologie : on se la représente comme
 * un arbre, et « retour » veut dire « remonter d'un niveau », pas « refaire mes
 * pas à l'envers ». Les deux coïncident tant qu'on ne fait que descendre, et
 * divergent dès qu'on change d'onglet ou qu'on saute de côté.
 *
 * La solution. Ne pas intercepter le bouton retour — ce serait se battre contre
 * la plateforme et casser le glissement d'iOS. On maintient plutôt l'invariant
 * suivant :
 *
 *     la pile d'historique est toujours le chemin de la racine au nœud courant
 *
 * Sous cet invariant, le retour du système remonte l'arbre tout seul, sans une
 * ligne de code d'interception. Il suffit que chaque navigation choisisse le
 * bon geste :
 *
 * | Intention  | Comparaison des niveaux | Geste     |
 * |------------|-------------------------|-----------|
 * | descendre  | cible > courant         | empiler   |
 * | frère      | cible = courant         | remplacer |
 * | remonter   | cible < courant         | dépiler   |
 *
 * C'est la deuxième ligne qui manquait : un onglet ou un concept voisin
 * empilaient, et la pile enflait d'un cran à chaque pas de côté.
 *
 * Méthode complète : contrat de navigation arrière du plugin UXER.
 */

/**
 * Le site est exporté avec un slash final — `/explore/` et non `/explore` —
 * parce que c'est la forme qu'un hébergeur statique sert sans règle de
 * réécriture. Les deux formes doivent désigner le même nœud : sans cette
 * normalisation, `/explore/` ne correspondait à aucun motif, tombait au niveau
 * d'une feuille inconnue, et la remontée sautait un cran.
 */
function normalise(pathname: string): string {
  return pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

const NIVEAUX: { motif: RegExp; niveau: number; parent: string | null }[] = [
  { motif: /^\/$/, niveau: 0, parent: null },
  { motif: /^\/explore$/, niveau: 1, parent: "/" },
  /*
   * Chaque coupe d'Explorer remonte sur son propre onglet. « Domaines » étant la vue par
   * défaut, son adresse ne porte pas de recherche — c'est ce qui laisse `/explore` désigner
   * un écran et un seul, quelle que soit la coupe choisie.
   */
  { motif: /^\/explore\/domains\//, niveau: 2, parent: "/explore" },
  { motif: /^\/explore\/authors\//, niveau: 2, parent: "/explore?vue=auteurs" },
  { motif: /^\/settings$/, niveau: 2, parent: "/explore" },
  /*
   * Un thème est **sous** un domaine, et pas à côté.
   *
   * Il a longtemps porté le niveau 2, comme les domaines et les auteurs : les trois
   * étaient des coupes parallèles d'Explorer, et rien ne les reliait. Mais la page d'un
   * domaine liste ses thèmes, si bien que le lien qu'on y suit est une descente dans le
   * contenu. Traité comme un pas de côté, il remplaçait l'entrée d'historique au lieu de
   * l'empiler : le domaine disparaissait de la pile et de la trace, un seul retour depuis
   * le thème sortait du domaine, et consulter deux thèmes d'un même domaine coûtait six
   * gestes au lieu de trois — sur la page dont c'est précisément la fonction.
   *
   * Le niveau d'un nœud est le sien, pas celui du chemin par lequel on l'atteint : entrer
   * par l'onglet « Thèmes » saute simplement le niveau 2, ce que la comparaison des
   * niveaux gère sans rien de plus. Le parent de repli reste cet onglet — c'est la seule
   * destination sûre pour une adresse ouverte directement, où aucun domaine n'a été
   * traversé.
   */
  { motif: /^\/explore\/themes\//, niveau: 3, parent: "/explore?vue=themes" },
  /*
   * Toutes les fiches partagent un même chemin, le concept étant désigné par
   * `?c=<slug>`. C'est exactement ce qu'il faut ici : deux concepts sont des
   * frères, et les traiter comme un seul nœud de l'arbre est le comportement
   * juste — passer de l'un à l'autre ne consomme aucune profondeur.
   */
  { motif: /^\/explore\/concept$/, niveau: 4, parent: "/explore" },
  /*
   * L'approfondissement est **sous** la fiche, et c'est le seul niveau 5 de l'arbre.
   *
   * Il s'atteint depuis deux endroits que rien ne rapproche : la fiche d'un concept, et la
   * carte du jour, qui est la racine. La comparaison des niveaux gère les deux sans rien de
   * plus, puisque seul l'écart compte et non la contiguïté : venu de l'accueil, le retour
   * remonte à l'accueil ; venu de la fiche, il y revient. Le parent de repli reste la fiche,
   * qui est la seule destination sûre pour une adresse ouverte directement, mais il est privé
   * de son `?c=` que ce tableau ne peut pas connaître : c'est la trace qui restitue la fiche
   * exacte quand elle a été traversée.
   */
  { motif: /^\/explore\/concept\/approfondir$/, niveau: 5, parent: "/explore/concept" },
];

/** Le niveau d'une route absente de l'arbre : plus profond que toute feuille connue. */
const NIVEAU_INCONNU = 99;

/** Niveau d'un chemin. Une route inconnue est traitée comme une feuille. */
export function levelOf(pathname: string): number {
  const chemin = normalise(pathname);
  return NIVEAUX.find((n) => n.motif.test(chemin))?.niveau ?? NIVEAU_INCONNU;
}

/**
 * Destination de repli quand la remontée ne peut pas se faire en dépilant —
 * arrivée directe par un lien partagé, rechargement, reprise d'une application
 * mise en veille.
 */
export function parentOf(pathname: string): string | null {
  const noeud = NIVEAUX.find((n) => n.motif.test(normalise(pathname)));
  // `?? "/"` serait faux ici : la racine a un parent volontairement nul, et
  // l'opérateur ne distingue pas « absent de l'arbre » de « sans parent ».
  return noeud ? noeud.parent : "/";
}

/**
 * La branche de premier niveau à laquelle appartient un chemin — ce que la barre de
 * navigation doit allumer.
 *
 * Elle remonte l'arbre plutôt que de comparer des préfixes d'adresse : `/settings` est une
 * route de premier niveau dans l'URL et un enfant d'Explorer dans l'arbre, et une
 * comparaison de chaînes ne laissait donc aucun onglet allumé sur cet écran.
 *
 * Une route inconnue — la page « introuvable » — ne rend aucune branche : mieux vaut
 * n'allumer personne que désigner une destination où l'on n'est pas.
 */
export function rootSectionOf(pathname: string): string {
  let courant = normalise(pathname);
  if (levelOf(courant) === NIVEAU_INCONNU) return "";

  // Bornée par la profondeur de l'arbre : un parent mal déclaré ne doit pas boucler.
  for (let i = 0; i < NIVEAUX.length; i += 1) {
    if (levelOf(courant) <= 1) return courant;
    const parent = parentOf(courant);
    if (!parent) return courant;
    courant = normalise(parent.split("?")[0]);
  }
  return "/";
}

export type Intent = "descend" | "sibling" | "climb";

export function intentBetween(fromPath: string, toPath: string): Intent {
  const from = levelOf(fromPath);
  const to = levelOf(toPath);
  if (to > from) return "descend";
  if (to < from) return "climb";
  return "sibling";
}

// ---------------------------------------------------------------------------
// La trace : le chemin réellement parcouru dans l'arbre
// ---------------------------------------------------------------------------

export interface TrailEntry {
  /** Chemin complet, recherche comprise : c'est lui qu'une remontée restaure. */
  href: string;
  pathname: string;
  level: number;
  /** Nom lisible du nœud, pour étiqueter un retour sans mentir. */
  label: string;
}

const CLE = "curiosity.navigationTrail";

export function readTrail(): TrailEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const brut = window.sessionStorage.getItem(CLE);
    return brut ? (JSON.parse(brut) as TrailEntry[]) : [];
  } catch {
    return [];
  }
}

export function writeTrail(trail: TrailEntry[]): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(CLE, JSON.stringify(trail));
  } catch {
    // Le stockage peut être refusé : la trace se reconstruira, et la navigation
    // retombera simplement sur ses replis.
  }
}

/**
 * Recalcule la trace depuis le seul chemin courant.
 *
 * C'est volontairement une fonction de l'état affiché, et non un journal des
 * actions : elle donne le même résultat que la navigation soit venue d'un lien,
 * du bouton retour du système, d'un rechargement ou d'un lien partagé. Un
 * journal, lui, se désynchronise au premier geste qu'il n'a pas vu passer — et
 * le bouton retour du système est précisément celui qu'on ne voit pas passer.
 */
export function reconcileTrail(
  trail: TrailEntry[],
  entry: Omit<TrailEntry, "level">
): TrailEntry[] {
  const level = levelOf(entry.pathname);
  const complet: TrailEntry = { ...entry, level };

  const deja = trail.findIndex((e) => normalise(e.pathname) === normalise(entry.pathname));
  if (deja >= 0) {
    // Nœud déjà traversé : la trace se tronque jusqu'à lui.
    const tronquee = trail.slice(0, deja + 1);
    tronquee[deja] = complet;
    return tronquee;
  }

  // Sinon on garde les ancêtres strictement au-dessus et on ajoute le nœud.
  return [...trail.filter((e) => e.level < level), complet];
}

/**
 * Combien d'entrées dépiler pour rejoindre `targetPathname`, ou `null` si ce
 * nœud n'est pas dans la trace — auquel cas il n'est pas sous nous dans la pile
 * et dépiler sortirait de l'application.
 */
export function stepsBackTo(trail: TrailEntry[], targetPathname: string): number | null {
  const index = trail.findIndex((e) => normalise(e.pathname) === normalise(targetPathname));
  if (index < 0) return null;
  const pas = trail.length - 1 - index;
  return pas > 0 ? pas : null;
}

/** Le nœud juste au-dessus dans la trace : ce que « remonter » atteint vraiment. */
export function parentEntry(trail: TrailEntry[]): TrailEntry | null {
  return trail.length >= 2 ? trail[trail.length - 2] : null;
}
