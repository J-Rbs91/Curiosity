"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import {
  countedPath,
  GOATCOUNTER_ENDPOINT,
  GOATCOUNTER_SCRIPT,
  GOATCOUNTER_SETTINGS,
} from "@/lib/analytics";

declare global {
  interface Window {
    /** Ce que `count.js` dépose une fois chargé — et rien avant, d'où les gardes. */
    goatcounter?: { count?: (vars: { path: string }) => void };
  }
}

/**
 * Le comptage des vues, une fois pour toute l'application.
 *
 * Il observe le chemin affiché plutôt que les clics, pour la même raison que
 * `TrailKeeper` : une vue doit être comptée qu'on soit venu par un lien, par le bouton
 * retour du système, par un rechargement ou par une adresse partagée.
 *
 * Deux difficultés, et elles expliquent tout le reste du fichier :
 *
 * — le script de GoatCounter compte l'ouverture de la page, or l'application n'ouvre
 *   qu'une page et change ensuite d'écran sans recharger ; son comptage automatique est
 *   donc désarmé (`no_onload`, voir `src/lib/analytics.ts`) et repris ici ;
 * — le script arrive de façon asynchrone. Le premier écran est presque toujours affiché
 *   avant lui : `compter` ne fait alors rien, et c'est `onLoad` qui rattrape. Dans l'ordre
 *   inverse, `onLoad` compte, et l'effet ne recompte pas — c'est ce que retient `dernier`.
 */
function Counter() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const path = countedPath(pathname, searchParams.toString());

  /** L'écran affiché en ce moment, lisible depuis `onLoad` qui ne re-rend pas. */
  const courant = useRef(path);
  /** Le dernier chemin réellement envoyé, pour ne pas compter deux fois le même. */
  const dernier = useRef<string | null>(null);

  const compter = useCallback(() => {
    const count = window.goatcounter?.count;
    if (!count) return;
    if (dernier.current === courant.current) return;
    dernier.current = courant.current;
    count({ path: courant.current });
  }, []);

  useEffect(() => {
    courant.current = path;
    compter();
  }, [path, compter]);

  return (
    <Script
      src={GOATCOUNTER_SCRIPT}
      data-goatcounter={GOATCOUNTER_ENDPOINT}
      data-goatcounter-settings={GOATCOUNTER_SETTINGS}
      strategy="afterInteractive"
      onLoad={compter}
    />
  );
}

/**
 * Rien n'est chargé ni compté hors production.
 *
 * GoatCounter écarte déjà de lui-même ce qui vient de `localhost`, mais un script tiers
 * qu'on ne mesure pas n'a pas à être téléchargé pendant le développement — même raison que
 * pour le service worker, qui ne s'enregistre pas non plus.
 */
export function AudienceCounter() {
  if (process.env.NODE_ENV !== "production") return null;
  return <Counter />;
}
