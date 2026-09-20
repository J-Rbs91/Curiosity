# zones-incertitude : correction après FACTCHECK_FAIL

mode : FACTCHECK_FIX (premier tour, sur les deux autorisés)
gate lu : `corpus/deepening-audits/work/zones-incertitude/factcheck-gate.json`
verifier lu : `corpus/deepening-audits/work/zones-incertitude/verification.json`
claim-map lu : `corpus/deepening-audits/work/zones-incertitude/claim-map.json` (offsets et
`claim_text` exacts des quatre claims fautifs, et des claims voisins pour ne pas les entamer)
audit lu : `corpus/deepening-audits/work/zones-incertitude/audit.md`

Dossier listé et lu : `corpus/evidence/zones-incertitude/` contient
`evidence.primary-reading.json` et `evidence.reception.json`. Réserve appliquée :
`evidence.reception.json` ne porte aucun `consulted`, il n'a donc fourni aucune matière au texte
lecteur. Aucune recherche documentaire, aucun support ajouté, aucun `SUP-...` invoqué.

SHA contrôlé par le gate : `78053510a1117a9fbc0f2c9f3997662aeeb6504aac1c715e122ac284c1c03723`.
Le fichier a été modifié : ce SHA est désormais invalide, le cycle doit repartir de `PREPARE`.

## Principe retenu

Aucune des quatre corrections ne cherche un appui après coup. Trois registres seulement ont été
employés : retirer la phrase, la requalifier explicitement en hypothèse, ou la ramener à un
geste de texte qui n'affirme rien d'empirique. Les 64 claims `SUPPORTED` n'ont pas été touchés,
y compris quand leur voisinage immédiat changeait.

## C001 — UNSUPPORTED — `lead[0]`, offsets 0-143

Avant : « Dans beaucoup d'organisations, presque tout finit par être écrit quelque part : qui
fait quoi, dans quel ordre, avec quelle marge d'initiative. »

Après : « Imaginons une organisation où presque tout est écrit quelque part : qui fait quoi,
dans quel ordre, avec quelle marge d'initiative. »

Geste : requalification en exemple explicitement hypothétique, conforme à `PROTOCOLE.md` §4
(« Un exemple inventé ne doit jamais pouvoir passer pour un cas historique ou empirique. Sa
nature se lit dans sa première phrase »). La généralisation empirique sur « beaucoup
d'organisations » disparaît ; l'entrée reste concrète et ne commence toujours pas par
l'abstraction. La scène imaginée reste compatible avec `lead[1]`, qui rattache ensuite la
notion à l'enquête réelle de 1960 « sur une entreprise où presque tout était prescrit » (claim
voisin, `SUPPORTED`, inchangé).

## C002 — TOO_STRONG — `lead[0]`, offsets 144-331

Avant : « Et pourtant, il arrive régulièrement qu'une personne au poste modeste pèse plus lourd
que son intitulé ne le laisse deviner, et qu'un supérieur hiérarchique se retrouve démuni devant
lui. »

Après : « Il peut malgré tout s'y trouver une personne au poste modeste qui pèse plus lourd que
son intitulé ne le laisse deviner, et un supérieur hiérarchique démuni devant elle. »

Geste : réduction de portée. « Il arrive régulièrement » posait une fréquence dans les
organisations en général là où `SUP-2146c24890b57356` et `SUP-bdd97e852f5de05f` n'établissent
que le cas du Monopole industriel de 1960, que le dossier qualifie lui-même de cas limite. Le
« s'y » rattache désormais l'énoncé à l'organisation imaginée de la phrase précédente : c'est
une possibilité dans un exemple hypothétique, plus une régularité constatée. Aucune fréquence
n'est plus affirmée.

La phrase suivante (C003, `SUPPORTED`) n'a pas été modifiée d'un caractère ; son « cela »
renvoie sans ambiguïté à la scène qui précède.

## C041 — TOO_STRONG — `sections[2].paragraphs[2]`, offsets 0-125

Avant : « C'est là que se coupe le contresens le plus fréquent, celui qui ramène la zone
d'incertitude à de la rétention d'information. »

Après : « Reste à séparer la zone d'incertitude d'une idée voisine, celle de rétention
d'information. »

