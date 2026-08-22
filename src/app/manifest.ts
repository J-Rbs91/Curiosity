import type { MetadataRoute } from "next";
import { BASE_PATH, withBasePath } from "@/lib/base-path";

/**
 * Le manifeste est calculé plutôt que déposé dans `public/`.
 *
 * Un fichier statique aurait figé `start_url`, `scope` et les chemins d'icônes sur la racine
 * du domaine. Servie sous /<dépôt>/, l'application se serait installée avec une portée qui
 * ne recouvre pas ses propres pages : elle s'ouvre alors dans le navigateur au lieu de son
 * icône, et personne ne comprend pourquoi.
 *
 * Le manifeste reste un fichier : `force-static` le dit à l'export statique, qui refuse par
 * défaut toute route dont il ne peut pas prouver qu'elle ne dépend pas de la requête.
 */
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Curiosity : sciences du travail, des organisations et des systèmes",
    short_name: "Curiosity",
    description:
      "Une exploration interdisciplinaire des sciences du travail, des organisations et des systèmes.",
    start_url: `${BASE_PATH}/`,
    scope: `${BASE_PATH}/`,
    display: "standalone",
    orientation: "portrait",
    /*
     * L'écran de démarrage et la barre système de l'application installée, dans le thème par
     * défaut. Un manifeste est lu au lancement et ne porte qu'une valeur : il ne peut pas
     * connaître une préférence qui vit dans le `localStorage` du lecteur. C'est donc le thème
     * sombre qui s'affiche pendant l'ouverture, quelle que soit la préférence, et le thème
     * choisi qui prend la main dès que la page est analysée. La limite est réelle et ne se
     * contourne pas sans serveur ; elle est consignée au §11 de `docs/ux-direction.md`.
     */
    background_color: "#000000",
    theme_color: "#000000",
    lang: "fr",
    icons: [
      {
        src: withBasePath("/icons/icon-192.png"),
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: withBasePath("/icons/icon-512.png"),
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: withBasePath("/icons/icon-maskable-512.png"),
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
