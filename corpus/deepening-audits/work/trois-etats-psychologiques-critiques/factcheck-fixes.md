# Correction FACTCHECK_FAIL : trois-etats-psychologiques-critiques

Gate lu : `corpus/deepening-audits/work/trois-etats-psychologiques-critiques/factcheck-gate.json`
(verdict `FACTCHECK_FAIL`, 67 claims, 64 SUPPORTED, 3 échecs).

SHA de la version fautive : `8704b0b1da552cbf86d062cc2fa8bd4e7236ce31c1c3293cfc9e8a7ecb20555a`.
Toute modification invalide ce SHA : le cycle doit repartir de `PREPARE`.

Aucune recherche, aucune source nouvelle, aucun `SUP-...` ajouté. Seuls les trois passages
nommés par le gate ont été touchés.

## C025 — UNSUPPORTED — geste : REMOVE

Locator : `sections[1].paragraphs[1]`.

Passage retiré : « l'on peut comprendre par là celle qui vient de l'activité elle-même plutôt
que d'une récompense posée à côté d'elle ».

Raison du gate : aucun support résolu. Vérification faite dans `corpus/validated/` : le dossier
contient bien l'énumération de la p. 2 (« high internal motivation, high work satisfaction,
high quality performance, and low absenteeism and turnover », note `$.notes[5]`), mais nulle
part une définition ou une glose de « internal motivation ». La glose ne pouvait donc être ni
bornée ni réattribuée : elle est supprimée.

La remarque résiduelle (« l'adjectif accolé à la motivation : elle est dite interne ») aurait
été soutenue, mais sans sa glose elle ne faisait plus que redire la traduction déjà donnée au
paragraphe précédent : delta nul, donc supprimée avec elle. La seconde remarque du paragraphe,
intégralement soutenue, est conservée mot pour mot ; seule l'amorce « Deux choses méritent d'y
être remarquées. La première… La seconde… » devient « Ce qui mérite d'y être remarqué est… »,
par nécessité grammaticale du retrait. Aucune matière n'est ajoutée en compensation : le
paragraphe raccourcit.

## C043 — TOO_STRONG — geste : NARROW

Locator : `sections[3].paragraphs[0]`.

Avant : « Les trois états y ont un statut d'objet de mesure, au même titre que les
caractéristiques de l'emploi et que les effets attendus ».

Après : « Les trois états y ont un statut d'objet de mesure : l'instrument fournit une mesure de
chacun d'eux. »

Raison du gate : les supports (`SUP-a244df70aaf7d565`, `SUP-b688d44bfe377565`) portent
exactement « The JDS provides measures of each of the three psychological states ». Ils
n'établissent pas que les caractéristiques de l'emploi et les effets attendus soient eux aussi
mesurés par l'instrument. Le claim est ramené au périmètre littéral du support : la mesure des
trois états, et rien de plus. Le « au même titre que » disparaît.

## C044 — TOO_STRONG — geste : REMOVE

Locator : `sections[3].paragraphs[0]`.

Passage retiré : « ce qui explique en retour qu'ils voisinent dans les mêmes listes avec ce
qu'une organisation compte ».

Raison du gate : `SUP-6d03b0f2ad54a56e` montre seulement que les états et les effets
organisationnels figurent dans une même phrase de la p. 2. Il n'autorise pas le lien explicatif,
qui reposait sur le statut de mesure partagé retiré en C043. Une simple modalisation
(« on peut y voir… ») aurait laissé subsister une causalité non documentée : le membre de phrase
est donc supprimé plutôt qu'affaibli. La cohabitation des deux registres dans une seule liste
reste dite là où elle est soutenue, en `sections[1].paragraphs[1]`.

## Frontière découverte

Deux frontières documentaires apparaissent, consignées ici et non dans le texte lecteur :

1. Le dossier cite « internal motivation » sans jamais la définir ; tout énoncé sur ce que
   « interne » veut dire exige une pièce qui n'est pas ouverte.
2. Le dossier établit que le JDS mesure les trois états ; il n'établit pas l'étendue de ce que
   l'instrument mesure par ailleurs.

`limits` n'a pas été modifié : le champ est rendu au lecteur sous « Ce que les sources ne
permettent pas d'établir » (PROTOCOLE §5) et compte déjà ses quatre paragraphes ; y ajouter une
entrée aurait introduit du texte lecteur non vérifié dans le même cycle. La frontière est donc
laissée ici, à l'usage des agents.

## Contrôle

`npm run corpus:deepen -- --check --only=trois-etats-psychologiques-critiques`

> 1 approfondissement(s) contrôlé(s), 1695 mots. Rien projeté.

PASS. Le texte reste dans la fourchette de volume (1 300 à 1 700 mots).

Aucune auto-validation : le nouveau fact-check doit être relancé depuis `PREPARE`.

---

# Deuxième boucle de correction FACTCHECK_FAIL

Gate relu : `corpus/deepening-audits/work/trois-etats-psychologiques-critiques/factcheck-gate.json`
(verdict `FACTCHECK_FAIL`, 70 claims, 69 SUPPORTED, 1 échec, aucune `structural_errors`).

SHA de la version fautive : `45e86271e8234d334abd6c3aff6b21ecfa19b868b4296529a0fa3f00acaa189a`.

Les trois corrections de la première boucle ont tenu : C025, C043 et C044 ne reparaissent pas
dans les échecs. Un seul claim reste à traiter, et lui seul a été touché. Les 69 autres claims
ont passé la vérification sur ce SHA exact : aucune retouche d'opportunité n'a été faite
ailleurs dans le fichier, ni dans `lead`, ni dans `limits`, ni dans les autres sections.

## C022 — UNSUPPORTED — geste : REMOVE

Locator : `sections[1].paragraphs[0]`, offsets 62-107.

Avant :

> Ces trois états commandent, dans le texte, une série d’effets qui n’ont pas l’habitude de
> voyager ensemble. La page 2 les énumère : …

Après :

> Ces trois états commandent, dans le texte, une série d’effets. La page 2 les énumère : …

Passage retiré, mot pour mot : « qui n’ont pas l’habitude de voyager ensemble. »

Raison du gate : aucun support fourni ; affirmation empirique générale sur la rareté de la
co-occurrence de ces effets hors du cadre du rapport, énoncée à l'indicatif et non sur un mode
hypothétique.

Vérification faite avant le geste. Le support unique du paragraphe,
`SUP-6d03b0f2ad54a56e`, porte l'énumération de la p. 2 (« high internal motivation, high work
satisfaction, high quality performance, and low absenteeism and turnover ») et le fait que le
rapport la rattache aux trois états. Il ne porte rien sur la fréquence avec laquelle ces cinq
effets se rencontreraient ensemble ailleurs. Une telle régularité supposerait une littérature
empirique extérieure au rapport : elle n'est ni dans `corpus/validated/`, ni dans une source
ouverte du dossier. Aucune réattribution n'était donc possible, et aucune n'a été cherchée.

