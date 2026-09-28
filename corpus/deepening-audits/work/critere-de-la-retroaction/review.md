concept : critere-de-la-retroaction
verdict : REJECT
factcheck_sha_match : PASS
baseline_blob_sha : 623582dbf638f033caa87a683c490298c470e512

GATE PRÉALABLE

- sha256 actuel de `corpus/deepenings/critere-de-la-retroaction.json` :
  `277c278c669208b898fd46236032003c40f8db6832d74021cf743ae59e94e3f3`
- `factcheck-gate.json` : `verdict: FACTCHECK_PASS`, `candidate_sha256` identique, 53/53
  soutenus, 0 refus, `mapping_incomplete` et `structural_errors` vides.
- blob antérieur : lisible, JSON d'approfondissement, `conceptId` = `critere-de-la-retroaction`,
  sha256 `29083f8bb2bfc0602f2f6db3c5f3d2594ebc8efe766d4a9187f1d73a3a595222`, 1 198 mots lecteurs
  hors titres. Concorde avec l'en-tête du rapport du 26 septembre.

Le gate est valide. Le rejet qui suit est pédagogique, il n'annule aucun verdict du gate.

VOLUME

lead 195 -> 179 mots. Sections : 178/234/165/164/262 -> 175/192/158/91/278.
Texte lecteur 1 198 -> 1 073 mots, soit 125 mots perdus, dont 73 sur la seule section 4.
Le texte passe sous le plancher de 1 100 mots de `PROTOCOLE.md` §5.

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          2/4     4/4     la sur-attribution qui interdisait `PASS` est levée : « Ces quatre termes, il ne les invente pas » devient « Rétroaction et rétroinformation, il ne les invente pas […] La préinformation et la préaction, elles, il les ajoute ». `C038`, `C040`, `C041`, `C034` et le mécanisme du délai, tous TOO_STRONG, sont sortis. Gate 53/53.
progressivité pédagogique      3/4     2/4     S4.P1 annonce « une hiérarchisation des boucles » et ne l'explique plus : rien ne dit au lecteur qu'il y a plusieurs boucles ni quels sont les étages. S4.P2 conserve « elles ne se logent pas au même étage » sans antécédent, alors que `rewrite.md` justifiait expressément de le garder par « S4.P0, qui établit l'emboîtement » (l. 348-350) et signalait déjà l'écho comme réserve (l. 352-355). Le bornage de la reprise a retiré cet antécédent : le saut est créé, pas hérité. Les deux réserves de progression de l'audit (« faire boucle » utilisé avant S3 ; les deux dimensions de S5.P2 après leur usage en S3.P1) sont intactes.
densité / non-redondance       3/4     3/4     gain réel : S2.P3, le paragraphe à delta faible qui annonçait l'importance du délai sans l'expliquer, disparaît, réduit à une clause bornée. Perte compensatoire nulle : S5.P2, que l'audit qualifiait de « largement REDONDANT AVEC lead[1] + S1 + S2 », est inchangé au caractère près, et le raccord prescrit avec « constater et intervenir » de S3.P1 n'a pas été fait. Aucune séquence de trois paragraphes à delta identique, avant comme après.
clarté                         3/4     3/4     S5.P3 gagne en lisibilité, ses quatre termes étant désormais séparés en deux phrases. Mais lead[1] recule du registre opératoire au registre savant : « un moyen de trancher : devant n'importe quelle situation où quelque chose revient vers celui qui a agi, deux questions suffisent » devient « un critère d'identification : deux conditions sans lesquelles il n'y a pas de boucle », dans le passage que le protocole désigne comme le plus important du texte. Et « hiérarchisation des boucles » entre en S4 sans être expliqué.
profondeur explicative         3/4     2/4     quatre mécanismes perdus sans remplacement : le changement d'échelle de S4 (« Une boucle n'est presque jamais seule », les valeurs révisables, puis « tout écart ressemble à un défaut » tant qu'on regarde une boucle seule), que l'audit classait comme le second delta le plus fort du texte et que sa trajectoire cible ordonnait de conserver ; la raison en S1.P2 (« puisqu'elles n'y lisent pas la même chose ») ; l'ancrage concret de la valeur de référence en S3.P2 (« de celui qui pousse le curseur du thermostat ») ; le mécanisme du délai, ramené à « le temps de traitement ne rende pas l'information inutilisable ». Section 4 : 164 -> 91 mots.
valeur des exemples            4/4     3/4     le parachute, l'autocuiseur contre le réservoir et la fièvre sont intacts. Mais les deux orateurs devant la même salle sont affaiblis en « ne donne donc pas forcément le même retour », sans la raison ; et la promesse de lead[1] est désormais tenue pour trois objets sur cinq : le thermostat, dont le curseur était le seul emploi, et le joueur de quilles ne font plus rien nulle part. L'audit signalait cette promesse comme « partiellement non tenue » ; elle l'est maintenant entièrement pour les deux objets restitués.
limites / nuances              3/4     3/4     gain : le lecteur peut enfin distinguer les deux termes que Paquette n'invente pas de ceux qu'il ajoute. Non corrigé : leur statut d'hypothèses de travail, que l'enregistrement validé porte explicitement et que l'audit signalait comme perdu, reste absent. « pas nécessairement en temps réel » et le double sens de rétroaction sont conservés.
pouvoir d'ouverture            2/4     2/4     l'audit écrivait : « la dernière phrase du texte ne peut pas être une restriction de périmètre », et nommait deux sorties disponibles (le reproche d'emprunt dénaturé, l'équivalence tardive du vocabulaire). Aucune n'est employée, et la restriction, jusque-là fondue dans une phrase composée, est maintenant la dernière phrase autonome du texte : « Cette terminologie, il la propose aux sciences de la communication et à elles seules. »

