# Périmètre du corpus

## Onze domaines ouverts sur onze

L'application couvre **quatre familles et onze domaines**, déclarés dans
[`src/content/taxonomy.ts`](../src/content/taxonomy.ts). Déclarer un domaine et l'instruire
sont deux décisions distinctes, et elles ne se prennent pas ensemble : une fiche n'est pas
admise parce qu'un domaine existe dans la taxonomie.

> **Les onze périmètres d'instruction sont ouverts** : `organizational-sociology`,
> `measurement-theory`, `activity-ergonomics`, `human-factors`, `cybernetics`,
> `systems-thinking`, `decision-science`, `operations-management`, `work-psychology`,
> `sociology-of-work` et, depuis le 28 août 2026, `behavioral-economics`. **Aucun domaine
> déclaré n'est plus fermé à l'instruction.** Une conséquence en découle pour tout le corpus :
> un candidat mal placé part désormais chez un voisin ouvert ou ne s'instruit pas, et la
> catégorie « angle mort vers un domaine fermé », qui a doté cinq domaines de leur stock
> d'entrée, n'a plus d'objet. Ouvrir un douzième domaine resterait une décision explicite, qui
> s'inscrirait dans ce fichier sous la forme d'une section de périmètre comme celles qui
> suivent.

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
  le met en défaut → human factors ;
- le concept porte sur **le mécanisme par lequel un système corrige son écart et se
  maintient** — la boucle, la variété, la viabilité, prises comme principe et non comme
  application → cybernétique ;
- le concept porte sur **le comportement qu'une structure de boucles engendre dans le
  temps** — contre-intuition, dépassement, effet de levier — ou sur le modèle qui permet de
  le voir → systems thinking ;
- le concept porte sur **ce que rend un système qui produit** — sa capacité, sa file, son
  stock, son délai, la variabilité qui les travaille — et sur ce qu'on y dimensionne ou
  arbitre → operations management ;
- le concept porte sur **ce que la personne éprouve durablement de son emploi** — satisfaction,
  motivation, implication, monotonie, usure — et sur les propriétés de la situation d'emploi
  auxquelles cet état se rapporte → psychologie du travail.

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

### Avec `cybernetics`, ouvert depuis, et `systems-thinking`, fermé

La variété requise, la régulation d'un système par lui-même, la modélisation systémique du
danger et l'analyse d'accident par modèle de contrôle appartiennent à ces deux domaines et se
consignent dans les angles morts. Ils sont pourtant à l'origine directe d'une part du
vocabulaire de ce champ, et **cette dette se signale plutôt qu'elle ne se dissimule** : une
carte de human factors peut nommer sa source cybernétique dans son attribution sans instruire
le concept cybernétique lui-même.

**`cybernetics` a été ouvert le 20 août 2026**, plus bas dans ce fichier, et la frontière y est
réécrite dans l'autre sens ; les deux formulations doivent rester lisibles ensemble. La
consigne de consignation a été appliquée et n'a rien rapporté : la cartographie de ce domaine
a vérifié ses trois textes les plus susceptibles de porter la dette cybernétique et a conclu
« le domaine se déclare vide pour ce passage ». Un angle mort écrit vaut aussi quand il est
vide — celui-ci dit que la dette de vocabulaire ne s'accompagne d'aucune citation remontant au
texte d'origine, et il évite au passage suivant de la chercher là.

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

# Domaine ouvert — `cybernetics`

Ouvert le 20 août 2026. Cinquième domaine instruit, et **le premier de la famille
« Comprendre la production et les systèmes »**, restée entièrement vide jusqu'ici : trois
domaines déclarés, aucun corpus, une branche entière de la navigation qui n'affichait que
« corpus en cours de constitution ». L'application expliquait ce que les organisations font
faire à ceux qui les peuplent, ce que leurs indicateurs déforment et ce qu'il en coûte de
travailler dedans ; elle ne disait rien de la façon dont un système tient — ou ne tient pas —
son cap.

**Ce domaine repart de zéro.** Les deux cartographies précédentes ont explicitement cherché
ce qui, chez elles, relevait de la cybernétique, et n'ont rien consigné : la section
« Candidats rencontrés relevant de domaines déclarés mais fermés » de
[`corpus/map/human-factors.scouting.md`](map/human-factors.scouting.md) écrit « le domaine se
déclare vide pour ce passage », après vérification sur les trois textes les plus susceptibles
d'en porter la dette. Il n'y a donc **aucun stock d'entrée**, contrairement à `human-factors`
qui avait hérité de son voisin. C'est un résultat utile plutôt qu'un manque : il dit que la
dette de vocabulaire — contrôle, boucle, écart — ne s'accompagne pas, dans ces textes-là,
d'une citation qui permettrait de remonter au concept cybernétique lui-même.

## Le périmètre est la discipline

> **Cybernétique** — l'étude générale de la régulation et de la communication dans les
> systèmes vivants et artificiels : boucle de rétroaction, écart, variété requise, viabilité.

Le domaine ne porte ni sur les machines ni sur les organisations en tant que telles : il porte
sur le **mécanisme par lequel un système se maintient**, quel que soit son substrat. C'est sa
particularité, et c'est exactement d'où vient son risque. Née de la rencontre entre
l'ingénierie de l'asservissement, la neurophysiologie et la théorie de la communication, la
cybernétique énonce des principes qui valent pour un thermostat, un organisme et une
entreprise — ce qui la rend enseignable, et ce qui rend son vocabulaire disponible pour
n'importe quel usage métaphorique. **Le corpus n'instruit pas la métaphore.** Un texte qui
appelle « système » ce qu'il ne décrit pas, ou « rétroaction » ce qu'il ne montre pas boucler,
n'entre pas, quel que soit le nombre de fois où il emploie les mots.

Seconde particularité, et elle décide de la méthode : le champ a un centre de gravité **daté**
— les conférences Macy et leur suite, puis une seconde vague dite « de second ordre » — et une
postérité dispersée dans une dizaine de disciplines qui ne s'en réclament plus. Il faut donc
le chercher à la fois par ses textes et par ses archives, et se méfier de deux réflexes :
croire qu'un champ ancien est un champ ouvert, et croire qu'un champ dissous est un champ
sans textes.

## Points d'entrée

Aucun auteur n'est retenu d'avance — même règle que pour les quatre domaines précédents, et
le risque est ici à son maximum : trois ou quatre noms de ce champ circulent dans la culture
générale de l'ingénierie et du management, et un scout qui partirait de mémoire les écrirait
sans effort en croyant avoir cartographié. Ce que `corpus-scout` doit couvrir, ce sont des
**littératures** :

- la boucle de rétroaction et la régulation par l'écart : ce qu'un système corrige, à partir
  de quoi, et ce qui arrive quand la correction arrive trop tard ou trop fort ;
- le comportement dit téléologique et sa critique : ce que « poursuivre un but » peut vouloir
  dire pour une machine, et ce que cette extension a coûté ;
- l'homéostasie et la régulation du vivant, en tant qu'elles ont fourni au champ son modèle
  d'origine ;
- la variété et sa loi : ce qu'un régulateur doit posséder pour tenir un système, et ce que
  cela implique pour qui régule sans en avoir les moyens ;
- l'information, le signal et le bruit **en tant qu'ils servent la commande**, jamais pour
  eux-mêmes ;
- la cybernétique dite de second ordre : l'observateur inclus dans ce qu'il observe,
  l'autonomie, la clôture opérationnelle ;
- la cybernétique appliquée à l'organisation et à la gestion : viabilité, récursivité, ce
  qu'un centre de décision peut absorber ;
- la boucle perception-action et le contrôle de ce qui est perçu ;
- l'histoire et la critique du champ, y compris ce qui lui a été reproché : c'est une
  littérature académique constituée, souvent la seule voie ouverte vers des textes fermés —
  elle situe, elle ne se substitue jamais à la source primaire ;
- **la couche francophone, cherchée en parallèle et non après coup** : la cybernétique s'est
  écrite en français dès les années 1950, elle a nourri la systémique et une part de la
  philosophie des sciences ; une recherche anglophone seule la manquerait entièrement. HAL,
  Persée, theses.fr, et **OpenEdition Books en priorité** — c'est cette voie, découverte en
  cours de lot en théorie de la mesure, qui y a débloqué l'ouvrage central du domaine.

Si le lot final ne tient qu'aux trois noms les plus cités du champ, ou qu'à sa seule vague
fondatrice alors qu'il en compte au moins deux, la cartographie n'a pas fait son travail, et
cela se signale.

## Le test d'entrée

La question n'est pas « est-ce de la cybernétique ? ». Le mot a été revendiqué, abandonné,
puis repris, et plusieurs des textes qui comptent ne le portent pas : le champ s'est constitué
entre des mathématiciens, des physiologistes, des psychiatres et des praticiens de la
recherche opérationnelle, dont aucun n'était cybernéticien de formation. La question est :

> **Ce travail éclaire-t-il le mécanisme par lequel un système corrige son écart et se
> maintient ?**

Trois conditions cumulatives :

1. il porte sur un **mécanisme de régulation, de commande ou de communication** pris comme tel
   — boucle, écart, variété, viabilité, clôture — et non sur un domaine d'application où ce
   mécanisme ne figurerait que par analogie ;
2. il est **rattachable à un auteur identifié**, et cette attribution est documentable ;
3. il est **enseignable** : un lecteur non spécialiste doit pouvoir en reconnaître le
   mécanisme dans un système qu'il côtoie — un service, une chaîne d'approvisionnement, une
   équipe, un corps.

## Hors périmètre — rejet direct

- **Automatique, traitement du signal et théorie du contrôle au sens de l'ingénieur** : le
  principe de régulation est ici, le dimensionnement d'un correcteur et l'étude de sa
  stabilité ne le sont pas.
- **Théorie de l'information prise pour elle-même** : codage, capacité de canal, compression.
  Elle entre par ce qu'elle fait à la commande, jamais par ses théorèmes.
- **Intelligence artificielle et apprentissage automatique comme techniques** : ce qui compte
  ici est ce qu'un modèle de machine énonce de la régulation, pas ce qu'une architecture
  obtient comme résultat.
- **Vulgarisation systémique de conseil, de coaching ou de formation** : « lois du système »,
  schémas de boucles vendus comme méthode, littérature grise d'entreprise. Même rejet
  qu'ailleurs, quel que soit le prestige de l'auteur ou de l'institution qui les publie.
- **Tout texte qui invoque le système comme métaphore** sans mécanisme identifiable ni auteur
  rattachable — c'est le rejet le plus fréquent à prévoir dans ce domaine.
- **Biologie, écologie, économie ou psychothérapie de la régulation** dès lors que l'objet du
  texte est le phénomène étudié et non le principe qu'il permet d'énoncer. La règle est la
  même que partout : le texte tranche, pas la discipline de son auteur.

Un concept hors périmètre part en `corpus/rejected/` avec
`rejection_reason: "OUT_OF_SCOPE"`. On ne le laisse pas en attente : un candidat gris non
tranché revient toujours par une autre porte.

## Les frontières, tranchées à l'avance

Même régime qu'en `human-factors`, et pour la même raison — une frontière arbitrée en cours de
lot est arbitrée par ce que le lot contient. Avec un domaine **ouvert**, un candidat mal placé
part chez le voisin ou ne s'instruit pas ; avec un domaine **fermé**, il se consigne dans les
angles morts de la cartographie, jamais en rejet.

### Avec `systems-thinking`, fermé — la frontière décisive

C'est la seule qui puisse coûter cher : les deux domaines sont voisins de famille, partagent
leurs ancêtres, et l'un s'ouvre avant l'autre. Elle ne se tranche ni par l'auteur, ni par le
vocabulaire, mais par ce dont le texte parle :

| le texte porte sur | domaine |
|---|---|
| le **principe** de la régulation : l'écart, la boucle, la variété qu'un régulateur doit posséder, la clôture, la viabilité | `cybernetics` |
| le **comportement dans le temps** qu'engendre une structure de boucles, de stocks et de délais — contre-intuition, oscillation, points de levier | `systems-thinking` |
| l'observateur inclus dans le système, l'autonomie, l'autoproduction | `cybernetics` |
| la **modélisation** d'un système et la simulation de ses politiques | `systems-thinking` |
| la viabilité d'une organisation, la récursivité de ses niveaux de commande | `cybernetics` |

Un cas limite mérite d'être nommé à l'avance, parce qu'il se présentera : **l'organisation
régulée**. Les deux domaines l'ont prise pour objet, parfois dans les mêmes années et sur les
mêmes terrains. Ce qui décide reste l'objet du texte : la condition qu'un régulateur doit
remplir pour tenir un système est ici ; ce que produit dans la durée un jeu de boucles déjà en
place est là-bas.

### Avec `organizational-sociology`, ouvert

Le mot « régulation » est déjà instruit chez le voisin, et pas dans ce sens : la règle de
contrôle et la règle autonome de Reynaud portent sur ce que des acteurs font des règles.
**Le mot ne décide de rien.** Ce qui porte sur la règle, le pouvoir, la décision ou la
structure relève de la sociologie des organisations ; ce qui porte sur le mécanisme de
correction d'écart lui-même relève d'ici.

### Avec `activity-ergonomics`, ouvert

`regulation-de-l-activite` y est instruite : c'est ce que l'opérateur ajuste pour tenir sa
tâche malgré les conditions. La régulation comme **conduite de quelqu'un en situation** est
là-bas ; la régulation comme **propriété d'un système** est ici. Un texte de cybernétique peut
parler d'humains sans changer de domaine, tant que son objet est la boucle et non ce qu'elle
coûte à celui qui la tient.

### Avec `human-factors`, ouvert

Son périmètre a déjà cédé à ce domaine « la variété requise, la régulation d'un système par
lui-même, la modélisation systémique du danger et l'analyse d'accident par modèle de
contrôle », et sa cartographie n'a rien trouvé à consigner. La réciproque s'écrit ici : ce qui
porte sur **ce que l'opérateur perçoit, comprend ou manque** reste chez lui, même quand le
texte est écrit en vocabulaire de commande. Le contrôle supervisé de Sheridan, déjà instruit
là-bas, en est le cas d'école — il doit manifestement à la théorie du contrôle, et il n'en est
pas moins une carte de human factors. **Cette dette se signale, elle ne se réinstruit pas.**

