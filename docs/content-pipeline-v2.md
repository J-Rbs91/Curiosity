# Curiosity Content Pipeline v2

Curiosity ne traite plus la carte et l'approfondissement comme deux productions documentaires indépendantes.
Le système construit d'abord une **unité de connaissance vérifiée**, puis rend plusieurs formats à partir de cette même unité.

## Principe

```text
DISCOVER
  -> ACQUIRE
  -> EVIDENCE REVIEW
  -> EVIDENCE PACK
  -> KNOWLEDGE CLAIMS
  -> KNOWLEDGE VERIFY
  -> KNOWLEDGE GATE
  -> PEDAGOGY PLAN
  -> RENDER
  -> CONTENT MAP
  -> CONTENT VERIFY
  -> CONTENT GATE
  -> PEDAGOGICAL REVIEW
  -> PUBLISH
```

L'invariant est le suivant :

> Un modèle peut proposer une interprétation d'une preuve ou une formulation pédagogique. Il ne peut ni créer la preuve qui l'autorise, ni s'auto-valider, ni publier un texte dont les assertions ne remontent pas à une connaissance déjà vérifiée.

## 1. Discipline packs

Le Core ne contient aucune vérité propre à la sociologie, aux mathématiques, à l'histoire ou à la biologie.
Chaque discipline est décrite dans `corpus/disciplines/<id>.json` : périmètre, exigences de sources, modes épistémiques autorisés et contraintes pédagogiques.

Le pack actuel est `organizational-sociology`. Les futures disciplines peuvent ajouter des validateurs spécifiques sans modifier la chaîne de provenance commune.

Exemples :

- histoire : sources primaires, historiographie, datation, désaccords ;
- mathématiques : définition, démonstration, calcul, contre-exemple, vérification formelle ;
- biologie : taxonomie, observation, expérimentation, consensus, date de classification ;
- géographie : source géospatiale, date, échelle, coordonnées, frontière contestée ;
- géologie : mesure, datation, modèle, incertitude, échelle temporelle.

## 2. Acquisition

Le scout détecte les concepts et les sources atteignables. Il ne produit aucune connaissance.
Le lecteur primaire ouvre les sources et écrit `corpus/evidence/<id>/lecture.json`.

Pour les nouvelles lectures, `lecture.json` doit distinguer :

- les **sources ouvertes** et leur niveau réel d'accès ;
- les **fragments de preuve verbatim**, courts, localisés et rattachés à une source ;
- la prose de synthèse, utile au travail mais sans autorité de preuve ;
- les réserves et échecs d'accès.

Une synthèse du modèle n'est jamais automatiquement une preuve.

## 3. Evidence review indépendant

`corpus-evidence-reviewer` reçoit le dossier d'acquisition mais pas le raisonnement de l'agent qui l'a produit.
Il rouvre les références et vérifie :

1. que la source existe et correspond à la notice ;
2. que le niveau d'accès déclaré est honnête ;
3. que chaque fragment verbatim se trouve au locator annoncé ;
4. que les limites d'accès ne sont pas transformées en assertions sur le contenu.

Le verdict est `EVIDENCE_PASS` ou `EVIDENCE_FAIL`.
Aucun knowledge record nouveau ne peut être publié sans `EVIDENCE_PASS`.

## 4. Evidence pack déterministe

`npm run corpus:knowledge -- --prepare --only=<id>` construit un pack sans LLM.

Le pack contient :

- le SHA-256 de `lecture.json` ;
- le SHA-256 du verdict d'evidence review ;
- les sources réellement ouvertes ;
- les fragments verbatim autorisés ;
- des identifiants `SUP-...` calculés à partir de l'origine, du locator et du contenu ;
- le niveau d'accès hérité de la source, jamais réécrit par un modèle ;
- une estimation de contexte.

`definition_de_lauteur`, notes, résumés et raisonnements d'agents ne deviennent pas des supports simplement parce qu'ils sont présents dans le dossier.

## 5. Knowledge claims

`corpus-knowledge-builder` ne rédige ni carte ni approfondissement.
Il propose des assertions canoniques dans `corpus/knowledge/work/<id>/claims.json`.

Chaque claim contient :

