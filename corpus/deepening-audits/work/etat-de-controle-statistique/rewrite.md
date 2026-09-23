# Réécriture : etat-de-controle-statistique

mode : REVISE (verdict de `corpus/deepening-audits/work/etat-de-controle-statistique/audit.md`)
check mécanique : `npm run corpus:deepen -- --check --only=etat-de-controle-statistique` → PASS,
aucune citation signalée comme absente des matériaux.

Volumétrie : 1 674 mots lecteur (avant : 1 413), `limits` 195 mots (avant : 200), 5 sections,
15 paragraphes lecteur (avant : 15). Aucun tiret cadratin, guillemets français avec espace fine
insécable, apostrophe typographique partout, aucun terme de dispositif interne.

## Matériaux lus

- `corpus/deepenings/PROTOCOLE.md`, `AUDIT_PROTOCOL.md`, `FACTCHECK_PROTOCOL.md` ;
- `corpus/deepenings/etat-de-controle-statistique.json` (version auditée) ;
- `corpus/validated/etat-de-controle-statistique.json`, `notes` et bloc `review` compris ;
- `corpus/evidence/etat-de-controle-statistique/` : répertoire listé, un seul fichier,
  `lecture.json`, lu intégralement (pas de `scouting.json`) ;
- `corpus/deepening-audits/work/etat-de-controle-statistique/audit.md`.

Niveaux d'accès respectés : livre de 1931 `full-text`, article de 1930 `partial` (première page
seule), réimpression ASQC de 1980 `metadata-only`, second livre de 1939 non ouvert.

## Ce qui a été fait, défaut par défaut

### 1. La définition passe devant la discussion du mot (défaut majeur de l'audit)

L'ancienne S1 (219 mots de lexique) et l'ancienne S2 (la définition) sont permutées. Le lecteur
sort du lead sur « un livre qui fait de cette différence une définition » et tombe désormais sur
la définition de la page 6, décomposée en ses trois pièces, avec le cas limite du procédé neuf.

La section lexicale devient S2 et tient en un seul paragraphe (141 mots contre 219). Elle garde
la preuve interne (page 252 du chapitre XVII, l'intertitre « Tolerances where 100 Per Cent
Inspection Cannot be Made ») et la remarque d'usage sur « carte de contrôle » et « limites de
contrôle », et abandonne l'argumentation de l'arbitrage, que le lecteur n'a pas à trancher.

### 2. « cause assignable » cesse d'être un saut

La définition de l'auteur, disponible mot pour mot dans `lecture.json` juste après la condition
(« If a cause system is not constant, we shall say that an assignable cause of Type I is
present. »), est introduite en S4, à sa place dans le texte de Shewhart. Quand la page 149
mobilise le terme en S5, il est acquis depuis une section entière.

### 3. Les trois durcissements documentaires

- « Le passé, écrit-il, ne prouve rien » est supprimé. Le texte cite maintenant la phrase
  entière, fin comprise : « …is sufficient to prove that the phenomenon is controlled by a given
  set of known laws », et la rend en français sans élargir la portée de la réserve. Le versant
  positif de l'aveu (« l'expérience a montré qu'un tel comportement paraît suffisant ») est
  rendu, ce qui remplace le durcissement par la nuance réelle de l'auteur.
- « Shewhart en tire la conséquence sur la même page » devient « La même page 6 en tire une
  formule » : plus aucune antériorité ni postériorité n'est affirmée entre le passage
  « a controlled quality must be a variable quality » et la définition, la note de revue situant
  ce passage plus haut sur la page.
- Les cinq avantages de la page 34 ne sont plus spécifiés. « sur les tolérances, sur les achats,
  sur l'inspection » disparaît ; le texte dit seulement qu'ils sont cinq et tous de gestion, ce
  que portent les matériaux.

### 4. Le mécanisme central manquant est rendu (profondeur explicative)

