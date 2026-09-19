concept : regulation-controle-autonome
verdict : ACCEPT
factcheck_sha_match : PASS

GATE
sha256 courant de corpus/deepenings/regulation-controle-autonome.json :
fc44fd2c3476717a583504ab3ef2e4ec4e4cb771bfbc30430dce51286ba57968
candidate_sha256 de factcheck-gate.json : identique. verdict FACTCHECK_PASS, 66/66 claims
supported, 0 failed, 0 erreur structurelle. Gate valide, revue pedagogique autorisee.
Version anterieure comparee : git show 4ae660c^ (sha 9f07a4a0...).
Controle mecanique refait ici : `npm run corpus:deepen -- --check --only=...` sortie 0,
1787 mots, deux avertissements de citation non bloquants (voir reserves).

VERIFICATION DEMANDEE : la regulation conjointe

L'affirmation de la reecriture est exacte, et elle est etablie par le dossier lui-meme.
- evidence.primary-reading.json, evidence.mechanism[15], intertitre imprime p. 15-16
  « Regulation conjointe et regulation de controle » : « Le produit de cette negociation (au
  sens large du terme) est donc une regulation conjointe [...] On ne saurait confondre cette
  regulation conjointe avec ce que nous avons appele la regulation autonome : elle est de
  maniere bien caracterisee une regulation de controle, puisqu'elle vient de l'exterieur donner
  des regles aux unites concretes de travail. » La citation du nouveau S5.P2 est verbatim exacte.
- common_misinterpretations[2] range explicitement la lecture « troisieme terme ne de la
  rencontre » parmi les mecomprehensions caracterisees, et nomme le produit de la rencontre :
  « une regulation de compromis » (p. 15), « les regulations "reelles" [...] des compromis
  (souvent assez instables) entre autonomie et controle » (p. 17).
- validation_input/confidence_flags[7] repete le point d'attention dans les memes termes.
- primary_sources[1] (1979, full-text, p. 371 relue sur l'image) : zero occurrence de la racine
  « autonom- » sur dix pages, definition par la source des regles, paradigme de la convention
  collective. La chronologie « neuf ans plus tot » et « ni la regulation de controle ni la
  regulation autonome n'apparaissent encore » sont exactes.

La version anterieure ecrivait : « Le mot conjointe suggere que le resultat qui compte n'est ni
la regulation de controle seule, ni la regulation autonome seule, mais ce que leur rencontre
produit ensemble », puis, au present assertif, que le conflit « est la condition meme par
laquelle une regulation conjointe peut se former ». C'etait bien le contresens que le dossier
designe. La reecriture retire une erreur, elle n'en introduit pas.

COMPARAISON
axe                            avant   apres   preuve
fidelite documentaire          2/4     4/4     contresens conjointe supprime et remplace par le
                                               verbatim p. 16 ; mecanisme « pouvoir par
                                               l'incertitude » (0 occurrence de « zones
                                               d'incertitude » dans l'article) supprime ;
                                               « la regulation autonome n'a que la solidarite du
                                               groupe », contredit par la p. 10, supprime ;
                                               limits[2] qui declarait faussement 1979 accessible
                                               « par son seul titre » corrige (1979 est full-text).
progressivite pedagogique      2/4     4/4     le cas fictif remonte de S5 a S4 et instancie S1.P3
                                               au lieu de rejouer lead[0] ; S5 devient le palier
                                               le plus eleve (renversement contre-intuitif) au
                                               lieu d'une redescente ; aucune notion mobilisee
                                               avant d'avoir ete construite.
densite / non-redondance       2/4     4/4     les trois paragraphes sans delta distinct de
                                               l'audit (S3.P1 organigramme, S4.P2, S5.P1) sont
                                               supprimes ou refondes ; les trois ouvertures
                                               redondantes (S2.P2, S3.P3, S5.P2) sont reecrites ;
                                               les deux idees compressees en demi-phrase
                                               (denaturation par integration, reconstitution apres
                                               interdiction) occupent chacune un paragraphe.
                                               15 paragraphes, 15 deltas distincts, aucune sequence
                                               de trois a delta identique.
clarte                         4/4     4/4     entree conservee mot pour mot ; « regulation »
                                               explique avant d'etre qualifie ; les deux pieges
                                               lexicaux (« controle » n'est pas la verification,
                                               « autonome » n'est pas la liberte) sont desormais
                                               desamorces au lieu d'etre laisses au lecteur.
profondeur explicative         3/4     4/4     l'enjeu du conflit est nomme (« bien les regles du
                                               jeu », p. 11) au lieu d'un mecanisme emprunte ;
                                               le refus du management participatif (p. 12) explique
                                               pourquoi la bonne volonte ne suffit pas ; le
                                               perimetre (p. 11-12) et son exception unique (p. 5)
                                               bornent le schema.
