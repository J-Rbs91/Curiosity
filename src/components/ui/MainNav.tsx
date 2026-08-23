"use client";

import { useState, type CSSProperties } from "react";
import { usePathname } from "next/navigation";
import { Settings } from "lucide-react";
import { TreeLink } from "@/components/navigation/TreeLink";
import { BookIcon, CompassIcon } from "@/components/ui/NavIcons";
import { rootSectionOf, samePath } from "@/lib/navigation-tree";

/**
 * Deux destinations. L'écran de progression a disparu avec les compteurs qu'il
 * affichait : le suivi continue d'exister — c'est lui qui choisit le concept du
 * jour — mais il n'a plus à être consulté ni géré.
 *
 * Réglages n'en fait pas partie et n'en fera pas partie. C'est un enfant
 * d'Explorer dans l'arbre, et il n'a pas à devenir une troisième section parce
 * que le rail lui offre une place : `rootSectionOf` continue d'allumer Explorer
 * quand on y est, et le repère de position ne connaît que `ITEMS`.
 *
 * Sa roue se tient donc **hors** de cette liste, et il n'y en a jamais deux à la
 * fois : au bas du rail sur un écran de bureau, dans l'en-tête d'Explorer en
 * dessous du seuil, où le rail n'existe pas. Deux chemins simultanés vers un
 * écran qu'on visite une fois seraient un chemin de trop.
 */
const ITEMS = [
  { href: "/", label: "Aujourd'hui", icon: BookIcon },
  { href: "/explore", label: "Explorer", icon: CompassIcon },
] as const;

/**
 * Le rang du changement de section — le seul renseignement dont les icônes ont besoin pour
 * savoir qu'on vient de les activer.
 *
 * **Ce qu'il fallait distinguer.** « Explorer est la section courante » et « on vient d'entrer
 * dans Explorer » sont deux choses différentes, et seule la seconde autorise un mouvement.
 * L'adresse ne les distingue pas : elle change à chaque pas dans la branche, et elle ne change
 * pas quand on revient à l'application sur la section où on l'avait laissée.
 *
 * **Pourquoi un compteur et non un booléen.** Deux allers-retours entre les deux sections sont
 * deux activations, et un drapeau qui vaudrait deux fois « vrai » de suite ne dirait pas qu'il
 * s'est passé quelque chose entre les deux. Un rang qui avance, si — et il donne aux icônes
 * une clé de relance sans qu'aucune ne s'occupe de savoir quand se remettre à zéro.
 *
 * **Il vaut zéro à l'ouverture**, et c'est ce qui garde l'application silencieuse au
 * démarrage : l'état s'affiche, il ne se joue pas. Une animation au montage se rejouerait à
 * chaque retour sur l'application, pour un changement qui n'a pas eu lieu.
 *
 * L'ajustement se fait pendant le rendu plutôt que dans un effet : c'est la forme que React
 * documente pour un état qui se déduit d'une valeur reçue, et la seule qui n'affiche pas une
 * image de l'état précédent avant de se corriger.
 */
function useActivationRank(section: number) {
  const [seen, setSeen] = useState(section);
  const [rank, setRank] = useState(0);

  if (seen !== section) {
    setSeen(section);
    setRank((previous) => previous + 1);
  }

  return rank;
}

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
  const activation = useActivationRank(activeIndex);
  const onSettings = samePath(pathname, "/settings");

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
                    active={active}
                    activation={activation}
                    className={active ? "text-accent" : "text-ink-faint"}
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

      {/*
       * La roue, au pied du rail — et nulle part ailleurs sur un écran de bureau.
       *
       * **Pourquoi en bas.** Le rail range ses entrées dans l'ordre où on les
       * traverse, et Réglages n'est pas la troisième : c'est l'écran qu'on ouvre
       * une fois puis plus jamais. Le poser sous les deux sections, séparé d'elles
       * par tout l'espace disponible, dit cette différence de rang sans avoir à
       * l'écrire. C'est aussi le coin le plus stable de la fenêtre — celui qui ne
       * bouge pas quand le contenu change de hauteur.
       *
       * **Pourquoi hors du cadre du repère.** Le voisin du dessus porte
       * `--nav-count` et les pourcentages de `.nav-marker` : y glisser une
       * troisième cible étirerait le cadre jusqu'au bas de la fenêtre et le repère
       * de position se retrouverait à côté de l'entrée qu'il désigne. La roue est
       * donc une sœur du cadre, poussée par `mt-auto`, et le repère continue de ne
       * compter que les sections.
       *
       * **Pourquoi elle disparaît sous le seuil.** En dessous, la navigation est
       * une barre basse : il n'y a pas de « pied » où la ranger, et l'en-tête
       * d'Explorer garde sa roue. Une seule porte de chaque côté du seuil.
       *
       * Elle s'allume quand on est dans les réglages, en même temps qu'Explorer :
       * les deux sont vrais — on est dans la branche Explorer, et sur cet
       * écran-là.
       */}
      <TreeLink
        href="/settings"
        aria-label="Réglages"
        aria-current={onSettings ? "page" : undefined}
        className={`press settings-trigger mt-auto hidden h-11 w-11 shrink-0 items-center justify-center self-center rounded-full lg:flex ${
          onSettings ? "text-accent" : "text-ink-faint hover:bg-paper-raised hover:text-ink"
        }`}
      >
        <Settings size={20} strokeWidth={1.75} className="settings-icon" />
      </TreeLink>
    </nav>
  );
}
