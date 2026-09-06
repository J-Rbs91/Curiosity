# Thème proposé pour `operations-management`, nuit du 6 septembre 2026

Passage 14 de la routine nocturne, phase 3, huit fiches écrites. Ce document **propose**, il ne
déclare pas : rien n'est écrit dans `src/content/themes.ts`. La règle du dépôt est stricte et son
motif est visible dans l'application, **un thème sans carte validée affiche une page vide**, et le
dépôt en a déjà deux. Un thème ne se déclare que s'il porte une carte validée, et de préférence
plus d'une.

## Ce qui s'est rangé dans les trois thèmes existants

Six des huit fiches du lot entrent sans forcer dans les trois thèmes déclarés le 25 août 2026.

| fiche | thème | pourquoi |
|---|---|---|
| `tolerance-economique-et-controle` | `variation-et-controle` | Shewhart y pose la variabilité d'un procédé comme la condition d'une tolérance calculable. Le thème porte sur ce qu'un procédé fait varier et sur les limites qu'on trace dessus. |
| `carte-de-controle` | `variation-et-controle` | Le dispositif qui tranche entre ce qui varie sans raison et ce qui signale un dérangement, c'est-à-dire exactement la question du thème. |
| `etat-de-controle-statistique` | `variation-et-controle` | Fiche déjà écrite et contrôlée le 25 août, reprise cette nuit. Thème inchangé. |
| `deux-penalites-pour-un-meme-ecart` | `produire-et-stocker` | La tagline du thème, « un stock coûte, une rupture aussi : il faut trancher entre les deux », est littéralement l'énoncé de Bellman. |
| `stock-remede-au-desajustement-des-rythmes` | `produire-et-stocker` | Guihéneuf dit pourquoi une entreprise détient un stock, et ce que cette conception change à la conduite de son renouvellement. |
| `lot-economique` | `produire-et-stocker` | Combien fabriquer d'un coup, et ce que le stock ainsi porté coûte : la question du thème, prise par le lot. |

`ordonnancer` ne reçoit aucune fiche de ce lot, et ce n'est pas un manque : ses deux cartes
validées viennent toutes deux du rapport P-651, dont la partie III instruite cette nuit ne porte
pas sur l'ordre de passage.

## Les deux fiches qui ne s'y rangent pas

`desynchronisation-operations-procedes` (Claude Fiore, 1987) et
`distorsion-rationnelle-de-la-demande` (Lee, Padmanabhan et Whang, 1997).

Ce qui a été essayé avant de proposer un thème neuf, et pourquoi cela ne tient pas :

- **`ordonnancer` pour Fiore.** Fiore appelle bien lui-même le juste-à-temps « cette technique
  d'ordonnancement » (p. 51). Mais le thème porte sur l'ordre de passage de tâches sur les mêmes
  postes et sur le temps mort où cet ordre agit ; Fiore porte sur l'**affectation** des opérations
  à des procédés, c'est-à-dire sur quel poste fait quoi, et sur ce que défaire cette affectation
  coûte en stabilité de capacité. Ce n'est pas la même question, et l'y ranger reviendrait à
  ranger par le mot plutôt que par l'objet.
- **`produire-et-stocker` pour Lee, Padmanabhan et Whang.** Deux des quatre causes de l'article
  sont des grandeurs du thème, la taille de lot et l'anticipation de la pénurie, et l'article
  modélise bien des politiques de recomplètement. Mais le concept de la carte n'est pas une règle
  de dimensionnement : c'est ce que des règles de commande localement optimales font à
  **l'information qui remonte la chaîne**. Le ranger là ferait passer un résultat de coordination
  pour un arbitrage de stock.
- **`variation-et-controle` pour Lee.** Le mot « variabilité » est commun aux deux, la chose non :
  Shewhart parle de la variabilité d'un procédé autour d'un système de causes, Lee de
  l'amplification de la variance des commandes d'un maillon au suivant. L'homonymie ne fait pas un
  thème.

## La proposition

