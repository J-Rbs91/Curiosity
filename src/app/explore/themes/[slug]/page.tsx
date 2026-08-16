"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { themes, concepts, authors } from "@/content";
import { conceptsByTheme } from "@/domain/concepts/graph";
import { Screen } from "@/components/motion/Screen";
import { SCREEN_MOTION } from "@/components/motion/screen-motion";

export default function ThemeDetailPage() {
  const params = useParams<{ slug: string }>();
  const theme = themes.find((t) => t.slug === params.slug);

  if (!theme) return notFound();

  const themeConcepts = conceptsByTheme(concepts, theme.id);
  const contributingAuthorIds = new Set(themeConcepts.flatMap((c) => c.authors));
  const contributingAuthors = authors.filter((a) => contributingAuthorIds.has(a.id));

  return (
    <Screen>
      <div className="mx-auto max-w-md px-6 pt-10 pb-12">
        {/* Le retour ramène sur l'onglet d'où l'on vient, pas sur le premier. */}
        <Link
          href="/explore?vue=themes"
          transitionTypes={SCREEN_MOTION.back}
          className="press -ml-1 inline-flex items-center gap-1.5 text-sm text-ink-faint hover:text-ink"
        >
          <ArrowLeft size={16} />
          Explorer
        </Link>

        <h1 className="mt-6 font-serif-display text-[30px] font-semibold leading-tight text-ink">
          {theme.title}
        </h1>
        <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">{theme.description}</p>

        {contributingAuthors.length > 0 && (
          <p className="mt-4 text-sm text-ink-faint">
            {contributingAuthors.map((a) => a.name).join(", ")}
          </p>
        )}

        <ul className="stagger mt-10 space-y-1">
          {themeConcepts.map((concept) => (
            <li key={concept.id}>
              <Link
                href={`/explore/concepts/${concept.slug}`}
                transitionTypes={SCREEN_MOTION.deeper}
                className="press-soft block rounded-2xl py-3.5 text-[17px] text-ink hover:bg-paper-raised"
              >
                {concept.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Screen>
  );
}
