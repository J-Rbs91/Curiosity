# Correction factuelle minimale : critere-de-la-retroaction

Date : 2026-09-26
Mode : FACTCHECK_FIX (aucune réécriture)
Texte corrigé : `corpus/deepenings/critere-de-la-retroaction.json`
SHA256 avant correction : `29083f8bb2bfc0602f2f6db3c5f3d2594ebc8efe766d4a9187f1d73a3a595222`
(identique au `candidate_sha256` de `factcheck-gate.json` et de `verification.json` : la
correction porte bien sur la version jugée)
SHA256 après correction : `10e489ee25ac51fbbcbf087ff62d5972a485ca546a6ba321d1c11f11de0e0a97`

Ce compte rendu remplace intégralement le précédent, qui décrivait une version antérieure du
texte et n'était plus opposable.

Gate : `FACTCHECK_FAIL`, 59 claims, 52 soutenus, 7 refusés. Seuls les sept claims refusés et ce
que leur retrait rendait incohérent ont été touchés. Aucun des 52 claims soutenus n'a été
reformulé. `limits` est inchangé et reste interne.

Gestes employés : `REMOVE`, `NARROW`. Ni `REATTRIBUTE` ni `MARK_AS_INTERPRETATION` n'ont servi :
aucun des sept refus ne se réparait par un changement d'attribution, et aucun ne se réparait par
un marquage d'interprétation, faute d'appui sous-jacent (un « on peut comprendre ainsi » posé
devant une proposition non soutenue ne crée pas l'appui).

## Mots

| | Avant | Après |
|---|---|---|
| `lead` + `sections` (texte lecteur) | 1 198 | 1 158 |

Solde : moins 40 mots. Les seuls mots ajoutés (une phrase en S2.P2, deux phrases en S5.P3) le
sont pour porter un énoncé borné à un appui du pack, jamais pour assurer une transition.

## Les sept corrections

### C028 `TOO_STRONG` — S2.P3, « l'article lui consacre un développement, avec l'instabilité qu'il engendre »

Geste : `REMOVE` (avec le paragraphe entier, voir ci-dessous).
Motif retenu : la juxtaposition de deux items dans l'énumération de `reserves[0]` (« délai de
traitement et instabilité ») n'autorise aucun lien causal. L'excédent était le lien lui-même,
c'est-à-dire l'intérêt de la phrase : il ne restait rien à borner.

### C029 `TOO_STRONG` — S2.P3, « Entre l'action et l'information qui en revient il y a toujours un temps »

Geste : `REMOVE`.
Motif retenu : aucun appui ne porte l'énoncé universel, et `definition_de_lauteur` dit au
contraire les trois sous-processus « simultanés et continus ». Un bornage (« souvent »,
« fréquemment ») aurait produit une phrase vide et toujours non appuyée.

### C030 `UNSUPPORTED` — S2.P3, « ce temps décide autant que le contenu du signal »

Geste : `REMOVE`.
Motif retenu : aucun appui ne compare le poids du délai à celui du contenu du signal. Une
comparaison sans terme de comparaison dans le dossier ne se borne pas, elle se retire.

### C031 `UNSUPPORTED` — S2.P3, « il peut faire tomber la correction sur une situation qui a déjà changé, et la correction, alors, dérègle au lieu de rattraper »

Geste : `REMOVE`.
Motif retenu : le mécanisme énoncé n'est porté par aucun appui. C'était la seule phrase de
contenu du paragraphe, et elle était intégralement inventée.

#### Sort du paragraphe S2.P3

Les quatre claims du paragraphe sont refusés et le paragraphe ne contenait aucun autre claim :
`claim-map.json` ne lui en attribue pas d'autre. Le dossier ne le porte donc pas du tout, et il
a été supprimé.

Ce qui restait énonçable a été cherché avant le retrait, puis conservé. `reserves[1]` énumère ce
que l'article exige de la boucle et y range explicitement « que le délai ne la rende pas
inutilisable » ; `reserves[0]` atteste par ailleurs que le délai de traitement est un des thèmes
exposés aux p. 6-13. Une seule phrase a donc été adossée à la fin de S2.P2 :

> Le délai, lui, n'est pas neutre : la boucle exige aussi que le temps de traitement ne rende pas
> l'information inutilisable.

