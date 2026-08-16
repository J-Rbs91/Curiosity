# Périmètre du corpus

Écrit une fois, appliqué sans négociation fiche par fiche. Un agent qui hésite relit ce
fichier ; il ne demande pas d'exception.

## Domaine autorisé

> Sociologie et théorie des organisations, limitées aux concepts permettant de comprendre
> le fonctionnement des organisations : comportements organisationnels, décision, règles,
> pouvoir, apprentissage, coopération, dysfonctionnements, action collective.

## Noyau d'auteurs

| Auteur | `app_author_id` | Ancrage |
|---|---|---|
| Max Weber | `weber` | Bureaucratie, domination légitime, rationalisation |
| Robert K. Merton | `merton` | Fonctions latentes, dysfonctions bureaucratiques |
| Herbert A. Simon | `simon` | Rationalité limitée, décision |
| James G. March | `march` | Ambiguïté, exploration/exploitation, décision |
| Michel Crozier | `crozier` | Pouvoir, zones d'incertitude, phénomène bureaucratique |
| Erhard Friedberg | `friedberg` | Système d'action concret, régulation |
| Albert O. Hirschman | `hirschman` | Exit / Voice / Loyalty |
| Chris Argyris | `argyris` | Apprentissage organisationnel, routines défensives |

Un auteur hors noyau peut apparaître comme **coauteur** (Cohen, Olsen, Schön, Simon dans
*Organizations*…) sans entrer dans la table des auteurs de l'application : il est nommé
dans `attribution.authors` et remonte à l'écran via `attributionNote`.

Ajouter un auteur au noyau est une décision de produit, pas une décision d'agent : cela
demande une entrée dans `src/content/authors.ts` et une mise à jour de ce fichier.

## Le test d'entrée

La question posée n'est jamais « est-ce de la sociologie ? ». Hirschman est économiste,
Simon est un théoricien de la décision, Argyris vient de la psychologie. La question est :

> **Ce concept appartient-il au périmètre intellectuel nécessaire pour comprendre les
> organisations ?**

Trois conditions cumulatives :

1. il éclaire le fonctionnement, la décision, le pouvoir, l'apprentissage, la coopération
   ou les dysfonctionnements d'une **organisation** ;
2. il est **rattachable à un auteur identifié** du champ (noyau ou coauteur documenté) ;
3. il est **enseignable** : un lecteur non spécialiste doit pouvoir en reconnaître le
   mécanisme dans une organisation réelle.

## Hors périmètre — rejet direct

- Management prescriptif, conseil, outillage RH, « bonnes pratiques » d'entreprise.
- Psychologie individuelle sans articulation organisationnelle.
- Sociologie générale sans objet organisationnel (stratification, famille, déviance hors
  organisation, etc.).
- Économie des organisations formalisée sans mécanisme social observable.
- Actualité, littérature grise d'entreprise, contenus de formation professionnelle.
- Théories organisationnelles postérieures sans rattachement au noyau, tant que le noyau
  n'est pas couvert.

Un concept hors périmètre part en `corpus/rejected/` avec
`rejection_reason: "OUT_OF_SCOPE"`. On ne le laisse pas en attente : un candidat gris non
tranché revient toujours par une autre porte.

## Thèmes de l'application

Un concept validé doit se rattacher à au moins un thème existant
(`src/content/themes.ts`) :

`bureaucratie-regles` · `autorite-domination` · `pouvoir` · `decision` ·
`comportements-organisationnels` · `reaction-insatisfaction` ·
`apprentissage-organisationnel` · `organisation-formelle-reelle` ·
`changement-organisationnel`

Un concept qui n'entre dans aucun de ces thèmes est soit hors périmètre, soit le signal
qu'un thème manque — décision de produit, jamais décision d'agent.