### Avec `measurement-theory`, ouvert

Un indicateur est un signal dans une boucle, et cette parenté est réelle ; elle ne suffit pas.
Tant que l'objet du texte est **ce que la boucle exige du signal** — son délai, son gain, ce
qu'il doit discriminer —, c'est ici. Dès que l'objet est **l'effet en retour de la mesure sur
le mesuré**, c'est là-bas, et c'est déjà instruit sous plusieurs cartes.

### Avec `operations-management` et `decision-science`, fermés

Files d'attente, capacité, stocks et pilotage de production d'un côté ; théorie du choix,
valeur de l'information et jugement de l'autre : **angles morts, jamais rejets.** La recherche
opérationnelle demande ici une attention particulière — plusieurs auteurs du champ en
viennent, et c'est le texte qui tranche, pas le parcours de celui qui l'a écrit.

## L'accès — ce qu'il faut présumer, et ce qu'il faut vérifier

Deux présomptions, à tester tôt et à ne jamais tenir pour acquises :

- **l'ancienneté n'ouvre rien par elle-même.** Une part des textes fondateurs sont des
  ouvrages toujours exploités par des éditeurs actifs ; leur date ne dit rien de leur
  disponibilité, et le domaine public n'est ni universel ni uniforme. Un texte présumé libre
  se vérifie sur la source qui le sert, sinon il est fermé. Une mise à disposition autorisée
  par un ayant droit se constate sur la page qui l'héberge, elle ne se déduit pas de l'âge du
  texte.
- **les archives valent la bibliographie.** Les bases indexent mal l'avant-1970 : actes
  numérisés, fonds d'auteurs déposés par des universités, revues de sociétés savantes,
  rapports publics. C'est la leçon des trois passages précédents — NASA NTRS et le miroir
  légal de DTIC ont porté `human-factors`, OpenEdition Books a débloqué `measurement-theory` —
  et elle se réapplique ici avec d'autres guichets.

La règle d'accès ne change pas et n'est pas négociable :

> **Aucun agent ne contourne un contrôle d'accès.** Face à un défi anti-robot, à un mur de
> connexion, à un prêt numérique ou à une restriction d'emprunt, on essaie une autre voie
> légitime ; on ne résout pas le défi, on ne se présente pas sous l'identité d'un navigateur,
> on n'emprunte pas ce qui demande un compte. **Un texte qu'on ne peut pas ouvrir
> légitimement est un texte qu'on n'a pas ouvert** : on le dit, et on ne conclut pas au
> verbatim.

## Thèmes

**Quatre thèmes déclarés le 21 août 2026**, après le contrôle aveugle des douze cartes du
domaine : `variete-et-moyens-de-la-regulation`, `la-boucle-et-l-ecart`,
`auto-organisation-et-bruit` et `ou-passe-la-commande`. Ils s'écartent de la proposition
faite par la cartographie, et `src/content/themes.ts` dit en quoi. La règle qui s'est
réapprise à chaque domaine tient toujours : **un thème sans carte validée ne se déclare
pas** — il afficherait une page vide et compterait pour de la couverture.

---

# Domaine ouvert — `systems-thinking`

Ouvert le 22 août 2026. Sixième domaine instruit, et le deuxième de la famille « Comprendre
la production et les systèmes », que la cybernétique avait ouverte deux jours plus tôt.

**Ce domaine ne repart pas de zéro, et c'est le seul dans ce cas.**
[`corpus/map/cybernetics.scouting.md`](map/cybernetics.scouting.md) lui a légué trois textes
avec leur état d'accès constaté, dont un que la cartographie qualifiait elle-même de
« cadeau pour qui ouvrira ce domaine » : Roig 1970, cinquante et une pages de texte intégral
sur Persée. Ce legs n'est pas un raccourci de méthode — le périmètre s'écrit ici avant que le
balayage reprenne — mais il dispense de chercher ce qui a déjà été trouvé.

## Le périmètre est la discipline

> **Systems thinking** — l'étude du **comportement dans le temps** qu'engendre une structure
> de boucles, de stocks et de délais, et de la **modélisation** par laquelle on la représente
> pour agir sur elle.

Le domaine ne porte pas sur le principe de la régulation, qui est chez son voisin
cybernétique : il porte sur ce que produit, dans la durée, un jeu de boucles déjà en place.
Contre-intuition, oscillation, dépassement, résistance aux politiques, points de levier : ce
sont des **comportements de structure**, et leur trait commun est qu'aucun ne se déduit de
l'intention de ceux qui peuplent le système. C'est ce qui rend le champ enseignable, et c'est
aussi ce qui le rend dangereux à instruire — « système », « levier », « boucle », « modèle »
circulent partout, et un texte qui les emploie n'en décrit pas un pour autant.

Seconde particularité, symétrique de celle de la cybernétique : le champ a **deux souches qui
ne se citent pas**. Une souche anglophone, née à l'école d'ingénieurs, qui modélise et simule ;
une souche francophone qui n'a jamais simulé grand-chose et qui a passé son temps à demander
ce qu'on fait au juste quand on dit « système ». Un balayage anglophone seul manquerait la
seconde entièrement, et rendrait un domaine qui ne sait modéliser que ce dont il ne sait pas
si c'est là.

## Points d'entrée

Aucun auteur n'est retenu d'avance. Un signal de la cartographie voisine est à prendre au
sérieux plutôt qu'à corriger : **Bertalanffy et Forrester n'ont pas été rencontrés
spontanément** par les requêtes du périmètre cybernétique. C'est une information sur les
requêtes, pas sur le champ, et elle dit qu'ici il faudra couvrir des **littératures** :

- le comportement contre-intuitif des systèmes sociaux : pourquoi une politique raisonnable
  produit l'inverse de son intention, et pourquoi la cause n'est pas là où le symptôme la
  fait chercher ;
- les points de levier : où l'on intervient dans un système, dans quel ordre d'efficacité, et
  pourquoi ces points se poussent d'ordinaire dans le mauvais sens ;
- stocks, flux et délais : ce qu'un retard fait à une boucle, et le comportement qu'engendre
  une accumulation ;
- la dynamique de la croissance et de ses limites : dépassement, effondrement, ressource qui
  se renouvelle moins vite qu'on la prend ;
- la modélisation et la simulation de politiques : ce qu'un modèle établit, ce qu'il ne peut
  pas établir, et ce qu'on lui fait dire ;
- l'épistémologie du système en sciences sociales : le découpage entre système et
  environnement, le rapport entre le système concret et le modèle qui l'exprime, et ce que
  vaut une notion importée d'une autre discipline ;
- la théorie générale des systèmes elle-même, en tant que **projet** dont il faut savoir ce
  qu'il a tenu ;
- l'histoire et la critique du champ, y compris ce qui lui a été reproché de plus dur — elle
  situe, elle ne remplace jamais la source primaire ;
- **la couche francophone, cherchée en parallèle et non après coup** : la systémique
  française s'est écrite pour l'essentiel hors des bases anglophones. Persée, HAL,
  OpenEdition Books, theses.fr.

## Le test d'entrée

La question n'est pas « est-ce du systems thinking ? » : l'étiquette est postérieure à la
plupart des textes qui comptent, et plusieurs de ses auteurs se disaient ingénieurs,
politistes ou biologistes. La question est :

> **Ce travail éclaire-t-il le comportement qu'une structure engendre dans le temps, ou la
> façon de le représenter pour agir dessus ?**

Trois conditions cumulatives :

1. il porte sur un **comportement de structure** — contre-intuition, dépassement, oscillation,
   résistance à une politique, effet de levier — ou sur la **construction du modèle** qui
   permet de le voir, et non sur un domaine d'application où le mot « système » ne ferait que
   passer ;
2. il est **rattachable à un auteur identifié**, et cette attribution est documentable ;
3. il est **enseignable** : un lecteur non spécialiste doit pouvoir reconnaître le
   comportement décrit dans un système qu'il côtoie — un service, une ville, un budget, une
   équipe.

## Hors périmètre — rejet direct

- **Le mot « système » employé sans mécanisme.** C'est le rejet le plus fréquent à prévoir, et
  il se tranche sans état d'âme : `corpus/rejected/`, `rejection_reason: "OUT_OF_SCOPE"`,
  jamais une mise en attente. Un candidat gris non tranché revient toujours par une autre
  porte.
- **L'ingénierie système et la gestion de projet** : découpage d'exigences, cycle en V,
  architecture de produit. Le mot est le même, l'objet ne l'est pas.
- **La théorie du chaos et les systèmes dynamiques comme branche des mathématiques** : elles
  entrent par ce qu'elles font comprendre d'un comportement observable, jamais par leurs
  théorèmes.
- **La méthodologie de l'intervention en organisation** qui se réclame de la pensée systémique
  sans en exposer de mécanisme : elle relève du conseil, pas du champ.
- **Le développement durable comme cause.** Le champ y a beaucoup servi, et l'engagement de
  plusieurs de ses auteurs est un fait de leur biographie, pas un critère d'entrée. Ce qui
  entre est le mécanisme, jamais la thèse politique qu'on lui fait porter.

## Les frontières, tranchées à l'avance

### Avec `cybernetics`, ouvert — la frontière décisive, et déjà tranchée depuis l'autre côté

Elle a été écrite avant l'ouverture de ce domaine, dans la section `cybernetics` de ce même
fichier, qui l'annonçait comme « la seule qui puisse coûter cher ». **Elle ne se rouvre pas
ici, et son tableau de départage fait foi** : le **principe** de la régulation — écart,
boucle, variété requise, clôture, viabilité — est là-bas ; le **comportement dans le temps**
qu'engendre une structure de boucles, de stocks et de délais est ici, ainsi que la
modélisation d'un système et la simulation de ses politiques.

Un rappel qui vaut d'être répété parce qu'il se présentera : le cas de **l'organisation
régulée** ne se tranche ni par l'auteur ni par l'année, mais par l'objet du texte. La
condition qu'un régulateur doit remplir pour tenir un système est chez le voisin ; ce que
produit dans la durée un jeu de boucles déjà en place est ici.

Conséquence pratique, et elle est asymétrique : ce domaine s'ouvrant **après** son voisin, un
texte qui relèverait de la cybernétique ne se consigne pas en angle mort — il part chez lui,
où il sera instruit.

### Avec `organizational-sociology`, ouvert

`garbage-can-model` et `couplage-lache` y sont ou y entrent, et décrivent eux aussi des
comportements que personne n'a voulus. Ce qui décide reste l'objet : un travail qui explique
ces comportements par **ce que des acteurs font des règles, du pouvoir et de l'ambiguïté**
relève de la sociologie des organisations ; un travail qui les explique par **la structure de
boucles, de stocks et de délais** relève d'ici. Le mot « organisation » ne décide de rien.

### Avec `measurement-theory`, ouvert

`mesure-devenue-cible`, `loi-de-campbell` et `gouvernement-par-les-chiffres` y sont instruits,
et le point de contact est réel : un indicateur qui devient cible est un point d'entrée dans
une boucle. Ce qui porte sur **l'indicateur lui-même** — ce qu'il saisit, ce qu'il omet, ce
que sa seule existence provoque — reste là-bas. Ce qui porte sur **le comportement du système
qui l'a intégré** est ici.

### Avec `operations-management` et `decision-science`, fermés

Deux domaines déclarés que ce champ touche de près et qui ne sont pas ouverts. Un candidat
mal placé se **consigne en angle mort de la cartographie**, jamais en rejet : son objet n'est
pas hors sujet, il relève d'un voisin fermé. La règle est celle de `human-factors` et de
`cybernetics`, et elle a déjà rapporté — c'est ainsi que ce domaine a hérité de son stock
d'entrée.

- vers `operations-management` : la conduite des flux, des stocks et des files comme
  **problème de gestion** — dimensionner, ordonnancer, arbitrer un coût ;
- vers `decision-science` : ce qui se passe **dans la tête de celui qui décide** — heuristique,
  biais, recherche de solution.

### Avec `activity-ergonomics` et `human-factors`, ouverts

Un modèle de simulation destiné à l'apprentissage ou une interface qui donne à voir un système
ne changent pas de domaine par leur support. Ce que l'opérateur perçoit, comprend ou manque
est en `human-factors` ; ce qu'il fait pour tenir sa tâche est en `activity-ergonomics` ; le
comportement du système qu'il regarde est ici.

## L'accès — ce que ce domaine impose

Deux constats du balayage d'ouverture, à tenir pour acquis par le prochain passage :

- **les textes vivants du champ sont chez des éditeurs actifs, et les textes ouverts sont
  ailleurs.** La voie qui a rendu ce lot n'est pas la bibliographie : ce sont les mises à
  disposition **autorisées par l'auteur ou par l'institution qui le porte** — un document de
  cours du System Dynamics Group du MIT, un rapport d'un institut fondé par l'autrice, une
  revue francophone en accès ouvert. Ces pages disent elles-mêmes leur autorisation ; c'est
  cela qui se constate, et rien d'autre.
- **une réédition n'est pas l'original.** Le texte de Forrester ouvert pour ce lot est une
  **mise à jour de 1995** d'un article de 1971, et il le dit dans sa propre note : des chiffres
  y ont bougé. Un verbatim relevé dessus se localise sur elle, jamais sur l'article d'origine
  qu'on n'a pas ouvert.

La règle d'accès ne change pas :

> **Aucun agent ne contourne un contrôle d'accès.** Un texte qu'on ne peut pas ouvrir
> légitimement est un texte qu'on n'a pas ouvert : on le dit, et on ne conclut pas au
> verbatim.

## Thèmes

**Trois thèmes déclarés le 22 août 2026**, après le contrôle des sept cartes du lot
d'ouverture et non après leur seule rédaction : `comportement-dans-le-temps`,
`ou-intervenir-dans-un-systeme` et `dire-systeme`. Aucun ne repose sur une carte unique.

Ce que la cartographie proposait et qui n'a **pas** été déclaré : un thème sur les stocks, les
flux et les délais, et un thème sur la croissance et ses limites. Les deux sont au centre du
champ, et aucune source primaire ouvrable n'a été établie pour eux dans ce passage — l'ouvrage
de 1972 sur les limites de la croissance a bien été localisé en accès ouvert, il n'a pas été
lu. **Un thème sans carte validée ne se déclare pas.**

