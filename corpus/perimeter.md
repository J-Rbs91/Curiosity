# Périmètre du corpus

## Quatre domaines ouverts sur onze

L'application couvre **quatre familles et onze domaines**, déclarés dans
[`src/content/taxonomy.ts`](../src/content/taxonomy.ts). Déclarer un domaine et l'instruire
sont deux décisions distinctes, et elles ne se prennent pas ensemble : une fiche n'est pas
admise parce qu'un domaine existe dans la taxonomie.

> **Les périmètres d'instruction ouverts sont `organizational-sociology`,
> `measurement-theory`, `activity-ergonomics` et `human-factors`.** Les sept autres domaines
> sont déclarés dans la taxonomie et restent fermés à l'instruction tant qu'une décision
> explicite ne les ouvre pas — décision qui s'inscrit dans ce fichier, sous la forme d'une
> section de périmètre comme celles qui suivent.

Un domaine s'ouvre à l'instruction dans cet ordre, et pas dans un autre :

1. **le périmètre s'écrit ici** — la discipline en une phrase, le test d'entrée en trois
   conditions, ce qui part en rejet direct ;
2. **`corpus-scout` cartographie le champ** à partir des manuels, handbooks et revues de
   référence, et non d'une liste de noms fournie ;
3. **les thèmes se déclarent** dans `src/content/themes.ts` avec leur `domain`, à partir de
   ce que le scout a fait apparaître — jamais avant lui ;
4. **les concepts s'instruisent**, et se rattachent au domaine par leur thème.

L'étape 3 vient après l'étape 2 pour la même raison que le corpus ne part pas d'une liste
d'auteurs : des thèmes écrits avant toute lecture découpent le champ tel qu'on le croyait,
et ce découpage ne se signale jamais lui-même comme faux.

Une carte se rattache à son domaine **par son thème**, sans rien déclarer. Le champ
`domain` d'une fiche n'existe que pour le cas où aucun de ses thèmes n'est connu de
l'application — sans lui, elle n'apparaîtrait dans aucun domaine.

## Une frontière entre domaines ouverts se tranche par l'objet

Des domaines ouverts se touchent nécessairement. Le déplacement des buts de Merton, déjà
publié en sociologie des organisations, décrit un mécanisme que la théorie de la mesure
retrouve sous d'autres plumes ; la règle de contrôle et la règle autonome de Reynaud, elles
aussi publiées en sociologie des organisations, parlent d'un écart que l'ergonomie de
l'activité nomme autrement. La règle est l'**objet du travail cité**, pas sa ressemblance :

- le concept porte sur la règle, le pouvoir, la décision ou la structure → sociologie des
  organisations ;
- le concept porte sur **l'indicateur lui-même** — ce qu'il saisit, ce qu'il omet, ce que
  sa seule existence provoque → théorie de la mesure ;
- le concept porte sur **l'activité de quelqu'un en situation** — ce qu'il fait réellement
  pour tenir la tâche, ce que cela lui coûte, ce qui l'en empêche → ergonomie de
  l'activité ;
- le concept porte sur **ce que l'opérateur perçoit, comprend, anticipe ou manque** — le
  mécanisme cognitif lui-même, sa défaillance, et le dispositif technique qui le soutient ou
  le met en défaut → human factors.

**Un concept déjà instruit ne se réinstruit pas dans un autre domaine.** Une carte a un
identifiant unique ; deux domaines ne peuvent pas se partager le même concept, et le
validateur refuse le doublon d'`id` comme de `slug`.

---

# Domaine ouvert — `organizational-sociology`

## Le périmètre est la discipline

> **Sociologie et théorie des organisations** — l'ensemble des travaux permettant de
> comprendre le fonctionnement des organisations : comportements organisationnels,
> décision, règles, pouvoir, apprentissage, coopération, dysfonctionnements, action
> collective.

Ce n'est pas une liste d'auteurs, et cela ne doit jamais le devenir. Un corpus construit à
partir d'une liste reproduit la connaissance de celui qui l'a écrite, et laisse dans
l'ombre ce qu'il ignore — sans que rien ne le signale jamais.

## Les huit auteurs sont des points d'entrée

**Max Weber · Robert K. Merton · Herbert A. Simon · James G. March · Michel Crozier ·
Erhard Friedberg · Albert O. Hirschman · Chris Argyris**

