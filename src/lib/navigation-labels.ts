import { authors, themes, concepts, taxonomy } from "@/content";

/**
 * Nomme un écran depuis son adresse.
 *
 * Le nom sert à étiqueter un retour. Il est calculé depuis l'URL plutôt que
 * transmis par le lien qui a mené là : un libellé transmis serait absent dès
 * qu'on arrive par le bouton retour du système ou par un lien partagé, et le
 * retour afficherait alors une étiquette vide ou fausse.
 *
 * Prend l'adresse complète et non le seul chemin, parce que les fiches de
 * concept partagent un chemin unique et se distinguent par `?c=<slug>`.
 */
export function labelFor(href: string): string {
  const [brut, recherche = ""] = href.split("?");
  // Le site est exporté avec un slash final : les deux formes désignent le même écran.
  const pathname = brut !== "/" && brut.endsWith("/") ? brut.slice(0, -1) : brut;

  if (pathname === "/") return "Aujourd'hui";
  if (pathname === "/explore") return "Explorer";
  if (pathname === "/settings") return "Réglages";
  if (pathname === "/passees") return "Cartes précédentes";

  const domaine = pathname.match(/^\/explore\/domains\/([^/]+)$/)?.[1];
  if (domaine) return taxonomy.domainBySlug(domaine)?.label ?? "Explorer";

  const auteur = pathname.match(/^\/explore\/authors\/([^/]+)$/)?.[1];
  if (auteur) return authors.find((a) => a.slug === auteur)?.name ?? "Explorer";

  const theme = pathname.match(/^\/explore\/themes\/([^/]+)$/)?.[1];
  if (theme) return themes.find((t) => t.slug === theme)?.title ?? "Explorer";

  if (pathname === "/explore/concept") {
    const slug = new URLSearchParams(recherche).get("c");
    return concepts.find((c) => c.slug === slug)?.title ?? "Concept";
  }

  /*
   * L'approfondissement porte le nom de son concept, et non « Approfondir ».
   *
   * Ce libellé n'étiquette pas la page où l'on est : il étiquette la destination d'un retour.
   * Or on ne revient jamais sur un approfondissement depuis un écran plus profond, celui-ci
   * étant la feuille de l'arbre. Le nom du concept est donc ce qui s'affiche dans la trace,
   * là où il sert à se relire.
   */
  if (pathname === "/explore/concept/approfondir") {
    const slug = new URLSearchParams(recherche).get("c");
    return concepts.find((c) => c.slug === slug)?.title ?? "Concept";
  }

  return "Explorer";
}