VÉRIFICATION DES DEUX POINTS DEMANDÉS

1. Restitution du thermostat et du joueur de quilles, portée. Conforme, et strictement bornée à
   `$.reserves[0]` (`SUP-421445a4beb428f3`). Le verbe est celui de l'appui (« raisonne sur »),
   les deux objets entrent en liste nue, aucun fonctionnement ne leur est attribué, le
   thermocouple et le professeur devant quelques centaines d'étudiants ne sont pas ajoutés, et le
   curseur du thermostat retiré par `C034` n'est pas rétabli. Aucun dépassement. Effet collatéral
   à noter : bornée comme il faut, la restitution ne rend au lecteur qu'une énumération, et comme
   `C034` a supprimé le seul endroit où le thermostat travaillait, le geste aggrave la promesse
   non tenue du lead au lieu de la réparer.

2. Bornage de `C038`, compréhensibilité. Le bornage est juste sur la portée : les deux appuis ne
   portent que deux substantifs, et la reprise n'a gardé que ces deux substantifs. Mais il a vidé
   le passage. « Déplacement des finalités » est bien instancié par la fièvre à la phrase
   suivante, comme `reprise.md` l'argumente ; « hiérarchisation des boucles » ne l'est par rien,
   et le lecteur ne sait plus qu'il y a plus d'une boucle. Surtout, la reprise a retiré
   l'antécédent sur lequel `rewrite.md` s'appuyait pour conserver l'« étage » de S4.P2. Le
   paragraphe suivant parle donc d'étages qu'aucune phrase ne construit. Ajouté au retrait de
   S4.P2.1-2 par `C040`, la section qui portait le changement d'échelle tombe à 91 mots et à une
   annonce abstraite suivie d'un cas.

défauts initiaux corrigés :
- S5.P3, sur-attribution de la non-invention à quatre termes : corrigée, et le lecteur y gagne une
  distinction qu'il ne pouvait pas faire. C'est la faute qui interdisait `PASS` à l'audit.
- S2.P3, paragraphe à delta faible et documentairement le plus exposé : supprimé, par l'une des
  trois voies que l'audit autorisait explicitement.

défauts initiaux non corrigés :
- S5.P2 redondant, et le raccord avec « constater et intervenir » qui l'aurait rendu neuf : pas
  fait, paragraphe inchangé.
- S1.P1 promet « le premier tri porte sur la nature de ce qui revient » et ne l'énonce toujours
  pas : paragraphe inchangé.
- la fin s'épuise toujours en délimitation de périmètre, et davantage qu'avant.
- le statut d'hypothèses de travail de préinformation et préaction reste perdu pour le lecteur.

régressions détectées :
- saut logique créé en S4 : « au même étage » sans étage construit, « hiérarchisation des
  boucles » sans hiérarchie montrée.
- profondeur baissée par soustraction seule : 125 mots retirés, tous des passages explicatifs,
  aucun remplacé, alors que l'audit avait nommé la matière disponible pour compenser (les trois
  sous-processus, le raccord constater / intervenir, le motif de l'emprunt dénaturé, l'équivalence
  tardive du vocabulaire). Rien de cette matière n'a été employé.
- lead[1] passe du registre opératoire au registre savant dans le passage le plus important du
  texte.
- S1.P2 perd sa raison, S3.P2 perd son ancrage concret.
- texte lecteur sous le plancher de 1 100 mots du protocole.

raison de la décision : REJECT. Le gate est valide et la fidélité documentaire progresse
franchement, de 2/4 à 4/4 : deux des cinq défauts majeurs du diagnostic, dont celui qui
interdisait `PASS`, sont réellement supprimés. Cela satisfait le minimum « au moins un défaut
majeur effectivement supprimé », mais deux exigences d'`ACCEPT` échouent. La profondeur
explicative est dégradée : le changement d'échelle de la section 4, que l'audit classait deuxième
delta du texte et que sa trajectoire cible ordonnait de conserver, a disparu, avec la raison de
S1.P2, l'ancrage de S3.P2 et le mécanisme du délai, et rien n'a pris leur place. La progression
n'est pas aussi claire qu'avant : le bornage de `C038` a supprimé l'antécédent de l'« étage » de
S4.P2, que `rewrite.md` avait expressément conservé sur la foi de cet antécédent, créant un saut
que la version publiée n'avait pas. Les corrections documentaires prises une à une sont
défendables et souvent nécessaires ; ce cycle les a toutes faites et n'a fait aucun des
rebranchements pédagogiques pour lesquels le `REVISE` avait été rendu. Trois des cinq défauts
majeurs sont intacts au caractère près, le texte a perdu 125 mots d'explication et passe sous le
plancher du protocole. C'est exactement la baisse de profondeur obtenue par raccourcissement que
la revue doit refuser. La version antérieure, `623582db…`, doit être restaurée, et la reprise
reconduite avec pour mandat de rendre au lecteur ce que le bornage a retiré, à partir de la
matière que l'audit a inventoriée.

note de méthode : aucun fichier du corpus n'a été modifié ; seul ce compte rendu a été écrit.