Ce sont des **seeds** : des portes d'entrée sûres dans le champ, pas ses frontières. Ils
ont été choisis parce qu'ils sont incontournables, pas parce qu'ils sont exhaustifs.

C'est `corpus-scout` qui établit ce que le champ contient réellement — courants,
auteurs, concepts structurants, filiations — à partir des manuels, handbooks, entrées
d'encyclopédie et revues de référence.

**Rien dans le code ne restreint le corpus à ces huit noms.** Le validateur accepte un
auteur que l'application ne connaît pas encore : il l'affiche par son nom et signale
simplement qu'aucune page ne lui est consacrée. Le corpus découvre les auteurs,
l'application les reçoit — jamais l'inverse.

## Le test d'entrée

La question posée n'est jamais « est-ce de la sociologie ? ». Hirschman est économiste,
Simon théoricien de la décision, Argyris vient de la psychologie, Williamson de l'économie
institutionnelle. La question est :

> **Ce travail éclaire-t-il le fonctionnement des organisations ?**

Trois conditions cumulatives :

1. il porte sur le fonctionnement, la décision, le pouvoir, l'apprentissage, la coopération
   ou les dysfonctionnements d'une **organisation** ;
2. il est **rattachable à un auteur identifié**, et cette attribution est documentable ;
3. il est **enseignable** : un lecteur non spécialiste doit pouvoir en reconnaître le
   mécanisme dans une organisation réelle.

## Hors périmètre — rejet direct

- Management prescriptif, conseil, outillage RH, « bonnes pratiques » d'entreprise.
- Psychologie individuelle sans articulation organisationnelle.
- Sociologie générale sans objet organisationnel.
- Actualité, littérature grise d'entreprise, contenus de formation professionnelle.

## Thèmes

Les neuf thèmes de ce domaine dans `src/content/themes.ts` ont été écrits **avant** toute
instruction documentaire. Ils ne sont donc pas une carte du champ, mais un premier
découpage, et le corpus peut en faire apparaître d'autres — écologie des populations,
néo-institutionnalisme, dépendance aux ressources, sensemaking…

---

# Domaine ouvert — `measurement-theory`

Ouvert le 17 août 2026. C'est le premier domaine instruit après la sociologie des
organisations, et donc le premier à passer par la procédure d'ouverture ci-dessus.

## Le périmètre est la discipline

> **Théorie de la mesure et des indicateurs** — l'étude de ce qu'un indicateur saisit
> réellement, de ce qu'il laisse hors champ, et des comportements que sa seule existence
> engendre chez ceux qui sont mesurés par lui.

Le domaine ne porte pas sur la construction d'indicateurs : il porte sur ce qui arrive
quand on en construit. C'est un champ dispersé — il s'écrit en administration publique, en
comptabilité, en sociologie quantitative, en économie monétaire, en psychométrie et en
santé publique — et aucune de ces littératures ne le nomme de la même façon. Ne pas se
tenir à une seule d'entre elles est ici la difficulté principale.

## Points d'entrée

Aucun auteur n'a été retenu d'avance. Le champ est trop dispersé pour qu'une liste écrite
de mémoire y soit autre chose qu'un biais, et c'est précisément le cas où l'étape de
cartographie décide de tout. Ce que `corpus-scout` doit couvrir, ce sont des **littératures**
et non des noms :

- les effets en retour de la mesure sur le mesuré (administration publique, gestion) ;
- la mesure de la performance dans le secteur public et la santé ;
- la quantification comme opération sociale (sociologie de la quantification, statistique
  publique) ;
- la théorie de la mesure proprement dite : ce qu'une échelle autorise à faire de ses
  nombres ;
- l'évaluation, l'audit et la reddition de comptes ;
- la couche francophone, cherchée en parallèle et non après coup — ce champ a une
  littérature française substantielle, et une recherche anglophone seule la manquerait
  entièrement.

Si le lot final ne contient que des auteurs anglophones d'administration publique, la
cartographie n'a pas fait son travail, et cela se signale.

## Le test d'entrée

La question n'est pas « est-ce de la théorie de la mesure ? » — presque aucun des auteurs
du champ ne se réclamerait de cette étiquette. La question est :

> **Ce travail éclaire-t-il ce qu'un indicateur fait à ce qu'il mesure ?**

Trois conditions cumulatives :

1. il porte sur un **indicateur, une mesure ou une évaluation chiffrée** — sur ce qu'elle
   saisit, sur ce qu'elle laisse hors champ, ou sur ce que son existence provoque chez ceux
   qui y sont soumis ;
