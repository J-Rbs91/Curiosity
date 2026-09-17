concept : predominance-du-conflit-sur-la-negociation
mode    : FACTCHECK_FIX (boucle 1 sur 2)
date    : 2026-09-17
gate lu : factcheck-gate.json, verdict FACTCHECK_FAIL, 61 claims, 55 SUPPORTED, 4 TOO_STRONG,
          2 UNSUPPORTED, aucune erreur structurelle. SHA contrôlé :
          3dc7f8bc479b932c1448901fd9d70e43a26b0297a7291fb4cc0fd2c117cd6ea9

Correction minimale seulement. Aucune affirmation neuve, aucune recherche, aucun support
`SUP-...` invoqué ou fabriqué, aucun compensation de volume.

## Opération retenue, claim par claim

### C001 — TOO_STRONG — lead[0] — NARROW

Avant : « Dans une entreprise de plusieurs milliers de salariés, il y a des délégués, des
réunions inscrites au calendrier, des accords signés et des habitudes de discussion vieilles de
vingt ans. »

Après : « Discuter, dans une entreprise, cela prend des formes visibles : des délégués, des
réunions inscrites au calendrier, des accords signés. Ces pratiques ne sont pas également
répandues selon la taille : c’est dans les grandes entreprises qu’elles sont le plus
développées, et un petit atelier en est bien moins pourvu. »

Ce que fait la correction : l’inventaire cesse d’être attribué comme propriété constatée d’une
entreprise de plusieurs milliers de salariés ; il sert de glose de ce que « discuter » veut dire
concrètement, et l’énoncé porteur redevient un rapport de comparaison entre grandes et petites
entreprises, exactement la forme du seul support disponible (« un plus grand développement des
pratiques contractuelles diverses »). Le détail chiffré « vieilles de vingt ans », absent de tout
support, est supprimé sans remplacement.

### C002 — TOO_STRONG — lead[0] — REMOVE

Avant : « Dans un atelier de trente personnes, rien de tout cela n’existe : on se parle, ou on ne
se parle pas. »

Après : la négation absolue et l’effectif de trente personnes disparaissent. Il ne reste que le
versant comparatif, « un petit atelier en est bien moins pourvu », intégré à la phrase de C001.
Aucune affirmation sur l’absence totale d’instances ou d’accords dans les petites unités ne
subsiste.

### C010 — TOO_STRONG — sections[0].paragraphs[0] — NARROW

Avant : « Elle décalque, en la déplaçant, une formule célèbre de Clausewitz sur la guerre et la
politique. »

Après : « Elle est construite par inversion d’une formule de Clausewitz. »

Ce que fait la correction : seul le rapport d’inversion, seul attesté (« la formule inversée de
Clausewitz »), est conservé. Le contenu prêté à l’énoncé clausewitzien (guerre et politique) et
sa célébrité, qui venaient de la connaissance générale et non du dossier, sont retirés.

### C018 — UNSUPPORTED — sections[0].paragraphs[2] — REMOVE

Avant : « Il produit des textes et occupe des gens à plein temps, mais ce qu’il accorde continue
de dépendre de ce que les salariés sont capables d’arrêter. »

Après : « Ce qu’il accorde continue de dépendre de ce que les salariés sont capables d’arrêter. »

Ce que fait la correction : la description factuelle de l’appareil de négociation (production de
textes, permanents à plein temps) n’était appuyée sur rien et est supprimée. La proposition
suivante, déjà SUPPORTED en C019, devient la phrase entière ; la concession « mais » tombe avec
la proposition qu’elle opposait.

### C045 — TOO_STRONG — sections[3].paragraphs[0] — NARROW

Avant : « Les deux s’emboîtent : là où la discussion est installée, ni la fréquence des arrêts ni
leur efficacité ne reculent. »

Après : « Les deux s’emboîtent : là où la discussion est installée, les arrêts sont à la fois les
plus fréquents et ceux dont l’issue dépend le plus de leur durée. »

Ce que fait la correction : la négation portant sur l’efficacité, contredite en substance par
`notes[1]` (l’appareil « relève le seuil de pression à partir duquel un résultat s’obtient »),
est remplacée par ce que le dossier porte effectivement, et rien de plus : le volet fréquence
(citation Durand, p. 33) et le volet sensibilité à la durée (écarts p. 40, p. 44). L’énoncé ne
tranche plus sur le recul ou non de l’efficacité ; il rejoint ce que le texte reconnaît lui-même
deux paragraphes plus loin (« l’appareil de négociation ne dispense pas de la grève, il en relève
le prix »), et la contradiction interne signalée est levée.

### C048 — UNSUPPORTED — sections[3].paragraphs[1] — REMOVE

Avant : « L’institutionnalisation du conflit, c’est l’idée qu’un affrontement finit par se couler
dans des règles et des rendez-vous qui l’absorbent. »

Après : phrase supprimée. Le paragraphe enchaîne directement de la citation de la page 44 sur le
verbe qui porte la réfutation (« Le verbe qui porte la réfutation est se substituer… »), énoncé
déjà SUPPORTED en C049. L’expression « institutionnalisation du conflit » ne subsiste que dans la
citation de l’auteur, où elle est immédiatement suivie de ce que l’on en attendait (se substituer
au rapport des forces) : la définition d’auteur non attestée n’est pas remplacée par une autre.

## Frontière interne

`limits[2]` est précisé, sans devenir un bloc visible : il nomme désormais ce que la source
secondaire autorise exactement au sujet de Clausewitz (le rapport d’inversion) et l’affirmation
qu’elle interdit (l’énoncé clausewitzien lui-même et sa notoriété). Les trois autres paragraphes
de `limits` sont inchangés. Aucun contenu de `limits` n’a été remonté vers le texte lecteur.

## Compteurs

| | avant | après |
|---|---|---|
| texte lecteur (`lead` + `sections`) | 1 474 mots | 1 444 mots |
| `limits` | 259 mots | 293 mots |
| total compté par le contrôle | 1 733 mots | 1 737 mots |
| paragraphes lecteur | 16 | 16 |

Coupes nettes dans le texte lecteur : 30 mots. Aucune phrase n’a été ajoutée pour compenser une
suppression ; les seuls mots nouveaux sont ceux qui reformulent un énoncé corrigé.

## Contrôle mécanique

`npm run corpus:deepen -- --check --only=predominance-du-conflit-sur-la-negociation`
→ « 1 approfondissement(s) contrôlé(s), 1737 mots. Rien projeté. » Aucun avertissement.

## Suite

Le fichier a changé : le SHA `3dc7f8bc…` ne vaut plus, et le fact-check antérieur est invalidé
de plein droit. L’orchestrateur doit reprendre à `PREPARE`. Aucun verdict n’est rendu ici : ni
`ACCEPT`, ni `FACTCHECK_PASS`.
