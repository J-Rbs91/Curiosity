concept : predominance-du-conflit-sur-la-negociation
mode    : REVISE (audit `REVISE`, protocol_version 3)
date    : 2026-09-17

## Cadre

Charpente conservée (5 sections, même ordre, mêmes titres sauf S5). Corrections localisées
selon AUDIT_PROTOCOL.md §6 et la trajectoire cible de l'audit.

Arbitrage de l'orchestrateur respecté : `corpus/evidence/taille-des-entreprises-et-issue-des-greves/lecture.json`
n'a pas été ouvert, aucune preuve rattachée à un autre concept n'a servi. Matière utilisée :
`corpus/validated/predominance-du-conflit-sur-la-negociation.json` (champ `notes`, bloc `review`,
`attribution_note`, `quotation`) et l'entrée projetée de la carte. Les deux contradictions internes
signalées par l'audit sont traitées par bornage, pas par arbitrage externe.

## Ce qui a changé, point par point

1. **lead[1], faute documentaire de l'audit (point 1).** Supprimés : le quantificateur universel
   (« chaque conflit du travail donnait lieu en France à un imprimé ») et la rubrique inventée
   (« l'objet du désaccord »). Remplacés par ce que `attribution_note` établit : « les relevés de
   conflits du travail rédigés par les inspecteurs du travail pour l'année 1976 » et le fait que
   l'auteur avait déjà traité ce matériau dans ses propres travaux antérieurs. Le mot « fiche(s) »
   est évité en texte lecteur (terme de dispositif au sens de PROTOCOLE.md §1), y compris en
   renonçant à la portion de verbatim de la note 1 p. 36 qui le contient.
2. **S5.P1 ancien, attribution tranchée (point 2).** Le doublet prédominance / prééminence
   disparaît entièrement du texte lecteur, comme l'autorisait la trajectoire cible. Seule la formule
   du corps de l'article, p. 41, est attribuée à l'auteur. Le bornage est consigné dans `limits[3]`.
3. **S5.P2 ancien, mention par Segrestin (point 3).** La citation « renverse l'audacieuse
   formule… » et l'énoncé « la thèse est donc imputée à Dassa par un tiers » sont retirés : le bloc
   `review` et les `notes` se contredisent sur ce que contient l'article de Segrestin, et le
   rédacteur n'a pas à trancher. Ce qui est conservé de cette source est le seul point sur lequel
   les deux s'accordent (la formule inversée est de Reynaud ; la conception où conflits et
   négociations forment « un seul et même sujet »). Contradiction consignée dans `limits[2]`.
4. **S2.P1, instrument de mesure (point 4).** « Dassa en retient une très simple » devient « celle
   que Dassa met au travail ici est simple » : la durée n'est plus présentée comme la mesure unique
   du rapport de forces. Aucune mention de la participation n'a été ajoutée, faute de support dans
   les deux fichiers autorisés en rédaction.
5. **Redondance du noyau (4 énoncés → 2).** Supprimés : la seconde moitié de l'ancien S1.P2
   (conséquence « la grève s'efface », qui rejouait lead[0]) ; la première moitié de l'ancien S2.P3
   (« Là où la discussion est la mieux outillée… », qui rejouait S2.P2) ; la phrase finale de
   l'ancien S4.P3 (troisième service des cinq jours). Les cinq jours n'apparaissent plus qu'une fois.
6. **Restriction de portée remontée.** L'incise « et surtout pour les grandes entreprises » (p. 41)
   quitte l'avant-dernière section et rejoint S2.P3, juste après le résultat qu'elle conditionne.
7. **Question laissée ouverte, tenue.** S2.P3 pose explicitement que le sort d'une grève en petite
   entreprise reste indécidé par ces chiffres, et le texte ne prétend plus y répondre ailleurs :
   conformément aux limites documentaires de l'audit, le point reste ouvert au lecteur.
8. **S1.P3, « une fois instauré par le conflit » rendu intelligible.** L'énoncé est décomposé en
   deux temps (une origine arrachée, puis une dépendance que porte le mot tributaire), sans ajout
   de fait : c'est l'explicitation de la phrase citée, pas une source nouvelle.
9. **S3.P2, contresens construit avant d'être démenti.** La prémisse (dans la population des
   entreprises ayant connu une grève, les petites apparaissent les plus combatives) est posée avant
   la mise en garde de l'auteur, et le 3 % / 30 % sert de contrepoids explicite.
10. **S3.P3, conséquence tirée des exclusions.** L'énumération débouche désormais sur son effet :
    écarter les conflits d'emploi après liquidation et les grèves généralisées rend les durées
    comparables entre tailles.
11. **S4.P2, glose ajoutée.** « institutionnalisation du conflit » est expliqué sur place.
12. **S5 refaite, « Les grèves qui n'ont pas eu lieu ».** La philologie et le partage de mérite
    en position finale sont remplacés par : ce que le comptage n'enregistre pas (note 1 et note 2
    de la p. 36, remontées de `limits` vers le lecteur, comme l'audit le recommandait), puis ce qui
    revient en propre à l'auteur, puis la citation d'affichage p. 43, jamais servie jusqu'ici, et
    une clôture sur les bornes de validité plutôt que sur un résumé.

