concept : activite-empechee
verdict : REVISE

protocole d'audit : version 3
dossier lu : `corpus/evidence/activite-empechee/lecture.json` (seul fichier du répertoire ;
l'enregistrement validé ne porte aucun champ `dossier`, le répertoire est donc conventionnel).
Contrôle de forme : `npm run corpus:deepen -- --check --only=activite-empechee` passe
(1 416 mots comptés, limites comprises). Texte lecteur seul : **1 135 mots** (lead 201,
sections 934).

---

TRAJECTOIRE ACTUELLE

- lead[0] : le lecteur comprend que le compte rendu d'une journée de travail laisse
  nécessairement tomber une classe entière de choses vécues (essais abandonnés, méthode écartée,
  ce qu'une réunion a fait sauter, ce qu'on a fait à contrecœur) ; il peut désormais distinguer
  « ce que j'ai fait » de « ce que j'ai traversé ». Delta net et excellent.
- lead[1] : il apprend que ce reste a un auteur, un nom et une thèse de proportion : ce reste
  n'est pas résiduel, c'est le volume, et le réalisé n'en est que la surface. Delta net.
- S1.P1 : il gagne les deux noms, activité réalisée et réel de l'activité, et l'énoncé que le
  premier est inclus dans le second. Delta réel mais **partiel** : la seconde moitié du
  paragraphe (« on peut voir la surface entière sans jamais soupçonner ce qu'il y a en dessous »)
  reparaphrase lead[1] sans rien ajouter.
- S1.P2 : REDONDANT AVEC lead[0]. L'exemple inventé de la machine en panne réénumère exactement
  la liste de lead[0] (essais qui ne donnent rien, hésitation à demander de l'aide, solution
  trouvée presque par hasard), transposée à la troisième personne. Aucune distinction nouvelle ;
  l'exemple n'explique aucun mécanisme, il redonne l'intuition déjà acquise.
- S2.P1 : delta franc, et le meilleur de la seconde moitié : le lecteur apprend **ce que le
  volume contient**, en quatre registres distincts (non fait / impossible / tenté sans réussir /
  voulu ou possible manqué). Réserve : le texte clôt une énumération que la source laisse ouverte
  (voir SCORES, fidélité).
- S2.P2 : delta réel, et c'est la nuance la plus utile du texte : l'échec n'est pas l'indice
  d'une incompétence, l'empêchement est une part ordinaire du travail bien fait. Le lecteur peut
  désormais écarter un contresens qu'il allait probablement faire.
- S3.P1 : delta lexical : l'expression figée au singulier n'est pas la formulation de l'auteur,
  qui écrit un pluriel adjectivé. Le lecteur gagne une précision de vocabulaire. Faiblesse
  structurelle : la section **introduit elle-même** le terme « activité empêchée » pour le
  corriger aussitôt ; le lecteur ne l'avait pas rencontré ailleurs que dans l'intitulé du thème.
- S3.P2 : delta annoncé (suspendue ≠ contrariée) mais **produit par le rédacteur, non par la
  source**, et donné comme « ce que l'auteur cherche à distinguer ». La dernière proposition
  (« une bonne partie de ce que le travail apprend à quelqu'un se joue précisément dans cette
  diversité ») n'a aucun appui dans ce qui est disponible. Delta d'apparence.
- S4.P1 : delta de provenance : l'auteur ne revendique pas la trouvaille, il renvoie à un texte
  antérieur de lui-même et à Vygotski. **REDONDANT AVEC LA CARTE** : l'`attributionNote` projetée
  dans `concepts.generated.ts` et affichée au lecteur avant qu'il ouvre l'approfondissement dit
  déjà, mot pour mot en substance, « il n'y présente pas la formule comme neuve : il l'introduit
  en renvoyant à un texte antérieur de lui-même […] et rapporte ailleurs à Vygotski l'idée qui la
  soutient ».
- S4.P2 : REDONDANT AVEC S4.P1 quant au rôle (généalogie), et de nouveau avec la carte, qui
  affiche « L'élaboration est celle de l'équipe de clinique de l'activité du Cnam, dont les
  cosignatures occupent un tiers de sa bibliographie ». Aucun delta conceptuel : après ce
  paragraphe, le lecteur ne comprend ni ne distingue rien de plus du concept.
- S5.P1 : delta de conséquence : s'en tenir au réalisé fait juger un travail sur une base
  tronquée ; la méthode de l'auteur vise à redonner du volume au réalisé. Delta réel. Mais la
  dernière phrase (« en disent souvent plus long sur les difficultés réelles d'un travail que le
  résultat ») est une évaluation de fréquence que rien n'appuie.
- S5.P2 : delta net, le plus fort de la seconde moitié : deux personnes au même résultat n'ont
  pas traversé le même travail, et une observation qui ne regarde que le résultat les confond.
  Le lecteur gagne un test opératoire. Réserve d'attribution : « C'est précisément cet écart que
  le texte de 2018 demande de prendre en compte » fait dire au texte de 2018 une comparaison
  interindividuelle qu'il ne formule pas.

Séquences redondantes : {lead[0], S1.P2}, {S4.P1, S4.P2}, et {S4.P1, S4.P2} contre
l'`attributionNote` de la carte. Aucune séquence de trois deltas identiques consécutifs.

Part du texte lecteur sans delta conceptuel propre : S1.P2 (106 mots) + S4 (185 mots) =
**291 mots, soit 26 %**, dans un texte qui plafonne déjà à 1 135 mots.

---

RÔLE DES SECTIONS

- S1 « La surface et le volume » : baptiser les deux termes de l'auteur et donner corps à
  l'image du lead. Rôle légitime ; exécution redondante à moitié.
- S2 « Ce que ce volume contient » : remplir le volume et désamorcer l'assimilation de
  l'empêchement à l'incompétence. Section la plus utile du texte.
- S3 « Un mot plus rigide que celui de l'auteur » : police du vocabulaire. Rôle réel mais
  autocentré sur une étiquette que le texte introduit lui-même, et conclusion sur-attribuée.
- S4 « Une idée qui n'est pas présentée comme neuve » : généalogie et sociologie de l'auteur.
  **Rôle presque nul pour la compréhension du concept**, et déjà tenu par la carte. C'est ici que
  le texte a dépensé sa place la plus chère.
- S5 « Ce que cela change d'ouvrir ce volume » : enjeu et conséquence pratique. Bonne place,
  bonne fonction, mais l'enjeu retenu est méthodologique alors que le dossier en porte un autre,
  beaucoup plus fort (voir matière sous-exploitée).

Progression explicable en une phrase par section : oui pour S1, S2, S5 ; laborieusement pour S3 ;
non pour S4. La colonne vertébrale lead → S1 → S2 → S5 est saine ; S3 et S4 s'intercalent entre
le contenu du concept et son enjeu, et cassent la montée au moment où elle devait se produire.

---

SCORES

- fidélité documentaire : 2/4 — Les six citations sont couvertes : la citation de lead[1] est
  `quotation.text`, l'énumération de S2.P1 et la phrase de Vygotski en S4.P1 sont dans
  `review.notes[3]`, la note 2 de 2018 en S3.P1 et S5.P2 aussi, « à donner du volume à cette
  activité réalisée » est dans `review.notes[5]`. Quatre fragilités visibles néanmoins.
  (a) S4.P1 ferme la citation de Vygotski sur un point final (« comme l'a vu Vygotski. ») que ni
  `review.notes[3]` ni `lecture.json` ne portent : le contrôle le tolère, la règle « mot pour
  mot, ponctuation comprise » non. (b) S2.P1 écrit « Quatre éléments, donc », ce qui referme une
  énumération que la source poursuit : `definition_de_lauteur` donne la suite (« ce qu'on pense
  ou qu'on rêve pouvoir faire ailleurs. Il faut y ajouter – paradoxe fréquent – ce qu'on fait
  pour ne pas faire ce qui est à faire, ou encore ce qu'on fait sans vouloir le faire. Sans
  compter ce qui est à refaire. »), et `limits[2]` du fichier avertit lui-même que cette phrase
  « ne se laisse pas résumer sans perte ». (c) S3.P2 attribue à l'auteur une distinction
  suspendue/contrariée qu'aucune source ne formule (« ce que l'auteur cherche à distinguer »), et
  sa dernière proposition sur « ce que le travail apprend à quelqu'un » est sans appui.
  (d) S5.P1 (« en disent souvent plus long ») et S5.P2 (« C'est précisément cet écart que le
  texte de 2018 demande de prendre en compte ») posent une fréquence et une exigence que les
  sources ne posent pas. Rien d'inventé de toutes pièces, aucune source `metadata-only` traitée
  comme lue (les cinq sources du dossier sont `full-text`) : d'où 2 et non 1.
- progressivité pédagogique : 3/4 — lead → S1 → S2 est irréprochable, chaque brique est posée
  avant d'être utilisée. Deux accrocs : S4 interrompt la montée par de la généalogie, et S5.P1
  nomme « la clinique de l'activité » comme une chose connue alors que rien avant n'a expliqué ce
  qu'est une clinique de l'activité ni qui la pratique.
- densité / non-redondance : 2/4 — S1.P2 réénumère lead[0] ; S4 (deux paragraphes) redit ce que
  l'`attributionNote` de la carte affiche déjà. 26 % du texte lecteur sans delta propre, dans un
  texte qui n'atteint pas la fourchette de 1 300-1 700 mots hors champ interne.
- clarté : 3/4 — langue courante, aucun terme savant introduit avant son usage, phrases nettes.
  Deux points opaques : « un auteur qu'il cite en une phrase » (S4.P1) laisse Vygotski sans le
  moindre indice de qui il est et pourquoi son accord compte, et « la clinique de l'activité »
  arrive en S5.P1 comme un acquis.
- profondeur explicative : 2/4 — le texte nomme le volume, l'illustre, l'énumère, en tire une
  conséquence d'analyse. Il n'explique à aucun moment **pourquoi** le réel excède le réalisé ni
  **ce que fait** à quelqu'un l'activité qu'il n'a pas faite. Le dossier porte précisément ce
  mécanisme et le texte ne l'ouvre pas (voir matière sous-exploitée). S5.P2 rattrape de justesse.
- valeur des exemples : 1/4 — un seul exemple, inventé, qui répète lead[0] au lieu de faire
  comprendre quoi que ce soit de neuf, alors que le texte de 2004 lu intégralement fournit deux
  cas réels que `definition_de_lauteur` décrit : la comédienne de la Comédie-Française cherchant
  comment tenir un chandelier brûlant, et l'autoconfrontation croisée entre un facteur titulaire
  et un jeune rouleur. La nature hypothétique est correctement signalée (« Imaginons »), ce qui
  évite le 0.
- limites / nuances : 2/4 — S2.P2 est une vraie nuance, bien placée, qui évite le contresens le
  plus probable. Mais la distinction que la revue de la carte désigne elle-même comme « le point
  qui aurait pu déraper » est absente : le réel de l'activité n'est pas l'activité réelle de la
  tradition ergonomique, et le concept se construit contre la formule que le dossier cite,
  « La tâche est ce qui est à faire, l'activité ce qui se fait, a-t-on pris l'habitude de dire ».
  Un lecteur sortant de ce texte confondra très probablement les deux. La nuance de S3 est réelle
  mais mal attribuée.
- pouvoir d'ouverture : 2/4 — S5.P2 laisse un test que le lecteur peut appliquer, ce qui n'est
  pas rien. Mais rien ne nomme une tension vive, un texte à ouvrir, une question restée
  ouverte ; le texte se termine sur une reformulation de la note 2 de 2018 déjà citée en S3.P1.
  Les ouvertures disponibles restent enfermées dans le champ interne `limits`.

---

défauts majeurs :

1. **S4 dépense 185 mots à redire l'`attributionNote` que la carte affiche déjà** au lecteur
   (renvoi à un texte antérieur de lui-même, filiation Vygotski, élaboration collective de
   l'équipe du Cnam, tiers de bibliographie cosigné). C'est le défaut le plus coûteux : c'est la
   place où aurait dû tenir le mécanisme.
2. **Le mécanisme de l'empêchement est absent alors que le dossier le porte en clair.** Le texte
   dit qu'il y a un reste et ce qu'il contient ; il ne dit jamais que ce reste continue d'agir.
3. **L'enjeu retenu est le mauvais, ou du moins le plus pauvre des deux disponibles.** S5 fait de
   l'empêchement un problème de justesse d'analyse. Le dossier établit qu'il est chez l'auteur un
   problème de santé.
4. **S1.P2 : un exemple inventé qui répète le lead**, là où deux cas réels lus en texte intégral
   attendaient d'être employés.
5. **Sur-attributions non marquées** : S3.P2 (la distinction suspendue/contrariée donnée comme
   celle de l'auteur ; « ce que le travail apprend à quelqu'un »), S5.P1 (« en disent souvent
   plus long »), S5.P2 (« C'est précisément cet écart que le texte de 2018 demande »). Chacune
   est du ressort du gate, mais elles sont visibles à l'œil nu et interdisent `PASS`.
6. **S2.P1 referme en « quatre éléments » une énumération que la source laisse ouverte**, et
   perd au passage l'élément le plus saisissant de la liste, le « paradoxe fréquent » de ce qu'on
   fait pour ne pas faire ce qui est à faire.
7. **La thèse de S3 est plus fragile que le texte ne le laisse croire, et il faut le dire sans
   la trancher.** `notes[1]` de la fiche soutient bien que le libellé au singulier est « plus
   figé que ce que l'auteur écrit ». Mais le dossier porte aussi Simonet, Caroly & Clot 2011, lu
   en texte intégral et **cosigné par l'auteur**, qui écrit le substantif « d'activité empêchée »
   en le renvoyant à (Clot, 1999) ; et la réserve 6 du dossier dit expressément qu'il n'a **pas
   pu être établi** où le substantif apparaît pour la première fois. Écrire « Ce n'est pas
   exactement ce qu'écrit l'auteur » sans réserve transforme une impossibilité d'établissement en
   constat négatif. L'audit signale la tension entre les deux couches ; il ne prescrit pas de
   conclure dans un sens ou dans l'autre, et surtout pas de conclure que le substantif est absent
   de l'œuvre.
8. **Le champ `limits` est écrit comme s'il était destiné au lecteur**, ce qui l'empêche de faire
   son travail de frontière interne. Il ne nomme aucun titre (« l'un consacré à la fonction
   psychologique du travail, l'autre au pouvoir d'agir » au lieu de *La fonction psychologique du
   travail* et *Travail et pouvoir d'agir*), aucun état d'accès (les deux livres ne sont pas en
   accès ouvert, introuvables sur HAL et Internet Archive ; *Le Travail Humain* et *Travailler*
   sont en HTTP 403 via Cairn), et il ne nomme pas l'approche voisine dont la frontière est en
   jeu, la psychodynamique du travail de Dejours, que le dossier désigne pourtant. Pire,
   `limits[0]` affirme d'un texte non ouvert que « la réponse y est écrite », quand
   `review.notes[6]` dit exactement l'inverse : « je ne peux donc ni confirmer ni infirmer que la
   formule y figure déjà telle quelle ».
9. Divergence mineure à ne pas propager : `review.notes[4]` identifie Clot 2003c comme un texte
   des « Actes du XXXVIIIe Congrès de la SELF », `lecture.json` comme un chapitre de l'ouvrage
   dirigé par Vallery et Amalberti. Les deux descriptions sont probablement le même objet, mais
   `limits[0]` choisit l'une des deux sans le signaler.
10. Écarts de forme mineurs, que le contrôle laisse passer : aucune espace fine insécable
    (U+202F) dans les guillemets, alors que 109 des 136 approfondissements du dépôt en portent.
    Aucun tiret cadratin, en revanche : les deux tirets présents sont des demi-cadratins issus de
    la citation source.

matière disponible mais sous-exploitée :

- **Le mécanisme vygotskien du conflit d'activités possibles.** `definition_de_lauteur` cite,
  d'après le texte de 2024 lu en texte intégral : « chaque minute, l'homme est plein de
  possibilités non réalisées, et ce qui se réalise n'est jamais que l'activité qui a vaincu au
  point de collision entre toutes les activités possibles. Celles qui n'ont pas vaincu, plus ou
  moins refoulées, forment des résidus incontrôlés n'ayant que plus de force pour exercer dans
  l'activité du sujet une influence contre laquelle il peut rester sans défense. » Et la lecture
  en tire : « L'activité empêchée n'est donc pas une activité absente : c'est une activité qui
  continue d'agir sur celui qui ne l'a pas faite. » C'est le delta le plus profond que ce texte
  pouvait produire, et il est entièrement disponible.
- **L'enjeu de santé.** Toujours d'après 2024 : l'activité « affranchit le sujet – en risquant
  toujours l'échec – des dépendances de la situation concrète et se subordonne le contexte en
  question, à moins d'en être empêchée. C'est bien sûr souvent le cas et c'est la source même de
  la dégradation de la santé au travail jusqu'aux formes graves de psychopathologie du travail » ;
  « C'est ce pouvoir d'agir qui peut se trouver et se trouve fréquemment amputé aujourd'hui,
  jusqu'à entamer la vitalité subjective inhérente à l'activité ainsi définie. »
- **Ce que la notion refuse, en une phrase citable** : « Entre le réel et le réalisé de leur
  activité, celles et ceux qui travaillent ne peuvent pas trier. »
- **La distinction contre laquelle le concept se construit** : « La tâche est ce qui est à faire,
  l'activité ce qui se fait, a-t-on pris l'habitude de dire », et « Le réel de l'activité est
  précisément ce que cette dernière formule laisse tomber ». Avec l'avertissement de la revue de
  la carte : ne jamais écrire « activité réelle » pour « réel de l'activité ».
- **Deux exemples réels du texte de 2004** : la comédienne de la Comédie-Française qui cherche
  comment tenir un chandelier brûlant ; l'autoconfrontation croisée entre un facteur titulaire et
  un jeune rouleur. Le dossier les nomme comme les deux terrains sur lesquels la démonstration
  est menée. Prudence : il en donne le sujet, non le détail de ce qui s'y passe ; on peut dire
  sur quoi l'auteur raisonne, pas raconter la scène.
- **Ce que 2004 dit de son propre objet** : « L'objet de connaissance est moins l'activité que le
  développement de l'activité et ses empêchements », et le déplacement qui précède (« moins de
  repérer la structure de l'activité en tant que telle que la structure de son développement
  possible ou impossible »).
- **Deux formulations de reprise, lues en texte intégral, jamais employées** : Simonet, Caroly &
  Clot 2011, « la clinique de l'activité distingue l'activité réalisée du réel de l'activité
  (Clot, 2008). Elle ne limite donc pas les possibilités du professionnel observé à ce qu'on lui
  voit faire » ; Quillerou-Grivot & Clot 2013, « l'immensité du réel de l'activité ». La première
  est une glose du concept plus nette que ce que S1 produit lui-même.
- **La fin de l'énumération de 2024**, et en particulier les contre-activités et le « paradoxe
  fréquent », que S2.P1 coupe.

limites documentaires :

- Aucune source `metadata-only` : les cinq sources du dossier sont déclarées `full-text` et
  décrites avec leur taille, leur pagination et leur voie d'accès. La matière est riche et le
  texte n'est pas pauvre par contrainte : il l'est par choix de plan. `BLOCKED_SOURCE` est exclu.
- Clot 2003c (« Le collectif dans l'individu ? ») n'a pas été ouvert : rien ne peut être dit de
  son contenu, et surtout pas que la formule y figure déjà.
- *La fonction psychologique du travail* et *Travail et pouvoir d'agir* n'ont pas été ouverts :
  aucune phrase sur ce qu'ils contiennent, aucune page, aucun développement attribué. Les
  millésimes 1999, 2002 et 2008 sont des références lues en bibliographie, pas des signatures
  vérifiées.
- **La différence avec la psychodynamique du travail de Dejours n'est pas documentable ici** :
  la réserve 8 du dossier dit « je n'ai ouvert aucun texte de Dejours et ne peux donc pas
  documenter la différence entre les deux, seulement signaler qu'elle existe et qu'elle est
  revendiquée ». Une trajectoire cible ne doit donc pas demander d'expliquer cette frontière.
  Tout au plus peut-elle demander de dire, sans la caractériser, que la confusion est courante et
  que la distinction est revendiquée : c'est exactement, et seulement, ce que le dossier porte.
- Aucun relevé de réception mesuré (scite non connecté, OpenAlex en échec de quota) : aucune
  phrase sur la diffusion, l'influence ou la fréquence des reprises.
- Où le substantif « activité empêchée » apparaît pour la première fois dans l'œuvre n'a pas pu
  être établi : ni affirmation d'origine, ni affirmation d'absence.

---

TRAJECTOIRE CIBLE

Principe : la colonne vertébrale actuelle (lead → surface/volume → contenu du volume →
conséquence) est bonne et se garde. Ce qui change : S4 disparaît comme section, S3 se replie et
se tempère, et la place ainsi libérée sert à introduire le mécanisme et l'enjeu, qui manquent.
Six sections au plus, texte lecteur visé 1 350-1 550 mots hors `limits`.

**lead** — inchangé. lead[0] est le meilleur passage du texte et lead[1] pose correctement la
citation et la thèse de proportion. Ne rien y ajouter.

**S1 — l'image et les deux mots.**
1. Le lecteur y entre avec l'intuition du reste et la phrase de 2004.
2. Il en sort avec les deux termes de l'auteur, activité réalisée et réel de l'activité, et avec
   le geste de pensée que l'image commande : l'inclusion, pas la juxtaposition.
3. Matière : `quotation`, `definition_de_lauteur` (le déplacement d'objet du texte de 2004 :
   « moins de repérer la structure de l'activité en tant que telle que la structure de son
   développement possible ou impossible »), et l'un des deux terrains réels, nommé comme terrain
   et non raconté comme scène.
4. Ne doit surtout pas réénumérer lead[0], ni reprendre l'exemple de la machine en panne, ni
   glisser l'expression « activité réelle ».

**S2 — ce que le volume contient.**
1. Le lecteur sait qu'il y a un volume ; il ne sait pas de quoi il est fait.
2. Il en sort avec l'inventaire de l'auteur, **ouvert** et non refermé sur quatre cases, et avec
   l'élément qui surprend : ce qu'on fait pour ne pas faire ce qui est à faire.
3. Matière : citation de 2024 (`review.notes[3]`) plus la suite de la phrase donnée par
   `definition_de_lauteur`, et la note 2 de 2018 pour les contre-activités.
4. Ne doit surtout pas écrire « quatre éléments », ni présenter l'énumération comme la définition
   du texte de 2004.

**S3 — pourquoi ce qui n'a pas été fait pèse encore. (section nouvelle, cœur du texte)**
1. Le lecteur sait ce que contient le volume ; il ne sait pas pourquoi cela devrait l'intéresser
   plus qu'une liste de regrets.
2. Il comprend le mécanisme : à chaque instant plusieurs activités possibles entrent en
   collision, une seule se réalise, et celles qui ont perdu ne disparaissent pas, elles agissent
   encore sur celui qui ne les a pas faites. C'est ici que l'empêchement cesse d'être une absence.
3. Matière : le passage de Vygotski cité par le texte de 2024 dans `definition_de_lauteur`, et la
   lecture qu'en fait le dossier. La filiation vygotskienne se dit ici, où elle sert, plutôt qu'en
   généalogie ; deux lignes suffisent, la carte l'affiche déjà.
4. Ne doit surtout pas devenir une notice biographique sur Vygotski, ni refaire S4.P1, ni
   psychologiser au-delà du texte cité.

**S4 — l'empêchement n'est pas un défaut de compétence, c'est une affaire de santé.**
1. Le lecteur comprend le mécanisme ; il croit encore, probablement, que tout cela sert à mieux
   évaluer le travail.
2. Il découvre que l'enjeu de l'auteur est ailleurs : l'activité empêchée abîme, l'auteur parle
   de pouvoir d'agir amputé et de dégradation de la santé au travail. Et qu'un travailleur ne
   peut pas trier entre le réel et le réalisé de son activité.
3. Matière : les deux passages de 2024 sur l'empêchement comme source de dégradation de la santé
   et sur le pouvoir d'agir amputé, la phrase « Entre le réel et le réalisé de leur activité,
   celles et ceux qui travaillent ne peuvent pas trier », et l'actuel S2.P2, qui migre ici et y
   trouve sa vraie place (l'échec n'est pas l'indice d'une incompétence).
4. Ne doit surtout pas nommer une pathologie, un chiffre ou un seuil que les sources ne portent
   pas, ni caractériser la différence avec la psychodynamique du travail.

**S5 — le mot au singulier, et ce qu'il aplatit.**
1. Le lecteur a le concept ; il va rencontrer ailleurs une étiquette plus courte que lui.
2. Il apprend que l'auteur écrit un pluriel adjectivé, activités suspendues, contrariées ou
   empêchées, voire contre-activités, et que le singulier figé perd cette variété.
3. Matière : note 2 de 2018 (`review.notes[3]`), `notes[1]` de la fiche.
4. **Contraintes fortes.** Ne pas attribuer à l'auteur une distinction entre suspendue et
   contrariée qu'aucune source ne formule ; si la différence est explicitée, elle l'est comme
   lecture proposée, marquée comme telle. Ne pas conclure que le substantif est absent de son
   œuvre : le dossier montre le substantif dans un texte qu'il cosigne (Simonet, Caroly &
   Clot 2011, renvoyé à Clot 1999) et déclare l'origine non établie. Section courte, un
   paragraphe suffit ; elle est utile mais elle n'est pas le cœur.

**S6 — la confusion la plus fréquente.**
1. Le lecteur maîtrise le concept et son vocabulaire.
2. Il sort en sachant que le réel de l'activité n'est pas l'activité réelle au sens où
   l'ergonomie oppose la tâche à l'activité, et que le concept se construit précisément contre
   ce qui tombe de cette opposition. C'est le contresens que la revue de la carte désigne comme
   celui qui aurait pu déraper, et c'est une bonne fin : elle laisse le lecteur devant une
   frontière et devant une question ouverte, celle de savoir où d'autres approches de la
   souffrance au travail se séparent de celle-ci.
3. Matière : `definition_de_lauteur` (« La tâche est ce qui est à faire, l'activité ce qui se
   fait, a-t-on pris l'habitude de dire » ; « Le réel de l'activité est précisément ce que cette
   dernière formule laisse tomber »), et la glose de Simonet, Caroly & Clot 2011 (« Elle ne
   limite donc pas les possibilités du professionnel observé à ce qu'on lui voit faire »).
4. Ne doit surtout pas dire en quoi la psychodynamique du travail diffère, ni nommer Dejours
   comme si sa position avait été lue, ni se terminer en liste de précautions.

**`limits` — à refaire entièrement**, comme frontière interne et non comme prose de lecteur :
nommer *La fonction psychologique du travail* et *Travail et pouvoir d'agir* et leur état d'accès
(non ouverts, non en accès ouvert, absents de HAL et d'Internet Archive) avec l'interdiction qui
en découle ; nommer Clot 2003c et dire que ni la présence ni l'absence de la formule n'y est
établie, au lieu d'affirmer que « la réponse y est écrite » ; nommer Cairn, le HTTP 403, *Le
Travail Humain* et *Travailler*, et la psychodynamique du travail de Dejours comme la frontière
non documentable ; nommer l'absence de relevé de réception. `limits` ne s'affiche pas : les
titres et les codes d'erreur y sont non seulement permis, ils y sont requis.

---

raison du verdict : REVISE, et non PASS, parce qu'au moins cinq sur-attributions non marquées
sont visibles à l'œil nu (S3.P2 deux fois, S5.P1, S5.P2, et la clôture en « quatre éléments » de
S2.P1), parce qu'une section entière, S4, n'a pour rôle principal que de redire au lecteur ce que
la carte lui affiche déjà, et parce que 26 % du texte lecteur ne produit aucun delta propre.
REVISE, et non REWRITE, parce que la trajectoire de fond est bonne et se garde presque telle
quelle : le lead est excellent, S1, S2 et S5 tiennent leur rôle, et le travail à faire est un
échange de matière, pas une refonte de plan. La section à retirer est identifiée, les paragraphes
à tempérer sont localisés, et les deux sections à ajouter ont leur matière déjà lue en texte
intégral, citée mot pour mot dans le dossier. REVISE, et non BLOCKED_SOURCE, parce que la
pauvreté constatée n'est pas documentaire : cinq sources `full-text`, dont deux jamais employées,
un mécanisme et un enjeu de santé cités verbatim dans le dossier et absents du texte. Le défaut
central de cet approfondissement est d'avoir raconté la provenance d'une idée à la place de
l'idée.