2. il est **rattachable à un auteur identifié**, et cette attribution est documentable ;
3. il est **enseignable** : un lecteur non spécialiste doit pouvoir en reconnaître le
   mécanisme là où il est lui-même mesuré.

## Hors périmètre — rejet direct

- Méthodes et outillages de tableaux de bord, et tout dispositif vendu comme solution :
  c'est du management prescriptif, quel que soit le prestige de son auteur.
- Métrologie physique et instrumentation : mesurer une pièce n'est pas mesurer un travail.
- Statistique et économétrie sans objet organisationnel ou institutionnel — le domaine
  porte sur l'usage de la mesure, pas sur l'estimation.
- Ingénierie de la donnée, gouvernance des données, qualité de données au sens technique.

Un concept hors périmètre part en `corpus/rejected/` avec
`rejection_reason: "OUT_OF_SCOPE"`. On ne le laisse pas en attente : un candidat gris non
tranché revient toujours par une autre porte.

## Thèmes

**Le domaine n'a encore aucun thème déclaré**, et c'est voulu : ils s'écriront dans
`src/content/themes.ts` à partir de ce que le scout aura fait apparaître, avec
`domain: "measurement-theory"`. Tant qu'ils ne sont pas déclarés, une fiche de ce domaine
porte ses thèmes dans `themes` avec leur libellé dans `theme_labels`, et déclare
`domain: "measurement-theory"` — sans quoi le validateur refuse la fiche, qui
n'apparaîtrait sinon dans aucun domaine.

Un thème nouveau entre par `themes` accompagné de son libellé dans `theme_labels`. Le
validateur l'accepte et le signale ; la carte l'affiche par son libellé. Le seul refus est
le thème sans libellé : la carte n'aurait alors rien à écrire.

---

# Domaine ouvert — `activity-ergonomics`

Ouvert le 18 août 2026. Troisième domaine instruit, et le premier de la famille
« Comprendre le travail réel » : jusqu'ici l'application expliquait pourquoi les
organisations font ce qu'elles font et ce que leurs indicateurs déforment, sans rien dire de
ce qui se passe quand quelqu'un essaie de faire son travail.

## Le périmètre est la discipline

> **Ergonomie de l'activité** — l'analyse de l'activité telle qu'elle se déroule, et de la
> distance entre la tâche prescrite et le travail effectivement réalisé pour l'accomplir
> malgré les conditions rencontrées.

Le domaine ne porte pas sur l'aménagement du poste ni sur la conception d'interfaces : il
porte sur ce que fait réellement celui qui travaille, sur ce que cette activité lui coûte,
lui apprend, lui fait inventer — et sur ce qu'elle l'empêche de faire. C'est une tradition
largement francophone : elle s'écrit en français depuis les années 1950 et une part
importante de ses textes n'a jamais été traduite. Chercher ce champ en anglais d'abord
reviendrait à instruire l'ergonomie cognitive anglo-saxonne en croyant l'instruire, lui.

## Points d'entrée

Aucun auteur n'est retenu d'avance — même règle qu'en théorie de la mesure, et pour la même
raison : une liste écrite de mémoire reproduit ce qu'on savait déjà, sans jamais signaler ce
qu'elle ignore. Ce que `corpus-scout` doit couvrir, ce sont des **littératures** :

- la distinction fondatrice tâche / activité et travail prescrit / travail réel, et les
  textes qui l'ont posée ;
- l'analyse ergonomique du travail : ce qui s'observe, ce qui s'en infère, ce que
  l'opérateur en dit lui-même ;
- la régulation de l'activité : variabilité, compromis, modes opératoires, marges de
  manœuvre ;
- la charge de travail, ses définitions concurrentes et ce qu'elles se disputent ;
- la clinique de l'activité et la psychodynamique du travail, en tant qu'elles portent sur
  l'activité empêchée, le métier et le collectif ;
- l'activité instrumentée : ce que l'outil fait à l'activité, et ce que l'activité fait à
  l'outil ;
- le travail collectif : ce que coopérer suppose et ce qu'il coûte ;
- les revues et archives francophones en accès ouvert — *Activités*, *PISTES*, *Laboreal*,
  HAL, Persée — interrogées **en premier**, et non après coup.

Si le lot final ne tient qu'à des textes anglophones, ou qu'à une seule équipe de recherche,
la cartographie n'a pas fait son travail, et cela se signale.

