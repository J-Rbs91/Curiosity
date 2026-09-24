concept : precarite-des-trajectoires
mode : REVISE
protocol_version : 3

## Matériaux lus

- `corpus/deepenings/PROTOCOLE.md`, `corpus/deepenings/AUDIT_PROTOCOL.md`,
  `corpus/deepenings/FACTCHECK_PROTOCOL.md`
- `corpus/deepenings/precarite-des-trajectoires.json` (version auditée)
- `corpus/validated/precarite-des-trajectoires.json`
- `corpus/evidence/precarite-des-trajectoires/` : répertoire listé, un seul fichier,
  `lecture.json`, lu en entier. Pas de `scouting.json`.
- `corpus/deepening-audits/work/precarite-des-trajectoires/audit.md`
- `scripts/corpus/lib/deepenings.mjs` (bornes mécaniques, périmètre du contrôle de citations)

Aucune recherche web. Aucun fait ajouté de mémoire.

## État d'accès retenu, et pourquoi

L'enregistrement validé et le dossier de preuve ne déclarent pas le même accès. L'enregistrement
porte `sources[0].locator = "p. 87-93, ici p. 92"` et sa note 4 dit la troisième partie non
ouverte. Le dossier lève explicitement cette réserve : « Réserve de lecture partielle levée.
L'article a été parcouru en entier, pages 87 à 99 […] La troisième partie annoncée page 88 a été
ouverte et vérifiée. » La source y porte `consulted: "full-text"`.

`PROTOCOLE.md` §3 et `FACTCHECK_PROTOCOL.md` §3 font du répertoire l'autorité sur ce qu'un
rédacteur peut lire et sur ce contre quoi le texte sera jugé. J'ai donc écrit contre le dossier,
comme l'audit le demande.

**Point à traiter en amont, hors de ma portée** : l'enregistrement validé reste en retard sur son
dossier (locator `p. 87-93`, note 4, note 6 « la pagination provient de la notice Persée, non des
images » alors que le dossier dit les folios 97, 98 et 99 lus sur les pages). Les paragraphes
S4.P3 et S4.P4 s'appuient sur les pages 94 à 97. Le pack de fact-check les résoudra sur le
dossier, qui les porte ; mais l'enregistrement, ramassé lui aussi, porte une déclaration d'accès
contraire. Si le verifier rend `CONFLICT` sur ces claims, la cause sera cette divergence et non
le texte : elle se répare dans `corpus/validated/precarite-des-trajectoires.json`, pas ici.

## Ce qui n'a pas bougé

- `lead[0]` et `lead[1]` : inchangés au mot près. L'audit les donne pour le meilleur passage du
  texte et je n'ai trouvé aucune raison d'y toucher.
- S2.P1 (les deux citations de la page 91), S2 dernier paragraphe (le halo sans bord), la
  définition de « longitudinal » et les deux mondes sous une même courbe (S3), S4.P1
  (non-attribution), S5.P1 (le seuil est une décision) et S5.P2 (la fenêtre d'observation) :
  conservés tels quels ou à la ponctuation près.

## Modifications, paragraphe par paragraphe

### S1, retitré « Pourquoi le contrat a longtemps servi de mesure »

L'ancien titre, « Ce qu'une photographie de l'emploi ne montre pas », annonçait ce que le `lead`
venait d'établir. Le nouveau nomme la chose dont la section parle désormais : l'histoire de
l'indicateur.

- **Ancien S1.P1 supprimé.** C'était la scène des deux signataires reformulée en langue
  abstraite, sans personnages (défaut majeur n° 1 de l'audit).
- **Nouveau S1.P1** (matière 3). Delta : la mesure n'a pas commencé par les contrats. Le chômage
  instantané est « un indicateur qui apparaît vite insuffisant » ; le contrat devient ensuite
  « l'approche dominante de la précarité ». Le lecteur apprend qu'il y a eu une succession
  d'instruments, pas un instrument naturel.
- **Nouveau S1.P2** (matière 3, suite). Delta : l'instrument critiqué n'était pas naïf, il
  reposait sur une supposition, le contrat à durée indéterminée supposé corrélé aux autres
  attributs d'une bonne insertion. Puis « cette vision stylisée de la stabilité des emplois est à
  son tour remise en cause ».
  J'ai retiré l'énumération que j'avais d'abord écrite (« le niveau de salaire, l'horaire, la
  perspective ») : le dossier ne dit pas quels sont ces « autres attributs », et la liste aurait
  été une invention.
- **Nouveau S1.P3** (matière 5). Delta : la réfutation est empirique. 12 % des premiers contrats
  à durée indéterminée de la cohorte 1979 n'avaient pas excédé trois mois, 38 % des contrats à
  durée indéterminée de la Génération 98 ont été interrompus. Les deux chiffres sont pris au
  dossier avec la fonction que le dossier leur donne, réfuter l'équivalence entre statut d'emploi
  et stabilité de la trajectoire ; je ne leur en ai pas ajouté d'autre et je n'ai rien dit de ce
  que sont ces deux cohortes.
  La chute a été affaiblie en cours de route : « le statut le mieux protégé du droit du travail »
  était une affirmation de mon cru, remplacée par « le statut censé garantir la stabilité », qui
  renvoie au paragraphe précédent et non à une hiérarchie juridique non documentée.
- **Nouveau S1.P4** : fusion de l'ancien S1.P2 (l'appréciation a posteriori, delta central,
  conservé) et de la première moitié de l'ancien S1.P3 (l'unité de mesure change). La seconde
  moitié de l'ancien S1.P3, qui reformulait la thèse du `lead`, est supprimée.