---

# Domaine ouvert — `decision-science`

Ouvert le 23 août 2026. Septième domaine instruit, et le **deuxième de la famille
« Comprendre le pilotage »**, que la théorie de la mesure avait ouverte seule.

**Ce domaine ne repart pas de zéro.** Deux cartographies lui ont légué cinq textes avec leur
état d'accès constaté, et l'une d'elles a poussé jusqu'à vérifier l'hébergement :
[`corpus/map/cybernetics.scouting.md`](map/cybernetics.scouting.md) lui consigne Newell, Shaw
& Simon 1960 en texte intégral ouvert, non lu ;
[`corpus/map/human-factors.scouting.md`](map/human-factors.scouting.md) lui consigne Tversky &
Kahneman 1974 sous sa forme de rapport technique ONR, mirée sans restriction d'emprunt, non
ouverte, ainsi que Tversky 1972, l'ouvrage collectif de 1982 et la théorie de l'utilité
multi-attributs, ces trois derniers sans accès testé. Ce legs ne dispense d'aucune étape :
le périmètre s'écrit ici avant que le balayage reprenne, et il dispense seulement de chercher
ce qui a déjà été trouvé.

## Le périmètre est la discipline

> **Science de la décision** — l'étude de **la façon dont un choix s'établit** quand
> l'information est incomplète et les conséquences incertaines : les procédures que suit
> réellement celui qui décide, les écarts systématiques entre ces procédures et ce que la
> théorie du choix prescrit, et les méthodes construites pour instruire un arbitrage.

Le domaine ne porte pas sur ce que l'organisation fait de la décision, qui est en sociologie
des organisations ; ni sur ce que l'opérateur perçoit d'une situation, qui est en human
factors. Il porte sur **l'opération de choix elle-même** : comment un problème est représenté
avant d'être résolu, comment une solution est cherchée plutôt que calculée, quels jugements de
probabilité et de valeur y entrent, et ce qu'une méthode d'aide peut ou ne peut pas trancher à
la place de celui qui décide.

Le champ a une particularité qu'il faut tenir dès l'ouverture : **il est écrit par deux camps
qui se citent en s'opposant.** Une souche normative, qui dit ce qu'un choix cohérent devrait
être et mesure les écarts à cette norme ; une souche descriptive, qui prend ces écarts pour
l'objet et cherche les procédures effectives. Un balayage qui ne rapporterait qu'un des deux
camps rendrait un domaine sans son différend, c'est-à-dire un domaine faux. La couche
francophone en ajoute un troisième, l'aide multicritère à la décision, qui s'est constituée
en contestant qu'un problème de choix soit donné avant d'être construit.

## Points d'entrée

Aucun auteur n'est retenu d'avance, et ce domaine a plus que les autres besoin de cette
règle : ses noms les plus disponibles de mémoire sont aussi ceux que la vulgarisation a le
plus répétés, au point que leurs énoncés circulent détachés de tout texte. Ce qui se balaie,
ce sont des **littératures** :

- la représentation du problème avant sa résolution : ce qu'un décideur construit comme
  espace de recherche, et ce que ce cadrage décide déjà du résultat ;
- la recherche heuristique d'une solution : chercher plutôt que calculer, s'arrêter à ce qui
  convient plutôt qu'optimiser, et ce qu'une procédure de recherche coûte ;
- le jugement de probabilité et ses écarts systématiques : sur quoi repose une estimation de
  vraisemblance quand la fréquence n'est pas connue ;
- le choix sous risque et sa modélisation : utilité, préférence, cohérence, et les
  observations qui contredisent ces modèles ;
- l'aide à la décision comme méthode : critères multiples, agrégation, incomparabilité,
  valeur de l'information, et ce qu'une méthode transfère de l'analyste au décideur ;
- la décision collective et le vote comme problème d'agrégation de préférences, quand le
  texte porte sur le mécanisme et non sur l'institution qui l'emploie ;
- la critique du concept même de décision : ce qu'on prête à un moment de choix qui n'existe
  peut-être pas comme tel ;
- **la couche francophone, cherchée en parallèle et non après coup** : l'aide multicritère,
  la recherche opérationnelle appliquée au choix, la critique française de la décision. Persée,
  HAL, OpenEdition Books, theses.fr. Elle ne remontera pas des bases anglophones.

## Le test d'entrée

La question n'est pas « est-ce de la science de la décision ? » : l'étiquette recouvre des
travaux d'économistes, de psychologues, de mathématiciens et d'informaticiens qui ne se
reconnaissaient pas dans un même champ. La question est :

> **Ce travail éclaire-t-il l'opération par laquelle un choix s'établit sous incertitude ?**

Trois conditions cumulatives :

1. il porte sur **le choix comme opération** — sa représentation, sa procédure, son critère,
   son écart à une norme de cohérence, ou la méthode construite pour l'instruire — et non sur
   un domaine d'application où une décision ne fait que se produire ;
2. il est **rattachable à un auteur identifié**, et cette attribution est documentable ;
3. il est **enseignable** : un lecteur non spécialiste doit pouvoir reconnaître l'opération
   décrite dans un arbitrage qu'il a lui-même à rendre.

## Hors périmètre — rejet direct

- **Le mot « décision » employé sans opération identifiable.** C'est le rejet le plus fréquent
  à prévoir, et il se tranche sans état d'âme : `corpus/rejected/`,
  `rejection_reason: "OUT_OF_SCOPE"`, jamais une mise en attente. Un candidat gris non tranché
  revient toujours par une autre porte.
- **L'intelligence artificielle comme technique** : architectures, performances, comparaison
  de systèmes. Un texte de ce champ n'entre que s'il expose une procédure de choix **présentée
  comme un modèle de celle d'un humain**, et il entre alors par cette thèse, jamais par le
  programme qui l'illustre.
- **La statistique et la théorie des probabilités comme branches des mathématiques**, y compris
  l'inférence bayésienne prise comme calcul. Elles entrent par ce qu'elles font comprendre d'un
  jugement effectif, jamais par leurs théorèmes.
- **La littérature de conseil au dirigeant** : matrices d'aide au management, méthodes de
  réunion, modèles de leadership décisionnel sans mécanisme exposé.
- **La finance comportementale appliquée aux marchés** : l'objet y est le prix, pas le choix.
  Un texte qui expose un mécanisme de jugement et l'illustre sur un marché reste recevable ;
  un texte qui documente une anomalie de marché ne l'est pas.
- **Le libre choix comme thèse politique ou morale.** Le champ y a beaucoup servi, et cet
  usage est un fait de réception, pas un critère d'entrée.

## Les frontières, tranchées à l'avance

### Avec `organizational-sociology`, ouvert — la frontière décisive

C'est ici que ce domaine peut coûter cher, et pour une raison qu'aucun autre n'a rencontrée :
**deux de ses concepts les plus canoniques sont déjà instruits chez le voisin.**
`rationalite-limitee`, attribuée à Simon, et `garbage-can-model`, attribué à Cohen, March et
Olsen, sont des cartes publiées de `organizational-sociology`.

> **Un concept déjà instruit ne se réinstruit pas dans un autre domaine.** La règle est
> générale et elle est en tête de ce fichier ; elle se rappelle ici parce que c'est le seul
> domaine où elle porte sur le centre du champ et non sur sa périphérie.

Ce n'est ni une erreur du voisin ni une amputation de celui-ci. Ces deux cartes existent par
leur thème, et leur thème est « Décision » en sociologie des organisations : elles portent sur
ce qu'une organisation fait de ses choix. Ce qui reste entier et n'est instruit nulle part,
c'est la **procédure de choix elle-même** — la façon dont un problème est représenté, dont une
solution est cherchée, dont une vraisemblance est estimée. Un même auteur peut donc être
présent des deux côtés, et un texte de Simon n'est pas disqualifié parce que Simon est déjà au
corpus : c'est l'objet du texte qui décide, et l'identifiant qui doit être neuf.

Le départage, quand un candidat hésite :

| le texte porte sur | domaine |
|---|---|
| ce que des acteurs font des règles, du pouvoir et de l'ambiguïté quand il faut choisir | `organizational-sociology` |
| la procédure par laquelle un choix s'établit, ses critères et ses écarts | `decision-science` |

### Avec `human-factors`, ouvert — et déjà tranchée depuis l'autre côté

Elle a été écrite avant l'ouverture de ce domaine, dans la section `human-factors` de ce même
fichier. **Elle ne se rouvre pas ici, et sa formulation fait foi** : ce qui reste là-bas, c'est
la décision d'un opérateur dans une tâche réelle, sous temps contraint et information
incomplète, où l'objet est la cognition qui produit le choix en situation ; ce qui vient ici,
c'est la théorie du choix, les heuristiques et les biais de jugement pris comme objet général.

Conséquence pratique, et elle est asymétrique : ce domaine s'ouvrant **après** son voisin, un
texte qui relèverait de human factors ne se consigne pas en angle mort, il part chez lui, où il
sera instruit. Le cas le plus probable est celui de la décision naturaliste, dont la carte
`decision-reconnue-d-emblee` est déjà publiée là-bas : le rapport de Klein qui la porte
construit son argumentaire **contre** les textes que ce domaine hérite. Instruire ces textes ici
est donc légitime et attendu ; les instruire par ce que Klein en dit ne le serait pas.

### Avec `measurement-theory`, ouvert

Même famille, et le point de contact est réel : une décision se prend souvent sur un
indicateur. Ce qui porte sur **l'indicateur lui-même** — ce qu'il saisit, ce qu'il omet, ce que
sa seule existence provoque — reste là-bas. Ce qui porte sur **l'opération de choix qui s'en
sert** est ici. La valeur de l'information est un cas limite et il se tranche par cette même
règle : la question de ce qu'un renseignement supplémentaire change à un arbitrage est ici ;
la question de ce que ce renseignement mesure est là-bas.

### Avec `cybernetics` et `systems-thinking`, ouverts

La régulation par l'écart et le comportement d'une structure de boucles ne sont pas des
décisions, même quand un texte les décrit comme telles. Un régulateur qui corrige un écart ne
choisit pas au sens de ce domaine, il applique une loi de commande : c'est en cybernétique.
Ce qu'un jeu de boucles produit dans le temps est en systems thinking. Ce qui vient ici est la
délibération d'un décideur, y compris quand elle porte sur un système.

**Une vigilance particulière est due à la recherche opérationnelle**, qui a fourni des auteurs
aux trois domaines. La règle est celle déjà écrite en cybernétique : **c'est le texte qui
tranche, pas le parcours de celui qui l'a écrit.**

### Avec `activity-ergonomics`, ouvert

Ce qu'un travailleur fait réellement pour tenir sa tâche, et ce que cela lui coûte, est
là-bas, y compris quand cela suppose des arbitrages permanents. L'arbitrage n'est pas l'objet :
l'activité l'est.

### Avec quatre domaines fermés : `operations-management`, `work-psychology`, `sociology-of-work`, `behavioral-economics`

Quatre domaines déclarés que ce champ touche, et qui ne sont pas ouverts. Un candidat mal placé
se **consigne en angle mort de la cartographie**, jamais en rejet : son objet n'est pas hors
sujet, il relève d'un voisin fermé. C'est la règle qui a doté ce domaine de son stock d'entrée,
et elle se rend ici.

- vers `operations-management` : l'ordonnancement, le dimensionnement et l'arbitrage de coût
  comme **problème de gestion**, quand la méthode vise à produire un plan et non à éclairer un
  choix ;
- vers `behavioral-economics` : ce qui porte sur **le comportement économique** et ses
  conséquences agrégées — préférences temporelles, marchés, politiques d'incitation, dispositif
  d'architecture du choix. La coupure avec ce domaine est fine et elle sera la plus coûteuse à
  tenir : un écart de jugement pris comme **fait de raisonnement** est ici ; le même écart pris
  comme **fait économique** est là-bas ;
- vers `work-psychology` : la décision comme charge, source de stress ou objet de
  satisfaction ;
- vers `sociology-of-work` : ce que la position sociale de celui qui décide fait à sa décision.

## L'accès — ce que ce domaine impose

Trois constats à tenir pour acquis avant le premier balayage, les deux premiers hérités et
déjà vérifiés par les cartographies voisines :

- **la version publiée d'un article peut être fermée quand une version antérieure est
  ouverte.** Le legs le montre : la publication de 1974 dans *Science* est fermée, et un
  rapport technique antérieur du même travail est miré sans restriction. Un `is_oa: false`
  d'Unpaywall clôt donc encore moins ici qu'ailleurs, et une recherche de rapport technique
  fait partie du balayage, pas de la reprise ;
- **une réédition n'est pas l'original, et un recueil n'est pas la publication d'origine.**
  Ce champ republie beaucoup : ses textes fondateurs circulent en chapitres de recueils, en
  traductions et en versions révisées. Un verbatim se localise sur l'exemplaire réellement
  ouvert, jamais sur l'édition d'origine qu'on n'a pas vue ;
- **la vulgarisation de ce champ est massive, et elle est un piège de détection.** Quinze pages
  concordantes qui ne remontent à aucun texte académique ne valent rien, et ce domaine en
  produira plus que les six autres. Le web général sert **uniquement à détecter**.

La règle d'accès ne change pas :

> **Aucun agent ne contourne un contrôle d'accès.** Un texte qu'on ne peut pas ouvrir
> légitimement est un texte qu'on n'a pas ouvert : on le dit, et on ne conclut pas au
> verbatim.

## Thèmes

**Aucun thème déclaré à l'ouverture.** Ils se déclarent après le contrôle aveugle des cartes du
premier lot, et non après leur rédaction ni d'après la proposition de la cartographie. Un thème
sans carte validée ne se déclare pas : le dépôt en porte déjà deux qui affichent une page vide,
et c'est deux de trop.

---

# Domaine ouvert — `operations-management`

Ouvert le 24 août 2026. Huitième domaine instruit, et le **troisième et dernier de la famille
« Comprendre la production et les systèmes »**, que la cybernétique puis le systems thinking
avaient ouverte.

