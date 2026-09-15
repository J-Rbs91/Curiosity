# Chaîne de production du corpus Curiosity

Ce document est le point d'entrée historique de la chaîne documentaire.

Depuis le Content Pipeline v2, la spécification canonique est :

- [`docs/content-pipeline-v2.md`](./content-pipeline-v2.md) pour la chaîne complète ;
- `corpus/disciplines/<id>.json` pour les règles propres à une discipline ;
- `corpus/deepenings/PROTOCOLE.md` pour le rendu long ;
- `corpus/deepenings/AUDIT_PROTOCOL.md` pour l'audit pédagogique de second niveau.

Les règles ci-dessous résument les invariants qui restent valables pour tout Curiosity.

## 1. Ce que Curiosity produit

L'unité centrale n'est plus la carte. C'est un **knowledge record vérifié** :

`corpus/knowledge/<conceptId>.json`

La carte courte et l'approfondissement sont deux rendus pédagogiques de cette même unité de connaissance.

```text
DISCOVER
  -> ACQUIRE
  -> EVIDENCE REVIEW
  -> KNOWLEDGE CLAIMS
  -> KNOWLEDGE VERIFY
  -> PEDAGOGY PLAN
  -> RENDER CARD + DEEPENING
  -> CONTENT VERIFY
  -> REVIEW
  -> PUBLISH
```

Un renderer peut reformuler une connaissance. Il ne peut jamais en créer une.

## 2. Séparation des responsabilités

Aucun agent ne cumule acquisition, rédaction et validation.

- `corpus-cartographer` : cartographie une discipline ;
- `corpus-scout` : repère les concepts et voies documentaires ;
- `corpus-primary-reader` : acquiert les sources primaires et fragments verbatim ;
- `corpus-secondary-reader` : acquiert séparément réception et littérature secondaire ;
- `corpus-evidence-reviewer` : revérifie l'acquisition ;
- `corpus-knowledge-builder` : propose des claims atomiques ;
- `corpus-knowledge-verifier` : vérifie ces claims contre des supports résolus ;
- `corpus-pedagogy-planner` : construit une trajectoire d'apprentissage sans créer de connaissance ;
- `corpus-card-writer` et `corpus-deepener` : rendent les formats lecteur ;
- `corpus-content-mapper` et `corpus-content-verifier` : contrôlent chaque rendu ;
- les reviewers finaux contrôlent indépendamment la qualité documentaire et pédagogique.

## 3. Source et preuve ne sont pas la même chose

Une source identifiée n'autorise pas automatiquement ce qu'un modèle voudrait en dire.

Le niveau `consulted` est contraignant :

- `full-text` : le contenu réellement ouvert peut fournir des fragments ;
- `partial` : seuls les passages réellement vus peuvent fournir des fragments ;
- `metadata-only` : uniquement titre, auteur, année, édition, pagination et autres métadonnées effectivement présentes dans la notice.

Une source `metadata-only` ne soutient jamais ce que l'œuvre affirme, distingue, démontre ou conclut.

Les supports `SUP-...` sont construits mécaniquement à partir des métadonnées ou fragments réellement acquis. Un modèle ne peut pas inventer un support utilisable par le gate.

## 4. Primaire et secondaire restent séparés

Une source secondaire peut établir :

> « Le commentateur X attribue Y à l'ouvrage Z. »

Elle n'établit pas automatiquement :

> « L'auteur de Z affirme Y. »

Le passage d'une attribution secondaire à une attribution primaire exige l'ouverture de la source primaire correspondante.

## 5. Web général

Le web général sert à détecter une piste, jamais à devenir une preuve publiée par simple répétition.

La publication repose sur les modes de preuve acceptés par le discipline pack : documentaire, empirique, formel, computationnel ou consensus selon la discipline.

## 6. Carte courte

Une carte courte peut halluciner aussi facilement qu'un texte long.

`hook`, `summary` et toute attribution affichée doivent donc passer le même principe de content gate que l'approfondissement : texte exact -> mapping vers des `KCL-...` vérifiés -> verifier indépendant -> verdict logiciel.

Les contraintes d'affichage restent mécaniques : longueurs, caractères interdits, structure et références sont contrôlés par les validateurs.

## 7. Approfondissement

La longueur n'est plus une mesure de profondeur.

Chaque paragraphe doit apporter un delta d'apprentissage réel. Le renderer n'a aucun quota de 1 300 ou 1 500 mots à remplir. Le validateur ne conserve qu'un garde-fou anti-stub et une borne haute.

Le champ `limits` des fichiers maîtres est une frontière documentaire **interne**. Il n'est pas projeté vers l'application.

## 8. Context budget

Un agent travaille sur un concept à la fois.

Les packs déterministes sont plafonnés à **300 000 tokens estimés**. Ce seuil est un plafond opérationnel, pas une garantie d'absence d'hallucination.

Au-dessus : partition obligatoire, jamais troncature.

L'orchestrateur traite 3 concepts par lot par défaut et 5 maximum explicitement. Les gros artefacts restent sur disque ; l'orchestrateur ne transporte que les verdicts, compteurs et chemins utiles.

## 9. Gating

Pour une production v2, publication uniquement si :

1. `EVIDENCE_PASS` ;
2. `KNOWLEDGE_PASS` ;
3. `PLAN_PASS` ;
4. carte `CONTENT_PASS` ;
5. approfondissement `CONTENT_PASS` s'il existe ;
6. revues indépendantes requises passées ;
7. validation du corpus, projection, tests, lint et build réussis.

Un reviewer humain ou LLM ne peut pas compenser un gate mécanique en échec.

## 10. Migration du corpus historique

Les cartes et approfondissements historiques restent lisibles pendant la migration.

Lorsqu'un concept historique est migré vers v2 :

- les anciennes acquisitions sont réutilisées seulement dans la mesure où elles produisent des supports déterministes ;
- un ancien contrôle aveugle `PASS` peut servir de compatibilité d'evidence review pour éviter une revue identique déjà payée ;
- aucune synthèse libre historique n'est transformée automatiquement en preuve ;
- dès qu'un knowledge record v2 existe, toute nouvelle rédaction de ce concept utilise ce record comme autorité.

Le workflow d'audit des approfondissements reste un **backstop de second niveau** pour détecter les régressions pédagogiques et documentaires que la production native aurait malgré tout laissées passer.
