# Lot `human-factors` : deux concepts instruits qui n'ont pas de carte

Treize cartes ont été écrites dans ce lot. Quinze concepts avaient été lus. Ce fichier dit
ce qu'il est advenu des deux autres, parce qu'une lacune se déclare et ne se comble pas :
sans cette note, l'absence de carte se lirait comme une absence de travail.

Les deux dossiers de lecture primaire existent, complets, et rien n'en a été détruit :
`corpus/evidence/ironies-de-l-automatisation/lecture.json` et
`corpus/evidence/theorie-de-l-accident/lecture.json`. Ce qui suit en est le résumé, pas le
remplacement.

---

## `ironies-de-l-automatisation` : le texte n'a pas été ouvert

**Lisanne Bainbridge, « Ironies of automation », Automatica, 19(6), 1983, p. 775-779, DOI
10.1016/0005-1098(83)90046-8.**

Aucune source primaire en texte intégral. Le lecteur a essayé, et consigné, plus de vingt
voies :

- **Éditeur** : Unpaywall répond `is_oa false`, `oa_status closed`, `oa_locations` vide sur
  les trois DOI (l'article de 1983, la communication IFAC de 1982, le chapitre du volume
  d'actes). La seule licence déposée chez Crossref est « Elsevier TDM », qui exige une clé
  d'authentification. ScienceDirect répond HTTP 403.
- **Dépôt institutionnel de l'ancienne affiliation** : UCL Discovery répond HTTP 403 avec un
  défi Cloudflare, non résolu. La recherche y serait de toute façon probablement vaine :
  l'autrice écrit elle-même, sur son site, que son département « refused to include the
  Ironies paper in the department's list of publications ».
- **Page personnelle de l'autrice** : elle existe et a été lue intégralement
  (complexcognition.co.uk). Elle met certains de ses articles en ligne, et elle le signale
  par un lien de couleur. « Ironies of automation » n'en a pas, et elle en donne la raison :
  « Reprinted in several other places, which I haven't kept track of as I don't own the
  copyright. »
- **Archives ouvertes et agrégateurs** : HAL, zéro dépôt. CORE, notices sans fichier.
  OpenAIRE, trois instances toutes en accès fermé. Le seul dépôt institutionnel signalé, à
  la World Maritime University, porte « Document Type : Article Restricted ».
- **Bibliothèques** : les deux volumes de republication sont catalogués mais fermés.
  L'exemplaire Internet Archive de *New Technology and Human Error* (Wiley, 1987) porte
  `access-restricted-item true`, c'est-à-dire un prêt numérique contrôlé, exclu par la règle
  et non emprunté. HathiTrust les donne en « Limited (search-only) », ce qui permet de
  chercher un mot et non de lire une page.

Un fichier PDF portant le titre circule sur un site personnel tiers ; sa provenance n'est
pas établie et **il n'a pas été téléchargé ni ouvert**. Aucune ligne du dossier n'en vient.

Conséquence tenue : **aucune carte**, et rien de ce texte n'est invoqué dans les treize
autres. La carte `retroaction-et-automatisation` cite Bainbridge parce que Norman la cite,
et elle le dit ainsi ; elle n'affirme aucune antériorité, ne date pas le texte de Bainbridge
et ne lui prête aucune thèse. Deux points restent à vérifier par qui ouvrira l'article : le
nombre d'ironies, que le titre met au pluriel sans que personne ait pu lire si l'autrice les
numérote, et la pagination, qui ne vient que de Crossref.

Pistes neuves pour un prochain passage : la bibliothèque Zotero locale, injoignable dans
cette session (« fetch failed » sur les quatre appels), et le Wayback Machine, injoignable
lui aussi (échec TLS sur trois tentatives). Ce sont des échecs d'outil, pas des constats
d'absence.

---

## `theorie-de-l-accident` : une page sur dix

**Jean-Marie Faverge, « Esquisse d'une théorie de l'accident », Sociologie du travail,
6ᵉ année, n° 1, janvier-mars 1964, p. 8-17, DOI 10.3406/sotra.1964.1170.**

La numérisation de Persée n'expose que le folio imprimé 8. Les pages 9 à 17 n'ont été
ouvertes par aucune voie : Unpaywall donne l'article fermé, HAL n'en a aucun dépôt, Crossref
n'en connaît aucune republication en accès ouvert, et la route `docAsPDF` répond HTTP 403.
Ce 403 a été constaté une fois et **n'a pas été contourné** : ni en-tête de navigateur, ni
route dérivée, ni miroir, ni images de page par l'API IIIF. `consulted` reste donc à
`partial`.

**Décision prise ici : aucune carte n'est écrite, pas même en `CANDIDATE`.** Trois raisons,
dont chacune suffit.

1. **Le verrou de publication exige une source primaire en `full-text`.** Une carte écrite
   maintenant ne pourrait pas passer, et elle occuperait un tour de contrôle aveugle sur un
   défaut qu'aucune relecture ne peut corriger.
2. **Le titre de l'article est *Esquisse*, et sa dernière phrase lisible est coupée en bas de
   page** : « en restant cependant prudemment au niveau de l'esquisse tant ». On ne sait même
   pas à quelle condition cette prudence est posée. Rien n'assure que la position de la page
   d'ouverture soit maintenue, nuancée ou retournée dans les neuf pages suivantes. Écrire un
   résumé sur ce fondement serait exactement le défaut que le contrôle tranche en
   `deborde`.
3. **La formule sous laquelle le concept avait été repéré ne se lit pas sur la page ouverte.**
   Le repérage annonçait « causes humaines et techniques ne se séparent pas » ; page 8, cette
   distinction est nommée comme le premier moment d'une histoire, celui qui a été abandonné,
   et ce que le texte déclare impossible à démêler est plus large : « l'organisation, l'homme,
   voire la législation et la situation économique ». Une carte écrite sur la formule de
   repérage aurait rétréci le propos, et une carte écrite sur la phrase réelle aurait porté
   un concept dont personne n'a lu l'exposé.

Ce qui est acquis et attend dans le dossier, pour le prochain passage : la citation de la
page 8 relevée avec sa coupe motivée, trois autres passages de la même page mesurés et
écartés un par un, la liste des voies d'accès essayées, et une correction de prémisse
(Faverge est mort en 1988, non en 1977 : le texte n'est pas près d'entrer dans le domaine
public).

Deux choses que ce dossier interdit d'écrire tant que les dix pages n'ont pas été lues :
que Faverge devance la littérature anglophone sur l'accident organisationnel, et tout
rapprochement avec le modèle du fromage suisse instruit en parallèle dans ce même lot. La
carte `modele-du-fromage-suisse` ne mentionne donc Faverge nulle part.

À distinguer enfin de la carte Faverge déjà validée, `analyse-du-travail`, dans le domaine
voisin `activity-ergonomics` : celle-ci s'appuie sur « Analyse et structure du travail »
(1952, republié en 2011), texte de méthode ; celle-là porterait sur la genèse de l'accident
du travail.
