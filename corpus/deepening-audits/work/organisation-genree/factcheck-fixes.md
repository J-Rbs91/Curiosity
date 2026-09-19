concept : organisation-genree
mode    : FACTCHECK_FIX (boucle 1 sur 2)
date    : 2026-09-19
gate en entrée : FACTCHECK_FAIL, 62 claims, 55 SUPPORTED, 7 en échec
SHA de la version fautive : 5574e2a5a7231ed794f3bd3719e3427bb5877698791386efa6be8370e2a9ef8a

Artefacts lus : factcheck-gate.json, verification.json, claim-map.json (pour les `claim_text`
exacts et les `support_ids` attachés), factcheck-pack.json (texte des supports résolus),
rewrite.md, PROTOCOLE.md, FACTCHECK_PROTOCOL.md, corpus/deepenings/organisation-genree.json.

Aucune recherche. Aucune source rouverte. Aucun support ID manipulé. Aucune affirmation
nouvelle : les corrections retirent, bornent ou requalifient, elles n'ajoutent rien.

## C001 et C002 (UNSUPPORTED, lead[0])

Claims fautifs :
- C001 « Une offre d'emploi mentionne rarement des conditions réservées explicitement à un
  sexe. »
- C002 « Elle demande des compétences, une certaine disponibilité, parfois la capacité à
  repousser un dîner de famille ou à partir en déplacement sans long préavis. »

Motif du gate : énoncés empiriques généraux sur la rédaction réelle des offres d'emploi
(fréquence « rarement », contenu typique), présentés comme des faits du monde. Le dossier porte
l'analyse d'Acker, pas une description du marché du travail contemporain ; aucun support ne
peut les autoriser, et l'absence de preuve ne vaut pas licence.

Correction : requalification en exemple explicitement hypothétique, autorisée par
`PROTOCOLE.md` §4 (« Un exemple inventé ne doit jamais pouvoir passer pour un cas historique
ou empirique. Sa nature se lit dans sa première phrase »). Les deux phrases sont fondues en
une seule, placée sous le marqueur « Imaginons » :

  « Imaginons une offre d'emploi qui ne mentionne aucune condition réservée explicitement à un
  sexe, et qui demande des compétences, une certaine disponibilité, parfois la capacité à
  repousser un dîner de famille ou à partir en déplacement sans long préavis. »

La généralisation de fréquence (« rarement ») disparaît entièrement : il n'est plus dit ce que
font les offres réelles, mais ce que contient une offre qu'on se donne. Les claims C003 et C004
du même paragraphe, tous deux SUPPORTED, sont conservés mot pour mot ; leur anaphore
(« cette liste », « ces conditions ») porte désormais sur l'offre imaginée, ce qui ne change
ni leur contenu ni leur appui.

## C041 (UNSUPPORTED, sections[4].paragraphs[0])

Claim fautif : « Chercher un préjugé conduit à reprendre des décisions une à une, un
recrutement, une promotion, une évaluation, pour se demander si chacune était justifiée ; on
peut les trouver toutes défendables. »

Motif du gate : description méthodologique substantielle présentée comme vraie, sans preuve au
dossier. Le dossier établit bien ce qu'Acker refuse (« gendered attitudes and behavior are
brought into (and contaminate) essentially gender-neutral structures », p. 142), mais pas ce
en quoi consisterait une enquête sur les préjugés, ni son issue possible.

Correction : suppression pure. L'affaiblissement était tentant (« ce serait reprendre… ») mais
laissait intacte l'affirmation de méthode ; la borner n'aurait donc rien borné. La phrase est
retirée sans rien mettre à la place, et notamment sans reformuler le passage disponible sur la
vue qu'Acker écarte, ce qui aurait été une affirmation nouvelle.

Effet sur le paragraphe : C039 (« Rien de tout cela ne porte sur les intentions de quiconque »,
SUPPORTED) porte seul le premier versant du contraste, et C042 (SUPPORTED) porte le second.
Le paragraphe conserve son delta, plus court.

## C043 (UNSUPPORTED, sections[4].paragraphs[0])

Claim fautif : « Les deux démarches ne se remplacent donc pas. »

Motif du gate : conclusion normative sur la non-substituabilité de deux démarches d'enquête,
qu'aucun support attaché n'établit.

Correction : suppression. Le « donc » reposait en outre sur C041, désormais retiré ; le garder
aurait fait conclure une comparaison qui n'est plus faite.

## C048 (TOO_STRONG, sections[4].paragraphs[1])

Claim fautif : « […] ce qui supposerait, écrit-elle, la fin des organisations telles qu'elles
existent aujourd'hui. »

Motif du gate : les deux supports attachés (SUP-bf13b34dadb4ce80, SUP-0f2ed0b6f009c7b2)
portent « would PROBABLY require the end of organizations as they exist today » (p. 154-155).
Le texte supprimait la modalisation et attribuait à l'autrice une implication nécessaire là où
elle écrit une probabilité.

Correction : restitution de la modalisation, au plus près du support.

  « […] ce qui exigerait probablement, écrit-elle, la fin des organisations telles qu'elles
  existent aujourd'hui. »

