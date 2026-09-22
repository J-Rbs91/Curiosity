# Protocole de fact-check des approfondissements

Version : 1

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

Avant tout mapping, un script classique construit un `factcheck-pack.json` à partir de :

- `corpus/deepenings/<conceptId>.json` pour le texte lecteur ;
- `corpus/validated/<conceptId>.json` comme autorité validée ;
- tous les fichiers `.json` de `corpus/evidence/<conceptId>/`, à l'exception de `scouting.json`.

Le dossier d'une carte est pris pour ce qu'il est : son répertoire entier. La règle antérieure
ne ramassait que `lecture.json`, ce qui n'est qu'une convention de nommage tardive : neuf cartes
déposent leur lecture primaire dans `evidence.primary-reading.json` et leur réception dans
`evidence.reception.json`, six autres déposent une réception à côté d'un `lecture.json`. Leur
dossier était invisible au pack, **sans qu'aucune sortie ne le signale** : le fact-check se
rabattait silencieusement sur le seul enregistrement validé.

`scouting.json` est écarté parce qu'il n'est pas une preuve de lecture : le scout y note où il a
cherché et pourquoi le candidat a été retenu, jugements formés avant d'ouvrir le texte.

L'origine d'un support nomme son fichier — `evidence:<nom>` — sans quoi deux fichiers du même
dossier portant tous deux une clé `evidence` rendraient des chemins JSON identiques.

Le pack contient :

- le SHA-256 exact de la version de l'approfondissement contrôlée ;
- chaque paragraphe lecteur avec un `locator` stable ;
- des preuves autorisées avec des identifiants `SUP-...` calculés à partir de leur origine,
  chemin JSON et contenu ;
- le niveau `consulted` lorsqu'il est réellement porté par l'objet source ;
- `evidence_files`, le nom et le SHA-256 de chaque fichier de dossier ramassé, liste vide
  comprise — c'est là que se lit désormais ce que le pack a vu du dossier ;
- `access_reconciliation`, ce que le dossier dit des niveaux d'accès que l'enregistrement validé
  déclare — voir §3bis ;
- l'estimation de taille du pack.

Le modèle ne fabrique donc jamais `full-text`, `partial` ou `metadata-only`. Il ne peut citer
qu'un `support_id` déjà présent dans le pack.

Un identifiant inexistant est une erreur mécanique, même si son libellé semble plausible.

## 3bis. Un niveau d'accès déclaré n'est pas un niveau d'accès constaté

Le pack ramasse le dossier **et** l'enregistrement validé, où un objet source déclare son propre
`consulted`. Les deux n'ont pas la même autorité : le dossier constate une lecture, la fiche la
déclare. Les confondre était **le seul défaut du dispositif qui ouvrait au lieu de fermer** — une
source déclarée `full-text` dans la fiche fournissait au vérificateur des appuis estampillés
« lu » que rien du dossier ne soutenait, et `SOURCE_NOT_CONSULTED` ne pouvait plus se déclencher
sur elle.

Le pack ne réécrit aucun niveau. Il **qualifie** chaque déclaration de l'enregistrement validé et
l'inscrit sur les appuis qui en descendent, sous `access_corroboration` :

| statut | ce que le dossier en dit |
|---|---|
| `corrobore` | il déclare la même source au moins au niveau annoncé |
| `contredit` | sa seule voie d'accès est plus prudente ; `access_dossier` porte ce niveau |
| `non-declare` | il nomme la source sans se prononcer sur l'accès |
| `absent` | il ne nomme pas cette source |
| `hors-vocabulaire` | le niveau annoncé par la fiche n'est pas du vocabulaire du schéma |
| `dossier-hors-vocabulaire` | le dossier déclare la source, mais à un niveau hors vocabulaire |
| `dossier-absent` | la carte n'a pas de dossier, ou son dossier ne parle pas d'accès |

Deux sources se reconnaissent d'un fichier à l'autre par un identifiant comparable — DOI, ISBN
sous ses deux écritures, identifiant de rapport, URL normalisée. Aucune signature d'auteur ou de
titre n'est utilisée : une clé trop lâche ferait corroborer une lecture qui n'a pas eu lieu, et
c'est l'erreur qui coûte le plus cher ici.

**Pourquoi qualifier et non dégrader.** Le geste qui vient à l'esprit — dégrader au plus prudent
des deux niveaux en cas de divergence — n'a aucune prise, et il se tromperait. Mesuré sur les
136 cartes par `npm run corpus:factcheck -- --sweep` :