## Delta de chaque paragraphe de la version nouvelle

- lead[0] : oppose deux lieux de travail par leur équipement institutionnel et fait formuler au
  lecteur l'attente de sens commun qui sera testée.
- lead[1] : qui a testé, sur quelle matière datée, et quelle question exacte a été posée.
- S1.P1 : l'attente a un nom, une formule, un texte et une généalogie (Clausewitz retourné).
- S1.P2 : distingue succession et identité de processus ; sans cette distinction, la thèse adverse
  est trop faible pour être réfutable.
- S1.P3 : énonce la thèse de Dassa et décompose ce que veut dire « tributaire ».
- S2.P1 : apprend à raisonner sur le test : une mesure, deux prédictions opposées, un départage.
- S2.P2 : les trois chiffres, le sens de l'écart, et la quasi-indépendance au pôle petit.
- S2.P3 : la conclusion de l'auteur, la borne de portée qu'il y met lui-même, et la question qui
  reste ouverte à l'autre pôle.
- S3.P1 : condition d'interprétation non devinable (population = entreprises ayant fait grève).
- S3.P2 : écart de fréquence 3 % / 30 % et interdiction d'une généralisation, prémisse construite.
- S3.P3 : ce que les exclusions de champ font à la comparabilité des durées.
- S4.P1 : seconde anomalie, antérieure et portant sur le nombre des grèves (Durand, p. 33) ;
  emboîtement des deux anomalies.
- S4.P2 : quel verbe exactement est réfuté (« se substituer »), et glose de l'institutionnalisation.
- S4.P3 : mécanisme, marqué comme lecture : pas de capacité propre créée, un seuil de pression
  relevé.
- S5.P1 : ce que le comptage ne voit pas, dans les termes où l'auteur le reconnaît.
- S5.P2 : ce qui revient en propre à l'auteur, la phrase qui resserre le résultat, et les bornes
  hors desquelles elle n'est pas testée.

Aucune séquence de trois paragraphes consécutifs de même delta. Aucune section ne reprend pour
tâche principale une section antérieure.

## Frontière interne

`limits` reste interne, jamais remontée telle quelle. Quatre paragraphes, chacun nomme la source,
son état d'accès et l'affirmation interdite : p. 40 lue par OCR et tableaux 1 à 8 non repris ligne
à ligne (aucun chiffre nouveau) ; Adam et Reynaud 1978, p. 127, à ouvrir ; contradiction interne sur
l'article de Segrestin (aucune attribution par un tiers dans le texte lecteur, réception non
établie) ; attribution limitée à la formule du corps p. 41 et sens indéterminé de la réserve de la
note 1 p. 36.

Les deux réserves de la p. 36 figurent désormais aussi en S5.P1, non comme registre de lacunes mais
comme nuance de lecture attribuée à l'auteur ; `limits[3]` continue d'interdire d'en tirer un sens
de variation.

## Citations

Toutes les citations de cinq mots ou plus du texte final ont été retrouvées verbatim dans
l'enregistrement validé (`notes`, bloc `review`, champ `quotation`). Le contrôle mécanique n'émet
aucun avertissement de citation absente. Aucune citation nouvelle n'a été introduite hors de ces
sources ; deux citations de l'ancienne version (Segrestin sur Dassa, « prééminence » du chapeau)
ont été retirées.

## Volumes

- avant : texte lecteur 1 297 mots, 16 paragraphes, `limits` 199 mots, total 1 496.
- après : texte lecteur 1 474 mots, 16 paragraphes, `limits` 259 mots, total 1 733.
- suppressions de redondance : environ 170 mots (S1.P2, S2.P3, S4.P3, S5 ancienne).
- ajouts : explicitation de « tributaire », prédiction explicite du test, prémisse de S3.P2,
  conséquence des exclusions, glose de l'institutionnalisation, réserves de la p. 36 et citation
  d'affichage p. 43.

## Contrôle

`npm run corpus:deepen -- --check --only=predominance-du-conflit-sur-la-negociation`
→ « 1 approfondissement(s) contrôlé(s), 1733 mots. Rien projeté. », aucun avertissement.

Le fichier ayant changé, tout fact-check antérieur est invalidé : l'orchestrateur doit reprendre à
`PREPARE`. Aucune auto-validation, aucun `ACCEPT`, aucun `FACTCHECK_PASS` n'est rendu ici.

## Points à instruire par le verifier

- lead[1], « relevés de conflits du travail rédigés par les inspecteurs du travail pour l'année
  1976 » et « un matériau qu'il avait déjà traité dans ses propres travaux antérieurs » :
  `attribution_note` de l'enregistrement validé.
- S3.P3, dernière phrase (les exclusions rendent les durées de même nature) : conséquence dérivée,
  non attribuée à l'auteur.
- S4.P3 : lecture explicitement marquée comme telle, appuyée sur la note 2 de l'enregistrement.
- S5.P1 : les deux fragments cités (« varie peut-être suivant la dimension des entreprises »,
  « mais cela reste à établir ») viennent de la note 1 et de la note 2 de la p. 36 telles que
  l'enregistrement les porte.