valeur des exemples            2/4     4/4     le cas ne demontre plus que l'equipe s'ecarte de la
                                               consigne (deja acquis) mais la forme d'existence de
                                               la regle : enseignee, imposee, dissimulee ; puis
                                               trois issues dont aucune ne referme la question.
limites / nuances              3/4     4/4     la restriction de perimetre que l'ancien limits[4]
                                               imposait est enfin dans le texte lecteur (S3.P3) ;
                                               la lecture « regulation = activite » est marquee
                                               comme lecture (« Il ne l'explicite nulle part »).
                                               Reserve : la nuance « elle reste contrainte par ce
                                               qu'elle conteste » disparait, mais sa fonction
                                               anti-contresens est reprise par S1.P3 et S2.P2, et
                                               son cadre (formel / reel) est celui que Reynaud
                                               declare « mal adapte » p. 9.
pouvoir d'ouverture            1/4     4/4     le texte se terminait sur une hypothese inventee ;
                                               il se termine sur le nom reel du produit de la
                                               rencontre, le refus explicite de classer, et un
                                               livre a ouvrir, ecrit du cote du lecteur
                                               (« il faudra l'y lire »), sans recit de recherche.

defauts initiaux corriges :
- S5 mal placee : le cas concret est remonte en S4 et la section la plus neuve ferme le texte.
- Les deux meilleures idees compressees en une demi-phrase occupent un paragraphe entier chacune.
- S3.P1 (organigramme / organisation reelle), substitution de vocabulaire a une intuition deja
  acquise : supprime.
- S4.P2, these sur le conflit affirmee au present a partir d'un titre : supprimee, remplacee par
  ce que les deux articles lus etablissent.
- Texte lecteur qui n'ouvrait sur rien : ouverture reelle en S5.P3.
- En sus, une faute que l'audit ne pouvait pas voir : le contresens sur la regulation conjointe.

regressions detectees :
- aucune regression conceptuelle ni de clarte. Rien de solide dans l'ancienne version n'est perdu :
  les trois elements retires etaient soit redondants, soit non soutenus, soit contredits par la
  source primaire.

reserves (non bloquantes) :
- `limits` passe de 281 mots / 5 paragraphes a 298 mots / 5, au-dela des 100-200 mots et 2-4
  paragraphes vises par PROTOCOLE §5. Champ interne, hors evaluation lecteur, accepte par le
  schema et par le controle ; a resserrer au prochain passage.
- Deux verbatim (p. 10 et p. 16 de l'article de 1988) declenchent l'avertissement non bloquant
  « citations absentes de la fiche ». Verification faite ici chaine par chaine : les deux sont
  exacts dans evidence.primary-reading.json, source `full-text`, relue sur l'image de la page.
  Le troisieme verbatim (p. 12) et le titre de 1979 sont dans l'enregistrement valide.
- Le « Sauf periodes exceptionnelles » de la p. 5 porte, dans l'article, sur la non-identite des
  deux groupes de regles avant la construction du couple ; le texte lecteur en fait l'exception du
  perimetre. Le dossier lui-meme range cette clause en condition d'extinction du mecanisme
  (primary_sources[0].evidence, conditions/disappears_when) et le verifier l'a validee : le
  glissement reste dans ce que le dossier autorise.

raison de la decision : ACCEPT. Le gate est valide et porte sur le SHA exact du fichier examine.
La reecriture corrige au moins trois defauts majeurs du diagnostic (placement du cas, compression
des deux meilleures idees, absence d'ouverture) et, au-dela, une faute documentaire reelle que
j'ai verifiee moi-meme dans la lecture primaire : la regulation conjointe de 1988 n'est pas le
produit de la rencontre des deux regulations, c'est la regle negociee avec les representants,
rangee p. 16 du cote du controle, le produit de la rencontre s'appelant compromis. Le texte gagne
257 mots lecteur, et chacun est un delta : aucun paragraphe ajoute ne paraphrase un acquis, aucune
section ne repete principalement une section anterieure, la progression est plus claire et la
profondeur superieure. L'appui sur une matiere nouvellement visible n'est pas ce qui fonde
l'acceptation : c'est le fait que chaque ajout soit ancre, et que chaque suppression retire soit
une redondance, soit une affirmation que la source contredit.