- **264 déclarations corroborées, et zéro contredite.** Les 34 cartes qui portent deux niveaux
  pour un même identifiant énumèrent les *voies d'accès* d'une même œuvre : `echelles-de-mesure`
  déclare trois fac-similés `full-text` de Stevens 1946 **et** la version éditeur
  `metadata-only`. Les quatre déclarations sont vraies. Dégrader marquerait « non lu » un article
  dont trois exemplaires ont été ouverts.
- **Les surdéclarations réelles sont des absences, pas des divergences.** Les six établies sur
  pièce — Selznick 1943 et Warner & Havens 1968 dans `deplacement-des-buts`, Cozic 2012 dans
  `rationalite-limitee`, Hoskin 1996 dans `mesure-devenue-cible`, Milet 1982 dans
  `critique-de-l-homo-oeconomicus` et `valeur-comme-fait-psychologique` — ne sont contredites par
  aucun `consulted` du dossier. Le dossier n'en porte aucun pour elles, ou le dit en prose :
  « Sert à fixer l'ISBN, pas à ouvrir le texte », « Contenu non consulté ».
- **Et l'absence ne se dégrade pas sans casse.** Le dossier de `zones-incertitude` nomme Kuty 1997
  « LA SOURCE LA PLUS RICHE DU DOSSIER, et de loin », 92 pages déposées sur ORBI, sans jamais
  écrire `consulted` ; celui d'`ordre-a-partir-du-bruit` déclare von Foerster 1960 `full-text` par
  une URL d'Internet Archive quand la fiche l'identifie par son LCCN. Les deux `full-text` sont
  corrects. Quinze lots n'ont pas normalisé le vocabulaire des dossiers, et un instrument qui
  prendrait leur silence pour un démenti refuserait les cartes les mieux servies.

D'où la règle : le pack cesse de présenter comme un fait du dossier ce qui n'est qu'une
déclaration de la fiche, et laisse le vérificateur en tirer les conséquences claim par claim.
Réparer un niveau dans un enregistrement validé reste un geste de la couche carte — ni le pack ni
aucun agent `corpus-deepening-*` n'y touche.

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
- leur origine, chemin et niveau d'accès déterminés par le pack ;
- pour un support tiré de l'enregistrement validé, son `access_corroboration` (§3bis).

Le verifier ne voit pas le verdict que le mapper aurait souhaité. Il décide uniquement si les
supports fournis autorisent exactement le claim.

**Un niveau d'accès que le dossier ne corrobore pas n'établit pas le contenu d'une œuvre.** Un
support dont l'`access_corroboration` vaut `absent`, `non-declare`, `hors-vocabulaire` ou
`dossier-hors-vocabulaire` se traite comme une notice : il soutient ce qu'il porte lui-même — une
référence, une pagination, une date — et non ce que le texte de la source dirait. Si un claim de
contenu ne tient que par un tel support, le verdict est `SOURCE_NOT_CONSULTED`.

Un `contredit` se lit au niveau porté par `access_dossier`, le plus prudent des deux.

**Cette règle ne porte que sur les appuis qui descendent d'une déclaration de source.** Un appui
tiré d'un autre champ de l'enregistrement validé — `quotation`, `summary`, `notes`, `review` —
n'a pas de niveau d'accès du tout et arrive avec `access: "n/a"` : il ne revendique aucune
lecture, donc il n'en surdéclare aucune, et aucune règle d'accès ne s'y applique. `quotation.text`
est le verbatim relevé par le lecteur primaire et gardé par la revue de la carte : le traiter
comme une notice au motif que son accès est inconnu reviendrait à refuser la meilleure preuve du
dossier. Ces appuis se pèsent sur leur contenu, comme avant.

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
- faire établir le contenu d'une œuvre par un `full-text` que la fiche déclare et que le dossier
  ne soutient nulle part ;
- vérifier une paraphrase différente du texte réellement publié ;
- conserver un ancien PASS après modification du texte ;
- noyer plusieurs cartes dans le même contexte de vérification.

Il ne rend pas un LLM infaillible sur la relation logique entre une preuve réelle et un claim.
Cette partie reste une évaluation sémantique. Le risque est réduit par l'indépendance du verifier,
le contexte étroit, le fail-closed et la revue finale, mais il n'est jamais déclaré nul.

Enfin, le fact-check de l'approfondissement ne remplace pas la validation documentaire amont :
il garantit que le texte reste à l'intérieur du corpus validé, pas que l'histoire humaine entière
est vraie parce qu'un fichier `validated` l'affirme.