S4 donne désormais la chaîne du chapitre XI au lieu de sa seule conclusion : chapitre X, les lois
seulement empiriques ne permettent pas de prévoir les fluctuations erratiques sur la base de la
théorie des probabilités ; d'où « If product is controlled only in this empirical sense, it
follows that we cannot obtain the economic advantages discussed in Part I. » ; d'où, seulement
alors, la phrase que la carte cite. Les cinq avantages de gestion de S3 trouvent là leur emploi :
ce sont eux qu'un contrôle seulement empirique ne permet pas d'obtenir.

Ajouté aussi, en S3, l'exigence inverse du chapitre XI (« it is necessary and sufficient that he
know the laws which make prediction possible »), qui empêche de lire « les causes restent
inconnues » comme « on prévoit sans rien savoir » : connaître la loi n'est pas connaître les
causes.

### 5. Le pont entre S4 et S5, avec les mots de l'auteur

Le passage sur « appear » ouvre S5 : ce qui se constate est une apparence de compatibilité avec
l'hypothèse d'un système constant de causes de hasard, et l'apparence « is not sufficient in the
logical sense although it must be in the practical sense ». C'est ce passage, et non une formule
du rédacteur, qui retire l'état du registre de la preuve.

### 6. Le paragraphe sans delta et la sortie

L'ancien S5.P3 (l'image du label, delta absorbé par les deux paragraphes précédents) est
supprimé. Sa seule idée utile, la maîtrise comme surveillance et non comme certificat, est
ramenée à la dernière phrase du paragraphe des réserves datées.

