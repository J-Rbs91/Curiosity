concept : objectif-specifique-et-difficile
verdict : ACCEPT
factcheck_sha_match : PASS

GATE
sha-256 calcule du fichier courant : 4db20c49b11e479fc3ceec0edb49aad7aecb5f1ee13d11ddba98c26a9309929e
candidate_sha256 du gate           : 4db20c49b11e479fc3ceec0edb49aad7aecb5f1ee13d11ddba98c26a9309929e
verdict du gate : FACTCHECK_PASS, 48 claims, 48 SUPPORTED, 0 failed, 0 erreur structurelle.
Identite exacte : le texte revu ici est bien celui qui porte le PASS.
Controle mecanique rejoue : npm run corpus:deepen -- --check --only=objectif-specifique-et-difficile
-> « 1 approfondissement(s) controle(s), 1689 mots. Rien projete. »

VOLUME : LE POINT A TRANCHER

La premisse transmise (1 501 -> 1 528 mots lecteur) est perimee. Elle decrit l'etat
intermediaire decrit par rewrite.md, avant les corrections de factcheck-fixes.md, qui ont
ensuite retire environ soixante mots (C032, C047, C050, C052, C053, C054).

Comptage effectif sur le fichier porteur du SHA, meme methode que l'audit initial
(qui retrouve bien 1 501 sur HEAD) :

              avant    apres
lead            200      188
sections      1 301    1 281
lecteur       1 501    1 469   (-32)
limits          194      220   (+26)
total         1 695    1 689

Le texte lecteur n'a donc pas augmente : il a diminue de 32 mots. La question posee est sans
objet, et sa reponse va dans le bon sens. Ces 32 mots de moins portent en outre trois apports
substantiels nouveaux (le terme battu nomme « objectif specifique facile », la distinction des
deux chiffrages p. 18 / p. 59, l'argument grammatical de l'Abstract), un paragraphe entier de
collation supprime, et quatre passages sans delta ou trop forts retires. Le gain informationnel
est donc obtenu a longueur decroissante, ce qui est le cas favorable du protocole.

Reserve de forme, mineure et interne : limits passe a 220 mots, au-dessus de la borne
indicative de 100-200 mots de PROTOCOLE.md §5. Le champ n'est pas affiche, le controle
mecanique l'accepte, et le depassement finance une frontiere reelle (le desaccord de pagination
p. 59 / p. 60 entre les notes et le bloc review, jusqu'ici non consigne). Ce n'est pas un motif
de rejet, c'est un point a resserrer au prochain passage.