### S2 « Un halo plutôt qu'une frontière »

- P1 inchangé.
- **P2 amputé de sa dérivation non appuyée.** La phrase « un contrat court, dans un métier où
  l'usage est de travailler ainsi, peut ne pas y figurer » était une conséquence du rédacteur que
  rien dans le dossier ne soutient. Supprimée. Le contre-exemple qui reste (l'emploi à durée
  indéterminée mal payé et vécu sans issue) suffit à montrer que le halo ne suit pas le statut.
- **P3, nouveau** (matière 4). Delta : le mécanisme qui manquait partout dans le texte. « Le
  statut juridique du contrat de travail n'est pas univoque » : le même contrat n'ouvre pas le
  même potentiel selon l'employeur qui le signe. Y sont rattachés les désajustements « entre
  trajectoires professionnelles précaires et emplois précaires au sens du statut » et les formes
  de précarité propres aux jeunes, qui sont les deux autres familles de travaux.
- P4 (ancien P3) inchangé, sauf « dispositif » remplacé par « aide » pour éviter toute lecture
  ambiguë du mot.

La section passe à quatre paragraphes ; elle reste la plus dense et n'anticipe toujours pas le
seuil temporel, qui appartient à S5.

### S3 « Du cliché unique aux indicateurs longitudinaux »

- **P1 réécrit.** L'information « cette phrase vient juste après celle qui… » est supprimée :
  elle ne sert qu'à quelqu'un qui a la page sous les yeux. À la place, le paragraphe ancre les
  deux phrases qui portent le déplacement, dont **la citation centrale de l'article, absente de
  toute la version précédente** : « ce n'est pas tant la fragilité instantanée de l'emploi qui
  pose problème que le maintien durable dans la précarité », puis celle qui change l'outil. Delta :
  le lecteur voit l'énoncé du problème et l'énoncé de l'instrument comme deux gestes distincts.
