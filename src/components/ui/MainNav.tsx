"use client";

import type { CSSProperties } from "react";
import { usePathname } from "next/navigation";
import { TreeLink } from "@/components/navigation/TreeLink";
import { BookOpen, Compass } from "lucide-react";
import { rootSectionOf } from "@/lib/navigation-tree";

/**
 * Deux destinations. L'écran de progression a disparu avec les compteurs qu'il
 * affichait : le suivi continue d'exister — c'est lui qui choisit le concept du
 * jour — mais il n'a plus à être consulté ni géré.
 *
 * Réglages n'en fait pas partie, et n'y entre pas en devenant un rail. C'est un
 * enfant d'Explorer dans l'arbre, et il s'atteint par la roue de son en-tête :
 * lui ouvrir une seconde porte ferait deux chemins vers un écran qu'on visite
 * une fois, et `rootSectionOf` ne saurait plus dire quelle branche allumer.
 */
const ITEMS = [
  { href: "/", label: "Aujourd'hui", icon: BookOpen },
  { href: "/explore", label: "Explorer", icon: Compass },
] as const;

/**
 * La navigation principale : une barre au bas du téléphone, un rail au bord
 * gauche de l'écran de bureau.
 *
 * **Un seul composant, et c'est le point.** Deux arbres conditionnés par la
 * largeur auraient dupliqué la liste des entrées, la règle de la branche active
 * et le repère de position — trois mécanismes qui n'ont aucune raison de
 * différer d'un appareil à l'autre. Ce qui diffère est la géométrie, et elle
 * seule : elle est dans `globals.css`, section « Charpente », où le seuil se
 * lit avec son motif.
 *
 * Le composant est **en tête du `AppShell`**, avant le contenu. Sa position
 * visuelle ne change pas — il est `fixed` dans les deux cas — mais l'ordre de
 * tabulation, lui, suit le document : un rail annoncé à gauche et atteint au
 * clavier après tout l'écran aurait été la navigation la plus visible et la
 * plus longue à joindre. Deux entrées se traversent sans coût sur téléphone,
 * où le clavier est de toute façon l'exception.
 */
export function MainNav() {
  const pathname = usePathname();
  /*
   * L'entrée allumée est celle de la **branche** où l'on se trouve, pas celle dont
   * l'adresse est un préfixe de la nôtre.
   *
   * La comparaison de chaînes laissait `/settings` sans onglet actif : c'est une route de
   * premier niveau dans l'URL, mais un enfant d'Explorer dans l'arbre. L'écran paraissait
   * alors hors de l'application, et « où suis-je » — le premier de tous les contrôles de
   * navigation — n'y avait aucune réponse. L'arbre sait déjà remonter ; il suffit de le
   * lui demander.
   */
  const section = rootSectionOf(pathname);
  const activeIndex = ITEMS.findIndex((item) => item.href === section);

  /*
   * `main-nav` porte à la fois la géométrie et le nom de transition de vue, qui
   * sort la navigation de l'instantané racine : sans lui, elle traverserait
   * chaque changement d'écran au lieu d'y rester immobile.
   *
   * Et le fond est **plein**. Il était à 90 % avec un flou d'arrière-plan, ce qui
   * laissait passer un fantôme du texte défilant dessous : sur un fond noir pur, un
   * flou n'a rien à fondre, et le seul produit visible de la translucidité était ce
   * fantôme. Le flou part avec elle — il coûtait un recalcul à chaque image de
   * défilement pour un résultat entièrement recouvert.
   */
  return (
    <nav aria-label="Navigation principale" className="main-nav">
      {/*
       * Le cadre du repère de position, et donc la surface dont les
       * pourcentages de `.nav-marker` sont pris. Sur téléphone il est centré et
       * borné comme le contenu ; dans le rail il occupe toute la largeur, et sa
       * hauteur est celle des deux entrées empilées.
       */}
      <div
        className="relative mx-auto max-w-md lg:mx-0 lg:max-w-none"
        style={
          {
            "--nav-index": String(Math.max(activeIndex, 0)),
            "--nav-count": String(ITEMS.length),
          } as CSSProperties
        }
      >
        <span
          aria-hidden
          className="nav-marker"
          style={{ opacity: activeIndex < 0 ? 0 : 1 }}
        />
        <ul className="flex items-stretch justify-around lg:flex-col lg:justify-start">
          {ITEMS.map(({ href, label, icon: Icon }, index) => {
            const active = index === activeIndex;
            return (
              <li key={href} className="flex-1 lg:flex-none">
                <TreeLink
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className="press flex flex-col items-center gap-1 py-3 text-xs"
                >
                  <Icon
                    size={20}
                    strokeWidth={active ? 2 : 1.5}
                    className={`transition-colors motion-ui ${
                      active ? "text-accent" : "text-ink-faint"
                    }`}
                  />
                  <span
                    className={`transition-colors motion-ui ${
                      active ? "text-accent" : "text-ink-faint"
                    }`}
                  >
                    {label}
                  </span>
                </TreeLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
