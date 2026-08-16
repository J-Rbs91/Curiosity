# Workflow documentaire du corpus

Ce document décide comment un concept entre dans Curiosity : ce qu'on cherche, dans quel
ordre, qui vérifie quoi, et à quelles conditions le concept devient visible dans
l'application. Il est la référence : un désaccord sur une fiche se tranche ici.

Il adapte à la sociologie des organisations une méthode de veille conçue pour la
neuropsychologie clinique. L'ossature est conservée — périmètre fermé, hiérarchie des
sources, contrôleur aveugle, séparation des rôles, rythme piloté par le signal. Ce qui
change est l'objet de la preuve.

---

## 1. Le problème que ce dispositif résout

L'application contient aujourd'hui **35 concepts rédigés de mémoire**. Ils sont
plausibles, souvent justes, et invérifiables : le champ `sources` du type `Concept`
existe depuis le premier jour, n'est renseigné que par des étiquettes (« Weber, Économie
et société », sans édition, sans page, sans DOI), et **n'est affiché nulle part**. Rien,
dans le code actuel, ne distingue une affirmation lue dans un texte d'une affirmation
reconstituée.

C'est acceptable pour un prototype et intenable pour un produit d'apprentissage : une
erreur d'attribution apprise est plus coûteuse qu'une absence de fiche.

Le dispositif décrit ici produit donc deux choses :

1. un **corpus maître** (`corpus/`), riche, sourcé, versionné, hors application ;
2. une **projection** vers `src/content/`, pauvre et lisible, que l'application consomme.

L'application ne lit jamais le corpus maître. Le corpus maître ne connaît jamais l'UI.

---

## 2. Ce qu'on cherche à prouver

En neuropsychologie, la question est « est-ce que ça marche, et à quel niveau de preuve ».
Ici elle est :

> **Peut-on légitimement attribuer ce concept à cet auteur, que signifie-t-il réellement
> dans ses travaux, et notre formulation pédagogique respecte-t-elle cette signification ?**

La chaîne de preuve est donc :

```
auteur → texte primaire → passage/définition → mécanisme → réception académique
       → formulation pédagogique → projection appli
```

Chaque flèche est une occasion de perdre la vérité. Le danger principal n'est pas le faux
chiffre, c'est :

- un vrai concept attribué au mauvais auteur ;
- un vrai auteur dont l'idée est simplifiée jusqu'au contresens ;
- un terme moderne collé rétrospectivement sur un texte ancien ;
- un concept collectif attribué à un seul nom ;
- une vulgarisation devenue si répandue qu'elle a remplacé le texte.

Le dernier cas sera fréquent sur ce périmètre — « rationalité limitée », « garbage can »,
« zones d'incertitude » circulent surtout sous forme vulgarisée.

---

## 3. Le périmètre fermé

Le périmètre est écrit une fois pour toutes dans [`corpus/perimeter.md`](../corpus/perimeter.md)
et n'est pas renégocié fiche par fiche. En résumé :

> Sociologie et théorie des organisations, limitées aux concepts permettant de comprendre
> le fonctionnement des organisations : comportements organisationnels, décision, règles,
> pouvoir, apprentissage, coopération, dysfonctionnements, action collective.

Noyau d'auteurs : **Weber · Merton · Simon · March · Crozier · Friedberg · Hirschman ·
Argyris** (les huit déjà présents dans `src/content/authors.ts`).