## Le test d'entrée

La question n'est pas « est-ce de l'ergonomie ? » — Leplat vient de la psychologie, Clot de
la clinique, Dejours de la psychiatrie, Rabardel des sciences de l'éducation. La question
est :

> **Ce travail éclaire-t-il l'écart entre ce qui est demandé et ce qui est fait, et ce que
> cet écart exige de celui qui travaille ?**

Trois conditions cumulatives :

1. il porte sur l'**activité réelle** de quelqu'un au travail — ce qu'il fait, ce qu'il
   ajuste, ce qui l'empêche — et non sur l'organisation vue d'en haut ni sur le poste vu
   comme un dispositif ;
2. il est **rattachable à un auteur identifié**, et cette attribution est documentable ;
3. il est **enseignable** : un lecteur non spécialiste doit pouvoir en reconnaître le
   mécanisme dans son propre travail.

## Hors périmètre — rejet direct

- Ergonomie physique, anthropométrie, normes de poste, aménagement outillé : mesurer un
  siège n'est pas analyser une activité.
- Méthodes et prestations d'intervention vendues comme solutions — démarche QVT, dispositif
  RPS clés en main : c'est du management prescriptif, quel que soit le prestige de l'auteur.
- Psychologie ou clinique sans situation de travail.
- Ingénierie des facteurs humains au sens de la conception de systèmes techniques — voir
  ci-dessous, ce n'est pas un rejet de fond.

## La frontière avec `human-factors`, ouvert depuis

C'était la frontière la plus coûteuse à manquer, parce que les deux domaines existaient dans
la taxonomie et qu'un seul était ouvert. La littérature anglophone sur l'erreur humaine, la
conscience de la situation, la charge mentale mesurée, la fiabilité et la résilience relève
de `human-factors` et **ne s'instruit pas ici**, même quand son objet ressemble trait pour
trait. Un candidat de cette veine ne partait pas en rejet : il se consignait dans les angles
morts de la cartographie, pour le jour où ce domaine s'ouvrirait. Un rejet aurait dit « hors
sujet » ; ce n'était pas le cas, et la carte du champ aurait perdu la trace.

**Ce jour est venu le 18 août 2026** : `human-factors` est ouvert plus bas dans ce fichier,
et la section « Candidats retenus pour `human-factors`, domaine déclaré mais fermé » de
[`corpus/map/activity-ergonomics.scouting.md`](map/activity-ergonomics.scouting.md) a servi
de premier stock d'entrée à sa cartographie. La consigne de consignation avait donc bien un
usage, et c'est la démonstration qu'un angle mort écrit vaut mieux qu'un rejet commode. La
frontière, elle, ne bouge pas : elle est réécrite dans l'autre sens sous le périmètre de
`human-factors`, et les deux formulations doivent rester lisibles ensemble.

## Thèmes

Quatre thèmes ont été déclarés dans `src/content/themes.ts` le 18 août 2026, après la
cartographie et non avant : `tache-et-activite`, `regulation-et-marges`,
`activite-empechee-et-metier` et `activite-instrumentee-et-conception`. Chacun a trois à
cinq cartes validées derrière lui.

**Deux ensembles que le périmètre ci-dessus demandait de balayer n'ont pas ouvert de
thème** : la charge de travail comme objet de définitions concurrentes, et le couple
variabilité / contrainte-astreinte. La cartographie n'en a rapporté aucune source primaire
ouvrable — le manuel qui les porte est introuvable en ligne et *Le travail humain* est
derrière Cairn, fermé. Même règle qu'en théorie de la mesure, et elle se réapprend :
**un thème sans carte ne se déclare pas.** Il afficherait une page vide et compterait pour
de la couverture.

---

# Domaine ouvert — `human-factors`

Ouvert le 18 août 2026, le même jour qu'`activity-ergonomics` et immédiatement après lui.
Quatrième domaine instruit, second de la famille « Comprendre le travail réel ». Il s'ouvre
dans une situation inédite pour ce corpus : **son voisin immédiat est déjà instruit, et lui a
laissé un stock d'entrée écrit**. La cartographie de l'ergonomie de l'activité a consigné six
ensembles de candidats sous le titre « Candidats retenus pour `human-factors`, domaine
déclaré mais fermé », avec leurs DOI et l'état d'accès constaté. C'est le seul domaine de ce
corpus dont la première recherche ne part pas de zéro, et c'est un avantage à ne pas
confondre avec une dispense : ces candidats ont été rencontrés **de biais**, en cherchant
autre chose, et ils ne cartographient pas le champ.

