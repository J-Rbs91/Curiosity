import type { ReactNode } from "react";
import { BottomNav } from "@/components/ui/BottomNav";

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
