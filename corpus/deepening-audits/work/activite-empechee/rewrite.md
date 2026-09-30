concept : activite-empechee
mode    : REVISE (application de `corpus/deepening-audits/work/activite-empechee/audit.md`)
date    : 2026-09-30

## Matière lue

- `corpus/deepenings/PROTOCOLE.md`, `AUDIT_PROTOCOL.md` (v3), `FACTCHECK_PROTOCOL.md` (v2)
- `corpus/deepenings/activite-empechee.json` (version auditée)
- `corpus/validated/activite-empechee.json` : champ `dossier` **absent** (`None`), le répertoire
  conventionnel est donc le seul à ouvrir
- `corpus/evidence/activite-empechee/` listé : **un seul fichier**, `lecture.json`, lu en entier
  (`attribution`, `quotation`, `sources_ouvertes`, `definition_de_lauteur`, `reserves`). Aucun
  `scouting.json`, aucun fichier de réception.
- entrée `activite-empechee` de `src/content/generated/concepts.generated.ts`, pour mesurer ce que
  l'`attributionNote` affiche déjà au lecteur
- `scripts/corpus/lib/deepenings.mjs` et `deepen.mjs`, pour connaître le périmètre exact du
  contrôle de citations (enregistrement validé + fichiers du dossier, via `dossierBrut`)

Niveaux d'accès : les cinq sources de `sources_ouvertes` sont `consulted: "full-text"`. Aucune
source `metadata-only` n'a été mobilisée. Les deux ouvrages PUF, Clot 2003c, Clot & Leplat 2005 et
tout texte de Dejours n'ont **aucun** `consulted` : traités comme non lus, aucune phrase sur leur
contenu.

Aucune recherche web. Aucun fait ajouté de mémoire (en particulier : ni prénom, ni qualité, ni
dates pour Vygotski, que le dossier ne nomme que par son patronyme).

## Compte de mots lecteur (lead + sections, `limits` exclu)

Comptés avec `words()` du script, sur la version de `HEAD` et sur la nouvelle :

| | avant | après |
|---|---|---|
| lead | 208 | 208 (inchangé au mot) |
| sections | 959 | 1 363 |
| **texte lecteur (lead + sections)** | **1 167** | **1 571** |
| `limits` (interne, non affiché) | 249 | 344 |
| total compté par le script | 1 416 | 1 915 |

(L'audit annonçait 1 135 mots lecteur et 281 de `limits` pour le même total de 1 416 : le partage
diffère de 32 mots selon la manière de compter les mots composés, le total non. Les chiffres
ci-dessus sont ceux du script.)

L'augmentation porte **entièrement** sur de la matière citée verbatim dans les fichiers autorisés
et jamais employée : le mécanisme vygotskien du conflit d'activités possibles, l'enjeu de santé, le
déplacement d'objet du texte de 2004, la fin de l'énumération de 2024, la glose de Simonet, Caroly
& Clot 2011, et la formule ergonomique contre laquelle le concept se construit. Les 291 mots que
l'audit relevait sans delta propre ont été retirés dans le même mouvement. Le solde est de
+404 mots lecteur pour cinq deltas nouveaux, dont trois que l'audit désignait comme le cœur
manquant. Aucun objectif de longueur n'a été poursuivi : le texte lecteur atteint 1 571 mots parce
que cinq paliers ont été ajoutés, et il aurait été rendu plus court si la matière avait manqué.

## Gestes par catégorie

### Suppressions (REMOVE)