Elle n'affirme ni le mécanisme de l'instabilité, ni l'universalité du délai, ni sa prépondérance
sur le contenu. Elle ne redit pas S2.P2 : ce paragraphe établit que l'immédiateté n'est pas
requise, la phrase ajoutée pose la borne symétrique, à savoir que le différé n'est pas sans
limite. C'est exactement l'une des trois issues que l'audit de septembre autorisait pour ce
passage (« Le délai est soit supprimé, soit réduit à une phrase adossée à ce que le dossier porte
réellement »), et la progression de la section, jugée saine, est préservée : le critère change de
porte (l'action), le parachute le rend irréfutable, ce que cela élimine, puis la nuance du
différé et sa borne. La section passe de trois à deux paragraphes, comme les quatre autres.

### C041 `TOO_STRONG` — S4.P1, « Une boucle n'est presque jamais seule. »

Geste : `REMOVE`.
Motif retenu : les appuis établissent une hiérarchisation des boucles décrite par Paquette, pas
un énoncé de fréquence sur les boucles en général. Le retrait ne laisse aucun trou : le contenu
réellement soutenu de cette phrase était la redite anticipée de C042, resté intact, qui suit
immédiatement (« Paquette décrit des boucles hiérarchisées, emboîtées les unes dans les autres,
dont les valeurs de référence peuvent elles-mêmes être déplacées par un niveau supérieur »).
Borner l'ouverture aurait donc fabriqué une redondance pédagogique pour satisfaire le gate. Le
paragraphe commence désormais par C042 ; le titre de section reste juste.

### C044 `TOO_STRONG` — S4.P1, « et il la défend avec la même obstination »

Geste : `NARROW` (troncature de la comparaison d'intensité).
Avant : « Le corps ne manque pas sa température habituelle, il en vise une autre, et il la défend
avec la même obstination. »
Après : « Le corps ne manque pas sa température habituelle, il en vise une autre. »
Motif retenu : « il en vise une autre » suit de la fièvre relue comme modification de la valeur de
référence (`definition_de_lauteur`) ; la comparaison d'intensité de la régulation n'est portée par
aucun appui. Elle est le seul excédent, et la phrase sans elle dit encore ce qu'elle avait à dire.

### C057 `TOO_STRONG` — S5.P3, « Ces quatre termes, il ne les invente pas, ils circulaient déjà »

Geste : `NARROW` (réduction du périmètre de quatre termes à deux, plus restitution du statut des
deux autres).
Avant : « Ces quatre termes, il ne les invente pas, ils circulaient déjà ; ce qu'il leur donne, ce
sont des définitions séparées, et il les propose aux sciences de la communication et à elles
seules. »
Après : « Rétroaction et rétroinformation, il ne les invente pas : ces mots circulaient déjà comme
traductions de feedback, et ce qu'il leur donne, ce sont des définitions séparées. La
préinformation et la préaction, elles, il les ajoute. Cette terminologie, il la propose aux
sciences de la communication et à elles seules. »

Motif retenu : `attribution_note` et `attribution.note` limitent la circulation antérieure à deux
termes (« Il ne forge ni rétroaction ni rétroinformation, termes déjà en circulation ») et disent
des deux autres qu'il les ajoute ; `review.notes[4]` cite la liste de la p. 5, où ne figurent ni
préinformation ni préaction, et situe leur introduction p. 17 « comme des notions ajoutées ». Le
bornage porte donc jusqu'au point où l'appui porte réellement l'énoncé : la non-invention est
restreinte aux deux termes que les appuis nomment, et l'ajout des deux autres est dit, ce que les
mêmes appuis portent mot pour mot.

Appuis des mots ajoutés :
- « ces mots circulaient déjà comme traductions de feedback » : `review.notes[4]`, p. 5,
  « l'abondance des termes proposés pour sa francisation (rétroaction, rétroin-formation,
  réinjection, retour, réponse, réaction, boucle informationnelle, etc.) ».
- « La préinformation et la préaction, elles, il les ajoute » : `attribution_note` et
  `attribution.note` (« qu'il ajoute »), `review.notes[4]` (« introduites p. 17 comme des notions
  ajoutées au schéma »). Le mot « schéma » n'est pas repris : le texte lecteur n'a pas présenté ce
  schéma.
- Les deux claims soutenus voisins, C058 (« ce qu'il leur donne, ce sont des définitions
  séparées ») et C059 (« il les propose aux sciences de la communication et à elles seules »),
  sont conservés dans leur substance ; « il les propose » devient « Cette terminologie, il la
  propose » pour que le référent reste la proposition terminologique finale et non le seul couple
  préinformation / préaction.

## Contrôles faits

- Aucun appui inventé, aucun `SUP-...` fabriqué, aucun fait tiré de la mémoire, aucune citation
  nouvelle. Toutes les citations du texte sont inchangées.
- `corpus/evidence/critere-de-la-retroaction/` n'existe pas ; le dossier documentaire de cette
  carte est `corpus/evidence/retroaction-denaturee/lecture.json`, déjà résolu dans le pack (72
  appuis) et lu ici par le pack.
- Aucun contenu de `limits` n'a été remonté dans le texte lecteur ; `limits` n'a pas été modifié.
  Les frontières qu'il nomme (Veraldi `metadata-only`, date et titre de Wiener, réception dans les
  sciences de la communication) restent respectées par les corrections.
