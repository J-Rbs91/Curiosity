concept : activite-empechee
verdict : REVISE

protocole d'audit : version 4
texte audité : `corpus/deepenings/activite-empechee.json`, SHA-256
`0a016d07708794cb1124fa91210207476febac0cb965dfe72d59d5b5e3c4ee4a` (identique au
`candidate_sha256` du pack : c'est le texte d'origine, restauré après le refus du 2026-09-30).
texte lecteur : 1 135 mots (lead 201, sections 934).

dossier lu : l'enregistrement validé ne porte pas de champ `dossier` (le pack le confirme :
`dossier_declare.statut = non-declare`). Le répertoire conventionnel
`corpus/evidence/activite-empechee/` ne contient qu'un fichier, `lecture.json`, lu en entier. Les
trois déclarations `full-text` de la fiche sont `corrobore` par ce dossier. Les `notes`, le bloc
`review` et les `reserves` du dossier concordent ; aucune contradiction entre couches à signaler.
Aucune prescription ci-dessous ne repose sur un argument d'absence : la seule réserve d'absence du
dossier (la formule en « c'est aussi », SUP-08c2d43fe6f4b8c5, SUP-5690f943879007ce) est bornée
aux textes ouverts, et l'audit la reprend telle quelle.

Matière de contrôle supplémentaire : le passage du 2026-09-30 a laissé `claim-map.json` et
`verification.json` d'un tour 3 (SHA `4cd3f278…`, 65 claims, 64 `SUPPORTED`). Ce n'est pas un
fact-check du texte présent, et rien n'en est reporté comme acquis ; mais ces verdicts disent
quelles formulations, sur quels supports, un vérificateur indépendant a déjà jugées autorisées.
Ils sont cités plus bas comme **précédents** (« tour 3, Cxxx »), jamais comme passes.

---

TRAJECTOIRE ACTUELLE

- lead[0] : le lecteur découvre, sur sa propre journée, que le compte rendu de ce qu'on a fait
  laisse tomber toute une classe de choses vécues (message abandonné, méthode écartée, projet
  balayé par une réunion, geste fait à contrecœur). Delta net, et la meilleure entrée du texte.
- lead[1] : il apprend que cette différence a un auteur, une date et une image : le réel de
  l'activité est un volume dont le réalisé n'est que la surface. Delta net. Fragilité de
  formulation : « donne un nom à ce reste » fait du « reste » le référent du nom, quand la
  citation nomme le volume entier (voir défauts majeurs, point 1). Le tour 3 a jugé la phrase
  `SUPPORTED` (C005) ; c'est donc un défaut de cohérence pédagogique plus qu'un risque de gate.
- S1.P1 : il reçoit les deux termes, activité réalisée et réel de l'activité, puis l'emboîtement
  surface/volume. Delta réel mais **contradictoire** : la phrase « Le reste, tout ce qui a été
  mobilisé sans laisser de trace équivalente, il l'appelle le réel de l'activité » pose le réel
  comme ce qui reste hors du réalisé, et la phrase suivante pose le réalisé comme contenu dans le
  réel. Le lecteur repart avec deux définitions incompatibles du terme central. C'est le claim
  C011, `CONFLICT` au tour 3, phrase d'origine. La clause finale (« on peut voir la surface entière
  sans jamais soupçonner ce qu'il y a en dessous ») reparaphrase lead[1].
- S1.P2 : REDONDANT AVEC lead[0]. La vignette de la machine en panne réénumère, à la troisième
  personne, la liste du lead (essais infructueux, hésitation, méthode trouvée par hasard). Elle ne
  montre aucun mécanisme nouveau et ne sert même pas à corriger la confusion de S1.P1 : sa phrase
  « La réparation réussie est l'activité réalisée. Tout le reste […] appartient au réel » reconduit
  la lecture « réel = reste ».
- S2.P1 : delta franc : le volume a un contenu, énuméré par l'auteur vingt ans plus tard (non
  fait, impossible, tenté sans succès, voulu ou possible manqué). Mais « Quatre éléments, donc »
  **clôt une énumération que la source laisse ouverte** : la citation est coupée par « … », et la
  phrase se poursuit (ce qu'on rêve de faire ailleurs, ce qu'on fait pour ne pas faire, ce qu'on
  fait sans vouloir le faire, ce qui est à refaire). La réserve du dossier dit en toutes lettres
  que « la suite de sa phrase n'est pas facultative » (SUP-08c2d43fe6f4b8c5,
  SUP-5690f943879007ce). Le texte enseigne un compte faux.