Un concept adjacent entre si son rattachement à la compréhension des organisations est
documenté. La question posée à l'agent n'est jamais « est-ce de la sociologie pure ? »
(Hirschman vient de l'économie, Simon de la décision, Argyris de la psychologie) mais :

> Ce concept appartient-il au périmètre intellectuel nécessaire pour comprendre les
> organisations ?

Tout le reste part en `corpus/rejected/` avec `rejection_reason: "OUT_OF_SCOPE"`. On ne
garde pas de zone grise : un concept hors périmètre non rejeté revient toujours.

---

## 4. La hiérarchie documentaire

Elle remplace la hiérarchie des niveaux de preuve.

| Niveau | Source | Usage autorisé |
|---|---|---|
| **A — primaire** | Texte de l'auteur : ouvrage, article original, traduction identifiée | Établir ce que l'auteur dit réellement |
| **B — secondaire académique** | Article peer-reviewed, chapitre universitaire portant sur l'auteur | Vérifier l'interprétation et l'attribution |
| **C — synthèse académique** | Handbook, encyclopédie universitaire, revue de littérature | Contextualiser, découvrir |
| **D — pédagogique** | Cours universitaire, ressource institutionnelle | Détection uniquement |
| **E — web général** | Wikipédia, blogs, presse, sites divers | Pistes uniquement — jamais cité |

Trois règles non négociables :

1. **Une source de niveau E ne devient jamais une preuve par répétition.** Quinze sites
   concordants qui ne remontent à aucun texte académique ne valent rien. Le concept
   n'entre pas.
2. **Une référence qu'on ne peut pas atteindre n'existe pas.** Pas de DOI, pas d'ISBN, pas
   d'URL stable, pas de localisation dans l'ouvrage → la source ne compte pas.
3. **On vérifie ce que la source conclut, pas qu'elle existe.** C'est le contrôle le plus
   important : un texte peut citer la bonne étude, avec le bon titre, et lui faire dire
   l'inverse.

### La couche francophone est cherchée en amont

Jamais ajoutée en relecture. Les deux voies sont interrogées **en parallèle** :

```
                        CONCEPT
                           │
        ┌──────────────────┴──────────────────┐
        │                                     │
 littérature internationale          littérature francophone
        │                                     │
 Semantic Scholar / OpenAlex          HAL / Persée / Cairn
 Crossref / JSTOR (métadonnées)       OpenEdition / theses.fr
        │                                     │
        └──────────────────┬──────────────────┘
                           ▼
                     confrontation
```

Ce n'est pas de la coquetterie : Crozier et Friedberg publient d'abord en français, et la
réception française de Weber, Merton ou Simon passe par des traductions dont le
vocabulaire ne recouvre pas exactement l'original (« domination » / *Herrschaft*,
« rationalité en finalité » / *Zweckrationalität*). Le champ `translation_notes` du schéma
existe pour ça.

---

## 5. Le mécanisme avant l'exemple

Règle reprise telle quelle de la méthode d'origine, avec un test de suffisance adapté :

> Une personne ayant lu cette fiche peut-elle **reconnaître le mécanisme dans une
> organisation réelle** qu'elle n'a jamais vue décrite ?

Si non, la fiche est incomplète, même si tout ce qu'elle dit est vrai.

Concrètement, la fiche candidate n'est pas rédigée avant que le mécanisme ne soit écrit
comme une **chaîne d'étapes**. Exemple (Merton) :

```
règles créées pour atteindre un objectif
        ↓
la conformité aux règles est valorisée et contrôlée
        ↓
la conformité devient le critère de réussite observé
        ↓
les moyens acquièrent une valeur propre
        ↓
respecter la procédure prend le pas sur la finalité initiale
```

`mechanism` est un tableau ordonné, minimum deux étapes, et le validateur le vérifie. La
prose pédagogique ne vient qu'après, et doit pouvoir se relire comme la mise en phrases de
cette chaîne.

Fiche refusée : « Déplacement des buts : une organisation peut oublier ses objectifs. »
C'est vrai, et vide.

---

## 6. Deux objets, jamais un seul

C'est la décision structurante.

### L'objet maître — `corpus/**/<id>.json`

Riche : attribution détaillée, sources primaires localisées, réception, ambiguïtés
connues, mésinterprétations courantes, limites, traçabilité de chaque phrase pédagogique,
journal de validation. Schéma : [`corpus/schema/concept.record.schema.json`](../corpus/schema/concept.record.schema.json).

