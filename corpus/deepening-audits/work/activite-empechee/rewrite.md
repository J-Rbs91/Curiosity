concept : activite-empechee
mode    : REVISE (application de `corpus/deepening-audits/work/activite-empechee/audit.md`, protocole d'audit v4)
date    : 2026-11-10

## Matière lue

- `corpus/deepenings/PROTOCOLE.md`, `AUDIT_PROTOCOL.md` (v4), `FACTCHECK_PROTOCOL.md` (v3)
- `corpus/deepenings/activite-empechee.json` (version auditée, SHA `0a016d07…`)
- `corpus/validated/activite-empechee.json` : aucun champ `dossier`, répertoire conventionnel seul
- `corpus/evidence/activite-empechee/` listé : un seul fichier, `lecture.json`, lu en entier
  (`attribution`, `quotation`, `sources_ouvertes`, `definition_de_lauteur`, `reserves`)
- `factcheck-pack.json` (registre des supports), `claim-map.json`, `verification.json` et
  `factcheck-gate.json` du tour 3 du 2026-09-30 (SHA `4cd3f278…`), lus comme **précédents** de
  formulation et non comme passes.

Aucune recherche web, aucun fait ajouté de mémoire. Toutes les sources mobilisées sont
`full-text` dans `sources_ouvertes` ; aucune source sans `consulted` (2003c, ouvrages PUF, Dejours)
n'est mobilisée pour son contenu.

## Compte de mots du texte lecteur (lead + sections, découpage sur espaces)

| | avant | après |
|---|---|---|
| lead | 208 | 213 |
| sections | 959 | 971 |
| **texte lecteur** | **1 167** | **1 184** (+1,5 %) |
| `limits` (interne) | 249 | 256 |
| total script `corpus:deepen` | — | 1 440 |

(L'audit compte 1 135 mots lecteur pour la version d'origine avec une autre règle de découpage ;
à règle constante la croissance est de +1,5 %, sous le plafond de +9 %, dans la cible 1 050–1 200.)

Architecture : cinq sections, dix paragraphes (contre cinq sections, dix paragraphes avant),
conforme à la trajectoire cible ; l'architecture à six sections du tour 3 n'est pas reprise.

## Retraits (substitution, pas empilement)

- C011 « Le reste, tout ce qui a été mobilisé sans laisser de trace équivalente, il l'appelle le
  réel de l'activité » : supprimé. S1 dit désormais que le réel n'est pas « ce qui resterait une
  fois le visible mis de côté ».
- lead[1] « donne un nom à ce reste » → « donne un nom à l'ensemble, liste comprise ».
- S1.P2 (vignette de la machine, redite de lead[0], « Tout le reste […] appartient au réel ») :
  supprimé.
- S2.P1 « Quatre éléments, donc […] possibilité manquée » : supprimé (compte fermé contredit par
  SUP-08c2d43fe6f4b8c5, SUP-5690f943879007ce).
- S2.P2 « presque nécessaire » : supprimé.
- S3.P1 « On résume souvent » : remplacé par « L'idée circule sous une étiquette » (aucune fréquence).
- S3.P2 (définitions inventées de « suspendue » et « contrariée ») : supprimé en entier.
- S4 entière (généalogie 2003, équipe, « toute une équipe de recherche », « deux décennies »),
  redondante avec l'`attributionNote` : supprimée.
- S5.P1 « Le texte de 2004 le dit […] juger un travail, ou chercher à l'améliorer » et « en disent
  souvent plus long » : supprimés.
- S5.P2 « le texte de 2018 demande […] au même titre » : supprimé ; la conclusion d'observation est
  réattribuée à l'article de 2011, qui la porte.

## Ajouts et supports qui les financent

| emplacement | ajout | support_id |
|---|---|---|
| lead[1] | « donne un nom à l'ensemble, liste comprise » (le nom va au volume entier) | SUP-c98d6b242ef735ab, SUP-94d565db4258c7c6 |
| S1.P1 | « deux termes qui ne sont pas synonymes » | SUP-94d565db4258c7c6 (« deux mots qui ne sont pas synonymes ») |
| S1.P1 | le réel ne désigne pas ce qui resterait ; emboîtement surface/volume ; « face exposée » | SUP-c98d6b242ef735ab, SUP-94d565db4258c7c6 (précédents C012, C013) |
| S1.P2 | 2024 : « n'a pas le monopole du réel de l'activité vécue des sujets, beaucoup moins observable », réalisé « que le psychologue du travail peut observer » | SUP-94d565db4258c7c6, SUP-ef71b0d2b7494085 |
| S1.P2 | « Entre le réel et le réalisé […] ne peuvent pas trier » et sa paraphrase | SUP-94d565db4258c7c6 (précédents C046, C047) |
| S2.P1 | « vingt ans plus tard », énumération complète, suite « Il faut y ajouter […] à refaire », le volume contient aussi des actions accomplies, un empêchement n'est pas un blanc | SUP-94d565db4258c7c6, SUP-ef71b0d2b7494085, SUP-08c2d43fe6f4b8c5, SUP-5690f943879007ce, SUP-a2b965c80c470e1d (précédents C022–C028) |
| S3.P1 | mécanisme : renvoi à Vygotski et citation de la collision des activités possibles | SUP-94d565db4258c7c6, SUP-646a0cf1ccea31e7, SUP-a2b965c80c470e1d, SUP-f8d3c87c1f9c523b (précédents C031–C033) |
| S3.P2 | activités battues agissantes ; activité empêchée non absente ; empêchement pas seulement extérieur (le conflit interne s'ajoute à l'obstacle) | SUP-94d565db4258c7c6, SUP-646a0cf1ccea31e7 (précédents C034–C037) |
| S4 | règle de 2024 signée seul (« ravalées ») ; 2018 cosigné « conceptuellement stabilisée » | SUP-94d565db4258c7c6, SUP-1ec99fe961831e90, SUP-2812cb300ba840d4, SUP-ef71b0d2b7494085, SUP-485dab252c277bc9, SUP-b240192fa21354b5 (précédents C030, C048–C052) |
| S5.P1 | 2004 « vise à donner du volume » avec son sujet exact (l'expérimentation en clinique de l'activité) | SUP-94d565db4258c7c6, SUP-220f157f8f801cf4 |
| S5.P1 | article de 2011 cosigné : « ne limite donc pas les possibilités du professionnel observé » ; deux personnes, même résultat | SUP-89739a4b2497d763 (précédents C062–C064) |
| S5.P2 | enjeu de santé, citation « affranchit le sujet […] psychopathologie du travail », pouvoir d'agir « amputé » | SUP-94d565db4258c7c6 (précédents C041–C044) ; « souvent » et « fréquemment » sont dans les citations de l'auteur, jamais en voix de narrateur |

Formulations conservées mot pour mot de la version d'origine : lead[0] entier ; citation et
dernière phrase de lead[1] ; S2.P2 (sans « presque nécessaire »).

## Delta par paragraphe

- lead[0] : sur sa propre journée, le lecteur voit ce que le compte rendu laisse tomber.
- lead[1] : un auteur nomme le tout, et l'image surface/volume.
- S1.P1 : deux termes non synonymes, le réalisé est inclus dans le réel (et non l'inverse du « reste »).
- S1.P2 : l'auteur le confirme en 2024 ; celui qui travaille ne peut pas trier.
- S2.P1 : contenu du volume, y compris des actions accomplies ; l'empêchement n'est pas un blanc.
- S2.P2 : l'échec n'est pas l'incompétence.
- S3.P1 : le mécanisme vygotskien de la collision des activités possibles.
- S3.P2 : conséquence : l'empêché continue d'agir, l'empêchement n'est pas seulement extérieur.
- S4.P1 : l'étiquette au singulier contre le pluriel adjectivé de l'auteur (2024 seul, 2018 cosigné).
- S5.P1 : conséquence pour l'observation (2004, 2011).
- S5.P2 : conséquence pour celui qui travaille : santé et pouvoir d'agir ; le texte se ferme sur
  cette tension, sans conclusion récapitulative.

Aucune paire consécutive au même delta ; aucune section ne reprend principalement une précédente.

## `limits` (interne, non affiché)

Réécrit en quatre paragraphes : 2003c sans lecture ; ouvrages PUF et livre de 1999 connus par
bibliographies, première occurrence du substantif non établie ; qualificatifs nommés sans être
définis l'un contre l'autre, formule en « c'est aussi » et énumération sans compte ;
psychodynamique du travail non documentée. `limits[3]` d'origine (« se joue dans les articles que
l'auteur a publiés en revue ») est retiré, comme l'audit le demandait : présupposition non
soutenue (SUP-d111dea4d5b00b68).

## Prescriptions d'audit non suivies ou réduites

- S1 en un paragraphe « deux au plus » : deux paragraphes, le second portant la confirmation de 2024.
- Pas de renvoi de lecture à *Travail et pouvoir d'agir* en fin de texte : tout énoncé reliant ce
  titre au pouvoir d'agir risquait une phrase de contenu sur un ouvrage non lu ; le texte se clôt
  sur la citation de l'auteur.
- La mention du substantif chez l'équipe en 2011 (précédent C053) n'est pas reprise, faute de
  place ; elle reste financée (SUP-89739a4b2497d763).

## Contrôle mécanique

`npm run corpus:deepen -- --check --only=activite-empechee` : PASS (« 1 approfondissement(s)
contrôlé(s), 1440 mots. Rien projeté. »).

Le SHA du texte a changé : le fact-check doit reprendre à `PREPARE`. Aucune auto-validation, aucun
`FACTCHECK_PASS` déclaré ici.
