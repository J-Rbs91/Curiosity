concept : effet-de-cadrage
verdict : ACCEPT
factcheck_sha_match : PASS
baseline_blob_sha : f81139664a9fa68051fd5b5adaff9b2ea5c11f16

GATE PRÉALABLE
- SHA-256 actuel de corpus/deepenings/effet-de-cadrage.json :
  f616cbc16f826d4e9bafc822dc9de7cdd7e4f4f32b447badc04d75ad75a4e102
- factcheck-gate.json : verdict FACTCHECK_PASS, candidate_sha256 identique, 68/68 claims
  SUPPORTED, mapping_incomplete vide, structural_errors vide.
- Baseline : `git cat-file -t` = blob, JSON d'approfondissement lisible, conceptId
  « effet-de-cadrage » (clé `conceptId` du schéma). Baseline valide.
- `npm run corpus:deepen -- --check --only=effet-de-cadrage` : passe, rien projeté.
- Historique des boucles : loop1 FAIL (C042, généralisation McNeil), loop2 FAIL (C001, C003, C004
  = lead[0] avec devis et « seconde certitude » ; C057 = conséquence catégorique sur les
  incitations ; C062 = Goffman « voyage en sciences sociales »). Tous retirés ou bornés dans la
  version courante (S4.P2 restreint au cas McNeil, S4.P4 au conditionnel « a moins de chances »,
  S5.P2 réduit, lead[0] ramené à une seule certitude).

Texte lecteur : 1 262 mots avant, 1 323 après (+4,8 % ; le compte rendu donnait 1 370 avant
les coupes des boucles). Dans la fourchette 1 300-1 700 ; croissance financée par
SUP-07e1b0dac1bc5b35 et entièrement couverte par le gate.

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          2/4     4/4     contresens « indéfendables » (S2.P3) corrigé en « aucune norme du bon choix ne les justifie » ; description Müller-Lyer et glose p. 187 (ancienne S4.P1-P2) supprimées ; tous les folios contestés (171/173, 174/175) retirés ; S5.P2 ne restreint plus le cadrage à la présentation ; « reprise plutôt qu'inventée » retiré ; FACTCHECK_PASS 68/68
progressivité pédagogique      2/4     3/4     lead[1] ne présuppose plus la comparaison (la citation la pose) ; S1 chiffre → S2 norme + condition → S3 mécanisme (nouveau palier) → S4 persistance + pourquoi pas de forme canonique → S5 généalogie + tension ; réserve : lead amaigri (102 mots) et S3.P1 dense
densité / non-redondance       2/4     3/4     redondances lead[1]/S3.P1, S3.P2/S4.P2, S3.P3/S4.P3 levées ; phrase de l'index supprimée ; recouvrement résiduel volontaire lead[1] (annonce) / S4.P1 (aveu détaillé)
clarté                         3/4     3/4     gain : comparaison introduite avant d'être commentée, plus de folios ; perte : ouverture moins concrète (devis supprimé), S3.P1 aligne « actes, éventualités, issues », « états de richesse », concave/convexe sans relier concavité et prudence
profondeur explicative         1/4     3/4     mécanisme désormais présent : deux temps, point de référence, « mere labeling of outcomes » appliqué à l'épidémie (S3.P2), rôle du décideur (S3.P3), absence de représentation canonique pour le choix (S4.P3), incitations vs perception (S4.P4)
valeur des exemples            2/4     3/4     600/200/400 rend l'identité vérifiable par le lecteur (S1.P1) ; cas McNeil (l'expertise n'atténue pas) ; problème de dominance (73 %) remplace une définition de mémoire ; cercle blanc ; perte du devis du lead
limites / nuances              3/4     4/4     S2.P2 (identité des conséquences), S2.P3 (sens exact de « normative grounds »), S3.P3 (cadre dépend aussi du décideur), S4.P4 marquée « On peut comprendre ainsi » et conditionnelle, S5.P2 anti-contresens Goffman
pouvoir d'ouverture            2/4     3/4     fin sur « the dream … appears unrealizable » et « we have not provided a formal theory of framing » : tension réelle, sourcée, plutôt qu'une recette (ancienne S4.P3 supprimée)

