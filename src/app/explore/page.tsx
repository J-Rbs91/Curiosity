"use client";

import { Suspense, ViewTransition } from "react";
import { TreeLink } from "@/components/navigation/TreeLink";
import { useSearchParams } from "next/navigation";
import { Settings } from "lucide-react";
import { authors, themes } from "@/content";
import { Screen } from "@/components/motion/Screen";

const VIEWS = [
  { id: "auteurs", label: "Auteurs" },
  { id: "themes", label: "Thèmes" },
] as const;

type ViewId = (typeof VIEWS)[number]["id"];

export default function ExplorePage() {
  return (
    <Screen>
      <div className="mx-auto max-w-md px-6 pt-10">
        <div className="flex items-start justify-between gap-3">
          <h1 className="font-serif-display text-[28px] font-semibold text-ink">Explorer</h1>
          <TreeLink
            href="/settings"
            aria-label="Réglages"
            className="press -mr-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ink-faint hover:bg-paper-raised hover:text-ink"
          >
            <Settings size={18} strokeWidth={1.75} />
          </TreeLink>
        </div>

        {/*
         * La vue courante vit dans l'URL, pas dans l'état du composant : c'est
         * ce qui la fait survivre au retour depuis une fiche.
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
  const view: ViewId = searchParams.get("vue") === "themes" ? "themes" : "auteurs";
  return <ExploreBody view={view} />;
}

function ExploreBody({ view }: { view: ViewId }) {
  const activeIndex = VIEWS.findIndex((v) => v.id === view);

  return (
    <>
      <div className="relative mt-8 flex gap-1 rounded-full bg-paper-raised p-1">
        <span
          aria-hidden
          className="absolute inset-y-1 left-1 rounded-full bg-accent transition-transform motion-ui"
          style={{
            width: `calc((100% - 0.5rem) / ${VIEWS.length})`,
            transform: `translateX(${activeIndex * 100}%)`,
          }}
        />
        {VIEWS.map(({ id, label }) => (
          <TreeLink
            key={id}
            href={id === "auteurs" ? "/explore" : `/explore?vue=${id}`}
            aria-current={id === view ? "true" : undefined}
            className={`press relative z-10 flex min-h-11 flex-1 items-center justify-center rounded-full text-sm ${
              id === view ? "font-medium text-accent-contrast" : "text-ink-faint hover:text-ink"
            }`}
          >
            {label}
          </TreeLink>
        ))}
      </div>

      {/*
       * Changer d'onglet n'est pas changer de lieu : le contenu se substitue sur
       * place par un fondu, pendant que l'en-tête et les onglets ne bougent pas.
       */}
      <ViewTransition key={view} name="explore-liste" share="auto" enter="auto" default="none">
        <ul className="stagger mt-8 space-y-1 pb-12">
          {view === "auteurs" &&
            authors.map((author) => (
              <ListRow
                key={author.id}
                href={`/explore/authors/${author.slug}`}
                title={author.name}
                tagline={author.tagline}
                keywords={author.keywords}
              />
            ))}

          {view === "themes" &&
            themes.map((theme) => (
              <ListRow
                key={theme.id}
                href={`/explore/themes/${theme.slug}`}
                title={theme.title}
                tagline={theme.tagline}
                keywords={theme.keywords}
              />
            ))}
        </ul>
      </ViewTransition>
    </>
  );
}

/*
 * Une ligne, pas une carte. Le regroupement se fait par l'espacement, sans
 * surface ni compteur : douze cartes de même niveau se disputent l'attention,
 * douze lignes se parcourent.
 *
 * Trois niveaux de gris, trois natures d'information : le nom qu'on cherche, la
 * phrase qui dit ce qu'on y trouvera, les notions qui permettent de reconnaître
 * un terrain sans le lire. Rien n'est tronqué — une phrase coupée oblige à
 * ouvrir pour savoir si l'on voulait ouvrir, ce qui est exactement le contraire
 * du service que rend une liste.
 *
 * Le nom est en sans-serif, contrairement aux titres de concept. La serif porte
 * ce qui se lit ; le sans porte ce qui se choisit. Un nom propre dans une liste
 * de destinations est une étiquette, pas un texte.
 */
function ListRow({
  href,
  title,
  tagline,
  keywords,
}: {
  href: string;
  title: string;
  tagline: string;
  keywords: string[];
}) {
  return (
    <li>
      <TreeLink
        href={href}
        className="press-soft block rounded-2xl px-1 py-4 hover:bg-paper-raised"
      >
        <p className="text-[17px] font-medium leading-snug text-ink">{title}</p>
        <p className="mt-1.5 text-[15px] leading-snug text-ink-soft">{tagline}</p>
        <p className="mt-2 text-[13px] leading-snug text-ink-faint">
          {keywords.join(" · ")}
        </p>
      </TreeLink>
    </li>
  );
}
