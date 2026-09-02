# Journal de la routine nocturne

Une entrée par nuit, la plus récente en tête. Ce fichier existe pour qu'une nuit sache en un
coup d'œil ce que la précédente a fait, sur quelle branche elle l'a laissé, et par quel bout
reprendre. **Les scripts priment sur ce fichier** : il dit ce qui a été tenté et pourquoi, ils
disent ce qui est.

## Passage 10/15 — 2026-09-02

- branche      : `claude/zen-johnson-9itxcp` (imposée par la session, pas `main`). **Le travail des passages 07 à 09 est fusionné dans `main`**, y compris la suite documentaire [#92](https://github.com/J-Rbs91/Curiosity/pull/92) que le passage 09 laissait en suspens : `main` était au commit de merge `94b1086`, cette branche en part, et **rien n'a été refait**. Pull request [#93](https://github.com/J-Rbs91/Curiosity/pull/93) vers `main`, **ouverte à la clôture**. Tant qu'elle n'est pas fusionnée, **la nuit suivante reprend depuis cette branche**, et non depuis `main`, sinon elle refera ce qui est déjà fait.
- phase        : **3 (enrichissement d'un domaine), et c'est la première de la routine.** Condition A fausse — aucun domaine à zéro carte validée depuis le passage 06. Condition B fausse — `corpus:deepen` projetait 100 approfondissements pour 100 cartes et sa fin de sortie ne listait rien. La condition C décidait donc, et elle décidait seule.
- domaine      : **`behavioral-economics`**, désigné sans arbitrage. Aucun domaine n'ayant jamais été enrichi, le journal n'en donne d'enrichissement pour aucun et le critère de repli s'applique : celui qui a le moins de cartes validées, **quatre**, seul à ce niveau. En son sein, les priorités 1 et 2 sont sans objet — les deux thèmes déclarés sans carte sont en sociologie des organisations, et `corpus/map/queue.json` ne couvre que ce même domaine —, donc **la priorité 3 commande : les angles morts de `corpus/map/behavioral-economics.scouting.md`**, dont le chantier D de `RESTE-A-FAIRE.md` tenait la liste chiffrée.
- validées     : **4 — `valeur-comme-fait-psychologique`, `critique-de-l-homo-oeconomicus` (Tarde 1902, t. I), `substitution-des-problemes-aux-secteurs`, `amenagement-onereux-du-monde-exterieur` (Albou 1962), les 4 avec citation**, toutes relues sur l'image de la page. Trois en `PASS` au premier tour, une au second. **Le domaine passe de 4 à 8 cartes validées et cesse d'être le moins doté du corpus.** Le corpus passe de 100 à **104 cartes**.
- en review    : 0
- rejetées     : 0
- approfondies : **4 — les quatre cartes de la nuit**, la phase 3 se terminant par les approfondissements des cartes qu'elle vient de créer. 1 452 à 1 681 mots, aucun refus de projection, aucun renvoi. `corpus:deepen` projette **104 approfondissements pour 104 cartes**, 152 648 mots, 1 468 en moyenne, **et la file est de nouveau vide à la clôture, comme elle l'était au lever**.
- contrôles    : validate 0 erreur (108 enregistrements, 104 validés, 83 avertissements, dont **deux nouveaux et attendus**, les deux cartes d'Albou n'affichant aucune source secondaire) · build 104 concepts · deepen 104/104 · `git diff --exit-code src/content/generated/` propre après reprojection · test 482/0 · lint 0 · audit : `Économie comportementale` passe de **1 thème / 4 validés** à **1 thème / 8 validés**. Rien à drainer dans `src/content/fixtures/concepts.fixture.ts` : `corpus:build` n'a listé aucune entrée caduque, aucun des quatre identifiants n'ayant d'homonyme d'échafaudage.
- commit       : la nuit a été commitée par étapes, six fois, chaque maillon poussé dès qu'il tenait debout ; `97286d7` pour la CI, `e264eaf` pour les quatre cartes, `90fc5e6` puis la projection finale pour l'application.
- bloqué par   : **le serveur MCP `documentary`, en échec de connexion (`CONNECTION_CLOSED`) pour la cinquième nuit consécutive.** Constat fait par appel réel avant le lot, et non sur la foi du journal, comme le passage 09 le demandait : aucun outil `mcp__documentary__*` n'est exposé à la session. Son retour du 1er septembre à 06h10 ne s'est pas confirmé. **La phase 3 a donc travaillé sans vérification structurée de référence**, par `WebSearch`, `WebFetch` et `curl` seuls, et le contrôle aveugle a résolu ses DOI par l'API Crossref directe. Aucune carte n'en a souffert, mais la règle « une référence introuvable n'existe pas » a été appliquée durcie, et c'est elle qui a laissé l'origine du syntagme d'Albou non tranchée. **Second blocage, de dispositif** : `Task` n'était pas exposé à l'orchestrateur, qui a lancé ses sous-agents en headless, un processus par agent, avec les outils que déclare chaque définition. Les deux premiers lecteurs ont rendu un refus d'écrire faute d'accès réseau avant que ce point ne soit corrigé, **et ce refus était le bon geste**.
- la nuit suivante prend : **phase 3, et le domaine que la règle désignera alors.** Les conditions A et B resteront fausses. Le journal donne désormais un enrichissement pour `behavioral-economics`, daté du 2 septembre, donc **il sort de la rotation jusqu'à ce que tous les autres soient passés** ; aucun autre domaine n'ayant d'enrichissement au journal, le critère de repli s'applique de nouveau et désigne **le domaine qui a le moins de cartes validées : `sociology-of-work`, `work-psychology` et `systems-thinking` sont à égalité avec sept**, et l'ordre de `src/content/taxonomy.ts` tranche cette égalité — il place `sociology-of-work` avant `work-psychology`, tous deux avant `systems-thinking`. **C'est donc `sociology-of-work`.** En son sein, la priorité 1 est sans objet (ses thèmes portent tous une carte), la priorité 2 aussi (`queue.json` ne couvre que la sociologie des organisations), et **la priorité 3 commande : les angles morts de `corpus/map/sociology-of-work.scouting.md`**. La nuit se terminera par les approfondissements des cartes qu'elle aura créées.

### Ce que cette nuit a établi, en une phrase

La première nuit de phase 3 rend quatre cartes au domaine le moins doté du corpus, qui cesse de
l'être, et elle affiche **la première source secondaire du dépôt** après six lots où l'avertissement
« aucune source secondaire affichée » n'avait pas de remède.

### La source secondaire, et pourquoi elle vaut plus que son volume

**C'est le fait dominant de la nuit, et il solde une faiblesse structurelle vieille de six lots.**
Jean Milet, « Gabriel Tarde (1843-1904) : Le créateur de la psychologie économique », *Bulletin de
psychologie* 35(357), 1982, p. 907-913, a été **ouvert en entier, ses sept pages sur sept lues sur
l'image**, notes de bas de page comprises, aucune en OCR seul. Elle est portée en
`francophone-reception` sur les deux cartes de Tarde, **qui ne déclenchent plus l'avertissement**.

**Mais elle est portée avec sa réserve, et la réserve est ce qui a demandé le plus de soin.** Milet
est un tardien qui plaide pour son auteur, dans la revue qui servait alors d'organe à la
psychologie économique française, et il renvoie trois fois à son propre ouvrage de 1970 comme appui
de démonstration. **Il récuse lui-même la lecture large de son titre**, page 909 : « l'idée de
fonder l'économie sur la psychologie [...] était dans l'air à cette époque », et il nomme Schmoller,
Wagner et Menger comme chefs d'écoles qui « arborent le titre de psychologie économique » avant
Tarde, puis Bagehot, Royce, Baldwin et Giddings. Ce qu'il revendique tient dans une seule phrase
adversative, et sa conclusion de la page 913 ne dit plus créateur mais « un initiateur ».

**Conséquence appliquée, et vérifiée sur les quatre textes** : une carte qui écrirait que Tarde est
le fondateur, le créateur ou le père de la psychologie économique sur la foi de Milet écrirait un
faux, que Milet dément à la page 909 de l'article dont le titre semble l'autoriser. Ni les cartes,
ni leurs approfondissements ne l'écrivent. **Une source secondaire ouverte ne se résume pas par son
titre**, et c'est la leçon à porter aux nuits qui iront en chercher d'autres : le titre d'un article
est une notice bibliographique, pas une thèse reçue.

### Ce que le contrôle aveugle a réellement attrapé

| question | résultat sur quatre fiches |
|---|---|
| citation verbatim, à l'endroit annoncé | 4/4 dès le premier passage |
| attribution | **3/4 au premier passage** |
| prose fidèle aux sources | 4/4 dès le premier passage |
| sources qui résolvent | 4/4 dès le premier passage |

**Un seul renvoi, et il portait sur ce que ce corpus surveille le plus.** Le contrôleur d'
`amenagement-onereux-du-monde-exterieur` a établi que le syntagme « aménagement onéreux du monde
extérieur » circule comme la définition de l'économie politique par **Raymond Barre**, quand la
carte le présentait comme la formule d'Albou : `attribution: douteuse`, `REWORK`.

**Le renvoi est parti au lecteur primaire et non au rédacteur**, la question étant documentaire et
non rédactionnelle. Ce que le lecteur a établi : « Barre » est **absent des 81 pages**, la page 11
ne porte **aucune note ni aucun appel de note**, la seule dette d'économiste inscrite est Robbins
page 12, et le manuel de Barre est daté de sept ans avant l'article. **Ce qu'il n'a pas pu établir**
: le texte de Barre lui-même, qu'aucune des six routes essayées n'a ouvert. La carte est passée au
second tour avec `authorship` ramené de `SOLE_AUTHOR` à `ASSOCIATED_WITH`, et **elle n'écrit ni
qu'Albou a forgé la formule, ni qu'il l'emprunte** : les deux sont également non établies.

**Un piège d'OCR annoncé a été rencontré et bien tranché.** Le contrôleur de
`critique-de-l-homo-oeconomicus` a vu la couche ABBYY donner « œconomicus » là où l'imprimé porte
« æconomicus », et **il a tranché sur l'image en faveur de la fiche** au lieu de conclure à un
écart. C'est le comportement que les cinq lots précédents cherchaient à obtenir.

### Ce que les agents ont refusé d'écrire, et c'est encore le meilleur signe

- **Que Tarde soit le fondateur de la discipline**, sur aucune des deux cartes ni des deux
  approfondissements, Milet le démentant lui-même.
- **Qu'Albou ait forgé le syntagme**, et symétriquement **qu'il l'emprunte à Barre** : les deux
  sont non établies, et la carte s'arrête à ce qui l'est, le transfert vers la psychologie.
- **Le mot « conduite » sur les cartes de 1962**, absent du texte, qui dit « comportement »
  vingt-huit fois. **C'est ce mot qui écarte le doublon de fond** avec
  `definition-de-la-psychologie-economique`, tirée de l'article de 1982 : le risque n'était pas le
  doublon d'`id`, que le validateur refuse, mais le doublon de fond sous un autre nom.
- **Toute source secondaire sur les deux cartes d'Albou**, aucune n'ayant été ouverte. Les deux
  avertissements de `corpus:validate` qui en résultent sont le compte rendu exact de leur dossier,
  et ils ne se comblent pas.

### Deux rectifications de méthode sur Persée, à porter telles quelles

Elles corrigent des lignes écrites au passage 06 et reprises depuis :

1. **`curl` n'est pas réinitialisé par Persée sur le chemin `/doc/page/`.** Les resets rencontrés
   venaient du **proxy d'agent** (`ws_closed_mid_exchange`, tunnel fermé en cours d'échange), et la
   reprise avec relances a obtenu les 81 pages d'Albou en `HTTP 200`. La cause n'était pas là où le
   passage 06 l'avait placée.
2. **L'endpoint image d'Internet Archive est plafonné** : les dérivés `_1500` et `_2000` rendent le
   même fichier. Demander plus grand ne sert à rien.

Ce qui se confirme, en revanche : **le PDF complet `docAsPDF` de Persée répond `403`** — corps
« This resource is protected by altcha », constaté par trois appels successifs, non contourné —, et
le recoupement se fait donc sur l'image de page.

### Ce que la phase 3 a coûté et rendu, première mesure

**Quatre cartes et quatre approfondissements dans la même nuit**, ce qu'aucune phase 1 ni phase 2
n'avait fait. Le lot visait quatre cartes et en a rendu quatre, toutes citées, ce qui tient la règle
« deux cartes solides valent mieux que huit fragiles » sans avoir eu à s'en servir.

**Le coût de surveillance reste nul, et la courbe du passage 09 se prolonge en phase 3** : aucun
agent n'a eu besoin d'un « écris maintenant », ni les quatre rédacteurs d'approfondissement, ni la
chaîne documentaire. La contre-mesure du chantier C reste écrite sans avoir servi depuis le
passage 07.

**Deux rédacteurs d'approfondissement ont corrigé leur texte après avoir rendu leur compte rendu**,
comme au passage 08. **La parade tient** : reprojeter une dernière fois avant les contrôles de
fermeture, ce qui a été fait, et non projeter dès le dernier compte rendu.

### Le chantier E est fermé, et c'était le mandat de la phase 3

`ci.yml` et `pages.yml` lançaient `corpus:build` puis `git diff --exit-code src/content/generated/`,
ce qui avait l'air de couvrir tout le répertoire projeté. **Mais `corpus:build` n'écrit que
`concepts.generated.ts`** : `deepenings.generated.ts` n'est écrit que par `corpus:deepen`, que la CI
ne lançait pas. Le garde existait, il ne gardait qu'une moitié, et c'est par là qu'une divergence
réelle de l'approfondissement d'`effet-de-cadrage` a vécu trois jours dans le dépôt, du 29 au
31 août.

**Les workflows lancent désormais les deux projections avant le diff**, et le motif est écrit en
commentaire à côté de la correction pour qu'il ne se reperde pas. Contrôle fait sur l'état
courant : build 104, deepen 104, diff propre. **Les trois nuits de phase 2 n'avaient pas mandat d'y
toucher ; la phase 3, qui écrit des cartes et des approfondissements dans la même nuit, l'avait, et
c'est elle que ce trou aurait coûté le plus cher.**

**Ils sont trois, et non deux, et la nuit l'a appris après avoir ouvert sa pull request.** `main` a
bougé pendant le passage : la pull request [#80](https://github.com/J-Rbs91/Curiosity/pull/80) y a
fusionné un troisième workflow, `deploy-vps.yml`, **qui porte le même garde à moitié**. La branche
de la nuit a donc fusionné `main` — sans conflit — et la correction y a été portée aussi.
**C'est là qu'elle vaut le plus cher** : sur le chemin de déploiement, une projection divergente ne
serait pas seulement invisible, elle serait mise en ligne. **Leçon à porter : un garde de
projection se cherche dans tous les workflows, pas dans ceux qu'on connaît**, et un `git grep` sur
`corpus:build` dans `.github/` le dit en une commande.

### Ce qui reste ouvert sur ce domaine, et commande le prochain passage sur lui

- **Barre 1959 reste fermé après six routes essayées**, et c'est lui qui trancherait l'origine du
  syntagme. L'API Google Books répond `429`, Internet Archive n'a pas l'ouvrage.
- **La position de Reynaud dans la querelle n'a jamais été ouverte.** La pièce d'Albou porte
  l'attaque, aux pages 7 et 10, et rien de la réponse.
- **La critique du programme de Katona, annoncée au chapitre IV d'Albou 1962, n'est pas instruite**,
  et c'est **la voie francophone ouverte vers Katona**, dont les deux ouvrages sont vérifiés fermés
  en prêt numérique.
- **La troisième carte de Tarde, sur les prix**, reste non citable : sa matière n'est vue qu'en
  couche OCR dégradée du tome second.
- **L'effet de dotation reste hors lot**, faute d'un thème qui puisse le porter sans reposer sur une
  seule équipe d'auteurs.

## Passage 09/15 — 2026-09-01

- branche      : `claude/zen-johnson-ilrf7b` (imposée par la session, pas `main`). **Le travail du passage 08 est fusionné dans `main`** (PR [#89](https://github.com/J-Rbs91/Curiosity/pull/89) puis [#90](https://github.com/J-Rbs91/Curiosity/pull/90), commit de merge `ffdb1d2`), et cette branche partait de `main` à jour, à ce commit : rien n'a été refait. Pull request [#91](https://github.com/J-Rbs91/Curiosity/pull/91) vers `main`, ouverte à la clôture, CI verte sur les trois checks (`corpus`, `app`, `gitleaks`), **puis fusionnée dans `main`** le 1er septembre à 06h09 UTC, commit de merge `08c2093`. **La nuit suivante repart donc de `main`**, et non de cette branche : tout le travail du passage 09 y est. Une suite documentaire, [#92](https://github.com/J-Rbs91/Curiosity/pull/92), rouvre la même branche depuis `main` après la fusion pour porter deux corrections aux fichiers d'état — la fusion elle-même, et ce que la nuit disait du serveur `documentary`. Elle ne touche à aucune carte. **Si elle n'est pas fusionnée, la nuit suivante la lit avant de partir de `main`** : la ligne « bloqué par » ci-dessous en dépend.
- phase        : 2 (approfondissements), **troisième et dernière nuit de phase 2**. Condition A fausse — aucun domaine à zéro carte validée depuis le passage 06. Condition B vraie au lever de la nuit — `corpus:deepen` listait deux cartes sans approfondissement — et elle décidait seule. Aucune ouverture, aucune nouvelle carte, aucune recherche documentaire. **Elle est fausse à la fermeture, pour la première fois depuis le passage 06.**
- domaine      : aucun. Les deux cartes servies relèvent de deux domaines, psychologie du travail et operations management.
- validées     : 0 — une nuit de phase 2 n'écrit aucune carte. Le corpus reste à **100 cartes validées**, inchangé.
- en review    : 0
- rejetées     : 0
- approfondies : **2 — `trois-etats-psychologiques-critiques` (psychologie du travail, 1 535 mots) et `trois-sigmas-arbitrage-de-cout` (operations management, 1 443 mots).** Deux agents, deux textes, aucun refus de projection, aucun renvoi, aucun « écris maintenant ». **La file passe de 2 à 0** : `corpus:deepen` projette **100 approfondissements pour 100 cartes validées**, 146 324 mots, 1 463 en moyenne, et sa fin de sortie ne liste plus rien. **Les onze domaines sont entièrement servis.** Le chantier A de `RESTE-A-FAIRE.md`, ouvert le 23 août et remonté à trente-quatre cartes le 28, est clos.
- contrôles    : validate 0 erreur (104 enregistrements, 100 validés, 81 avertissements) · build à jour, `git diff --exit-code src/content/generated/` propre avant reprojection puis reprojeté à la clôture · deepen 100/100 · test 482/0 · lint 0 · audit inchangé, ce qui est le résultat attendu d'une nuit qui ne crée aucune carte. Rien à drainer dans `src/content/fixtures/concepts.fixture.ts` : `corpus:build` n'a listé aucune entrée caduque.
- commit       : `ad84359` pour le premier texte ; la nuit a été commitée par étapes, voir la branche.
- bloqué par   : rien pour le travail de la nuit, qui était le plus court de la routine. **Le serveur MCP `documentary` a été en échec de connexion (`CONNECTION_CLOSED`) pendant toute la nuit, pour la quatrième consécutive**, sans conséquence ici, un `corpus-deepener` n'ouvrant aucune source. **Il est revenu à 06h10 UTC, après la fusion**, et il a résolu une référence réelle : le DOI `10.3389/fpsyg.2021.785721` de la reprise 3 du chantier D rend `reachable: true`, `conclusive: true`, aucun écart sur Baratgin, Godin et Jamet 2022. **Mais il a disparu et réapparu trois fois en quelques minutes pendant ce contrôle** : il bat, il n'est pas rétabli. La nuit suivante le constate elle-même avant de s'y fier, et ne tient pas son retour pour acquis sur la foi de cette ligne. **La phase 3 en dépend** : `corpus-scout`, `corpus-primary-reader` et `corpus-blind-reviewer` s'appuient tous les trois sur ses outils de recherche et de vérification de référence. Sans lui, une nuit peut encore travailler par `WebSearch` et `WebFetch`, mais elle perd la vérification de référence, et la règle « une référence introuvable n'existe pas » se durcit d'autant : dans le doute, la carte ne se publie pas.
- la nuit suivante prend : **phase 3, et c'est la première.** Condition A fausse, condition B désormais fausse : la condition C est vraie. La §2 désigne la cible par une règle et non par une préférence. **Aucun domaine n'a jamais été enrichi par la routine** — les passages 01 à 06 étaient des ouvertures, les 07 à 09 des nuits de phase 2 sans domaine — donc le journal ne donne d'enrichissement pour aucun, et le critère de repli s'applique : **le domaine qui a le moins de cartes validées, soit `behavioral-economics` avec quatre**, seul à ce niveau (les suivants en portent sept). En son sein, la priorité 1 est sans objet — les deux thèmes déclarés sans carte, `autorite-domination` et `apprentissage-organisationnel`, sont en sociologie des organisations, pas ici — et la priorité 2 aussi, `corpus/map/queue.json` ne couvrant que la sociologie des organisations. **C'est donc la priorité 3 qui commande : les angles morts de `corpus/map/behavioral-economics.scouting.md`**, et le chantier D de `RESTE-A-FAIRE.md` en tient déjà la liste chiffrée. Les deux cartes de Tarde y sont **la reprise la moins chère du dépôt** : la lecture primaire est faite, complète et rendue, les deux citations relues sur l'image du feuillet, et il ne manque que la rédaction et le contrôle aveugle. En phase 3, la nuit se termine par les approfondissements des cartes qu'elle vient de créer.

### Ce que cette nuit a établi, en une phrase

Deux textes suffisent à clore un chantier qui en comptait trente-quatre quatre nuits plus tôt :
chaque carte du corpus a désormais son approfondissement, et la phase 2 n'a plus d'objet.

### Ce que les trois nuits de phase 2 auront rendu, mesuré

**Trente-quatre cartes servies en trois nuits, du 29 août au 1er septembre.** Seize au passage 07,
seize au passage 08, deux ici. Le plafond de seize s'est tenu deux nuits de suite, et la troisième
n'avait plus que le reliquat à prendre. Les approfondissements projetés passent de 66 à **100**, et
le total de mots de 96 000 environ à **146 324**. Aucune des trois nuits n'a subi de refus de
projection ni de renvoi.

**Le coût de surveillance a disparu au fil des trois nuits, et la courbe est nette** : sept agents
sur huit ont eu besoin d'un « écris maintenant » au passage 06, quatre sur seize au passage 07,
aucun sur seize au passage 08, aucun sur deux ici. La contre-mesure du chantier C reste écrite,
mais elle ne sert plus en phase 2 ; **c'est en phase 1 et en phase 3 qu'elle vaut**, là où un agent
télécharge, océrise et attend le réseau.

**Une nuit de phase 2 est bornée par sa file, pas par son plafond.** Celle-ci a servi deux cartes
en une fraction de sa durée disponible et s'est arrêtée là, la §2 lui interdisant d'ouvrir ou de
créer quoi que ce soit. C'est le comportement attendu : la première condition vraie décide seule,
et une nuit courte vaut mieux qu'une nuit qui déborde sur la phase suivante sans en avoir le
mandat.

### Ce qui reste ouvert derrière la phase 2, et que la phase 3 hérite

**Le garde de la CI ne couvre toujours qu'une moitié du répertoire projeté.** `ci.yml` et
`pages.yml` lancent `corpus:build` puis `git diff --exit-code src/content/generated/`, mais
`corpus:build` n'écrit que `concepts.generated.ts` : `deepenings.generated.ts` n'est écrit que par
`corpus:deepen`, que la CI ne lance pas. Le trou a laissé passer une divergence réelle du 29 au
31 août, corrigée au passage 08. **Il n'a pas été bouché cette nuit non plus** : une nuit de
phase 2 n'a pas mandat de toucher à la CI, et c'est resté vrai jusqu'à sa dernière. Chantier E de
`RESTE-A-FAIRE.md`, deux lignes. **La phase 3 écrit des cartes et des approfondissements dans la
même nuit : c'est elle qui rendra ce trou le plus coûteux**, et elle a le mandat de le boucher.

**La dette de sources secondaires, elle, ne bougera qu'en phase 3.** Les trente-quatre textes
servis en trois nuits déclarent presque tous l'absence de source secondaire ouverte, plusieurs en
nommant précisément ce qu'il faudrait ouvrir. Un `corpus-deepener` n'y peut rien par construction.
**Elle devient la difficulté dominante dès la nuit suivante**, et elle suppose que le serveur
`documentary` réponde — voir la ligne « bloqué par » : il a répondu une fois à 06h10, et il bat.

## Passage 08/15 — 2026-08-31

- branche      : `claude/zen-johnson-jbbigs` (imposée par la session, pas `main`). **Le travail du passage 07 est fusionné dans `main`** (PR [#83](https://github.com/J-Rbs91/Curiosity/pull/83), commit de merge `f72ddc1`), et cette branche partait de `main` à jour, au commit `1929441` : rien n'a été refait. Pull request [#89](https://github.com/J-Rbs91/Curiosity/pull/89) vers `main`, ouverte à la clôture, **puis fusionnée dans `main`** le 31 août à 06h04 UTC, commit de merge `74e74af`, CI verte sur les trois checks (`corpus`, `app`, `gitleaks`). **La nuit suivante repart donc de `main`**, et non de cette branche : tout le travail du passage 08 y est. Tant qu'elle n'est pas fusionnée, **la nuit suivante reprend depuis cette branche**, et non depuis `main`.
- phase        : 2 (approfondissements), **deuxième nuit de phase 2**. Condition A fausse — aucun domaine à zéro carte validée depuis le passage 06. Condition B vraie — `corpus:deepen` listait 18 cartes sans approfondissement en début de nuit, et elle décidait seule. Aucune ouverture, aucune nouvelle carte, aucune recherche documentaire.
- domaine      : aucun. La file du script traverse les domaines : les seize cartes servies relèvent de cinq domaines (science de la décision 5, operations management 3, psychologie du travail 3, sociologie du travail 3, économie comportementale 2).
- validées     : 0 — une nuit de phase 2 n'écrit aucune carte. Le corpus reste à **100 cartes validées**, inchangé.
- en review    : 0
- rejetées     : 0
- approfondies : **16 — deux lots pleins de huit**, le plafond de la nuit. Lot 1 : `heuristiques-de-jugement`, `mecanismes-de-l-objectif`, `mobilite-et-segmentation-de-l-emploi`, `niveaux-de-rationalite-economique`, `normatif-descriptif-prescriptif`, `objectif-specifique-et-difficile`, `penalite-de-rupture`, `penser-a-partir-des-valeurs`. Lot 2 : `precarite-des-trajectoires`, `regle-de-commande-a-deux-niveaux`, `regle-lineaire-de-decision`, `savoir-ouvrier-mis-en-regles`, `seuil-d-insatisfaction-salariale`, `seuils-de-rupture-et-d-ajustement`, `theorie-des-perspectives`, `theories-normatives-du-choix-sous-risque`. **Seize agents, seize textes, aucun refus de projection, aucun renvoi.** La file passe de **18 à 2**, et les approfondissements projetés de 82 à **98** (143 346 mots, 1 463 en moyenne).
- contrôles    : validate 0 erreur (104 enregistrements, 100 validés, 81 avertissements) · build à jour, `git diff --exit-code src/content/generated/` **propre après reprojection** · test 482/0 · lint 0 · audit inchangé, ce qui est le résultat attendu d'une nuit qui ne crée aucune carte. Rien à drainer dans `src/content/fixtures/concepts.fixture.ts` : `corpus:build` n'a listé aucune entrée caduque, et une nuit de phase 2 ne peut pas en produire.
- commit       : la nuit a été commitée par étapes, à mesure que les textes tombaient ; voir la branche.
- bloqué par   : rien pour le travail de la nuit. Deux constats, en revanche, qui ne sont pas de son fait. **La nuit du 30 août n'a pas eu lieu** : le journal saute du passage 07, daté du 29, à celui-ci, daté du 31, et aucun commit de la routine ne porte la date manquante. Le compteur suit les passages, pas le calendrier, et il n'a donc pas été avancé pour elle. **Le serveur MCP `documentary` était toujours en échec de connexion** (`CONNECTION_CLOSED`), pour la troisième nuit consécutive : sans conséquence ici, un `corpus-deepener` n'ouvrant aucune source, mais il redeviendra bloquant dès qu'une nuit de phase 3 cherchera une secondaire.
- la nuit suivante prend : **phase 2 une dernière fois, puis phase 3.** Deux cartes restent sans approfondissement, `trois-etats-psychologiques-critiques` (psychologie du travail) et `trois-sigmas-arbitrage-de-cout` (operations management). Un lot de deux les sert, et **la condition B devient fausse pour la première fois depuis le passage 06.** La nuit suivante enchaîne alors sur la phase 3, dont la §2 désigne la cible : le domaine dont le journal donne l'enrichissement le plus ancien, et en son sein d'abord les thèmes déclarés sans aucune carte validée, que `corpus:audit` liste en fin de sortie — **ils ne sont plus que deux, `autorite-domination` et `apprentissage-organisationnel`**, tous deux en sociologie des organisations, `reaction-insatisfaction` ayant été comblé entre-temps. La file est celle de `npm run corpus:deepen`, en fin de sortie, et elle fait foi contre tout fichier.

### Ce que cette nuit a établi, en une phrase

La routine sert seize approfondissements pour la deuxième nuit consécutive, vide le chantier à
deux cartes près, et la phase 2 touche à sa fin.

### Ce que la nuit a trouvé sans le chercher : la projection avait dérivé de son enregistrement maître

**Le premier `npm run corpus:deepen` de la nuit, lancé pour constater l'état, a rendu un fichier
différent de celui qui était commité.** L'approfondissement d'`effet-de-cadrage` avait été corrigé
dans `corpus/deepenings/` au passage 07, au commit `c84eac6`, sans être reprojeté : deux phrases
disaient « programme » dans `src/content/generated/deepenings.generated.ts` là où l'enregistrement
maître dit « option ». Le lecteur de l'application voyait donc un texte que le dépôt ne portait
plus.

**Aucune CI ne pouvait l'attraper, et c'est le point qui resservira.** Le workflow lance
`npm run corpus:build` puis `git diff --exit-code src/content/generated/`, ce qui a l'air de
couvrir tout le répertoire projeté. Mais `corpus:build` n'écrit que `concepts.generated.ts` :
`deepenings.generated.ts` n'est écrit que par `corpus:deepen`, que la CI ne lance pas. **Le garde
existe, il ne garde qu'une moitié du répertoire.** Le remède tient en une ligne dans les deux
workflows, `ci.yml` et `pages.yml` ; il n'a pas été posé cette nuit, une routine de phase 2
n'ayant pas mandat de toucher à la CI, et il est inscrit au chantier E de `RESTE-A-FAIRE.md`.
La dérive elle-même a été corrigée au premier commit de la nuit.

### Ce que la deuxième nuit de phase 2 confirme, et ce qu'elle corrige

**Le plafond de seize se tient, et il se tient sans surveillance.** Comme au passage 07, les deux
lots de huit ont rendu entiers. **Aucun agent n'a eu besoin d'un « écris maintenant »** cette nuit,
contre quatre sur seize au passage 07 et sept sur huit au passage 06 : la relance, qui était le
coût dominant des nuits d'ouverture, a disparu des nuits de phase 2. La durée moyenne d'un agent
s'est établie autour de cinq minutes, la plus longue à six.

**Un agent peut corriger son texte après avoir rendu son compte rendu, et il faut projeter
après lui, pas avant.** L'agent d'`objectif-specifique-et-difficile` a retiré, une fois son
rapport remis, deux guillemets imbriqués que l'échappement JSON faisait trébucher — le cas repéré
au passage 07 —, en remplaçant la portion citée par « […] » et en rendant le sens omis en français.
La projection du lot 1 avait déjà eu lieu : elle a été refaite à la clôture. **La parade est de
reprojeter une dernière fois avant les contrôles de fermeture**, ce qui a été fait, et non de
projeter dès le dernier compte rendu.

### La faiblesse structurelle, inchangée, et désormais mesurable

**Les seize textes déclarent, presque tous, l'absence de source secondaire ouverte**, et plusieurs
le disent maintenant avec une précision qui vaut plan de travail : `mobilite-et-segmentation-de-l-emploi`
renvoie aux travaux que Grelet et Mansuy créditent elles-mêmes ; `savoir-ouvrier-mis-en-regles`
nomme le Braverman de 1974 comme la source du vocabulaire courant du commentaire, sans l'avoir
ouvert ; `seuils-de-rupture-et-d-ajustement` renvoie à l'article de 1957 du même auteur, connu par
sa seule notice. **Un `corpus-deepener` n'y peut rien**, il n'ouvre aucune source. Cette dette ne
se paiera qu'en phase 3, sur des reprises courtes, et le chantier D de `RESTE-A-FAIRE.md` en tient
la liste. **Elle deviendra la difficulté dominante de la routine dès la nuit d'après la
suivante**, et elle suppose que le serveur `documentary` réponde.

**Ce que les textes ont refusé d'écrire reste le meilleur signe de leur qualité.** Trois refus
méritent d'être notés parce qu'ils portent sur des points qu'un texte pressé aurait comblés :
`regle-lineaire-de-decision` ne dit rien de la démonstration du résultat, l'annexe qui la porte
manquant à l'exemplaire numérisé ; `theorie-des-perspectives` refuse de souder l'aversion aux
pertes à la citation affichée, faute de verbatim ; `normatif-descriptif-prescriptif` ne nomme pas
le métier de deux des trois directeurs du volume, que le texte laisse deviner sans le dire.

## Passage 07/15 — 2026-08-29

- branche      : `claude/zen-johnson-a8t77x` (imposée par la session, pas `main`). **Le travail du passage 06 est fusionné dans `main`** (PR [#82](https://github.com/J-Rbs91/Curiosity/pull/82), commit de merge `973db4d`), et cette branche partait de `main` à jour, à ce commit : rien n'a été refait. Pull request [#83](https://github.com/J-Rbs91/Curiosity/pull/83) vers `main`, ouverte à la clôture, **puis fusionnée dans `main`** le 29 août à 06h35 UTC, commit de merge `f72ddc1`, CI verte sur les trois checks (`corpus`, `app`, `gitleaks`). **La nuit suivante repart donc de `main`**, et non de cette branche : tout le travail du passage 07 y est.
- phase        : 2 (approfondissements). **Première nuit de phase 2 de la routine.** La condition A est fausse depuis le passage 06, aucun domaine n'étant vide ; `corpus:deepen` listait 34 cartes sans approfondissement, la condition B était donc vraie et elle décidait seule. Aucune ouverture, aucune nouvelle carte, aucune recherche documentaire.
- domaine      : aucun. La file du script traverse les domaines et ne se range pas par domaine : les seize cartes servies relèvent de six domaines (operations management 4, sociologie du travail 4, science de la décision 3, économie comportementale 2, psychologie du travail 2, sociologie des organisations 1).
- validées     : 0 — une nuit de phase 2 n'écrit aucune carte. Le corpus reste à **100 cartes validées**, inchangé.
- en review    : 0
- rejetées     : 0
- approfondies : **16 — deux lots pleins de huit**, le plafond de la nuit. Lot 1 : `absorber-les-fluctuations-de-commandes`, `analyse-des-groupes-professionnels`, `asservissement-des-activites-hors-travail`, `attente-du-poste-aval`, `cause-de-hasard-et-cause-assignable`, `cinq-dimensions-de-l-emploi`, `classement-multicritere-electre`, `conduite-economique`. Lot 2 : `critique-de-l-utilite-esperee-subjective`, `definition-de-la-psychologie-economique`, `division-sexuelle-et-rapports-de-sexe`, `effet-de-cadrage`, `flanerie-systematique`, `fonctions-sociales-de-la-greve`, `force-du-besoin-de-developpement`, `fragilite-d-un-ordonnancement-optimal`. **Seize agents, seize textes, aucun refus de projection, aucun renvoi.** La file passe de **34 à 18**, et les approfondissements projetés de 66 à **82** (119 639 mots, 1 459 en moyenne).
- contrôles    : validate 0 erreur (104 enregistrements, 100 validés, 80 avertissements) · build à jour, `git diff --exit-code src/content/generated/` **propre** · test 480/0 · lint 0 · audit inchangé, ce qui est le résultat attendu d'une nuit qui ne crée aucune carte
- commit       : `6c8ceeab` pour la projection du second lot ; la nuit a été commitée par étapes, à mesure que les textes tombaient.
- bloqué par   : rien. **Le fait dominant de la nuit est l'inverse de celui du passage 06** : quatre agents sur seize ont demandé un « écris maintenant », contre sept sur huit la nuit précédente. Aucun n'a échoué. Le serveur MCP `documentary` était toujours en échec de connexion, sans conséquence ici : un `corpus-deepener` ne mène aucune recherche documentaire et n'en a pas l'usage.
- la nuit suivante prend : **phase 2 encore, et le reste de la file.** Dix-huit cartes restent sans approfondissement, soit plus que ce qu'une nuit peut servir à seize. La condition B restera vraie après elle. La file est celle de `npm run corpus:deepen`, en fin de sortie, et elle fait foi contre tout fichier.

### Ce que cette nuit a établi, en une phrase

La routine sert seize approfondissements en une nuit, son plafond, et ramène à dix-huit un
retard qui en comptait trente-quatre au lever du jour précédent.

### Ce que la première nuit de phase 2 a appris, et qui resservira

**Le plafond de seize est atteignable, et il l'est en une nuit.** Les deux lots de huit ont
tenu, aucun n'a été amputé, et la durée moyenne d'un agent s'est établie autour de cinq
minutes. Une nuit de phase 2 vaut donc mécaniquement seize cartes servies tant que la file en
porte assez, ce qui rend le reste du chantier prévisible : dix-huit cartes, soit une nuit
pleine et une nuit courte.

**Le contrôle de projection achoppe sur les guillemets, et trois textes l'ont rencontré.** Le
comparateur de citations normalise `«` et `“` en `"` mais ne recolle pas les espaces : un
verbatim recopié avec des guillemets anglais là où l'imprimé porte des guillemets français à
espaces insécables est signalé absent alors qu'il est juste. Il se rétablit en reprenant la
typographie de l'imprimé, jamais en retirant les guillemets. Un cas voisin s'est présenté sur
des guillemets doubles imbriqués, que l'échappement JSON fait trébucher : la parade est de
citer par fragments courts. **Aucun de ces signalements n'était une erreur documentaire**, et
aucun n'a été contourné en supprimant la citation.

**Un renvoi de contrôle peut être un faux positif et rester une bonne correction.** Sur
`division-sexuelle-et-rapports-de-sexe`, une phrase amputée de ses parenthèses était présentée
entre guillemets : le contrôle la signalait absente, à juste titre, puisqu'elle résultait d'une
manipulation. Les guillemets ont été retirés, le contenu gardé. C'est la deuxième fois que ce
dépôt observe qu'un signalement littéral rend un service que sa règle ne visait pas.

**Le répertoire de travail partagé n'a posé aucun problème cette fois**, la consigne écrite au
passage précédent (préfixer les fichiers de travail par l'identifiant de la carte) ayant été
suivie par les seize agents.

### La faiblesse structurelle que cette nuit n'a pas corrigée, et ne pouvait pas corriger

**Les seize textes déclarent, presque tous, l'absence de source secondaire ouverte.** Le compte
est constant depuis cinq lots d'ouverture et il se lit maintenant dans les approfondissements,
qui l'écrivent noir sur blanc dans leurs `limits`. Un `corpus-deepener` n'y peut rien : il n'ouvre
aucune source et n'en ajoute aucune. **Cette dette ne se paiera qu'en phase 3**, sur des reprises
courtes de domaines déjà instruits, et le chantier D de `RESTE-A-FAIRE.md` en tient la liste avec
l'accès déjà constaté. Elle est signalée ici pour qu'une nuit de phase 3 sache par où commencer.

**Ce que les textes ont refusé d'écrire est, cette nuit encore, le meilleur signe de leur
qualité.** Les comptes rendus les plus solides du lot sont ceux qui nomment une source
`metadata-only` par ce qu'elle détient et jamais par ce qu'elle dirait : l'article de Management
Science d'octobre 1955 pour `absorber-les-fluctuations-de-commandes`, l'article de Johnson de
mars 1954 pour `attente-du-poste-aval`, `The Foundations of Statistics` pour la critique de
l'utilité espérée subjective, dont les postulats restent innommés un à un faute d'ouverture.

## Passage 06/15 — 2026-08-28

- branche      : `claude/zen-johnson-r5n04e` (imposée par la session, pas `main`). **Le travail du passage 05 est fusionné dans `main`** (PR [#81](https://github.com/J-Rbs91/Curiosity/pull/81), commit de merge `996f8b5`), et cette branche partait de `main` à jour, au commit `996f8b5` : rien n'a été refait. Pull request [#82](https://github.com/J-Rbs91/Curiosity/pull/82) vers `main`, **ouverte et non fusionnée à la clôture**. Tant qu'elle n'est pas fusionnée, **la nuit suivante reprend depuis cette branche**, et non depuis `main`, sinon elle refera ce qui est déjà fait.
- phase        : 1 (ouverture de domaine) — `behavioral-economics`, **onzième et dernier domaine sur onze**. Ouverture dans l'ordre complet et en une seule nuit : périmètre, cartographie, cartes, puis thème. **Après ce passage, aucun domaine déclaré n'est fermé à l'instruction, et la phase 1 n'a plus d'objet.**
- validées     : 4 — `definition-de-la-psychologie-economique`, `conduite-economique` (Albou 1982), `niveaux-de-rationalite-economique`, `seuils-de-rupture-et-d-ajustement` (Pierre-Louis Reynaud 1962). **Les 4 avec citation, toutes relues sur l'image de la page, et les 4 en `PASS` au premier tour sur les quatre questions**, par quatre contrôleurs distincts.
- en review    : 0
- rejetées     : 1 — `reciprocite` (Bonein 2008), `OUT_OF_SCOPE`. **C'est le premier enregistrement de rejet du dépôt** : `corpus/rejected/` était vide depuis l'origine.
- approfondies : 0 (une nuit d'ouverture n'en écrit pas ; la file passe de 30 à 34)
- contrôles    : validate 0 erreur (104 enregistrements, 100 validés, 80 avertissements) · build à jour, `git diff --exit-code src/content/generated/` **propre** · test 480/0 · lint 0 · audit : `Économie comportementale` passe de « corpus en cours de constitution » à **1 thème / 4 validés / 0 en cours**
- commit       : `3733f1f` pour la projection ; la nuit a été commitée par étapes, quinze fois, chaque maillon poussé dès qu'il tenait debout.
- bloqué par   : **la lenteur des agents, et c'est le fait dominant de cette nuit.** Sept agents sur huit ont dû être relancés par un « écris maintenant » avant de rendre quoi que ce soit, contre deux au passage 04. Aucun n'a échoué, tous ont rendu, mais la surveillance a coûté plus que l'instruction. Trois manques subsistent, déclarés : **aucune source secondaire n'a été ouverte sur les quatre cartes**, faiblesse structurelle pour le cinquième lot consécutif, **mais une secondaire ouverte est désormais identifiée et vérifiée** (Milet 1982) ; **les deux cartes de Tarde n'ont pas été écrites**, sa lecture ayant rendu trop tard ; et le serveur MCP `documentary` n'était toujours pas exposé.
- la nuit suivante prend : **phase 2, les approfondissements.** La condition A est désormais fausse, aucun domaine n'étant vide, et `corpus:deepen` liste **34 cartes sans approfondissement** en fin de sortie : c'est la file, et elle fait foi. Aucune ouverture, aucune nouvelle carte. Par lots de 8 agents `corpus-deepener` au plus, deux lots au maximum.

### Ce que cette nuit a établi, en une phrase

Le onzième et dernier domaine du corpus est ouvert et instruit en une seule nuit, il rend quatre
cartes qui passent toutes le contrôle aveugle du premier coup, et le corpus n'a plus aucun
domaine vide pour la première fois depuis sa création.

### Ce que la fin de la phase 1 change au dépôt, et il faut le savoir avant de reprendre

**La catégorie « angle mort vers un domaine fermé » n'a plus de destinataire.** Elle a doté cinq
domaines de leur stock d'entrée, et elle disparaît avec ce passage : un candidat mal placé part
désormais chez un voisin ouvert, ou ne s'instruit pas. Le périmètre le dit en toutes lettres dans
sa section d'en-tête, qui passe de « Dix domaines ouverts sur onze » à « Onze domaines ouverts sur
onze ».

**Ce domaine a été le plus mal servi du corpus, et le legs payé au passage 05 l'a sauvé.** Trois
passages avaient écrit n'avoir rien cherché pour lui, ou n'avoir rien vérifié. Les quatre pièces
Persée que le passage 05 lui a léguées étaient « à un appel de la vérification » : cet appel a été
fait avant d'écrire le périmètre, les quatre ont répondu, et **trois des quatre cartes de la nuit
en viennent**. Une dette payée une nuit a rendu la nuit suivante.

### Le fait de méthode de la nuit : trois corrections sur Persée, à porter telles quelles

Ce dépôt lit Persée depuis quatre passages et croyait sa route établie. Trois constats la
corrigent, tous payés cette nuit :

1. **Le motif de l'URL de page n'est pas toujours `_T1_`.** Il vaut `_T1_` sur certains fascicules
   et **`_F_`** sur d'autres : la page 907 de Milet 1982 rend `404` en `_T1_` et `200` en `_F_`.
   **Il se lit sur la notice de l'article**, `https://www.persee.fr/doc/<id_article>`, qui publie
   une URL par page. Il ne se présume pas.
2. **`curl` est réinitialisé par Persée sur le chemin `/doc/page/`** dans cet environnement,
   `Connection reset by peer`, code 000, y compris en `--http1.1`, proxy sortant sain. **Ce n'est
   ni un 404 ni un vide**, et un agent qui conclurait à l'absence de texte se tromperait.
   **`WebFetch` passe sur la même URL.** Le dérivé d'image `renderPage`, lui, passe en `curl`.
3. **Le PDF complet `docAsPDF` répond `403` sur les trois articles ouverts cette nuit.** Le
   recoupement de l'OCR se fait donc sur l'image, pas sur le PDF. Aucun de ces refus n'a été
   contourné.

### Ce que la relecture sur l'image a rattrapé, et une fois de plus elle a payé

Cinq écarts, sur trois exemplaires, dont deux auraient produit un faux :

1. **Une notice d'Internet Archive ment sur la tomaison.** L'item `psychologieecono0001gabr` est
   annoncé « volume 1 » et **sa page de titre porte TOME SECOND**. Les sept tomaisons de Tarde ont
   été établies sur la page de titre imprimée, et confirmées par la signature de volume au pied de
   la page 65, « TARDE. Psych. écon. I. 5 ».
2. **Une ligature, et deux couches OCR qui se contredisent.** L'imprimé de 1902 porte `homo
   æconomicus` ; l'OCR de `03tardgoog` l'aplatit en « œconomicus », celui de `02tardgoog` la rend
   correctement. **C'est l'image qui tranche**, et la citation suit l'imprimé.
3. **L'OCR de Persée corrompt un nom propre et un millésime** dans l'article d'Albou : « Pierre-Louis
   **Renaud** » pour Reynaud, et « septembre-octobre **1981** » là où le contexte impose 1881. Il
   double aussi des mots, « elle saisit ces saisit ces conduites ».
4. **L'OCR corrige silencieusement une coquille de l'imprimé**, ce qui est le piège inverse et
   moins connu : l'intertitre est composé « B. **Puor** une définition » sur la pièce.
5. **L'OCR de Reynaud est fautif au point de rendre tout verbatim faux** : « un terrain privilégié
   recherche esse » facilement accessible ars sondages » pour « un terrain privilégié de recherche
   assez facilement accessible aux sondages ».

### Ce que le contrôle aveugle a réellement attrapé

| question | résultat sur quatre fiches |
|---|---|
| citation verbatim, à l'endroit annoncé | 4/4 dès le premier passage |
| attribution | 4/4 dès le premier passage |
| prose fidèle aux sources | 4/4 dès le premier passage |
| sources qui résolvent | 4/4 dès le premier passage |

**Aucun renvoi, pour la deuxième fois seulement dans ce corpus**, après le lot d'operations
management. Ce n'est pas de l'indulgence : les quatre contrôleurs ont rendu des remarques hors
mandat, et **deux d'entre elles ont changé quelque chose**.

- **La correction appliquée porte sur `conduite-economique`, et elle est du genre exact que ce
  corpus surveille.** Le résumé écartait une position sans dire à qui elle appartient. Or Albou
  l'impute nommément, page 201 : « Alors que les behavioristes [...] ont, **notamment avec
  Watson**, proposé d'enregistrer les "faits" sans se préoccuper de leur signification », et sa
  note 13 vise un contemporain, Katona, « qui m'a dit, en 1966, se vouloir exclusivement *fact
  finding* ». Le résumé nomme désormais le behaviorisme, à longueur constante.
- **Le contrôle des seuils est allé chercher l'antériorité et l'a trouvée.** La notice d'autorité
  Persée signalait un article antérieur du même auteur ; le contrôleur l'a ouvert et a établi que
  **Pierre-Louis Reynaud, « Récessions et seuils économiques », *Revue économique* 8-6, 1957,
  p. 1032-1052, porte déjà « il existe en économie des points critiques »**. L'article de 1962
  n'est donc pas la première formulation. La carte n'en souffre pas, parce qu'elle ne revendiquait
  rien : le résumé écrit « Reynaud constate ». **C'est la prudence de rédaction qui a sauvé la
  carte, pas la chance.**
- **Le piège d'homonymie a été tranché deux fois, séparément.** Le corpus porte déjà une carte de
  Jean-Daniel Reynaud, le sociologue de la régulation conjointe. Les deux contrôleurs ont établi
  sur la signature imprimée de la page 865, et non sur une notice, qu'il s'agit de **Pierre-Louis**
  Reynaud, économiste à Strasbourg, l'un par son affiliation, l'autre par le renvoi que l'auteur
  fait à son propre ouvrage de 1946.

### Le rejet, et pourquoi il compte plus que son volume

**`corpus/rejected/` était vide depuis l'origine du dépôt.** Il reçoit son premier enregistrement,
et le motif est écrit pour que personne n'ait à rouvrir l'article.

Bonein 2008 satisfait la première condition du test d'entrée, son objet étant bien un comportement
économique observé, et la troisième, sa source étant ouverte et lue en texte intégral sur trente
pages. **Elle échoue à la deuxième, sur ses propres mots relus sur l'image** : page 207, « il
semble pertinent de fournir une synthèse relative à la réciprocité [...] en vue d'initier
l'économiste à cette notion » ; page 226, « au regard de la synthèse effectuée ici ». Entre les
deux, aucune expérience conduite, aucun modèle construit, chaque résultat rapporté d'autrui.

**C'est le cas que le périmètre avait prévu et écarté d'avance**, à son troisième constat d'accès :
les textes francophones ouverts de ce champ définissent souvent la discipline plutôt qu'ils
n'établissent un écart. Le rejet applique donc une règle écrite **avant** la lecture, et non un
arbitrage rendu par ce que le lot contenait. C'était l'objet même de la règle.

### Ce qu'il faut savoir avant de reprendre ce domaine

- **Les deux cartes de Tarde sont la reprise la moins chère du dépôt, et de loin.** La lecture est
  faite, complète, et rendue : `corpus/evidence/valeur-comme-fait-psychologique/lecture.json` et
  `corpus/evidence/critique-de-l-homo-oeconomicus/lecture.json`, **les deux citations relues sur
  l'image du feuillet**, sur l'exemplaire `psychologiecono03tardgoog` (University of Michigan,
  collection `americana`, `possible-copyright-status: NOT_IN_COPYRIGHT`). Il ne manque que la
  rédaction des cartes et leur contrôle. Elles n'ont pas été écrites faute de temps, pas faute de
  matière.
- **Une troisième carte de Tarde est repérée et non citable en l'état** : le tome II porte une
  théorie psychologique des prix, « le juste prix [...] n'est définissable qu'en termes
  psychologiques », et le prix déterminé « non pas par les quantités réelles des marchandises
  offertes ou demandées, mais par leurs quantités supposées ». **Vue en couche OCR seulement, non
  relue sur image.** Ce serait la plus directement comportementale des trois.
- **L'effet de dotation a une voie légitime, et il faut la prendre.** Kahneman, Knetsch et Thaler
  1991 est vérifié fermé, deux fois plutôt qu'une : le *Journal of Economic Perspectives* est
  éditorialement en accès libre, mais le lien de téléchargement publié par l'éditeur redirige vers
  `pubs.aeaweb.org`, qui rend **403**. C'est un filtrage anti-robot, pas un paywall, et il ne se
  contourne pas. **La voie de rechange est vérifiée ouverte** : Baratgin, Godin et Jamet (2022),
  « How the Custom Suppresses the Endowment Effect: Exchange Paradigm in Kanak Country »,
  *Frontiers in Psychology* 12:785721, PDF `200`, 839 103 octets.
- **Une source secondaire ouverte existe enfin, et c'est le premier remède au manque structurel de
  cinq lots.** Milet, Jean (1982), « Gabriel Tarde (1843-1904) : le créateur de la psychologie
  économique », *Bulletin de psychologie* 35(357), p. 907-913, id Persée
  `bupsy_0007-4403_1982_num_35_357_12030`, page 907 lue. **Signal à ne pas escamoter** : c'est une
  revendication d'antériorité formulée par un tardien, dans la revue même où Albou et Reynaud
  tenaient la discipline. **L'attribution de la fondation est disputée dans la lignée elle-même**,
  et un lecteur doit la traiter comme une position, pas comme un fait. Coquille à connaître : l'OCR
  signe « J. MUET » pour Jean Milet.
- **Une querelle d'antériorité traverse le lot et n'est pas tranchée.** Albou revendique page 199
  d'avoir posé sa définition « comme Reynaud, et avant même qu'il ne se préoccupe de ce problème »,
  et page 204 que Reynaud a repris ses éléments en 1974 « parfois sans mention d'origine ». Le
  corpus la consigne et ne la tranche pas.
- **La veine `dticarchive` ne porte pas ce domaine, et c'est un résultat, pas un manque.** Deux
  requêtes bien formées, 1 345 résultats cumulés, une seule pièce approchante et hors objet. La
  voie qui a rendu quatre lots précédents est close ici, pour un motif structurel : le bruit
  lexical de « utility » au sens de véhicule ou de réseau électrique militaire. **Ne pas y
  revenir.**
- **Un jalon de la lignée que le périmètre ne connaissait pas** : Maurice Roche-Agussol, entre
  Tarde et Reynaud, items `IA41555614_0038` et `jstor-1883573` repérés, **non vérifiés**.
- **Deux thèmes possibles ne porteraient qu'un candidat** et ne se déclarent pas en l'état :
  réciprocité et économie expérimentale (Bonein seul, et rejeté), marché du travail (Brunet et
  Havet seul, hérité et non lu).

### La lenteur des agents est devenue le coût dominant, et la contre-mesure ne suffit plus

C'est la leçon opératoire de cette nuit, et elle aggrave celle du passage 04. **Sept agents sur
huit ont écrit leur squelette dans les deux premières minutes, puis se sont tus pendant vingt à
quarante minutes**, et il a fallu leur envoyer un « écris maintenant » à chacun. Tous ont rendu
ensuite, aucun n'a été perdu, et plusieurs ont répondu qu'ils avaient déjà écrit leur fichier
complet au moment où le rappel arrivait.

**C'est le point à retenir, et il nuance la contre-mesure** : la surveillance de la taille du
fichier de sortie donne une image en retard sur l'état réel de l'agent, et un rappel envoyé sur
cette foi coûte à l'agent un tour de plus. La contre-mesure reste bonne, elle a rendu quatre
agents cette nuit ; **mais elle se paie, et il faut attendre plus longtemps avant de la
déclencher** que ce que les passages précédents laissaient croire.

### Un piège de séquencement à ne pas repayer, et il a failli coûter le contrôle

**Un dossier aveugle produit par `npm run corpus:brief` est un instantané, et il périme.** Le
rédacteur a modifié le résumé de `niveaux-de-rationalite-economique` **après** que son dossier eut
été produit, et le contrôleur travaillait donc sur une version antérieure du champ que sa quatrième
question contrôle précisément. Le dossier a été régénéré et le contrôleur averti.

**La régénération a été décisive** : le nouveau résumé portait une affirmation de fréquence que
l'ancien n'avait pas, et le contrôleur est allé chercher, puis a trouvé, la phrase qui l'autorise,
page 870, « qui sont celles qui se rencontrent le plus fréquemment dans la pratique ». Sans la
régénération, cette affirmation ne serait passée sous aucun contrôle. **Règle qui en sort : ne
produire le dossier aveugle qu'une fois le rédacteur clos, et le régénérer si la fiche bouge.**

### Le serveur MCP `documentary`, troisième nuit consécutive sans lui

Le diagnostic du passage 05 se confirme et rien n'a changé : le client MCP se connecte au démarrage
de la session, **avant** que le `npm ci` de l'étape 0 n'ait installé `node_modules`, et le serveur,
qui dépend d'une devDependency, échoue donc toujours en `CONNECTION_CLOSED` sans se reconnecter.
Crossref, OpenAlex, Semantic Scholar et Zotero n'ont été interrogés par aucune API cette nuit, sauf
OpenAlex par `curl` direct, **qui a lui-même épuisé son quota journalier en cours de passage**
(HTTP 429, remise à zéro à minuit UTC). Gallica a rendu `403` sur son endpoint SRU.

**La correction n'a de nouveau pas été faite, et le motif est le même** : elle sort du périmètre
documentaire que la §2 de la routine assigne à la nuit, laquelle prescrit que la première condition
vraie décide et décide seule. Elle reste la reprise à plus fort rendement du dépôt, elle ne coûte
pas une nuit d'instruction, et il faudrait que `node_modules` existe **avant** le démarrage de la
session, par un hook `SessionStart` ou par l'image de l'environnement. **C'est la troisième nuit
qu'elle est écrite ici sans être faite** : elle demande une décision hors routine.

## Passage 05/15 — 2026-08-27

- branche      : `claude/zen-johnson-hjfz2m` (imposée par la session, pas `main`). **Le travail du passage 04 est fusionné dans `main`** (PR [#79](https://github.com/J-Rbs91/Curiosity/pull/79), commit de merge `ff3a443`), et cette branche partait de `main` à jour : rien n'a été refait. Pull request [#81](https://github.com/J-Rbs91/Curiosity/pull/81) vers `main`, **ouverte et non fusionnée à la clôture**. Tant qu'elle n'est pas fusionnée, **la nuit suivante reprend depuis cette branche**, et non depuis `main`, sinon elle refera ce qui est déjà fait.
- phase        : 1 (ouverture de domaine) — `sociology-of-work`, **dixième domaine sur onze**, deuxième des trois derniers de la famille « Comprendre les humains et les organisations ». Ouverture dans l'ordre complet et en une seule nuit : périmètre, cartographie, cartes, puis thèmes.
- validées     : 7 — `flanerie-systematique`, `savoir-ouvrier-mis-en-regles`, `division-sexuelle-et-rapports-de-sexe`, `analyse-des-groupes-professionnels`, `fonctions-sociales-de-la-greve`, `mobilite-et-segmentation-de-l-emploi`, `precarite-des-trajectoires` (**les 7 avec citation, toutes relues sur l'image de la page**). Trois au premier tour, quatre au second.
- en review    : 0
- rejetées     : 0
- approfondies : 0 (une nuit d'ouverture n'en écrit pas ; la file passe de 23 à 30)
- contrôles    : validate 0 erreur (99 enregistrements, 96 validés, 75 avertissements) · build à jour, `git diff --exit-code src/content/generated/` **propre** · test 480/0 · lint 0 · audit : `sociology-of-work` passe de « corpus en cours de constitution » à **1 thème / 7 validés / 0 en cours**
- commit       : `81b3f1f` pour la projection ; la nuit a été commitée par étapes, chaque maillon poussé dès qu'il tenait debout, ce qui a sauvé le lot quand le quota a coupé la session en deux.
- bloqué par   : **le plafond hebdomadaire de l'API, atteint en plein vol.** Cinq des sept agents lancés simultanément sont morts en HTTP 429 (« weekly limit, resets 7pm UTC »), dont trois qui avaient déjà écrit leur fichier. La reprise, agent par agent et non plus par vagues de sept, a tout récupéré : **le lot est complet, rien n'a été perdu**. Deux manques subsistent, déclarés et non masqués. **Aucune source secondaire n'a été ouverte sur les sept cartes**, faiblesse structurelle du lot déclarée fiche par fiche. Et **le serveur MCP `documentary` n'était pas exposé**, pour une raison enfin identifiée (voir plus bas) : aucune base bibliométrique structurée n'a été interrogée de la nuit.
- la nuit suivante prend : **phase 1, `behavioral-economics`.** C'est le **onzième et dernier domaine**, le seul encore à zéro carte, la condition A est donc encore vraie et l'ordre de rendement de la §2 le désigne seul. **Il ne part pas de rien, et c'est le fait notable de cette nuit** : la dette envers lui a enfin été payée, sur budget propre, et le legs est détaillé dans la section « La dette envers `behavioral-economics` » de `corpus/map/sociology-of-work.scouting.md`. L'ordre d'ouverture reste non négociable : périmètre, puis scout, puis cartes, puis thèmes.

### Ce que cette nuit a établi, en une phrase

Le dixième domaine sur onze est ouvert en une seule nuit et rend sept cartes, toutes citées et
toutes relues sur l'image, dont six reposent sur la seule couche francophone servie par Persée,
et le dernier domaine fermé reçoit enfin un legs vérifié après trois passages de promesses.

### Le fait de méthode de la nuit : quatre pièges d'OCR, tous attrapés par l'image

C'est la leçon transposable de ce passage, et elle vaut d'être portée telle quelle. La règle
« l'OCR ne suffit pas à citer, la citation se relit sur l'image » a été payante **quatre fois en
une nuit**, sur trois exemplaires différents, et deux de ces cas auraient produit un faux :

1. **Taylor, p. 19** : l'OCR donne « more intricate**'** second thought ». L'image montre une
   salissure d'impression au-dessus de la ligne ; le mot imprimé n'a pas d'apostrophe. Citer sur
   l'OCR écrivait un faux verbatim. Deux contrôleurs l'ont constaté séparément.
2. **Taylor, p. 36** : l'imprimé porte la ligature **formulæ**, que la couche texte aplatit en
   « formulae ».
3. **Chapoulie, p. 86** : l'OCR de Persée corrompt la tomaison en « R. franc. Social. » ; le
   fac-similé donne « R. franç. Sociol. ».
4. **Grelet et Mansuy, p. 97, et c'est le plus grave** : **la conclusion de l'article est
   entièrement absente de la couche OCR de Persée**, l'endpoint de cette page ne rendant que la
   bibliographie qui la suit, et la page 96 se terminant sur une phrase coupée dont la suite
   n'existe nulle part dans l'OCR. **Lire l'OCR seul faisait conclure que l'article n'a pas de
   conclusion.** Or c'est cette conclusion qui établit que les autrices rendent au champ le
   déplacement du statut vers la trajectoire, au lieu de le revendiquer : sans l'image, la carte
   leur attribuait une paternité qu'elles refusent. Le même article a un encadré, page 95, dont
   l'OCR ne donne que le titre.

**À retenir pour Persée** : une page servie en HTTP 200 par l'endpoint OCR n'est pas une page
lue. Le rendu peut omettre des blocs entiers sans le signaler, et les tableaux, encadrés et
conclusions en page pleine sont les premiers concernés.

### Ce qu'il faut savoir avant de reprendre ce domaine

- **Le contrôle aveugle a rendu quatre `REWORK` sur sept, tous sur la quatrième question**, et
  aucun sur l'attribution, la citation ou les sources. C'est la question de la prose qui porte
  tout le risque de ce corpus, et les quatre défauts étaient du même genre : un mot qui élargit
  ou rétrécit ce que le texte dit. La flânerie naissait « des relations entre ouvriers » quand
  Taylor l'impute au rapport employeur-ouvrier ; Kergoat faisait de la division sexuelle du
  travail « l'enjeu » quand elle écrit « un enjeu fondamental », et l'imprimé oppose les deux
  formulations par la graisse à trois lignes d'écart ; Durand faisait varier les trois fonctions
  avec la conjoncture quand sa conclusion ne fait varier que le bargaining ; Chapoulie visait
  l'interactionnisme quand le corps de l'article combat le fonctionnalisme d'un bout à l'autre,
  l'interactionnisme lui servant de munition avant de devenir cible en conclusion.
- **Deux de ces quatre défauts venaient de la conclusion ou de l'annonce d'un article, pas de son
  corps.** Durand annonce page 276 plus qu'elle ne démontre, et le corps corrige en variation
  asymétrique ; Chapoulie récapitule page 114 dans des termes qui ne rendent pas la hiérarchie de
  ses vingt-six pages de critique. **Une carte écrite sur la seule conclusion d'un article est une
  carte à risque**, et c'est le complément de lecture qui l'a révélé dans les deux cas.
- **Trois cartes ont été retenues par le verrou de publication avant de passer**, et c'est le
  dispositif qui a fonctionné : le rédacteur a écrit `consulted: "partial"` plutôt qu'un
  `full-text` inexact sur Chapoulie, Durand et Grelet et Mansuy, dont les lectures étaient
  incomplètes. Les trois lectures ont été complétées dans la nuit, et **les trois compléments ont
  rapporté quelque chose** : Chapoulie établit sa thèse dès la page 96 et non en conclusion,
  Durand valide son hypothèse mot pour mot page 286, Grelet et Mansuy voient leur prudence
  d'attribution confirmée page 97.
- **Deux sources ne portaient pas leur DOI** : Durand affichait l'ISSN de la revue, Kergoat rien
  du tout. Les deux contrôleurs l'ont signalé hors des quatre questions. Les DOI ont été résolus
  avant écriture (code 200, vers exactement les URL Persée déjà portées) : `10.3406/sotra.1979.1609`
  et `10.3406/genre.1992.879`. **Réflexe à généraliser** : un article Persée a presque toujours un
  DOI propre, plus résolvant que l'ISSN de sa revue.
- **Un seul thème est déclaré là où cinq étaient disponibles**, et c'est une décision, pas un
  oubli. `marche-du-travail-et-trajectoires` porte deux cartes de deux auteurs distincts, Grisez
  1980 et Grelet et Mansuy 2004 : c'est un thème. `organisation-scientifique-du-travail` porte lui
  aussi deux cartes, **mais toutes deux de Taylor et du même livre**, et le précédent de la
  cybernétique a établi qu'un thème pourvu par un seul ouvrage n'en est pas un : il se déclarera
  quand un second auteur le rejoindra, et la littérature francophone sur l'organisation
  scientifique du travail existe pour cela. `division-sexuelle-du-travail`, `conflit-et-greve` et
  `groupes-professionnels` ne portent qu'une carte chacun. **Les quatre thèmes non déclarés restent
  affichés par leur libellé** : aucune carte n'est perdue, et aucune page vide n'est créée.
- **Braverman est clos, négativement et vérifiablement** : les deux éditions de 1974 sur Internet
  Archive (`labormonopolycap00brav`, `labormonopolycap00harr`) portent `access-restricted-item:
  true` en prêt numérique contrôlé. Trois passages se léguaient ce nom sans jamais vérifier son
  accès ; c'est désormais un résultat et non une dette. **La traduction française chez Maspero
  (1976) n'a pas été cherchée** : c'est la seule piste restante sur ce texte.
- **La reprise la moins chère du domaine est Dassa 1983** (« Conflit ou négociation ? Les grèves,
  leurs résultats et la taille des entreprises », *Sociologie du travail* 25-1, Persée
  `sotra_0038-0296_1983_num_25_1_1912`), repéré et **jamais vérifié en accès**, sur la même route
  que Durand donc à coût quasi nul. Il donnerait à `conflit-et-greve` sa seconde carte.
- **Piore 1975 est un échec réseau, pas un vide** : le PDF MIT DSpace
  (`dspace.mit.edu/bitstream/handle/1721.1/64001/notesfortheoryof00pior.pdf`) a rendu **HTTP 429
  trois fois de suite**. À retenter hors période de limitation.
- **Deux gisements francophones restent ouverts et non dépouillés** : le numéro 344 du *Bulletin
  de psychologie* (1980), toujours à moitié dépensé, et les pages impaires 91 à 109 de Chapoulie,
  jamais servies ou jamais ouvertes, dont la page 109 que le serveur n'a jamais rendue.

### Un faux rouge de `gitleaks` à connaitre, il se reproduira

Le scan de secrets est passé au rouge sur cette pull request, et **ce n'était pas une fuite** :
il n'a rien scanné du tout. Le job a rendu `fatal: Invalid revision range c23486f^..fe6120b`,
puis « scanned ~0 bytes », puis un code de sortie 1.

**Cause** : `gitleaks-action` résout le SHA de tête par l'API, mais travaille sur le `merge` ref
déjà construit. Cette nuit ayant été commitée par étapes et poussée plusieurs fois de suite, un
run lancé pour `d1e6f0e` s'est vu demander de scanner jusqu'à `fe6120b`, poussé quelques secondes
plus tard et absent de son graphe d'objets. Le run suivant, sur la tête à jour, a scanné
**28 commits et 388 Ko** et rendu « no leaks found ». `fetch-depth: 0` est déjà réglé dans
`.github/workflows/gitleaks.yml` : ce n'est pas le problème.

**Ce qu'il faut en faire** : rien, sinon ne pas s'en alarmer. Le rouge porte sur un commit
dépassé, il se résout seul au run suivant, et la concurrence du workflow annule déjà les runs
périmés hors `main`. **Une nuit qui voit `gitleaks` au rouge doit d'abord lire le log** : si elle
y trouve « Invalid revision range » et « scanned ~0 bytes », c'est cette course et non un secret.
Le seul geste qui l'éviterait serait de grouper les pushes, ce qui coûterait la garantie que le
commit par étapes a apportée cette nuit quand le quota a coupé la session.

### Le serveur MCP `documentary` échouera à chaque nuit, et la cause est identifiée

Ce n'est pas un aléa : c'est structurel, et aucun des quatre passages précédents ne l'avait
diagnostiqué, tous le constatant comme une fatalité. Le serveur est lancé par `node
scripts/mcp/documentary-server.mjs` et dépend de `@modelcontextprotocol/sdk`, une devDependency.
**Le client MCP se connecte au démarrage de la session, avant que `npm ci` de l'étape 0 n'ait
installé `node_modules`** : la connexion échoue donc toujours en `CONNECTION_CLOSED`, et le client
ne se reconnecte pas en cours de session.

Vérifié cette nuit : une fois `npm ci` passé, le serveur répond correctement à une poignée de main
JSON-RPC (`{"result":{"protocolVersion":"2024-11-05","serverInfo":{"name":"documentary"}}}`). **Le
serveur fonctionne, c'est l'ordre de démarrage qui est faux.** La correction n'a pas été faite
cette nuit parce qu'elle sort du périmètre documentaire de la routine, mais elle est simple et
elle rendrait Crossref, OpenAlex, Semantic Scholar et Zotero à toutes les nuits suivantes : il
faut que `node_modules` existe **avant** que la session ne démarre, par un hook `SessionStart` ou
par une installation dans l'image de l'environnement. **C'est la reprise à plus fort rendement du
dépôt**, et elle ne coûte pas une nuit d'instruction.

## Passage 04/15 — 2026-08-26

- branche      : `claude/zen-johnson-gg1vwh` (imposée par la session, pas `main`), pull request [#79](https://github.com/J-Rbs91/Curiosity/pull/79) vers `main`, **ouverte et non fusionnée à la clôture**. **Le travail du passage 03 est fusionné dans `main`** (PR [#78](https://github.com/J-Rbs91/Curiosity/pull/78), puis PR #77), et cette branche partait de `main` à jour, au commit `3ac78f8` : rien n'a été refait. Tant que la présente pull request n'est pas fusionnée, **la nuit suivante reprend depuis cette branche**.
- phase        : 1 (ouverture de domaine) — `work-psychology`, **neuvième domaine sur onze**, premier des trois derniers de la famille « Comprendre les humains et les organisations ». Ouverture dans l'ordre complet et en une seule nuit : périmètre, puis cartographie, puis cartes, puis thèmes.
- validées     : 7 — `cinq-dimensions-de-l-emploi`, `trois-etats-psychologiques-critiques`, `force-du-besoin-de-developpement`, `objectif-specifique-et-difficile`, `mecanismes-de-l-objectif`, `seuil-d-insatisfaction-salariale`, `asservissement-des-activites-hors-travail` (**les 7 avec citation, toutes relues sur l'image de la page**)
- en review    : 1 — `attention-diffusee-et-selection` (Lahy 1924), **écrite et non contrôlée**, retenue avant le contrôle par une règle du dépôt et non par un défaut : sa source primaire est en `consulted: partial`, onze pages ouvertes sur soixante-sept, et une fiche publiée exige une source primaire lue en texte intégral. Reste en `corpus/candidates/`.
- rejetées     : 0
- approfondies : 0 (une nuit d'ouverture n'en écrit pas ; la file passe de 16 à 23)
- contrôles    : validate 0 erreur (92 enregistrements, 89 validés, 63 avertissements) · build à jour, `git diff --exit-code src/content/generated/` **propre** · test 480/0 · lint 0 · audit : `work-psychology` passe de « corpus en cours de constitution » à **2 thèmes / 7 validés / 1 en cours**
- commit       : `b508362` pour la projection ; la nuit a été commitée par étapes plutôt qu'en un commit de clôture, chaque maillon étant poussé dès qu'il tenait debout.
- bloqué par   : **rien de documentaire.** Deux manques sont déclarés et non masqués. **La dette envers `behavioral-economics` n'a pas été payée** : le plafond de requêtes du scout a été atteint avant qu'une requête ciblée ait pu partir, et c'est un vide de méthode, pas un vide vérifié. Et **aucune source secondaire n'a été ouverte sur les sept cartes**, ce qui est la faiblesse structurelle du lot, déclarée fiche par fiche.
- la nuit suivante prend : **phase 1, `sociology-of-work`.** Deux domaines restent à zéro carte, la condition A est donc encore vraie, et l'ordre de rendement de la §2 désigne la sociologie du travail. **Elle ne part pas de rien** : ce passage lui lègue Taylor, *The Principles of Scientific Management*, item Internet Archive `cu31924085713331`, collections `cornell` et `americana`, **sans restriction de prêt constatée**, ce que le legs d'`operations-management` avait laissé en suspens. L'ordre d'ouverture reste non négociable : périmètre, puis scout, puis cartes, puis thèmes.

### Ce que cette nuit a établi, en une phrase

Le neuvième domaine sur onze est ouvert en une seule nuit, là où le huitième en avait demandé
deux, et il rend sept cartes dont la couche francophone est plus riche que la couche
anglophone, ce qui n'était jamais arrivé dans ce corpus.

### Ce qu'il faut savoir avant de reprendre ce domaine

- **La reprise la moins chère est `attention-diffusee-et-selection`**, et ce qui lui manque est
  nommé : une lecture complète de l'article de Lahy, dont onze pages seulement ont été ouvertes.
  Trois sections sont désignées et non localisées : le protocole du test d'attention diffusée
  (probablement p. 131-142), les tableaux de corrélation (p. 168-169), et le barème des
  2 000 sujets. Une fois le texte lu en entier, la fiche passe en contrôle et son thème,
  `juger-quelqu-un-apte`, se déclare avec elle.
- **Le numéro 344 du *Bulletin de psychologie*, de 1980, est un gisement à moitié dépensé.**
  C'est un numéro entier de psychologie du travail, servi en texte intégral par l'endpoint page
  de Persée. Deux de ses articles ont rendu une carte ; **cinq autres ont été lus et écartés
  pour un motif écrit** (Leplat 11696 et Francès 11726 sont des textes d'orientation sans thèse
  propre, Lévy-Leboyer 11734 relève de la dette socio-technique, Grisez 11729 et Savall 11735
  penchent vers des voisins), et **le reste du numéro n'a pas été dépouillé**.
- **La couche anglophone ouverte tient sur deux rapports de l'Office of Naval Research**, et
  c'est tout ce que ce champ offre en accès libre : le canon que tout le monde nommerait,
  Herzberg 1959 et Walker & Guest 1952, est en prêt numérique et **un prêt numérique ne
  s'emprunte pas**. Ce n'est pas à retenter, c'est à contourner par la littérature grise.
- **Une piste ouverte et non lue** : `DTIC_ADA065892`, « An Integration of Contemporary Theories
  of Work Motivation » (1978), accès a priori ouvert, contenu non ouvert faute de budget.
- **Deux pièges d'exemplaire, payés cette nuit et transposables.** La couche OCR de
  `DTIC_AD0779828` est inexploitable pour citer, deux contrôleurs l'ont constatée séparément. Et
  le `page_numbers.json` d'Internet Archive est **une inférence automatique, pas une lecture** :
  il annonce 94 feuillets pour 88 sur cet item, et c'est lui qui a fait écrire une collation
  fausse à trois cartes.

## Passage 03/15 — 2026-08-25

- branche      : `claude/zen-johnson-f21p0e` (imposée par la session, pas `main`), pull request [#78](https://github.com/J-Rbs91/Curiosity/pull/78) vers `main`, **ouverte et non fusionnée à la clôture**. **Le travail du passage 02 est fusionné dans `main`** (PR #76, commit `45cbae0`), et cette branche part de `main` à jour : rien n'est refait. Tant que la présente pull request n'est pas fusionnée, **la nuit suivante reprend depuis cette branche**.
- phase        : 1 (ouverture de domaine) — `operations-management`, huitième domaine, **le domaine rend enfin ses cartes**. Périmètre et cartographie existaient depuis le passage 02 : cette nuit a sauté ces deux étapes et instruit directement, comme le passage 02 l'avait prescrit.
- validées     : 8 — `cause-de-hasard-et-cause-assignable`, `trois-sigmas-arbitrage-de-cout`, `regle-de-commande-a-deux-niveaux`, `penalite-de-rupture`, `regle-lineaire-de-decision`, `absorber-les-fluctuations-de-commandes`, `attente-du-poste-aval`, `fragilite-d-un-ordonnancement-optimal` (**les 8 avec citation, toutes relues sur l'image de la page**)
- en review    : 1 — `etat-de-controle-statistique`, **`PASS` sur les quatre questions au premier tour**, retenue par le seul plafond de volume et non par un défaut. Reste en `corpus/candidates/` avec son verdict.
- rejetées     : 0
- approfondies : 0 (une nuit d'ouverture n'en écrit pas)
- contrôles    : validate 0 erreur (84 enregistrements, 82 validés, 55 avertissements) · build à jour, `git diff` propre sur `src/content/generated/` après commit · test 476/0 · lint 0 · audit : `operations-management` passe de « corpus en cours de constitution » à **3 thèmes / 8 validés / 1 en cours**
- commit       : `379ed46`, commit unique de clôture du passage 03 (les huit cartes, les trois thèmes, la cartographie corrigée et les trois écritures de consignation).
- bloqué par   : **rien.** La leçon opératoire du passage 02 a été appliquée à la lettre et elle a tenu : sources pré-identifiées avant le lancement des agents, interdiction de relire les gros fichiers en entier, écriture du fichier de sortie exigée tôt, requêtes bornées. Les cinq agents de la première vague ont tous écrit dans les deux minutes et aucun n'a été arrêté, là où trois scouts consécutifs avaient consommé la nuit précédente. Deux manques subsistent, déclarés et non masqués : **aucune source secondaire n'a été ouverte sur les huit cartes**, et **le balayage francophone a rendu trois candidats atteignables sans qu'aucun soit lu**, son budget de vingt requêtes ayant été consommé par le triage de Persée et de Numdam.
- la nuit suivante prend : **phase 1, `work-psychology`.** Trois domaines restent à zéro carte, la condition A est donc encore vraie, et l'ordre de rendement de la §2 désigne la psychologie du travail. C'est un balayage entier : ni périmètre, ni cartographie, ni stock d'entrée, un seul cas de frontière consigné (Mackworth 1948 sur la vigilance, **tranché du côté de `human-factors` et donc pas à réclamer**). L'ordre d'ouverture est alors non négociable : périmètre, puis scout, puis thèmes, puis concepts.

### Ce que cette nuit a établi, en une phrase

Le huitième domaine sur onze, ouvert sans carte depuis deux passages, rend huit cartes qui portent
toutes une citation relue sur l'image, et trois thèmes dont aucun ne repose sur une carte unique.

### Ce qu'il faut savoir avant de reprendre ce domaine

- **La reprise la moins chère du dépôt est `etat-de-controle-statistique`** : écrite, contrôlée,
  reçue `PASS`, et retenue par le plafond. Ce qui la ferait meilleure est nommé : son titre porte
  un syntagme que les deux pages qui la fondent n'emploient pas, et le contrôleur a établi que
  l'expression consacrée se lit p. 146, dans une partie du livre que personne n'a dépouillée.
- **Les identités bibliographiques des quatre candidats sont désormais établies sur la pièce**, et
  trois des quatre étaient mal décrites par la cartographie. Le détail est dans la section
  « Reprise du 25 août 2026 » de `corpus/map/operations-management.scouting.md`, qui fait foi
  contre les sections antérieures du même fichier.
- **Trois candidats francophones sont atteignables et non lus** : Guihéneuf 1956 sur Persée (DOI
  résolu), Fiore 1987 sur Persée (**identifiant non confirmé par DOI, à reconfirmer avant usage**),
  De Almeida 1998 sur Numdam (**GET du PDF non testé**). C'est la reprise la plus rentable du
  domaine, et elle comble le manque que le passage 02 déclarait comme son principal.
- **Deux gisements restent ouverts dans des textes déjà lus** : les parties V et VI de Shewhart
  (limites de contrôle contre limites de tolérance) et la partie III de Bellman (lissage
  industriel, stock optimal).

## Passage 02/15 — 2026-08-24

- branche      : `claude/zen-johnson-zfxtk9` (imposée par la session, pas `main`), pull request vers `main`. Le travail du passage 01 (PR #71) **est fusionné dans `main`**, et cette branche part de `main` à jour : rien n'est refait. Tant que la présente pull request n'est pas fusionnée, **la nuit suivante reprend depuis cette branche**.
- phase        : 1 (ouverture de domaine) — `operations-management`, huitième domaine, dernier de la famille « Comprendre la production et les systèmes ».
- validées     : 0
- en review    : 0
- rejetées     : 0
- approfondies : 0
- contrôles    : validate 0 erreur (75 enregistrements, 74 validés, 50 avertissements) · build à jour, `git diff` propre sur `src/content/generated/` · test 476/0 · lint 0 · audit : `operations-management` toujours 0 thème / 0 validé.
- commit       : commit unique de clôture du passage 02 (périmètre, cartographie, et les trois écritures de consignation).
- bloqué par   : **le maillon `corpus-scout` a coûté toute la nuit d'instruction.** L'ouverture a produit son périmètre (§`operations-management` de `corpus/perimeter.md`) et sa cartographie (`corpus/map/operations-management.scouting.md`, 244 lignes), **mais aucune carte**. Trois scouts ont été lancés : le premier a rassemblé une dizaine de sources (Shewhart, Bellman P-651, rapport HMMS, rapport de stock AD 422810, Sterman, deux PDF Pesqueux) puis a tourné plus d'une heure sans jamais écrire le fichier ; arrêté. Le deuxième, relancé avec les sources déjà en scratchpad et consigne d'écrire tôt, a écrit un squelette de sections puis a redéfilé sans remplir le corps ; arrêté. Le troisième, chirurgical (sources pré-identifiées, relecture des gros fichiers interdite, écriture d'abord), a écrit la cartographie en une passe après un rappel « écris maintenant ». **Leçon opératoire, à porter au prochain passage** : ces agents accumulent tout en contexte et n'écrivent qu'en toute dernière action ; il faut leur donner les sources déjà identifiées, leur interdire la relecture des gros textes, et borner explicitement le nombre de requêtes. Le décor était planté d'avance dans `corpus/RESTE-A-FAIRE.md` (« un agent lancé en parallèle doit préfixer ses fichiers de travail »), mais le coût réel n'était pas la contamination, c'était la latence de lecture.
- la nuit suivante prend : **phase 1, `operations-management` de nouveau** — le domaine reste à 0 validé (condition A), et son périmètre et sa cartographie existant désormais, elle saute périmètre et scout et **instruit directement**. Ordre de priorité donné par la cartographie : d'abord les deux candidats propres (Shewhart *Economic Control of Quality* 1931 ; Bellman *Mathematical Aspects of Scheduling Theory*, RAND P-651, 1965), dont l'accès est confirmé et la référence identifiable ; ensuite le rapport HMMS et le rapport AD 422810, dont **l'identité bibliographique est « à préciser »** avant toute fiche (une référence qui ne résout pas n'existe pas) ; en parallèle, le **balayage complémentaire** que la cartographie réclame avant toute déclaration de thème (couche francophone non cherchée, files d'attente, quantité économique de commande, flux tiré, contrainte).

### Ce que cette nuit a établi, en une phrase

Le huitième domaine sur onze est ouvert dans l'ordre exigé, périmètre puis cartographie, avec
quatre candidats atteignables dont deux propres ; il n'a pas rendu de carte, la chaîne d'agents
ayant consommé la nuit, et il s'instruira au passage suivant sans repartir de zéro.

### Ce qu'il faut savoir avant de reprendre ce domaine

- **Les quatre frontières déjà tranchées depuis l'autre côté ont été reprises telles quelles** dans le périmètre (`cybernetics`, `systems-thinking`, `human-factors`, `decision-science`), sans les rouvrir. Le legs des deux voisins qui avaient consigné des textes est **tout entier non ouvert** : trois rapports DoD de `cybernetics` (items `dticarchive` non ouverts) et Delatour et al. de `human-factors` (notices HAL sans fichier). Ils restent en angle mort, pas en rejet.
- **La couche francophone n'a pas été cherchée** : c'est le manque le plus net de la cartographie, à combler en priorité au balayage complémentaire (Persée, HAL, Cairn, OpenEdition Books, theses.fr — gestion industrielle, productique, génie industriel).
- **Les trois domaines fermés restants** (`sociology-of-work`, `work-psychology`, `behavioral-economics`) ont chacun reçu une requête ciblée obligatoire : Taylor/Braverman repérés mais accès non vérifié pour le premier ; littérature dispersée sans texte primaire identifié pour le deuxième ; Schweitzer & Cachon 2000 repéré mais paywallé pour le troisième. **Aucun candidat vérifié, aucun « vide » établi** : trois repérages sans accès, à reprendre avec une base bibliographique structurée quand le MCP `documentary` sera exposé.

## Passage 01/15 — 2026-08-23

- branche      : `claude/upbeat-archimedes-hhx6zg` (imposée par la session, pas `main`), pull request [#71](https://github.com/J-Rbs91/Curiosity/pull/71) vers `main`, **ouverte et non fusionnée à la clôture**. **La nuit suivante reprend depuis cette branche**, et non depuis `main`, tant que la pull request n'est pas fusionnée : sinon elle refera ce qui est déjà fait.
- phase        : 1 (ouverture de domaine)
- domaine      : `decision-science`
- validées     : 8 — `theorie-des-perspectives`, `effet-de-cadrage`, `heuristiques-de-jugement`, `theories-normatives-du-choix-sous-risque`, `critique-de-l-utilite-esperee-subjective`, `normatif-descriptif-prescriptif`, `penser-a-partir-des-valeurs`, `classement-multicritere-electre` (dont **8 avec citation**)
- en review    : 0
- rejetées     : 0
- approfondies : 0
- contrôles    : validate 0 erreur (75 enregistrements, 74 validés, 50 avertissements) · build à jour, `git diff` propre sur `src/content/generated/` · test 419/0 · lint 0
- commit       : `15f09af` (projection des huit cartes ; le présent journal suit dans le commit de clôture)
- bloqué par   : **le sous-agent `corpus-orchestrator` n'a pas pu lancer la chaîne**, son outil `Task` étant désactivé dans cette session. Il a constaté que les sessions filles lancées en repli n'héritent d'aucune permission réseau, et il a refusé de s'accorder cette permission lui-même par `--allowedTools` ou par un fichier de réglages écrit pour l'occasion. **C'était la bonne décision** et elle a coûté un aller-retour, pas le lot : la chaîne a été conduite depuis la session elle-même, un agent par maillon, les contextes restant séparés. Le contrôle est donc resté aveugle, ce qui n'aurait pas été le cas si un seul agent avait tout fait.
- la nuit suivante prend : **phase 2**. Plus aucun domaine n'est vide au sens de la condition A, et `corpus:deepen` liste en fin de sortie **les huit cartes ci-dessus**, qui sont exactement la file. Aucune ouverture, aucune nouvelle carte.

### Ce que cette nuit a établi, en une phrase

Le septième domaine sur onze est ouvert dans l'ordre complet, périmètre puis cartographie puis
thèmes puis cartes, et il rend huit cartes qui portent toutes une citation relue sur l'image de
la page.

### Ce qu'il faut savoir avant de reprendre ce domaine

- **Deux thèmes seulement ont été déclarés là où la cartographie en proposait quatre.** Les deux
  écartés existent, leurs textes sont ouverts et lus, et ils attendent : « Agréger des
  préférences » n'aurait porté qu'une carte (Arrow 1948, rapport RAND ouvert, OCR dégradé), et
  « Chercher une solution plutôt que la calculer » repose sur deux textes du même trio d'auteurs
  sur le même programme, dont la cartographie dit elle-même qu'un seul concept devrait en sortir.
- **Le domaine n'a aucune signature féminine.** À surveiller et à porter au prochain passage, pas
  à corriger par quota.
- **Cinq des huit cartes reposent sur le même exemplaire numérisé**, le recueil de 1988. C'est la
  faiblesse structurelle du lot, déclarée dans les `notes` des cinq fiches.
