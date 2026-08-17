import { Suspense, type ReactNode } from "react";
import { BottomNav } from "@/components/ui/BottomNav";
import { TrailKeeper } from "@/components/navigation/TrailKeeper";

/**
 * La coque : le contenu, puis la barre de navigation.
 *
 * Le remplissage bas réserve la hauteur de la barre, qui est en position fixe et
 * recouvrirait sinon la fin de chaque écran. C'est cette réserve que les pages doivent
 * retrancher quand elles veulent occuper exactement un écran — voir `SCREEN_HEIGHT`.
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
      <div
        className="flex-1"
        style={{ paddingBottom: "calc(var(--nav-height) + env(safe-area-inset-bottom))" }}
      >
        {children}
      </div>
      <BottomNav />
    </>
  );
}