## Le périmètre est la discipline

> **Human factors et ergonomie cognitive** — l'étude de ce que l'opérateur perçoit, comprend
> et anticipe dans une tâche réelle, des formes que prend la défaillance de ces processus, et
> de la conception des dispositifs techniques qui les soutiennent ou les mettent en défaut.

Le domaine ne porte ni sur la posture ni sur le mobilier : il porte sur le travail cognitif,
c'est-à-dire sur ce qu'il faut tenir en tête pour piloter, surveiller, diagnostiquer,
décider sous contrainte de temps — et sur ce qui arrive quand l'attention, la mémoire ou le
modèle mental de l'opérateur ne suffisent plus. Il est né dans l'aéronautique, le nucléaire,
l'anesthésie et le contrôle de procédés, et c'est là qu'il a produit ses concepts : ses
textes fondateurs sont des rapports techniques, des articles de revues d'ingénierie et des
ouvrages d'éditeurs universitaires anglophones, pas des essais.

**C'est une tradition largement anglophone, et c'est l'inverse exact du domaine précédent.**
La conséquence pratique est double, et elle décide de la qualité du lot :

1. l'accès s'y joue sur d'autres plateformes — dépôts institutionnels, archives de rapports
   publics (NASA NTRS, DTIC), PubMed Central, revues médicales de sécurité des soins — et
   non sur les revues francophones en accès ouvert qui ont porté le lot précédent ;
2. la couche francophone existe, elle est substantielle, et une recherche anglophone seule la
   manquerait entièrement : l'ergonomie cognitive francophone s'écrit depuis les années 1960
   et discute les mêmes objets sous d'autres noms. Elle se cherche **en parallèle**, jamais
   après coup.

## Points d'entrée

Aucun auteur n'est retenu d'avance, même règle que pour les deux domaines précédents et pour
la même raison : une liste écrite de mémoire reproduit ce qu'on savait déjà et ne signale
jamais ce qu'elle ignore. Le risque est ici particulièrement élevé, parce que ce domaine est
celui dont les noms circulent le plus dans la culture générale de l'ingénierie — un scout qui
partirait de mémoire écrirait cinq ou six noms sans effort, et croirait avoir cartographié.
Ce que `corpus-scout` doit couvrir, ce sont des **littératures** :

- l'erreur humaine et ses taxonomies : ce qui distingue le ratage de l'exécution de l'erreur
  de représentation, et ce que ces distinctions permettent ou empêchent ;
- l'accident organisationnel et la fiabilité : conditions latentes, défenses, ce qui se
  raconte après coup et ce que le biais de rétrospection fait au récit ;
- la charge mentale : ses définitions concurrentes, et surtout **ses instruments de mesure**
  — c'est le versant que l'ergonomie de l'activité a laissé ouvert faute de source, et il
  relève d'ici dès lors que l'objet est la charge saisie comme grandeur ;
- l'attention, la vigilance et les limites de la surveillance prolongée ;
- la conscience de la situation, et la controverse qui l'entoure : le concept est contesté
  dans sa propre communauté, et une carte qui l'ignorerait serait fausse par omission ;
- l'automatisation : ce qu'elle laisse à l'opérateur, ce qu'elle lui retire, la confiance
  qu'il lui accorde et la confusion de mode ;
- l'ingénierie cognitive et les systèmes cognitifs conjoints : concevoir l'affichage, le
  couplage homme-machine et l'analyse du travail cognitif ;
- l'expertise et la décision en situation réelle, sous temps contraint et information
  incomplète ;
- la sécurité et la résilience : ce qui fait qu'un système continue de fonctionner, et pas
  seulement ce qui le fait tomber ;
- la couche francophone de tout ce qui précède — ergonomie cognitive, psychologie
  ergonomique, fiabilité humaine — cherchée en parallèle et non après coup.

Si le lot final ne tient qu'à des auteurs anglophones, ou qu'à la seule veine « erreur et
sécurité » alors que le domaine en compte au moins cinq, la cartographie n'a pas fait son
travail, et cela se signale.

## Le test d'entrée

