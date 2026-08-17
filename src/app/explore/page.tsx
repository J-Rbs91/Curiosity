"use client";

import { Suspense, ViewTransition, type ReactNode } from "react";
import { TreeLink } from "@/components/navigation/TreeLink";
import { useSearchParams } from "next/navigation";
import { Settings } from "lucide-react";
import { authors, taxonomy, themes } from "@/content";
import { Screen } from "@/components/motion/Screen";

/**
 * Trois entrées dans le corpus, et un ordre qui dit la hiérarchie.
 *
 * « Domaines » vient en premier et par défaut : c'est le niveau où l'on choisit *ce qu'on
 * veut comprendre*, et les deux autres sont des coupes à l'intérieur de ce choix. Tant
 * qu'un seul domaine était couvert, entrer par les auteurs allait de soi ; à onze, une
 * liste d'auteurs sans le champ auquel ils appartiennent ne veut plus rien dire.
 */
const VIEWS = [
  { id: "domaines", label: "Domaines" },
  { id: "themes", label: "Thèmes" },
  { id: "auteurs", label: "Auteurs" },
] as const;

type ViewId = (typeof VIEWS)[number]["id"];

const DEFAULT_VIEW: ViewId = "domaines";

function viewFrom(value: string | null): ViewId {
  return VIEWS.some((v) => v.id === value) ? (value as ViewId) : DEFAULT_VIEW;
}

/** L'adresse d'un onglet. La vue par défaut n'écrit rien : `/explore` reste `/explore`. */
function hrefForView(view: ViewId): string {
  return view === DEFAULT_VIEW ? "/explore" : `/explore?vue=${view}`;
}

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
        <Suspense fallback={<ExploreBody view={DEFAULT_VIEW} />}>
          <ExploreBodyFromUrl />
        </Suspense>
      </div>
    </Screen>
  );
}

function ExploreBodyFromUrl() {
  return <ExploreBody view={viewFrom(useSearchParams().get("vue"))} />;
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
            href={hrefForView(id)}
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
        <div className="stagger mt-8 pb-12">
          {view === "domaines" && <FamilyList />}

          {view === "themes" && (
            <GroupedByDomain
              items={themes}
              row={(theme) => (
                <ListRow
                  key={theme.id}
                  href={`/explore/themes/${theme.slug}`}
                  title={theme.title}
                  tagline={theme.tagline}
                  keywords={theme.keywords}
                />
              )}
            />
          )}

          {view === "auteurs" && (
            <GroupedByDomain
              items={authors}
              row={(author) => (
                <ListRow
                  key={author.id}
                  href={`/explore/authors/${author.slug}`}
                  title={author.name}
                  tagline={author.tagline}
                  keywords={author.keywords}
                />
              )}
            />
          )}
        </div>
      </ViewTransition>
    </>
  );
}

/**
 * Les quatre familles, chacune ouvrant sur ses domaines.
 *
 * C'est l'écran de découverte du corpus, et il est fait pour être compris par quelqu'un
 * qui ne connaît aucune de ces disciplines. D'où l'ordre de lecture : la **question**
 * d'abord, en gros et en serif, parce que c'est elle qui dit ce qu'on vient chercher ; le
 * nom de la famille au-dessus, en petites capitales, parce qu'il ne fait que nommer ce que
 * la question a déjà expliqué. Une famille annoncée par son seul titre obligerait le
 * lecteur à deviner ce que « pilotage » recouvre.
 *
 * Les familles ne sont pas cliquables, et c'est délibéré : ouvrir une page par famille
 * ajouterait un palier qui ne contiendrait que ce qui est déjà ici. La hiérarchie se voit,
 * elle ne se traverse pas.
 */
function FamilyList() {
  return (
    <div className="space-y-12">
      {taxonomy.families.map((family) => {
        const familyDomains = taxonomy.domainsOf(family.id);
        return (
          <section key={family.id}>
            <h2 className="text-[13px] font-medium uppercase tracking-[0.12em] text-ink-faint">
              {family.label}
            </h2>
            <p className="mt-3 font-serif-display text-[19px] leading-snug text-ink">
              {family.question}
            </p>
            <p className="mt-2 text-[13px] text-ink-faint">
              {familyDomains.length} domaine{familyDomains.length > 1 ? "s" : ""}
            </p>

            <ul className="mt-4 space-y-1">
              {familyDomains.map((domain) => (
                <ListRow
                  key={domain.id}
                  href={`/explore/domains/${domain.slug}`}
                  title={domain.label}
                  tagline={domain.tagline}
                  /*
                   * L'état du corpus se constate, il ne se déclare pas — et il se dit ici
                   * plutôt que sur la page du domaine seulement : c'est dans la liste que
                   * le lecteur choisit où aller, et lui laisser ouvrir un domaine vide sans
                   * l'avoir prévenu est le pire moment pour l'apprendre.
                   */
                  note={taxonomy.hasCorpus(domain.id) ? undefined : "Corpus en cours de constitution"}
                />
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

/**
 * Une liste de thèmes ou d'auteurs, regroupée par domaine — mais **seulement quand
 * plusieurs domaines y figurent**.
 *
 * La condition porte sur les données, jamais sur un domaine nommé : tant qu'un seul domaine
 * a du contenu, un en-tête unique n'apprendrait rien et la liste reste exactement celle de
 * la V1. Dès qu'un deuxième domaine reçoit ses thèmes, le regroupement apparaît de
 * lui-même, sans qu'une ligne soit à écrire.
 */
function GroupedByDomain<T extends { id: string; domain: string }>({
  items,
  row,
}: {
  items: T[];
  row: (item: T) => ReactNode;
}) {
  const groups = taxonomy.domains
    .map((domain) => ({ domain, items: items.filter((i) => i.domain === domain.id) }))
    .filter((g) => g.items.length > 0);

  if (groups.length <= 1) return <ul className="space-y-1">{items.map(row)}</ul>;

  return (
    <div className="space-y-10">
      {groups.map(({ domain, items: groupItems }) => (
        <section key={domain.id}>
          <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">
            {domain.label}
          </h2>
          <ul className="mt-3 space-y-1">{groupItems.map(row)}</ul>
        </section>
      ))}
    </div>
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
  note,
}: {
  href: string;
  title: string;
  tagline: string;
  keywords?: string[];
  /** L'état de ce qu'il y a derrière, quand il n'y a pas encore de contenu. */
  note?: string;
}) {
  return (
    <li>
      <TreeLink
        href={href}
        className="press-soft block rounded-2xl px-1 py-4 hover:bg-paper-raised"
      >
        <p className="text-[17px] font-medium leading-snug text-ink">{title}</p>
        <p className="mt-1.5 text-[15px] leading-snug text-ink-soft">{tagline}</p>
        {keywords && keywords.length > 0 && (
          <p className="mt-2 text-[13px] leading-snug text-ink-faint">{keywords.join(" · ")}</p>
        )}
        {note && <p className="mt-2 text-[13px] leading-snug text-ink-faint">{note}</p>}
      </TreeLink>
    </li>
  );
}