Le texte se termine maintenant sur deux objets datés et non sur une synthèse : la communication
du 28 décembre 1929 devant l'A. A. A. S., publiée en avril 1930 au Bell System Technical Journal
(dont seuls la signature, la note de séance et le résumé de première page sont affirmés, et dont
les pages 364 à 389 « diront » ce qu'il en est), et le second livre de 1939, nommé sans qu'aucun
contenu ne lui soit prêté. Aucune phrase ne raconte une lecture qui aurait manqué.

## Delta de chaque paragraphe de la nouvelle version

lead[0] : l'intuition se trompe, l'atelier le plus régulier en apparence est le moins maîtrisé.
lead[1] : le critère est ce qu'on peut dire à l'avance ; l'auteur, l'institution, l'année.

S1.P1 : la définition de l'auteur et ses trois pièces, dont la modestie de « at least within
limits ».
S1.P2 : le critère porte sur ce qu'on peut dire de l'objet, et une qualité maîtrisée doit être
variable, avec le verbatim.
S1.P3 : « through the use of past experience » est une condition, d'où le cas limite du procédé
neuf, ni maîtrisé ni déréglé.

S2.P1 : le mot de l'auteur ne veut pas dire inspecter, preuve interne par le voisinage de la page
252 ; et le français offrira deux mots pour une idée.

S3.P1 : l'état est posé comme existant dans les choses, et la phrase est une croyance
raisonnable, pas un constat.
S3.P2 : prévoir n'exige pas d'expliquer, mais exige de connaître les lois ; connaître la loi
n'est pas connaître les causes.
S3.P3 : les cinq avantages sont de gestion, donc l'enjeu du livre est décisionnel, et cette
promesse va être mise à l'épreuve.

S4.P1 : les lois seulement empiriques ne donnent pas les avantages de la partie I (mécanisme
absent de la version précédente).
S4.P2 : d'où la formule qui nomme l'état, et le fait que « statistique » désigne un régime, pas
un degré de régularité de plus.
S4.P3 : la condition nécessaire et suffisante est posée comme hypothèse de travail ; la loi des
grands nombres y sert d'étalon et n'y est pas exposée.
S4.P4 : la cause assignable de type I est ce qui rompt la constance du système, et le nom se
comprend par là.

S5.P1 : ce qui se constate est une apparence, et l'auteur s'arrête lui-même sur le verbe.
S5.P2 : cette apparence n'est pas suffisante au sens logique mais doit l'être au sens pratique,
et le passé ne prouve jamais la maîtrise par un ensemble donné de lois connues.
S5.P3 : deux réserves datées rendent l'état révocable, et la maîtrise est une surveillance.
S5.P4 : l'idée a un avant (décembre 1929, avril 1930) et un après (1939), tous deux localisables.

Aucune séquence de deux paragraphes ne partage son delta ; aucune section ne répète
principalement une section antérieure ; la progression tient en une phrase par section :
définition, mot, objectivité, spécification statistique, révocabilité.

## Frontière interne

`limits` n'est pas remonté dans le texte lecteur : aucun bloc visible ne récapitule les
insuffisances documentaires. Les quatre paragraphes de `limits` nomment chacun la source, son
état d'accès et l'affirmation qu'il interdit (réception francophone absente et traduction
publiée à identifier ; article de 1930 limité à sa première page ; livre de 1939 nommé seulement ;
réimpression de 1980 connue par sa notice, folios de l'édition Van Nostrand, aucune pagination
déduite d'un calcul).

Réserve ajoutée par rapport à la version précédente, conformément aux limites de l'audit : la
remarque sur « contrôle » comme terme reçu de la discipline est explicitement bornée à une
remarque d'usage, et non à une histoire terminologique établie.

## Volume, et pourquoi il augmente

L'audit demandait « même volume total ou légèrement inférieur ». Le texte lecteur passe de
1 413 à 1 674 mots, soit dans la cible du protocole (1 300-1 700) mais au-dessus de la consigne.
La cause est assumée et vérifiable : la trajectoire cible imposait quatre apports nouveaux, tous
cités dans la langue de l'auteur puis rendus en français, à savoir la chaîne économique du
chapitre XI, la définition de la cause assignable de type I, le passage sur « appear » avec la
distinction sens logique / sens pratique, et l'exigence inverse sur les lois. Ces quatre ajouts
pèsent environ 330 mots. En regard, la section lexicale a perdu 78 mots, le paragraphe de clôture
rhétorique 60, et une dizaine de reformulations ont été resserrées. Descendre à 1 413 mots aurait
exigé de retirer une des matières que l'audit demandait d'exploiter.

## Non fait, et pourquoi

- Aucune recherche documentaire, aucun fait ajouté de mémoire, aucun support `SUP-...` inventé.
- Le titre de section « 3. Definition of Control » et l'intitulé « 2. Necessary and Sufficient
  Conditions for Statistical Control » ont été allégés en prose (« à la page 6 », « au début de
  la section suivante ») pour le volume ; la localisation par page reste entière.
- Rien n'est dit du contenu de l'article de 1930 au-delà de sa première page, ni du contenu du
  livre de 1939, ni du contenu de la réimpression de 1980.
- Aucune page nouvelle n'est citée : 6, 34, 146, 148, 149 et 252 figuraient déjà dans les
  matériaux.

Toute modification du texte invalide le SHA : le cycle doit repartir de `PREPARE`.

---

# Correction FACTCHECK_FAIL, boucle 1 sur 2

mode : FACTCHECK_FIX (gate déterministe `factcheck-gate.json`, 74 claims, 67 soutenus, 7 fermés)
check mécanique : `npm run corpus:deepen -- --check --only=etat-de-controle-statistique` → PASS.

Volumétrie après correction : 1 653 mots lecteur (avant : 1 674), `limits` 204 mots (avant : 195),
5 sections, 15 paragraphes lecteur. Aucune matière nouvelle n'a été introduite pour compenser un
retrait ; rien d'autre n'a été renforcé.

## Matériaux relus dans ce contexte

- `corpus/deepenings/PROTOCOLE.md`, `FACTCHECK_PROTOCOL.md`, et `audit.md` du même dossier de travail ;
- `corpus/deepenings/etat-de-controle-statistique.json` (version ayant échoué) ;
- `corpus/validated/etat-de-controle-statistique.json`, `notes` et bloc `review` compris ;
- `corpus/evidence/etat-de-controle-statistique/` : répertoire listé, un seul fichier, `lecture.json`,
  lu intégralement ;
- `factcheck-gate.json` (autorité du verdict), `verification.json` (motifs), `claim-map.json`
  (texte exact et ancrage des sept claims fermés).

## Les sept corrections, claim par claim

### C012, TOO_STRONG (S1.P2)

Motif : le support situe les deux phrases « plus haut sur la même page » ; « en tire » les
présentait comme dérivées de la définition qui les suit.

Avant : « La même page 6 en tire une formule si contre-intuitive que Shewhart l'écrit deux fois de
suite ».
Après : « Plus haut sur la même page 6 se lit une formule si contre-intuitive que Shewhart l'écrit
deux fois de suite ».

Réattribution de position, exactement conforme à la note de revue (« Et plus haut sur la même
page : … »). Plus aucune relation de conséquence n'est affirmée entre les deux passages. Le
verbatim et sa traduction sont inchangés.

### C018, UNSUPPORTED (S1.P3)

Motif : « un procédé neuf n'est ni maîtrisé ni déréglé » était posé comme un état de fait, et le
second membre (« ni déréglé ») n'est établi par rien.

Avant : « Un procédé neuf n'est donc ni maîtrisé ni déréglé : il n'a pas encore de passé, donc rien
à dire de son avenir. »
Après : « Devant un procédé tout neuf, la définition telle qu'elle est écrite reste donc muette :
elle demande une expérience passée, et il n'y en a pas encore. »

Bornage : la phrase ne prononce plus un état du procédé, elle constate ce que la définition citée
deux phrases plus haut permet ou non de dire. Le delta du paragraphe (l'expérience passée est une
condition, pas un ornement) est conservé.

### C034, UNSUPPORTED (S3.P2)

Motif : la conciliation des deux phrases était une lecture présentée sans marque.

Avant : « Connaître la loi n'est pas connaître les causes, et c'est ce qui rend les deux phrases
compatibles. »
Après : « L'une parle des causes de la variabilité, l'autre des lois : on peut comprendre ces deux
phrases comme portant sur des objets distincts. »

Le premier membre ne fait que relever les termes des deux citations qui précèdent immédiatement
dans le même paragraphe. Le second est marqué comme interprétation selon `PROTOCOLE.md` §4
(« on peut comprendre cela comme… »), et la compatibilité n'est plus affirmée comme un fait du
texte. Effet de bord corrigé dans la même phrase : la répétition de « les lois qui rendent la
prévision possible », déjà présente deux lignes plus haut en traduction, est supprimée.

### C041, TOO_STRONG (S4.P1)

Motif : l'identification des cinq avantages de la page 34 avec « the economic advantages discussed
in Part I » n'est portée par aucune preuve résolue.

Avant : « Maîtrisé en ce seul sens, un produit ne donne pas les avantages de la partie I, ceux-là
mêmes que la page 34 énumérait. »
Après : « Maîtrisé en ce seul sens, un produit ne donne pas les avantages économiques dont la
partie I a traité. »

Il ne reste que la traduction de la citation, qui était la part soutenue du claim. Le renvoi à la
page 34 disparaît. Contrôle fait sur les claims voisins déjà soutenus : S3.P3 (« c'est cette
promesse que le chapitre XI met à l'épreuve ») et S4.P2 (« les avantages annoncés redeviennent
atteignables ») n'identifient pas les deux ensembles et sont laissés intacts.

### C050, UNSUPPORTED (S4.P3)

Motif : ni l'absence d'exposé de la loi des grands nombres à cet endroit, ni son rôle d'étalon, ne
sont établis.

Avant : « La loi des grands nombres n'y est pas exposée, elle sert d'étalon : les causes doivent y
satisfaire comme le font celles d'un système constant de causes de hasard. »
Après : « Ce qu'elle demande est que les causes satisfassent à la loi des grands nombres comme le
font celles d'un système constant de causes de hasard. »

Retrait sec des deux affirmations fermées ; ne subsiste que la traduction de la fin de la condition
citée, qui était soutenue (C051). Le delta du paragraphe, le statut d'hypothèse de la condition,
est porté par les phrases précédentes et n'est pas touché.

### C054, UNSUPPORTED (S4.P4)

Motif : la glose du mot « assignable » n'est portée par aucune preuve résolue.

Avant : « … fait cesser la constance du système, et son nom dit ce qu'elle a de particulier : on
peut l'assigner, c'est-à-dire la désigner. »
Après : « … fait cesser la constance du système. »

Retrait. Ce que l'audit demandait à ce paragraphe (introduire « cause assignable » avant son emploi
en S5, avec la définition de l'auteur) est assuré par la citation et par la phrase conservée, qui
reste soutenue (C053).

### C074, SOURCE_NOT_CONSULTED (S5.P4)

Motif : les deux supports déclarent l'ouvrage de 1939 non ouvert ; le claim présupposait que la
définition de 1931 y devient autre chose.

Avant : « Huit ans après paraît Statistical Method from the Viewpoint of Quality Control : ce que la
définition de 1931 y devient, c'est ce second livre qui le détient. »
Après : « Huit ans après paraît Statistical Method from the Viewpoint of Quality Control, dont les
pages attendent leur lecteur. »

Le livre reste nommé et daté, ce qui était soutenu (C073), et plus aucune présupposition ne porte
sur son contenu. La forme retenue est celle que `PROTOCOLE.md` §1 autorise pour un ouvrage à
ouvrir : elle dit ce qui attend le lecteur, jamais ce qui a manqué au rédacteur.

## Frontière interne

Deux ajustements de `limits`, dans le sens du resserrement :

- la réserve sur le livre de 1939 porte désormais aussi la frontière que le gate a rendue visible :
  « Rien ne rapproche non plus les cinq avantages de la page 34 et ceux de la partie I » ;
- le premier paragraphe est resserré pour compenser l'ajout.

`limits` n'est remonté nulle part dans le texte lecteur ; aucun bloc visible ne récapitule des
insuffisances documentaires, et aucun titre de section n'a bougé.

## Delta des paragraphes touchés

- S1.P2 : inchangé dans son delta (le critère porte sur ce qu'on peut dire, et une qualité maîtrisée
  doit être variable) ; seule la localisation du passage change.
- S1.P3 : delta conservé (l'expérience passée est la condition), avec un cas limite désormais
  formulé sur la définition et non sur l'état du procédé.
- S3.P2 : delta conservé (prévoir n'exige pas d'expliquer, mais exige de connaître les lois), la
  conciliation devenant une lecture déclarée.
- S4.P1 : delta conservé (le contrôle seulement empirique ne donne pas les avantages économiques).
- S4.P3 : delta conservé (la condition nécessaire et suffisante est une hypothèse de travail).
- S4.P4 : delta conservé (ce qui rompt la condition, et le nom de la chose), sans la glose.
- S5.P4 : delta conservé (l'idée a un avant et un après datés), sans affirmation sur le contenu du
  livre de 1939.

Aucun paragraphe n'a perdu son delta, aucune paire consécutive n'accomplit le même travail, aucune
section ne répète principalement une section antérieure.

## Non fait, et pourquoi

- Aucune recherche documentaire, aucun fait ajouté de mémoire, aucun support `SUP-…` inventé, aucun
  artefact de fact-check réparé à la main.
- Aucun ajout compensatoire : les retraits (environ 20 mots lecteur au net) ne sont comblés par rien.
- Aucune page, date ou citation nouvelle : les pages 6, 34, 146, 148, 149 et 252 étaient déjà dans
  les matériaux, et aucun verbatim anglais n'a été modifié.
- Les 67 claims soutenus ne sont pas retouchés, à une exception de forme : dans S3.P2, la phrase
  finale réécrite supprimait mécaniquement une répétition immédiate de la traduction qui la précède.

Toute modification du texte invalide le SHA `6592117952710d00fe650a80d8e4da0dbb15ee387b3ca4e120de5071d6099b92` :
le cycle doit repartir de `PREPARE`.
