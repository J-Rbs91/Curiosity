"use client";

import { useEffect } from "react";
import { withBasePath } from "@/lib/base-path";

export function ServiceWorkerRegistration() {
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;
    if (process.env.NODE_ENV !== "production") return;

    /*
     * Le chemin doit être préfixé : c'est lui qui détermine la portée du service worker.
     * Enregistré à la racine du domaine alors que l'application vit sous /<dépôt>/, il ne
     * verrait aucune de ses propres requêtes — et l'hébergeur le refuserait de toute façon.
     */
    navigator.serviceWorker.register(withBasePath("/sw.js")).catch(() => {
      // L'application reste utilisable sans service worker (juste sans mode hors-ligne).
    });
  }, []);

  return null;
}
