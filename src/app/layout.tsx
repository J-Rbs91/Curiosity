import type { Metadata, Viewport } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/ui/AppShell";
import { ServiceWorkerRegistration } from "@/components/ui/ServiceWorkerRegistration";
import { withBasePath } from "@/lib/base-path";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Curiosity — Sociologie des organisations",
  description:
    "Comprendre comment fonctionnent réellement les organisations : quelques minutes à chaque ouverture pour découvrir, relier et appliquer les grands concepts de sociologie des organisations.",
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
  maximumScale: 1,
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
