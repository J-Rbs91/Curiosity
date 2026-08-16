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

### Les outils bibliométriques, dont scite

Semantic Scholar, OpenAlex, Crossref et scite ne sont pas des niveaux de la hiérarchie :
ce sont des **instruments** qui aident à parcourir les niveaux B et C. Un résultat qui en
sort n'a pas de statut propre — il désigne un texte, qu'il faut ensuite ouvrir.

scite mérite une mention particulière parce qu'il fait quelque chose que les autres ne
font pas : il classe chaque citation en *supporting*, *contrasting* ou *mentioning*, en
extrayant la phrase de contexte. C'est précieux à deux endroits, et dangereux à un
troisième.

**Là où il sert :**

- `corpus-reception-analyst` — les proportions et surtout les citations *contrasting*
  donnent directement de quoi remplir `reception.debates`, `reception.critiques` et
  `known_ambiguities`. Un concept dont la réception est contestée doit le dire ; c'est
  exactement ce que le corpus doit savoir de lui-même.
- `corpus-blind-reviewer` — lire les phrases de citation permet de vérifier **ce qu'une
  source conclut** avant de l'ouvrir, ce qui est précisément le contrôle le plus important
  du dispositif, ici mené à l'échelle. Et l'écart entre ce que les textes citants font
  dire à l'auteur et ce que son texte dit est le meilleur détecteur automatique de la
  confusion « concept ≠ vulgarisation dominante ».

**Là où il ne sert pas, et où il faut l'écrire :**

> Une phrase de citation extraite par scite est un extrait du **texte citant**, pas du
> texte cité. Elle ne devient jamais une source primaire, ne devient jamais
> `key_quotation`, et n'établit jamais une attribution à elle seule.

Sans cette règle, l'outil se retourne : quinze citations concordantes *supporting*
ressemblent à une preuve, alors que ce sont quinze auteurs qui répètent peut-être la même
lecture de seconde main. C'est la « preuve par répétition » du niveau E, avec une interface
savante. Le nombre de citations concordantes n'est pas un argument ; c'est un signal à
vérifier sur le texte.

**Sa limite sur ce corpus, à connaître avant de s'y fier :** scite est indexé sur les DOI
et sur le texte intégral d'articles. Or notre noyau est fait d'**ouvrages**, dont plusieurs
en français et antérieurs à la généralisation des DOI — *Le Phénomène bureaucratique*
(1963), *L'Acteur et le système* (1977), *Économie et société*. La couverture y sera
faible, précisément là où la couche francophone compte le plus. Elle sera en revanche
excellente sur Cohen, March & Olsen (1972), Merton (1940) ou les articles d'Argyris. Il
complète les bases, il ne les remplace pas.

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

## 5 bis. La citation de l'auteur

Une fiche peut porter un passage du texte, cité mot pour mot (`evidence.key_quotation`,
affiché par `ConceptQuotation`). C'est le **seul élément de l'application qui ne passe pas
par nos mots** : tout le reste — résumé, mécanisme, exemple, quiz — est une reformulation.

Quatre conditions, vérifiées par le validateur :

1. **Verbatim.** Le texte enregistré est le texte, sans guillemets (l'application les
   pose) et sans lissage. Une coupe se signale par `[…]`. Le caractère verbatim lui-même
   ne s'automatise pas : c'est le contrôleur aveugle qui le confronte à l'édition.
2. **Rattachée à une source primaire réellement ouverte.** La citation pointe sur une
   entrée de `primary_sources` par son index, et cette source ne peut pas être en
   `consulted: "metadata-only"` — on ne cite pas un texte qu'on n'a pas lu.
3. **Localisée.** Chapitre, section, page. Une citation qu'on ne peut pas rouvrir à la
   bonne page ne vaut rien.
4. **Honnête sur sa traduction.** C'est le piège principal de ce corpus. Une phrase de
   Weber lue en français est passée par quelqu'un. Le validateur détecte automatiquement
   qu'une traduction a eu lieu — quand la langue de la citation diffère de celle de sa
   source — et impose alors soit une traduction publiée avec **traducteur et édition**
   nommés, soit une traduction de notre fait, qui doit conserver `original_text` et
   s'annoncer telle quelle à l'écran. Afficher une traduction anonyme, ce serait présenter
   une interprétation comme une parole d'auteur.

Deux règles de fond, qui ne se relâchent jamais :

- **Une citation ne remplace pas le mécanisme.** Elle l'ancre. Une fiche dont le mécanisme
  est faible ne devient pas bonne parce qu'elle est joliment citée — c'est même le mode de
  défaillance à surveiller, la citation étant ce qui se retient le plus facilement.
- **La citation est facultative, et c'est délibéré.** Beaucoup de concepts n'ont pas de
  passage court et autonome qui les énonce : l'idée est distribuée sur un chapitre entier.
  Exiger une citation partout garantirait exactement ce que ce dispositif existe pour
  empêcher — une belle phrase fabriquée, ou sortie de son contexte pour tenir dans un
  écran. Pas de passage citable établi : pas de citation, et la fiche reste complète.