- P2 inchangé (meilleur paragraphe du texte selon l'audit).
- **P3 supprimé.** L'aphorisme « un instrument d'enquête […] décide de ce qui pourra devenir
  visible » n'était adossé à rien, et le mécanisme réel qu'il singeait est désormais traité,
  documenté, en S4.

### S4, retitré « Un pont entre les enquêtes et la recherche »

L'ancien titre, « Un déplacement que les autrices ne s'attribuent pas », ne nommait que la moitié
négative. La section dit maintenant les deux versants, et son titre nomme la thèse.

- P1 inchangé : le déplacement est un mouvement de champ, crédité à des travaux nommés.
- **P2, nouveau** (matière 2). Delta : ce que les autrices revendiquent en propre, annoncé
  page 88, « Notre propos est de montrer que si les chercheurs y ont trouvé matière à tester et
  affiner leurs représentations théoriques, les enquêtes et leurs usages s'en sont aussi trouvés
  enrichis », et nommé « Au fil du temps, un pont s'est établi entre l'appareil statistique
  d'observation de l'insertion et ses usages à des fins scientifiques ». C'est à cet endroit, et
  seulement là, que les deux rattachements institutionnels cessent d'être une notice. Je n'ai pas
  écrit laquelle des deux positions est du côté de la recherche et laquelle du côté de l'appareil
  statistique : le dossier ne le dit pas, et le lecteur le tire de lui-même. La lecture est
  marquée comme telle, « on peut y voir le pont en réduction ». La phrase adressée à un citateur
  (« ce qui vaut d'être su quand on cite l'une des deux seule ») est supprimée.
- **P3, nouveau** (matière 1). Delta : l'effet en retour, et surtout sa forme. La troisième partie
  s'ouvre sous le titre « La recherche contribue à l'enrichissement des enquêtes » ; le mouvement
  est « quelquefois direct, et lié à la présence de chercheurs dans les groupes de construction
  des questionnaires », mais « plus souvent induit », les enquêtes devant « rester ouvertes à une
  pluralité d'hypothèses » et ne pouvant « épouser un schéma théorique particulier ». J'avais
  ajouté une phrase de commentaire à la fin ; elle ne faisait que redire la citation et je l'ai
  retirée.
- **P4, nouveau** (matière 1, suite). Delta : les trois enrichissements nommés, et le retour du
  deuxième sur S2. L'appréciation subjective ne peut entrer dans le halo que si une enquête la
  recueille. J'ai d'abord écrit « c'est que les questionnaires ont commencé à la recueillir »,
  affirmation causale et historique que le dossier ne fait pas ; la formulation retenue énonce la
  condition, qui est une conséquence immédiate, et `limits` déclare le lien comme dérivé.
  Le « double mouvement » de la conclusion ferme la section, avec « d'une vision ponctuelle et
  unidimensionnelle à une appréhension dynamique et multicritères des trajectoires ».

Placée après S3, la section a désormais un prérequis à servir : elle explique d'où vient
l'instrument que S3 vient de décrire.

### S5 « Ce que « durable » oblige à décider »

- P1 et P2 inchangés.
- **P3 resserré.** L'ancienne chute non sourcée (« ce que les années enchaînées font apprendre ou
  désapprendre, et ce qu'elles laissent espérer ») est supprimée. Le paragraphe garde le
  changement d'échelle vers l'action publique et gagne la conséquence qui manquait : une politique
  qui réussit sur les statuts peut ne rien changer aux parcours.
- **P4, nouveau** (matière 6). Delta : la prise finale. La conclusion ne tranche pas la durée,
  elle la transforme en règle de méthode, « la stabilité de l'emploi ne se mesure bien que dans la
  durée », et la contrainte pratique qui en découle est que le temps d'observation ne se rattrape
  pas. C'est une tension, pas un résumé, et elle ne reformule pas la thèse du `lead` : elle dit ce
  qu'il faut décider aujourd'hui pour pouvoir constater demain.

### `limits` refait entièrement

L'ancienne version déclarait non ouverte une troisième partie que le dossier déclare lue et
vérifiée, et renvoyait à « l'article suivi jusqu'au bout » comme à une lecture à faire. Elle
interdisait donc au texte une matière qui lui était ouverte.

Le nouveau champ nomme les frontières réelles :

1. l'article disponible en entier, pages 87 à 99, conclusion de la page 97 comprise ; deux
   exceptions, l'encadré 4 de la page 95 dont seul le titre est atteint, et le résumé du bas de
   la page 99 ;
2. aucune source secondaire, donc aucun débat, aucune réception, aucune comparaison ; les travaux
   crédités ne peuvent apparaître que comme des travaux que les autrices nomment ;
3. aucun seuil chiffré dans l'article ; les trois ans et sept ans de S5 sont hypothétiques ; les
   seules données chiffrées utilisables sont la cohorte 1979 et la Génération 98 ;
4. le lien entre l'apparition d'approches subjectives et la présence de l'appréciation de
   l'enquêté dans le halo est une conséquence tirée de deux passages, non une phrase des autrices.

## Contrôles

1. **Delta de chaque paragraphe** : formulé ci-dessus pour chaque paragraphe conservé ou écrit.
2. **Paragraphes sans delta** : les quatre identifiés par l'audit (ancien S1.P1, seconde moitié de
   l'ancien S1.P3, ancien S3.P3, ancien S4.P2 dans sa forme de notice) sont supprimés ou
   refondus. Deux phrases sans delta ajoutées pendant la rédaction ont été retirées à la relecture
   (commentaire final de S4.P3, énumération inventée de S1.P2).
3. **Répétition de section** : aucune section ne rejoue la précédente. S1 histoire de
   l'indicateur, S2 élargissement en halo, S3 instrument, S4 co-évolution instrument / recherche,
   S5 coût décisionnel. La progression s'explique en une phrase par section.
4. **Frontières documentaires** : chaque citation a été relue mot pour mot contre le dossier ou
   l'enregistrement. Aucune n'a été signalée par le contrôle mécanique. Les trois dérivations non
   triviales (le pont lu dans la signature, la condition d'entrée d'un descripteur dans le halo,
   l'irrattrapabilité du temps d'observation) sont marquées dans le texte et déclarées dans
   `limits`.
5. **`limits` non remonté au lecteur** : le texte lecteur est `lead` + `sections` ; aucun bloc du
   registre interne n'y figure, aucune phrase ne raconte une lecture empêchée, aucun renvoi à la
   fabrication du texte.
6. **Contrôle mécanique** :

   ```
   npm run corpus:deepen -- --check --only=precarite-des-trajectoires
   1 approfondissement(s) contrôlé(s), 1864 mots. Rien projeté.
   ```

   Aucune erreur, aucun avertissement de citation non sourcée.

## Volume

- texte lecteur (`lead` + `sections`) : 1 640 mots, contre 1 178 avant. Cible `PROTOCOLE.md` §5
  de 1 300 à 1 700 : atteinte.
- `limits` : 224 mots, 4 paragraphes.
- total contrôlé par le script : 1 864 mots, bornes dures 1 000 à 2 100.

L'augmentation tient à quatre paragraphes nouveaux, tous portant une matière documentée qui
n'était pas dans le texte (séquence des indicateurs, statut non univoque, thèse propre des
autrices, effet en retour), et à la suppression d'environ 200 mots sans delta.

