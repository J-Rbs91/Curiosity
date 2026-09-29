# conscience-de-la-situation — correction après FACTCHECK_FAIL

Boucle 1 sur 2. Mode : FACTCHECK_FIX, correction minimale.

Gate d'entrée : `FACTCHECK_FAIL`, 85 claims, 79 soutenus, 6 refus sémantiques, 0 erreur de
structure, `mapping_incomplete` vide. SHA contrôlé par le gate :
`8824c35fe002c1465156153849bf3bcd40cb8dcf2f2045c0be121cbb9f6b3e6e`.

Aucune source sollicitée. Aucune affirmation nouvelle. Les six gestes sont des retraits ou des
bornages ; deux titres de section portaient le même excédent et sont traités au même titre.

Matière relue : `corpus/deepenings/PROTOCOLE.md`, `AUDIT_PROTOCOL.md`, `FACTCHECK_PROTOCOL.md`,
`corpus/validated/conscience-de-la-situation.json` (champ `dossier` :
`corpus/evidence/conscience-de-la-situation/lecture.json`, donc répertoire conventionnel, aucune
divergence §3ter), `corpus/evidence/conscience-de-la-situation/lecture.json` (seul fichier du
répertoire, `scouting.json` absent), `factcheck-pack.json` pour le texte exact des appuis cités,
`claim-map.json` pour les ancrages, `verification.json` et `factcheck-gate.json`, `audit.md`,
`rewrite.md`.

## Les six claims

### C001 — `UNSUPPORTED` — lead[0]

Avant : « Quand une manœuvre tourne mal, la première question posée est presque toujours la
même : pourquoi cette décision plutôt qu'une autre ? »

Le refus porte sur l'habitude d'enquête et sur sa fréquence, qu'aucun appui ne porte.

Geste : **retrait**. La proposition devient une question, qui n'affirme plus ni habitude ni
fréquence : « Quand une manœuvre tourne mal, pourquoi cette décision plutôt qu'une autre ? »
Rien n'est mis à la place. Moins 8 mots.

### C002 — `TOO_STRONG` — lead[0]

Avant : « La réponse déçoit souvent, parce que la décision était cohérente avec ce que la
personne croyait de sa situation à ce moment-là. »

Deux excès distincts, relevés tous deux par le vérificateur : la régularité générale
(« déçoit souvent ») et l'extension du cas des pilotes à « la personne ».

Geste : **retrait de la régularité, bornage du sujet**. Après : « Chez un pilote, la décision
peut avoir été cohérente avec ce qu'il croyait de sa situation à ce moment-là. » Ce qui reste est
exactement ce que les appuis autorisent : le rapport écrit que la conscience de la situation
englobe le modèle mental du pilote « upon which all of his/her decisions rely », et que les
pilotes les mieux formés et les plus expérimentés *peuvent* décider mal si ce modèle est
incomplet ou inexact. Le « peut avoir été » remplace un présent d'habitude par le possible que
les appuis portent. Moins 3 mots.

Conséquence d'accord, et rien de plus : la phrase suivante, qui reprenait « la personne » par
« elle », dit désormais « il ». L'affirmation ne bouge pas, elle suit le sujet borné.

### C004 — `TOO_STRONG` — lead[0]

Avant : « Chacun connaît cela au volant : on s'absorbe dans un problème, et pendant ce temps
quelque chose d'autre change sans qu'on le remarque. »

Le refus est net : aucun appui fourni ne porte sur ce que vit un conducteur ordinaire. Les
appuis portent un cas d'aviation et l'existence d'une thèse francophone sur les conducteurs.

Geste : **retrait de la phrase entière**. Il n'y a pas de version bornée à écrire : la matière
qui aurait fondé une expérience de conducteur n'existe pas dans le dossier, et l'affaiblir en
« il arrive que » serait encore affirmer une généralité qu'aucun appui ne porte. Le mécanisme
décrit reste dans le texte là où il est établi, à sa place et sur son cas : le DC-8 de Portland,
troisième section, où le commandant absorbé par la panne ne reconnaît pas la situation de
carburant bas. Moins 24 mots.

