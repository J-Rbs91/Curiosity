import type { NextConfig } from "next";

/**
 * L'application est exportée en fichiers statiques.
 *
 * C'est ce que la PWA est déjà : tout le contenu est compilé dans le bundle, le corpus est
 * projeté à la construction, et le seul état persistant vit dans le `localStorage` du
 * lecteur. Aucun écran n'a besoin d'un serveur, et exiger un serveur pour les servir aurait
 * ajouté une pièce que rien ne justifie.
 *
 * La contrepartie est une contrainte réelle : toute route dynamique doit énumérer ses
 * chemins à la construction (`generateStaticParams`), et rien ne peut dépendre de la requête.
 * Le build échoue si on l'oublie, ce qui est la bonne façon de l'apprendre.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",

  /*
   * GitHub Pages sert un dépôt de projet sous /<nom-du-dépôt>/, pas à la racine du domaine.
   * Le chemin vient de l'environnement plutôt que d'être écrit ici : en développement il est
   * vide, et un autre hébergement — un domaine propre, par exemple — n'aurait rien à
   * modifier dans le code.
   */
  basePath,

  /*
   * Un répertoire par route (`/settings/index.html`) plutôt qu'un fichier frère
   * (`/settings.html`) : c'est la forme qu'un hébergeur statique sait servir sans règle de
   * réécriture, GitHub Pages compris.
   */
  trailingSlash: true,
};

export default nextConfig;
