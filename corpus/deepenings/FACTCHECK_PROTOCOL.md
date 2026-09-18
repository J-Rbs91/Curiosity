# Protocole de fact-check des approfondissements

Version : 2

Ce protocole complète `PROTOCOLE.md` et `AUDIT_PROTOCOL.md`.

L'audit pédagogique répond à « le lecteur progresse-t-il ? ». Le fact-check répond à une autre
question : **chaque assertion destinée au lecteur est-elle autorisée par une preuve réellement
présente dans le dossier ?**

Le principe central est plus strict qu'un simple prompt de prudence :

> Une IA peut proposer une correspondance entre un claim et une preuve. Elle ne peut jamais
> créer la preuve qui lui sert à se valider, inventer son niveau d'accès, ni déclarer seule que
> sa propre correspondance est valide.

## 1. Isolation des contextes

Une invocation d'agent ne travaille que sur **un seul concept**.

Même lorsqu'un lot contient plusieurs cartes, chaque carte utilise des agents frais et des
artefacts séparés. Aucun fact-checker ne reçoit le texte, les diagnostics ou les preuves d'une
autre carte.

Le lot par défaut contient **3 cartes**. La limite absolue est **5 cartes**, uniquement sur
requête explicite. Ce nombre limite surtout l'état de l'orchestrateur ; il ne change jamais la
règle « un concept par contexte d'agent ».

L'orchestrateur ne transporte pas les sorties détaillées entre agents dans son propre contexte.
Les sorties complètes vivent sous :

`corpus/deepening-audits/work/<conceptId>/`

Il ne conserve en mémoire que le verdict, quelques compteurs et le chemin de l'artefact utile à
l'étape suivante.

## 2. Budget de contexte

Le budget opérationnel maximal d'un pack d'entrée est **300 000 tokens estimés**.

Ce seuil est un choix d'exploitation conservateur pour des modèles disposant d'une fenêtre de
1M tokens. Il ne constitue pas une affirmation selon laquelle 300k tokens seraient exempts de
« context rot » ou d'hallucinations.

L'estimation locale est volontairement prudente et n'est pas présentée comme la tokenisation
exacte du fournisseur. Si le pack estimé dépasse 300k :

1. il n'est jamais tronqué silencieusement ;
2. le mapping est partitionné par sections et groupes de preuves ;
3. les vérifications d'entailment restent claim par claim ;
4. l'agrégation finale reste déterministe.

Un dépassement ne donne jamais le droit de supprimer une preuve ou un paragraphe pour faire
rentrer le dossier.

## 3. Pack de preuve déterministe

Avant tout mapping — et depuis la version 4 d'`AUDIT_PROTOCOL.md`, avant même l'audit — un script
classique construit un `factcheck-pack.json` à partir de :

- `corpus/deepenings/<conceptId>.json` pour le texte lecteur ;
- `corpus/validated/<conceptId>.json` comme autorité validée ;
- `corpus/evidence/<conceptId>/lecture.json` si ce fichier existe.

Le pack contient :

- le SHA-256 exact de la version de l'approfondissement contrôlée ;
- chaque paragraphe lecteur avec un `locator` stable ;
- des preuves autorisées avec des identifiants `SUP-...` calculés à partir de leur origine,
  chemin JSON et contenu ;
- le niveau `consulted` lorsqu'il est réellement porté par l'objet source ;
- l'estimation de taille du pack.

Le modèle ne fabrique donc jamais `full-text`, `partial` ou `metadata-only`. Il ne peut citer
qu'un `support_id` déjà présent dans le pack.

Un identifiant inexistant est une erreur mécanique, même si son libellé semble plausible.

## 4. Claims ancrés dans le texte réel

Le mapper ne reformule pas librement ce qu'il prétend contrôler.

Chaque claim comporte :

- `locator` du paragraphe ;
- `start` et `end`, offsets dans la chaîne exacte ;
- `claim_text`, copie exacte de `paragraph.slice(start, end)` ;
- zéro, un ou plusieurs `support_ids` proposés.

Le script vérifie les offsets et l'égalité exacte de `claim_text`. Une `normalized_claim` peut
être ajoutée pour aider le raisonnement, mais elle n'a aucune autorité et n'entre jamais dans le
gate.

Ainsi, un modèle ne peut pas annoncer qu'il a vérifié une version affaiblie d'une phrase alors
que le lecteur en verra une autre.

### `mapping_status` et l'exemption de paragraphe

Chaque paragraphe lecteur porte un `mapping_status`, que le script contrôle :

- `CLAIMS_MAPPED` — le paragraphe contient au moins un claim ancré ;
- `NO_VERIFIABLE_CLAIM` — le paragraphe ne contient aucune assertion vérifiable, et il ne porte
  donc aucun claim.