« exigerait probablement » rend « would probably require » sans ajouter de contenu. La
première partie du claim (« dissoudre l'emploi abstrait et rendre sa place au corps féminin
absent »), tenue pour exacte par le verifier, est inchangée.

## C057 (TOO_STRONG, sections[5].paragraphs[1])

Claim fautif : « Une définition de poste ne trie donc pas partout dans le même sens : elle trie
selon ce qu'elle suppose, et toutes ne supposent pas la disponibilité sans limite. »

Motif du gate : conséquence dérivée qui excède et contredit en partie le support unique
(SUP-e8360e0bee462a99). Acker y distingue « the gendered organization of work » et « the […]
characteristics of the ideal worker », et maintient dans la même phrase que « work is organized
on the model of the unencumbered (white) man, and both women and men are expected to perform
according to this model ». Le claim convertissait une variation de la figure du travailleur
idéal en variation de ce que suppose la définition de poste.

Correction : suppression de la phrase entière. Écrire à sa place la distinction qu'Acker pose
réellement entre organisation genrée du travail et caractéristiques du travailleur idéal aurait
été une affirmation nouvelle, exclue par la consigne de cette boucle. Le paragraphe s'arrête
donc sur l'auto-correction de 2006 (C053 à C056, tous SUPPORTED), qui est son delta ; rien de
ce qui y est dit ne dépend de la phrase retirée.

## C062 (TOO_STRONG, sections[5].paragraphs[2])

Claim fautif : « Acker la pose en anglais, et c'est dans cette langue qu'il faudra aller la
lire. »

Motif du gate : la langue de l'article est établie (SUP-561772a7977fe47e, « en »), mais les
deux supports sur la traduction sont des constats de recherche négatifs explicitement bornés :
« aucune traduction française […] n'a été identifiée » (SUP-a47dfce99fc542a6,
SUP-2dbb7ec9af398828) et « je ne peux pas affirmer qu'il n'en existe pas ; les recherches ont
porté sur HAL, OpenEdition, Érudit et le web, non sur les catalogues de bibliothèques »
(SUP-66f6cdde6603e275). Le texte transformait cette absence de résultat en nécessité.

Correction : la partie établie est gardée, la nécessité linguistique est retirée.

  « Acker la pose en anglais, et c'est son article qu'il faudra aller lire. »

Ce qui reste affirmé : la langue de l'article, et l'invitation à aller au texte. Ce qui n'est
plus affirmé : qu'aucune autre voie d'accès n'existe. La forme reste du côté du lecteur
(« il faudra aller lire »), conformément à `PROTOCOLE.md` §1, et ne raconte aucune recherche
infructueuse.

## `limits`

Le champ n'est pas fact-checké (le pack ne construit des claims que sur `lead` et `sections`),
mais il portait la même faute de logique que C062 : « Aucune traduction française publiée de
l'article de 1990 n'est connue ». La frontière interne est resserrée pour que le prochain
rédacteur ou auditeur ne la relise pas comme une autorisation :

  « Aucune traduction française publiée de l'article de 1990 n'a été identifiée, et ce résultat
  négatif n'autorise pas à écrire qu'il n'en existe pas : la citation est une traduction
  interne, et le texte lecteur ne dit donc pas que l'anglais serait la seule langue où l'article
  se lise. »

Aucun contenu de `limits` n'est remonté en bloc visible ; les trois autres paragraphes sont
inchangés.

## Ce qui n'a pas été touché

Les 55 claims SUPPORTED sont inchangés mot pour mot, à une exception de forme près : C003 et
C004 sont littéralement identiques, seule leur phrase d'amorce a changé de statut. Aucune
citation entre guillemets n'a été ajoutée, déplacée ni modifiée : la seule citation verbatim
attribuée à l'autrice reste celle de la p. 149 que l'enregistrement validé porte.

## Contrôles

- Deltas : les quatre paragraphes amputés conservent chacun un delta distinct. Aucun paragraphe
  n'est devenu redondant avec son voisin, puisque seules des phrases ont été retirées, jamais
  déplacées d'une section à l'autre.
- Frontières documentaires : chaque phrase restante était déjà SUPPORTED, ou est désormais
  hypothétique déclarée, modalisée ou réduite à sa part établie.
- Aucun tiret cadratin, aucune liste, aucun balisage, aucun titre modifié.
- Volume : texte lecteur 1 506 mots avant, 1 408 après ; `limits` 219 avant, 227 après ; total
  contrôlé 1 725 avant, 1 690 après, dans la cible 1 300-1 700.
- `npm run corpus:deepen -- --check --only=organisation-genree` : PASS
  (« 1 approfondissement(s) contrôlé(s), 1690 mots. Rien projeté. »), aucun avertissement de
  citation non sourcée.

## Suite

Le texte a changé : le SHA candidat est invalidé et le fact-check précédent tombe en entier.
L'orchestrateur doit reprendre à `PREPARE`, reconstruire le pack, remapper et refaire vérifier
les 62 claims (leur numérotation changera). Aucun `FACTCHECK_PASS` n'est déclaré ici, et aucune
validation pédagogique n'est demandée.