TEST DU DELTA (nouvelle version)
- lead[0] : la décision est censée porter sur ce qui arrive, pas sur la phrase ; c'est ce que les auteurs ébranlent.
- lead[1] : deux énoncés d'un même problème renversent les choix, l'explication ne défait pas le renversement ; comparaison aux illusions posée par la citation.
- S1.P1 : problème chiffré, identité des issues vérifiable par le lecteur.
- S1.P2 : renversement 72/28 vs 22/78, « essentially identical », point de départ des 600 morts attendus.
- S2.P1 : nom et énoncé de l'invariance, sa modestie, son caractère tacite.
- S2.P2 : sans identité des conséquences, pas d'effet de cadrage.
- S2.P3 : portée (systématique, dominance aussi), sens de « normative grounds », cas de dominance invisible si décisions séparées.
- S3.P1 : architecture de la théorie des perspectives (deux temps, point de référence, asymétrie).
- S3.P2 : comment l'étiquette déplace le point de référence, appliqué à l'épidémie.
- S3.P3 : le cadre dépend aussi des normes, habitudes et attentes du décideur.
- S4.P1 : l'aveu des répondants (persistance malgré l'explication et le désir de cohérence).
- S4.P2 : l'expertise n'atténue pas l'effet (cas McNeil).
- S4.P3 : pourquoi l'esprit ne normalise pas : la machinerie canonique ne s'applique pas au choix.
- S4.P4 : différence illusion / erreur de calcul ; les incitations visent l'inattention, pas la perception.
- S5.P1 : généalogie déclarée (Allais, Savage, Raiffa) et part des auteurs.
- S5.P2 : distinction avec Goffman.
- S5.P3 : impossibilité d'une théorie à la fois descriptive et normative ; pas de théorie formelle.
Aucune séquence de trois paragraphes au delta identique ; aucune section principalement redondante.
`limits` ne remonte nulle part dans le texte lecteur (aucune mention de notice, de 1981/1986, de
folios, de figures non examinées).

défauts initiaux corrigés :
- S2.P3 : contresens « personne … ne se porte à sa défense » et « toujours dans le même sens » supprimés ; sens normatif rendu exactement ; dominance montrée par un cas au lieu d'une définition de mémoire.
- Ancienne S4 (Müller-Lyer décrit sans support, thèse « la connaissance n'a aucun effet sur l'apparence », procédure « écrire dans les deux sens ») supprimée ; la comparaison reçoit un contenu financé (représentations canoniques, S4.P3).
- Folios en conflit entre couches retirés du texte lecteur.
- Mécanisme absent : nouvelle S3 financée par SUP-07e1b0dac1bc5b35.
- lead[1] : saut (comparaison présupposée) corrigé, scène des répondants réservée à S4.P1.
- Redondances lead[1]/S3.P1, S3.P2/S4.P2, S3.P3/S4.P3 résolues.
- S2.P2 : ordre d'exposition non appuyé retiré.
- S5.P1 « reprise plutôt qu'inventée » et S5.P2 « objet étroit … présentation » corrigés.
- Recette correctrice (ancienne S3.P3) remplacée par une conséquence conditionnelle fondée sur la phrase des auteurs sur les incitations.

régressions détectées :
- Lead : la vignette du devis et l'articulation « deux certitudes, c'est la seconde qui est visée » ont disparu (retirées en boucle 2 pour C001/C003/C004). L'audit tenait lead[0] pour exemplaire. L'ouverture est plus abstraite et le lead tombe à 102 mots, sous la fourchette de 120 à 200 de PROTOCOLE §5 (le contrôle mécanique ne l'impose pas). Une vignette posée explicitement (« Imaginons deux devis… ») aurait probablement passé le gate. Régression réelle mais circonscrite : lead[1] et S1.P1 rendent la situation concrète dès le deuxième paragraphe.
- S2.P1 perd « elle ne demande à personne de calculer juste, ni de connaître les probabilités, ni d'être indifférent au risque », remplacé par la formule plus abstraite « elle ne dit pas ce qu'il faut préférer ». Perte mineure.
- S3.P1 : vocabulaire technique en rafale, et le lien entre concavité et prudence n'est pas explicité (S3.P2 donne directement le comportement). Petit saut, sans erreur.
Aucune de ces régressions n'introduit de fragilité documentaire ni ne réduit la profondeur ; elles ne compensent pas les gains.

raison de la décision : le gate est valide sur le SHA exact (FACTCHECK_PASS 68/68). La réécriture
supprime la faute documentaire critique (S2.P3), la section non financée (ancienne S4), les
folios contestés et les trois redondances. Elle ajoute surtout le palier explicatif qui manquait
(mécanisme du point de référence, absence de forme canonique pour le choix), financé par la
lecture intégrale. La progression d'ensemble et la profondeur sont nettement meilleures. La
perte du devis dans le lead est la seule régression notable : elle rend l'ouverture moins
concrète et la fait passer sous la fourchette, sans casser la compréhension. Améliorer le lead
en réintroduisant une vignette explicitement hypothétique pourra être un geste de cycle
ultérieur ; il ne justifie pas de restaurer une version qui portait un contresens. ACCEPT.