### L'objet appli — `Concept` dans `src/types/index.ts`

Pauvre : titre, question d'accroche, deux explications, un exemple, des questions
d'analyse, un quiz, une difficulté, des relations, des sources étiquetées.

La projection est **mécanique et à sens unique** (`npm run corpus:build`). On n'édite
jamais un concept généré à la main : la correction se fait dans l'objet maître, puis on
reprojette. C'est ce qui garantit qu'aucune phrase de l'application n'existe sans un
enregistrement sourcé derrière elle.

### Ce que l'appli exige et que la méthode d'origine ne prévoyait pas

L'application n'affiche pas des fiches : elle fait fonctionner un **graphe** et un moteur
pédagogique (`src/services/learning-engine`). Elle a donc besoin de quatre familles de
données supplémentaires, qui sont elles aussi des affirmations et se vérifient comme
telles :

| Donnée appli | Statut épistémique | Règle |
|---|---|---|
| `relatedConcepts`, `prerequisites`, `deepensInto`, `oppositeConcepts` | **Affirmations** sur la structure du champ | Chaque relation porte un `relation_kind` et une justification |
| `quiz` | Reformulation testable | Chaque bonne réponse et chaque explication doivent être dérivables de `evidence` |
| `difficulty` | Décision pédagogique | Justifiée par les prérequis, pas par l'intuition |
| `concreteExample` | Illustration | Doit montrer le mécanisme, pas coller l'étiquette du concept sur une situation |

Le `relation_kind` traite directement la confusion « corrélation historique ≠ filiation
intellectuelle » :

- `documented_filiation` — l'auteur B a lu et repris A, c'est sourcé (Simon → March) ;
- `thematic_proximity` — même objet, sans filiation établie ;
- `pedagogical_contrast` — rapprochement fabriqué par nous pour l'enseignement, assumé
  comme tel, jamais présenté comme un lien historique.

Une relation `documented_filiation` sans source est refusée par le validateur.

---

## 7. Les agents

Neuf sous-agents, dans `.claude/agents/`. La règle centrale est celle de la méthode
d'origine : **celui qui cherche et rédige ne valide pas ; celui qui valide ne publie pas.**

| Agent | Mission | Interdiction |
|---|---|---|
| `corpus-orchestrator` | Distribue le travail, applique le protocole, gère les états | Ne produit **aucune** connaissance, ne tranche jamais sur le fond |
| `corpus-scout` | Repère les concepts candidats et les sources atteignables | Ne valide rien, ne rédige rien |
| `corpus-primary-reader` | Établit ce que dit le texte de l'auteur, localisation à l'appui | Ne vulgarise pas, ne compare pas les auteurs |
| `corpus-reception-analyst` | Établit comment la littérature académique lit ce concept | Ne modifie jamais le bloc primaire |
| `corpus-concept-analyst` | Écrit définition, mécanisme, ambiguïtés, limites | Ne se valide pas lui-même, n'écrit pas la pédagogie |
| `corpus-blind-reviewer` | Revérifie indépendamment, fait par fait | Ne connaît ni le brief ni la confiance des agents amont |
| `corpus-pedagogy-writer` | Écrit accroche, explications, exemple, questions, quiz | **N'introduit aucune affirmation absente de `evidence`** |
| `corpus-graph-curator` | Établit relations, prérequis, difficulté | Ne touche ni à `evidence` ni à `pedagogy` |
| `corpus-editor` | Projette vers l'application | Ne peut traiter que des fiches `VALIDATED` |

L'orchestrateur n'est pas un expert. Il ne dit jamais « Merton = déplacement des buts,
donc c'est bon ». Il constate des états et déclenche des étapes.

### Le contrôleur aveugle

C'est le cœur du dispositif, et la partie qu'il ne faut pas assouplir.

