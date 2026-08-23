/**
 * La mesure d'audience — ce qui est compté, et ce qui ne l'est pas.
 *
 * Une seule question à laquelle répondre : combien de personnes ouvrent l'application, et
 * quels écrans elles regardent. GoatCounter y suffit, et il y suffit sans rien demander au
 * lecteur — pas de cookie, pas d'identifiant, pas de profil : une vue part avec son chemin,
 * son référent et le format de l'écran, et c'est tout. C'est le compteur que porte déjà le
 * CV, pour la même raison ; le site est distinct pour que les deux audiences ne se
 * mélangent pas dans un même tableau de bord.
 *
 * Ce fichier ne tient que les constantes et le calcul du chemin. C'est `AudienceCounter`
 * qui charge le script et compte.
 */

/** Le site GoatCounter qui reçoit les vues. */
export const GOATCOUNTER_ENDPOINT = "https://curiosity.goatcounter.com/count";

/** Le script de comptage, servi par GoatCounter. */
export const GOATCOUNTER_SCRIPT = "https://gc.zgo.at/count.js";

/**
 * Les réglages passés au script, dans la forme qu'il attend : du JSON, en attribut.
 *
 * `no_onload` lui retire son comptage automatique à l'ouverture. Il en compterait un — le
 * premier — et un seul : l'application navigue sans recharger de page, si bien que tous les
 * écrans suivants lui échapperaient. Le comptage est donc repris à la main, le premier
 * écran comme les autres, pour que les deux cas passent par le même chemin et qu'aucun ne
 * soit compté deux fois.
 */
export const GOATCOUNTER_SETTINGS = '{"no_onload": true}';

/**
 * Le chemin enregistré pour un écran.
 *
 * Il est reconstruit à partir de ce que Next expose plutôt que lu dans `location` : le
 * préfixe d'hébergement — `/Curiosity/` sur GitHub Pages, rien en développement — n'y
 * figure pas. Les statistiques gardent donc la même forme si le site déménage un jour sous
 * un domaine propre, et l'historique reste comparable.
 *
 * La recherche, elle, est conservée : elle porte ici l'identité de l'écran. Une carte
 * s'ouvre sous `/explore/concept/?c=<concept>` et une vue de l'exploration sous
 * `/explore/?vue=<vue>` ; sans elle, toutes les cartes se confondraient en une seule ligne
 * du tableau de bord, et c'est précisément la ligne qu'on veut lire.
 */
export function countedPath(pathname: string, search: string): string {
  const chemin = pathname || "/";
  return search ? `${chemin}?${search}` : chemin;
}

/**
 * Les gestes comptés en plus des écrans, et pourquoi ils ne peuvent pas l'être comme eux.
 *
 * Un compteur de pages ne voit que des adresses. Or trois des actes qui disent si
 * l'application sert à quelque chose n'en changent pas : le seuil et la carte du jour
 * partagent `/`, la feuille de partage s'ouvre par-dessus l'écran, et le départ vers une IA
 * quitte le site. Aucun des trois n'apparaîtrait donc dans la liste des pages, quelle que
 * soit la finesse du comptage.
 *
 * GoatCounter sait compter autre chose que des pages — des événements, tenus dans une liste
 * à part. C'est ce que sont ces trois noms. Ils sont écrits ici, et pas à l'endroit du clic,
 * pour la raison qui vaut pour toute étiquette qu'on relit plus tard : renommée d'un côté et
 * pas de l'autre, elle ouvrirait une seconde ligne dans le tableau de bord au lieu de
 * continuer la première, et l'historique se couperait en deux sans que rien ne le signale.
 */
export const AUDIENCE_EVENTS = {
  /**
   * Le seuil franchi : quelqu'un est venu chercher la carte du jour.
   *
   * Découvrir et revoir sont confondus — c'est le même geste, et le libellé du bouton est la
   * seule chose qui les distingue.
   */
  carteDuJour: "carte-du-jour",
  /**
   * « Approfondir », les deux branches confondues : le développement écrit quand la carte en
   * a un, le passage au presse-papiers quand elle n'en a pas. La question est de savoir
   * combien de lecteurs veulent aller plus loin, pas par quel chemin le corpus les y mène.
   */
  approfondir: "approfondir",
  /** Une IA choisie dans la feuille : le lecteur poursuit vraiment, et ailleurs. */
  poursuiteIa: "poursuite-ia",
} as const;

/**
 * Envoie une vue, et dit si elle est partie.
 *
 * Le script arrive de façon asynchrone : tant qu'il n'est pas là, il n'y a rien à appeler.
 * L'appelant a besoin de le savoir — c'est ce qui lui permet de recompter au chargement
 * plutôt que de tenir pour envoyée une vue qui ne l'est pas.
 */
export function countPageview(path: string): boolean {
  if (typeof window === "undefined") return false;
  const count = window.goatcounter?.count;
  if (!count) return false;
  count({ path });
  return true;
}

/**
 * Envoie un geste.
 *
 * Rien n'est mis en attente ici, contrairement aux vues : un geste suppose un lecteur qui
 * agit, donc une application ouverte depuis un moment, donc un script déjà chargé. Le seul
 * cas où il manque encore est celui où il ne viendra pas — bloqueur, réseau coupé,
 * développement — et retenir l'événement pour cette éventualité coûterait un état à tenir
 * pour un compte qui ne partira jamais.
 */
export function countEvent(name: string): void {
  if (typeof window === "undefined") return;
  window.goatcounter?.count?.({ path: name, event: true });
}

declare global {
  interface Window {
    /** Ce que `count.js` dépose une fois chargé — et rien avant, d'où les gardes. */
    goatcounter?: { count?: (vars: { path: string; event?: boolean }) => void };
  }
}
