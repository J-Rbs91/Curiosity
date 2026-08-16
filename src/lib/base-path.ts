/**
 * Le préfixe sous lequel l'application est servie.
 *
 * Next préfixe de lui-même les liens de navigation et les ressources qu'il émet, mais pas
 * les chemins qu'on écrit à la main — le manifeste, les icônes, le service worker. Ceux-là
 * passent par ici, faute de quoi ils pointeraient sur la racine du domaine et l'application
 * s'installerait sans icône ni mode hors-ligne, sans que rien ne le signale.
 *
 * `NEXT_PUBLIC_*` est inliné à la construction : la valeur est figée dans le bundle, ce qui
 * convient à un export statique où il n'y a plus d'exécution serveur pour la lire.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Un chemin absolu de l'application, préfixé pour l'hébergement en cours. */
export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