**Ce domaine ne repart pas de zéro, et son legs est le mieux qualifié des quatre restants.**
Deux cartographies lui ont consigné des textes avec leur état d'accès constaté :

- [`corpus/map/cybernetics.scouting.md`](map/cybernetics.scouting.md) lui consigne **trois
  rapports du Department of Defense appliquant la loi de la variété requise à l'acquisition de
  systèmes d'armes** — `DTIC_AD1046519` (2017), `DTIC_ADA371943` (1999), `DTIC_ADA341017`
  (1997), mirés sur Internet Archive en collection `dticarchive`. **État d'accès : items
  publics, restriction non vérifiée individuellement, non ouverts.** Le motif de frontière est
  écrit : l'objet y est le dimensionnement d'un dispositif, pas le principe ;
- [`corpus/map/human-factors.scouting.md`](map/human-factors.scouting.md) lui consigne
  **Delatour, Laclemence, Calcei & Mazri (2014/2015)**, sur le modèle canonique d'un système
  de gestion de la sécurité industrielle, rangé ici parce que son objet est le système et non
  l'humain dans le système. **État d'accès constaté et négatif** : deux notices HAL
  (`hal-02271544`, `hal-02953423`), **aucune ne porte de fichier déposé ni de DOI** — notice
  seule, texte non atteignable par cette voie. Ce legs-là est déjà à moitié dépensé, et c'est
  ce qui le rend utile : il dit où ne pas retourner.

**À quoi s'ajoute une voie d'accès, et elle vaut ici plus que pour tout autre domaine.** Le lot
du 23 août a établi que la collection `dticarchive` d'Internet Archive sert sans restriction des
rapports techniques ONR, ARPA et RAND dont la publication en revue est fermée ; deux cartes de
`decision-science` en viennent. Les trois rapports légués relèvent exactement de ce fonds, et
la recherche opérationnelle d'après-guerre — dont ce domaine hérite pour une large part — s'est
écrite dans ce type de littérature grise avant de passer en revue.

**Deux cartographies se sont en revanche déclarées sans rien pour lui, et les deux qualifient
leur propre silence.** `systems-thinking` et `decision-science` écrivent toutes deux que leur
balayage n'a rien cherché de ciblé vers ce domaine : **c'est un vide de méthode, pas un
résultat sur le champ.** Ce silence ne se lit pas comme le vide déclaré qu'ont su établir
`human-factors` et `cybernetics` après un balayage entier.

Ce legs ne dispense d'aucune étape : le périmètre s'écrit ici avant que le balayage reprenne,
et il dispense seulement de chercher ce qui a déjà été trouvé.

## Le périmètre est la discipline

> **Operations Management** — l'étude du **comportement d'un système qui produit** : comment
> une capacité, une file, un stock et un délai se déterminent les uns les autres, ce que la
> variabilité leur fait, et par quelles décisions de conception ou de pilotage on agit dessus.

Le domaine ne porte pas sur le principe par lequel un système corrige son écart, qui est en
cybernétique ; ni sur le comportement dans le temps qu'une structure de boucles engendre, qui
est en systems thinking ; ni sur l'opération de choix de celui qui arbitre, qui est en science
de la décision. Il porte sur **le système de production ou de service comme objet de gestion** :
ce qu'il rend, à quel délai, à quel niveau d'encours, et ce qui arrive à ces trois grandeurs
quand la demande, la durée des opérations ou la disponibilité des ressources ne sont pas
constantes.

Le champ a une particularité qu'il faut tenir dès l'ouverture, et elle est symétrique de celle
de `decision-science` : **il est écrit par deux traditions qui ne se citent pas.** Une souche
d'ingénierie et de recherche opérationnelle, mathématisée, qui modélise files, stocks et
ordonnancements et cherche des propriétés démontrables ; une souche de gestion de la production
et de terrain, qui part d'ateliers réels et énonce des principes de conduite. Un balayage qui
ne rapporterait que la première rendrait un domaine sans ses praticiens, et l'inverse un
domaine sans ses résultats. **La couche francophone en ajoute une troisième**, la gestion
industrielle et l'école de la productique, qui ne remontera d'aucune base anglophone.

## Points d'entrée

Aucun auteur n'est retenu d'avance, et ce domaine en a plus besoin que les précédents : ses
noms les plus disponibles de mémoire sont des **noms de méthodes commerciales** — des sigles,
des systèmes de production baptisés, des programmes de certification — dont la littérature de
conseil a produit plus de pages que la recherche. Ce qui se balaie, ce sont des
**littératures** :

- la théorie des files d'attente appliquée à la production et au service : ce que l'attente
  coûte, et ce qui la fait croître avant que la capacité soit saturée ;
- la relation entre encours, débit et délai, et les lois qui la contraignent quel que soit le
  détail de l'atelier ;
- la variabilité comme grandeur de gestion : d'où elle vient, comment elle se propage le long
  d'une chaîne, et ce qu'on lui oppose — stock, capacité, ou temps ;
- les stocks et leur dimensionnement : ce qu'un lot économique suppose, et ce qui arrive quand
  ces suppositions tombent ;
- l'ordonnancement et l'affectation comme problèmes de décision structurés, quand le texte
  porte sur la structure du problème et non sur la performance d'un algorithme ;
- les systèmes de production à flux tiré et la conduite par le juste-à-temps, pris par le
  mécanisme exposé et jamais par le récit d'entreprise ;
- la contrainte et le goulot comme principe de conduite d'un système entier ;
- la qualité, la fiabilité et la maintenance **au sens de l'ingénieur** — maîtrise statistique
  d'un procédé, sûreté de fonctionnement, disponibilité — que trois périmètres ouverts ont
  explicitement renvoyés ici ;
- la conception des systèmes de service, où le client est dans le système et où la capacité ne
  se stocke pas ;
- **la couche francophone, cherchée en parallèle et non après coup** : gestion industrielle,
  productique, génie industriel, logistique. Persée, HAL, Cairn, OpenEdition Books, theses.fr.

## Le test d'entrée

La question n'est pas « est-ce de l'*operations management* ? » : l'étiquette est un intitulé
d'enseignement qui recouvre des travaux de mathématiciens, d'ingénieurs, d'économistes et de
gestionnaires qui ne se reconnaissaient pas dans un même champ. La question est :

> **Ce travail éclaire-t-il le comportement d'un système qui produit, sous l'angle de ce
> qu'on peut y concevoir ou y piloter ?**

Trois conditions cumulatives :

1. il porte sur **le système de production ou de service lui-même** — sa capacité, ses files,
   ses stocks, ses délais, sa variabilité, ou la décision de conception ou de conduite qui les
   fixe — et non sur un principe général dont un atelier ne serait que l'illustration ;
2. il est **rattachable à un auteur identifié**, et cette attribution est documentable ;
3. il est **enseignable** : un lecteur non spécialiste doit pouvoir reconnaître le mécanisme
   décrit dans une file d'attente, un délai ou un encours qu'il a lui-même sous les yeux.

## Hors périmètre — rejet direct

- **Le mot « flux », « processus » ou « performance » employé sans mécanisme identifiable.**
  C'est le rejet le plus fréquent à prévoir, et il se tranche sans état d'âme :
  `corpus/rejected/`, `rejection_reason: "OUT_OF_SCOPE"`, jamais une mise en attente. Un
  candidat gris non tranché revient toujours par une autre porte.
- **La littérature de méthode et de certification** : manuels de déploiement, guides de
  démarche, référentiels, contenus de formation à un système de production baptisé. Un texte
  n'entre que s'il expose un mécanisme et l'établit ; il n'entre jamais par la notoriété de la
  méthode qu'il sert.
- **Le récit d'entreprise et l'étude de cas promotionnelle**, y compris écrits par un
  praticien du champ : l'objet y est la réussite d'une firme, pas le comportement d'un système.
- **La recherche opérationnelle prise comme branche des mathématiques** : preuves de
  complexité, comparaison de performances d'algorithmes, théorèmes d'optimisation. Elle entre
  par ce qu'elle fait comprendre d'un système qui produit, jamais par ses résultats propres.
- **La chaîne logistique comme objet économique ou géopolitique** : coûts de transaction,
  délocalisation, souveraineté industrielle. L'objet y est le marché ou l'État, pas le système
  de production.
- **Le *lean* comme doctrine de management** appliqué à des activités qui ne produisent rien
  de dénombrable. C'est un fait de réception, considérable, et ce n'est pas un critère
  d'entrée.

## Les frontières, tranchées à l'avance

**Quatre des six frontières de ce domaine ont déjà été tranchées depuis l'autre côté**, ce
qu'aucun domaine ouvert avant lui n'avait connu. Elles sont reprises telles quelles, et non
rediscutées : un périmètre qui rouvrirait une frontière que son voisin a fermée rendrait
inutile le travail que ce voisin a fait pour lui.

### Avec `cybernetics`, ouvert — la frontière décisive, et déjà tranchée depuis l'autre côté

`cybernetics` écrit : « Files d'attente, capacité, stocks et pilotage de production » relèvent
d'ici, **en angle mort et jamais en rejet**. Et il ajoute l'avertissement qui fait de cette
frontière la plus coûteuse des six : **« la recherche opérationnelle demande ici une attention
particulière — plusieurs auteurs du champ en viennent, et c'est le texte qui tranche, pas le
parcours de celui qui l'a écrit. »**

La coupure retenue, et elle ne se rouvre pas :

- le texte expose **le mécanisme par lequel un système corrige son écart et se maintient** — la
  boucle, la variété, la viabilité, pris comme principe → `cybernetics` ;
- le texte expose **ce que rend un système qui produit** — combien, en combien de temps, à quel
  encours — et ce qu'on y décide → ici.

Un même auteur peut tomber des deux côtés selon le texte, et c'est précisément ce que
l'avertissement annonce. Les trois rapports du Department of Defense qui sont son legs en sont
l'exemple : ils appliquent la loi d'Ashby, et ils sont ici parce que leur objet est le
dimensionnement d'un dispositif d'acquisition, pas la loi.

### Avec `systems-thinking`, ouvert — déjà tranchée depuis l'autre côté

`systems-thinking` écrit que relèvent d'ici « la conduite des flux, des stocks et des files
comme **problème de gestion** — dimensionner, ordonnancer, arbitrer un coût ». La coupure est
donc celle-ci :

- le texte porte sur **le comportement qu'une structure de boucles engendre dans le temps** —
  contre-intuition, dépassement, effet de levier — ou sur le modèle qui permet de le voir →
  `systems-thinking` ;
- le texte porte sur **une grandeur qu'on dimensionne ou qu'on arbitre** → ici.

Le cas limite est connu d'avance et il sera fréquent : la dynamique des systèmes s'est
constituée sur des modèles de chaînes de distribution, et ses textes fondateurs parlent de
stocks, de délais et de commandes. **Le partage ne se fait pas sur le vocabulaire mais sur la
question posée** : « pourquoi le système se comporte-t-il ainsi ? » est chez le voisin ;
« combien faut-il en tenir ? » est ici.

### Avec `human-factors`, ouvert — déjà tranchée depuis l'autre côté

`human-factors` écrit : « Fiabilité industrielle, maintenance, qualité, sûreté de
fonctionnement au sens de l'ingénieur : angles morts. **Ici, l'objet est l'humain dans le
système, pas le système.** » Ces quatre littératures relèvent donc d'ici, et elles y sont
inscrites en points d'entrée. La réciproque tient sans reste : ce que l'opérateur perçoit,
comprend, anticipe ou manque reste là-bas, quel que soit l'atelier où il se tient.

### Avec `decision-science`, ouvert — déjà tranchée depuis l'autre côté

`decision-science` écrit que relèvent d'ici « l'ordonnancement, le dimensionnement et
l'arbitrage de coût comme **problème de gestion**, quand la méthode vise à produire un plan et
non à éclairer un choix ». La coupure est donc dans la finalité de la méthode, pas dans son
appareil : un modèle qui rend un plan est ici ; un modèle qui rend un arbitrage instruit à
celui qui décide est là-bas. Une méthode multicritère reste chez le voisin même appliquée à un
atelier.

### Avec `activity-ergonomics`, ouvert

Un poste, une cadence et un temps alloué se décrivent des deux côtés, et le partage est net :
**ce que le système impose** — la cadence, le lot, l'attente que la file produit — est ici ;
**ce que quelqu'un fait réellement pour tenir la tâche malgré cela**, et ce que cela lui coûte,
est là-bas. Un texte sur le temps de cycle est ici ; le même atelier vu par la régulation que
l'opératrice y opère est chez le voisin. `organizational-sociology` prend, lui, ce qui porte
sur la règle, le pouvoir ou la structure de l'atelier plutôt que sur son débit.

### Avec `measurement-theory`, ouvert

Un indicateur de production traverse les deux. La règle du corpus s'applique sans amendement :
le concept porte sur **l'indicateur lui-même** — ce qu'il saisit, ce qu'il omet, ce que sa
seule existence provoque → `measurement-theory` ; le concept porte sur **la grandeur mesurée
et son comportement** → ici. Le taux de rendement d'un équipement pris comme grandeur physique
d'un atelier est ici ; le même taux pris comme cible qui déforme la conduite est chez le
voisin, où `mesure-devenue-cible` et `loi-de-campbell` sont déjà instruites.

### Avec trois domaines fermés : `sociology-of-work`, `work-psychology`, `behavioral-economics`

Trois domaines déclarés que ce champ touche et qui ne sont pas ouverts. Un candidat mal placé
se **consigne en angle mort de la cartographie**, jamais en rejet : son objet n'est pas hors
sujet, il relève d'un voisin fermé. C'est la règle qui a doté ce domaine de son propre stock
d'entrée, et elle se rend ici — **avec une obligation que ce passage doit à ses trois
successeurs** : ces trois domaines sont les derniers, ils n'ont aujourd'hui aucun stock, et
deux cartographies ont déjà avoué n'avoir rien cherché pour eux. **Ce balayage-ci doit les
chercher de façon ciblée**, et écrire ce qu'il trouve ou ce qu'il a vérifié vide.

