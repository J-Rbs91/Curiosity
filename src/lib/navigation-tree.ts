/**
 * L'arbre de navigation, et le contrat qui fait que le bouton retour du système
 * descend cet arbre au lieu de rejouer l'historique des visites.
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
  { motif: /^\/explore\/authors\//, niveau: 2, parent: "/explore" },
  { motif: /^\/explore\/themes\//, niveau: 2, parent: "/explore?vue=themes" },
  { motif: /^\/settings$/, niveau: 2, parent: "/explore" },
  /*
   * Toutes les fiches partagent un même chemin, le concept étant désigné par
   * `?c=<slug>`. C'est exactement ce qu'il faut ici : deux concepts sont des
   * frères, et les traiter comme un seul nœud de l'arbre est le comportement
   * juste — passer de l'un à l'autre ne consomme aucune profondeur.
   */
  { motif: /^\/explore\/concept$/, niveau: 3, parent: "/explore" },
];

/** Niveau d'un chemin. Une route inconnue est traitée comme une feuille. */
export function levelOf(pathname: string): number {
  const chemin = normalise(pathname);
  return NIVEAUX.find((n) => n.motif.test(chemin))?.niveau ?? 99;
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
