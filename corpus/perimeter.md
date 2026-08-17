# Périmètre du corpus

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
d'encyclopédie et revues de référence. Sa carte, dans `corpus/map/`, est ce qui alimente la
file d'instruction. Les huit ci-dessus y figurent parmi d'autres.

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

Un concept hors périmètre part en `corpus/rejected/` avec
`rejection_reason: "OUT_OF_SCOPE"`. On ne le laisse pas en attente : un candidat gris non
tranché revient toujours par une autre porte.

## Thèmes

Les neuf thèmes de `src/content/themes.ts` ont été écrits **avant** toute instruction
documentaire. Ils ne sont donc pas une carte du champ, mais un premier découpage, et le
corpus peut en faire apparaître d'autres — écologie des populations, néo-institutionnalisme,
dépendance aux ressources, sensemaking…

Un thème nouveau entre par `graph.themes` accompagné de son libellé dans
`graph.theme_labels`. Le validateur l'accepte et le signale ; la carte l'affiche par son
libellé. Le seul refus est le thème sans libellé : la carte n'aurait alors rien à écrire.

## Ce qu'on surveille

- **Combien d'auteurs du corpus étaient dans la liste initiale ?** Si c'est la majorité
  après plusieurs lots, la cartographie n'a pas fait son travail.
- **Quels courants ne sont représentés par aucune fiche ?** `corpus/map/cartography.json`
  tient la liste des angles morts, et elle doit se vider avec le temps.
- **Quelle part de la littérature francophone et des autrices du champ ?** Les bases
  bibliométriques les sous-représentent structurellement ; ne pas corriger revient à
  hériter de leur biais.