- Aucun tiret cadratin ajouté ; guillemets et apostrophes typographiques conformes ; aucun
  paragraphe ne contient de balisage.
- Aucun paragraphe restant ne fait le travail d'un autre : la suppression de S2.P3 et de la
  première phrase de S4.P1 supprime deux redondances plutôt qu'elle n'en crée.
- `npm run corpus:deepen -- --check --only=critere-de-la-retroaction` : `1 approfondissement(s)
  contrôlé(s), 1340 mots. Rien projeté.` (contrôle mécanique passé, rien d'écrit ni de projeté).

## Suite

Toute modification du texte invalide le SHA. La chaîne déterministe doit repartir de `PREPARE`
sur `10e489ee25ac51fbbcbf087ff62d5972a485ca546a6ba321d1c11f11de0e0a97`. Aucun verdict
`FACTCHECK_PASS` n'est prononcé ici, et aucun artefact de fact-check n'a été modifié à la main.

---

# Boucle 2 (et dernière) : seconde correction factuelle

Date : 2026-09-26
Mode : FACTCHECK_FIX (aucune réécriture)
Texte corrigé : `corpus/deepenings/critere-de-la-retroaction.json`
SHA256 avant correction : `10e489ee25ac51fbbcbf087ff62d5972a485ca546a6ba321d1c11f11de0e0a97`
(identique au `candidate_sha256` de `factcheck-gate.json`, de `verification.json` et de
`claim-map.json` : la correction porte bien sur la version jugée, et c'est bien le SHA que la
section « Boucle 1 » ci-dessus annonçait en sortie)
SHA256 après correction : `51377815deeb19ddcae13f09372826b6b76a0b8df3d8d69691a2bc66f684d094`

La partie « Boucle 1 » qui précède est conservée telle quelle : elle documente le passage de
`29083f8b…` à `10e489ee…` et reste opposable pour cette version. Ce qui suit documente le passage
de `10e489ee…` à `51377815…`. Le compte rendu vaut donc pour les deux SHA successifs, et le SHA
courant du fichier est celui de la présente section.

Gate de la boucle 2 : `FACTCHECK_FAIL`, 56 claims, 50 soutenus, 6 refusés, `structural_errors`
vide. Seuls les six claims refusés et ce que leur retrait rendait incohérent ont été touchés.
Aucun des 50 claims soutenus n'a été reformulé, sauf deux mots de rattachement signalés plus bas.
`limits` est inchangé et reste interne : aucune section visible du genre « ce que les sources ne
permettent pas d'établir » n'a été créée.

Gestes employés : `NARROW` (quatre fois), `REMOVE` (deux fois). Ni `REATTRIBUTE` ni
`MARK_AS_INTERPRETATION` n'ont servi. Pour `MARK_AS_INTERPRETATION` la raison est celle de la
boucle 1, réapprise à ses dépens : un « on peut comprendre ainsi » posé devant une proposition
sans appui ne crée pas l'appui, et aurait été refusé une seconde fois.

## Mots

| | Avant (10e489ee) | Après (51377815) |
|---|---|---|
| `lead` + `sections` (texte lecteur) | 1 158 | 1 081 |

Solde : moins 77 mots. **Aucun mot n'a été ajouté au texte lecteur** : les quatre `NARROW` sont des
troncatures ou des substitutions plus courtes, les deux `REMOVE` retirent une phrase entière. Il
n'y avait donc rien à justifier par un appui neuf du pack.

## Les six corrections

### C006 `TOO_STRONG` — `lead[1]`, la thèse donnée comme procédure de décision universelle

Geste : `NARROW`.
Avant : « Ce qu'il construit est un moyen de trancher : devant n'importe quelle situation où
quelque chose revient vers celui qui a agi, deux questions suffisent à dire s'il y a boucle ou
non. »
Après : « Ce qu'il construit est un critère d'identification : deux conditions sans lesquelles il
n'y a pas de boucle. »

Motif retenu : les appuis donnent une condition nécessaire, pas une procédure suffisante, et ne
donnent aucune extension à « n'importe quelle situation ». Les trois excédents sont nommément
« n'importe quelle situation », « suffisent à dire » et l'implicite d'exhaustivité. Le bornage les
retire tous les trois et s'arrête au point où l'appui porte l'énoncé mot pour mot :
`reserves[2]` (`SUP-af230d6cc1d8a5eb`) écrit « La thèse réelle est un critère d'identification :
il n'y a rétroaction que si […] et que l'action peut encore être corrigée », et `summary`
(`SUP-bcaa6846245431a4`) « Il n'y a rétroaction que si […] et si l'action peut encore être
corrigée ». « critère d'identification » est repris de l'appui ; « deux conditions sans lesquelles
il n'y a pas de boucle » est la forme nécessaire, et non suffisante, de ce même énoncé. Le nombre
deux est porté par les appuis eux-mêmes (`review.notes[5]`, « les deux conditions du summary »).

Sur le quatrième point du motif du vérificateur — le dossier énumère quatre exigences : la
formulation retenue ne prétend plus à l'exhaustivité. « deux conditions sans lesquelles il n'y a
pas de boucle » n'affirme pas qu'il n'y en a pas d'autres, ce qui laisse sans contradiction la
phrase sur le délai conservée en S2.P1.

Pas de redite créée : les deux conditions ne sont pas déroulées ici, elles le sont par C007 (« Que
revient-il au juste ? Et l'action peut-elle encore changer ? »), claim soutenu et intact, qui suit
immédiatement. C'est précisément pour ne pas doubler C007 que le bornage ne recopie pas l'énoncé
complet des deux conditions.

### C008 `UNSUPPORTED` — `lead[1]`, deux exemples prêtés à l'auteur

Geste : `NARROW` (réduction de la liste aux exemples attestés).
Avant : « Il mène la démonstration sur un thermostat, un autocuiseur, un réservoir de chasse
d'eau, un joueur de quilles, une fièvre, avant de la ramener à ce qui l'occupe, la communication. »
Après : « Il mène la démonstration sur un autocuiseur, un réservoir de chasse d'eau, une fièvre,
avant de la ramener à ce qui l'occupe, la communication. »

Motif retenu : `definition_de_lauteur` (`SUP-d9116d421b3c54dc`) atteste l'autocuiseur, le
réservoir de W.-C. et la fièvre relue comme modification de la valeur de référence
(thermorégulation). La liste maigrit et rien ne la remplace : aucun exemple n'a été inventé, et le
parachute, pourtant attesté et utilisé en S2, n'a pas été promu dans le `lead` pour compenser le
retrait — ce serait allonger sans nécessité.

**Réserve signalée, non utilisée.** `reserves[0]` (`SUP-421445a4beb428f3`), appui présent dans le
pack mais absent des `support_ids` que `claim-map.json` attache à C008, écrit : « l'auteur raisonne
sur un thermostat, un autocuiseur, un réservoir de W.-C., un thermocouple, un joueur de quilles,
une fièvre, un professeur devant quelques centaines d'étudiants ». Le thermostat et le joueur de
quilles y figurent donc nommément. Je ne m'en sers pas, et je le dis plutôt que de le passer sous
silence : le gate est l'autorité sur l'échec, il a jugé ces deux exemples non portés par un appui
résolu, et la règle « le vérificateur du tour suivant ne créditera ton claim d'aucun effort »
interdit de parier, au dernier tour, sur le fait que la prochaine passe de `PREPARE` rattachera
cette fois `reserves[0]` au claim. Si la carte est un jour reprise, c'est un défaut d'appariement du
préparateur qu'il faut corriger, pas le texte : la matière existe.

### C014 `TOO_STRONG` — S1.P1, la divergence des retours donnée comme nécessaire

Geste : `NARROW`.
Avant : « Deux personnes qui parlent devant la même salle n'ont donc pas le même retour,
puisqu'elles n'y lisent pas la même chose, et une salle qui s'ennuie… »
Après : « Le même public ne donne donc pas forcément le même retour à deux personnes qui parlent
devant lui, et une salle qui s'ennuie… »

Motif retenu : le vérificateur nomme deux excédents distincts, la prémisse empirique
(« elles n'y lisent pas la même chose », affirmée comme un fait) et la conclusion catégorique
(« n'ont donc pas »). Le bornage traite les deux : la prémisse disparaît, la conclusion passe à la
possibilité, seul niveau que l'appui autorise (le retour réside « dans la connaissance que la
source en a », `notes[2]`, `SUP-dc2bfdc5f124d828`, donc il est indexé à la source, donc il peut
diverger).

La prémisse n'est pas remplacée par une justification équivalente, et c'est délibéré : écrire
« puisque le retour dépend de ce que chacune déduit » aurait redit dans la même phrase ce que le
paragraphe précédent vient d'établir (le retour réside dans la connaissance que la source en a) et
ce que la citation de la p. 16, deux phrases plus loin, dit littéralement (« ce que l'on peut
déduire des mimiques […] et non pas ce que sont ces événements en eux-mêmes », C017, soutenu et
intact). La correction factuelle aurait acheté sa conformité au prix d'une redondance pédagogique.
C015, soutenu, est conservé mot pour mot dans la seconde moitié de la phrase.

### C034 `TOO_STRONG` — S3.P1, le curseur du thermostat

Geste : `NARROW`.
Avant : « Dans une machine, cette valeur vient du dehors, de celui qui pousse le curseur du
thermostat. »
Après : « Dans une machine, cette valeur est imposée du dehors. »

Motif retenu : la partie générale est soutenue et elle est conservée dans les termes de l'appui —
`definition_de_lauteur` : la valeur de référence est « imposée de l'extérieur dans les machines,
parfois implicite dans le vivant ». L'excédent est la scène, et la scène seule : elle est retirée.
C035 (« Dans un organisme, elle peut n'être écrite nulle part et rester implicite ») suit
immédiatement et garde le contraste intact ; la phrase bornée dit encore ce qu'elle avait à dire.

**Substitution d'exemple examinée puis écartée.** L'orchestrateur ouvrait la possibilité de
remplacer le thermostat par un exemple attesté plutôt que de le supprimer. Le seul candidat que le
pack porte est le réservoir de W.-C., dont `definition_de_lauteur` dit qu'« un niveau précis peut
être vérifié et recherché ». Écrire « le niveau que le réservoir vérifie et recherche ne vient pas
de lui » aurait exigé de composer deux énoncés de l'appui, la généralité sur les machines et
l'exemple, en une application que nul appui n'écrit : c'est exactement un bornage qui a l'air
porté sans l'être, et la règle 3 l'interdit. La perte pédagogique est faible : le paragraphe
précédent, S3.P0, est entièrement construit sur l'autocuiseur et le réservoir, si bien que
« cette valeur » et « une machine » restent adossés à des objets concrets à deux phrases de là.
Le titre de la section, « Ce qu'un autocuiseur ne fait pas », reste juste. Aucun « thermostat » ne
subsiste dans le texte lecteur.

### C040 `TOO_STRONG` — S4.P1, l'écart-défaut érigé en loi de lecture

Geste : `REMOVE`.
Retiré : « Cela déplace la question du bon fonctionnement. Tant qu'on regarde une boucle seule,
tout écart ressemble à un défaut ; dès qu'on admet qu'un niveau supérieur peut réviser les buts,
le même écart devient l'exécution d'une consigne venue d'ailleurs. »

Motif retenu : l'appui porte un cas unique, la fièvre relue comme valeur de référence modifiée, et
le claim en tire une loi générale de lecture. Ici l'excédent est la généralisation, c'est-à-dire
toute la phrase : borner à « tout » ou « souvent » laisserait la même dérivation, et borner au cas
attesté — la fièvre — reproduirait mot pour mot le travail de C038 et C039, soutenus et intacts, au
paragraphe précédent (« une fièvre ne se lit pas comme une régulation qui échoue, mais comme une
valeur de référence modifiée. Le corps ne manque pas sa température habituelle, il en vise une
autre. »). Un `NARROW` aurait donc fabriqué une redondance pour satisfaire le gate. La phrase se
retire.

La phrase d'amorce « Cela déplace la question du bon fonctionnement. » part avec elle. Elle
n'était pas extraite comme claim par `claim-map.json`, mais elle n'annonçait rien d'autre que la
généralisation supprimée : la garder aurait laissé une promesse sans suite, et aurait exposé la
prochaine passe au même reproche sous une forme plus vague.

### C041 `TOO_STRONG` — S4.P1, un contraste conceptuel prêté à l'auteur

Geste : `NARROW`.
Avant : « Paquette nomme hétérostasie ce déclenchement d'une révision des buts, par opposition au
maintien d'un état constant. »
Après : « Paquette nomme hétérostasie le déclenchement d'une révision des buts. »

Motif retenu : le vérificateur reconnaît « hétérostasie déclenchant la révision des buts » comme
porté par `definition_de_lauteur` et refuse la seule opposition au maintien d'un état constant,
que nul appui n'écrit. L'opposition est retirée, l'énoncé restant est la formule de l'appui.
Le démonstratif « ce » devient « le » parce que son antécédent, la phrase d'amorce retirée avec
C040, n'existe plus : c'est le seul mot changé hors des six claims, et il ne change aucune
assertion.

#### Sort du paragraphe S4.P1

Il passe de quatre phrases à deux et conserve un claim soutenu, C042, intact :

> Paquette nomme hétérostasie le déclenchement d'une révision des buts. On peut comprendre cela
> comme la différence entre corriger une action et changer ce qu'on cherche : les deux se font par
> des boucles, mais elles ne se logent pas au même étage.

Le paragraphe garde son delta propre — nommer le phénomène, puis situer l'étage — distinct de celui
de S4.P0, qui établit l'emboîtement et le cas de la fièvre. Le « cela » de C042 a désormais pour
antécédent l'hétérostasie, ce qui est plus proche que ce qu'il désignait avant.

Une réserve à signaler pour un audit pédagogique ultérieur, hors de mon mandat : « elles ne se
logent pas au même étage » (C042) fait un écho un peu proche de « boucles hiérarchisées, emboîtées
les unes dans les autres » (C037). C042 est soutenu et je n'y touche pas ; c'est une question de
rédaction, pas de fait.

## Contrôles faits

- Aucun appui inventé, aucun `SUP-…` fabriqué, aucun fait tiré de la mémoire, aucune recherche
  documentaire, aucune citation nouvelle. Toutes les citations entre guillemets du texte sont
  inchangées, et les six corrections n'en touchent aucune.
- Aucun mot ajouté au texte lecteur. Le seul mot substitué hors claims refusés est « ce » → « le »
  (S4.P1), rendu nécessaire par un retrait.
- `diff` du fichier : quatre lignes modifiées, quatre insertions, quatre suppressions. `limits`,
  `lead[0]`, les titres de sections, S2 et S5 sont intacts au caractère près.
- `limits` n'a pas été modifié et n'a pas été remonté dans le texte lecteur. Les frontières qu'il
  nomme (Veraldi `metadata-only`, date et titre de Wiener, réception dans les sciences de la
  communication) ne sont pas franchies par ces corrections.
- `corpus/evidence/critere-de-la-retroaction/` n'existe toujours pas : le dossier de cette carte
  est `corpus/evidence/retroaction-denaturee/`, résolu par le pack (`dossier_declare` = résolu, 72
  appuis, un fichier de preuve). C'est ce pack, lu en entier, qui a servi ici.
- Aucun paragraphe restant ne fait principalement le travail d'un autre. Les deux retraits
  suppriment des redondances latentes plutôt qu'ils n'en créent.
- `npm run corpus:deepen -- --check --only=critere-de-la-retroaction` :
  `1 approfondissement(s) contrôlé(s), 1263 mots. Rien projeté.` Contrôle mécanique passé, rien
  d'écrit ni de projeté hors du fichier corrigé.

## Suite

La modification invalide le SHA. La chaîne déterministe doit repartir de `PREPARE` sur
`51377815deeb19ddcae13f09372826b6b76a0b8df3d8d69691a2bc66f684d094`. Aucun verdict
`FACTCHECK_PASS` n'est prononcé ici, aucun artefact de fact-check n'a été modifié à la main, et
`factcheck-gate.json`, `verification.json`, `claim-map.json` et `factcheck-pack.json` restent ceux
de `10e489ee…`, donc périmés dès à présent.
