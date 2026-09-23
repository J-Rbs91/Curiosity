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