`corpus-blind-reviewer` reçoit **l'affirmation, l'attribution et les sources**. Il ne
reçoit pas : le brief initial, le niveau de confiance annoncé, le nom des agents amont,
les tentatives précédentes, ni la mention « concept très connu ». Il refait sa propre
recherche et tranche fait par fait.

Il rend, pour chaque fiche :

```
ATTRIBUTION      : confirmée | douteuse | fausse
SOURCE PRIMAIRE  : confirmée | non confirmée
INTERPRÉTATION   : fidèle | trop large | trop étroite | déformée
SOURCES          : concordantes | divergentes | insuffisantes
VERDICT          : PASS | REWORK | REJECT
```

Il passe deux fois, sur deux objets différents :

- **passe A — preuve** : sur `evidence` seul, avant toute rédaction pédagogique ;
- **passe B — fidélité** : sur `pedagogy` confronté à `evidence`, avec une question
  unique — *cette prose ajoute-t-elle quelque chose que les sources n'établissent pas ?*

Une passe B qui échoue ne renvoie pas à la recherche : elle renvoie à la réécriture.

---

## 8. Le protocole d'orchestration

```
                      concept candidat
                             │
                    [scout] périmètre + sources atteignables
                             │
                  sources primaires trouvées ? ──non──▶ rejected/ (NO_PRIMARY_SOURCE)
                             │oui
              ┌──────────────┴──────────────┐
     [primary-reader]                [reception-analyst]      ← en parallèle,
     texte de l'auteur                littérature secondaire     couche FR incluse
              └──────────────┬──────────────┘
                             │
                   [concept-analyst] → evidence{}          candidates/
                             │
                   [blind-reviewer] passe A                review/
                    ┌────────┼────────┐
                  PASS    REWORK    REJECT
                    │        │         └──────────────────▶ rejected/
                    │        └── retour analyst (max 2 tours) ──┐
                    │                                           │
           [pedagogy-writer] → pedagogy{}                 3 tours ▶ rejected/
                    │                                     (UNRESOLVED)
           [blind-reviewer] passe B
                    ├── REWORK ──▶ retour pedagogy-writer (max 2 tours)
                    │PASS
           [graph-curator] → graph{}
                    │
              status VALIDATED                            validated/
                    │
              [corpus-editor] npm run corpus:build         src/content/generated/
```

### États et répertoires

Le répertoire **est** l'état. Le validateur refuse toute incohérence entre
`record.status` et l'emplacement du fichier.

| Répertoire | `status` | Signification |
|---|---|---|
| `corpus/candidates/` | `CANDIDATE` | Bloc `evidence` en cours, pas encore contrôlé |
| `corpus/review/` | `IN_REVIEW` | Soumis au contrôleur, ou en REWORK |
| `corpus/validated/` | `VALIDATED` | Les deux passes en PASS — seul répertoire projetable |
| `corpus/rejected/` | `REJECTED` | Avec `rejection_reason` obligatoire, conservé |

Les rejets sont **conservés et versionnés**. Un concept rejeté pour attribution douteuse
qui reviendrait six mois plus tard doit retrouver la trace de son premier examen.

### Critères PASS / REWORK / REJECT

**PASS** exige tout ce qui suit :

- au moins **une source primaire** atteignable et localisée (page, chapitre, section) ;
- au moins **une source secondaire académique indépendante** ;
- la couche francophone **cherchée** (trouvée ou non, mais `francophone_layer_searched: true`) ;
- attribution cohérente avec `authorship` (voir §9) ;
- `mechanism` d'au moins deux étapes, passant le test de suffisance ;
- aucun chiffre, date ou effectif dans la prose qui ne figure pas dans `evidence`.

**REWORK** : la matière est là mais l'énoncé déborde — interprétation trop large, mécanisme
incomplet, source secondaire qui n'établit pas ce qu'on lui fait dire, exemple qui colle
l'étiquette sans montrer le mécanisme. Deux tours maximum par passe.

