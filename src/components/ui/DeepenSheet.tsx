"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight } from "lucide-react";
import { AI_DESTINATIONS } from "@/lib/ai-destinations";
import { Button } from "@/components/ui/Button";

interface DeepenSheetProps {
  /** Le dossier est-il déjà dans le presse-papiers au moment de l'ouverture ? */
  copied: boolean;
  /** Le dossier lui-même — pour une nouvelle copie, ou pour la feuille du système. */
  text: string;
  onClose: () => void;
}

/**
 * Ce qui se passe après « Approfondir » : le dossier est copié, il ne reste qu'à le coller.
 *
 * L'écran tient en deux gestes, et le premier est déjà fait quand il s'ouvre. La copie
 * précède l'affichage plutôt que de l'attendre : demander « voulez-vous copier ? » avant
 * d'ouvrir une IA ajouterait une décision à un lecteur qui vient d'en prendre une.
 *
 * Le presse-papiers plutôt que la feuille de partage, parce que c'est le seul chemin qui
 * transporte 22 000 caractères sans être tronqué, et le seul qui fonctionne à l'identique sur
 * un téléphone et sur un navigateur de bureau. La feuille du système reste en bas, pour ce
 * que cette liste ne couvre pas — et pour qui veut réellement envoyer la carte à quelqu'un.
 *
 * L'ordre des blocs suit celui des gestes : ce qui est fait, puis où aller, puis les reprises.
 *
 * La feuille est posée dans `document.body` par un portail, et ce n'est pas un détail : le
 * bouton qui l'ouvre vit dans une carte animée, et une animation qui laisse un `transform`
 * derrière elle fait de son élément le référentiel de tout ce qui est `fixed` en dessous. La
 * feuille se calait alors sur la carte, au milieu de l'écran, au lieu de son bord bas.
 */
export function DeepenSheet({ copied, text, onClose }: DeepenSheetProps) {
  const panel = useRef<HTMLDivElement>(null);
  const [inClipboard, setInClipboard] = useState(copied);

  /*
   * L'existence du partage natif est une propriété de l'environnement, pas un état : elle ne
   * change jamais pendant la vie de l'écran, d'où un abonnement vide. Ce qui compte est le
   * troisième argument — la valeur rendue côté serveur, où `navigator` n'existe pas. Sans
   * lui, les deux rendus divergeraient sur un bouton présent ici et absent là.
   */
  const canShare = useSyncExternalStore(
    () => () => {},
    () => typeof navigator !== "undefined" && typeof navigator.share === "function",
    () => false
  );

  useEffect(() => {
    panel.current?.focus();
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setInClipboard(true);
    } catch {
      setInClipboard(false);
    }
  }

  async function shareElsewhere() {
    try {
      // Volontairement `text` seul : plusieurs applications préfèrent le titre au corps quand
      // les deux sont fournis, et n'emporteraient alors que le nom du concept.
      await navigator.share({ text });
      onClose();
    } catch (error) {
      // Un partage annulé n'est pas un échec : laisser l'écran tel qu'il est.
      if (error instanceof DOMException && error.name === "AbortError") return;
    }
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Le fond ferme au toucher, comme toute feuille du système. */}
      <button
        type="button"
        aria-label="Fermer"
        onClick={onClose}
        className="absolute inset-0 bg-paper/80 backdrop-blur-sm"
      />

      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="approfondir-titre"
        tabIndex={-1}
        className="enter-rise relative max-h-[88vh] w-full max-w-md overflow-y-auto rounded-t-3xl bg-paper-raised px-6 pt-7 outline-none"
        style={{ paddingBottom: "calc(2rem + env(safe-area-inset-bottom))" }}
      >
        <h2 id="approfondir-titre" className="font-serif-display text-[20px] leading-snug text-ink">
          Ouvrir dans une IA
        </h2>

        {/*
         * L'état de la copie est une information, pas une décoration : sans elle, le lecteur
         * arrive dans une conversation vide sans savoir ce qu'il est censé y coller.
         */}
        <p role="status" className="mt-2 text-[14px] leading-relaxed text-ink-soft">
          {inClipboard
            ? "Le concept, ses sources et les instructions sont dans le presse-papiers. Ouvrez une IA, puis collez."
            : "La copie n'a pas abouti. Réessayez, ou passez par le partage du système."}
        </p>

        <ul className="mt-6 divide-y divide-line border-y border-line">
          {AI_DESTINATIONS.map((destination) => (
            <li key={destination.name}>
              <a
                href={destination.url}
                target="_blank"
                rel="noreferrer"
                onClick={onClose}
                className="press-soft flex min-h-12 items-center justify-between gap-4 py-3 text-[16px] text-ink hover:text-accent"
              >
                {destination.name}
                <ArrowUpRight size={16} strokeWidth={1.5} className="text-ink-faint" aria-hidden />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          <Button variant="secondary" onClick={copy}>
            {inClipboard ? "Copier à nouveau" : "Copier le prompt"}
          </Button>
          {canShare && (
            <button
              type="button"
              onClick={shareElsewhere}
              className="press text-[0.8rem] font-medium uppercase tracking-[0.12em] text-ink-faint hover:text-ink"
            >
              Autre application
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="press ml-auto text-[0.8rem] font-medium uppercase tracking-[0.12em] text-ink-faint hover:text-ink"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
