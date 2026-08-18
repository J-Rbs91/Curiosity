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
    name: "Curiosity : comprendre le travail et les organisations",
    short_name: "Curiosity",
    description:
      "Un concept à chaque ouverture : son domaine, son thème, le concept, une citation de son auteur, un résumé court et ses sources.",
    start_url: `${BASE_PATH}/`,
    scope: `${BASE_PATH}/`,
    display: "standalone",
    orientation: "portrait",
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
