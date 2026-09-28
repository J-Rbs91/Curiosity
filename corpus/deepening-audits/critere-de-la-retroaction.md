---
concept_id: critere-de-la-retroaction
deepening_sha256: 29083f8bb2bfc0602f2f6db3c5f3d2594ebc8efe766d4a9187f1d73a3a595222
validated_sha256: 2af4e7f914e71b588ed756e81666c56a88b9354c38ac15d7a350a4c21a00ac8b
protocol_version: 3
audited_at: 2026-09-27T04:27:22Z
initial_verdict: REVISE
result: rewrite_rejected
factcheck_verdict: FACTCHECK_PASS
review_verdict: REJECT
remappings: 0
---

# critere-de-la-retroaction

**Le `FACTCHECK_PASS` de cet en-tête ne porte pas sur le texte en place.** Il porte sur le candidat
`277c278c…`, que la revue a refusé et qui est conservé sous
`work/critere-de-la-retroaction/candidate-rejected-review-53-sur-53.json`. Le texte lecteur est de
nouveau `29083f8b…`, restauré par son SHA de blob `623582dbf638f033caa87a683c490298c470e512` et
vérifié au `sha256sum` — **et c'est le texte que le gate du 26 septembre mesurait à 52 claims
soutenus sur 59**.

Cette carte est donc dans un état que le dépôt n'avait pas encore rencontré : **la version qui
passe le gate n'est pas publiée, et la version publiée est celle dont on connaît les sept refus.**
La conséquence est traitée comme une anomalie de protocole, chantier L de
[`../RESTE-A-FAIRE.md`](../RESTE-A-FAIRE.md).

## Ce que la reprise a fait, et ce qu'elle a obtenu

La reprise prescrite par le rapport du 26 septembre a été exécutée à la lettre, sur le candidat
conservé à 57 sur 58 et non sur le texte publié. Trois gestes, trois lignes de diff :

1. `C038` borné à ce que les appuis portent — « une hiérarchisation des boucles, et un déplacement
   des finalités » au lieu de boucles « emboîtées les unes dans les autres » dont les valeurs de
   référence seraient « déplacées par un niveau supérieur » ;
2. le titre de la même section, qui portait seul le mot « emboîtées » ;
3. le thermostat et le joueur de quilles restitués dans `lead[1]`, au verbe exact de
   `$.reserves[0]` : l'auteur « raisonne sur » ces objets.

Le gate a rendu **`FACTCHECK_PASS`, 53 claims sur 53**, sans un refus sémantique ni une erreur de
structure. Les quatre tours, du texte publié à celui-ci :

| tour | SHA | claims | soutenus | refusés | mots lecteurs |
|---|---|---:|---:|---:|---:|
| 0, texte publié | `29083f8b` | 59 | 52 | **7** | 1 198 |
| 1 | `10e489ee` | 56 | 50 | **6** | 1 158 |
| 2 | `51377815` | 58 | 57 | **1** | 1 081 |
| 3, la reprise | `277c278c` | 53 | **53** | **0** | 1 073 |

**Et le nouveau mapping a cité l'appui que le précédent avait omis.** Le claim sur la liste
d'objets de `lead[1]` porte `$.reserves[0]`, seul appui du pack qui contienne cette énumération :
c'est exactement l'omission qui, au tour 1, avait fabriqué un `UNSUPPORTED` et fait couper deux
exemples vrais. La consigne portée au prompt du mapper et le signal joint au bundle visaient ce
cas ; ils l'ont tenu.

## Pourquoi la revue a refusé, et le motif est juste

Le refus est pédagogique et n'annule aucun verdict du gate. Il tient en une phrase : **la reprise a
amélioré la fidélité documentaire et dégradé la profondeur et la progression.**

- Fidélité documentaire : 2/4 → **4/4**. Deux des cinq défauts majeurs de l'audit sont supprimés,
  dont celui qui interdisait `PASS` — une non-invention établie pour deux termes et étendue à quatre.
- Profondeur : 3/4 → **2/4**. La section 4 tombe de 164 à 91 mots et perd le changement d'échelle
  que l'audit classait deuxième delta du texte. 125 mots retirés au total, tous explicatifs, aucun
  remplacé. Le texte lecteur tombe à 1 073 mots, sous le plancher de 1 100 que `PROTOCOLE.md` fixe
  en prose — le contrôle mécanique, qui borne à 1 000 et compte les titres, ne le voit pas.
- Progression : 3/4 → **2/4**, et le saut est créé par ce cycle, pas hérité. Le bornage de `C038` a
  retiré l'antécédent « emboîtées les unes dans les autres » sur lequel S4.P2 s'appuyait pour dire
  « elles ne se logent pas au même étage ». Le paragraphe parle désormais d'étages qu'aucune phrase
  ne construit. **`rewrite.md` avait signalé ce risque en réserve** ; il s'est réalisé.

Les deux points que la revue avait mandat de vérifier sont tranchés, et sans complaisance :

1. **la restitution est strictement bornée** à `$.reserves[0]` : verbe de l'appui, liste nue, aucun
   fonctionnement attribué, ni le thermocouple ni le professeur ajoutés, le curseur du thermostat
   non rétabli. Aucun dépassement. Effet collatéral relevé : comme la correction du tour 2 avait
   supprimé le seul endroit où le thermostat *travaillait*, la restitution aggrave la promesse non
   tenue du lead plutôt qu'elle ne la répare — cinq objets annoncés, trois qui servent ;
2. **le bornage est juste sur la portée et il a vidé le passage.** Les appuis ne portent que deux
   substantifs, la reprise n'a gardé que ces deux substantifs. Mais « déplacement des finalités »
   est instancié par la fièvre, et « hiérarchisation des boucles » ne l'est par rien : le lecteur ne
   sait plus qu'il y a plus d'une boucle.

Trois des cinq défauts majeurs de l'audit sont intacts au caractère près, et aucune des deux sorties
d'ouverture qu'il avait nommées n'a été employée.

## Reprise

Le mandat est écrit, et il est étroit : **rendre au lecteur ce que le bornage a retiré, à partir de
la matière que l'audit a inventoriée**, sans revenir sur la portée des claims. Dans l'ordre :

1. repartir du candidat `277c278c…`, qui porte le `FACTCHECK_PASS` et les deux corrections de ce
   cycle, et **non** du texte publié ;
2. réinstancier la hiérarchisation des boucles par un cas que les appuis portent, faute de quoi le
   passage borné reste incompréhensible ;
3. reconstruire l'antécédent de S4.P2 ou retirer l'écho « au même étage », qui n'a plus de
   référent ;
4. rendre le changement d'échelle de la section 4, que l'audit classait deuxième delta du texte, et
   remonter au-dessus de 1 100 mots lecteurs **par de la matière du pack**, jamais par du
   remplissage ;
5. traiter les trois défauts majeurs restés intacts, S5.P2 et son raccord, la promesse non tenue de
   S1.P1, et la fin en restriction de périmètre ;
6. relancer depuis `PREPARE`, le SHA changeant à chaque mot.

Ce n'est pas une boucle de correction factuelle de plus : le gate ne demande rien. C'est une
réécriture pédagogique sous contrainte documentaire déjà satisfaite, et c'est la situation la plus
favorable dans laquelle cette carte se soit trouvée.

Les artefacts de ce cycle décrivent `277c278c…`. Une reprise repart de `PREPARE` ; rejoués tels
quels, ils rendraient `FACTCHECK_INVALID`, ce qui est le comportement correct.
