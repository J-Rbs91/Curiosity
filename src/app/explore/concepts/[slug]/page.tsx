"use client";

import { useEffect, useState } from "react";
import { useParams, notFound, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { concepts, authors, themes } from "@/content";
import { indexConcepts, getRelatedConcepts, getPrerequisiteConcepts } from "@/domain/concepts/graph";
import { getProgressService } from "@/services/progress";
import { ConceptMetaTags } from "@/components/concept/ConceptMetaTags";
import { ConceptQuotation } from "@/components/concept/ConceptQuotation";
import { ConceptSourceList } from "@/components/concept/ConceptSources";
import { Screen } from "@/components/motion/Screen";
import { SCREEN_MOTION } from "@/components/motion/screen-motion";
import { Button } from "@/components/ui/Button";
import { ShareToAI } from "@/components/ui/ShareToAI";
import { storePendingSession } from "@/lib/pending-session";
import type { UserConceptProgress, SessionPlan } from "@/types";

const conceptIndex = indexConcepts(concepts);

export default function ConceptDetailPage() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();
  const concept = concepts.find((c) => c.slug === params.slug);
  const [progress, setProgress] = useState<UserConceptProgress | undefined>(undefined);

  useEffect(() => {
    // Lecture localStorage : impossible pendant le rendu serveur, doit se faire après le montage.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (concept) setProgress(getProgressService().getState().concepts[concept.id]);
  }, [concept]);

  if (!concept) return notFound();

  const conceptAuthors = authors.filter((a) => concept.authors.includes(a.id));
  const conceptThemes = themes.filter((t) => concept.themes.includes(t.id));
  const related = getRelatedConcepts(conceptIndex, concept);
  const prerequisites = getPrerequisiteConcepts(conceptIndex, concept);

  /*
   * La progression sert encore à choisir le verbe de l'action — on ne redécouvre
   * pas ce qu'on a déjà vu — mais elle ne s'affiche plus nulle part.
   */
  const alreadyKnown = (progress?.masteryScore ?? 0) >= 1;

  function studyNow() {
    const plan: SessionPlan = {
      id: `manual-${concept!.id}-${Date.now()}`,
      type: alreadyKnown ? "review" : "discovery",
      primaryConceptId: concept!.id,
      headline: concept!.hookQuestion,
    };
    storePendingSession(plan);
    router.push("/learn", { transitionTypes: SCREEN_MOTION.enterSession });
  }

  return (
    <Screen>
      <div className="mx-auto max-w-md px-6 pt-10 pb-12">
        {/*
         * Une destination nommée plutôt qu'un retour d'historique : cette fiche
         * s'atteint depuis un auteur, un thème ou la fin d'une session, et dans
         * ce dernier cas un retour arrière renvoyait dans la session qu'on
         * venait de terminer.
         */}
        <Link
          href="/explore"
          transitionTypes={SCREEN_MOTION.back}
          className="press -ml-1 inline-flex items-center gap-1.5 text-sm text-ink-faint hover:text-ink"
        >
          <ArrowLeft size={16} />
          Explorer
        </Link>

        <h1 className="mt-6 font-serif-display text-[30px] font-semibold leading-tight text-ink">
          {concept.title}
        </h1>

        <div className="mt-5">
          <ConceptMetaTags authors={conceptAuthors} themes={conceptThemes} />
        </div>

        {/*
         * Une fiche d'échafaudage n'est servie qu'en développement, mais tant qu'elle est
         * à l'écran elle doit dire ce qu'elle est : rien de ce qu'elle affirme n'a été
         * vérifié, et la confondre avec une fiche instruite fausserait toute relecture.
         */}
        {concept.provenance === "fixture" && (
          <p className="mt-4 text-[13px] leading-relaxed text-ink-faint">
            Fiche d&apos;échafaudage : contenu écrit sans vérification documentaire, en
            attente d&apos;instruction. Ne pas s&apos;y fier.
          </p>
        )}

        {/*
         * L'attribution réelle, quand elle ne se réduit pas aux pastilles d'auteurs :
         * concept coécrit rangé sous un seul nom, terme forgé par un tiers. Une ligne
         * discrète plutôt qu'un badge — c'est une précision de lecture, pas un label.
         */}
        {concept.attributionNote && (
          <p className="mt-4 text-[13px] leading-relaxed text-ink-faint">
            {concept.attributionNote}
          </p>
        )}

        <p className="mt-8 text-[18px] leading-relaxed text-ink">{concept.shortExplanation}</p>
        <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
          {concept.detailedExplanation}
        </p>

        {concept.quotation && (
          <div className="mt-8">
            <ConceptQuotation quotation={concept.quotation} />
          </div>
        )}

        <p className="mt-8 text-[15px] leading-relaxed text-ink-soft">{concept.concreteExample}</p>

        {prerequisites.length > 0 && (
          <ConceptLinkList label="Prérequis" concepts={prerequisites} />
        )}
        {related.length > 0 && <ConceptLinkList label="Concepts reliés" concepts={related} />}

        {concept.sources && (
          <div className="mt-8">
            <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">
              Sources
            </h2>
            <div className="mt-3">
              <ConceptSourceList sources={concept.sources} />
            </div>
          </div>
        )}

        <div className="mt-12 flex items-center gap-2">
          <Button onClick={studyNow}>{alreadyKnown ? "Revoir" : "Approfondir"}</Button>
          <ShareToAI concept={concept} authors={conceptAuthors} themes={conceptThemes} />
        </div>
      </div>
    </Screen>
  );
}

function ConceptLinkList({ label, concepts: items }: { label: string; concepts: typeof concepts }) {
  return (
    <div className="mt-8">
      <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">{label}</h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((c) => (
          <li key={c.id}>
            <Link
              href={`/explore/concepts/${c.slug}`}
              transitionTypes={SCREEN_MOTION.deeper}
              className="press inline-flex rounded-full bg-paper-raised px-3 py-1.5 text-sm text-ink-soft hover:bg-paper-contact hover:text-ink"
            >
              {c.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
