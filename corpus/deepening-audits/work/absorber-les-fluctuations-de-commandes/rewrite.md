concept : absorber-les-fluctuations-de-commandes
mode    : REVISE (architecture conservée, quatre gestes de l'audit appliqués)
date    : 2026-09-30
protocole d'audit : version 3

## État documentaire vérifié avant d'écrire

Vérifié sur pièce, et non repris de l'amont :

- `corpus/evidence/absorber-les-fluctuations-de-commandes/` n'existe pas (aucun des 126
  répertoires de `corpus/evidence/` ne correspond) ;
- `corpus/validated/absorber-les-fluctuations-de-commandes.json` ne porte aucun champ
  `dossier` (clés du fichier énumérées : `$schema`, `id`, `slug`, `status`, `title`, `themes`,
  `theme_labels`, `authors`, `attribution_note`, `hook`, `summary`, `quotation`, `sources`,
  `review`, `notes`).

Matière opposable, donc : `review.notes` (11 entrées) et `notes` (12 entrées), plus la
`quotation` et les libellés de sources. Aucune lecture primaire du mémorandum n'est déposée
nulle part dans le dépôt. Le mémorandum n'a pas été ouvert pour cette réécriture, et aucune
recherche n'a été faite.

## Gestes appliqués, par catégorie

### 1. Connaissance générale servie comme contenu de source (défaut n°1 de l'audit)

- **S1.P2 ancien, supprimé dans sa partie fautive.** L'énumération « le stock immobilise de
  l'argent et de la place et prend le risque de ne pas trouver preneur, les heures
  supplémentaires se paient plus cher que les heures ordinaires, faire tourner l'effectif coûte
  en recrutement, en apprentissage du poste et en désorganisation » n'a aucun appui : la
  documentation dit seulement que les p. 5-7 « détaillent les coûts propres à chacune des trois
  alternatives pures ». Remplacée par la seule chose disponible, bornée à elle : le rapport
  détaille de la page 5 à la page 7 les coûts propres à chacune de ces alternatives pures,
  sous un titre documenté, et ce qui est exploité est le **statut** de ces coûts (le tarif d'une
  réponse, non un gaspillage), non leur nature.
- Contrôle de portée en position de titre et d'annonce (chantier M, point 4) : le titre de S1 est
  passé de « Trois endroits où loger un écart » à « Ce qui fluctue, et où le loger » ; aucun titre
  ni aucune phrase d'annonce ne promet plus le détail des coûts.
- Reste retiré de S1.P1 ancien : « en les raccourcissant quand elles retombent » (la sous-activité
  n'est pas documentée ; seul `overtime` l'est).

### 2. Affirmations au régime par défaut sur la pratique des entreprises (défaut n°5)

- **lead[1] première phrase supprimée** : « Ces deux nombres se décident souvent dans deux
  bureaux séparés, l'un qui surveille les entrepôts, l'autre les effectifs ». Affirmation de
  fréquence, sans appui. Remplacée par deux appuis réels : une remarque analytique en fin de
  lead[0] (« Rien n'oblige à les choisir ensemble, et c'est pourtant la même variation qu'ils
  ont tous deux à encaisser »), et le titre du chapitre II, qui pose les deux nombres en un seul
  problème de décision (`review.notes` LOCALISATION).
- **S1.P3 ancien supprimé** : « sans que cela apparaisse dans ses propres comptes » était une
  affirmation de comptabilité analytique. Le déplacement de la charge est conservé, mais comme
  conséquence immédiate de la tripartition et dans un cas explicitement imaginé (« Imaginons un
  atelier qui refuse par principe de gonfler ses entrepôts »).
- **S4.P2 ancien supprimé** : « L'ordre de ces titres dessine la forme du problème tel que les
  auteurs le posent » attribuait aux auteurs une conception sur la foi de deux titres de table
  des matières. La conséquence est conservée mais marquée comme lecture : « On peut lire dans cet
  enchaînement une conséquence que la page 8 ne porte pas seule. »
- S5.P2 : « ni les économies qu'il aurait permises » retiré (présupposait un chiffrage d'économies
  dont rien ne dit un mot).

### 3. Paragraphes sans delta, redondances

- **S3.P3 ancien supprimé** (« C'est ce qui sépare cette règle d'une recette… ») : pur
  récapitulatif de S1.P1 + S2.P1 + S3.P1-P2. Sa seule idée vivante tient désormais en une
  proposition à l'intérieur du paragraphe sur les deux dépendances.
