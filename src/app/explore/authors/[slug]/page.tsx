"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { authors, concepts } from "@/content";
import { Screen } from "@/components/motion/Screen";
import { SCREEN_MOTION } from "@/components/motion/screen-motion";

export default function AuthorDetailPage() {
  const params = useParams<{ slug: string }>();
  const author = authors.find((a) => a.slug === params.slug);

  if (!author) return notFound();

  const authorConcepts = concepts.filter((c) => c.authors.includes(author.id));

  return (
    <Screen>
      <div className="mx-auto max-w-md px-6 pt-10 pb-12">
        <Link
          href="/explore"
          transitionTypes={SCREEN_MOTION.back}
          className="press -ml-1 inline-flex items-center gap-1.5 text-sm text-ink-faint hover:text-ink"
        >
          <ArrowLeft size={16} />
          Explorer
        </Link>

        <h1 className="mt-6 font-serif-display text-[30px] font-semibold leading-tight text-ink">
          {author.name}
        </h1>
        {author.years && <p className="mt-1 text-sm text-ink-faint">{author.years}</p>}
        <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">{author.bio}</p>

        <ul className="stagger mt-10 space-y-1">
          {authorConcepts.map((concept) => (
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