- un identifiant local ;
- une phrase atomique ;
- un type épistémique ;
- un ou plusieurs `support_ids` déjà présents dans l'evidence pack.

Le builder n'écrit aucun verdict de vérité.

## 6. Knowledge verification

Le script résout les `support_ids` et construit un bundle.
`corpus-knowledge-verifier`, dans un contexte frais, décide claim par claim :

- `SUPPORTED` ;
- `TOO_STRONG` ;
- `UNSUPPORTED` ;
- `CONFLICT` ;
- `SOURCE_NOT_CONSULTED`.

Le gate logiciel produit `KNOWLEDGE_PASS`, `KNOWLEDGE_FAIL` ou `KNOWLEDGE_INVALID`.
Le modèle ne peut pas produire lui-même `KNOWLEDGE_PASS`.

Après `KNOWLEDGE_PASS`, le script peut écrire `corpus/knowledge/<id>.json`.
Ce fichier devient l'unité de connaissance centrale de Curiosity.

## 7. Pedagogy plan

`corpus-pedagogy-planner` reçoit uniquement le knowledge record vérifié et les règles de discipline.
Il organise une progression sans créer de connaissance nouvelle.

Un plan contient des étapes pédagogiques référencées par `claim_ids` : intuition, origine, mécanisme, distinction, exemple, limite, conséquence, ouverture, selon ce que le sujet permet réellement.

Chaque étape doit produire un delta d'apprentissage identifiable.
Le plan n'est pas un gabarit rigide et n'a aucun objectif de longueur.

## 8. Rendering

La carte courte et l'approfondissement sont deux **renderers** du même knowledge record.

Le renderer peut :

- reformuler ;
- ordonner ;
- simplifier ;
- construire un exemple explicitement hypothétique ;
- choisir une granularité adaptée au format.

Il ne peut pas :

- rechercher une nouvelle source ;
- ajouter un fait depuis la mémoire du modèle ;
- renforcer un claim ;
- attribuer une idée plus directement que le knowledge record ;
- transformer une source `metadata-only` en preuve de contenu.

## 9. Content verification

Chaque rendu est contrôlé contre le knowledge record, même s'il ne fait que 170 caractères.

`npm run corpus:content-check -- --prepare --artifact=card|deepening --only=<id>` construit un pack déterministe contenant :

- le SHA exact du rendu ;
- ses unités de texte visibles ;
- les claims vérifiés disponibles.

Le mapper ancre chaque assertion dans le texte exact par locator et offsets, puis référence des `claim_ids` existants.
Le verifier juge la relation entre texte rendu et claims.
Le gate logiciel produit `CONTENT_PASS`, `CONTENT_FAIL` ou `CONTENT_INVALID`.

Une modification d'un caractère invalide l'ancien contrôle par changement de SHA.

## 10. Audit de second niveau

Le workflow d'audit des approfondissements reste utile.
Son rôle change : il ne compense plus un générateur libre, il surveille la qualité pédagogique et les régressions éventuelles d'un pipeline déjà borné.

La chaîne d'audit v3 de la PR #107 reste donc un backstop indépendant.

## 11. Context budget

Un agent ne travaille que sur un concept.
Mapper, verifier, reviewer et renderer utilisent des contextes frais.

Le plafond d'un pack d'entrée est **300 000 tokens estimés**.
Au-delà : partition obligatoire, jamais troncature.

Le lot d'orchestration est de 3 concepts par défaut et de 5 maximum explicite.
Les artefacts détaillés vivent sur disque ; l'orchestrateur ne transporte que verdicts, compteurs et chemins.

## 12. Publication

Un concept nouveau n'est publiable que si :

1. evidence review = `EVIDENCE_PASS` ;
2. knowledge gate = `KNOWLEDGE_PASS` ;
3. card content gate = `CONTENT_PASS` ;
4. deepening content gate = `CONTENT_PASS` si un approfondissement est publié ;
5. les validateurs mécaniques passent ;
6. la revue pédagogique requise passe ;
7. tests, lint et projection passent.

Le corpus historique reste lisible pendant la migration. Les nouvelles productions passent par v2 ; les anciennes deviennent progressivement v2 lorsqu'elles sont retraitées.