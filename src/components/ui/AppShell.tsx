"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { BottomNav } from "@/components/ui/BottomNav";

/** Écrans qui prennent toute la surface : une session en cours n'a qu'une sortie. */
const IMMERSIVE_ROUTES = ["/learn"];

/**
 * La barre de navigation disparaît pendant une session. Ce n'est pas une
 * question d'épuration : tant qu'elle est là, l'écran propose quatre sorties
 * concurrentes (trois onglets et la croix) à un moment où l'utilisateur n'a
 * qu'une chose à faire, et quitter par un onglet abandonne la session sans
 * que rien ne l'ait dit.
 */
export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const immersive = IMMERSIVE_ROUTES.some((route) => pathname.startsWith(route));

  return (
    <>
      <div
        className="flex-1"
        style={{
          paddingBottom: immersive
            ? "env(safe-area-inset-bottom)"
            : "calc(var(--nav-height) + env(safe-area-inset-bottom))",
        }}
      >
        {children}
      </div>
      {!immersive && <BottomNav />}
    </>
  );
}
