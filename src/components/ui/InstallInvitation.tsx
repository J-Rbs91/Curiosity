"use client";

import { useSyncExternalStore } from "react";
import { TreeLink } from "@/components/navigation/TreeLink";
import { Button } from "@/components/ui/Button";
import { AUDIENCE_EVENTS, countEvent } from "@/lib/analytics";
import { withBasePath } from "@/lib/base-path";
import {
  arrivedFromOutside,
  installPromptAvailable,
  installPromptUnavailable,
  needsManualInstallHere,
  promptInstall,
  runsAsApp,
  subscribeInstallPrompt,
} from "@/lib/install-prompt";

/** L'écran sur lequel un lien partagé ouvre l'application. */
const FICHE = "/explore/concept/";

/**
 * Ce que voit celui à qui l'on a partagé une carte.
 *
 * C'est l'autre bout de `ShareButton`, et le seul moment où l'application se présente à
 * quelqu'un qui ne la connaît pas : elle n'a ni compte, ni notification, ni fil, et rien de
 * ce qu'un lecteur y fait n'est visible d'un autre. Une carte partagée est donc la seule
 * chose qui circule — encore faut-il que celui qui la reçoit puisse savoir d'où elle vient.
 *
 * **Elle ne s'affiche qu'à qui vient de l'extérieur**, et c'est ce qui la distingue d'un
 * bandeau. Trois conditions, toutes nécessaires :
 *
 * — le document s'est ouvert sur cette fiche, et n'y est pas arrivé par une navigation
 *   interne. C'est la signature d'un lien suivi depuis une messagerie, et le seul signal qui
 *   la donne : l'écran, l'adresse et le référent sont muets là-dessus ;
 * — l'application ne tourne pas déjà comme une application, auquel cas il n'y a rien à
 *   proposer ;
 * — elle n'est pas rendue avant que le navigateur ait répondu à ces deux questions, faute de
 *   quoi le HTML pré-rendu porterait une invitation que l'hydratation retirerait.
 *
 * Elle est posée **après** « Approfondir », au pied de la fiche : on invite quelqu'un chez
 * soi après lui avoir montré pourquoi, pas avant.
 */
export function InstallInvitation() {
  /*
   * D'où l'on vient et comment l'application tourne sont des propriétés de l'environnement,
   * pas des états : ni l'une ni l'autre ne change pendant la vie de l'écran, d'où
   * l'abonnement vide. Ce qui compte est le troisième argument — la valeur du rendu serveur,
   * qui doit être celle qui ne montre rien : une invitation présente dans le HTML pré-rendu
   * et retirée à l'hydratation serait une divergence, et un bloc qui clignote. Même
   * construction que `DeepenSheet` pour la feuille du système.
   */
  const dehors = useSyncExternalStore(
    () => () => {},
    () => !runsAsApp() && arrivedFromOutside(withBasePath(FICHE)),
    () => false
  );
  const manuel = useSyncExternalStore(() => () => {}, needsManualInstallHere, () => false);

  /*
   * L'invitation du navigateur, elle, arrive quand elle arrive — souvent après
   * l'hydratation, et parfois jamais. C'est le seul des trois signaux qui s'abonne
   * réellement : la source est le module, qui l'a retenue au chargement.
   */
  const installable = useSyncExternalStore(
    subscribeInstallPrompt,
    installPromptAvailable,
    installPromptUnavailable
  );

  if (!dehors) return null;

  async function installer() {
    const reponse = await promptInstall();
    /*
     * Seule l'acceptation se compte : un refus est une réponse à une question qu'on a
     * posée, pas un geste du lecteur. Et rien n'est affiché dans un cas comme dans
     * l'autre — le navigateur a déjà tenu tout le dialogue, et le bouton disparaît de
     * lui-même quand l'invitation est dépensée.
     */
    if (reponse === "accepted") countEvent(AUDIENCE_EVENTS.installation);
  }

  return (
    <aside
      aria-labelledby="invitation-titre"
      className="enter-rise mt-10 border-t border-line pt-6"
    >
      <p className="eyebrow">Curiosity</p>
      <h2
        id="invitation-titre"
        className="mt-3 font-serif-display text-lg font-semibold leading-snug text-ink"
      >
        Une carte comme celle-ci, chaque jour.
      </h2>
      <p className="mt-3 max-w-note text-sm leading-relaxed text-ink-soft">
        Un concept par ouverture, établi sur ses sources, à lire en deux minutes.
        L&apos;application s&apos;installe, se consulte hors ligne, et ne demande ni compte ni
        adresse : ce qu&apos;elle retient de vous ne quitte pas votre appareil.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
        {installable ? (
          <>
            <Button onClick={installer}>Installer l&apos;application</Button>
            <TreeLink
              href="/"
              className="press -mx-2 inline-flex min-h-11 items-center px-2 text-xs font-medium uppercase tracking-[0.12em] text-ink-faint hover:text-ink"
            >
              Voir la carte du jour
            </TreeLink>
          </>
        ) : (
          /*
           * Sans invitation du navigateur, il n'y a rien à installer d'ici — et surtout rien
           * à promettre. Ce qui reste est la seule chose qui soit vraie partout : l'écran du
           * jour, où l'application se présente et où le navigateur proposera de lui-même
           * l'installation quand il jugera que c'est le moment.
           *
           * Les classes reprennent celles de `Button` en variante principale, comme
           * `DeepenButton` le fait pour la même raison : `Button` rend un `<button>`, et lui
           * faire rendre parfois autre chose coûterait plus cher que ces deux lignes.
           */
          <TreeLink
            href="/"
            className="press inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-contrast hover:opacity-90"
          >
            Découvrir la carte du jour
          </TreeLink>
        )}
      </div>

      {/*
       * iOS n'a pas d'API d'installation — sur aucun de ses navigateurs, la règle d'Apple
       * imposant le même moteur à tous. Le geste existe pourtant, et il est à deux touches :
       * le dire est la seule chose que l'application puisse faire, et ne rien dire
       * reviendrait à laisser croire qu'elle ne s'installe pas.
       */}
      {manuel && (
        <p className="mt-4 max-w-note text-xs leading-relaxed text-ink-faint">
          Sur iPhone et iPad : le bouton de partage du navigateur, puis « Sur l&apos;écran
          d&apos;accueil ».
        </p>
      )}
    </aside>
  );
}