- vers `sociology-of-work` : la division du travail, la qualification et le conflit dans
  l'atelier pris comme **rapport social** — l'organisation scientifique du travail vue par ce
  qu'elle fait au métier, et non par le temps de cycle qu'elle règle ;
- vers `work-psychology` : la cadence, la répétitivité ou la charge prises comme **fait
  psychique** — monotonie, satisfaction, stress ;
- vers `behavioral-economics` : le comportement de commande et de stockage pris comme **fait
  économique**, avec ses conséquences agrégées sur un marché.

## L'accès — ce que ce domaine impose

Trois constats à tenir pour acquis avant le premier balayage, tous hérités et deux d'entre eux
déjà vérifiés par les cartographies voisines :

- **la littérature grise est ici une voie principale, et non un recours.** La collection
  `dticarchive` d'Internet Archive sert sans restriction des rapports ONR, ARPA et RAND dont la
  publication en revue est fermée ; c'est la voie d'accès la plus rentable identifiée depuis
  OpenEdition Books, et la recherche opérationnelle d'après-guerre s'y est écrite. Un `is_oa:
  false` d'Unpaywall ne clôt donc rien : **la recherche de rapport technique fait partie du
  balayage, pas de la reprise** ;
- **les textes vivants du champ sont chez des éditeurs actifs, et ses manuels sont des produits
  commerciaux toujours exploités.** L'ancienneté n'ouvre rien par elle-même : un texte présumé
  libre se vérifie sur la source qui le sert, sinon il est fermé. **Une autorisation d'ayant
  droit se constate ; elle ne se déduit ni de l'âge du texte ni de l'absence de restriction
  d'emprunt** ;
- **une réédition n'est pas l'original, et ce champ réédite plus que les autres** : ses textes
  fondateurs circulent en manuels successivement révisés, en traductions et en chapitres de
  recueils. Un verbatim se localise sur l'exemplaire réellement ouvert, jamais sur l'édition
  d'origine qu'on n'a pas vue.

La règle d'accès ne change pas :

> **Aucun agent ne contourne un contrôle d'accès.** Face à un défi anti-robot, à un mur de
> connexion, à un prêt numérique ou à une restriction d'emprunt, on essaie une autre voie
> légitime. **Un texte qu'on ne peut pas ouvrir légitimement est un texte qu'on n'a pas
> ouvert** : on le dit, et on ne conclut pas au verbatim.

## Thèmes

**Aucun thème déclaré à l'ouverture.** Ils se déclarent après le contrôle aveugle des cartes du
premier lot, et non après leur rédaction ni d'après la proposition de la cartographie. Un thème
sans carte validée ne se déclare pas : le dépôt en porte déjà deux qui affichent une page vide,
et c'est deux de trop.

---

# Domaine ouvert — `work-psychology`

Ouvert le 26 août 2026, au passage 04 de la routine nocturne. Neuvième domaine instruit, et
**le premier des trois derniers**, tous de la famille « Comprendre les humains et les
organisations ».

**Ce domaine part avec le legs le plus maigre du dépôt, et c'est un résultat plutôt qu'un
oubli.** Trois cartographies l'ont explicitement balayé et **les trois se déclarent vides pour
lui**, en disant pourquoi :

- [`corpus/map/human-factors.scouting.md`](map/human-factors.scouting.md) écrit que « ni le
  stress, ni l'épuisement professionnel, ni la motivation n'ont été le sujet spontané d'aucune
  des recherches menées », les mots-clés de son périmètre ne recoupant pas naturellement ceux
  d'ici. Elle lui consigne **un seul cas de frontière, et elle le tranche contre lui** :
  Mackworth 1948 sur la vigilance reste du côté `human-factors`, la dégradation d'une ressource
  attentionnelle pendant une tâche de surveillance n'étant pas un état affectif ou motivationnel
  durable. **Ce texte n'est donc pas à réclamer ici** ;
- [`corpus/map/cybernetics.scouting.md`](map/cybernetics.scouting.md) se déclare vide pour lui
  dans les mêmes termes, et pour la même raison de vocabulaire ;
- [`corpus/map/operations-management.scouting.md`](map/operations-management.scouting.md) lui a
  consacré la requête ciblée que son périmètre lui imposait, et **rapporte un résultat non
  concluant qu'elle refuse de maquiller** : le classique attendu du champ, Walker & Guest,
  *The Man on the Assembly Line* (1952), n'est pas remonté, et elle écrit « je ne porte aucun
  titre de mémoire en candidat, faute d'avoir vérifié son accès ». Statut légué : **non
  concluant**, à retenter avec une base bibliographique structurée.

**Le legs n'est donc pas un stock, c'est une carte des impasses**, et elle a de la valeur à ce
titre : elle dit que ce domaine ne s'ouvrira pas par un texte tombé d'un voisin, mais par un
balayage entier.

## Le périmètre est la discipline

> **Psychologie du travail** — l'étude de **ce que le travail fait à celui qui l'exerce, et de
> ce qui l'y engage ou l'en détourne** : la satisfaction, la motivation, l'implication, la
> monotonie, le stress et l'usure, pris comme états d'une personne et rapportés aux propriétés
> de son emploi.

Le domaine ne porte pas sur ce que l'opérateur **fait** pour tenir sa tâche malgré les
conditions, qui est en ergonomie de l'activité ; ni sur ce qu'il **perçoit, comprend ou
manque**, qui est en human factors ; ni sur le **rapport social** dans lequel son travail
l'inscrit, qui sera en sociologie du travail. Il porte sur **la personne au travail comme
porteuse d'états durables** — content ou non, engagé ou non, usé ou non — et sur les propriétés
de la situation d'emploi auxquelles ces états se rapportent.

La coupure décisive, héritée de `human-factors` et reprise ici telle quelle : **ce qui porte sur
un état affectif ou motivationnel durable est ici ; ce qui porte sur une ressource cognitive
engagée dans une tâche est là-bas.** Elle a été écrite depuis l'autre côté et elle ne se rouvre
pas.

Le champ a une particularité qu'il faut tenir dès l'ouverture : **il mesure ce dont il parle.**
L'essentiel de sa littérature primaire est faite d'instruments — questionnaires, échelles,
inventaires — et d'articles qui les construisent et les valident. Cela crée un risque propre au
domaine, et il faut le nommer avant le balayage : **un instrument n'est pas un concept.** Ce qui
s'instruit ici, c'est la thèse que l'instrument sert à établir, jamais l'instrument pour
lui-même. Une carte sur un questionnaire serait une carte sur un outil de recherche, et le
lecteur n'a rien à en faire.

## Points d'entrée

Aucun auteur n'est retenu d'avance, et ce domaine en a un besoin particulier : ses noms les plus
disponibles de mémoire sont ceux d'une **vulgarisation managériale** qui a plus publié que la
recherche, et dont les formules circulent sans leur texte. Ce qui se balaie, ce sont des
**littératures** :

- la satisfaction au travail : ce qu'elle est, ce qui la prédit, et pourquoi elle se laisse si
  mal rapporter à une cause unique ;
- la motivation au travail et ce qui la distingue de la satisfaction, y compris la question de
  savoir si une récompense extérieure ajoute ou retranche à l'engagement ;
- **les propriétés de l'emploi qui font la différence** : variété, identité et signification de
  la tâche, autonomie, retour d'information, et le mécanisme par lequel elles agiraient ;
- la monotonie et la répétitivité prises comme fait psychique, que le périmètre
  d'`operations-management` a explicitement renvoyées ici ;
- les exigences du poste et la latitude décisionnelle, et ce que leur combinaison produit ;
- le stress professionnel, l'usure et l'épuisement, pris par le mécanisme exposé et jamais par
  le récit de cas ;
- l'implication, l'attachement à l'emploi et le départ volontaire, quand l'objet est l'état de
  la personne et non le taux de rotation comme grandeur de gestion ;
- la sélection et l'évaluation professionnelles, y compris la psychotechnique qui est l'origine
  historique du champ en France ;
- **la couche francophone, cherchée en parallèle et non après coup** : psychologie du travail,
  psychopathologie du travail, psychotechnique, conditions de travail. Persée, HAL, Cairn,
  OpenEdition Books, theses.fr.

## Le test d'entrée

La question n'est pas « est-ce de la psychologie du travail ? » : l'étiquette recouvre en France
une discipline instituée, et dans le monde anglophone un découpage qui va de la psychométrie au
comportement organisationnel. La question est :

> **Ce travail éclaire-t-il un état durable de la personne au travail, rapporté à ce que son
> emploi a de particulier ?**

Trois conditions cumulatives :

1. il porte sur **un état de la personne** — satisfaction, motivation, implication, monotonie
   ressentie, tension, usure — et non sur une opération cognitive qu'elle exécute, ni sur la
   structure qui l'emploie prise pour elle-même ;
2. il est **rattachable à un auteur identifié**, et cette attribution est documentable ;
3. il est **enseignable** : un lecteur non spécialiste doit pouvoir reconnaître ce dont il
   s'agit dans un emploi qu'il a lui-même occupé ou observé.

## Hors périmètre — rejet direct

- **Le mot « motivation », « bien-être » ou « épanouissement » employé sans mécanisme
  identifiable ni auteur rattachable.** C'est le rejet le plus fréquent à prévoir dans ce
  domaine, plus encore que dans les précédents, parce que la littérature de conseil en a fait
  son fonds de commerce. Il se tranche sans état d'âme : `corpus/rejected/`,
  `rejection_reason: "OUT_OF_SCOPE"`, jamais une mise en attente. Un candidat gris non tranché
  revient toujours par une autre porte.
- **Un instrument présenté pour lui-même** — une échelle, un inventaire, un questionnaire —
  sans la thèse qu'il sert à établir.
- **La psychologie clinique ou la psychiatrie prises hors du travail**, même quand le patient
  travaille. L'objet doit être le rapport entre l'état et l'emploi.
- **La physiologie et la biologie de la fatigue** prises comme fait organique. La cartographie
  de `cybernetics` a déjà tranché un cas de cette nature en rejet direct pour objet biologique,
  et la décision vaut ici.
- **Le conseil en organisation et la littérature de management** qui reprennent ces mots sans
  remonter à un travail de recherche.

## Les frontières, tranchées à l'avance

Elles se tranchent ici et maintenant, avant la cartographie, parce qu'une frontière arbitrée en
cours de lot est arbitrée par ce que le lot contient. Deux régimes distincts :

- **avec un domaine ouvert**, un candidat mal placé part chez le voisin ou ne s'instruit pas ;
  il ne se réinstruit jamais en double, le validateur refuse le doublon d'`id` comme de `slug` ;
- **avec un domaine encore fermé**, un candidat ne part pas en rejet : il se **consigne dans les
  angles morts** de la cartographie. Ce domaine doit cette consigne à ses deux successeurs,
  `sociology-of-work` et `behavioral-economics`, qui sont les derniers et n'ont aucun stock.

### Avec `activity-ergonomics` et `human-factors`, ouverts — la frontière décisive

C'est la seule qui puisse coûter cher, et pour une raison matérielle : **la revue francophone
qui porte ce domaine porte aussi les deux autres.** Le *Bulletin de psychologie* publie dans un
même numéro des ergonomes de l'activité, des psychologues cognitifs et des psychologues du
travail, et Leplat a écrit des trois côtés. La frontière ne se tranche donc ni par la revue, ni
par le numéro, ni par l'auteur, mais par **ce dont le texte parle** :

| le texte porte sur | domaine |
|---|---|
| ce que l'opérateur **fait** pour tenir la tâche, et ce que cela lui coûte en cours d'activité | `activity-ergonomics` |
| ce que l'opérateur **perçoit, comprend, anticipe ou manque** | `human-factors` |
| ce que l'opérateur **éprouve durablement** de son emploi, et ce qui l'y engage | `work-psychology` |
| l'écart tâche prescrite / travail réel, la régulation, les marges de manœuvre | `activity-ergonomics` |
| l'erreur, la fiabilité, la charge mesurée, l'automatisation | `human-factors` |
| la satisfaction, la motivation, l'implication, la monotonie, l'usure | `work-psychology` |

Un cas limite mérite d'être nommé parce qu'il se présentera : **la charge de travail**, déjà
partagée entre les deux domaines ouverts. La règle existante ne bouge pas — la charge comme
compromis que l'opérateur arbitre est en ergonomie de l'activité, la charge comme grandeur qu'on
définit et qu'on mesure est en human factors. **Ce domaine n'en prend que ce qui devient un état
durable** : la tension, l'usure, l'épuisement, c'est-à-dire ce qui reste quand la tâche est
finie.

### Avec `organizational-sociology`, ouvert

Ce qui porte sur la **règle, le pouvoir, la structure ou la décision** d'une organisation est
chez le voisin, même quand le texte parle de ce que les gens y ressentent. Ce qui porte sur
**l'état de la personne**, même quand le texte remonte ensuite à l'organisation qui l'a produit,
est ici. Un cas est déjà tranché de fait et il faut le respecter : `exit-voice-loyalty` et le
thème `reaction-insatisfaction` sont instruits en sociologie des organisations, et
l'insatisfaction y est prise comme **déclencheur d'une conduite** dans une organisation. Ce
domaine ne réinstruit pas ce concept ; il peut instruire l'insatisfaction comme **état rapporté
aux propriétés de l'emploi**, ce qui est un autre objet.

### Avec `measurement-theory`, ouvert

Un questionnaire de satisfaction n'entre pas en théorie de la mesure du seul fait qu'il mesure.
Il y entrerait si l'objet du texte était **l'effet en retour de la mesure sur le mesuré**. Tant
que l'objet est ce que l'instrument saisit d'un état et ce qu'il en manque, c'est ici, sous la
réserve déjà écrite : un instrument ne s'instruit pas pour lui-même.

### Avec `decision-science`, ouvert

Le périmètre de `decision-science` a écrit cette frontière depuis l'autre côté et elle se rend
ici telle quelle : **la décision comme charge, source de stress ou objet de satisfaction est
ici** ; la théorie du choix, les heuristiques et les biais de jugement sont là-bas.

### Avec `operations-management`, ouvert