Le lead perd sa quatrième phrase et garde sa fonction : une situation observable (une manœuvre
qui tourne mal, un paramètre qu'on ne regarde plus), aucun terme savant, puis le passage à
Endsley au deuxième paragraphe. Lead à 132 mots, dans la fourchette 120-200 de §5.

### C027 — `TOO_STRONG` — sections[1].paragraphs[1]

Avant : « … mais aussi la météo, les clairances du contrôle aérien et ce que fait l'équipage. »

L'énumération du rapport est « airspeed, position, altitude, route, direction of flight, etc., as
well as weather, air traffic control (ATC) clearances, emergency information, and other pertinent
elements ». L'activité de l'équipage n'y figure pas.

Geste : **retrait de l'élément surnuméraire**. Après : « … mais aussi la météo et les clairances
du contrôle aérien. » Le dossier porte bien « emergency information », mais l'ajouter serait une
affirmation nouvelle dans ce paragraphe, et la consigne l'interdit : je retire sans substituer.
Moins 5 mots.

### C056 — `TOO_STRONG` — sections[3].paragraphs[0]

Avant : « … pour lire la définition dans les termes où elle a d'abord été posée, c'est cette
communication de 1988 qu'il faudra ouvrir. »

Le refus porte sur deux choses à la fois : l'antériorité (« d'abord posée ») et la certitude que
1988 en est le lieu. Le dossier dit l'inverse d'une certitude : en 1994 la phrase est rapportée à
deux textes, de 1987 et de 1988, donc au rapport Northrop NOR DOC 87-83 autant qu'à la
communication ; et la revue de la carte refuse expressément de conclure sur le verbatim de la
définition dans son texte d'origine, ces textes n'ayant pas été ouverts.

Geste : **retrait de l'antériorité, réattribution aux deux textes que le dossier nomme**. Après :
« Elle se cite donc elle-même depuis 1994 au moins ; dans quels termes ces textes de 1987 et de
1988 posent la définition, il faudra les ouvrir pour le voir. » La phrase ne dit plus lequel est
premier, ni que la définition y soit dans tels termes : elle nomme ce que les citations visent et
laisse au lecteur le geste d'aller voir, forme que §1 demande. Moins 2 mots.

### C079 — `UNSUPPORTED` — sections[5].paragraphs[1]

Avant : « Le texte pose lui-même deux mises en garde. »

Le dossier compte cinq mises en garde méthodologiques à la page imprimée 4 ; le texte lecteur en
reprend la deuxième et la troisième. Le décompte « deux » était présenté comme celui du rapport.

Geste : **bornage du décompte**. Après : « Le texte pose lui-même plusieurs mises en garde
méthodologiques. » Et les deux appels qui suivaient un ordre qui n'est pas celui du rapport
deviennent non ordinaux : « La première : » devient « L'une : », « La seconde : » devient « Une
autre : ». Le paragraphe suivant, « Ces deux réserves changent ce qu'on peut attendre du
modèle », reste juste : il renvoie aux deux réserves que le texte vient d'exposer, non à un
décompte du rapport. Plus 2 mots.

## Les titres, où l'excédent retiré pouvait se réfugier

Point de vigilance du dispositif : un titre est du texte lecteur, aucun claim ne le couvre, le
gate ne peut pas le voir. Les six titres ont donc été relus contre les excès retirés ci-dessus :
fréquence, universalité, extension au lecteur ordinaire, antériorité, décompte.

- « Une phrase citée partout, jamais à sa source » portait **les deux** excédents retirés :
  « citée partout » est l'universalité de fréquence refusée en C001 et C002, et « jamais à sa
  source » est exactement l'antériorité refusée en C056. Retirer la phrase du corps en laissant
  ce titre aurait remis l'affirmation là où le gate ne la voit pas. Devient « Une définition
  citée, et un mot plus ancien », qui nomme les deux paragraphes de la section et ne dit que ce
  que les appuis portent : le rapport de 1998 cite la définition au lieu de l'énoncer, et le terme
  est plus ancien que la définition (Bailly : médecine aéronautique, puis la 57th Fighter Weapons
  Wing en 1986). 43 caractères.
