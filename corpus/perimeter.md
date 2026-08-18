# Périmètre du corpus

## Trois domaines ouverts sur onze

L'application couvre **quatre familles et onze domaines**, déclarés dans
[`src/content/taxonomy.ts`](../src/content/taxonomy.ts). Déclarer un domaine et l'instruire
sont deux décisions distinctes, et elles ne se prennent pas ensemble : une fiche n'est pas
admise parce qu'un domaine existe dans la taxonomie.

> **Les périmètres d'instruction ouverts sont `organizational-sociology`,
> `measurement-theory` et `activity-ergonomics`.** Les huit autres domaines sont déclarés
> dans la taxonomie et restent fermés à l'instruction tant qu'une décision explicite ne les
> ouvre pas — décision qui s'inscrit dans ce fichier, sous la forme d'une section de
> périmètre comme celles qui suivent.

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
  l'activité.

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

## La frontière avec `human-factors`, qui n'est pas ouvert

C'est la frontière la plus coûteuse à manquer, parce que les deux domaines existent dans la
taxonomie et qu'un seul est ouvert. La littérature anglophone sur l'erreur humaine, la
conscience de la situation, la charge mentale mesurée, la fiabilité et la résilience relève
de `human-factors` et **ne s'instruit pas ici**, même quand son objet ressemble trait pour
trait. Un candidat de cette veine ne part pas en rejet : il se consigne dans les angles
morts de la cartographie, pour le jour où ce domaine s'ouvrira. Un rejet dirait « hors
sujet » ; ce n'est pas le cas, et la carte du champ perdrait la trace.

## Thèmes

**Le domaine n'a encore aucun thème déclaré**, et c'est voulu : ils s'écriront dans
`src/content/themes.ts` à partir de ce que le scout aura fait apparaître, avec
`domain: "activity-ergonomics"`. Tant qu'ils ne sont pas déclarés, une fiche de ce domaine
porte ses thèmes dans `themes` avec leur libellé dans `theme_labels`, et déclare
`domain: "activity-ergonomics"`.

Même règle qu'en théorie de la mesure, et elle se réapprend : **un thème sans carte ne se
déclare pas.** Il afficherait une page vide et compterait pour de la couverture.

---

# Ce qu'on surveille, tous domaines confondus

- **Combien d'auteurs du corpus étaient dans la liste initiale ?** Si c'est la majorité
  après plusieurs lots, la cartographie n'a pas fait son travail.
- **Quels courants ne sont représentés par aucune fiche ?** La liste des angles morts doit
  se vider avec le temps.
- **Quelle part de la littérature francophone et des autrices du champ ?** Les bases
  bibliométriques les sous-représentent structurellement ; ne pas corriger revient à
  hériter de leur biais.