Le périmètre d'`operations-management` a écrit cette frontière depuis l'autre côté et elle se
rend ici telle quelle : **la cadence, la répétitivité et la charge prises comme fait psychique
sont ici** ; le temps de cycle, l'ordonnancement et le dimensionnement sont là-bas. C'est cette
frontière qui donne au domaine son entrée la plus canonique, le travail à la chaîne.

### Avec `cybernetics` et `systems-thinking`, ouverts

Sans objet prévisible. Les deux cartographies se sont déclarées vides pour ce domaine et la
réciproque devrait valoir : un texte de psychologie du travail qui emploie le mot « système »
n'instruit pas un concept systémique. Le cas à surveiller est celui des **systèmes
socio-techniques**, dont ce champ a hérité un vocabulaire : la dette se signale dans
l'attribution, elle ne s'instruit pas ici.

### Avec `sociology-of-work`, fermé et suivant dans l'ordre

**C'est la frontière la plus coûteuse à tenir de toutes celles de ce domaine**, et elle mérite
d'être écrite avec soin parce que le domaine voisin s'ouvrira juste après et lira cette section.
Les deux champs partagent leurs terrains, leurs revues francophones et souvent leurs enquêtes :
la revue *Sociologie du travail* publie sur la satisfaction, et le *Bulletin de psychologie* sur
les rapports collectifs. La coupure retenue est celle-ci :

- ce qui prend l'état de la personne comme **rapporté aux propriétés de son emploi** — ce que
  cette tâche, ce salaire, cet horaire lui font — est **ici** ;
- ce qui prend le même état comme **rapporté à sa position sociale** — sa classe, sa
  qualification, son collectif, son rapport au patron — est **là-bas**.

Un candidat de la seconde veine se consigne en angle mort, jamais en rejet. Et **ce balayage-ci
doit chercher pour lui de façon ciblée**, comme `operations-management` l'a fait pour ce
domaine-ci : c'est une dette entre passages, et elle se paie.

### Avec `behavioral-economics`, fermé

Ce qui porte sur **le comportement économique et ses conséquences agrégées** — préférences
temporelles, incitations prises comme dispositif économique, effets de marché — se consigne en
angle mort. La rémunération est le cas partagé : le **salaire comme source de satisfaction ou
d'insatisfaction** est ici ; le **salaire comme incitation dont on mesure l'effet sur un
marché** est là-bas.

## L'accès — ce que ce domaine impose, et il impose plus que les précédents

Trois constats, dont le premier est une prévision qu'il faut faire avant le balayage pour ne pas
la prendre pour un échec :

- **le canon anglophone de ce champ est fait d'ouvrages, et il restera fermé.** Les deux textes
  que n'importe qui nommerait, Herzberg, *The Motivation to Work* (1959), et Walker & Guest,
  *The Man on the Assembly Line* (1952), existent sur Internet Archive **en collection
  `internetarchivebooks` avec restriction d'emprunt**, vérifié le 26 août 2026 sur les items
  `motivationtowork0000unse` et `manonassemblylin0000unse`. **Un prêt numérique ne s'emprunte
  pas**, et ces textes sont donc des textes non ouverts. Cela s'écrit dans les angles morts, pas
  dans les cartes ;
- **la littérature grise sauve une partie du canon, et elle est ici la voie principale.** La
  collection `dticarchive` d'Internet Archive, établie comme voie rentable par le lot du
  23 août, sert des rapports techniques universitaires produits sous contrat de l'Office of
  Naval Research dont la publication en revue est fermée. **La psychologie du travail américaine
  des années 1960 et 1970 s'est écrite dans ce fonds**, et `ERIC` en est le doublon partiel. Un
  `is_oa: false` d'Unpaywall ne clôt donc rien tant que le rapport n'a pas été cherché ;
- **la couche francophone est ici plus riche que la couche anglophone ouverte, ce qui est
  inhabituel dans ce corpus.** Persée sert le *Bulletin de psychologie* en texte intégral par
  son endpoint page, et la discipline y a publié ses numéros de synthèse. C'est une inversion à
  exploiter, et non une compensation.

Et la règle qui ne se négocie dans aucun domaine, rappelée ici parce que la restriction
d'emprunt s'y présentera plus souvent qu'ailleurs :

> **Aucun agent ne contourne un contrôle d'accès.** Face à un défi anti-robot, à un mur de
> connexion, à un prêt numérique ou à une restriction d'emprunt, on essaie une autre voie
> légitime ; on ne résout pas le défi, on ne se présente pas sous l'identité d'un navigateur,
> on n'emprunte pas ce qui demande un compte. **Un texte qu'on ne peut pas ouvrir légitimement
> est un texte qu'on n'a pas ouvert** : on le dit, et on ne conclut pas au verbatim.

## Thèmes

**Aucun thème déclaré à l'ouverture.** Ils se déclarent après le contrôle aveugle des cartes du
premier lot, et non après leur rédaction ni d'après la proposition de la cartographie. Un thème
sans carte validée ne se déclare pas : le dépôt en porte déjà deux qui affichent une page vide,
et c'est deux de trop.

---

# Domaine ouvert — `sociology-of-work`

Ouvert le 27 août 2026, **dixième domaine sur onze**, deuxième des trois derniers de la famille
« Comprendre les humains et les organisations ». Il ne reste ensuite que
`behavioral-economics`.

## Ce dont ce domaine hérite, avant toute recherche

Quatre passages ont écrit quelque chose pour lui depuis l'autre côté d'une frontière, et **rien
de cela ne se recherche à nouveau.** Le legs se lit avant le balayage, il ne se redécouvre pas :

- **Un texte primaire avec accès vérifié positif**, et c'est le seul du legs. Taylor, F. W.,
  *The Principles of Scientific Management*, tirage 1919, exemplaire Cornell University Library,
  item Internet Archive `cu31924085713331`, collections `cornell` et `americana`,
  `access-restricted-item` **absent**, aucune restriction de prêt constatée. Métadonnées
  vérifiées le 26 août 2026 par `https://archive.org/metadata/cu31924085713331` au passage
  `work-psychology`, qui a fait la requête que le périmètre lui imposait. À ne pas rechercher :
  l'identifiant est exact.
- **Le pendant critique attendu, nommé et jamais cherché.** Braverman, H., *Labor and Monopoly
  Capital* (1974), sur la déqualification. Deux passages l'ont nommé, aucun n'a vérifié son
  accès. C'est un vide de méthode, pas un vide vérifié : à traiter comme une recherche à faire,
  pas comme une impasse constatée.
- **Un candidat consigné en angle mort depuis `work-psychology`**, avec sa raison écrite :
  Grisez, J. (1980), « Emploi et comportements de mobilité », *Bulletin de psychologie* n° 344,
  p. 417-420, DOI `10.3406/bupsy.1980.11729`, page 417 lue en OCR, HTTP 200. L'auteur y met
  lui-même en garde contre le « psychologisme » et déplace l'explication vers les structures du
  marché du travail, segmentation et filières, plutôt que vers un trait individuel. Il a été
  écarté de la psychologie du travail **pour appartenir ici**, en application de la frontière
  écrite d'avance.
- **Un gisement à moitié dépensé**, et il est francophone : le numéro 344 du *Bulletin de
  psychologie*, 1980, servi en texte intégral par l'endpoint page de Persée. Le passage
  `work-psychology` en a tiré deux cartes, en a écarté cinq articles pour un motif écrit, et
  **n'a pas dépouillé le reste du numéro**. Grisez ci-dessus en vient.
- **Trois déclarations de vide, dont une seule est établie.** `cybernetics` s'est déclaré vide
  pour ce domaine après un balayage entier, et le motif rend le vide crédible : ses dix
  littératures ne recoupent pas celles-ci. `decision-science` s'est déclaré vide **sans avoir
  cherché**, et l'écrit ainsi. `operations-management` a cherché et n'a rien vérifié en accès.
  Un vide de méthode ne se lit pas comme un résultat sur le champ.

**Le legs n'est donc pas un stock : c'est un texte, un titre à chercher, un article à lire et un
numéro de revue à finir de dépouiller.** Ce domaine s'ouvre par un balayage entier, comme
`work-psychology` avant lui, mais il s'ouvre avec une porte d'entrée dont l'accès est vérifié,
ce que son prédécesseur n'avait pas.

## Le périmètre est la discipline

> **Sociologie du travail** — l'étude du **travail comme rapport social** : la division du
> travail et ce qu'elle fait au métier, la qualification et sa contestation, le collectif de
> travail, le conflit et la négociation, les carrières et les transformations de l'emploi.

Le domaine ne porte pas sur ce que le travail fait **éprouver** à celui qui l'exerce, qui est en
psychologie du travail ; ni sur ce que l'opérateur **fait** pour tenir sa tâche, qui est en
ergonomie de l'activité ; ni sur le fonctionnement de **l'organisation** prise comme structure
de règles et de pouvoir, qui est en sociologie des organisations. Il porte sur **la position
sociale que le travail assigne** — un métier, une qualification, un collectif, un rapport
d'emploi — et sur ce qui la fait, la défait et la conteste.

La coupure décisive est héritée de `work-psychology`, qui l'a écrite depuis l'autre côté en la
désignant comme « la frontière la plus coûteuse à tenir » de son domaine. Elle se rend ici telle
quelle et **elle ne se rouvre pas** :

> ce qui prend l'état de la personne comme **rapporté aux propriétés de son emploi** — ce que
> cette tâche, ce salaire, cet horaire lui font — est **là-bas** ; ce qui prend le même état
> comme **rapporté à sa position sociale** — sa classe, sa qualification, son collectif, son
> rapport au patron — est **ici**.

Le champ a une particularité qu'il faut tenir dès l'ouverture, et elle est l'inverse de celle de
son prédécesseur. La psychologie du travail **mesure ce dont elle parle**, et le risque y était
de prendre un instrument pour un concept. La sociologie du travail, elle, **enquête sur ce dont
elle parle** : sa littérature primaire est faite de monographies d'atelier, d'enquêtes de
terrain et d'entretiens. Le risque propre est donc symétrique et il faut le nommer avant le
balayage : **une monographie n'est pas un concept.** Ce qui s'instruit ici, c'est la thèse que
l'enquête établit et le mécanisme qu'elle rend visible, jamais le terrain pour lui-même. Une
carte sur une usine serait une carte sur un cas, et le lecteur n'a rien à en faire.

## Points d'entrée

Aucun auteur n'est retenu d'avance, et ce domaine s'en défie pour une raison qui lui est propre :
c'est un champ à **canon national**, et le canon francophone et le canon anglophone ne se
recouvrent pas. Nommer d'avance une liste reviendrait à choisir un des deux sans le dire. Ce qui
se balaie, ce sont des **littératures** :

- **la division du travail et la déqualification** : ce que l'organisation scientifique du
  travail fait au métier, la séparation de la conception et de l'exécution, et la controverse
  qu'elle a ouverte. C'est l'entrée que le legs ouvre déjà par un accès vérifié ;
- **la qualification** : ce qu'elle est, si elle tient à la personne ou au poste, et ce qui la
  fait reconnaître ou disparaître ;
- **le métier et le collectif de travail** comme forme sociale, ses règles propres et ce qui les
  tient ;
- **le conflit, la grève et la négociation** pris par le mécanisme, jamais par le récit
  d'événement ;
- **les carrières, la mobilité et la segmentation du marché du travail** : filières, marchés
  internes, ce qui trie les gens entre les emplois. Grisez 1980 est déjà ici ;
- **les transformations de l'emploi** : salariat, précarité, sous-traitance, travail
  indépendant, pris comme rapports d'emploi et non comme actualité économique ;
- **la sociologie des professions**, quand l'objet est la constitution d'un groupe professionnel
  et son monopole, et non la psychologie de ses membres ;
- **le genre au travail et la division sexuelle du travail**, que ce corpus a déjà croisée par
  l'ergonomie et qui a ici son objet propre ;
- **la couche francophone, cherchée en parallèle et non après coup** : c'est ici qu'elle pèse le
  plus lourd de tout le corpus, la sociologie du travail étant une discipline instituée en
  France avec sa revue éponyme. *Sociologie du travail*, *Revue française de sociologie*,
  *Travail et Emploi*, *Actes de la recherche en sciences sociales*, *Formation Emploi*. Persée,
  HAL, Cairn, OpenEdition Books, theses.fr.

## Le test d'entrée

La question n'est pas « est-ce de la sociologie ? » : le champ a été fait par des économistes,
des historiens et des ergonomes autant que par des sociologues, et l'étiquette recouvre en
France une discipline instituée que le monde anglophone découpe autrement, entre *industrial
sociology*, *labor process theory* et *sociology of occupations*. La question est :

> **Ce travail éclaire-t-il ce que le travail fait à la position sociale de celui qui
> l'exerce ?**

Trois conditions cumulatives :

1. il porte sur **un rapport social** — division du travail, qualification, métier, collectif,
   conflit, carrière, rapport d'emploi — et non sur un état intérieur de la personne, ni sur une
   opération qu'elle exécute, ni sur la structure qui l'emploie prise pour elle-même ;
2. il est **rattachable à un auteur identifié**, et cette attribution est documentable ;
3. il est **enseignable** : un lecteur non spécialiste doit pouvoir reconnaître ce dont il
   s'agit dans un emploi qu'il a lui-même occupé ou observé.

## Hors périmètre — rejet direct

- **Le récit d'un conflit social, d'une usine ou d'une profession, sans mécanisme
  transposable.** C'est le rejet le plus fréquent à prévoir dans ce domaine, comme le mot
  « motivation » l'était dans le précédent, et pour une raison symétrique : la richesse du
  terrain y tient lieu d'argument. Il se tranche sans état d'âme : `corpus/rejected/`,
  `rejection_reason: "OUT_OF_SCOPE"`, jamais une mise en attente. Un candidat gris non tranché
  revient toujours par une autre porte.
- **La théorie sociale générale** — les classes, l'État, le capital — quand le travail n'y est
  qu'une illustration parmi d'autres et non l'objet.
- **L'économie du travail prise comme modèle de marché** : offre, demande, élasticités,
  rendements de l'éducation. Ce qui porte sur le comportement économique et ses conséquences
  agrégées se consigne en angle mort vers `behavioral-economics`, qui est le dernier domaine
  fermé, et non en rejet.