Sur les concepts coécrits, `attributed_to` est obligatoire : on ne prête pas à l'un les
mots d'un ouvrage à trois signatures.

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
| `corpus-primary-reader` | Établit ce que dit le texte de l'auteur, localisation à l'appui, et le passage citable s'il en existe un | Ne vulgarise pas, ne compare pas les auteurs |
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
| Phrase du texte ≠ phrase d'un texte citant | Une citation extraite par scite ou Semantic Scholar est écrite par celui qui cite, pas par l'auteur |
| Traduction affichée ≠ parole d'auteur | Un passage traduit sans traducteur nommé présente une interprétation comme un original |

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
npm run corpus:audit      # état du corpus : validé, en cours, sujets jamais instruits
```

`corpus:build` **appelle d'abord `corpus:validate`** et refuse de produire quoi que ce
soit si une fiche `corpus/validated/` échoue. C'est le garde-fou technique de la règle
« rien ne part en ligne sans être passé par le contrôle » : il ne dépend pas de la
discipline d'un agent.

### Le corpus, et ce qui n'en est pas

```
src/content/
├── generated/
│   └── concepts.generated.ts   ← LE corpus : produit par corpus:build, jamais édité
├── fixtures/
│   └── concepts.fixture.ts     ← échafaudage : 35 fiches écrites de mémoire, dev seulement
└── index.ts                    ← compose : vérifié toujours, échafaudage sur demande
```

Les 35 fiches de `fixtures/` n'ont jamais été un corpus. Elles ont été écrites de mémoire,
avant qu'aucun dispositif de vérification n'existe, pour une seule raison : donner au
moteur pédagogique, au graphe et aux écrans de quoi être construits et testés. Elles ne
sont pas un état antérieur du corpus qu'il suffirait de corriger — leur ressemblance avec
la réalité n'a jamais été établie, et rien ne distingue en elles ce qui est juste de ce
qui est plausible.

Trois conséquences, appliquées par le code et non par la vigilance :

- **Elles ne sont servies qu'en développement.** `NEXT_PUBLIC_CORPUS_FIXTURES` vaut `on`
  ou `off` ; par défaut, actif hors production. Un build de production ne peut pas les
  embarquer par accident, et un build de démonstration ne peut les inclure qu'en le
  disant.
- **Elles sont marquées.** `provenance: "fixture"` est posé à la composition, et la fiche
  l'affiche : « contenu écrit sans vérification documentaire ».
- **Elles ne portent rien.** Une fiche validée ne peut avoir ni relation, ni prérequis,
  ni approfondissement vers un sujet d'échafaudage : le validateur exige que toute
  référence désigne une **autre fiche validée**. Le graphe se construit donc au rythme du
  corpus, et les premières fiches sont peu reliées — c'est le prix, et il est juste.

**Le corpus peut donc être vide, et c'est un état légitime.** Le moteur pédagogique
retourne `null` au lieu de fabriquer une session, et l'écran d'accueil le dit : « le
corpus est en cours de constitution ». Remplir pour éviter un écran vide reviendrait
exactement à préférer un contenu faux à un contenu absent, ce que tout le reste de ce
document interdit.

Quand un sujet d'échafaudage est instruit, on reprend **le même identifiant** : la fiche
d'échafaudage cesse d'être servie, et son entrée peut être supprimée du fichier —
`corpus:build` les liste. Ce fichier est destiné à disparaître, non à être maintenu.

### Ce que l'application affiche de plus

Trois ajouts au type `Concept`, et rien d'autre :

- `attributionNote?: string` — une ligne sous le titre quand l'attribution ne se réduit
  pas à un nom (coauteurs, concept associé, terme forgé par un tiers) ;
- `quotation?: Quotation` — le passage de l'auteur, sa référence et, le cas échéant, le
  nom de son traducteur (§5 bis) ;
- `SourceKind` gagne `secondary-academic` et `francophone-reception`, pour que la
  projection ne fasse pas passer un article peer-reviewed pour une « interprétation
  pédagogique ».

Le reste de l'UI est inchangé : la direction UX (`docs/ux-direction.md`) interdit les
compteurs, badges et indicateurs, et un badge « vérifié » n'apprendrait rien à personne.
La garantie est structurelle — ce qui est affiché vient d'un enregistrement validé — pas
signalétique.

### Par quoi commencer

Le corpus part de zéro. Les sujets de l'échafaudage indiquent tout au plus ce qui avait
paru intéressant à couvrir : c'est une liste de pistes, pas une dette à rembourser, et
aucun de leurs textes n'entre dans le pipeline — ni comme source, ni comme point de
départ, ni comme aide à la rédaction. Ce serait une source de niveau E déguisée, avec
l'aggravation qu'elle porte notre propre nom.

Ordre suggéré, par ce qu'il apprend sur la méthode plus que par ce qu'il rapporte :

1. Un concept **manifestement coécrit** (`garbage-can-model` : Cohen, March & Olsen, 1972)
   — il exerce d'emblée `authorship`, `attributed_to` et `attributionNote`, là où
   l'échafaudage écrivait simplement « James March ».
2. Un concept **fortement vulgarisé** (`rationalite-limitee`) — c'est là que la passe B et
   `common_misinterpretations` prennent tout leur sens.
3. Un concept **d'ouvrage français** (`zones-incertitude`) — il mesure ce que valent
   réellement les bases internationales sur cette partie du périmètre, et ce que la couche
   francophone doit rattraper.

Trois fiches suffisent pour savoir si le dispositif tient. Après quoi la cadence est celle
du signal : pas de preuve documentaire suffisante, pas de fiche.

Les cas pratiques (`src/content/case-studies.ts`) passent en dernier, et pour la même
raison : une lecture croisée n'a de sens que si les concepts qu'elle mobilise sont validés.
Ceux d'aujourd'hui reposent sur de l'échafaudage — ils en sont donc eux-mêmes.

---

## 12. Refusé par principe

Sans exception, quel que soit le degré d'urgence ou d'évidence apparente :

- inventer ou reconstituer de mémoire une référence, une date, une pagination, un chiffre,
  et à plus forte raison une citation ;
- présenter comme une parole de l'auteur une phrase écrite par un texte qui le cite ;
- afficher un passage traduit sans dire par qui ;
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