**REJECT** : attribution fausse, aucune source primaire atteignable, concept hors
périmètre, concept qui n'existe que dans la vulgarisation, ou trois tours sans
convergence.

---

## 9. Les confusions activement traquées

Cette table fait littéralement partie du prompt système du contrôleur aveugle. Elle n'est
pas décorative : chaque ligne vient d'une erreur que ce corpus peut produire.

| Confusion | Exemple sur ce périmètre |
|---|---|
| Concept de l'auteur ≠ terme inventé plus tard | Un commentateur baptise une idée que l'auteur n'a jamais nommée ainsi |
| Auteur principal ≠ auteur unique | *Garbage can* = Cohen, March & Olsen (1972), pas « un concept de March » |
| Concept ≠ vulgarisation populaire | Rationalité limitée ≠ « les humains sont irrationnels » |
| Idéal-type ≠ recommandation | Weber ne prescrit pas la bureaucratie, il en construit le type pur |
| Description ≠ prescription | Décrire un mécanisme n'est pas le recommander |
| Individuel ≠ organisationnel | Une explication psychologique plaquée sur une structure |
| Corrélation historique ≠ filiation intellectuelle | Deux auteurs traitent d'un phénomène voisin sans lien de reprise |
| Traduction ≠ équivalence | Un terme français peut recouvrir plusieurs termes originaux |
| Concept spécifique ≠ terme générique | « Déplacement des buts » ≠ « perdre ses objectifs » |
| Association ≠ paternité | Populariser un concept n'est pas l'avoir créé |

Le champ `authorship` du schéma existe pour la deuxième ligne :

```json
{
  "authors": [
    { "name": "Michael D. Cohen" },
    { "name": "James G. March", "app_author_id": "march" },
    { "name": "Johan P. Olsen" }
  ],
  "authorship": "COAUTHORED",
  "associated_author": "James G. March"
}
```

Sans cela, le corpus fabrique lentement une histoire intellectuelle fausse, par
simplification d'affichage. Côté application, le champ `attributionNote` porte cette
information jusqu'à l'écran : la fiche affiche les vrais coauteurs même quand le concept
est rangé sous un seul nom.

---

## 10. Le rythme

Piloté par le signal, jamais par un objectif de volume.

> Pas de preuve documentaire suffisante → pas de fiche.

Conséquences pratiques :

- **Aucun quota par auteur.** Interdiction formelle d'équilibrer artificiellement. Si le
  corpus finit à March 18 / Merton 11 / Crozier 14 / Friedberg 7 / Simon 16 / Argyris 12 /
  Weber 9 / Hirschman 6, c'est un résultat, pas un défaut : il reflète la littérature.
  Exiger « 15 par auteur » produit mécaniquement des concepts secondaires ou douteux chez
  les auteurs les moins prolifiques sur ce périmètre.
- **Une session qui explore 15 candidats et en valide 11 est une bonne session.** Le
  rapport candidats/validés est journalisé, pas optimisé.
- **Alternance thématique.** Interdiction d'enchaîner trois lots sur le même thème : la
  veille se referme sinon sur la bureaucratie, qui est le thème le plus documenté.
- **L'incertitude est une donnée du corpus.** `known_ambiguities`, `limitations`,
  `common_misinterpretations` ne sont pas des aveux de faiblesse : ce sont des champs qui
  se remplissent. Une fiche qui les a tous vides est suspecte, pas exemplaire.

---

## 11. Du corpus à l'application

### Les commandes

```bash
npm run corpus:validate   # schéma, cohérence, intégrité du graphe, gating
npm run corpus:build      # corpus/validated/ → src/content/generated/
npm run corpus:audit      # état du corpus : vérifié / hérité / manquant
```

`corpus:build` **appelle d'abord `corpus:validate`** et refuse de produire quoi que ce
soit si une fiche `corpus/validated/` échoue. C'est le garde-fou technique de la règle
« rien ne part en ligne sans être passé par le contrôle » : il ne dépend pas de la
discipline d'un agent.