- **L'actualité sociale, le droit du travail pris comme norme, la statistique publique commentée
  sans thèse.** Un rapport administratif n'est pas un texte primaire du champ.
- **La littérature syndicale et militante** qui reprend ces mots sans remonter à un travail de
  recherche, au même titre que la littérature de conseil est écartée ailleurs.

## Les frontières, tranchées à l'avance

Elles se tranchent ici et maintenant, avant la cartographie, parce qu'une frontière arbitrée en
cours de lot est arbitrée par ce que le lot contient. Deux régimes distincts :

- **avec un domaine ouvert**, un candidat mal placé part chez le voisin ou ne s'instruit pas ;
  il ne se réinstruit jamais en double, le validateur refuse le doublon d'`id` comme de `slug` ;
- **avec un domaine encore fermé**, un candidat ne part pas en rejet : il se **consigne dans les
  angles morts** de la cartographie. Ce domaine ne doit plus cette consigne qu'à un seul
  successeur, `behavioral-economics`, qui est le dernier et n'a **aucun stock ni aucun legs** —
  trois passages successifs ont écrit n'avoir rien cherché pour lui, ou n'avoir rien vérifié.
  **Ce balayage-ci est le dernier qui puisse lui payer cette dette**, et il la doit d'autant plus
  que son propre prédécesseur a laissé la sienne impayée faute de budget. Elle se paie tôt dans
  la nuit, pas avec ce qui reste.

### Avec `work-psychology`, ouvert depuis la veille — la frontière décisive

C'est la seule qui puisse coûter cher, et son coût est matériel autant que conceptuel : **les
deux domaines partagent leurs terrains, leurs enquêtes et leurs revues francophones.** La revue
*Sociologie du travail* publie sur la satisfaction, le *Bulletin de psychologie* publie sur les
rapports collectifs, et le numéro 344 dont ce domaine hérite est un numéro de psychologie du
travail dont un article relève d'ici. La frontière ne se tranche donc ni par la revue, ni par le
numéro, ni par l'auteur, mais par **ce à quoi le texte rapporte ce dont il parle** :

| le texte rapporte l'objet à | domaine |
|---|---|
| les propriétés de l'emploi occupé : cette tâche, ce salaire, cet horaire | `work-psychology` |
| la position sociale de celui qui l'occupe : classe, qualification, collectif, rapport au patron | `sociology-of-work` |
| la satisfaction, la motivation, l'implication, la monotonie ressentie, l'usure | `work-psychology` |
| la division du travail, le métier, le conflit, la carrière, le rapport d'emploi | `sociology-of-work` |

Deux cas limites méritent d'être nommés parce qu'ils se présenteront.

**Le travail à la chaîne** est l'entrée la plus canonique des deux domaines à la fois, et le
périmètre de `work-psychology` le dit lui-même. La règle ne bouge pas : la cadence et la
répétitivité prises comme **fait psychique** sont là-bas ; la même chaîne prise comme
**dépossession du métier** est ici. Le même terrain rendra donc deux cartes différentes, et ce
n'est pas un doublon tant que l'objet diffère.

**Le salaire** est partagé par trois. Le salaire comme source de satisfaction ou
d'insatisfaction est en psychologie du travail, où `seuil-d-insatisfaction-salariale` est déjà
instruit. Le salaire comme incitation dont on mesure l'effet sur un marché est en économie
comportementale, et se consigne en angle mort. Le salaire comme **enjeu d'un rapport de force et
mesure d'une qualification reconnue** est ici.

### Avec `organizational-sociology`, ouvert

Le voisin le plus proche par le nom, et la frontière se tranche par l'unité dont le texte parle.
Ce qui porte sur **une organisation** — sa règle, son pouvoir, sa structure, sa décision, son
apprentissage — est là-bas, même quand le texte décrit du travail. Ce qui porte sur **le
travail** — un métier, une qualification, un collectif, un rapport d'emploi — est ici, même
quand le texte décrit une entreprise.

Trois cas sont déjà tranchés de fait et se respectent sans se rouvrir : la règle de contrôle et
la règle autonome de Reynaud sont instruites en sociologie des organisations, et le fait que
Reynaud soit un sociologue du travail ne les déplace pas, l'objet étant la production de règles
dans une organisation ; `exit-voice-loyalty` et le thème `reaction-insatisfaction` y sont
également instruits ; et le thème `autorite-domination`, déclaré et sans carte, y appartient.
**Ce domaine ne réinstruit aucun des trois.**

### Avec `activity-ergonomics` et `human-factors`, ouverts

Sans difficulté prévisible sur l'objet, mais avec un recouvrement d'auteurs à surveiller : ce
corpus a déjà instruit en ergonomie de l'activité des textes sur le collectif de travail et sur
la division sexuelle du travail, et `travail-collectif-collectif-de-travail` est validé là-bas.
La règle qui s'applique est celle de l'unité : le collectif pris comme **ressource de
l'activité**, ce qui permet de tenir la tâche, est en ergonomie ; le collectif pris comme
**forme sociale**, ce qui fait tenir un métier et ses règles, est ici. Le doublon d'`id` est
refusé par le validateur, mais il faut d'abord ne pas l'écrire.

### Avec `measurement-theory`, ouvert

Une nomenclature de professions, une grille de classification, un indice de qualification
n'entrent pas en théorie de la mesure du seul fait qu'ils classent. Ils y entreraient si l'objet
du texte était **l'effet en retour de la classification sur le classé**, et le domaine voisin a
déjà instruit ce mécanisme. Tant que l'objet est le rapport social que la nomenclature
enregistre, c'est ici. Le cas est réel et non théorique : Desrosières est déjà instruit là-bas.

### Avec `operations-management`, ouvert

Le périmètre d'`operations-management` a écrit cette frontière depuis l'autre côté et elle se
rend ici telle quelle : **la division du travail, la qualification et le conflit dans l'atelier
pris comme rapport social sont ici** — l'organisation scientifique du travail vue par ce qu'elle
fait au métier ; le temps de cycle, l'ordonnancement et le dimensionnement qu'elle règle sont
là-bas.

### Avec `decision-science`, ouvert

Le périmètre de `decision-science` a écrit cette frontière depuis l'autre côté et elle se rend
ici telle quelle : **ce que la position sociale de celui qui décide fait à sa décision est
ici** ; le choix, le jugement et leurs écarts pris comme faits de raisonnement sont là-bas.

### Avec `cybernetics` et `systems-thinking`, ouverts

Sans objet prévisible, et c'est la seule des trois déclarations de vide du legs qui repose sur un
balayage entier plutôt que sur une absence de recherche. La réciproque vaut : un texte de
sociologie du travail qui emploie le mot « système » n'instruit pas un concept systémique. Le
cas à surveiller est celui des **systèmes socio-techniques**, dont ce champ a hérité un
vocabulaire par le Tavistock Institute, et dont la psychologie du travail a déjà consigné la
dette : elle se signale dans l'attribution, elle ne s'instruit pas ici.

### Avec `behavioral-economics`, fermé et dernier

Ce qui porte sur **le comportement économique et ses conséquences agrégées** — préférences,
incitations prises comme dispositif économique, effets de marché — se consigne en angle mort,
jamais en rejet. Le salaire est le cas partagé, et sa répartition est écrite plus haut.

## L'accès — ce que ce domaine impose

Trois constats à tenir pour acquis avant le premier balayage, et le premier est une prévision
qu'il faut faire maintenant pour ne pas la prendre pour un échec.

1. **Le canon anglophone de ce champ est en prêt numérique, et il n'y a pas de raison d'espérer
   autrement.** Braverman 1974, et la plupart des monographies d'atelier des années 1950 à 1980,
   sont des livres d'éditeurs commerciaux encore actifs. Le domaine précédent a payé ce constat
   sur Herzberg et sur Walker & Guest, et sa conclusion se reprend telle quelle : ce n'est pas à
   retenter, c'est à contourner par ce qui est réellement ouvert. Taylor 1911 est ouvert parce
   qu'il est de 1911 et parce qu'un exemplaire Cornell a été versé en `americana` — **c'est la
   raison de son accès, et non son ancienneté seule**.
2. **L'inversion francophone joue ici plus fort que partout ailleurs dans ce corpus.** Persée
   sert *Sociologie du travail* et la *Revue française de sociologie* en texte intégral par son
   endpoint page, et ces deux revues sont le cœur de la discipline, pas sa périphérie. C'est une
   inversion à exploiter d'emblée, et non une compensation à chercher quand l'anglophone a
   échoué.
3. **Un numéro de revue déjà ouvert coûte moins qu'un livre à trouver.** Le numéro 344 du
   *Bulletin de psychologie* est à moitié dépensé et sa route d'accès est établie. Deux pièges
   d'exemplaire payés par le passage précédent se transposent sans être repayés : une couche OCR
   peut être inexploitable pour citer, et le `page_numbers.json` d'Internet Archive est une
   inférence automatique et non une lecture, qui a déjà fait écrire une collation fausse à trois
   cartes.

Et la règle qui ne se négocie dans aucun domaine, rappelée ici parce que la restriction d'emprunt
s'y présentera aussi souvent que dans le précédent :

> **Aucun agent ne contourne un contrôle d'accès.** Face à un défi anti-robot, à un mur de
> connexion, à un prêt numérique ou à une restriction d'emprunt, on essaie une autre voie
> légitime ; on ne résout pas le défi, on ne se présente pas sous l'identité d'un navigateur,
> on n'emprunte pas ce qui demande un compte. **Un texte qu'on ne peut pas ouvrir légitimement
> est un texte qu'on n'a pas ouvert** : on le dit, et on ne conclut pas au verbatim.

Une autorisation d'ayant droit **se constate** : elle ne se déduit ni de l'âge du texte, ni de
l'absence de restriction d'emprunt affichée. Le cas de Taylor est réglé parce que les métadonnées
de l'item ont été lues, pas parce que le livre a cent quinze ans.

## Thèmes

**Aucun thème déclaré à l'ouverture.** Ils se déclarent après le contrôle aveugle des cartes du
premier lot, et non après leur rédaction ni d'après la proposition de la cartographie. Un thème
sans carte validée ne se déclare pas : le dépôt en porte déjà deux qui affichent une page vide,
et c'est deux de trop.

---

# Domaine ouvert — `behavioral-economics`

Ouvert le 28 août 2026, **onzième et dernier domaine sur onze**, dernier de la famille
« Comprendre les humains et les organisations ». Après lui, plus aucun domaine n'est fermé, et
ce fait change une règle du dépôt : **ce périmètre est le premier qui ne doive de dette à
personne.** Les dix sections qui précèdent ont toutes eu un successeur fermé à qui consigner un
candidat mal placé ; celle-ci n'en a pas. Un candidat qui n'est pas d'ici part désormais chez un
voisin ouvert, ou ne s'instruit pas. **La catégorie « angle mort vers un domaine fermé »
disparaît du corpus avec cette section.**

## Ce dont ce domaine hérite, avant toute recherche

Ce domaine a été le plus mal servi du corpus, et le dire est utile : **trois passages successifs
ont écrit n'avoir rien cherché pour lui, ou n'avoir rien vérifié.** La dette n'a été payée qu'au
quatrième, le 27 août 2026, par un balayage distinct doté de son propre budget précisément pour
qu'elle ne meure pas une cinquième fois du plafond d'un autre. **Rien de ce qui suit ne se
recherche à nouveau** : le legs se lit avant le balayage, il ne se redécouvre pas.

- **Quatre candidats francophones sur Persée, repérés le 27 août et vérifiés le 28.** Ils
  étaient à un seul appel de la vérification, et cet appel a été fait avant d'ouvrir ce
  périmètre : les quatre répondent `HTTP 200`, portent un DOI Persée propre et une pagination
  déclarée. Ce sont eux qui font que ce domaine n'ouvre pas sur une page blanche.
- **Un texte propre sur le fond dont la route légitime restait à trouver**, et elle ne s'est pas
  trouvée. Kahneman, Knetsch et Thaler (1991), « Anomalies: The Endowment Effect, Loss Aversion,
  and Status Quo Bias », *Journal of Economic Perspectives* 5(1), 193-206, DOI
  `10.1257/jep.5.1.193`. Le *JEP* est éditorialement en accès libre chez l'American Economic
  Association : le fond est propre, et c'est ce qui rendait la piste sérieuse. **La route de
  l'éditeur a été retentée le 28 août et elle est fermée par un filtrage anti-robot**, non par un
  paywall : la page d'article `www.aeaweb.org/articles?id=10.1257/jep.5.1.193` répond 200 et
  publie un lien de téléchargement, mais ce lien redirige vers `pubs.aeaweb.org`, qui rend
  **403**. Le filtre n'a pas été contourné et il ne doit pas l'être. **Ce texte est donc à
  traiter comme non ouvert**, jusqu'à ce qu'une autre voie légitime soit constatée.
- **Un texte à traiter comme fermé, et le motif est un motif de droits, pas d'accès.** Thaler
  (1980), « Toward a Positive Theory of Consumer Choice », *Journal of Economic Behavior &
  Organization* 1(1), 39-60, DOI `10.1016/0167-2681(80)90051-7`. Le PDF a été atteint en
  `HTTP 200`, mais sur le **miroir d'une page de cours universitaire**, qui n'est ni le site de
  l'éditeur, ni un dépôt institutionnel, ni le site de l'auteur ; la revue est une revue Elsevier
  sous abonnement dont l'édition officielle est derrière un paywall non ambigu. **Un code 200
  constate qu'un fichier est atteignable, pas qu'un ayant droit l'autorise.** Ne pas citer depuis
  ce miroir.
- **Un fondateur vérifié fermé.** Katona, G. (1951), *Psychological Analysis of Economic
  Behavior*, item Internet Archive `psychologicalana0000geor_l5v4`, `access-restricted-item:
  true`, dérivés en `LCP Encrypted PDF` marqués `private`. Prêt numérique contrôlé, non
  emprunté. Son *Psychological Economics* (1975), item `psychologicaleco00kato`, porte la même
  signature technique mais son champ d'accès n'a pas été extrait : **probablement fermé, sur
  indice et non sur constat.**
