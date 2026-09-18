concept : attente-du-poste-aval
mode : FACTCHECK_FIX (boucle 1 sur 2, AUDIT_PROTOCOL.md §9)
gate corrigé : FACTCHECK_FAIL, 55 claims, 47 SUPPORTED, 7 UNSUPPORTED, 1 SOURCE_NOT_CONSULTED,
aucune erreur structurelle. SHA contrôlé : 8989888547040b5961c36583adb6589b5162dd2795e27ca3136c38118cca9928.

PRINCIPE APPLIQUÉ

Correction minimale, aucune affirmation neuve. Aucun claim n'a été « mieux formulé » pour passer :
tout énoncé que les supports résolus n'autorisent pas a été retiré ou ramené au seul fait attesté.
La perte de deltas pédagogiques (le plancher d'attente et son mécanisme, le démontage des quatre
unités, la raison de la validité du comptage) est assumée : le gate est fail-closed.

OPÉRATION PAR CLAIM EN ÉCHEC

C028 — UNSUPPORTED — « cette attente ne tombe jamais à zéro » — REMOVE.
Loi générale sans support. Supprimée. Ce qui reste du paragraphe est le seul constat attesté par la
citation de la page 15 (4 unités d'inactivité pour l'ordre minimal), explicitement borné à l'exemple.

C029 — UNSUPPORTED — « Au premier instant, la seconde machine n'a rien à se mettre sous la dent […]
doit patienter au moins le temps de cette première opération » — REMOVE.
Le support ($.review.notes[6]) ne porte que la définition de x_i et l'identité I_n + Σ b_i ; ni la
contrainte de précédence entre postes, ni la minoration de l'attente initiale. Phrase supprimée.

C031, C032, C033 — UNSUPPORTED — décomposition des quatre unités (2, 1, 1, 0, 0) et ses causes —
REMOVE du paragraphe entier (ancien sections[2].paragraphs[2], 126 mots).
$.notes[11] ne certifie que des totaux : fin à 47, 4 unités d'inactivité, 78 pour l'ordre renversé.
La dérivation attente par attente était déclarée dans `limits` ; la déclaration ne l'autorise pas.
Le paragraphe est retiré en entier, y compris sa phrase de clôture (« une somme d'attentes se
démonte »), qui n'avait plus d'objet une fois la décomposition sortie.

C036 — UNSUPPORTED — « c'est la brièveté de la chaîne qui rend la mesure possible : l'attente du
second poste ne dépend que d'un seul fournisseur, et son plan de charge suffit à tout comptabiliser »
— REMOVE.
Mécanisme explicatif ajouté au-delà de la preuve. Remplacé par un énoncé de portée, non de mécanisme :
« et c'est de ce cas seul que parle tout ce qui précède », qui porte sur ce texte-ci et n'affirme rien
du rapport. Les deux claims voisins du même paragraphe (C034, C035, SUPPORTED) sont conservés mot
pour mot.

C037 — UNSUPPORTED — « Qu'une pièce doive revenir en arrière, ou qu'un troisième poste s'intercale,
et l'attente cesse de se lire sur une seule feuille de temps » — REMOVE.
Limite de validité qu'aucune preuve du dossier n'établit. La section garde sa seconde porte de sortie,
le temps de réglage (C038, C039, SUPPORTED), qui elle est soutenue et suffit au titre de la section.

C047 — SOURCE_NOT_CONSULTED — « Ce qui revient à Bellman […] est donc l'exposition, l'exemple chiffré
et cette autre dérivation qu'il annonce » — NARROW.
$.review.notes[7] déclare NON ATTEINT précisément la part selon laquelle l'exemple chiffré serait
propre à Bellman (texte intégral de Johnson 1954 inaccessible). « l'exemple chiffré » est retiré de
l'énumération ; le reste de la phrase, couvert par $.attribution_note et $.review.notes[5], est
inchangé, de même que C048. Aucune phrase de compensation n'a été ajoutée : le texte lecteur
n'attribue plus l'exemple, il dit seulement que le rapport le donne page 15 (formulation conservée,
déjà SUPPORTED).

FRONTIÈRE INTERNE MISE À JOUR

`limits` passe de 4 à 4 entrées, 190 puis 272 mots, et enregistre les frontières que la correction
vient d'établir :

- entrée 2 : les éléments disponibles ne portent que des totaux (47, 4, 78) ; la décomposition
  attente par attente reste hors du texte lecteur « même déclarée ici » ; seule la soustraction
  78 moins 43 subsiste comme quantité calculée et non citée (claim SUPPORTED).
- entrée 3 : rien n'appuie une loi générale sur un plancher d'attente non nul, ni un énoncé sur le
  retour en arrière ou le troisième poste ; le texte s'en tient au cas à deux postes de la première
  partie du rapport.
- entrée 4 : l'attribution de l'exemple des cinq articles n'est ni vérifiée ni réfutée, Johnson 1954
  étant hors d'atteinte ; le texte lecteur ne la fait pas.

Rien de ce contenu n'est remonté en bloc visible ; aucune des quatre entrées n'existe sous forme de
section ou de paragraphe lecteur.

CONSÉQUENCES PÉDAGOGIQUES ASSUMÉES

- La section « Ce qu'un changement d'ordre peut promettre » passe de trois à deux paragraphes, et son
  second paragraphe se réduit à un constat sur l'exemple. Le plafond de gain (P1, SUPPORTED) reste le
  cœur de la section ; le plancher et son démontage disparaissent.
- La section « Là où le comptage cesse de tenir » garde sa condition d'application et une seule
  sortie, le temps de réglage, au lieu de trois.
- Aucun paragraphe restant ne duplique le delta d'un autre : le retrait n'a créé aucune redondance,
  il a supprimé de la matière non soutenue.

VOLUME

- texte lecteur avant : 1 371 mots, 14 paragraphes (2 + 12), 5 sections.
- texte lecteur après : 1 175 mots, 13 paragraphes (2 + 11), 5 sections.
- `limits` : 190 mots avant, 272 après, 4 entrées dans les deux cas.
- total compté par le script : 1 626 mots avant, 1 492 après.

CONTRÔLE

`npm run corpus:deepen -- --check --only=attente-du-poste-aval` :
« 1 approfondissement(s) contrôlé(s), 1492 mots. Rien projeté. » Aucune erreur, aucun avertissement
de citation non retrouvée (les verbatim anglais conservés sont inchangés).

Toute modification du texte change le SHA : l'ancien pack et l'ancienne vérification sont caducs, le
cycle doit reprendre à PREPARE. Ce compte rendu ne s'auto-valide pas et ne rend ni ACCEPT ni
FACTCHECK_PASS.