COMPARAISON
axe                            avant   apres   preuve
fidelite documentaire          3/4     4/4     lead[1] : la description inventee du dispositif
                                               des 110 etudes (« un protocole d'une simplicite
                                               brutale : un groupe recoit une cible chiffree,
                                               l'autre un encouragement ») est remplacee par ce
                                               que attribution_note et la note « REVUE ET NON
                                               EXPERIENCE » portent reellement (« Ils n'ajoutent
                                               pas une experience de plus »). « dans des
                                               entreprises » redevient « sur le terrain »
                                               (« laboratory and field studies »). S1.P2 nomme
                                               desormais « un objectif specifique facile »,
                                               exactement la correction que review.notes[4]
                                               reclamait. S3.P1 et S3.P3 passent de « la page 59
                                               s'en explique » a « les auteurs s'en expliquent »
                                               et « la meme conclusion », ce qui neutralise la
                                               seule localisation contestee a l'interieur de
                                               l'enregistrement. 48/48 SUPPORTED.
progressivite pedagogique      3/4     4/4     S1 a S4 conservees dans leur ordre et leur role.
                                               S5 cesse d'etre un palier plat : P2 porte
                                               maintenant un argument neuf et plus difficile que
                                               tout ce qui precede (l'enonce large est une
                                               subordonnee de « A review [...] found that: »),
                                               qui ne pouvait etre compris qu'apres S2.P3 sur le
                                               regime de preuve. La montee reprend jusqu'au
                                               dernier paragraphe.
densite / non-redondance       2/4     4/4     Les trois foyers identifies par l'audit sont
                                               elimines : S5.P2 ne reprend plus la distinction
                                               « no assigned goals » / « aucun objectif » de
                                               S1.P3 (le mot « assigne » ne reparait nulle part
                                               en S5) ; S5.P3 de collation (reproduction,
                                               quatre-vingt-quatorze feuillets, foliotation
                                               1-90) est supprime en entier ; la phrase
                                               d'annonce de S3.P2 (« C'est une conclusion
                                               inconfortable... ») et l'appreciation de S2.P2
                                               (« ce qui est rare et vaut d'etre note ») sont
                                               retirees. Les 16 paragraphes lecteur portent
                                               chacun un delta identifiable en une phrase.
                                               Aucune sequence de trois paragraphes a delta
                                               substantiellement identique. Aucune section dont
                                               le role principal soit de repeter une section
                                               anterieure.
clarte                         4/4     4/4     Maintenue. L'argument nouveau de S5.P2 est
                                               conduit sans terme de grammaire savant : « n'y
                                               est pas une phrase autonome : elle est la suite
                                               de... ». Toutes les citations anglaises restent
                                               glosees en francais immediatement apres.
profondeur explicative         3/4     3/4     Non degradee, et legerement mieux fondee. Gain :
                                               S2.P3 explique desormais que p. 18 et p. 59 ne
                                               comptent pas la meme chose (etudes ayant trouve
                                               mieux avec une cible precise et difficile, contre
                                               agregat des effets positifs ou partiellement
                                               positifs), la ou l'ancienne version fondait les
                                               deux chiffrages. Perte apparente : la formule
                                               « chiffrer sans relever la barre revient a peu
                                               pres a ne rien chiffrer du tout » disparait, mais
                                               c'etait une equivalence que la seule hierarchie
                                               de la p. 59 n'etablit pas, et que S3.P1
                                               contredisait a demi. Le plafond documentaire sur
                                               le mecanisme reste entier et reste declare.
valeur des exemples            3/4     3/4     Inchange. « Trente dossiers avant vendredi »
                                               ouvre le texte et retravaille en S1.P1 sur
                                               l'ecart dix / trente quand on en traite douze.
                                               Toujours aucun exemple pour l'objectif modere de
                                               S3, qui en tirerait profit. Rien n'a ete ajoute
                                               de decoratif.
limites / nuances              4/4     4/4     Toutes les nuances utiles sont conservees a leur
                                               place : S2.P3 juste apres le chiffre, S3.P1 juste
                                               apres l'enumeration binaire, S4 juste avant qu'on
                                               puisse croire 1980 date de naissance. S3.P3 est
                                               en outre bornee a ce que la premisse autorise
                                               (« la phrase prononcee ne decide pas a elle seule
                                               de l'objectif que la personne tiendra pour le
                                               sien »), au lieu de la causalite exclusive de
                                               l'ancienne version.
pouvoir d'ouverture            2/4     3/4     Le texte ne se termine plus sur la foliotation
                                               d'un exemplaire numerise mais sur une raison
                                               d'ouvrir le volume : « une conclusion ne demontre
                                               rien, elle recapitule, et ce qu'elle recapitule
                                               ici tient dans les pages qui la precedent ».
                                               Pas 4/4 : l'ouverture la plus forte esperee par
                                               l'audit (d'ou vient la formule qui circule) a ete
                                               interdite a juste titre par le fact-check, ni
                                               l'article de 1981 ni l'ouvrage de 1990 n'ayant ete
                                               ouverts. La retenue est correcte ; l'ouverture
                                               restante est reelle mais plus etroite.

defauts initiaux corriges :
- lead[1], defaut majeur le mieux place pour nuire : la description du dispositif experimental
  des 110 etudes, sans aucun support autorise, est supprimee et remplacee par le statut de revue,
  qui est documente et qui prepare en outre S2.P3. Correction complete.
