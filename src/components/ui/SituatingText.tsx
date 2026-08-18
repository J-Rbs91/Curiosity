"use client";

import { useState } from "react";

/**
 * Ce qui situe une page, et ce qui l'explique — dans cet ordre, et pas ensemble.
 *
 * Le problème qu'il règle est mesuré. Sur la page d'un domaine, en 375 × 667, la
 * description occupait six lignes et 168 px : le premier thème cliquable arrivait à 574 px
 * pour une zone visible de 599, et la page qui existe pour donner accès à ses neuf thèmes
 * n'en montrait aucun à l'arrivée. Derrière un paragraphe de registre académique, que son
 * lecteur — non spécialiste, c'est la définition du produit — est le moins susceptible de
 * lire d'emblée.
 *
 * **Rien n'est tronqué, et c'est ce qui distingue cette solution d'un rognage.** Le corpus
 * porte déjà, pour chaque domaine, chaque thème et chaque auteur, une phrase écrite pour
 * situer — `tagline` — et un texte long écrit pour être lu — `description`, `bio`. La
 * première est affichée, le second attend qu'on le demande. Aucune phrase n'est coupée au
 * caractère, aucune ne se termine au milieu d'un mot, et la commande dit ce qu'elle
 * ouvrira.
 *
 * C'est aussi ce que dit la répétition de la phrase de situation entre la liste et la
 * page : elle n'est pas un doublon, elle confirme qu'on est arrivé là où l'on visait.
 *
 * Le texte long n'est pas dans le document tant qu'il n'est pas demandé. Un `hidden`
 * conditionnel l'aurait laissé à la recherche dans la page ; il l'aurait aussi laissé aux
 * lecteurs d'écran, qui l'auraient annoncé sans qu'on puisse l'atteindre. Entre les deux,
 * l'état déclaré par `aria-expanded` est la seule réponse cohérente.
 */
export function SituatingText({
  lead,
  full,
  label,
}: {
  /** La phrase qui situe. Toujours affichée. */
  lead: string;
  /** Le texte long. Affiché à la demande. */
  full: string;
  /** Ce que la commande annonce : « la description », « la biographie ». */
  label: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-5">
      <p className="text-md leading-relaxed text-ink-soft">{lead}</p>

      {/* Un texte long identique à sa phrase de situation n'a rien à déplier. */}
      {full.trim() !== lead.trim() && (
        <>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            className="press -ml-2 mt-1 inline-flex min-h-11 items-center px-2 text-sm text-ink-faint hover:text-ink"
          >
            {open ? `Réduire ${label}` : `Lire ${label}`}
          </button>
          {open && (
            <p className="enter-rise mt-1 text-md leading-relaxed text-ink-soft">{full}</p>
          )}
        </>
      )}
    </div>
  );
}