1. **Section « Une idée qui n'est pas présentée comme neuve » supprimée en entier** (185 mots,
   2 paragraphes). Son contenu est mot pour mot en substance l'`attributionNote` que la carte
   affiche avant l'ouverture de l'approfondissement (renvoi à un texte antérieur de lui-même,
   filiation Vygotski, élaboration de l'équipe du Cnam, tiers de bibliographie cosigné). Défaut
   majeur 1 de l'audit.
2. **S1.P2 supprimé** (106 mots) : l'exemple inventé de la machine en panne réénumérait lead[0]
   (essais qui ne donnent rien, hésitation à appeler un collègue, solution trouvée presque par
   hasard). Défaut majeur 4.
3. **Moitié de S1.P1 supprimée** : « on peut voir la surface entière sans jamais soupçonner ce
   qu'il y a en dessous », reparaphrase de lead[1].
4. **« Quatre éléments, donc »** supprimé : l'énumération de 2024 se poursuit et la source la
   laisse ouverte. Défaut majeur 6.
5. **« en disent souvent plus long sur les difficultés réelles d'un travail que le résultat »**
   supprimé : évaluation de fréquence sans appui. Défaut majeur 5.
6. **« une bonne partie de ce que le travail apprend à quelqu'un se joue précisément dans cette
   diversité »** supprimé : sans appui. Défaut majeur 5.
7. **« C'est précisément cet écart que le texte de 2018 demande de prendre en compte »**
   supprimé : faisait dire au texte de 2018 une comparaison interindividuelle qu'il ne formule
   pas. Défaut majeur 5.
8. **« ce que l'auteur cherche à distinguer » (suspendue vs contrariée)** supprimé, et la
   distinction n'est **pas** réécrite comme lecture proposée : aucune source ne la formule, et la
   développer même marquée n'apportait rien que la variété du pluriel ne dise déjà. Défaut
   majeur 5. Interdiction reportée dans `limits[2]`.
9. **Point final abusif après la citation de Vygotski en 2004** : disparu avec la section.

### Réductions de portée (NARROW)

10. L'énumération de 2024 n'est plus refermée : « La liste, elle, avance par ajouts et ne se
    referme sur aucun compte ».
11. « L'ergonomie **a l'habitude de** distinguer » au lieu d'une antériorité datée : calqué sur
    « a-t-on pris l'habitude de dire » de la source.
12. Aucune phrase sur la diffusion ou la fréquence des reprises : la notion est dite
    « couramment confondue » avec la psychodynamique du travail, ce que le dossier porte, et rien
    sur l'ampleur de sa circulation, qu'aucun relevé ne mesure.
13. La différence avec la psychodynamique du travail est **signalée et non caractérisée** ;
    Christophe Dejours n'est pas nommé dans le texte lecteur (il l'est dans `limits`, à titre
    d'interdit).

### Réattributions (REATTRIBUTE)

14. Le mécanisme du conflit d'activités possibles est attribué à **Vygotski cité par Clot**, pas à
    Clot : « il ne la présente pas comme sienne : il rapporte à Vygotski l'idée qui soutient toute
    la notion, et le cite ». La filiation se dit là où elle sert, et en deux lignes, la carte
    l'affichant déjà.
15. L'inventaire du volume est attribué au texte de 2024 et non à celui de 2004, avec l'écart de
    vingt ans énoncé : « le texte de 2004 ne le dit pas : il pose l'écart sans en faire
    l'inventaire ».
16. La règle d'analyse et « conceptuellement stabilisée » sont attribuées au texte cosigné de
    2018, avec son « nous » rendu par « est pour eux ».
17. La glose opératoire est attribuée à l'article de 2011 cosigné, verbatim.

### Marquages d'interprétation (MARK_AS_INTERPRETATION)

18. Le test des deux personnes au même résultat n'est plus donné comme une exigence du texte de
    2018 : il suit la citation de 2011 comme conséquence dérivée (« Deux personnes qui obtiennent
    le même résultat n'ont **donc** pas traversé le même travail »), autorisée par « Elle ne limite
    donc pas les possibilités du professionnel observé à ce qu'on lui voit faire ».
19. « Un empêchement ne se repère **pas forcément** comme un blanc dans l'emploi du temps » :
    conséquence explicitement dérivée de la fin de l'énumération, non énoncé de l'auteur.

### Non-établissement maintenu comme non-établissement (point 9 de l'audit, non tranché)

20. **L'origine du substantif n'est affirmée dans aucun sens.** S5 dit trois choses, et seulement
    trois : l'étiquette circule au singulier ; l'auteur écrit un pluriel adjectivé, ce que
    `notes[1]` établit ; et « Le substantif n'est pas pour autant étranger à son œuvre : un article
    de 2011 qu'il cosigne l'emploie, en le renvoyant à l'un de ses livres antérieurs. Où il paraît
    pour la première fois sous sa plume n'est pas établi par les sources disponibles. » La phrase
    « Ce n'est pas exactement ce qu'écrit l'auteur », qui transformait une impossibilité
    d'établissement en constat négatif, a disparu. Aucune page ni aucun contenu du livre de 1999
    n'est évoqué.

### Ajouts (matière lue, jamais employée)

21. **S3 « Pourquoi ce qui n'a pas eu lieu pèse encore »**, section nouvelle : le passage de
    Vygotski cité par le texte de 2024, et la conséquence que le dossier en tire lui-même
    (« Une activité empêchée n'est pas une activité absente, c'est une activité qui continue
    d'agir sur celui qui ne l'a pas faite »), plus le corollaire que l'empêchement n'est pas
    seulement extérieur, que le dossier énonce aussi. Défaut majeur 2.
22. **S4 « Une affaire de santé, pas de performance »** : les deux passages de 2024 sur
    l'empêchement comme source de dégradation de la santé et sur le pouvoir d'agir amputé, et
    « Entre le réel et le réalisé de leur activité, celles et ceux qui travaillent ne peuvent pas
    trier. » L'ancien S2.P2 (l'échec n'est pas l'indice d'une incompétence) y migre et y devient la
    marche d'entrée. Défaut majeur 3.
23. **S6 « Le réel de l'activité n'est pas l'activité réelle »**, section nouvelle : la formule
    ergonomique que Clot expose avant de s'en écarter, « déclenchée et guidée par la tâche », et
    l'avertissement de vocabulaire que la revue de la carte désigne comme « le point qui aurait pu
    déraper ». Plus la glose de 2011.
24. **S1.P2 remplacé** : le déplacement d'objet du texte de 2004 (« la structure de son
    développement possible ou impossible », « moins l'activité que le développement de l'activité
    et ses empêchements ») et la conséquence de méthode (« vise à donner du volume à cette activité
    réalisée »), avec les deux terrains **nommés comme terrains et non racontés comme scènes** : la
    comédienne de la Comédie-Française cherchant comment tenir un chandelier brûlant, l'échange
    entre un facteur titulaire et un jeune rouleur. Le mot « autoconfrontation croisée » n'est pas
    employé : le dossier le porte, mais l'expliquer aurait demandé ce qu'aucune source ne dit.
25. **Fin de l'énumération de 2024** rendue, « paradoxe fréquent » compris, avec la conséquence
    qu'un empêchement peut prendre la forme d'une action accomplie et visible.
26. **« La clinique de l'activité » est désormais introduite avant d'être utilisée**, en S1.P2,
    comme « la manière d'étudier le travail que l'auteur appelle la clinique de l'activité ».
    Accroc de progressivité relevé par l'audit.

### Titres et lead (chantier M, point 4)

Chaque titre a été relu contre le paragraphe qu'il annonce, après retrait :

- « La surface et le volume » : inchangé, appuyé sur `quotation.text`.
- « Ce que ce volume contient » : inchangé, et ne promet plus un compte fermé.
- « Pourquoi ce qui n'a pas eu lieu pèse encore » : appuyé sur les « résidus incontrôlés n'ayant
  que plus de force » du passage cité et sur la lecture du dossier.
- « Une affaire de santé, pas de performance » : appuyé sur les deux passages de 2024 ; le dossier
  écrit lui-même « l'empêchement est chez lui un problème de santé et non de performance ».
- « Un mot plus rigide que celui de l'auteur » : **conservé**, parce que `notes[1]` l'établit mot
  pour mot (« plus figé que ce que l'auteur écrit »). Le titre porte sur la rigidité du libellé,
  pas sur une absence dans l'œuvre : il ne dépasse plus le paragraphe tempéré.
- « Le réel de l'activité n'est pas l'activité réelle » : appuyé sur `review.notes[5]`, « Clot
  construit précisément le réel de l'activité contre l'activité réelle de la tradition
  ergonomique ».

`lead[0]` et `lead[1]` sont **inchangés au mot**, comme l'audit le prescrit. Contrôle d'excédent :
la promesse du lead (un reste, un nom, une thèse de proportion) est tenue et dépassée par les
sections ; rien n'y est annoncé que le texte ne livre plus.

## `limits` refait comme frontière interne

L'ancien champ était de la prose lecteur et `limits[0]` affirmait d'un texte non ouvert que « la
réponse y est écrite », en contradiction directe avec `review.notes[6]` (« je ne peux donc ni
confirmer ni infirmer que la formule y figure déjà telle quelle »). Défaut majeur 8. Le nouveau
champ est écrit pour les agents et nomme, dans l'ordre : Clot 2003c avec sa **double description
divergente** (chapitre Vallery & Amalberti / Actes du XXXVIIIe Congrès de la SELF, point 9 de
l'audit, signalé et non tranché) et l'interdiction symétrique des deux conclusions ; *La fonction
psychologique du travail* et *Travail et pouvoir d'agir* avec leur état d'accès (hors accès ouvert,
absents de HAL et d'Internet Archive) et le statut des millésimes 1999, 2002, 2008 ; *Le Travail
Humain* et *Travailler*, Cairn, HTTP 403, Clot & Leplat 2005 ; Clot & Faïta 2000, atteint par une
autre voie, qui ne fonde aucune antériorité ; l'origine non établie du substantif dans les deux
sens, avec Simonet, Caroly & Clot 2011 et son renvoi à (Clot, 1999) sans page ; l'interdiction de
prêter à l'auteur l'écart suspendue / contrariée ; l'absence de relevé de réception (scite non
connecté, OpenAlex en échec de quota) ; la psychodynamique du travail de Christophe Dejours comme
frontière signalable et non caractérisable ; les deux interdits de vocabulaire.

`limits` fait 344 mots, au-dessus de la fourchette indicative de 100-200 du protocole. C'est
assumé : l'audit exige neuf éléments nommés avec leur état d'accès et l'affirmation qu'ils
interdisent, chaque phrase en porte un, et aucune n'est une précaution sans objet. Le champ ne
s'affiche pas.

Contrôle inverse : **aucun contenu de `limits` n'est remonté comme bloc visible.** Les deux seules
phrases du texte lecteur qui touchent une frontière sont intégrées à un raisonnement et rédigées du
côté du lecteur, sans aveu de lecture : « Où il paraît pour la première fois sous sa plume n'est pas
établi par les sources disponibles » (S5) et « Ce en quoi elle consiste se lira dans les textes de
part et d'autre » (S6, qui sert de pouvoir d'ouverture). Aucun titre de rubrique du genre « Ce que
les sources ne permettent pas d'établir ».

## Contrôle des deltas, paragraphe par paragraphe

| paragraphe | delta |
|---|---|
| lead[0] | le compte rendu d'une journée laisse tomber une classe entière de choses vécues ; « ce que j'ai fait » n'est pas « ce que j'ai traversé » |
| lead[1] | ce reste a un auteur, un nom, et une thèse de proportion : le réalisé n'en est que la surface |
| S1.P1 | les deux termes de l'auteur, et la relation entre eux : inclusion, pas juxtaposition |
| S1.P2 | d'où vient la phrase et pourquoi elle est nécessaire : l'objet visé n'est pas l'activité mais son développement possible ou impossible, et l'intervention vise à donner du volume au réalisé |
| S2.P1 | ce que le volume contient : cinq registres du non-fait, et l'écart de vingt ans entre l'image et l'inventaire |
| S2.P2 | l'empêchement peut prendre la forme d'une action accomplie et visible ; la liste ne se referme pas ; la règle d'analyse |
| S3.P1 | le mécanisme : une seule activité l'emporte au point de collision, les autres forment des résidus incontrôlés qui gagnent en force |
| S3.P2 | conséquence : l'activité empêchée n'est pas absente, elle agit encore, et l'empêchement n'est pas seulement extérieur |
| S4.P1 | l'échec n'est pas l'indice d'une incompétence ; l'empêchement est une part ordinaire du travail bien fait |
| S4.P2 | l'enjeu n'est pas l'évaluation d'un résultat mais la santé, et le pouvoir d'agir amputé |
| S4.P3 | celui qui travaille ne peut pas trier entre le réel et le réalisé |
| S5.P1 | précision de vocabulaire : pluriel adjectivé contre singulier figé, et l'origine du substantif reste ouverte |
| S6.P1 | le contresens le plus probable est écarté : réel de l'activité n'est pas activité réelle, et la tâche/activité laisse tomber précisément ce dont il s'agit |
| S6.P2 | ce que la distinction change pour une observation, et une frontière encore ouverte vers une autre approche de la souffrance au travail |

Aucun paragraphe sans delta. Aucune paire consécutive de deltas substantiellement identiques.
Aucune section dont le rôle principal répète une section antérieure : S1 nomme, S2 remplit, S3
explique, S4 déplace l'enjeu, S5 corrige le mot, S6 sépare d'un voisin. Vérification faite contre
l'`attributionNote` de la carte : plus aucun paragraphe ne la redouble.

## Conformité de forme

- 6 sections (max 7), titres de 23 à 49 caractères (max 60), aucun titre de fonction.
- Aucun tiret cadratin U+2014. Les seuls tirets sont les demi-cadratins U+2013 **internes aux
  citations** de 2024, qui les portent.
- Espaces fines insécables U+202F posées dans tous les guillemets (point 10 de l'audit).
  Vigilance : le tiret insécable U+2011, d'abord posé par cohérence typographique, faisait échouer
  deux citations au contrôle (« contre-activités », « a-t-on pris l'habitude de dire »), le
  normalisateur de `unsourcedQuotations` ne repliant que U+2013 et U+2014. Tous remplacés par des
  traits d'union simples.
- Aucun terme de dispositif, aucun aveu de lecture, ni dans le texte lecteur ni dans `limits`.
- Toutes les citations de cinq mots ou plus sont verbatim dans `corpus/validated/` ou
  `corpus/evidence/activite-empechee/lecture.json` : zéro signalement du contrôle.

## Contrôle mécanique

    npm run corpus:deepen -- --check --only=activite-empechee
    1 approfondissement(s) contrôlé(s), 1915 mots. Rien projeté.

PASS, sans avertissement de citation.

## Signalement d'isolation (chantier O)

Mes seuls fichiers de travail sont dans `corpus/deepening-audits/work/activite-empechee/`. Aucun
fichier de travail d'un autre concept n'a été ouvert. `git status` montre cependant deux
approfondissements d'autres cartes modifiés dans l'arbre de travail,
`corpus/deepenings/absorber-les-fluctuations-de-commandes.json` et
`corpus/deepenings/amenagement-onereux-du-monde-exterieur.json` : signalés, non lus, non touchés.

## Suite attendue

La modification du fichier invalide le SHA : le cycle de fact-check doit reprendre à `PREPARE`.
Aucun support `SUP-...` n'a été inventé, aucun artefact de fact-check n'a été touché. Ce compte
rendu ne vaut ni `ACCEPT` ni `FACTCHECK_PASS`.

## Points d'attention pour le vérificateur

1. `lead[1]`, « c'est la plus grande partie de ce qui s'est réellement passé » : proportion non
   touchée sur instruction de l'audit, appuyée par l'image volume/surface, par « Le réel déborde le
   réalisé » et par « l'immensité du réel de l'activité ». Si le gate la juge trop forte, le geste
   minimal est un NARROW sur « la plus grande partie », pas une refonte du lead.
2. S3.P2 et S1.P1 reposent en partie sur des gloses du lecteur primaire présentes dans
   `definition_de_lauteur` (« L'activité empêchée n'est donc pas une activité absente… », « Le réel
   de l'activité est précisément ce que cette dernière formule laisse tomber ») et non sur des
   phrases de Clot. Elles sont des appuis du pack, mais le mapping doit les citer explicitement :
   c'est exactement le type d'omission que `points-de-levier` et `critere-de-la-retroaction` ont
   payé.
3. Vygotski n'est ni daté, ni qualifié, ni prénommé : le dossier ne le fait pas. Une demande de
   « clarté » sur ce point ne peut pas être satisfaite sans source nouvelle.
