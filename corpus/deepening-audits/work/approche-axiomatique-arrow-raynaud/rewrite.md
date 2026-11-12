# Réécriture : approche-axiomatique-arrow-raynaud

mode : REVISE (audit `audit.md`, version auditée 31595b5a…)
check mécanique : `npm run corpus:deepen -- --check --only=approche-axiomatique-arrow-raynaud` PASS

## Volume du texte lecteur (lead + sections)

- avant : 1 366 mots (lead 178), 6 sections, 13 paragraphes
- après : 1 432 mots (+4,8 %), 6 sections, 15 paragraphes
- dans la fourchette cible de l'audit (1 350-1 430, au plus +5 %), à deux mots près du plafond.

Dossier lu : `corpus/evidence/approche-axiomatique-arrow-raynaud/lecture.json` (seul fichier du
répertoire, et cible du champ `dossier`). Sources 1986 et 2011 `metadata-only` : aucune phrase sur
leur contenu.

## Retraits (fautes ou précisions non financées)

- lead[1] : « répond que cette question n'a pas de réponse générale » (première des trois
  occurrences du noyau « pas de méthode universelle ») ; « l'article en énonce sept, numérotés et
  mis en italique ».
- S1.P1 : « Rien de tout cela ne commence par les axiomes » ; « deux fournisseurs A et B » devient
  « deux options A et B » (sépare la vignette du mécanisme de l'article).
- S2.P1 : « plus disputables », « que l'article discute longuement », « Sept en tout… ».
- ex-S2.P2 : redite du renversement du lead (« la discussion ne porte plus sur le résultat… ») ;
  la phrase « une fois posées, on peut établir… » retirée aussi, S4 montrant le cas concret.
- ex-S3.P1 : glose « préférences individuelles combinées en décision commune » ; « le gestionnaire
  qui doit trancher entre quatre fournisseurs » (vignette prêtée à l'article).
- ex-S3.P2 : phrase recousue « Arrow et Raynaud, dans leur approche, proposent » + suite inventée ;
  « tenue pour légitime dans une élection » ; « Ce que cette condition demande… discussion à soi
  seule ».
- ex-S4 : « l'un de ses propres axiomes » (masquage), « paraissent chacune raisonnable[s] »,
  « laquelle abandonner », « C'est de là que vient la thèse », « n'est pas un accident de
  parcours ».
- ex-S5.P1 : « Il fait exactement l'inverse » (contredit par review.notes[8]).
- ex-S5.P2 : « La phrase mérite d'être prise au sérieux… le refuse » (interprétation non financée).
- ex-S6 : « les théorèmes sont attribués à Raynaud comme à un tiers » (redondant), « l'a fait
  connaître à des lecteurs de gestion », clôture sur le millésime.

## Ajouts et supports qui les financent

1. lead[1] : changement de niveau, nom de l'approche, citation « Chacune de ces méthodes est en
   fait la recette personnelle de décision de son auteur. » — SUP-813433b6d138c5f0,
   SUP-ff16f64e0bd3cd6a, SUP-5d17c57793905db0, SUP-81b5db4b0315787f.
2. S1.P1 : exemple réel (recrutement d'un professeur, sept candidats, cinq critères pondérés à 100)
   — SUP-813433b6d138c5f0.
3. S1.P2 : « aucun taux de change implicite » désormais marqué comme conséquence (« Cela
   implique ») — pas de support nouveau, changement de statut.
4. S2.P1 : définition citée — SUP-bebd87fe6e41d81b, SUP-88336cb264935c09.
5. S2.P2 (nouveau) : axiome 1, règle de Condorcet lue sur la ligne du tableau —
   SUP-813433b6d138c5f0 ; la reformulation « au moins la moitié du poids des critères » découle de
   S1.P1 (coefficient = somme des poids des critères favorables, SUP-813433b6d138c5f0,
   SUP-b8d716b25014aa29).
6. S2.P3 (nouveau, fond l'ex-S2.P2) : absence possible de vainqueur, marquée « cela découle de sa
   définition » (conséquence logique) ; axiome 4, critère de conciliation de poids minimal, conseil
   municipal nommé seulement, « une idée de la gravité du conflit entre les critères », quatre
   théorèmes p. 16-17 qui caractérisent le choix prudent — SUP-813433b6d138c5f0,
   SUP-8e3e561997b6e587, SUP-ebeed7ff25e870dd, SUP-c8b5925ca9762ce1.
7. S3.P1 : citations p. 11 (Arrow « dans les années 50 », Raynaud « dans la ligne de cette
   démarche ») — SUP-813433b6d138c5f0 ; héritage limité à la démarche et aux axiomes —
   SUP-5c006f2bddfd3e31, SUP-e315780bc74b49d9.
8. S3.P2 : calibration trop fort / trop faible, verbatim p. 17, axiome 5 dichotomique supérieure —
   SUP-813433b6d138c5f0, SUP-10c3b4bbff5cec59 ; dernière phrase marquée interprétation (« On peut
   y lire »).
9. S4.P1 : axiome 6 monotonie nommé, version restrictive 6' — SUP-813433b6d138c5f0,
   SUP-b8d716b25014aa29 ; proposition verbatim p. 17 d'ajouter des axiomes —
   SUP-81b5db4b0315787f, SUP-c8b5925ca9762ce1 (posée avec sa page, sans lien causal avec
   l'incompatibilité p. 18).
10. S4.P2 : thèse p. 19 (seule occurrence pleine) + « Pour Arrow et Raynaud, l'obstination… » avec
    son incise — SUP-ff16f64e0bd3cd6a, SUP-813433b6d138c5f0, SUP-d7e1db658a330073,
    SUP-c8b5925ca9762ce1.
11. S5.P1 : titre cité et trois éditeurs de logiciels — SUP-59b3f7b10f179bbf, SUP-4245d0feccfd5c21.
12. S6.P2 : ouvrage de 1986, métadonnée seule, cité en note par l'article — SUP-23e332af43bebb13,
    SUP-36ee1b71e28feb25, SUP-81b5db4b0315787f ; formulation « il faudra l'ouvrir ».

## Deltas par paragraphe (après)

- lead[0] problème concret (inchangé) ; lead[1] changement de niveau et renversement, nom.
- S1.P1 construction du tableau sur l'exemple réel ; S1.P2 ce qu'il refuse et son prix.
- S2.P1 définition et axiome 0 ; S2.P2 Condorcet lisant le tableau ; S2.P3 vainqueur prudent et
  théorèmes.
- S3.P1 origine et relais Raynaud ; S3.P2 calibration de l'indépendance.
- S4.P1 incompatibilité nommée et réponse (6', ajout d'axiomes) ; S4.P2 thèse générale.
- S5.P1 batterie = exemple ; S5.P2 fondements non sous-traitables ; S5.P3 aveu de l'expert.
- S6.P1 attribution ; S6.P2 livre de 1986 comme ouverture.

## Écarts à l'audit, à signaler

- La phrase « Arrow et Raynaud… ajouter de nouveaux axiomes » (p. 17) est posée sans lien causal
  avec l'incompatibilité (p. 18) : le contexte des « difficultés » n'est pas relevé dans le dossier.
  Nouvelle frontière ajoutée à `limits`.
- L'ex-S6 garde deux paragraphes (protocole : 2 à 4 par section) au lieu d'un seul.
- La clôture finit sur le livre de 1986, non sur la tension décideur / expert.

## `limits`

Réécrit : limits[0] reformulé (notices seules) ; limits[2] (choix prudent « non instruit ») remplacé
par la nouvelle frontière (axiomes 2, 3, 5, 6, 6' et théorèmes seulement nommés ; conseil municipal
non reconstitué ; « difficultés » p. 17 non rattachées à p. 18). Aucun contenu de `limits` remonté
dans le texte lecteur.

Aucune auto-validation : le texte doit repasser par PREPARE (SHA modifié).