Pourquoi REMOVE plutôt que NARROW. L'incise est un commentaire de connaissance générale greffé
sur l'annonce de la liste ; elle n'est pas un maillon du raisonnement de la section. Ce que la
section doit faire comprendre — que la liste mêle registre vécu et registre organisationnel —
est porté par le paragraphe suivant, qui est soutenu et reste intact. Une atténuation du type
« que l'on ne voit pas souvent réunis » aurait conservé la même affirmation empirique sous une
forme plus floue, donc invérifiable plutôt que vérifiée : le gate l'aurait légitimement reprise.
L'incise est retirée sèchement, sans formule de remplacement.

Coût pédagogique du retrait : nul sur le delta du paragraphe. Son travail est d'annoncer et de
citer l'énumération de la p. 2 ; il le fait entièrement sans l'incise. La phrase tronquée
coïncide exactement avec le claim C021, déjà `SUPPORTED`, augmenté de son point final.

Rien d'autre n'a été ajouté en compensation. Le texte perd 7 mots : 1 695 → 1 688.

## Frontière découverte

Une frontière documentaire s'ajoute aux deux consignées plus haut, et reste ici, à l'usage des
agents :

3. Le dossier établit ce que le rapport fait dépendre des trois états. Il n'établit rien sur la
   fréquence empirique de ces effets hors du cadre du rapport. Tout énoncé comparatif du type
   « rarement réunis », « habituellement dissociés » exige une littérature qui n'est pas ouverte.

`limits` n'a de nouveau pas été modifié : le champ est rendu au lecteur (PROTOCOLE §5), et y
écrire une entrée dans le cycle même où l'on corrige un claim fautif introduirait du texte
lecteur non vérifié.

## Contrôle

`npm run corpus:deepen -- --check --only=trois-etats-psychologiques-critiques`

> 1 approfondissement(s) contrôlé(s), 1688 mots. Rien projeté.

PASS. Le texte reste dans la fourchette de volume (1 300 à 1 700 mots).

Le SHA `45e86271…` est désormais invalide. Aucune auto-validation, aucun `FACTCHECK_PASS`
auto-déclaré : le cycle doit repartir de `PREPARE`.