- S5.P3 : paragraphe sans delta d'apprentissage, entierement supprime, remplace par une
  ouverture veritable. Correction complete.
- S5.P2 : redondance avec S1.P3 supprimee, remplacee par l'argument grammatical de la note
  « CITATION DE REPLI ECARTEE », qui etait la matiere sous-exploitee la plus forte du dossier.
  Correction complete, et c'est un gain net et non un simple retrait.
- S3.P2 : phrase d'annonce d'importance sans delta, supprimee. Correction complete.
- Matiere sous-exploitee signalee par l'audit et desormais exploitee : le terme battu nomme
  « objectif specifique facile » (S1.P2), et les deux chiffrages distincts p. 18 / p. 59 (S2.P3).
- Localisation contestee p. 59 / p. 60 : le texte lecteur n'affirme plus que ce sur quoi les
  notes et le bloc review concordent, et le desaccord est consigne dans limits.
Les quatre defauts majeurs du diagnostic initial sont donc tous supprimes, aucun n'a ete
simplement deplace.

regressions detectees :
- Aucune regression conceptuelle. Rien de solide n'a ete perdu : les deux verbatim de la p. 18
  et de la p. 59, la genealogie de S4, le statut du resultat en S1.P3 et l'artefact
  methodologique de S3.P3 sont intacts.
- Perte mineure assumee : l'ancienne phrase de S5.P2 opposant explicitement « do best » a
  « do your best » disparait, mais les deux formes restent juxtaposees en S5.P1 sous un titre
  qui annonce trois ecritures, et l'argument qui les remplace est plus fort.
- Perte mineure assumee : S3.P2 tombe a deux phrases apres retrait de l'apposition sur les
  organisations, qui generalisait sans support (C032). Son delta propre subsiste (le compromis
  precis mais raisonnable tombe dans la zone sans garantie) mais le paragraphe est le plus mince
  du texte. Point de vigilance, pas regression.
- Point de vigilance, non regressif : le statut de revue du rapport apparait trois fois
  (lead[1], S2.P3, S5.P2) et le fragment « A review of both laboratory and field studies » est
  cite deux fois. Les trois occurrences font un travail distinct (poser le regime de preuve,
  lire le chiffre, montrer ce que la citation courante efface) et ne sont jamais consecutives.
  L'ancienne version portait la meme recurrence, aggravee d'une quatrieme occurrence en S2.P3
  (« il n'apporte pas une preuve de plus »), desormais supprimee : le motif est moins repete
  qu'avant.
- Aucune remontee du champ interne limits dans le texte lecteur. La derniere phrase de S5.P3
  est une limite conceptuelle (une conclusion recapitule, le pourquoi est ailleurs), non un
  releve de lacune documentaire : elle ne nomme aucune source non consultee, n'emploie aucune
  formule de recherche infructueuse, et PROTOCOLE.md §5 autorise explicitement ce deplacement.
  Aucun terme de dispositif, aucun tiret cadratin, aucun aveu de fabrication.

raison de la decision : ACCEPT. Le gate est valide sur le SHA exact, les quatre defauts majeurs
du diagnostic sont reellement supprimes et non deplaces, et les deux suppressions les plus
lourdes (la redondance de S5.P2, la collation de S5.P3) sont compensees par deux apports neufs
et documentes plutot que par du vide. La progression est strictement meilleure : S5 redevient un
palier au lieu d'un retour en arriere, et le texte se termine sur une raison d'ouvrir le volume.
La profondeur n'est pas degradee, et les deux phrases retirees pour cause de force excessive
etaient effectivement au-dela de ce que la p. 59 etablit. Enfin le gain est obtenu a longueur
decroissante (1 501 -> 1 469 mots lecteur) : il n'y a pas d'augmentation de longueur a justifier,
et l'augmentation informationnelle est reelle. Seules reserves, sans effet sur le verdict :
limits depasse de vingt mots la borne indicative de 200, S3.P2 est devenu tres mince, et un
exemple manque toujours pour l'objectif modere.
