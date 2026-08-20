import type { Metadata, Viewport } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/ui/AppShell";
import { ServiceWorkerRegistration } from "@/components/ui/ServiceWorkerRegistration";
import { withBasePath } from "@/lib/base-path";

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
     * Le SVG d'abord : un navigateur qui le comprend s'en tient là et affiche une marque nette
     * à toutes les densités. Les autres descendent la liste, et `src/app/favicon.ico` — repris
     * par Next au titre de sa convention de fichier, sans passer par ici — sert de dernier
     * recours aux plus anciens.
     */
    icon: [
      { url: withBasePath("/icons/icon.svg"), type: "image/svg+xml" },
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
  // Application sombre, sans variante claire : une seule couleur de barre système.
  themeColor: "#000000",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${sourceSerif.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <ServiceWorkerRegistration />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
