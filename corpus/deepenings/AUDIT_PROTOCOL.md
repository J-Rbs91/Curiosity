# Protocole d’audit pédagogique des approfondissements

Version : 3

Ce protocole complète `PROTOCOLE.md`. Le premier protège surtout l’exactitude documentaire,
la forme et l’entrée progressive dans le concept. Celui-ci répond d’abord à une autre question :
**le lecteur apprend-il réellement quelque chose de nouveau à mesure qu’il avance ?**

Un texte peut être exact, bien sourcé, long de 1 500 mots et pourtant mauvais s’il reformule
six fois la même idée. Inversement, un texte pédagogiquement excellent peut contenir une
affirmation trop forte ou insuffisamment soutenue.

La véracité détaillée n’est donc pas déduite de cet audit. Elle est contrôlée séparément par
`FACTCHECK_PROTOCOL.md`, avec claims ancrés dans le texte, supports déterministes, verifier
indépendant et gate mécanique.

## 0. Frontière interne et contenu lecteur

Le fichier d’approfondissement contient `lead`, `sections` et `limits`.

- `lead` + `sections` constituent le texte destiné au lecteur ;
- `limits` est une **frontière documentaire interne** destinée aux agents de rédaction,
  d’audit et de fact-checking.

`limits` sert à rappeler ce que les sources ne permettent pas d’établir, afin d’empêcher
l’expansion rhétorique, les attributions abusives et les hallucinations. Son contenu n’est pas
une section éditoriale et ne doit jamais être utilisé comme un bloc « Ce que les sources ne
permettent pas d’établir » présenté au lecteur.

Une nuance nécessaire à la compréhension peut naturellement apparaître dans `lead` ou
`sections`. Ce qui est interdit est de transformer le registre interne des lacunes documentaires
en appareil visible simplement parce qu’il existe dans le fichier de travail.

## 1. Principe directeur : le delta d’apprentissage

Chaque paragraphe lecteur doit produire au moins un **delta d’apprentissage** identifiable par
rapport à ce que le lecteur sait déjà à cet endroit du texte.

Un delta valide est au moins l’un des éléments suivants :

- un fait nouveau soutenu par les sources disponibles ;
- une relation de cause à effet ou un mécanisme jusque-là inexpliqué ;
- une distinction nécessaire entre deux notions proches ;
- une conséquence nouvelle correctement dérivée ;
- un exemple qui permet de comprendre un mécanisme, et pas seulement de répéter la définition ;
- une limite, une condition d’application, une objection ou un cas où l’intuition première ne suffit plus ;
- un changement d’échelle ou de point de vue qui modifie réellement la compréhension ;
- une connexion documentée avec une autre idée qui éclaire le concept présent.

Ne sont **pas** des deltas :

- redire la même proposition avec d’autres mots ;
- remplacer un terme courant par un synonyme savant ;
- ajouter une analogie qui reproduit exactement l’explication précédente sans rien résoudre ;
- annoncer qu’une idée est importante, complexe ou subtile sans expliquer pourquoi ;
- étirer une définition sur plusieurs paragraphes ;
- multiplier les exemples qui démontrent tous exactement la même chose ;
- répéter dans une section ce que le `lead` a déjà établi.

Test obligatoire pour chaque paragraphe :

> Qu’est-ce que le lecteur sait, comprend ou peut distinguer après ce paragraphe qu’il ne
> savait, ne comprenait ou ne pouvait distinguer avant ?

Si la réponse n’est pas précise en une phrase, le paragraphe est suspect. Si plusieurs
paragraphes consécutifs ont le même delta, il s’agit d’une redondance pédagogique.

## 2. Une progression, pas un plan imposé

L’audit ne cherche pas un gabarit identique pour toutes les cartes. Il cherche une montée en
compréhension. Selon le concept, une bonne trajectoire peut passer par : intuition, problème,
mécanisme, exemple, conséquence, limite, controverse, connexion. L’ordre peut changer et
certains paliers peuvent manquer.

Ce qui est obligatoire est que la difficulté augmente **parce que le lecteur possède les
briques nécessaires**, pas parce que le texte change soudain de vocabulaire.

Deux erreurs opposées sont donc refusées :

1. la stagnation, où les sections reformulent le même noyau ;
2. le saut, où une section mobilise une notion que les précédentes n’ont pas construite.

## 3. Les huit axes de l’audit

Chaque axe reçoit une note de 0 à 4.

### A. Fidélité documentaire

4 : aucune fragilité documentaire visible dans l’audit pédagogique et la frontière interne est
respectée.

0 : des affirmations manifestement inventées, sur-attribuées ou tirées d’une source
`metadata-only` comme si elle avait été lue.

Cette note est un signal, **pas un remplacement du fact-check proposition par proposition**.
Une faute grave interdit `PASS`, mais un 4/4 ne dispense jamais du gate factuel.

### B. Progressivité pédagogique

4 : chaque section repose sur la précédente et ouvre un niveau de compréhension supplémentaire.

0 : l’ordre est arbitraire, stagnant ou comporte des sauts qui empêchent de suivre.

### C. Densité informationnelle et non-redondance

4 : presque chaque paragraphe possède un delta distinct et utile.

0 : une part importante du texte est de la paraphrase, de l’expansion rhétorique ou une
répétition de l’idée centrale.

### D. Clarté

