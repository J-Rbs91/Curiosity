import type { ReactNode } from "react";
import { TreeLink } from "@/components/navigation/TreeLink";

/**
 * Une ligne de destination, et la seule de l'application.
 *
 * Elle existait en deux exemplaires — un dans l'écran Explorer, un recopié dans les trois
 * écrans de détail — qui avaient divergé sur tout ce qui ne se voit qu'en mesurant : 17 px
 * en graisse 500 contre 400, sous-titre à 15 px contre 14, interligne 23,4 contre 25,5,
 * remplissage `py-4` contre `py-3.5`. Aucune de ces différences ne portait de sens. Deux
 * implémentations d'un même objet divergent toujours ; il n'en reste qu'une.
 *
 * **Une ligne, pas une carte.** Le regroupement se fait par l'espacement, sans surface :
 * douze cartes de même niveau se disputent l'attention, douze lignes se parcourent.
 *
 * **Trois natures d'information, trois traitements.** Le nom qu'on cherche, la phrase qui
 * dit ce qu'on trouvera derrière, les notions qui permettent de reconnaître un terrain sans
 * le lire. La hiérarchie interne est portée par la taille et le contraste, pas par la
 * graisse : dans une liste de dix lignes, une graisse appuyée sur chaque intitulé fait de
 * la liste entière une masse plus lourde que l'en-tête qui la commande.
 *
 * **Rien n'est tronqué.** Une phrase coupée oblige à ouvrir pour savoir si l'on voulait
 * ouvrir — exactement le contraire du service que rend une liste.
 *
 * **Le nom est en sans-serif.** La serif porte ce qui se lit ; le sans porte ce qui se
 * choisit. Un nom propre dans une liste de destinations est une étiquette, pas un texte.
 *
 * Le remplissage vertical vient de la classe `.rows` portée par la liste, avec l'écart
 * entre frères : les deux se calculent ensemble et ne peuvent donc pas être réglés ici.
 */
export function ListRow({
  href,
  title,
  tagline,
  keywords,
  note,
}: {
  href: string;
  title: string;
  /** Ce qu'on trouvera derrière. Écrite courte plutôt que rognée à l'affichage. */
  tagline?: string;
  keywords?: string[];
  /** L'état de ce qu'il y a derrière, quand il change la décision d'y aller. */
  note?: ReactNode;
}) {
  return (
    <li>
      <TreeLink href={href} className="press-soft block rounded-2xl px-1 hover:bg-paper-raised">
        <p className="text-md leading-snug text-ink">{title}</p>
        {tagline && (
          <p
            className="text-sm leading-snug text-ink-soft"
            style={{ marginTop: "var(--gap-inline)" }}
          >
            {tagline}
          </p>
        )}
        {keywords && keywords.length > 0 && (
          <p
            className="text-xs leading-snug text-ink-faint"
            style={{ marginTop: "var(--gap-inline)" }}
          >
            {keywords.join(" · ")}
          </p>
        )}
        {note && <div style={{ marginTop: "var(--gap-inline)" }}>{note}</div>}
      </TreeLink>
    </li>
  );
}

/**
 * L'en-tête d'une liste, et le compte de ce qu'elle contient.
 *
 * Un seul format de comptage dans toute l'application. Il y en avait deux — « 4 domaines »
 * et « Thèmes · 9 » — pour une même information, ce qui oblige à relire pour comprendre
 * qu'on lit la même chose.
 *
 * Le compte est omis quand la liste est entièrement visible sous l'en-tête : compter ce
 * qu'on voit n'apprend rien, et le chiffre s'intercale précisément là où l'en-tête doit
 * s'ancrer sur son groupe.
 */
export function ListHeading({ children, count }: { children: ReactNode; count?: number }) {
  return (
    <h2 className="eyebrow">
      {children}
      {count !== undefined && count > 0 && ` · ${count}`}
    </h2>
  );
}