- **Dernière phrase de S2.P2 ancien supprimée** (« ailleurs, avec d'autres prix, une voie unique
  pourrait faire l'affaire ») : elle consommait par avance le delta de S3.P1. « in general » ouvre
  maintenant sans conclure, et le paragraphe gagne à la place une distinction neuve (une règle
  d'action se suit ou non, un constat serait démenti par un contre-exemple).
- **S4 refondue** : deux paragraphes bâtis sur deux titres deviennent deux paragraphes à deltas
  distincts — P1, la **place** de la recommandation dans le rapport (elle ferme la section des
  coûts p. 8, la section suivante commence au bas de la même page, le chapitre se referme p. 9,
  le chapitre III ouvre p. 10) ; P2, la **condition d'application** qui s'en lit. « Période après
  période » sort du lead et n'existe plus qu'ici, une seule fois.
- **S6 ancienne supprimée en position de clôture.** Le partage rédaction/recherche et la commande
  O.N.R. remontent dans lead[1], adossés à la présentation des trois auteurs. La correction
  HMMS/Muth est **supprimée** : le sigle n'apparaissant nulle part ailleurs, elle écartait une
  confusion que le texte était seul à créer, et rien ne peut être dit du livre de 1960.

### 4. Matière disponible mise au travail (sans un mot ajouté de mémoire)

- **La question fondatrice de la page 5**, verbatim (`review.notes` PROSE), ouvre S1, avec la
  distinction qu'elle porte et que l'ancien texte ignorait : ce qui fluctue n'est pas exactement
  les commandes, mais les **expéditions commandées**. Le lien entre la question du rapport et
  l'accroche du concept est enfin fait.
- **Le titre du mémorandum**, verbatim : la réponse prend la forme d'une **règle de décision**,
  et cette règle est annoncée **linéaire**. Ce que « linéaire » fait dans le modèle n'est jamais
  expliqué (interdit, appendice absent) ; il est posé en question ouverte à la clôture.
- **L'architecture paginée du chapitre II** (LOCALISATION) porte S4.P1.
- **Le titre de l'appendice**, verbatim, sort de `limits` et devient l'objet de la clôture
  (S6) : ce sont ces pages qui démontrent ce que la page 8 se contente de recommander, et c'est
  là qu'il faudra aller voir pourquoi une combinaison pondérée vaut mieux qu'une voie pure.
  Dit au futur, côté lecteur ; jamais raconté comme une lecture qui n'a pas eu lieu.
- **Un exemple explicitement hypothétique** entre en S3.P2 (deux ateliers voisins aux prix
  inversés) : l'audit notait que l'arbitrage lui-même n'était jamais rendu sensible. Aucun coût
  du mémorandum n'y est nommé ; ce sont deux ateliers imaginés.

### 5. Symétrie de l'absence (contrainte 4)

Rien n'est conclu du silence des notes sur les pages 8 et 9 : le texte dit que ces sections
existent, où elles se placent, et dans quel ordre ; il ne dit ni ce qu'elles établissent ni
qu'elles n'établiraient rien. `limits[2]` inscrit explicitement la double interdiction. Le déficit
de profondeur sur « pourquoi une combinaison pondérée » n'est pas comblé : il est nommé comme la
raison d'ouvrir l'appendice.

### 6. `limits`, frontière interne

Réécrit en registre interne, quatre paragraphes, 221 mots. Il nomme désormais : l'absence de
dossier et la déclaration `full-text` que rien ne corrobore ; l'interdiction explicite d'énumérer
des composantes de coût, avec la liste des composantes à ne pas écrire ; l'état des pages 8-9 et la
symétrie de l'absence ; l'appendice manquant et l'interdiction d'expliquer « linéaire » ;
`metadata-only` de *Management Science* ; le statut non-source du livre de 1960. Aucun de ses
contenus n'est remonté en bloc visible, et le titre de l'appendice n'y est plus **confiné** : il
est passé au texte lecteur, où il fait un travail pédagogique.

## Delta de chaque paragraphe de la version nouvelle

- lead[0] — le problème : les commandes ne tombent pas au même rythme, personne ne peut demander
  aux clients d'étaler, tout se réduit à deux nombres qui encaissent la même variation.
- lead[1] — qui, quand, où, et la forme annoncée de la réponse : une règle de décision dite
  linéaire ; le chapitre II prend les deux nombres en un seul problème ; rédaction de Holt sur une
  recherche des trois, projet financé par l'Office of Naval Research.
- S1.P1 — la question du rapport dans ses termes, et ce qui fluctue exactement (expéditions
  commandées) ; le verbe n'est pas « supprimer » : l'écart se loge.
- S1.P2 — les trois voies pures, nommées et distinguables.
- S1.P3 — chacune a ses coûts propres, trois pages y sont consacrées, et le statut de ces coûts
  est un tarif ; conséquence : refuser une voie charge les autres.
- S2.P1 — les mots exacts de la page 8 et la recommandation elle-même.
- S2.P2 — son statut : règle d'action et non constat ; « in general » l'empêche d'être une loi ;
  ce que la distinction change pour juger la phrase.
- S2.P3 — elle n'est pas démontrée là : ce qui la fonde est une fonction de coût minimisée ensuite.
- S3.P1 — la clause finale : pas de bon dosage valable pour l'industrie, il se calcule sur des prix
  locaux.
- S3.P2 — ce que cela donne concrètement, sur deux ateliers imaginés aux prix inversés : la règle
  désigne les prix à regarder, pas un dosage.
- S3.P3 — seconde dépendance, fréquence et sévérité des fluctuations ; le dosage ne tient pas dans
  le temps, même dans une seule usine ; règle et non recette.
- S4.P1 — où la recommandation tombe, et ce que le rapport fait immédiatement après.
- S4.P2 — la conséquence : prévoir est une condition du calcul, et la décision se reprend en
  séquence.
- S5.P1 — changement d'échelle : un seul fabricant de peinture non nommé, 1949-1954 ; et la
  distinction entre propriété de la règle (S3) et étendue de la preuve (ici).
- S5.P2 — la prudence des auteurs en leurs mots (p. 40) ; ce qui voyage et ce qui ne voyage pas.
- S6.P1 — ce qui démontre est ailleurs, et porte un titre : l'appendice du folio 43 ; raison
  précise d'y aller.
- S6.P2 — une seconde porte (l'article d'octobre 1955, existence et signature seules) et la
  question que le titre laisse ouverte.

Aucun paragraphe sans delta ; aucune section dont le rôle principal soit de répéter une section
antérieure ; aucune séquence de deux paragraphes au même delta.

## Volume

| | avant | après |
|---|---|---|
| texte lecteur (lead + sections) | 1 252 | 1 479 |
| `limits` | 166 | 221 |
| total compté par le contrôle | 1 418 | 1 700 |

Les 227 mots gagnés au texte lecteur viennent de matière sourcée et inutilisée (question de la
page 5 et sa précision, titre du mémorandum, architecture paginée du chapitre II, titre de
l'appendice, distinction règle/constat, cas imaginé) ; environ 130 mots sans delta ont été
supprimés dans le même mouvement.

## Contrôle

`npm run corpus:deepen -- --check --only=absorber-les-fluctuations-de-commandes` :
« 1 approfondissement(s) contrôlé(s), 1700 mots. Rien projeté. » Aucune erreur, **aucune citation
signalée** : les neuf passages cités de cinq mots ou plus se retrouvent tous mot pour mot dans
l'enregistrement validé (page de titre et sa note, page 8, clause finale, titres de sections et
de l'appendice, page 40, titre du mémorandum, question de la page 5).

## Ce que cette réécriture ne fait pas

Elle ne vaut pas `FACTCHECK_PASS` et ne se valide pas elle-même. Toute modification du texte
invalide le SHA : la chaîne doit reprendre à `PREPARE`.

## Incident d'outillage rencontré

Un script de travail déposé sous `<scratchpad>/build.py` a été écrasé en cours de session par un
processus travaillant sur un autre concept (sa sortie nommait des sections étrangères à celui-ci et
annonçait une écriture). Constaté, non lu au-delà de ce qui s'est affiché, et signalé sans être
touché. `corpus/deepenings/absorber-les-fluctuations-de-commandes.json` a été vérifié intact, puis
les corrections suivantes ont été appliquées par des scripts à noms uniques opérant sur le seul
fichier de ce concept. Deux autres fichiers d'approfondissement apparaissent modifiés dans
`git status` ; ils n'ont pas été ouverts.
