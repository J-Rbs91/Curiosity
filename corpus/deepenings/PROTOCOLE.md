# Protocole de rédaction d'un approfondissement

Version : 3

Un approfondissement est un **rendu pédagogique** d'un knowledge record déjà vérifié.
Il n'est plus un endroit où l'on transforme librement une carte et ses notes en texte long.

La chaîne de référence est décrite dans `docs/content-pipeline-v2.md`.

## 1. Source de vérité

Pour toute nouvelle production v2, la matière factuelle autorisée est uniquement :

- `corpus/knowledge/<conceptId>.json` avec `status: VERIFIED` ;
- `corpus/knowledge/<conceptId>.pedagogy.json` dont le SHA pointe exactement vers ce knowledge record.

Le renderer ne mène aucune recherche et ne complète jamais avec ses connaissances générales.

Un fait probablement vrai mais absent des claims vérifiés n'appartient pas au texte.

## 2. Ce que le renderer peut faire

Il peut :

- reformuler ;
- simplifier ;
- ordonner ;
- rapprocher deux claims compatibles ;
- construire une analogie ;
- construire un exemple explicitement hypothétique ;
- expliciter une conséquence seulement si le knowledge record l'autorise.

Il ne peut pas :

- augmenter la certitude ;
- augmenter la généralité ;
- créer une causalité ;
- ajouter une date, un chiffre, un nom propre ou un événement ;
- transformer une source secondaire en parole primaire ;
- présenter une interprétation comme une attribution directe à l'auteur.

## 3. Progression pédagogique

Approfondir signifie augmenter la compréhension, pas la longueur.

Pour chaque paragraphe :

> Qu'est-ce que le lecteur sait, comprend ou peut distinguer maintenant qu'il ne savait, ne comprenait ou ne pouvait distinguer à la fin du paragraphe précédent ?

Une reformulation seule ne compte pas.

Deux paragraphes au même delta doivent être fusionnés, supprimés ou différenciés par un apport réel.
Deux sections ne doivent pas accomplir substantiellement le même travail.

La trajectoire peut utiliser, selon le sujet : intuition, origine, mécanisme, distinction, exemple, limite conceptuelle, conséquence, ouverture. Ce ne sont pas des cases obligatoires.

## 4. Entrée en matière

Commence par le problème que le concept aide à voir, dans des mots courants.

Un terme spécialisé n'arrive que lorsqu'il devient nécessaire et doit alors être expliqué immédiatement.

Ne commence pas par une définition académique longue si le lecteur ne sait pas encore pourquoi elle lui sert.

Ne redis pas simplement la carte qui était affichée juste avant.

## 5. Exemples et analogies

Un exemple inventé doit être manifestement hypothétique.

Il ne peut pas contenir de chiffre, d'organisation réelle, de résultat empirique, de lieu, de date ou de détail présenté comme réel sans claim correspondant.

Une analogie n'est utile que si elle résout une difficulté précise, révèle un mécanisme ou permet une distinction. Une image séduisante qui ne change rien à la compréhension se supprime.

## 6. Frontière documentaire interne

Le champ `limits` du JSON est **interne**.

Il sert aux audits, corrections et futures acquisitions pour enregistrer les frontières issues de `knowledge.boundaries`.

Il :

- n'est pas projeté vers l'application ;
- n'entre pas dans le temps de lecture ;
- n'est pas une section destinée au lecteur ;
- ne doit jamais être transformé automatiquement en « Ce que les sources ne permettent pas d'établir ».

Une nuance ou une limite conceptuelle utile à la compréhension peut évidemment apparaître dans le texte visible si elle est portée par un claim vérifié. Ce n'est pas la même chose que montrer au lecteur notre registre interne de lacunes.

## 7. Forme

Fichier : `corpus/deepenings/<conceptId>.json`.

```json
{
  "$schema": "../schema/deepening.schema.json",
  "conceptId": "identifiant",
  "lead": ["..."],
  "sections": [
    { "title": "Titre substantiel", "paragraphs": ["..."] }
  ],
  "limits": ["frontière interne"]
}
```

Les titres nomment leur sujet, jamais leur fonction : pas de « Introduction », « Pour aller plus loin », « Conclusion » ou « Niveau avancé ».

Le texte est brut, sans Markdown.

Le tiret cadratin reste interdit dans le rendu conformément aux conventions actuelles de l'application.

## 8. Volume

Il n'existe plus d'objectif de 1 300 ou 1 500 mots.

La longueur est la conséquence du nombre de paliers pédagogiques réellement soutenus par les claims.

Le contrôle mécanique conserve seulement un garde-fou anti-stub et une borne haute de sécurité. Il ne doit jamais obliger un renderer à paraphraser pour atteindre un quota.

## 9. Invisibilité du dispositif

Le lecteur n'a pas à connaître notre plomberie.

N'écris pas dans le texte visible : « la carte », « la fiche », « le corpus », « l'enregistrement validé », « le dossier établit », ni un compte rendu de la façon dont le contenu a été fabriqué.

Parle du concept, des auteurs, des phénomènes et des sources lorsqu'elles sont elles-mêmes utiles à la compréhension.

## 10. Gates obligatoires

Après rédaction :

1. `npm run corpus:deepen -- --check --only=<conceptId>` ;
2. `npm run corpus:content-check -- --prepare --artifact=deepening --only=<conceptId>` ;
3. `corpus-content-mapper` dans un contexte frais ;
4. `npm run corpus:content-check -- --bundle --artifact=deepening --only=<conceptId>` ;
5. `corpus-content-verifier` dans un contexte frais ;
6. `npm run corpus:content-check -- --gate --artifact=deepening --only=<conceptId>` ;
7. audit pédagogique selon `AUDIT_PROTOCOL.md` lorsque requis.

Aucun approfondissement v2 n'est publiable sans `CONTENT_PASS` sur son SHA exact.

## 11. Corpus historique

Les approfondissements existants peuvent rester au format historique pendant la migration.
Le workflow d'audit v3 les traite progressivement.

Dès qu'un concept possède un knowledge record v2, toute nouvelle réécriture doit utiliser ce record comme autorité et non revenir au modèle ancien carte + notes.