Le script refuse l'incohérence dans les deux sens : un `CLAIMS_MAPPED` sans claim, un
`NO_VERIFIABLE_CLAIM` qui en porte un.

Ce statut mérite d'être nommé ici parce qu'il était jusqu'au 2026-09-18 le seul mécanisme du
dispositif à n'être documenté dans aucun protocole : il n'existait que dans le script et dans la
définition de l'agent mappeur. **Or il exempte un paragraphe entier du contrôle de preuve.** Rien
de ce qu'il contient n'est confronté à un support, et aucun agent ne revoit ce choix.

Il s'applique à une transition rhétorique, ou à une vignette entièrement stipulée — « Imaginons
quelqu'un qui… » — qui n'attribue rien à personne et ne rapporte aucune donnée. Il ne s'applique
pas à une analogie pédagogique qui affirme quelque chose du monde, ni à un paragraphe qui se ferme
sur une conséquence tirée de la vignette : cette conséquence est ancrable et doit l'être.

**Toute exemption doit être motivée par le mappeur**, paragraphe par paragraphe, afin que le choix
soit opposable. Un statut d'exemption non justifié est un angle mort, pas une simplification.

### Le choix des supports décide du verdict

Le mapping ne rend aucun verdict de vérité, mais les supports qu'il attache déterminent celui que
le vérificateur pourra rendre. Ce choix n'est revu par personne, et il n'est pas neutre.

Observation du 2026-09-18 : une phrase au texte rigoureusement identique, conservée mot pour mot
d'un cycle au suivant, est passée de `SUPPORTED` à `TOO_STRONG` parce qu'un mappeur lui avait
attaché un support supplémentaire, lequel entraînait le contenu de travaux non consultés.
**Attacher davantage de preuve peut faire échouer un claim.**

La conséquence n'est pas d'en attacher moins. Elle est que le rattachement doit viser la justesse
et non la faveur : seuls les supports qui portent la proposition ancrée, jamais un support de
contexte, et jamais le retrait d'un support pertinent pour éviter un verdict défavorable.

## 5. Séparation mapping / entailment

Le fact-check est composé de deux rôles indépendants.

### A. Claim mapper

Il voit le texte lecteur et le registre des supports du concept. Il :

- découpe le texte en claims vérifiables ;
- ancre chaque claim par offsets exacts ;
- propose des `support_ids` existants ;
- ne rend aucun verdict de vérité global.

### B. Entailment verifier

Il reçoit un bundle construit **par le script**, et non le texte libre du mapper. Pour chaque
claim, le bundle contient :

- le `claim_text` exact validé ;
- les supports résolus depuis leurs identifiants ;
- leur origine, chemin et niveau d'accès déterminés par le pack.

Le verifier ne voit pas le verdict que le mapper aurait souhaité. Il décide uniquement si les
supports fournis autorisent exactement le claim.

Verdicts sémantiques :

- `SUPPORTED` ;
- `TOO_STRONG` ;
- `UNSUPPORTED` ;
- `CONFLICT` ;
- `SOURCE_NOT_CONSULTED`.

Toute incertitude documentaire se ferme par un verdict autre que `SUPPORTED`.

## 6. Gate déterministe

Le verdict global n'est pas écrit librement par un modèle.

Le script refuse le rapport si au moins une des conditions suivantes est vraie :

- le SHA du texte a changé depuis la préparation du pack ;
- un locator est inconnu ;
- les offsets ne correspondent pas au `claim_text` réel ;
- un `support_id` n'existe pas dans le pack ;
- un claim n'a pas de verdict de verifier ;
- un verdict n'appartient pas à l'ensemble autorisé ;
- au moins un claim reçoit autre chose que `SUPPORTED`.

Seulement après ces contrôles le script peut produire `FACTCHECK_PASS`.

Une modification du texte, même minime, change le SHA et invalide automatiquement l'ancien
fact-check.

## 7. Ce que ce protocole garantit, et ce qu'il ne garantit pas

Ce protocole empêche notamment un agent de :

- fabriquer une référence de support convaincante mais inexistante ;
- transformer lui-même `metadata-only` en `full-text` ;
- vérifier une paraphrase différente du texte réellement publié ;
- conserver un ancien PASS après modification du texte ;
- noyer plusieurs cartes dans le même contexte de vérification.

Il ne rend pas un LLM infaillible sur la relation logique entre une preuve réelle et un claim.
Cette partie reste une évaluation sémantique. Le risque est réduit par l'indépendance du verifier,
le contexte étroit, le fail-closed et la revue finale, mais il n'est jamais déclaré nul.

Enfin, le fact-check de l'approfondissement ne remplace pas la validation documentaire amont :
il garantit que le texte reste à l'intérieur du corpus validé, pas que l'histoire humaine entière
est vraie parce qu'un fichier `validated` l'affirme.