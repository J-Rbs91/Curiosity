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
