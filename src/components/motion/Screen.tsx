"use client";

import { ViewTransition, type ReactNode } from "react";
import { SCREEN_MOTION_CLASSES } from "@/components/motion/screen-motion";

/**
 * À poser dans un `page.tsx`, jamais dans un layout : un layout persiste d'une
 * navigation à l'autre, ses animations d'entrée et de sortie ne se déclenchent
 * donc jamais.
 *
 * Tout ce qui n'est pas enveloppé ici — le fond, la barre de navigation —
 * appartient à l'instantané racine et se contente d'un fondu.
 */
export function Screen({ children }: { children: ReactNode }) {
  return (
    <ViewTransition
      enter={SCREEN_MOTION_CLASSES}
      exit={SCREEN_MOTION_CLASSES}
      default="none"
    >
      {children}
    </ViewTransition>
  );
}
