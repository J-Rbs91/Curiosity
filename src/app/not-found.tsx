import { TreeLink } from "@/components/navigation/TreeLink";
import { Screen } from "@/components/motion/Screen";

/**
 * L'écran d'une adresse qui ne mène nulle part.
 *
 * Sans ce fichier, Next sert sa propre page : « 404 — This page could not be found. », en
 * anglais, hors du système visuel, et sans un seul lien. Ce n'est pas un cas théorique.
 * L'adresse d'une fiche est exactement ce que « Approfondir » place dans le dossier envoyé
 * à l'IA, comme lien de retour — c'est le seul contenu que l'application diffuse hors
 * d'elle-même. Un concept qui change d'identifiant au fil de son instruction rend caduc
 * tout ce qui a été partagé, et le lecteur qui suit le lien tombe alors sur un écran qui
 * n'est pas celui du produit.
 *
 * Deux sorties nommées plutôt qu'une : un cul-de-sac reste un défaut, y compris en cas
 * d'erreur, et le lecteur arrivé ici n'a par définition aucun historique à remonter.
 */
export default function NotFound() {
  return (
    <Screen>
      <div className="column column-editorial pt-10 pb-12">
        <p className="eyebrow">Page introuvable</p>
        <h1 className="mt-2 font-serif-display text-2xl font-semibold leading-tight text-ink">
          Cette adresse ne mène nulle part.
        </h1>
        <p className="mt-5 max-w-read text-md leading-relaxed text-ink-soft">
          La fiche a peut-être changé d&apos;adresse depuis que le lien a été partagé, ou
          elle n&apos;a pas encore terminé son instruction documentaire.
        </p>

        <ul className="rows rows-wide anchored">
          <li>
            <TreeLink
              href="/"
              className="press-soft block rounded-2xl px-1 hover:bg-paper-raised"
            >
              <p className="text-md leading-snug text-ink">Aujourd&apos;hui</p>
              <p
                className="text-sm leading-snug text-ink-soft"
                style={{ marginTop: "var(--gap-inline)" }}
              >
                Le concept du jour.
              </p>
            </TreeLink>
          </li>
          <li>
            <TreeLink
              href="/explore"
              className="press-soft block rounded-2xl px-1 hover:bg-paper-raised"
            >
              <p className="text-md leading-snug text-ink">Explorer</p>
              <p
                className="text-sm leading-snug text-ink-soft"
                style={{ marginTop: "var(--gap-inline)" }}
              >
                Les domaines, les thèmes et les auteurs du corpus.
              </p>
            </TreeLink>
          </li>
        </ul>
      </div>
    </Screen>
  );
}
