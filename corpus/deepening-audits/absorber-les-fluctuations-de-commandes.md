---
concept_id: absorber-les-fluctuations-de-commandes
deepening_sha256: 430229ec685b607e0b63150c9633217f00d0e2504b85f08c15e0f17a17590bbc
validated_sha256: 058f93386a64ce32e51bc01a39535ff1f70d9803772fe4f6493bb38958b34ffc
protocol_version: 3
audited_at: 2026-09-30T05:10:00Z
initial_verdict: REVISE
result: rewrite_rejected_factcheck
factcheck_verdict: FACTCHECK_FAIL
remappings: 0
review_verdict: NOT_RUN
---

# absorber-les-fluctuations-de-commandes — réécriture refusée au plafond de boucles

Le texte affiché au lecteur est **celui d'avant le passage**, restauré par son blob de référence et
vérifié identique au hash relevé avant toute écriture.

## Le compte des trois passages du gate

| tour | claims | verdict | refusés |
|---|---:|---|---|
| 1 | 61 | `FACTCHECK_FAIL` 57/61 | C002, C004, C059, C060 |
| 2 | 57 | `FACTCHECK_FAIL` 53/57 | C001, C017, C030, C045 |
| 3 | 61 | `FACTCHECK_FAIL` 60/61 | **C049** |

Les deux boucles de correction que le protocole autorise ont été dépensées, et le troisième gate a
refusé un seul claim sur soixante et un. La carte est donc restaurée, non parce que son texte corrigé
était mauvais, mais parce qu'il restait une phrase non certifiable et plus aucun tour pour la retirer.

## Ce que la réécriture avait réellement réparé, et qui est perdu

Le défaut principal trouvé par l'audit était celui que la routine interdit absolument : le texte
énumérait les composantes de coût des trois voies d'ajustement sous « Le mémorandum examine », alors
que la seule matière documentée dit que « les p. 5-7 détaillent les coûts ». **C'était de la
connaissance générale de modèle servie comme contenu d'une source, sur une carte qui n'a aucun dossier
de lecture.** La correction l'avait retirée.

Sept autres excédents avaient été retirés : trois affirmations de fréquence ou de comptabilité écrites
au régime par défaut, une attribution aux auteurs tirée de deux titres de table des matières, une
localisation de démonstration dans un appendice dont le contenu n'est connu que par son titre, une
périodicité saisonnière, une description de fonction de coût, et une certitude d'erreur de prévision.

**Tout cela est reperdu.** Le texte restauré porte de nouveau ses défauts d'origine, y compris
l'énumération des coûts. C'est le choix fail-closed du dispositif — mieux vaut le texte publié depuis
toujours, dont on sait maintenant ce qu'il vaut, qu'un texte que le gate n'a pas pu certifier — mais il
faut le dire sans l'adoucir : **le pire défaut documentaire du lot survit, désormais documenté.**

## La cause immédiate du refus, et c'est un enseignement de méthode

Le claim refusé au tour 3, C049, est « il se reprend à chaque période ». Cette phrase **n'existait pas
avant le tour 2** : elle y a été écrite comme geste de précaution, hors des quatre claims refusés, sur
la phrase d'un claim que le gate avait pourtant soutenu (C046). L'intention était bonne — retirer une
échelle annuelle que le gate venait de refuser ailleurs, pour éviter qu'un découpage suivant la refuse.

Le geste a échangé une précision non portée contre une autre. « à chaque période » affirme une
périodicité dont le seul appui disponible est le libellé de table des matières « The Time Sequence of
Decisions », qui n'atteste que lui-même et sa place. Le mapping du tour 3 a isolé la phrase et signalé
son exposition sans rendre de verdict ; le vérificateur l'a refusée ; le gate a fait tomber la carte.

**La leçon est contre-intuitive et elle vaut d'être tenue** : à l'intérieur d'une boucle de correction,
la minimalité n'est pas une politesse procédurale, c'est une protection. Toucher une phrase soutenue
pour la « mettre à l'abri » ajoute une surface que le tour suivant peut refuser, et le plafond de
boucles ne pardonne pas. Le réécrivain avait signalé cet écart honnêtement, et je l'avais approuvé : la
faute d'appréciation est partagée, et c'est moi qui tenais le compte des tours restants.

## Ce que ce refus dit du fond documentaire de cette carte

Cette carte **n'a aucun dossier de preuve** : pas de répertoire `corpus/evidence/`, pas de champ
`dossier`, et sa source primaire est déclarée `consulted: "full-text"` sans qu'aucune lecture ne soit
attestée nulle part dans le dépôt. Vérifié sur pièce, deux fois, par deux agents indépendants.

Les trois passages du gate ont néanmoins rendu **zéro `SOURCE_NOT_CONSULTED`**, et c'est un résultat à
garder : les 58 appuis du pack viennent des relevés de l'enregistrement validé, qui portent les
verbatims des pages 5, 8 et 40, de la page de titre et de la table des matières. Une carte sans dossier
peut donc être certifiée. L'absence de dossier ne prive pas ses claims d'appui : **elle borne ce que la
carte peut affirmer**, et c'est exactement contre cette borne que les trois tours ont buté.

## Ce qu'il faut pour que cette carte passe

Deux voies, et la seconde est la bonne.

1. **Un troisième tour de correction**, qui retirerait « à chaque période ». Le protocole ne l'autorise
   pas, et il a raison de ne pas l'autoriser sans décision humaine : la carte a montré qu'elle produit
   un excédent neuf à chaque tour.
2. **Acquérir la source.** Le mémorandum est référencé sur archive.org sous `DTIC_AD0089515` dans
   l'enregistrement validé. Tant qu'il n'est pas lu et versé en dossier, ce texte ne peut rien dire du
   contenu des pages 5-7 ni de la forme du modèle, et chaque réécriture se heurtera au même plafond
   documentaire. **C'est une carte à instruire, pas à réécrire.**

Elle reste `stale` par son `result`, donc elle sera resélectionnée. Qu'elle le soit pour acquisition.
