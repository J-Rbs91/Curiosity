"use client";

import { useSyncExternalStore } from "react";
import {
  DEFAULT_PREFERENCE,
  LIGHT_QUERY,
  THEME_LABELS,
  THEME_PREFERENCES,
  applyTheme,
  readPreference,
  resolveTheme,
  subscribeToPreference,
  writePreference,
  type ThemePreference,
} from "@/lib/theme";

/**
 * Le choix du thème — le seul réglage d'affichage de l'application.
 *
 * **Pourquoi celui-là existe quand les autres ont été retirés.** Le §5 de
 * `docs/ux-direction.md` a retiré le niveau d'explication et la durée de lecture parce qu'ils
 * réglaient le *contenu* : la difficulté d'un concept se lit dans son texte, pas dans une
 * préférence choisie une fois. Un thème ne règle rien du contenu. Il règle la condition de
 * lecture — et c'est la seule que le lecteur connaît mieux que nous, parce que lui seul sait
 * s'il lit au soleil ou au lit.
 *
 * **Trois boutons radio, et non un interrupteur.** Un interrupteur ne porte que deux états,
 * et il faudrait alors renoncer à « Système », qui est la réponse juste pour beaucoup de
 * gens. Les trois options sont des radios natifs : l'état sélectionné est annoncé par le
 * navigateur, les flèches parcourent le groupe, et rien de tout cela n'est à réimplémenter.
 * L'entrée reste dans le document ; c'est l'intitulé qui porte son anneau de focus — voir
 * `.choice` dans `globals.css`.
 *
 * **L'option retenue ne se dit pas par la seule couleur.** Elle porte le remplissage *et* la
 * graisse, et l'état `checked` du radio la dit aux technologies d'assistance. Le focus, lui,
 * est un anneau décollé : deux mécanismes distincts pour deux informations distinctes, sans
 * quoi une personne au clavier ne saurait plus laquelle est active et laquelle est atteinte.
 *
 * **La préférence est lue là où elle vit, pas recopiée dans un état.** Le `localStorage` est
 * une mémoire extérieure à React ; `useSyncExternalStore` est fait pour ça, et il porte
 * l'instantané que le rendu statique doit produire — le défaut, celui-là même que le script
 * d'ouverture applique quand rien n'est enregistré. Passer par un effet aurait donné une
 * seconde copie de la vérité, et le rendu en cascade que React 19 refuse.
 */
export function ThemeChoice() {
  const preference = useSyncExternalStore<ThemePreference>(
    subscribeToPreference,
    readPreference,
    () => DEFAULT_PREFERENCE
  );

  function choisir(next: ThemePreference) {
    applyTheme(resolveTheme(next, window.matchMedia(LIGHT_QUERY).matches));
    // Écrit en dernier : c'est cette écriture qui émet l'événement dont ce composant se relit.
    writePreference(next);
  }

  return (
    <fieldset>
      <legend className="eyebrow">Thème</legend>

      <div
        className="mt-4 grid max-w-md gap-1 rounded-full bg-paper-raised p-1"
        style={{ gridTemplateColumns: `repeat(${THEME_PREFERENCES.length}, minmax(0, 1fr))` }}
      >
        {THEME_PREFERENCES.map((option) => {
          const actif = option === preference;
          return (
            <label
              key={option}
              className={`choice press relative flex min-h-11 cursor-pointer items-center justify-center rounded-full px-2 text-sm ${
                actif ? "bg-accent font-medium text-accent-contrast" : "text-ink-faint hover:text-ink"
              }`}
            >
              <input
                type="radio"
                name="theme"
                value={option}
                checked={actif}
                onChange={() => choisir(option)}
                className="choice-input"
              />
              {THEME_LABELS[option]}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
