import { Suspense, type ReactNode } from "react";
import { MainNav } from "@/components/ui/MainNav";
import { ThemeKeeper } from "@/components/ui/ThemeKeeper";
import { AppIconReminder } from "@/components/ui/AppIconReminder";
import { AudienceCounter } from "@/components/ui/AudienceCounter";
import { TrailKeeper } from "@/components/navigation/TrailKeeper";
import { EntryPoint } from "@/components/navigation/EntryPoint";

/**
 * La coque : la navigation, puis le contenu.
 *
 * La navigation est **avant** le contenu depuis qu'elle peut être un rail. Elle est
 * `fixed` dans les deux cas, si bien que sa place à l'écran ne dépend pas de sa place
 * dans le document ; l'ordre de tabulation, lui, en dépend, et un rail annoncé au bord
 * gauche mais atteint au clavier après l'écran entier aurait été la navigation la plus
 * visible et la plus longue à joindre.
 *
 * `app-body` réserve ce que la navigation prend au contenu : la hauteur de la barre en
 * bas sur téléphone, la largeur du rail à gauche sur un écran de bureau. Les deux valeurs
 * sont dans `globals.css`, section « Charpente », parce qu'elles changent au seuil. C'est
 * cette réserve que les pages retranchent quand elles veulent occuper exactement un
 * écran — voir `--screen-height`.
 *
 * Il n'y a plus de mode immersif : la session d'apprentissage qui le justifiait n'existe
 * plus, et un écran unique n'a rien à masquer.
 */
export function AppShell({ children }: { children: ReactNode }) {
  return (
    <>
      {/*
       * La trace du chemin dans l'arbre se tient ici, une fois pour toute
       * l'application. Deux raisons à cet emplacement précis :
       *
       * — `useSearchParams` impose une frontière de suspension sur une route
       *   pré-rendue, d'où le composant isolé plutôt qu'un appel dans chaque
       *   écran ;
       * — placée **avant** les enfants, sa mise à jour s'exécute avant que le
       *   retour ne lise la trace. L'inverse afficherait le parent précédent
       *   pendant un rendu.
       */}
      <Suspense fallback={null}>
        <TrailKeeper />
      </Suspense>
      {/*
       * Et juste après elle, ce qui décide du point d'entrée quand
       * l'application est rouverte plutôt que démarrée. L'ordre compte :
       * `EntryPoint` remonte à la racine en dépilant, donc il lit la trace que
       * `TrailKeeper` vient de réconcilier.
       */}
      <EntryPoint />
      {/*
       * Le thème est déjà posé par le script d'ouverture ; ce qui se tient ici est ce que ce
       * script ne peut pas faire, parce qu'il ne s'exécute qu'une fois : suivre le système
       * quand il change d'avis en cours de lecture, et suivre l'onglet voisin quand c'est là
       * que le choix a été fait.
       */}
      <ThemeKeeper />
      {/*
       * Et le rappel porté par l'icône, pour la même raison que le thème : ce n'est l'affaire
       * d'aucun écran. Il doit rester juste pendant qu'on lit, pendant qu'on explore, et
       * survivre à une navigation qui démonte les écrans — voir `AppIconReminder`, et
       * `docs/icone-de-rappel.md` pour ce que les plateformes en acceptent.
       */}
      <AppIconReminder />
      {/*
       * Et la mesure d'audience, au même endroit et pour la même raison : combien de
       * personnes ouvrent l'application et quels écrans elles regardent n'est l'affaire
       * d'aucun écran en particulier. Elle est ici, après la trace, parce qu'elle lit le
       * chemin affiché comme elle — et sous `Suspense` parce qu'elle lit aussi la
       * recherche, ce qu'une route pré-rendue n'autorise que derrière une frontière de
       * suspension.
       */}
      <Suspense fallback={null}>
        <AudienceCounter />
      </Suspense>
      <MainNav />
      <div className="app-body flex-1">{children}</div>
    </>
  );
}