## Suite

Le fichier a changé : le SHA de la version précédente est invalide, et tout fact-check antérieur
l'est avec lui. L'orchestrateur doit reprendre à `PREPARE`.

Je ne rends ni `ACCEPT` ni `FACTCHECK_PASS`.

---

# Boucle de correction 1 sur 2 : FACTCHECK_FIX

mode : FACTCHECK_FIX
gate lu : `factcheck-gate.json`, verdict `FACTCHECK_FAIL`, 59 claims, 55 soutenus, 4 fermés,
`structural_errors` vide. Le gate est l'autorité ; `verification.json` n'a servi qu'à lire le
motif de chaque claim fermé, et `claim-map.json` à retrouver l'empan exact dans le texte.

Matériaux relus pour cette boucle : `PROTOCOLE.md`, `AUDIT_PROTOCOL.md`,
`FACTCHECK_PROTOCOL.md`, `corpus/deepenings/precarite-des-trajectoires.json`,
`corpus/validated/precarite-des-trajectoires.json`, le répertoire
`corpus/evidence/precarite-des-trajectoires/` listé et son unique fichier `lecture.json` lu en
entier. Aucune recherche web, aucun fait ajouté de mémoire, aucun `SUP-` cité ni fabriqué,
aucun artefact de fact-check modifié.

## Les quatre corrections

### C010, `sections[0].paragraphs[1]`, TOO_STRONG, correction par retrait de la propriété fautive

Le verifier accorde tout le claim sauf une qualité : rien n'établit que le renseignement était
« facile à recueillir », propriété de la collecte ajoutée par le texte lecteur.

- avant : « Un renseignement unique, facile à recueillir, était ainsi censé en résumer plusieurs. »
- après : « Un renseignement unique était ainsi censé en résumer plusieurs. »

Deux mots retirés, rien d'ajouté. Ce que le support autorise (un renseignement unique censé en
résumer plusieurs) subsiste intégralement ; le delta du paragraphe, qui est la supposition de
corrélation et non la commodité de l'instrument, n'est pas touché. C009 et C011, qui encadrent le
claim et étaient soutenus, sont inchangés au caractère près.

### C051, `sections[4].paragraphs[0]`, UNSUPPORTED, correction par retrait

« La réponse n'est pas dans les données, elle précède leur traitement. » est une thèse
épistémologique générale, sans support résolu et non marquée comme hypothèse. Aucune des deux
autres issues n'était praticable : la borner supposait une phrase du dossier sur l'ordre entre
décision de seuil et traitement, qui n'existe pas ; la marquer comme interprétation aurait laissé
une affirmation générale sans rien derrière. Phrase supprimée, sans remplacement.

Le paragraphe garde son delta, qui est porté par C050, resté soutenu : la difficulté de mesure
change de nature, il faut désormais décider à partir de quand un maintien devient durable. La
question qui suit (« Trois ans dans des emplois qui se succèdent, est-ce un parcours précaire… »)
ferme le paragraphe sur la décision à prendre, sans prétendre en fonder la théorie.

### C055, `sections[4].paragraphs[2]`, UNSUPPORTED, correction par réduction de portée