- « Ce que le rapport de 1998 cherchait vraiment » : « vraiment » affirme en passant que l'objet
  réel du rapport démentirait une idée reçue, ce qu'aucun appui ne porte. Retrait du seul mot.
  Le titre reste soutenu par l'énoncé d'objectif de la page imprimée 3. 35 caractères.
- Les quatre autres sont soutenus et inchangés. « Rien ne devient jamais sans importance » est
  une universelle, mais c'est celle du rapport lui-même, verbatim dans le dossier : aucun élément
  ne devient jamais sans importance, il devient secondaire.

Aucune compensation n'a été ajoutée ailleurs. Aucun paragraphe n'a été rouvert en dehors des six
ancrages et des deux titres.

## Frontière interne

`limits` gagne la frontière que le refus de C056 met au jour, et qui manquait : la première
entrée affirmait que la communication de 1988 « porte la définition en trois niveaux à sa
source », c'est-à-dire l'antériorité que le dossier n'établit pas. Elle dit maintenant l'état
d'accès (connue par sa seule notice) puis l'affirmation interdite, dont celle-là : rien n'établit
qu'elle ait posé la définition la première, le rapport de 1994 la rapportant à deux textes, de
1987 et de 1988. Le champ reste interne, il ne figure pas dans le texte lecteur, et aucune de ses
quatre entrées n'a été remontée en bloc visible. 199 mots, dans la fourchette 100-200 de §5.

## Volume

Les six corrections sont cinq retraits ou bornages et un ajout de deux mots ; le solde va donc
dans le sens demandé.

| | avant | après |
|---|---|---|
| `lead` + `sections` (mots lecteur) | 1 695 | 1 656 |
| total compté par le script | 1 959 | 1 927 |
| `limits` | 190 | 199 |

Moins 39 mots lecteur. Le texte se rapproche de la cible haute de 1 700 de §5 au lieu de s'en
éloigner, et reste loin sous le plafond de 1 900.

## Contrôles

1. Delta de chaque paragraphe touché : inchangé. Aucun paragraphe n'a perdu sa raison d'être, et
   la suppression de la quatrième phrase du lead retire une illustration qui doublait, en
   généralité non soutenue, le cas de Portland exposé plus loin sur pièce. Le delta du lead y
   gagne plutôt qu'il n'y perd : il n'annonce plus deux fois le même mécanisme.
2. Aucun paragraphe sans delta n'apparaît ; aucune section ne reprend principalement une section
   précédente.
3. Le texte reste en deçà des frontières documentaires : aucune phrase sur le contenu des textes
   de 1988 et de 1995, tous deux connus par leur seule notice, et les objections restent
   attribuées comme rapportées.
4. `limits` n'est pas remonté au lecteur ; aucun titre du genre « Ce que les sources ne
   permettent pas d'établir » n'apparaît.
5. Aucun tiret cadratin. Guillemets français et espaces fines conservés dans tous les segments
   réécrits.
6. `npm run corpus:deepen -- --check --only=conscience-de-la-situation` : **PASS**
   (« 1 approfondissement(s) contrôlé(s), 1927 mots. Rien projeté. »)

## Conséquence pour l'orchestrateur

Le texte a changé, donc le SHA aussi : l'ancien fact-check est invalidé de droit
(`FACTCHECK_PROTOCOL.md` §6). La reprise se fait à `PREPARE`, avec un pack neuf.

- SHA avant : `8824c35fe002c1465156153849bf3bcd40cb8dcf2f2045c0be121cbb9f6b3e6e`
- SHA après : `9b635f706151c3e7042a210a18d87b90a99874bd65dba836846065ce7c06e7ca`

Aucun verdict n'est rendu ici. Ni `ACCEPT`, ni `FACTCHECK_PASS`.
