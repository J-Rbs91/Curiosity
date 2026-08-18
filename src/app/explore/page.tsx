"use client";

import { Suspense, ViewTransition, type ReactNode } from "react";
import { TreeLink } from "@/components/navigation/TreeLink";
import { useSearchParams } from "next/navigation";
import { Settings } from "lucide-react";
import { authors, taxonomy, themes } from "@/content";
import { Screen } from "@/components/motion/Screen";
import { ListRow } from "@/components/ui/ListRow";

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
          <h1 className="font-serif-display text-2xl font-semibold text-ink">Explorer</h1>
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
      {/*
        * La pastille de position est en grille avec les onglets plutôt qu'en fraction
        * calculée de la largeur : à police d'interface agrandie, une largeur figée à
        * `(100% - 0.5rem) / 3` laissait le libellé déborder de la pastille.
        */}
      <div
        className="relative mt-8 grid gap-1 rounded-full bg-paper-raised p-1"
        style={{ gridTemplateColumns: `repeat(${VIEWS.length}, minmax(0, 1fr))` }}
      >
        <span
          aria-hidden
          className="absolute inset-y-1 rounded-full bg-accent transition-transform motion-ui"
          style={{
            left: "0.25rem",
            right: "0.25rem",
            width: `calc((100% - 0.5rem) / ${VIEWS.length})`,
            transform: `translateX(${activeIndex * 100}%)`,
          }}
        />
        {VIEWS.map(({ id, label }) => (
          <TreeLink
            key={id}
            href={hrefForView(id)}
            aria-current={id === view ? "true" : undefined}
            className={`press relative z-10 flex min-h-11 items-center justify-center rounded-full px-2 text-sm ${
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
    <div className="groups">
      {taxonomy.families.map((family) => {
        const familyDomains = taxonomy.domainsOf(family.id);
        return (
          <section key={family.id}>
            <h2 className="eyebrow">{family.label}</h2>
            {/*
             * La question est ce qui domine, et cela se mesure : elle et le nom de domaine
             * étaient rendus à la même graisse et dans la même couleur, à deux pixels de
             * taille près — un niveau 1 indiscernable de son niveau 2. L'écart est repris
             * par la graisse et la taille ensemble, la couleur restant la même : sur du
             * noir, deux blancs voisins se disputent plus qu'ils ne se hiérarchisent.
             */}
            <p className="mt-3 font-serif-display text-lg font-semibold text-ink">
              {family.question}
            </p>

            {/*
             * Pas de compte de domaines : ils sont tous visibles juste en dessous, et le
             * chiffre s'intercalait exactement là où l'en-tête doit s'ancrer sur son groupe.
             */}
            <ul className="rows anchored">
              {familyDomains.map((domain) => (
                <ListRow
                  key={domain.id}
                  href={`/explore/domains/${domain.slug}`}
                  title={domain.label}
                  tagline={domain.tagline}
                  note={<CorpusMark domainId={domain.id} />}
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
 * L'état du corpus d'un domaine, dit dans la liste — et dit dans le bon sens.
 *
 * Il n'était dit que par la négative : dix domaines sur onze portaient « Corpus en cours de
 * constitution », et le seul qui contienne quelque chose ne portait rien. Le signal était
 * donc porté par une absence, et répété neuf fois par les présences — il fallait lire onze
 * lignes pour trouver celle qui manquait.
 *
 * Ce qui est atteignable se marque donc positivement, par ce qu'on y trouvera, et dans le
 * gris du texte principal. L'absence garde sa phrase entière : « 0 résultat » se lirait
 * comme une panne, et c'est dans la liste que le lecteur choisit où aller — l'apprendre
 * après avoir ouvert est le pire moment.
 *
 * L'état se constate, il ne se déclare pas : `hasCorpus` le dérive des données.
 */
function CorpusMark({ domainId }: { domainId: string }) {
  const cards = taxonomy.conceptsIn({ kind: "domain", id: domainId });

  if (cards.length === 0)
    return <p className="text-xs leading-snug text-ink-faint">Corpus en cours de constitution</p>;

  return (
    <p className="text-xs font-medium leading-snug text-ink">
      {cards.length} carte{cards.length > 1 ? "s" : ""}
    </p>
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

  if (groups.length <= 1) return <ul className="rows">{items.map(row)}</ul>;

  return (
    <div className="groups">
      {groups.map(({ domain, items: groupItems }) => (
        <section key={domain.id}>
          <h2 className="eyebrow">{domain.label}</h2>
          <ul className="rows anchored">{groupItems.map(row)}</ul>
        </section>
      ))}
    </div>
  );
}