La question n'est pas « est-ce du human factors ? » — Reason vient de la psychologie
cognitive, Rasmussen de l'ingénierie de contrôle, Hollnagel de l'informatique, Bainbridge de
la psychologie expérimentale, et aucun d'eux ne se présentait d'abord sous cette étiquette.
La question est :

> **Ce travail éclaire-t-il ce que l'opérateur perçoit, comprend ou manque, et ce que le
> dispositif y fait ?**

Trois conditions cumulatives :

1. il porte sur un **processus cognitif engagé dans une tâche réelle** — percevoir,
   comprendre, anticiper, se tromper, tenir sa charge — ou sur le **dispositif technique** qui
   le soutient ou le met en défaut ;
2. il est **rattachable à un auteur identifié**, et cette attribution est documentable ;
3. il est **enseignable** : un lecteur non spécialiste doit pouvoir en reconnaître le
   mécanisme dans une situation qu'il a vécue, devant un tableau de bord, un formulaire ou
   une alarme.

## Hors périmètre — rejet direct

- Ergonomie physique, anthropométrie, biomécanique, normes de poste : même rejet qu'en
  ergonomie de l'activité, et pour la même raison.
- Psychologie cognitive de laboratoire sans tâche de travail : un effet mesuré sur des
  étudiants devant un écran n'est pas un résultat de human factors tant que rien ne le
  rattache à une situation de travail.
- Neurosciences et neuro-imagerie sans situation de travail.
- Guides de style d'interface, chartes d'ergonomie logicielle, méthodes d'audit UX vendues
  comme prestations : c'est du management prescriptif outillé, quel que soit le prestige de
  l'auteur ou de l'organisme qui les publie.
- Textes normatifs et réglementaires (normes ISO, référentiels de certification, circulaires
  de sécurité) : ils appliquent des concepts, ils n'en produisent pas.
- Intelligence artificielle et apprentissage automatique pris pour eux-mêmes : le domaine
  s'intéresse à ce que l'opérateur fait d'un système automatisé, pas au système.

Un concept hors périmètre part en `corpus/rejected/` avec
`rejection_reason: "OUT_OF_SCOPE"`. On ne le laisse pas en attente : un candidat gris non
tranché revient toujours par une autre porte.

## Les frontières, tranchées à l'avance

Elles se tranchent ici et maintenant, avant la cartographie, parce qu'une frontière arbitrée
en cours de lot est arbitrée par ce que le lot contient. Deux régimes distincts, et il ne
faut pas les confondre :

- **avec un domaine ouvert**, un candidat mal placé part chez le voisin ou ne s'instruit
  pas ; il ne se réinstruit jamais en double, le validateur refuse le doublon d'`id` comme
  de `slug` ;
- **avec un domaine encore fermé**, un candidat ne part pas en rejet : il se **consigne dans
  les angles morts** de la cartographie, exactement comme `activity-ergonomics` l'a fait pour
  ce domaine-ci. C'est cette consigne qui vient de servir, et c'est la preuve qu'elle n'est
  pas décorative.

### Avec `activity-ergonomics`, ouvert — la frontière décisive

C'est la seule qui puisse coûter cher, parce que les deux domaines partagent leurs terrains,
leurs revues et parfois leurs auteurs : Leplat a écrit des deux côtés, et il a rendu compte
de Hollnagel dans *PISTES*. Elle ne se tranche ni par la langue, ni par la revue, ni par
l'auteur, mais par **ce dont le texte parle** :

| le texte porte sur | domaine |
|---|---|
| ce que l'opérateur **fait** pour tenir la tâche malgré les conditions, et ce que cela lui coûte | `activity-ergonomics` |
| ce que l'opérateur **perçoit, comprend, anticipe ou manque**, et le dispositif qui y concourt | `human-factors` |
| l'écart entre la tâche prescrite et le travail réel, la régulation, les marges de manœuvre | `activity-ergonomics` |
| l'erreur, la fiabilité, la conscience de la situation, la charge mesurée, l'automatisation | `human-factors` |
| l'activité empêchée, le métier, le collectif de travail, le débat de normes | `activity-ergonomics` |

Deux cas limites méritent d'être nommés, parce qu'ils se présenteront :

- **la charge de travail**. Le périmètre d'`activity-ergonomics` la revendiquait comme
  littérature à balayer, et n'a pu ouvrir aucun thème faute de source primaire ouvrable. Elle
  n'est pas pour autant reversée ici en bloc : la charge comme **compromis que l'opérateur
  arbitre en changeant de mode opératoire** reste chez le voisin ; la charge comme
  **grandeur qu'on définit et qu'on mesure** est ici. Le texte tranche, pas le mot.