Geste : suppression du superlatif de fréquence, sans affaiblissement de substitution du genre
« un contresens courant », qui resterait une affirmation de fréquence non établie. Le registre
des mésinterprétations enregistre des lectures fautives, il n'en compte pas les occurrences, et
`SUP-1129f074995c4086` dit explicitement que les pages qui ont servi à détecter l'écart
« n'établissent rien ». La phrase devient un pur geste de distinction conceptuelle, ce que
`PROTOCOLE.md` §4 autorise sans support empirique (« distinguer deux notions couramment
confondues en disant que la distinction est un outil d'analyse »).

Le reste du paragraphe est intact : C042 (l'atelier de 1960 où personne ne cache rien), C043
(Friedberg sur l'imprévisibilité), C044 (l'opacité de l'expert) et C045 (c'est un cas, non le
ressort) portent toujours seuls le travail de séparation, et ils sont `SUPPORTED`. Le delta du
paragraphe est donc inchangé : le lecteur y apprend toujours que le pouvoir vient d'une
position dans la division du travail et non d'une dissimulation.

## C055 — UNSUPPORTED — `sections[3].paragraphs[2]`, offsets 510-582

Avant : « … qu'ils contrôlent ». Une autorité hiérarchique subsiste les jours où personne n'en
a besoin ; un pouvoir adossé à une incertitude s'éteint le jour où celle-ci cesse. »

Après : « … qu'ils contrôlent ». Un pouvoir adossé à une incertitude s'éteint le jour où
celle-ci cesse. »

Geste : retrait pur et simple. La clause posait une propriété générale de l'autorité
hiérarchique, sans support résolu, et aucune matière du dossier ne l'établit hors du cas de
1960. Deux solutions ont été écartées : la reformuler en hypothèse, ce qui aurait ajouté une
spéculation sans valeur d'apprentissage ; la rebaser sur le contremaître de 1960, qui garde son
grade tout en étant démuni, ce qui aurait redit `sections[0].paragraphs[1]` et produit un
paragraphe sans delta propre.

C056 était déjà `SUPPORTED` seul (`SUP-3cfc418bfc2e1efa`, `SUP-689f64717ee4b08e`) : il devient
la phrase de clôture, avec une majuscule initiale pour seule modification. Le delta du
paragraphe (ce pouvoir est périssable à l'échelle d'une personne) est conservé en entier, porté
par l'exemple du moteur et par la vulnérabilité notée avec Thoenig.

## `limits`

Une cinquième entrée a été ajoutée, dans le registre interne et non dans le texte lecteur, pour
que la frontière découverte par ce tour de fact-check soit lisible au tour suivant : les
lectures fautives sont enregistrées et jamais comptées (donc aucun superlatif de fréquence) ;
rien n'établit de propriété générale de l'autorité hiérarchique hors du cas de 1960 ; la scène
d'ouverture est donnée comme hypothèse. Le schéma admet cinq entrées.

Aucun contenu de `limits` n'a été remonté dans `lead` ou `sections`.

## Contrôles

1. Delta de chaque paragraphe modifié : réexaminé, inchangé dans les trois cas. Aucun paragraphe
   n'a perdu sa raison d'être, aucun n'a été dupliqué par la correction.
2. Aucune section ne répète principalement une section précédente : les corrections n'ont rien
   déplacé, et le retrait de C055 a justement évité de redire la section 1.
3. Frontières documentaires : aucune phrase nouvelle ne s'appuie sur une source, les trois
   réécritures étant soit hypothétiques, soit des gestes de texte.
4. Aucun support inventé, aucun artefact de fact-check retouché.
5. Volume : texte lecteur 1 521 mots (contre 1 543 avant correction) ; total compté par le
   script 1 784 mots.
6. `npm run corpus:deepen -- --check --only=zones-incertitude` : PASS
   (« 1 approfondissement(s) contrôlé(s), 1784 mots. Rien projeté. »).

Aucune auto-validation : ce compte rendu ne déclare ni `ACCEPT`, ni `FACTCHECK_PASS`. Le gate
reste seul juge, sur un pack reconstruit depuis `PREPARE`.