4 : un lecteur non spécialiste peut suivre sans que la précision soit sacrifiée.

0 : le texte exige le vocabulaire ou les présupposés qu’il était censé enseigner.

### E. Profondeur explicative

4 : le texte explique les mécanismes, causes, conséquences ou conditions pertinentes au lieu
de seulement nommer le concept.

0 : après lecture, le lecteur connaît surtout une définition plus longue.

### F. Valeur des exemples

4 : les exemples font comprendre quelque chose qui serait difficile à saisir sans eux.

0 : ils décorent ou paraphrasent l’énoncé précédent.

L’absence d’exemple n’est pas automatiquement une faute si le concept n’en a pas besoin.

### G. Limites, nuances et distinctions

4 : les limites utiles arrivent au moment où elles permettent d’éviter un contresens ou de
complexifier l’intuition initiale.

0 : elles sont absentes, décoratives, ou rejetées en fin de texte sans effet sur la compréhension.

Cette note porte sur les nuances **utiles au lecteur**, pas sur l’affichage du champ interne
`limits`.

### H. Pouvoir d’ouverture

4 : le texte se termine en laissant une question, une source, une tension ou une connexion qui
donne une raison précise d’aller plus loin.

0 : il s’épuise dans une conclusion répétitive ou une liste de précautions.

## 4. Verdicts

L’auditeur rend exactement un verdict :

- `PASS` : aucun défaut pédagogique majeur ;
- `REVISE` : architecture saine, quelques passages doivent être resserrés, déplacés ou développés ;
- `REWRITE` : structure pédagogique mauvaise ou redondance systémique ;
- `BLOCKED_SOURCE` : la matière disponible ne permet pas honnêtement la profondeur nécessaire.

Un score total n’est jamais suffisant à lui seul. `PASS` exige au minimum :

- aucune faute documentaire critique visible ;
- aucune séquence de trois paragraphes dont les deltas sont substantiellement identiques ;
- aucune section dont le rôle principal est de répéter une section antérieure ;
- une progression explicable en une phrase par section.

**`PASS` pédagogique n’autorise jamais la publication sans `FACTCHECK_PASS`.**

## 5. Diagnostic avant réécriture

On ne réécrit jamais directement après avoir ressenti que le texte est « répétitif ».
L’auditeur doit d’abord produire :

1. la trajectoire pédagogique actuelle, section par section ;
2. le delta de chaque paragraphe ;
3. les groupes de paragraphes redondants ;
4. les informations importantes présentes mais mal placées ;
5. les informations ou mécanismes qui manquent mais sont réellement disponibles dans les sources ;
6. les limites documentaires qui empêchent d’aller plus loin ;
7. une trajectoire pédagogique cible.

Le diagnostic distingue toujours **manque de pédagogie** et **manque de matière sourcée**.
Une réécriture n’a pas le droit d’inventer le second pour corriger le premier.

La sortie détaillée est écrite dans l’artefact de travail de la carte ; l’orchestrateur ne doit
pas transporter ce texte intégral dans son propre contexte.

## 6. Réécriture

`REVISE` et `REWRITE` autorisent une modification. La nouvelle version doit :

- conserver les faits et formulations solides quand ils servent encore la nouvelle trajectoire ;
- supprimer la longueur qui n’apporte aucun delta ;
- déplacer une explication si son ordre actuel crée un saut ;
- développer uniquement à partir des matériaux autorisés par `PROTOCOLE.md` ;
- ne jamais compenser une documentation pauvre par des connaissances générales du modèle ;
- respecter le caractère interne de `limits` ;
- rester conforme à `deepening.schema.json` et à `npm run corpus:deepen -- --check --only=<conceptId>`.

Une version plus courte peut être meilleure. L’augmentation du nombre de mots n’est jamais une
preuve d’approfondissement.

Toute réécriture invalide un fact-check antérieur et impose une nouvelle préparation du pack.

## 7. Revue indépendante

L’agent qui réécrit ne valide jamais sa propre version.

Le reviewer intervient seulement sur une réécriture dont la version exacte possède déjà un
`FACTCHECK_PASS` déterministe. Il compare l’ancienne version, le diagnostic et la nouvelle
version et rend :

- `ACCEPT` si la nouvelle version améliore réellement la progression sans perte documentaire ;
- `REJECT` si elle déplace le problème, introduit une fragilité, ou n’améliore pas assez le texte.

En cas de `REJECT`, la version précédente est restaurée.

## 8. Contexte et récurrence

Chaque agent travaille sur un seul concept dans un contexte frais. Le batch ne partage jamais le
contenu documentaire de plusieurs cartes dans une même invocation.

Le lot par défaut est de 3 cartes, maximum absolu 5. Le budget maximal d’un pack d’agent est de
300 000 tokens estimés ; au-delà, le travail est partitionné sans troncature.

Le dernier audit final de chaque concept vit dans `corpus/deepening-audits/<conceptId>.md`.
Les artefacts détaillés du cycle courant vivent sous
`corpus/deepening-audits/work/<conceptId>/`. Git porte l’historique.

Une carte redevient éligible si :

- aucun rapport n’existe ;
- son approfondissement a changé ;
- son enregistrement validé a changé ;
- la version du protocole a augmenté ;
- elle est demandée explicitement.

La version courante du workflow est `protocol_version: 3`.