### La cohabitation avec l'existant

```
src/content/
├── concepts.ts               ← 35 fiches héritées, non vérifiées (pool à drainer)
├── generated/
│   └── concepts.generated.ts ← produit par corpus:build, jamais édité à la main
└── index.ts                  ← fusionne : une fiche générée remplace l'héritée de même id
```

La fusion se fait **par `id`**. Reprendre un concept existant ne demande donc aucune
modification de l'application : dès que `deplacement-des-buts` sort validé du pipeline, la
version générée remplace silencieusement l'héritée, et la ligne correspondante peut être
supprimée de `concepts.ts`. Le graphe reste intact pendant toute la transition, puisque
les identifiants sont conservés.

`npm run corpus:audit` donne à tout moment le reste à faire.

### Ce que l'application affiche de plus

Deux ajouts minimaux au type `Concept`, et rien d'autre :

- `attributionNote?: string` — une ligne sous le titre quand l'attribution ne se réduit
  pas à un nom (coauteurs, concept associé, terme forgé par un tiers) ;
- `SourceKind` gagne `secondary-academic` et `francophone-reception`, pour que la
  projection ne fasse pas passer un article peer-reviewed pour une « interprétation
  pédagogique ».

Le reste de l'UI est inchangé : la direction UX (`docs/ux-direction.md`) interdit les
compteurs, badges et indicateurs, et un badge « vérifié » n'apprendrait rien à personne.
La garantie est structurelle — ce qui est affiché vient d'un enregistrement validé — pas
signalétique.

### Reprise des 35 fiches héritées

Elles ne sont pas corrigées : elles sont **re-instruites**, une par une, par le pipeline
complet, comme n'importe quel candidat. Leur texte actuel n'est jamais transmis au
contrôleur aveugle, et ne sert pas de point de départ à `corpus-primary-reader` : il
serait alors une source de niveau E déguisée. Il ne sert qu'à une chose, en entrée du
scout : indiquer quel concept instruire.

Ordre recommandé, par risque décroissant :

1. les concepts **coécrits ou mal attribuables** (`garbage-can-model`,
   `systeme-d-action-concret`, `regulation-conjointe`, `single-loop-learning`,
   `double-loop-learning`) — c'est là que l'histoire intellectuelle se fausse ;
2. les concepts **fortement vulgarisés** (`rationalite-limitee`, `satisficing`,
   `zones-incertitude`, `deplacement-des-buts`) ;
3. les concepts **structurants du graphe**, dont beaucoup d'autres dépendent
   (`bureaucratie`, `acteur-strategique`, `processus-de-decision`) ;
4. le reste.

Les cas pratiques (`src/content/case-studies.ts`) passent en dernier : une lecture croisée
n'a de sens que si les concepts qu'elle mobilise sont déjà validés. Le validateur refuse
d'ailleurs une lecture qui s'appuie sur un concept absent.

---

## 12. Refusé par principe

Sans exception, quel que soit le degré d'urgence ou d'évidence apparente :

- inventer ou reconstituer de mémoire une référence, une date, une pagination, un chiffre ;
- présenter un concept coécrit sous un seul nom pour simplifier l'affichage ;
- faire d'une source de niveau E une preuve par accumulation ;
- écrire la fiche pédagogique avant que le mécanisme ne soit établi ;
- laisser un agent valider son propre travail ;
- transmettre au contrôleur aveugle le niveau de confiance amont ;
- éditer à la main un fichier de `src/content/generated/` ;
- combler un trou de corpus pour équilibrer un auteur.

> Une référence introuvable n'existe pas.
> Une source qui ne dit pas ce qu'on lui fait dire n'est pas une preuve.
> Une affirmation n'est pas validée par celui qui l'a produite.
> Un concept séduisant mais insuffisamment documenté ne sort pas.
> L'incertitude est une donnée du corpus, pas quelque chose à faire disparaître.
