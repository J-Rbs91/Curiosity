"use client";

import { Suspense, useEffect, useState, ViewTransition } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { authors, themes, concepts } from "@/content";
import { getProgressService } from "@/services/progress";
import { computeAllAuthorsProgress } from "@/domain/authors";
import { computeAllThemesProgress } from "@/domain/themes";
import { Screen } from "@/components/motion/Screen";
import { SCREEN_MOTION } from "@/components/motion/screen-motion";
import { ProgressBar } from "@/components/ui/ProgressBar";
import type { UserConceptProgress } from "@/types";

const VIEWS = [
  { id: "auteurs", label: "Auteurs" },
  { id: "themes", label: "Thèmes" },
] as const;

type ViewId = (typeof VIEWS)[number]["id"];

export default function ExplorePage() {
  return (
    <Screen>
      <div className="mx-auto max-w-md px-5 pt-8">
        <h1 className="font-serif-display text-2xl font-semibold text-ink">Explorer</h1>
        <p className="mt-2 text-[15px] text-ink-soft">
          La carte des auteurs et des grandes problématiques de la discipline.
        </p>

        {/*
         * La vue courante vit dans l'URL, pas dans l'état du composant : c'est
         * ce qui la fait survivre au retour depuis une fiche d'auteur. Sans
         * elle, on revient systématiquement sur « Auteurs » après avoir ouvert
         * un thème, et il faut refaire le chemin.
         */}
        <Suspense fallback={<ExploreBody view="auteurs" />}>
          <ExploreBodyFromUrl />
        </Suspense>
      </div>
    </Screen>
  );
}

function ExploreBodyFromUrl() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("vue");
  const view: ViewId = requested === "themes" ? "themes" : "auteurs";
  return <ExploreBody view={view} />;
}

function ExploreBody({ view }: { view: ViewId }) {
  const [progressByConcept, setProgressByConcept] = useState<Map<string, UserConceptProgress>>(
    new Map()
  );

  useEffect(() => {
    const state = getProgressService().getState();
    // Lecture localStorage : impossible pendant le rendu serveur, doit se faire après le montage.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProgressByConcept(new Map(Object.entries(state.concepts)));
  }, []);

  /*
   * Les listes sont rendues dès le premier passage, à progression nulle, puis
   * la progression réelle arrive. La page ne passe donc jamais par un état
   * vide, et les barres se remplissent depuis zéro au lieu d'apparaître déjà
   * pleines — c'est ce remplissage qui rend leur grandeur comparable.
   */
  const authorsProgress = computeAllAuthorsProgress(authors, concepts, progressByConcept);
  const themesProgress = computeAllThemesProgress(themes, concepts, authors, progressByConcept);
  const activeIndex = VIEWS.findIndex((v) => v.id === view);

  return (
    <>
      <div className="relative mt-6 flex gap-1 rounded-full bg-paper-raised p-1">
        <span
          aria-hidden
          className="absolute inset-y-1 left-1 rounded-full bg-accent transition-transform motion-ui"
          style={{
            width: `calc((100% - 0.5rem) / ${VIEWS.length})`,
            transform: `translateX(${activeIndex * 100}%)`,
          }}
        />
        {VIEWS.map(({ id, label }) => (
          <Link
            key={id}
            href={id === "auteurs" ? "/explore" : `/explore?vue=${id}`}
            replace
            scroll={false}
            aria-current={id === view ? "true" : undefined}
            className={`press relative z-10 flex min-h-9 flex-1 items-center justify-center rounded-full text-sm font-medium ${
              id === view ? "text-accent-contrast" : "text-ink-soft hover:text-ink"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>

      {/*
       * Changer d'onglet n'est pas changer de lieu : le contenu se substitue
       * sur place par un fondu, pendant que l'en-tête et les onglets ne bougent
       * pas. Un glissement raconterait un déplacement qui n'a pas lieu.
       */}
      <ViewTransition key={view} name="explore-liste" share="auto" enter="auto" default="none">
        <ul className="stagger mt-6 space-y-3 pb-10">
          {view === "auteurs" &&
            authorsProgress.map(({ author, understood, totalConcepts, ratio }) => (
              <li key={author.id}>
                <Link
                  href={`/explore/authors/${author.slug}`}
                  transitionTypes={SCREEN_MOTION.deeper}
                  className="press-soft block rounded-2xl bg-paper-raised p-4 hover:bg-paper-contact"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-serif-display text-lg font-semibold text-ink">
                      {author.name}
                    </span>
                    <span className="shrink-0 text-xs text-ink-soft">
                      {understood}/{totalConcepts} compris
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-ink-soft">{author.tagline}</p>
                  <ProgressBar
                    ratio={ratio}
                    label={`Concepts compris chez ${author.name}`}
                    className="mt-3"
                  />
                </Link>
              </li>
            ))}

          {view === "themes" &&
            themesProgress.map(({ theme, understood, totalConcepts, ratio }) => (
              <li key={theme.id}>
                <Link
                  href={`/explore/themes/${theme.slug}`}
                  transitionTypes={SCREEN_MOTION.deeper}
                  className="press-soft block rounded-2xl bg-paper-raised p-4 hover:bg-paper-contact"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-serif-display text-lg font-semibold text-ink">
                      {theme.title}
                    </span>
                    <span className="shrink-0 text-xs text-ink-soft">
                      {understood}/{totalConcepts} compris
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-ink-soft">{theme.description}</p>
                  <ProgressBar
                    ratio={ratio}
                    label={`Concepts compris dans ${theme.title}`}
                    className="mt-3"
                  />
                </Link>
              </li>
            ))}
        </ul>
      </ViewTransition>
    </>
  );
}
