"use client";

import { useEffect } from "react";

import { applyAppIcon } from "@/lib/app-icon";
import { isDailyCardDiscovered, onDailyDiscovery } from "@/lib/daily-discovery";
import { msUntilNextStep, urgencyStep } from "@/domain/reminder/daily-urgency";
import { onReentry } from "@/lib/app-entry";

/**
 * Ce qui tient l'icône d'accord avec l'heure et avec la carte du jour.
 *
 * Il vit dans la coque, à côté de `ThemeKeeper`, et pour la même raison : ce n'est pas
 * l'affaire d'un écran. Le rappel doit rester juste pendant qu'on lit un concept, qu'on
 * parcourt Explorer ou qu'on ne regarde rien du tout — et il doit survivre à la navigation,
 * qui démonte les écrans.
 *
 * **Il ne compte rien et ne rejoue rien.** À chaque réveil il pose la même question qu'au
 * montage — quel palier, à cette heure-ci, dans cet état-là — et repeint. C'est ce qui rend
 * les cas difficiles sans intérêt : une application restée fermée onze heures affiche le
 * palier de l'heure d'arrivée ; un téléphone redémarré, un fuseau changé, une heure d'été
 * n'ont rien à rattraper parce qu'il n'y a aucun compteur à rattraper.
 *
 * Le plafond de sa minuterie est expliqué juste en dessous.
 */

/**
 * Le plus longtemps que la minuterie ait le droit de dormir, et ce n'est pas une prudence
 * gratuite.
 *
 * Le prochain changement de palier est un début d'heure, et attendre jusque-là suffirait si
 * l'horloge murale ne pouvait pas bouger sous l'application. Elle le peut — fuseau changé en
 * vol, heure d'été, correction réseau —, et une minuterie armée pour cinquante minutes ne
 * l'apprendrait qu'après coup, en laissant à l'écran un palier qui ne correspond plus à
 * l'heure qu'il est. Un réveil au plus tard toutes les dix minutes le rattrape, et il ne coûte
 * qu'une comparaison : un palier inchangé n'écrit rien, ni dans le document ni à la plateforme.
 */
const MAX_SLEEP_MS = 10 * 60 * 1000;

export function AppIconReminder() {
  useEffect(() => {
    let timer: number | undefined;
    let stopped = false;

    const peindre = () => {
      if (stopped) return;
      const now = new Date();
      applyAppIcon(urgencyStep({ now, discovered: isDailyCardDiscovered(now) }));

      window.clearTimeout(timer);
      timer = window.setTimeout(peindre, Math.min(msUntilNextStep(now), MAX_SLEEP_MS));
    };

    peindre();

    /*
     * Une minuterie ne survit pas à un onglet endormi ni à une application mise en veille par
     * le système : elle se déclenche en retard, ou pas du tout. Ces trois événements sont les
     * moments où l'on peut de nouveau savoir quelle heure il est.
     *
     * — `visibilitychange` : l'onglet revient au premier plan, y compris depuis une
     *   application installée que le système avait gelée ;
     * — `pageshow` : le document est restauré depuis le cache de navigation arrière, où rien
     *   ne s'est exécuté pendant l'absence ;
     * — `focus` : le bureau, où la fenêtre peut être visible et l'application au second plan.
     */
    const reveil = () => {
      if (document.visibilityState === "visible") peindre();
    };

    document.addEventListener("visibilitychange", reveil);
    window.addEventListener("pageshow", peindre);
    window.addEventListener("focus", peindre);
    /*
     * Et quand la carte est découverte dans un *autre* onglet : `storage` ne se déclenche que
     * dans les documents qui n'ont pas écrit, ce qui est exactement le cas à couvrir — celui
     * qui a découvert la carte est prévenu par `onDailyDiscovery`, sans passer par le stockage.
     */
    window.addEventListener("storage", peindre);

    const seDesabonner = [
      // La découverte, à l'instant où elle a lieu : c'est le seul retour au noir qui ne
      // s'explique pas par l'heure, et le seul que la minuterie ne trouverait pas.
      onDailyDiscovery(peindre),
      // Et la réouverture après une absence longue, qui retire l'écran quitté sans qu'aucun
      // événement du document ne l'annonce.
      onReentry(peindre),
    ];

    return () => {
      stopped = true;
      window.clearTimeout(timer);
      document.removeEventListener("visibilitychange", reveil);
      window.removeEventListener("pageshow", peindre);
      window.removeEventListener("focus", peindre);
      window.removeEventListener("storage", peindre);
      for (const off of seDesabonner) off();
    };
  }, []);

  return null;
}