- S2.P2 : delta net : l'échec dans le réel de l'activité n'est pas l'indice d'une incompétence ;
  c'est une part ordinaire du travail bien mené. Nuance utile, qui désamorce un contresens
  probable. Le tour 3 a jugé `SUPPORTED` des formulations quasi identiques (C038, C039, C040), sans
  le « presque nécessaire », qui n'a jamais été soumis.
- S3.P1 : delta lexical : « activité empêchée » au singulier est un libellé de réception ;
  l'auteur écrit un pluriel adjectivé (« activités suspendues, contrariées ou empêchées, voire les
  contre-activités »). Delta réel. Fragilités : « On résume souvent » affirme une fréquence de
  réception que le dossier dit n'avoir pas pu relever (SUP-d111dea4d5b00b68) ; la section introduit
  elle-même l'étiquette pour la corriger.
- S3.P2 : AUCUN DELTA SOURCÉ. Les définitions de « suspendue » (arrêtée en cours de route) et de
  « contrariée » (a composé avec un obstacle) sont du rédacteur, et sont données comme « ce que
  l'auteur cherche à distinguer ». Les supports **désignent** les trois adjectifs (SUP-2812cb300ba840d4,
  SUP-94d565db4258c7c6) ; aucun ne les **explique**. La dernière proposition (« une bonne partie
  de ce que le travail apprend à quelqu'un se joue précisément dans cette diversité ») n'a aucun
  appui. Delta d'apparence.
- S4.P1 : delta de provenance (l'auteur renvoie à un texte antérieur de lui-même et rapporte
  l'intuition à Vygotski). REDONDANT AVEC l'`attributionNote` que la carte affiche au lecteur avant
  qu'il ouvre l'approfondissement (« il n'y présente pas la formule comme neuve […] et rapporte
  ailleurs à Vygotski l'idée qui la soutient »). Le seul apport propre, la phrase « Le réel déborde
  le réalisé », est cité comme une curiosité de généalogie alors qu'il ouvre un mécanisme que le
  texte n'exploite pas (voir matière sous-exploitée). « Un auteur qu'il cite en une phrase » est
  inexact dans son effet : ce qui est cité en une phrase est le constat de Clot, pas Vygotski.
- S4.P2 : REDONDANT AVEC S4.P1 (même rôle généalogique) et avec l'`attributionNote` (« L'élaboration
  est celle de l'équipe »). Aucun delta conceptuel. Sur-attribution : « une formulation devenue,
  y lit-on, conceptuellement stabilisée pour toute une équipe de recherche, non pour lui seul »
  met dans la bouche du texte de 2018 une extension (« toute une équipe ») qui est la glose du
  lecteur primaire (SUP-646a0cf1ccea31e7 : « Le “nous” y est celui des deux signataires et, au-delà,
  de l'équipe ») ; la note 2 dit « pour nous ».
- S5.P1 : delta de conséquence : s'en tenir au réalisé, c'est analyser sur une base tronquée ;
  l'expérimentation en clinique de l'activité « vise à donner du volume à cette activité
  réalisée ». Delta réel. Fragilités : « Le texte de 2004 le dit » rattache à 2004 le cadrage
  « juger un travail, ou chercher à l'améliorer », que 2004 ne porte pas ; le sujet de la citation
  est « l'expérimentation en clinique de l'activité », non la méthode en général
  (SUP-94d565db4258c7c6, SUP-220f157f8f801cf4) ; la dernière phrase (« en disent souvent plus
  long […] que le résultat ») est une évaluation comparative et fréquentielle sans appui.
- S5.P2 : delta net : deux personnes au même résultat peuvent avoir traversé des travails très
  différents, et une observation qui ne regarde que le résultat les confond. Test opératoire
  utile. Sur-attribution finale : « C'est précisément cet écart que le texte de 2018 demande de
  prendre en compte […] au même titre que ce qui a effectivement abouti » fait dire à 2018 une
  comparaison entre personnes et une égalité de traitement (« au même titre ») qu'il ne formule
  pas. Le support qui porte exactement ce point existe et n'est pas utilisé (Simonet, Caroly &
  Clot 2011, SUP-89739a4b2497d763 ; tour 3, C063-C064).

Séquences redondantes : {lead[1], fin de S1.P1}, {lead[0], S1.P2}, {S4.P1, S4.P2}, et S4 entière
contre l'`attributionNote` affichée. Aucune séquence de trois deltas identiques consécutifs.
Paragraphes sans delta sourcé propre : S1.P2 (106 mots), S3.P2 (86), S4.P2 (81), et S4.P1 aux
trois quarts : environ 350 mots, soit **près d'un tiers du texte lecteur**.

---

RÔLE DES SECTIONS

- S1 « La surface et le volume » : poser les deux termes et leur emboîtement. Rôle juste, mais
  la section enseigne aussi l'inverse de l'emboîtement (C011) et dépense un paragraphe à redire
  le lead.
- S2 « Ce que ce volume contient » : remplir le volume et écarter la lecture « échec =
  incompétence ». Section la plus utile ; son compte fermé (« Quatre éléments ») est faux.
- S3 « Un mot plus rigide que celui de l'auteur » : corriger l'étiquette de réception. Rôle réel
  en un paragraphe ; le second invente la distinction qu'il prête à l'auteur.
- S4 « Une idée qui n'est pas présentée comme neuve » : généalogie et collectif. Rôle quasi nul
  pour la compréhension du concept, déjà tenu par la carte. C'est la place la plus chère du texte,
  et elle passe à côté du seul mécanisme que le dossier fournit (Vygotski, la collision des
  activités possibles).
- S5 « Ce que cela change d'ouvrir ce volume » : enjeu et conséquence pour l'observation. Bonne
  place, bonne intuition (S5.P2), mais l'enjeu est réduit à la justesse d'analyse quand le dossier
  le place dans la santé de celui qui travaille, et les deux paragraphes sur-attribuent.

---

SCORES

- fidélité documentaire : 1/4 — S1.P1 porte un contresens sur la définition même du terme
  central (C011, `CONFLICT`, phrase d'origine) ; S2.P1 « Quatre éléments, donc » contredit une
  réserve explicite (SUP-08c2d43fe6f4b8c5) ; S3.P2 prête à l'auteur des définitions qu'il ne
  donne pas ; S4.P2 « y lit-on […] pour toute une équipe », S5.P1 « Le texte de 2004 le dit »,
  S5.P2 « le texte de 2018 demande […] au même titre » sur-attribuent ; S3.P1 « souvent » et
  S5.P1 « souvent plus long » affirment des fréquences sans relevé. Pas de source
  `metadata-only` utilisée comme contenu ; la frontière interne (`limits`) n'est pas exposée.
- progressivité pédagogique : 2/4 — l'ordre lead → termes (S1) → contenu (S2) → vocabulaire (S3)
  → conséquence (S5) est sain, mais S4 est un détour généalogique entre le vocabulaire et l'enjeu,
  et S1.P2 fait stagner le texte au niveau du lead.
- densité / non-redondance : 2/4 — environ un tiers du texte lecteur sans delta sourcé propre
  (S1.P2, S3.P2, S4.P2, l'essentiel de S4.P1), et S4 répète l'`attributionNote` affichée.
- clarté : 2/4 — la prose est simple et lisible d'un bout à l'autre, mais S1.P1 donne deux
  définitions incompatibles du réel de l'activité à l'endroit même où le lecteur doit
  l'apprendre ; lead[1] (« un nom à ce reste ») et S1.P2 (« La réparation réussie est l'activité
  réalisée. Tout le reste […] appartient au réel ») entretiennent la mauvaise.
- profondeur explicative : 2/4 — après lecture, le lecteur sait que le réel déborde le réalisé et
  ce que ce débord contient, mais rien ne lui dit **pourquoi** ce qui n'a pas été fait pèse encore
  sur celui qui travaille ; le mécanisme disponible (S4.P1 l'effleure par « Le réel déborde le
  réalisé ») n'est pas déplié, et l'enjeu de santé est absent.
- valeur des exemples : 2/4 — lead[0] est excellent (il fait voir la distinction sur sa propre
  journée) ; S5.P2 (deux personnes, même résultat) donne un test opératoire ; S1.P2 redit lead[0]
  sans rien résoudre.
- limites / nuances : 3/4 — S2.P2 (l'échec n'est pas l'incompétence) et S3.P1 (le singulier est un
  libellé de réception) arrivent au bon moment et évitent de vrais contresens ; S3.P2 abîme la
  seconde en l'inventant, et la nuance la plus utile de toutes (le réalisé fait partie du réel,
  on ne peut pas trier) manque, alors qu'elle est financée.
- pouvoir d'ouverture : 2/4 — le texte se ferme en S5.P2 sur une reprise de la note de 2018 déjà
  citée en S3.P1 ; ni tension, ni question, ni direction de lecture.

---

défauts majeurs :

1. **Contresens sur le terme central, phrase d'origine (S1.P1, C011).** Le réel de l'activité
   n'est pas « le reste » : c'est le volume entier, dont le réalisé est la surface. Les appuis le
   disent sans ambiguïté : `quotation.text` (SUP-c98d6b242ef735ab), « l'activité réalisée […] n'a
   pas le monopole du réel de l'activité vécue », « le réel de l'activité est **aussi** ce qui ne
   se fait pas », « Entre le réel et le réalisé de leur activité, celles et ceux qui travaillent ne
   peuvent pas trier » (tous dans SUP-94d565db4258c7c6). Le même germe est dans lead[1] (« donne un
   nom à ce reste ») et dans la chute de S1.P2. Corriger S1.P1 seul laisserait le lead et S1.P2
   suggérer la lecture que S1.P1 aurait cessé de dire.
2. **Compte fermé sur une énumération ouverte (S2.P1).** « Quatre éléments, donc » contredit
   SUP-08c2d43fe6f4b8c5 et SUP-5690f943879007ce, et cache précisément la partie la plus
   surprenante de la liste : le volume contient aussi des actions **accomplies** (« ce qu'on fait
   pour ne pas faire ce qui est à faire », « ce qu'on fait sans vouloir le faire », « ce qui est à
   refaire »).
3. **Distinction inventée et attribuée (S3.P2).** Les sources désignent les adjectifs, elles ne
   les définissent pas. Désignation n'est pas explication.
4. **Section redondante avec la carte (S4).** Ce que le lecteur vient de lire dans
   l'`attributionNote` lui est redit en 185 mots, avec une sur-attribution en S4.P2.
5. **Sur-attributions en S5** (2004 « le dit » ; 2018 « demande […] au même titre ») et fréquence
   non appuyée (« souvent plus long »).

matière disponible mais sous-exploitée :

- **La suite de l'énumération de 2024**, et ce qu'elle change : le volume ne contient pas que de
  l'inaccompli, il contient aussi des actions faites et visibles dont le sens tient à ce qu'elles
  évitent ou à ce qu'elles coûtent. SUP-94d565db4258c7c6 (verbatim complet), SUP-ef71b0d2b7494085
  (verbatim du début, contrôlé par la revue), SUP-08c2d43fe6f4b8c5 et SUP-5690f943879007ce (la suite
  « n'est pas facultative »). Précédents tour 3 : C023, C026, C027, C029 `SUPPORTED`.
- **La règle d'analyse de 2024, sous la seule signature de Clot** : « Les activités suspendues,
  contrariées ou empêchées et, pour tout dire, ravalées, doivent donc être admises dans
  l'analyse. » SUP-94d565db4258c7c6, SUP-1ec99fe961831e90 (« le seul énoncé de sa main sur les
  activités empêchées »). Elle permet d'ancrer S3 et S5 sur un texte non cosigné. Précédent : C030.
- **Le mécanisme vygotskien** : ce qui se réalise est l'activité « qui a vaincu au point de
  collision entre toutes les activités possibles » ; les autres « forment des résidus incontrôlés
  n'ayant que plus de force ». Le dossier en tire la conséquence : l'activité empêchée « n'est pas
  une activité absente », elle « continue d'agir », et l'empêchement « n'est pas seulement
  extérieur ». SUP-94d565db4258c7c6, SUP-646a0cf1ccea31e7 ; la filiation est confirmée par la revue
  (SUP-f8d3c87c1f9c523b) et par l'`attributionNote` (SUP-a2b965c80c470e1d). Ici le support
  **explique**, il ne fait pas que désigner : c'est la seule vraie matière de mécanisme du
  dossier. Précédents : C031 à C037.
- **L'enjeu de santé** : l'activité affranchit le sujet « à moins d'en être empêchée. C'est bien
  sûr souvent le cas et c'est la source même de la dégradation de la santé au travail » ; le
  « pouvoir d'agir […] se trouve fréquemment amputé ». SUP-94d565db4258c7c6. Précédents : C041 à
  C044. (Le « souvent » et le « fréquemment » sont ici de l'auteur, cités ; ils ne sont pas à
  reprendre en voix de narrateur.)
- **« Entre le réel et le réalisé de leur activité, celles et ceux qui travaillent ne peuvent pas
  trier. »** SUP-94d565db4258c7c6. C'est la phrase qui répare C011 par l'auteur lui-même.
  Précédents : C045, C046, C047.
- **L'usage opératoire chez l'équipe** : la clinique de l'activité « ne limite donc pas les
  possibilités du professionnel observé à ce qu'on lui voit faire ». SUP-89739a4b2497d763
  (Simonet, Caroly & Clot 2011, `full-text`). Il porte exactement la conclusion de S5.P2, que le
  texte attribue à tort à 2018. Précédents : C061 à C064.
- Disponible, financé, mais **non prescrit** ici faute de place (voir budget) : le partage
  tâche/activité que Clot rappelle avant de s'en écarter, et la mise en garde contre « activité
  réelle » (SUP-94d565db4258c7c6, SUP-220f157f8f801cf4 ; précédents C055 à C060) ; le contexte de
  la phrase de 2004, comédienne et facteur (SUP-94d565db4258c7c6, SUP-77622698d6fb65a2 ; précédents
  C014 à C020).

limites documentaires :

- Le texte de 2003 auquel Clot renvoie (« Le collectif dans l'individu ? ») n'a pas été ouvert
  (SUP-7e13bdcd1acebe5c, SUP-fec32274272c7775, SUP-a5ceced6e934d294) : rien sur ce qu'il contient.
- *La fonction psychologique du travail* et *Travail et pouvoir d'agir* n'ont pas été ouverts ;
  leurs millésimes viennent de bibliographies (SUP-fec32274272c7775). Au plus un renvoi de
  lecture, aucune phrase de contenu.
- Les définitions respectives de « suspendue », « contrariée », « empêchée », « contre-activité »
  ne sont dans aucun support : la section de vocabulaire ne peut que les nommer.
- La première occurrence du substantif « activité empêchée » chez Clot n'est pas établie
  (SUP-485dab252c277bc9, SUP-b240192fa21354b5).
- Aucune mesure de réception : ni fréquence de l'étiquette, ni ampleur de la confusion avec la
  psychodynamique du travail, dont la différence n'est pas documentée (SUP-d111dea4d5b00b68,
  SUP-938045cf22f3a05d, SUP-0021ed7d439ebe18). Le tour 1 du 2026-09-30 a pris un `CONFLICT` sur ce
  point ; il n'y a rien à écrire au lecteur sur cette frontière.
- Note sur `limits` (interne, non lecteur) : `limits[3]` affirme que la frontière avec les
  approches voisines « se joue dans les articles que l'auteur a publiés en revue ». Le dossier ne
  l'établit pas (SUP-d111dea4d5b00b68 : « je n'ai ouvert aucun texte de Dejours et ne peux donc pas
  documenter la différence ») ; c'est la présupposition exacte que le gate du tour 1 a refusée en
  texte lecteur (C063 de ce tour : « se lira dans les textes de part et d'autre »). À borner, pour
  qu'un réécrivain ne la recopie pas en `sections`.

---

BUDGET DE L'AJOUT

- ajouts prescrits et supports qui les financent :
  - S2 : la fin de l'énumération de 2024 et sa conséquence (le volume contient aussi des actions
    faites) — SUP-94d565db4258c7c6, SUP-08c2d43fe6f4b8c5, SUP-5690f943879007ce. Environ +50 mots,
    compensés par le retrait de « Quatre éléments […] manquée » (≈ 35 mots).
  - S1 : la phrase « Entre le réel et le réalisé […] ne peuvent pas trier » ou son équivalent
    paraphrasé, pour fixer l'inclusion — SUP-94d565db4258c7c6 ; l'inclusion elle-même par
    SUP-c98d6b242ef735ab. Environ +30 mots, compensés par le retrait de S1.P2.
  - nouvelle S3 (remplace S4) : le mécanisme de la collision des activités possibles et des
    résidus agissants — SUP-94d565db4258c7c6, SUP-646a0cf1ccea31e7, SUP-a2b965c80c470e1d,
    SUP-f8d3c87c1f9c523b. Environ 150 mots, à prendre sur les 185 de l'actuelle S4.
  - S5 : l'enjeu de santé — SUP-94d565db4258c7c6 ; l'usage opératoire chez l'équipe —
    SUP-89739a4b2497d763 ; la règle de 2024 « ravalées » — SUP-94d565db4258c7c6,
    SUP-1ec99fe961831e90. Environ +80 mots, compensés par le retrait des sur-attributions et de la
    dernière phrase de S5.P1.
- prescriptions écartées faute de support :
  - toute définition ou distinction entre « suspendue », « contrariée », « empêchée »,
    « contre-activité » (les supports désignent, n'expliquent pas) ;
  - toute affirmation sur le contenu du texte de 2003 ou des deux ouvrages ;
  - toute fréquence de réception de l'étiquette « activité empêchée » ;
  - toute caractérisation de la psychodynamique du travail ou de sa différence avec la clinique
    de l'activité ;
  - l'extension « toute une équipe de recherche » attribuée au texte de 2018.
- prescriptions écartées pour tenir le volume, alors que financées : la section tâche/activité et
  « activité réelle » (SUP-94d565db4258c7c6, SUP-220f157f8f801cf4), le contexte comédienne/facteur
  de 2004. Elles ne sont pas fautives ; elles ne tiennent pas dans un texte qui ne doit pas grossir.
- sens attendu du volume : **constant**, cible 1 050 à 1 200 mots de texte lecteur (aujourd'hui
  1 135), et en aucun cas au-delà de +9 %. Les ajouts financés (≈ 310 mots) se paient par des
  retraits de passages sans delta ou fautifs (≈ 350 mots : S1.P2, S3.P2, S4.P2, l'essentiel de
  S4.P1, la fin de S5.P1, « Quatre éléments […] »). Le réécrivain gagne en substituant, pas en
  empilant. Le passage précédent avait monté à six sections et dix-sept paragraphes : c'est
  l'architecture à ne pas reprendre, même si ses phrases ont presque toutes passé.

---

TRAJECTOIRE CIBLE

Cinq sections, de dix à onze paragraphes au total.

- lead (garder, retouche minime)
  1. en entrant : rien.
  2. nouveau : sur sa propre journée, le lecteur voit ce que le compte rendu laisse tomber ; un
     auteur nomme le tout et en donne l'image surface/volume.
  3. matière : lead[0] tel quel (tour 3, C001-C004) ; lead[1] avec la citation (SUP-c98d6b242ef735ab).
  4. ne pas : faire du « reste » le référent du nom de l'auteur. La retouche porte sur la seule
     attache « donne un nom à ce reste » : le nom va au volume entier, pas à ce qui manque à la
     liste. Si la retouche risque davantage qu'elle ne répare, la laisser (C005 a passé) et faire
     porter toute la correction par S1.

- S1 « La surface et le volume » (un paragraphe, deux au plus)
  1. en entrant : il a l'image et les deux mots.
  2. nouveau : le réalisé n'est pas à côté du réel, il en fait partie, comme sa face exposée ;
     l'auteur le dit lui-même : celles et ceux qui travaillent ne peuvent pas trier entre le réel
     et le réalisé.
  3. matière : SUP-c98d6b242ef735ab, SUP-94d565db4258c7c6 (« n'a pas le monopole », « ne peuvent pas
     trier ») ; précédents C010, C012, C013, C046.
  4. ne pas : écrire la phrase C011 ou toute variante qui identifie le réel de l'activité au
     « reste » ; ne pas reprendre la vignette de la machine, qui redit lead[0] (si une vignette est
     gardée, elle ne doit servir qu'à montrer que la réparation réussie appartient elle aussi au
     volume, en une ou deux phrases, et commencer par « Imaginons »).

- S2 « Ce que ce volume contient » (deux paragraphes)
  1. en entrant : il sait que le réel déborde le réalisé, sans savoir de quoi.
  2. nouveau : l'énumération de 2024 en entier, y compris ses derniers membres, et ce qu'ils
     révèlent : le volume contient aussi des actions faites (ce qu'on fait pour ne pas faire, sans
     vouloir le faire, à refaire) ; puis la nuance : ce n'est pas un inventaire d'incompétences.
  3. matière : SUP-94d565db4258c7c6, SUP-ef71b0d2b7494085, SUP-08c2d43fe6f4b8c5,
     SUP-5690f943879007ce ; S2.P2 actuel sans « presque nécessaire » (précédents C038-C040).
  4. ne pas : compter les membres (« quatre éléments ») ; ne pas citer la formule en « c'est
     aussi » ; ne pas redire que 2004 n'énumère pas (l'`attributionNote` l'affiche déjà) au-delà
     d'une incise de date.

- S3 « Pourquoi ce qui n'a pas eu lieu pèse encore » (deux paragraphes ; remplace l'actuelle S4)
  1. en entrant : il sait ce que le volume contient.
  2. nouveau : un mécanisme. Ce qui se réalise est l'activité qui l'a emporté au point de
     collision entre les activités possibles ; les autres ne disparaissent pas, elles restent
     agissantes. L'empêchement n'est donc pas seulement extérieur. La filiation vygotskienne se dit
     ici, en une clause, parce qu'elle porte le mécanisme, et non comme généalogie.
  3. matière : SUP-94d565db4258c7c6, SUP-646a0cf1ccea31e7, SUP-a2b965c80c470e1d,
     SUP-f8d3c87c1f9c523b ; précédents C031-C037.
  4. ne pas : refaire la généalogie (texte de 2003, équipe, deux décennies), que l'`attributionNote`
     affiche ; ne pas exclure les circonstances (le tour 1 a refusé « ne porte pas sur les
     circonstances », C029 de ce tour) : le conflit interne s'**ajoute** à l'obstacle.

- S4 « Un mot plus rigide que celui de l'auteur » (un paragraphe ; actuelle S3 resserrée)
  1. en entrant : il connaît le concept et son mécanisme.
  2. nouveau : l'étiquette qui circule est un singulier figé ; l'auteur écrit un pluriel adjectivé,
     dans un texte de 2024 qu'il signe seul (« suspendues, contrariées ou empêchées et, pour tout
     dire, ravalées ») et dans une note de 2018 cosignée qui tient la formulation pour
     « conceptuellement stabilisée ».
  3. matière : SUP-94d565db4258c7c6, SUP-1ec99fe961831e90, SUP-2812cb300ba840d4, SUP-ef71b0d2b7494085,
     SUP-485dab252c277bc9, SUP-b240192fa21354b5 ; précédents C048-C052.
  4. ne pas : définir les adjectifs ni prétendre que l'auteur les distingue ; ne pas écrire
     « souvent » pour la circulation de l'étiquette ; ne pas étendre le « nous » de 2018 à « toute
     une équipe » en le donnant comme lu.

- S5 « Ce que cela change d'ouvrir ce volume » (deux paragraphes)
  1. en entrant : il sait ce qu'est le réel de l'activité, ce qu'il contient, pourquoi il agit,
     et comment l'auteur le nomme.
  2. nouveau : deux conséquences. Pour l'observation : deux personnes au même résultat n'ont pas
     forcément traversé le même travail, et l'équipe refuse de limiter les possibilités du
     professionnel à ce qu'on lui voit faire ; d'où la règle d'admettre les activités empêchées
     dans l'analyse, et le projet de « donner du volume » au réalisé. Pour celui qui travaille :
     l'enjeu est sa santé et son pouvoir d'agir, pas la qualité d'un résultat. Finir sur cette
     tension, qui est la vraie ouverture du concept.
  3. matière : SUP-89739a4b2497d763 (précédents C061-C064), SUP-94d565db4258c7c6 (« vise à donner du
     volume à cette activité réalisée », sujet « l'expérimentation en clinique de l'activité » ;
     santé et pouvoir d'agir, précédents C041-C044), SUP-220f157f8f801cf4.
  4. ne pas : attribuer à 2004 le cadrage « juger ou améliorer un travail » ; attribuer à 2018 la
     comparaison entre deux personnes ou un « au même titre » ; garder « en disent souvent plus
     long » ; nommer ou caractériser la psychodynamique du travail ; dire ce que contient
     *Travail et pouvoir d'agir* (si le titre est donné comme direction de lecture, c'est sans
     une phrase de contenu, SUP-7e13bdcd1acebe5c).

Note pour la suite de la chaîne : le mappeur doit isoler en claims distincts chaque phrase de
S1 qui énonce ce que « l'auteur appelle » ; C011 a vécu deux tours sans être ancrée.

---

raison du verdict : REVISE et non REWRITE, parce que l'architecture d'origine (entrée par la
journée du lecteur, termes, contenu, vocabulaire, conséquence) est saine et que ses meilleurs
passages (lead, S2.P2, S3.P1, S5.P2) tiennent ; le gain se trouve en corrigeant un contresens
localisé, en retirant environ un tiers de texte sans delta, et en substituant à la section
généalogique le seul mécanisme que le dossier explique vraiment, à volume constant. Pas `PASS` :
le texte publié porte un `CONFLICT` sur la définition du terme central (C011), un compte fermé
contredit par une réserve explicite, une distinction inventée et attribuée, et plusieurs
sur-attributions. Pas `BLOCKED_SOURCE` : le dossier finance toute la trajectoire cible, support par
support, et le tour 3 montre que ces formulations passent le vérificateur.
