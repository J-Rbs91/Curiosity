"use client";

import { usePathname } from "next/navigation";
import { TreeLink } from "@/components/navigation/TreeLink";
import { BookOpen, Compass } from "lucide-react";
import { rootSectionOf } from "@/lib/navigation-tree";

/**
 * Deux destinations. L'écran de progression a disparu avec les compteurs qu'il
 * affichait : le suivi continue d'exister — c'est lui qui choisit le concept du
 * jour — mais il n'a plus à être consulté ni géré.
 */
const ITEMS = [
  { href: "/", label: "Aujourd'hui", icon: BookOpen },
  { href: "/explore", label: "Explorer", icon: Compass },
] as const;

export function BottomNav() {
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
   * Deux choses se jouent sur cette ligne de classes.
   *
   * `bottom-nav` porte le nom de transition de vue — il est défini dans
   * `globals.css`, avec la raison. Il sort la barre de l'instantané racine, sans
   * quoi elle traverse chaque changement d'écran au lieu d'y rester immobile.
   *
   * Et le fond est **plein**. Il était à 90 % avec un flou d'arrière-plan, ce qui
   * laissait passer un fantôme du texte défilant dessous : sur un fond noir pur, un
   * flou n'a rien à fondre, et le seul produit visible de la translucidité était ce
   * fantôme. Le flou part avec elle — il coûtait un recalcul à chaque image de
   * défilement pour un résultat entièrement recouvert.
   */
  return (
    <nav
      aria-label="Navigation principale"
      className="bottom-nav fixed inset-x-0 bottom-0 z-40 bg-paper"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="relative mx-auto max-w-md">
        {/*
         * Le repère de position est une barre fine qui glisse. Il double la
         * couleur et la graisse de l'entrée active — le mouvement n'est jamais
         * le seul porteur de l'information.
         */}
        <span
          aria-hidden
          className="absolute top-0 h-px bg-accent transition-transform motion-ui"
          style={{
            width: `${100 / ITEMS.length}%`,
            transform: `translateX(${Math.max(activeIndex, 0) * 100}%)`,
            opacity: activeIndex < 0 ? 0 : 1,
          }}
        />
        <ul className="flex items-stretch justify-around">
          {ITEMS.map(({ href, label, icon: Icon }, index) => {
            const active = index === activeIndex;
            return (
              <li key={href} className="flex-1">
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
