concept : attention-diffusee-et-selection
mode    : FACTCHECK_FIX
boucle  : 1 sur 2 (le FACTCHECK_INVALID antérieur n'en a consommé aucune)

SHA du deepening jugé par le gate : fd224ce2fe0c7760e8056eafd3f3399899f0fe5da1c200d6af93380be47e3c16
SHA du deepening après correction : dc10ed36667348996f1eeac277f7851c79ac800f2baa1e54ee535bb4afd52da0

Toute modification invalide le SHA : le cycle doit repartir de PREPARE. Aucun artefact de
fact-check n'a été touché à la main, aucun support n'a été forgé, aucune source n'a été
sollicitée, aucune recherche n'a été faite.

## Matériaux relus

- corpus/deepening-audits/work/attention-diffusee-et-selection/factcheck-gate.json
- corpus/deepening-audits/work/attention-diffusee-et-selection/verification.json (entrée C005)
- corpus/deepening-audits/work/attention-diffusee-et-selection/claim-map.json (bornes des claims
  du lead et de sections[3].paragraphs[2])
- corpus/deepening-audits/work/attention-diffusee-et-selection/factcheck-pack.json (texte des
  deux appuis de C005 : SUP-c453e2a9ce403534, origine evidence:lecture.json,
  $.definition_de_lauteur ; SUP-fe46f540ec07ea11, origine validated, $.summary)
- corpus/deepening-audits/work/attention-diffusee-et-selection/audit.md et rewrite.md
- corpus/deepenings/PROTOCOLE.md, AUDIT_PROTOCOL.md, FACTCHECK_PROTOCOL.md
- corpus/deepenings/attention-diffusee-et-selection.json
- corpus/validated/attention-diffusee-et-selection.json : aucun champ `dossier`, donc le
  répertoire conventionnel est le seul dossier possible
- corpus/evidence/attention-diffusee-et-selection/ listé : lecture.json et reception.json, tous
  deux lus, y compris leurs blocs `reserves` ; pas de scouting.json dans ce répertoire

Les fichiers suffixés « -mapping-incomplet-C052 » n'ont pas été ouverts.

## Le refus, et ce qu'il porte exactement

C005, lead[0], bornes 522-625 : « Ce qu'on appelle ordinairement l'attention est un resserrement :
on fixe une chose, on oublie le reste. » Verdict TOO_STRONG.

Les deux appuis autorisent un contraste et rien de plus. Lahy écrit que le machiniste « utilise
une forme particulière de l'attention » et glose l'attention diffusée comme « celle qui porte sur
plusieurs objets à la fois ». Ni l'un ni l'autre ne dit ce qu'est l'attention au sens ordinaire,
et en particulier rien n'établit qu'elle soit un resserrement dans lequel on oublie le reste. Le
cas B. est la défaillance d'un machiniste dépourvu de l'aptitude, non une définition générale.

Contre-vérification faite avant de corriger, conformément à PROTOCOLE §4 (« on ne rétrograde
qu'après avoir cherché ») : les `notes` et le bloc `review` de l'enregistrement validé, ainsi que
`definition_de_lauteur` et les `reserves` de lecture.json, ont été relus à la recherche d'un
énoncé sur l'attention au sens ordinaire. Il n'y en a aucun. La matière n'existe pas ailleurs :
le claim n'est pas fondable, il est à retirer.

## Correction appliquée

Deux suppressions, aucun ajout. Le diff ne contient pas un mot nouveau.

1. lead[0]. La phrase de C005 est retirée intégralement. Le paragraphe se termine désormais par
   « Aucune ne mérite à elle seule qu'on s'y absorbe, et c'est là toute la difficulté. Sur ce
   siège, se concentrer serait une faute professionnelle. »

   Aucune définition n'en remplace une autre, comme demandé. Le contraste que l'audit tenait pour
   le bon delta du paragraphe survit, et il survit sur des appuis tenus : C004 (« Aucune ne mérite
   à elle seule qu'on s'y absorbe ») et C006 (« se concentrer serait une faute professionnelle »)
   sont tous deux SUPPORTED, et leurs chaînes restent inchangées au caractère près, bornes de
   claim comprises. Ce qui disparaît est uniquement le pas de trop : l'énoncé général sur ce que
   le mot attention voudrait dire hors de ce métier. Le renversement que le lecteur éprouve, lui,
   n'a jamais eu besoin de cette définition : il se produit sur « faute professionnelle », qui
   suffit à faire sentir qu'ici l'attention ordinaire est du mauvais côté, sans que le texte
   prétende dire ce qu'elle est.

   Conséquence de lecture vérifiée : lead[1] ouvre sur « Reste à nommer l'aptitude inverse ».
   L'antécédent d'« inverse » n'est plus la définition supprimée, c'est « se concentrer », qui le
   précède immédiatement. La phrase reste lisible et C007 reste intact.

2. sections[3].paragraphs[2]. L'incise finale de C042 est retirée : « sa faute est un resserrement
   sur un seul objet, c'est-à-dire ce qu'on appelle d'ordinaire être attentif. » devient « sa
   faute est un resserrement sur un seul objet. »

   Motif, et il est le même refus : cette incise est la proposition refusée par le gate,
   réaffirmée une seconde fois. Elle a franchi la vérification parce que le claim map l'avait
   normalisée en « La faute de B. consiste à fixer son attention sur un seul objet », qui est
   soutenu et qui ne contient plus l'excédent. Le verifier a jugé la forme normalisée, non la
   phrase du lecteur. Laisser l'incise aurait rendu le texte porteur, en sections[3], de ce qui
   lui est interdit en lead[0], et sur un appui que le gate a explicitement déclaré absent. La
   retirer est une suppression, du registre exact autorisé (« retirer »), et non une compensation :
   rien n'est ajouté nulle part pour équilibrer.

   Ce que la phrase conserve est soutenu : la faute de B. est bien de fixer son attention sur un
   seul objet, le taxi, ce que rapporte le récit de la p. 170. Et le rôle que le rewrite assignait
   à ce paragraphe, refermer le texte sur l'intuition du lead sans la répéter, tient toujours :
   « resserrement sur un seul objet » répond à « se concentrer serait une faute professionnelle »
   sans redire une définition que ni l'un ni l'autre ne porte plus.

## Contrôle des titres, demandé explicitement

Les titres sont du texte lecteur et aucun claim ne les couvre : le gate ne peut pas les voir. Les
six ont donc été relus un à un contre l'excédent retiré, c'est-à-dire contre toute définition de
ce qu'on appelle ordinairement l'attention, ou de l'attention tout court.

- « Ce que « diffusée » veut dire ici » : porte sur l'adjectif et le borne par « ici ». Ne définit
  pas l'attention. Rien à retirer.
- « Neuf lampes, deux vibreurs, un fond de rue projeté » : trois éléments matériels, tous dans la
  description du dispositif (p. 118-119). Aucun énoncé sur l'attention.
- « Une note qui n'existe que par rapport aux autres » : porte sur la cote et son classement.
- « Trois cents machinistes examinés après l'accident » : effectif et protocole, p. 170.
- « Quand le test et les chefs ne disent pas la même chose » : porte sur la corrélation de la
  p. 169.
- « Un laboratoire commandé par une compagnie d'autobus » : porte sur la commande industrielle.

Aucun des six ne reprend l'excédent retiré, ni sous la forme d'une définition, ni sous celle d'une
allusion à ce que l'attention serait ordinairement. Aucun titre n'a été modifié.

Observation consignée sans correction, parce qu'elle sort du périmètre de cette boucle et qu'elle
n'a aucun rapport avec le claim refusé : le sixième titre dit « une compagnie d'autobus » là où le
corps du texte dit « la compagnie des transports parisiens » et mentionne son réseau de tramways.
La réduction est locale et défendable, l'article portant sur les machinistes d'autobus ; un tour
ultérieur pourra la resserrer si l'auditeur le juge utile. Elle n'est pas touchée ici.

## Frontière interne

`limits` n'a pas été modifié et reste ce qu'il est, un garde-fou interne. Rien de son contenu
n'est remonté dans le texte lecteur, ni comme paragraphe, ni comme titre. La correction n'ouvre
aucune frontière nouvelle qui vaudrait d'y être inscrite : elle retire une affirmation, elle ne
découvre pas une lacune de source. Il aurait été tentant d'y ajouter une ligne du genre « aucune
source ne définit l'attention ordinaire » ; ce serait consigner l'absence d'une matière que le
texte ne cherche plus à dire, et `limits` doit nommer une source, son état d'accès et
l'affirmation qu'il interdit, pas un énoncé désormais absent.

## Deltas après correction, paragraphes touchés

- lead[0] : le lecteur voit la scène du siège, comprend que les sollicitations sont simultanées et
  non annoncées, et apprend que s'absorber sur l'une d'elles serait ici une faute de métier. Delta
  net, un cran plus serré qu'avant : la phrase retirée posait une généralité que la suivante
  rendait de toute façon sensible.
- sections[3].paragraphs[2] : le lecteur voit le cas typique, comprend que la faute est un
  resserrement sur un seul objet, lit le rang de B. et la phrase sur les inspecteurs. Delta
  inchangé.

Aucun autre paragraphe n'est modifié. Aucune section ne répète principalement une section
précédente, et les deux phrases voisines conservées dans lead[0] ne font pas le même travail :
l'une dit la difficulté de la situation, l'autre la conséquence professionnelle.

## Volumes

- lead : 163 mots (fourchette 120-200), contre 180 avant.
- texte lecteur : 1 559 mots (fourchette 1 300-1 700), contre 1 583 avant.
- comptage du script : 1 769 mots, `limits` compris.

## Contrôle mécanique

npm run corpus:deepen -- --check --only=attention-diffusee-et-selection

    1 approfondissement(s) contrôlé(s), 1769 mots. Rien projeté.

PASS, aucune erreur, rien projeté.

Aucune auto-validation : ce compte rendu ne rend ni ACCEPT ni FACTCHECK_PASS. Le cycle doit
repartir de PREPARE sur le SHA dc10ed36667348996f1eeac277f7851c79ac800f2baa1e54ee535bb4afd52da0.