- **l'activité instrumentée**. Ce que l'outil fait à l'activité et ce que l'activité fait à
  l'outil est déjà instruit chez le voisin, sous quatre cartes. Ce qui reste ici, c'est le
  dispositif comme **support ou piège de la cognition** : l'affichage, l'alarme,
  l'automatisation et ce qu'elle laisse à faire.

### Avec `measurement-theory`, ouvert

Le domaine de la mesure porte sur **ce qu'un indicateur fait à ce qu'il mesure**. Un
instrument de charge mentale n'entre pas chez lui du seul fait qu'il mesure : il n'y entrerait
que si l'objet du texte était l'effet en retour de la mesure sur le mesuré. Tant que l'objet
est ce que l'instrument saisit de la cognition et ce qu'il en manque, c'est `human-factors`.

### Avec `organizational-sociology`, ouvert

L'accident et la sécurité s'écrivent des deux côtés, et la frontière passe par le niveau
d'analyse du texte, pas par son terrain. Ce qui porte sur la **structure, le couplage entre
unités, le pouvoir, la règle ou la culture d'une organisation** relève de la sociologie des
organisations. Ce qui porte sur **le mécanisme cognitif d'un opérateur** — même quand le
texte remonte ensuite aux décisions organisationnelles qui l'ont rendu possible — relève
d'ici. Un même accident peut donc être instruit deux fois, par deux textes différents ; le
même texte, jamais.

### Avec `work-psychology`, fermé

Stress, épuisement professionnel, motivation, satisfaction, exigences et latitude
décisionnelle : c'est de la psychologie du travail et **cela ne s'instruit pas ici**, même
quand un texte de human factors s'en sert. Un candidat de cette veine se consigne dans les
angles morts. La coupure : ce qui porte sur un **état affectif ou motivationnel durable** est
là-bas ; ce qui porte sur une **ressource cognitive engagée dans une tâche** est ici.

### Avec `decision-science`, fermé

La théorie du choix, les heuristiques et biais de jugement, la décision en univers risqué
prise comme objet général relèvent de `decision-science` et se consignent dans les angles
morts. Ce qui reste ici, c'est la **décision d'un opérateur dans une tâche réelle**, sous
temps contraint et information incomplète : l'objet n'est plus le choix, mais la cognition
qui le produit en situation.

### Avec `cybernetics` et `systems-thinking`, fermés

La variété requise, la régulation d'un système par lui-même, la modélisation systémique du
danger et l'analyse d'accident par modèle de contrôle appartiennent à ces deux domaines et se
consignent dans les angles morts. Ils sont pourtant à l'origine directe d'une part du
vocabulaire de ce champ, et **cette dette se signale plutôt qu'elle ne se dissimule** : une
carte de human factors peut nommer sa source cybernétique dans son attribution sans instruire
le concept cybernétique lui-même.

### Avec `operations-management`, fermé

Fiabilité industrielle, maintenance, qualité, sûreté de fonctionnement au sens de
l'ingénieur : angles morts. Ici, l'objet est l'humain dans le système, pas le système.

## L'accès — ce que ce domaine impose et qui n'est pas négociable

Le lot précédent a rencontré un défi anti-robot et un agent a écrit un script pour le
résoudre ; le script a été détruit et la règle inscrite. **Elle vaut ici avec une acuité
particulière**, parce que la littérature anglophone de ce domaine est massivement portée par
des éditeurs commerciaux et par des bibliothèques de prêt numérique :

> **Aucun agent ne contourne un contrôle d'accès.** Face à un défi anti-robot, à un mur de
> connexion, à un prêt numérique ou à une restriction d'emprunt, on essaie une autre voie
> légitime ; on ne résout pas le défi, on ne se présente pas sous l'identité d'un navigateur,
> on n'emprunte pas ce qui demande un compte. **Un texte qu'on ne peut pas ouvrir
> légitimement est un texte qu'on n'a pas ouvert** : on le dit, et on ne conclut pas au
> verbatim.

Cette règle s'écrit dans le prompt de chaque lecteur et de chaque contrôleur, sans exception.
Sa conséquence prévisible ici : **plusieurs textes fondateurs du champ sont des ouvrages et
resteront fermés.** Ce n'est pas un échec du passage, c'est un résultat à écrire dans les
angles morts.