Le motif du gate vise un énoncé factuel sur les politiques publiques : ce que l'action publique
vise et compte, et le fait qu'allonger les contrats suffise à afficher un progrès. Le retrait pur
était ici exclu : la phrase suivante, C056, soutenue, enchaîne sur « la même opération », qui
n'aurait plus eu d'antécédent. La correction retenue est donc la plus faible qui ferme le motif,
le passage de l'indicatif assertif au conditionnel modal, exactement la forme que le verifier a
admise pour C056 (« énoncé conditionnel et modal appuyé sur la citation retenue »).

- avant : « Tant que la précarité se définit par le contrat, l'action publique vise des statuts et
  les compte : transformer des contrats courts en contrats longs suffit alors à afficher un
  progrès. »
- après : « Si la précarité se définit par le contrat, l'action publique peut viser des statuts et
  les compter, et l'allongement des contrats peut alors suffire à afficher un progrès. »

Aucun contenu nouveau : la phrase ne décrit plus un état de fait des politiques de l'emploi, elle
déroule la conséquence d'une définition, ce qui est le travail que le paragraphe lui demandait.

### C058, `sections[4].paragraphs[3]`, UNSUPPORTED, correction par retrait

« La contrainte est plus lourde qu'elle n'en a l'air, car le temps d'observation ne se rattrape
pas. » est une généralité sur les dispositifs d'observation qu'aucune preuve ne porte. Elle est
retirée sans remplacement, et c'est le retrait le moins coûteux des quatre : la phrase suivante,
C059, soutenue, énonçait déjà la même chose sous forme concrète et documentée (savoir si un emploi
signé aujourd'hui était stable suppose d'avoir décidé aujourd'hui de suivre assez longtemps celui
qui le signe). La version fautive faisait donc surtout doublon avec ce qu'elle annonçait.

Le paragraphe garde sa prise finale : la conclusion ne tranche pas la durée, elle la transforme en
règle de méthode, et la décision de suivi doit être prise avant de pouvoir constater.

## Ce qui n'a pas bougé

`lead`, sections 1 à 4, titres, et les 55 claims soutenus : aucune retouche, y compris de
ponctuation. Rien n'a été renforcé, précisé ni étendu ailleurs dans le texte. Aucune phrase n'a
été ajoutée pour compenser un retrait.

## `limits`

Deux frontières que la boucle a rendues explicites, ajoutées à des paragraphes existants pour
rester à quatre :

- paragraphe 3 : l'article ne dit rien des conditions de collecte, notamment de la facilité de
  recueil d'un renseignement administratif, ni de ce qu'un suivi permet de reconstituer après
  coup. C'est la frontière que C010 et C058 avaient franchie.
- paragraphe 4 : rien n'y établit ce que vise ou compte l'action publique de l'emploi, d'où le
  conditionnel imposé à la dernière section. C'est la frontière que C055 avait franchie.

Ces deux ajouts sont internes. Aucun contenu de `limits` n'apparaît dans le texte lecteur, qui
reste `lead` + `sections`.

## Contrôles

1. Delta de chaque paragraphe modifié : reformulé ci-dessus. S1.P2 conserve le sien (la
   supposition de corrélation), S5.P1 le sien (la difficulté change de nature), S5.P3 le sien (la
   notion déplace ce qu'une politique doit regarder), S5.P4 le sien (la durée devient règle de
   méthode et se décide en amont).
2. Aucun paragraphe ne se retrouve sans delta après retrait ; aucun n'a dû être fusionné.
3. Aucune section ne répète principalement une section précédente ; l'ordre est inchangé.
4. Texte dans les frontières documentaires, `limits` mis à jour sur les deux points franchis.
5. Aucun bloc de `limits` remonté au lecteur, aucun renvoi à la fabrication du texte.
6. Contrôle mécanique :

   ```
   npm run corpus:deepen -- --check --only=precarite-des-trajectoires
   1 approfondissement(s) contrôlé(s), 1882 mots. Rien projeté.
   ```

   Aucune erreur, aucun avertissement de citation.

## Volume

- texte lecteur : 1 606 mots, contre 1 640 avant correction. Cible 1 300 à 1 700 : tenue.
- `limits` : 276 mots, 4 paragraphes.
- total contrôlé par le script : 1 882 mots.

## Suite

Le fichier a changé : le SHA `d51427379aff324b7c55376bcc42ffddbe501bd3c29ad7d0845d24491503eb62`
est invalide, et le pack, le claim-map, le bundle et la vérification qui s'y rattachent le sont
avec lui. L'orchestrateur doit reprendre à `PREPARE`.

Je ne rends ni `ACCEPT` ni `FACTCHECK_PASS`.