- **identifiant** : `coordonner-des-etapes`
- **libellé affiché** : « Ce qui se dérègle entre les étapes »
- **tagline possible** : « Une décision locale ne reste jamais locale. »
- **mots-clés possibles** : Étapes successives, Désynchronisation, Amplification
- **description possible** : « Une production passe par des étapes qui se suivent, postes d'un
  atelier ou maillons d'une chaîne, et chacune décide pour elle seule : quelle machine prend quelle
  opération, combien commander et quand. Ce thème porte sur ce que ces décisions locales font aux
  liaisons entre étapes, sur ce qu'elles y déstabilisent et sur ce qu'elles y déforment, alors même
  que chacune est prise pour de bonnes raisons. »
- **domaine** : `operations-management`

**La raison.** Les deux textes répondent à la même question, et ils y répondent par le même geste :
prendre une décision qui est bonne à son endroit, et regarder ce qu'elle fait aux étapes voisines.
Chez Fiore, réduire la taille des lots pour raccourcir le cycle défait l'attribution fixe des
opérations aux procédés, et les liaisons entre procédés deviennent instables au point que la
prévision des capacités tombe. Chez Lee, Padmanabhan et Whang, mettre à jour sa prévision, grouper
ses commandes, se prémunir d'une pénurie ou profiter d'un prix bas sont quatre conduites
rationnelles, et leur effet conjoint est que la variabilité des commandes croît en remontant la
chaîne. Dans les deux cas, aucun acteur n'a besoin de se tromper pour que l'ensemble se dérègle ; dans les
deux cas, le remède proposé porte sur les liaisons et non sur les décideurs, reconnecter opérations
et procédés chez l'un, s'attaquer à l'infrastructure interorganisationnelle chez l'autre.

**Les fiches qui le porteraient** : `desynchronisation-operations-procedes` et
`distorsion-rationnelle-de-la-demande`. Deux fiches, de deux textes indépendants, de deux
littératures et de deux langues, séparés de dix ans : c'est le seuil que les lots de cybernétique,
de sociologie du travail et d'économie comportementale ont fixé, jamais moins de deux cartes
venant de deux textes distincts.

**Ce qui manque encore, et qui interdit de déclarer ce soir.** Les deux fiches sont en
`corpus/review/`, aucune n'a reçu le contrôle aveugle, et un thème se déclare quand une carte
**validée** le porte, pas quand une carte existe. Les deux fiches portent donc l'identifiant
`coordonner-des-etapes` avec son libellé dans leur propre `theme_labels`, ce que le schéma prévoit,
et leur `domain` en clair, faute de quoi rien ne les situerait dans la taxonomie. Le validateur les
signale comme thème nouveau : c'est le comportement attendu, et c'est ce signal qui devra être levé
par une déclaration si les deux cartes passent.

**Une réserve, portée plutôt que tue.** Fiore décrit des postes à l'intérieur d'un même atelier,
Lee et ses coauteurs des entreprises distinctes le long d'une chaîne. L'échelle n'est pas la même,
et un contrôle peut légitimement juger que le thème réunit deux objets par une analogie. Ce qui
plaide dans l'autre sens, et qui a emporté la proposition : les deux textes nomment eux-mêmes leur
objet par les liaisons entre étapes, « liaisons entre procédés » chez Fiore, « supply chain
members » chez Lee, et les deux tirent leur conclusion pratique sur ces liaisons plutôt que sur les
postes ou les firmes qu'elles relient.

**Une troisième carte possible, non retenue.** `stock-remede-au-desajustement-des-rythmes` porterait
ce thème sans le forcer : Guihéneuf dit qu'un stock existe parce que deux opérations consécutives ne
vont pas au même rythme, ce qui est bien un fait de liaison entre étapes. Elle est laissée dans
`produire-et-stocker`, où elle est chez elle et où elle rejoint quatre cartes déjà validées et deux
autres du même lot, et parce qu'un
thème neuf ne se renforce pas en dépouillant un thème existant. Si le passage suivant instruit un
troisième texte de coordination, cette fiche est le premier renfort à réexaminer.
