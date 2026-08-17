"use client";

import { notFound } from "next/navigation";
import { TreeLink } from "@/components/navigation/TreeLink";
import { taxonomy } from "@/content";
import { Screen } from "@/components/motion/Screen";
import { BackLink } from "@/components/ui/BackLink";

/**
 * La page d'un domaine : où l'on est, et ce qu'il y a à y lire.
 *
 * Elle est la même pour les onze, et elle le restera pour les suivants — rien ici ne
 * connaît de discipline. Ce qu'elle affiche est entièrement dérivé : la famille et sa
 * question viennent de la taxonomie, les thèmes de leur rattachement, les cartes de leur
 * thème. Un domaine qui reçoit son corpus demain verra cette page se remplir sans qu'on y
 * touche.
 */
export function DomainDetail({ slug }: { slug: string }) {
  const domain = taxonomy.domainBySlug(slug);

  if (!domain) return notFound();

  const family = taxonomy.familyOf(domain.id);
  const domainThemes = taxonomy.themesOf(domain.id);
  const domainConcepts = taxonomy.conceptsIn({ kind: "domain", id: domain.id });

  return (
    <Screen>
      <div className="mx-auto max-w-md px-6 pt-10 pb-12">
        <BackLink />

        {/*
         * La famille se dit avant le domaine, comme le thème se dit avant le concept sur la
         * carte : c'est la même règle de composition, appliquée un cran plus haut. Elle
         * situe en une ligne, puis s'efface.
         */}
        {family && (
          <p className="mt-6 text-[13px] font-medium uppercase tracking-[0.12em] text-ink-faint">
            {family.label}
          </p>
        )}
        <h1 className="mt-2 font-serif-display text-[30px] font-semibold leading-tight text-ink">
          {domain.label}
        </h1>
        <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">{domain.description}</p>

        <section className="mt-10">
          <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">
            {domainThemes.length > 0 ? `Thèmes · ${domainThemes.length}` : "Thèmes"}
          </h2>

          {/*
           * Un domaine déclaré sans thème n'est pas une erreur, c'est un domaine dont le
           * corpus n'a pas commencé. Le dire ainsi, plutôt qu'afficher une liste vide : le
           * lecteur doit distinguer « il n'y a rien ici » de « il n'y a rien encore ».
           */}
          {domainThemes.length === 0 ? (
            <p className="mt-4 text-[15px] leading-relaxed text-ink-faint">
              Corpus en cours de constitution. Ce domaine est ouvert, aucun de ses thèmes
              n&apos;a encore été instruit.
            </p>
          ) : (
            <ul className="stagger mt-3 space-y-1">
              {domainThemes.map((theme) => (
                <li key={theme.id}>
                  <TreeLink
                    href={`/explore/themes/${theme.slug}`}
                    className="press-soft block rounded-2xl py-3.5 hover:bg-paper-raised"
                  >
                    <span className="block text-[17px] text-ink">{theme.title}</span>
                    <span className="mt-1 block text-[14px] leading-snug text-ink-soft">
                      {theme.tagline}
                    </span>
                  </TreeLink>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/*
         * Le compte des cartes, et non leur liste : les cartes se rencontrent par leur
         * thème ou par leur auteur, et une quatrième liste de concepts sur cette page ferait
         * doublon avec celle du thème juste au-dessus. Ce chiffre-là dit seulement ce qu'il
         * y a à y trouver.
         */}
        {domainConcepts.length > 0 && (
          <p className="mt-8 text-[13px] text-ink-faint">
            {domainConcepts.length} carte{domainConcepts.length > 1 ? "s" : ""} instruite
            {domainConcepts.length > 1 ? "s" : ""} dans ce domaine.
          </p>
        )}
      </div>
    </Screen>
  );
}