- **Un candidat de frontière vérifié ouvert**, venu d'un autre balayage. Brunet, C. et Havet, N.,
  « Propriété immobilière et déqualification dans l'emploi », dépôts HAL `halshs-00267041` (2008)
  et `halshs-00406500` (2009), PDF vérifié `HTTP 200`, `application/pdf`, 342 870 octets à
  `https://shs.hal.science/halshs-00267041/document`. Il traite l'effet de la propriété
  immobilière sur l'appariement emploi-qualification par une analyse économétrique du marché du
  travail : `sociology-of-work` l'a écarté **pour qu'il revienne ici**, en application d'une
  frontière écrite d'avance.
- **Des noms qui ne sont pas des candidats.** Vernon Smith, Selten, Camerer et Loewenstein,
  Thaler et Benartzi, Loewenstein et Prelec, l'*Econometrica* ancien, le fonds `dticarchive`, et
  Schweitzer et Cachon 2000 sur le newsvendor : **cités de mémoire, aucun recherché, aucun
  vérifié.** Le passage qui ouvre ce domaine ne doit pas les lire autrement. Un nom n'est pas un
  candidat tant qu'un accès n'a pas été constaté sur la pièce.

**Le legs est donc quatre pièces francophones vérifiées ouvertes, un candidat de frontière
vérifié ouvert, deux textes anglophones fondateurs vérifiés inaccessibles, et une liste de noms
qui ne vaut rien.** C'est peu, et c'est plus que ce que ce domaine a eu pendant quatre passages.

## Le périmètre est la discipline

> **Économie comportementale** — l'étude du **comportement économique réel** et des écarts
> **systématiques**, non aléatoires, entre ce comportement et le modèle de l'agent parfaitement
> rationnel : ce qu'un agent préfère, ce à quoi il réagit, ce qu'il échange, et les
> conséquences que ces écarts ont **au-delà de lui**, sur un prix, un marché, un contrat ou une
> politique.

Le domaine ne porte pas sur le raisonnement pris pour lui-même, qui est en science de la
décision ; ni sur ce que le travail fait éprouver, qui est en psychologie du travail ; ni sur le
travail comme rapport social, qui est en sociologie du travail. Il porte sur **le comportement
en tant qu'il est économique** : il engage une ressource, il rencontre un prix ou une
contrepartie, et il se répercute sur autre chose que celui qui l'a eu.

Deux mots de cette phrase font tout le travail, et il faut les tenir séparément.

**« Systématique »** exclut l'erreur. Un agent qui se trompe au hasard ne fonde rien : le champ
s'est constitué sur des écarts qui se reproduisent, dans le même sens, chez des sujets
différents. Un texte qui rapporte une variabilité sans en établir la direction n'est pas de ce
champ.

**« Économique »** exclut le mental pris pour lui-même. Le champ n'étudie pas une préférence
parce qu'elle est intéressante, mais parce qu'elle décide d'un échange. Un texte qui décrit un
état psychique sans qu'aucune ressource ne change de main est en psychologie, pas ici.

## Le test d'entrée, en trois conditions

Les trois se vérifient **sur le texte**, jamais sur la revue qui le publie, ni sur la discipline
d'origine de son auteur. La revue est un mauvais juge dans ce domaine plus qu'ailleurs : le
*Bulletin de psychologie* a publié la psychologie économique francophone dans les mêmes numéros
que la psychologie du travail, et la *Revue française d'économie* publie de l'économie standard à
côté de l'économie expérimentale.

1. **L'objet est un comportement économique**, pris comme fait observé : un choix qui engage une
   ressource, un échange, une offre, une demande, une réaction à un prix, à une incitation ou à
   une règle. Un raisonnement qui ne débouche sur aucun engagement de ressource ne suffit pas.
2. **L'écart au modèle de l'agent rationnel est établi et orienté**, ou bien le texte fonde la
   discipline qui l'établit. Cette seconde branche est nécessaire et elle est étroite : elle
   admet les textes qui définissent le champ, son objet et sa méthode, **à condition qu'ils
   portent une thèse propre** sur ce que l'économie doit à la psychologie. Un texte d'orientation
   qui récapitule l'état d'un domaine sans thèse n'entre pas, et c'est le rejet déjà appliqué
   deux fois en psychologie du travail.
3. **Le texte est une source primaire réellement ouverte**, lue en texte intégral, dont la
   citation se relit sur l'image de la page. Cette condition n'est pas propre au domaine ; elle
   est rappelée ici parce que ce domaine a déjà quatre textes fondateurs vérifiés fermés, et que
   la tentation d'un miroir sera plus forte que partout ailleurs.

## Le hors-périmètre, en rejet direct

Un candidat qui tombe ici ne se consigne pas : il part en `corpus/rejected/`, avec
`rejection_reason: "OUT_OF_SCOPE"`, jamais une mise en attente.

- **L'économie standard sans écart au modèle** : la théorie des prix, l'équilibre général, la
  macroéconomie, la croissance, l'économie publique. Le champ ne se définit pas par son objet
  économique mais par l'écart qu'il établit ; un texte d'économie sans écart n'est pas d'ici,
  quelle que soit sa notoriété.
- **La finance appliquée et la stratégie d'entreprise**, quand la thèse vise à produire un
  rendement ou un avantage plutôt qu'à établir un fait sur le comportement.
- **La psychologie cognitive du jugement prise pour elle-même**, sans qu'aucune ressource ne soit
  engagée. C'est le rejet le plus fréquent à prévoir, et le plus difficile, parce que le
  vocabulaire est le même des deux côtés de la ligne.
- **Le marketing, la publicité et l'économie du consommateur pris comme technique de vente** :
  la littérature de conseil est écartée ici comme elle l'est dans les dix autres domaines.
- **La neuroéconomie prise comme localisation cérébrale.** Ce qui porte sur le siège d'une
  décision et non sur la décision est un objet biologique, écarté au même titre que Soulairac
  l'a été en cybernétique.
- **Le « nudge » pris comme recette d'action publique**, quand le texte prescrit un dispositif
  sans établir le fait comportemental sur lequel il repose.

## Les frontières, toutes tranchées à l'avance et toutes depuis l'autre côté

C'est la situation propre au dernier domaine, et elle est confortable : **les cinq frontières qui
comptent ont déjà été écrites par les périmètres voisins, et aucune ne se rouvre ici.** Elles se
reprennent telles quelles. Un candidat mal placé part chez le voisin, qui est ouvert, ou ne
s'instruit pas ; il ne se réinstruit jamais en double, le validateur refusant le doublon d'`id`
comme de `slug`.

### Avec `decision-science` — la frontière décisive, et son propre périmètre l'a dit

Elle est la plus coûteuse à tenir des six que `decision-science` s'était données, et il l'a écrit
lui-même en l'écrivant. La coupure est celle-ci, et elle ne se rouvre pas depuis ce côté :

> un écart de jugement pris comme **fait de raisonnement** est en science de la décision ; le même
> écart pris comme **fait économique**, avec ses conséquences agrégées, est ici.

**Une conséquence matérielle et immédiate**, qui n'est pas une règle mais un état du corpus :
`theorie-des-perspectives`, `effet-de-cadrage` et `heuristiques-de-jugement` **sont déjà
instruits** en science de la décision, depuis le 23 août 2026. Kahneman et Tversky ne se
réinstruisent pas ici, et le balayage qui a payé la dette de ce domaine avait déjà pris cette
décision en refusant délibérément de chercher *Prospect Theory*. **C'est la bonne décision et
elle se maintient.** Ce que ce domaine peut encore prendre de cette veine est ce que la science
de la décision n'a pas pris : l'effet de dotation, l'aversion à la perte comme fait de marché, le
biais de statu quo, la comptabilité mentale, la préférence temporelle.

### Avec `work-psychology`, ouvert

Le salaire est le cas partagé, et la répartition est écrite depuis là-bas : le **salaire comme
source de satisfaction ou d'insatisfaction** est en psychologie du travail ; le **salaire comme
incitation dont on mesure l'effet sur un marché** est ici. Le corpus porte déjà
`seuil-d-insatisfaction-salariale` du premier côté.

### Avec `sociology-of-work`, ouvert

Écrite depuis là-bas également : **l'économie du travail prise comme modèle de marché** — offre,
demande, élasticités, rendements de l'éducation, frictions de mobilité — est ici ; le travail
pris comme **rapport social** est là-bas. C'est cette frontière qui a fait revenir Brunet et
Havet dans le legs de ce domaine plutôt que de les instruire en sociologie du travail.

### Avec `operations-management`, ouvert

Écrite depuis là-bas : le **comportement de commande et de stockage pris comme fait économique**,
avec ses conséquences agrégées sur un marché, est ici ; le dimensionnement et l'arbitrage de coût
pris comme **problème de gestion**, quand la méthode vise à produire un plan, sont là-bas. C'est
la frontière du newsvendor comportemental, et elle est déjà tranchée : le comportement de
commande observé est ici, la règle de commande à deux niveaux est là-bas et publiée.

### Avec `cybernetics`, ouvert

`cybernetics` s'est déclaré vide pour ce domaine **après un balayage entier**, et le motif rend
le vide crédible : aucun de ses dix corpus n'a pour objet les préférences d'un agent économique.
C'est la seule des déclarations de vide reçues par ce domaine qui repose sur une recherche plutôt
que sur une absence de recherche, et elle se tient.

### Avec les cinq autres domaines ouverts

`organizational-sociology`, `measurement-theory`, `activity-ergonomics`, `human-factors` et
`systems-thinking` ne se touchent avec ce domaine que par des cas prévisibles, et chacun se
tranche par l'objet du texte cité :

- un indicateur qui **change le comportement de celui qu'il mesure** est en théorie de la
  mesure quand le concept porte sur l'indicateur, et ici quand il porte sur la réaction
  économique qu'il provoque ;
- une décision d'achat ou d'investissement prise dans une **organisation** relève de la
  sociologie des organisations quand l'objet est la règle ou le pouvoir qui la produit ;
- l'anticipation d'un opérateur en situation est en human factors, et elle n'y devient pas
  économique parce qu'elle a un coût ;
- un modèle de boucles qui engendre un comportement de marché est en systems thinking quand le
  concept porte sur la structure, et ici quand il porte sur l'écart de l'agent.

## L'accès — ce que ce domaine impose, et il impose plus que les dix précédents

Quatre constats, à tenir pour acquis avant le premier balayage. Les trois premiers sont des
prévisions qu'il faut faire maintenant pour ne pas les prendre pour des échecs.

1. **Le canon anglophone de ce champ est fermé, et il l'est de trois façons différentes**, ce qui
   est le cas le plus défavorable du corpus. Katona est en prêt numérique ; Thaler 1980 est chez
   un éditeur sous abonnement et n'existe qu'en miroir illégitime ; Kahneman, Knetsch et Thaler
   1991 est dans une revue en accès libre servie derrière un filtrage anti-robot. **Trois
   fermetures, trois causes distinctes, et aucune ne se contourne.** Il ne faut pas les
   retenter : il faut chercher ailleurs.
2. **L'inversion francophone est ici la voie principale, et non une compensation.** Persée sert
   le *Bulletin de psychologie* et la *Revue française d'économie* en texte intégral par son
   endpoint page, et la **psychologie économique francophone est une lignée constituée**, fondée
   par Gabriel Tarde en 1902, tenue par Pierre-Louis Reynaud à Strasbourg puis par Paul Albou à
   Paris V. Ce n'est pas la périphérie d'un champ anglophone : c'est une tradition propre, et
   elle est ouverte. **C'est par elle que ce domaine ouvre.**
3. **La seconde branche du test d'entrée est faite pour cette tradition, et elle est un risque.**
   Les textes francophones ouverts de ce champ définissent souvent la discipline plutôt qu'ils
   n'établissent un écart. Ils entrent **s'ils portent une thèse propre**, et pas autrement. Le
   précédent est écrit : la psychologie du travail a écarté deux textes d'orientation sans thèse
   du même *Bulletin de psychologie*, et ce motif est le bon.
4. **Un article Persée n'est pas ouvert en texte intégral par principe.** L'endpoint page sert
   parfois une page sur plusieurs, et une page servie en `HTTP 200` n'est pas une page lue : le
   rendu peut omettre des blocs entiers sans le signaler, et les tableaux, encadrés et
   conclusions en page pleine sont les premiers concernés. Ce piège a été payé au passage
   précédent, sur un article dont **la conclusion entière était absente de la couche OCR**. Il ne
   se repaie pas.

Et la règle qui ne se négocie dans aucun domaine, rappelée ici parce que ce domaine y sera plus
exposé que les autres :

> **Aucun agent ne contourne un contrôle d'accès.** Face à un défi anti-robot, à un mur de
> connexion, à un prêt numérique ou à une restriction d'emprunt, on essaie une autre voie
> légitime ; on ne résout pas le défi, on ne se présente pas sous l'identité d'un navigateur, on
> n'emprunte pas ce qui demande un compte. **Un texte qu'on ne peut pas ouvrir légitimement est
> un texte qu'on n'a pas ouvert** : on le dit, et on ne conclut pas au verbatim.

Une autorisation d'ayant droit **se constate** : elle ne se déduit ni de l'âge du texte, ni de
l'absence de restriction d'emprunt affichée, ni du fait que la revue se déclare en accès libre.
Le cas de Kahneman, Knetsch et Thaler est réglé dans ce sens : le fond est propre, la route ne
l'est pas, et c'est la route qui décide.

## Thèmes

**Aucun thème déclaré à l'ouverture.** Ils se déclarent après le contrôle aveugle des cartes du
premier lot, et non après leur rédaction ni d'après la proposition de la cartographie. Un thème
sans carte validée ne se déclare pas : le dépôt en porte déjà deux qui affichent une page vide,
et c'est deux de trop.

---

# Ce qu'on surveille, tous domaines confondus

- **Combien d'auteurs du corpus étaient dans la liste initiale ?** Si c'est la majorité
  après plusieurs lots, la cartographie n'a pas fait son travail.
- **Quels courants ne sont représentés par aucune fiche ?** La liste des angles morts doit
  se vider avec le temps.
- **Quelle part de la littérature francophone et des autrices du champ ?** Les bases
  bibliométriques les sous-représentent structurellement ; ne pas corriger revient à
  hériter de leur biais.
