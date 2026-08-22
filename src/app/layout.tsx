import type { Metadata, Viewport } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/ui/AppShell";
import { ServiceWorkerRegistration } from "@/components/ui/ServiceWorkerRegistration";
import { withBasePath } from "@/lib/base-path";
import { THEME_SCRIPT } from "@/lib/theme";

/*
 * Deux graisses, et c'est le compte exact de ce que l'application emploie.
 *
 * 400 est celle du texte long — c'est la graisse de labeur, et elle n'était pas
 * chargée : les trois endroits qui appelaient la serif sans `font-semibold`
 * — la citation d'une fiche, l'accroche de l'écran du jour, le titre de la
 * feuille « Approfondir » — se rendaient donc dans la graisse voisine ou dans
 * une graisse synthétisée par le navigateur, qui épaissit en déformant.
 *
 * 600 est celle des titres, la seule que `font-semibold` demande. 500 et 700
 * étaient chargées et n'étaient appelées nulle part : les retirer paie le
 * fichier que 400 ajoute, et au-delà.
 */
const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  /*
   * Le titre ne nomme plus une discipline. Il en nommait une tant qu'il n'y en avait
   * qu'une ; en nommer onze serait illisible, et n'en nommer qu'une redeviendrait faux à
   * chaque domaine instruit. Il nomme donc le champ que les onze domaines couvrent
   * ensemble — c'est le titre que porte aussi l'écran d'ouverture, et les deux ne
   * divergent pas.
   */
  title: "Curiosity : sciences du travail, des organisations et des systèmes",
  description:
    "Une exploration interdisciplinaire des sciences du travail, des organisations et des systèmes.",
  /*
   * Ces chemins sont préfixés à la main : Next applique `basePath` aux liens et aux
   * ressources qu'il émet lui-même, pas aux URL écrites dans les métadonnées.
   */
  manifest: withBasePath("/manifest.webmanifest"),
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Curiosity",
  },
  icons: {
    /*
     * Le favicon d'onglet est distinct de l'icône d'application : son fond est transparent
     * pour laisser vivre la couleur du chrome du navigateur, et son encre s'adapte au schéma
     * clair/sombre. Les PNG restent ensuite disponibles pour les usages qui demandent une
     * icône d'application complète. `src/app/favicon.ico` sert de repli transparent.
     */
    icon: [
      { url: withBasePath("/icons/favicon.svg"), type: "image/svg+xml" },
      { url: withBasePath("/icons/icon-192.png"), sizes: "192x192", type: "image/png" },
      { url: withBasePath("/icons/icon-512.png"), sizes: "512x512", type: "image/png" },
    ],
    apple: withBasePath("/icons/apple-touch-icon.png"),
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  /*
   * Pas de `maximumScale`, et c'est une décision d'accessibilité, pas un oubli.
   *
   * Le contraindre à 1 bloque le zoom par pincement. Sur une application dont
   * l'unique fonction est de lire, cela retire au lecteur son dernier levier —
   * le premier, la préférence de taille de police du navigateur, n'agit que
   * parce que les tailles sont exprimées en rem (voir l'échelle typographique
   * de `globals.css`). Les deux vont ensemble : rétablir l'un sans l'autre
   * n'aurait pas suffi.
   */
  /*
   * La couleur de la barre système, dans le thème par défaut.
   *
   * Elle est écrite en dur et non dérivée d'une requête média, parce que le thème de
   * l'application ne suit pas `prefers-color-scheme` : il suit une préférence enregistrée,
   * que seul le navigateur connaît. `ThemeKeeper` remet donc cette balise d'accord avec le
   * thème réellement résolu, une fois la page ouverte — voir `src/lib/theme.ts`.
   */
  themeColor: "#000000",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    /*
     * `suppressHydrationWarning` : le script ci-dessous pose `data-theme` pendant l'analyse
     * du HTML, donc avant que React hydrate. React trouve alors sur `<html>` un attribut que
     * son rendu ne contient pas, et le signalerait comme une erreur d'hydratation — il doit
     * au contraire garder ce que le DOM porte. Motif documenté par Next sous « Themes », dans
     * `node_modules/next/dist/docs/01-app/02-guides/preventing-flash-before-hydration.md`.
     */
    <html
      lang="fr"
      className={`${sourceSerif.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/*
         * Le thème, appliqué avant la première peinture. Il est ici et pas ailleurs : un
         * script dans `<head>` s'exécute pendant l'analyse du document, quand `next/script`
         * — même en `beforeInteractive` — ne garantit que l'ordre de téléchargement, et
         * qu'un effet, fût-il de mise en page, s'exécute après l'hydratation. Sur une
         * connexion lente, ces deux replis laissent voir du noir puis du crème.
         *
         * Son contenu n'est pas tapé ici : il est assemblé à partir des constantes de
         * `src/lib/theme.ts`, à côté de la fonction que le reste de l'application appelle.
         * Deux implémentations d'une même résolution divergeraient.
         */}
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <ServiceWorkerRegistration />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