## Thèmes

Cinq thèmes ont été déclarés dans `src/content/themes.ts` le 19 août 2026, **après le
contrôle aveugle des treize cartes** et non après leur seule rédaction :
`erreur-humaine-et-fiabilite`, `automatisation-et-conception-cognitive`,
`decision-et-conscience-de-la-situation`, `charge-et-vigilance` et
`securite-et-resilience`.

La règle qui s'est réapprise deux fois tient toujours : **un thème sans carte validée ne se
déclare pas.** Elle a ici rencontré son cas limite, et il est écrit plutôt que masqué.

**`securite-et-resilience` ne porte qu'une seule carte.** Quatre thèmes en portent deux à
quatre ; celui-là en a une, et la cartographie l'avait annoncé. C'est le courant dont ce
passage a le moins pu ouvrir de textes : aucun texte primaire de Hollnagel n'a été atteint,
son article fondateur de 1983 est fermé et il n'a pas de dépôt institutionnel, à la
différence de Rasmussen dont l'ancien employeur danois a rendu deux candidats. Le thème se
déclare quand même, et la raison tient au fond et non au compte : replier la résilience sur
l'erreur et la fiabilité serait une faute, ce courant s'étant constitué **contre** l'idée
qu'on comprend un système en étudiant ce qui le fait tomber. Un thème mince coûte moins cher
qu'un concept mal rangé. C'est la première chose à reprendre au prochain passage.

**Deux ensembles que le périmètre demandait de balayer n'ont ouvert aucun thème.**
L'ingénierie cognitive et les systèmes cognitifs conjoints ne sont couverts qu'obliquement,
par la conception écologique d'interface, faute d'un texte de Hollnagel ou de Woods. Et
l'attention et la vigilance ne le sont que par la fatigue en aviation : le texte fondateur
de la vigilance, Mackworth 1948, n'a pas de version ouverte identifiée malgré son ancienneté.

## Ce que ce passage a instruit, et ce qu'il n'a pas pu

Treize cartes publiées le 19 août 2026, douze avec citation. Une quatorzième a été instruite
sans être rédigée, et une quinzième n'a pas pu être ouverte du tout.

**`theorie-de-l-accident`** (Faverge, 1964) a un dossier de lecture complet dans
`corpus/evidence/`, mais aucune carte. Persée ne rend que la première page d'un article de
dix, il n'existe donc aucune source primaire en texte intégral, et le verrou de publication
l'aurait arrêté. Il y a plus grave que le verrou : la formule sous laquelle la cartographie
l'avait retenu ne se lit pas sur la page ouverte, où la distinction entre causes humaines et
techniques est nommée comme le moment **abandonné** et non comme la thèse. Le dossier reste
ouvert, il ne se rejette pas.

**`ironies-de-l-automatisation`** (Bainbridge, 1983) est le texte le plus cité de tout le
lot, et le seul dont aucune voie d'accès légitime n'existe. Plus de vingt voies ont été
essayées et consignées avec leur code HTTP. L'autrice explique elle-même cette absence sur
son site : elle ne détient pas le droit d'auteur de ce texte, et son ancien département a
refusé de l'inscrire à sa liste de publications. Un exemplaire circule sur un site personnel
tiers ; il a été interrogé pour établir des faits sur le fichier, jamais téléchargé, et
aucune citation ne repose dessus. Le dossier porte `quotation: null` et une source en
`metadata-only`.

**La couche francophone est la faiblesse assumée de ce lot.** Une carte sur treize est en
français, une autre est d'auteurs francophones publiant en anglais. Amalberti, Hoc et de
Keyser ont été cherchés activement et n'ont produit aucun candidat, leurs ouvrages centraux
n'étant pas en ligne et *Le travail humain* restant derrière Cairn. Le périmètre demandait de
signaler ce déséquilibre plutôt que de le masquer : il est réel et il n'a pas été corrigé.

---

# Ce qu'on surveille, tous domaines confondus

- **Combien d'auteurs du corpus étaient dans la liste initiale ?** Si c'est la majorité
  après plusieurs lots, la cartographie n'a pas fait son travail.
- **Quels courants ne sont représentés par aucune fiche ?** La liste des angles morts doit
  se vider avec le temps.
- **Quelle part de la littérature francophone et des autrices du champ ?** Les bases
  bibliométriques les sous-représentent structurellement ; ne pas corriger revient à
  hériter de leur biais.
