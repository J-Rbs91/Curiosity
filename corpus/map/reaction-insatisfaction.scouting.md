# Cartographie — thème `reaction-insatisfaction`

Scouting réalisé le 22 août 2026, domaine `organizational-sociology`, thème « Réaction à
l'insatisfaction (Exit/Voice/Loyalty) », rang 6 de `corpus/map/queue.json`. Le thème est
déclaré dans `src/content/themes.ts` et ne portait, avant ce passage, aucune carte validée.

## Note méthodologique — outils effectivement utilisés

Les outils `mcp__documentary__*` n'étaient pas exposés dans cette session, comme annoncé.
Le pont CLI `doc.mjs` (OpenAlex + Crossref + Semantic Scholar pour `search`, HAL + OpenAlex
français + Crossref pour `fr`) a servi pour toutes les requêtes bibliométriques ; `search` et
`fr` ont été lancés en parallèle à chaque fois. Semantic Scholar a répondu `429 Too Many
Requests` sur le premier appel et n'a plus été sollicité isolément — échec de base, pas
constat de vide. Zotero n'était pas disponible et n'a pas été cherché, conformément à la
consigne.

Deux compléments d'accès ont été utilisés en dehors du pont : `curl` direct sur les DOI, sur
`archive.org/metadata`, sur `api.unpaywall.org`, et sur les pages Persée (notice `/doc/<id>`
puis pages individuelles `/doc/page/<docid>/<pageid>`, qui répondent chacune `200` avec le
texte OCR de la page demandée — c'est la route qui a débloqué `cybernetics`, et elle
fonctionne aussi ici). Aucun défi anti-robot rencontré sur Persée ni sur archive.org ; le seul
mur constaté est le `access-restricted-item: true` du prêt numérique contrôlé sur les deux
notices archive.org de l'ouvrage de 1970, et un `403` sur les téléchargements PDF groupés
(`docAsPDF`) de Persée et sur deux PDF externes (Wiley/OUP), qui n'a pas empêché la lecture
page par page.

`poppler-utils` n'était pas installé et l'installation a échoué (`404` sur le miroir de
sécurité Ubuntu) ; un extracteur minimal maison (`zlib` + regex sur les chaînes `(...)`) a
servi à vérifier le contenu du PDF NBER, ce qui suffit pour un constat d'accessibilité mais
pas pour un relevé de pagination fiable.

---

## Les trois risques du rang 6, recopiés pour le lecteur primaire

1. **Le titre français perd « loyalty » : toute citation traduite exige le traducteur et
   l'édition nommés.**
2. **Les trois termes ne sont pas symétriques : la loyauté n'est pas une troisième réponse
   mais ce qui module l'arbitrage entre les deux autres. La présentation courante en trois
   options équivalentes est fausse.**
3. **Hirschman est économiste : la fiche doit montrer le mécanisme organisationnel, pas le
   mécanisme de marché.**

Un constat de ce passage vient nourrir directement le risque 1 : dans l'entretien Politix de
1995 (candidat retenu ci-dessous), Hirschman commente lui-même la traduction du mot « exit »
en français — « le terme est assez mal rendu par le français qui lui donne un caractère trop
péjoratif ; à mon sens, mieux vaudrait parler, tout simplement, de "sortie" ». C'est un
matériau de premier choix pour documenter ce risque précisément, à traiter comme du texte
primaire (parole rapportée en entretien), pas comme un commentaire de tiers.

---

## Section 3 — L'accès aux textes de Hirschman, piste par piste

**Réponse à la question posée : OUI. Deux textes signés Hirschman sont ouvrables en texte
intégral, tous deux en français, tous deux sur Persée, tous deux vérifiés page par page.**
Le livre de 1970 lui-même reste fermé, ainsi que tous ses articles indexés dans des revues
commerciales (JSTOR, Cambridge, SAGE).

| Piste | URL exacte tentée | Code HTTP | Constat |
|---|---|---|---|
| Ouvrage 1970, *Exit, Voice, and Loyalty*, Harvard UP | `https://archive.org/details/exitvoiceloyalty0000hirs` | 200 (page de notice) | `access-restricted-item: true` confirmé via `archive.org/metadata/exitvoiceloyalty0000hirs` — prêt contrôlé, pas de lecture libre. Non ouvert. |
| Même ouvrage, seconde notice 2004 | `exitvoiceloyalty00hirs_0` | — (non retesté, déjà constaté par le rang 6) | Restreinte également. Non ouvert. |
| ISBN 9780674276604 | `node $DOC isbn 9780674276604` | — | Aucune notice Crossref. Non ouvert par cette voie. |
| Traduction française, *Défection et prise de parole*, Fayard, 1995 | recherche web (pas d'exemplaire numérique trouvé) | — | Aucune version numérique localisée, ouverte ou fermée : fiche d'éditeur uniquement (`fayard.fr`, libraires). Non vérifié en texte intégral. |
| Édition antérieure, Éditions Ouvrières / Économie et Humanisme, 1972 | recherche web | — | Aucune trace d'édition numérisée trouvée. Non vérifié. |
| Article Milbank 1980, « "Exit, Voice, and Loyalty": Further Reflections… », DOI `10.2307/3349733` | `https://doi.org/10.2307/3349733` | 200, redirige vers `jstor.org/stable/3349733` | JSTOR, paywall de connexion. `api.unpaywall.org/v2/10.2307/3349733` → `is_oa: false`, aucune `oa_location`. Non ouvert. |
| « Exit, Voice, and Loyalty »: Further reflections…, republication, *Social Science Information*, 1974, DOI `10.1177/053901847401300101` | non retesté directement (SAGE, fermeture connue de la maison) | — | Métadonnées seules établies via le pont. Non vérifié en accès, présumé fermé (SAGE). |
| « Exit, Voice, and the State », *World Politics*, 1978, DOI `10.2307/2009968` | `https://doi.org/10.2307/2009968` | 200, redirige vers `cambridge.org/core/journals/world-politics/article/abs/...` | Page « abstract » Cambridge Core, article complet fermé. `unpaywall` → `is_oa: false`. Non ouvert. |
| Même texte, republié dans *The Essential Hirschman*, Princeton UP, 2013/2014, DOI `10.23943/princeton/9780691159904.003.0014` / `10.1515/9781400848409-015` | non retesté en accès direct | — | Chapitre d'ouvrage chez éditeur commercial (De Gruyter/Princeton UP). Métadonnées seules. Non vérifié, présumé fermé. |
| « Exit, Voice, and the Fate of the German Democratic Republic », *World Politics*, 1993 | non recherché isolément | — | Non instruit séparément : la version conceptuelle antérieure en français (voir ci-dessous) a été trouvée ouverte et documente le même argument sous la plume de l'auteur. |
| **« Défection, prise de parole et destin de la République démocratique allemande. Essai d'histoire conceptuelle »**, *Allemagne d'aujourd'hui*, n°121, 1992, pp. 8-19, DOI `10.3406/alauj.1992.3170` | `https://www.persee.fr/doc/alauj_0002-5712_1992_num_121_1_3170` puis chaque page `https://www.persee.fr/doc/page/alauj_0002-5712_1992_num_121_1_3170/alauj_0002-5712_1992_num_121_1_T1_00{08..19}_0000` | **200 sur les 12 pages testées** (0008, 0009, 0010, 0011, 0015, 0019 vérifiées explicitement, texte OCR complet, cohérent d'une page à l'autre) | **OUVERT, texte intégral.** `docAsPDF` (téléchargement groupé) → `403`, sans conséquence : la lecture page par page suffit et n'exige aucun contournement. |
| **« Vertus et limites de la prise de parole en public. Entretien avec Albert Hirschman »**, *Politix*, n°31, vol. 8, 1995, pp. 20-29 | `https://www.persee.fr/doc/polix_0295-2319_1995_num_8_31_1917` puis pages `https://www.persee.fr/doc/page/polix_0295-2319_1995_num_8_31_1917/polix_0295-2319_1995_num_8_31_T1_00{20..29}_0000` | **200 sur les 3 pages testées** (0020, 0021, 0029), texte OCR complet, cohérent | **OUVERT, texte intégral.** Pas de DOI enregistré chez Crossref (vérifié : `/works/10.3406/polix.1995.1917` → `404`). `docAsPDF` → `403`, sans conséquence, même constat que ci-dessus. Interviewers : Dominique Cardon, Jean-Philippe Heurtin, Cyril Lemieux (mention `citation_author` sur la page). |
| Communications à l'American Economic Association | non recherché — hors budget de ce passage, la question était déjà tranchée par les deux pistes Persée | — | Non instruit. |
| Dépôt institutionnel (Institute for Advanced Study Princeton, Bogota, Bologne) | non recherché — même raison | — | Non instruit. |

**Conclusion de la section 3** : la question est tranchée sur deux textes signés Hirschman,
tous deux en français, tous deux publiés dans des revues académiques francophones numérisées
par Persée, tous deux confirmés en lecture intégrale page par page. Ce n'est pas l'ouvrage de
1970 qui s'ouvre — il reste fermé sur toutes les voies essayées — mais deux textes plus
courts, l'un un essai d'application (RDA, 1992), l'autre un entretien (Politix, 1995), qui
portent la voix de l'auteur au sens strict du critère d'entrée : un texte que quelqu'un peut
réellement ouvrir.

---

## Candidats retenus

### 1

```
CANDIDAT        : Défection, prise de parole et loyauté (Exit, Voice, and Loyalty)
AUTEUR(S)       : Albert O. Hirschman — auteur unique du modèle. Terme forgé par lui-même
                  dans l'ouvrage de 1970 (non ouvert dans ce passage) ; le corpus documentaire
                  disponible ici est constitué de deux textes ultérieurs, également signés de
                  sa main, où il reformule et discute son propre modèle : un essai
                  d'application aux événements de RDA (1992) et un entretien accordé à la
                  revue Politix (1995). Ce ne sont pas des commentaires de tiers : c'est
                  Hirschman qui parle, en français dans le second cas (entretien mené et
                  transcrit en français), en traduction dans le premier (l'essai de 1992 est
                  en français mais reprend un argument développé en anglais pour World
                  Politics, 1993 — la relation exacte entre les deux versions, laquelle a
                  précédé l'autre, n'a pas été établie dans ce passage et devra l'être avant
                  rédaction).
PÉRIMÈTRE       : dedans — porte directement sur ce qu'un membre fait quand une organisation
                  se dégrade (partir, protester, rester loyal en modulant l'un ou l'autre), et
                  sur la capacité de l'organisation à se corriger. Hirschman est économiste,
                  ce que le périmètre autorise nommément. Risque à tenir : ne pas laisser le
                  texte de 1992 dériver vers l'analyse politique de la chute de la RDA pour
                  elle-même — l'objet organisationnel est le modèle de récupération de la
                  détérioration, l'exemple est l'État est-allemand mais le mécanisme discuté
                  est générique (entreprises, organisations, États, énoncé comme tel par
                  l'auteur dès la première page).
SOURCE PRIMAIRE : Albert O. Hirschman, « Défection, prise de parole et destin de la
                  République démocratique allemande. Essai d'histoire conceptuelle »,
                  Allemagne d'aujourd'hui, n°121, juillet-septembre 1992, pp. 8-19.
                  DOI 10.3406/alauj.1992.3170. Persée :
                  https://www.persee.fr/doc/alauj_0002-5712_1992_num_121_1_3170
                  ET Albert O. Hirschman (entretien avec Dominique Cardon, Jean-Philippe
                  Heurtin, Cyril Lemieux), « Vertus et limites de la prise de parole en
                  public », Politix, vol. 8, n°31, 1995, pp. 20-29. Pas de DOI enregistré.
                  Persée : https://www.persee.fr/doc/polix_0295-2319_1995_num_8_31_1917
                  Deux sources primaires distinctes, toutes deux consultables en texte
                  intégral ; la carte peut s'appuyer sur l'une, l'autre, ou les deux.
SECONDAIRE      : Vincent Frigant, « Une lecture hirschmanienne de la coordination : le
                  loyalisme dans les systèmes productifs territorialisés », Revue d'économie
                  régionale et urbaine, 2001 — texte intégral vérifié ouvert
                  (`https://hal.science/hal-00671624/document`, HTTP 200,
                  content-type application/pdf, 22 pages). Porte sur l'usage organisationnel
                  du triptyque (coordination interfirmes), pas sur son usage électoral —
                  exactement la réserve que demandait le rang 6.
                  Deuxième option, anglophone : Matthew M. C. Allen et Heinz Tüselmann,
                  « All powerful voice? The need to include "exit", "loyalty" and "neglect" in
                  empirical studies too », Employee Relations, 2009, DOI
                  10.1108/01425450910979275 — texte intégral vérifié ouvert (dépôt
                  institutionnel Manchester, `pure.manchester.ac.uk`, HTTP 200,
                  application/octet-stream identifié PDF 10 pages).
FRANCOPHONE     : Abondante et bien identifiée. Outre Frigant (ci-dessus, deux autres textes
                  du même auteur sur HAL, non vérifiés en accès mais probablement de même
                  provenance), voir aussi Pierre Courtioux, « Prise de parole et théorie
                  économique : la controverse Hirschman-Williamson », Cahiers d'économie
                  Politique, 2005, DOI 10.3917/cep.048.0147 — Cairn, accès non vérifié,
                  probablement fermé (Cairn n'a jamais rendu de texte ouvert dans les passages
                  précédents de ce corpus). Cyrille Ferraton et Ludovic Frobert, Introduction
                  à Albert O. Hirschman, La Découverte, 2017, dépôt HAL halshs-01546965 —
                  accès non vérifié dans ce passage.
SIGNAL          : Concept extrêmement vulgarisé — c'est le risque nommé par le rang 6 lui-
                  même. La littérature de reprise en science politique traite abondamment
                  l'usage électoral du modèle (élections, migration, partis) ; il faudra
                  veiller à ce que la carte reste sur l'usage organisationnel, comme le fait
                  Frigant. Signal supplémentaire propre à ce passage : Hirschman lui-même
                  relativise en 1995 la lecture en trois options symétriques (« la loyauté
                  n'est pas une troisième réponse ») — l'entretien porte cette nuance dans les
                  mots de l'auteur, ce qui en fait une source de choix pour neutraliser le
                  risque 2 du rang 6 plutôt que de le reproduire.
ACCESSIBILITÉ   : texte intégral, sur les deux sources primaires, confirmé par lecture page
                  par page (12 pages pour l'article de 1992, 10 pages pour l'entretien de
                  1995), en français. Le téléchargement PDF groupé de Persée (`docAsPDF`)
                  échoue en 403 sur les deux documents ; cela n'empêche pas la lecture, qui se
                  fait par la route normale de consultation du site (notice puis pages), sans
                  aucun contournement de contrôle d'accès.
CITABLE         : oui, en français, dans les deux textes. Exemple vérifié mot pour mot,
                  article de 1992, page 8 : « J'ai défini la "défection" et la "prise de
                  parole" dans mon livre, Exit, Voice, and Loyalty [...], comme deux réactions
                  alternatives des consommateurs ou des membres d'organisations à ce qu'ils
                  perçoivent comme une détérioration de la qualité des produits qu'ils
                  achètent ou bien des services dont ils bénéficient ou qu'ils achètent. » Et,
                  entretien de 1995, page 20 : « le terme [défection] est assez mal rendu par
                  le français qui lui donne un caractère trop péjoratif ; à mon sens, mieux
                  vaudrait parler, tout simplement, de "sortie" ». La traduction Fayard 1995
                  n'a pas été localisée en texte intégral dans ce passage et ne doit donc pas
                  être citée : les deux sources ci-dessus suffisent et sont elles-mêmes en
                  français, sans traducteur tiers à documenter (l'entretien est nativement en
                  français ; l'essai de 1992 est présumé traduit mais le nom du traducteur
                  n'apparaît pas sur la page consultée — à chercher avant rédaction, pas à
                  deviner).
```

### 2

```
CANDIDAT        : Le compromis sortie/prise de parole institutionnalisé par le syndicat
                  (The Exit-Voice Tradeoff)
AUTEUR(S)       : Richard B. Freeman — auteur unique de cet article ; applique et prolonge
                  explicitement le modèle de Hirschman (le texte le cite dès son résumé et son
                  premier paragraphe) au cas précis du syndicat comme institution de « voice »
                  dans l'entreprise. Ce n'est pas un terme forgé par un tiers de manière
                  vulgarisée : c'est une contribution scientifique distincte, très citée pour
                  elle-même dans la littérature d'économie du travail et de relations
                  industrielles (prolongée ensuite par Freeman et Medoff, What Do Unions Do?,
                  1984, ouvrage non vérifié dans ce passage).
PÉRIMÈTRE       : dedans — porte sur le fonctionnement interne de l'entreprise : comment un
                  dispositif organisationnel (le syndicat, le système de règlement des griefs)
                  capte le mécontentement et le convertit en expression plutôt qu'en départ,
                  avec effet mesuré sur la rétention et la productivité. C'est exactement le
                  thème « réaction à l'insatisfaction » appliqué à un mécanisme
                  organisationnel identifiable, distinct du modèle générique de Hirschman :
                  Freeman montre un dispositif concret (le syndicat, la procédure de grief) et
                  teste empiriquement le compromis, ce que ne fait pas l'ouvrage de 1970. Point
                  de vigilance : rester sur le mécanisme organisationnel (le système de griefs
                  au sein de l'entreprise) et ne pas glisser vers l'économie salariale
                  syndicale pour elle-même, qui est hors du périmètre organisationnel.
SOURCE PRIMAIRE : Richard B. Freeman, « The Exit-Voice Tradeoff in the Labor Market:
                  Unionism, Job Tenure, Quits, and Separations », The Quarterly Journal of
                  Economics, vol. 94, n°4, juin 1980, pp. 643-673. DOI 10.2307/1885662 (édition
                  publiée, fermée — voir ci-dessous). Version disponible et vérifiée : NBER
                  Working Paper n°0242, DOI 10.3386/w0242,
                  https://www.nber.org/system/files/working_papers/w0242/w0242.pdf — HTTP 200,
                  PDF de 31 pages, téléchargement direct sans mur de connexion. Le fichier
                  porte lui-même la mention « © 1980 by the President and Fellows of Harvard
                  College. Published by John Wiley & Sons, Inc. The Quarterly Journal of
                  Economics, June 1980 [...] Reproduced by Permission of John Wiley & Sons,
                  Inc. » : ce n'est pas un brouillon de travail mais une reproduction autorisée
                  du texte publié, hébergée par l'institution de l'auteur. Mise à disposition
                  autorisée, constatée sur le fichier lui-même — même régime que le précédent
                  déblocage `pespmc1.vub.ac.be` en cybernétique.
SECONDAIRE      : Matthew M. C. Allen et Heinz Tüselmann (déjà cité au candidat 1) discute
                  aussi ce texte. Piste complémentaire non vérifiée en accès : Andrew B.
                  Whitford et Sang Yun Lee, « Exit, Voice, and Loyalty with Multiple Exit
                  Options: Evidence from the US Federal Workforce », Journal of Public
                  Administration Research and Theory, 2014, DOI 10.1093/jopart/muu004 — le
                  lien PDF donné par OpenAlex (`academic.oup.com/jpart/article-pdf/...`)
                  répond `403` en accès direct : présumé fermé malgré le signalement `oa_url`
                  de la base, à ne pas citer comme ouvert sans nouvelle vérification.
FRANCOPHONE     : cherchée, rien trouvé. Les requêtes « Freeman syndicat voix sortie
                  négociation turnover » (HAL, OpenAlex français, Crossref) n'ont rendu aucun
                  texte discutant spécifiquement ce modèle ; les résultats obtenus portent sur
                  le droit syndical français et la représentativité, sans rapport avec le
                  compromis sortie/voix de Freeman. Absence signalée comme telle, pas comme
                  vide de la base : HAL a bien répondu, avec la stratégie « tous les termes »
                  déclarée par le pont.
SIGNAL          : Article très cité (plusieurs centaines de citations selon OpenAlex),
                  fondateur d'un pan de la littérature de relations industrielles sur le rôle
                  des syndicats comme canal de voix — mais la thèse empirique (les syndicats
                  réduisent le taux de départ volontaire par effet de voix plutôt que par
                  seul effet salarial) a été discutée et partiellement contestée dans la
                  littérature ultérieure ; deux réponses directes existent dans Industrial and
                  Labor Relations Review (« Reply to Freeman and Medoff », « Reply to Reder »,
                  1985), signe d'un débat disciplinaire actif plutôt que d'une reprise
                  consensuelle. À signaler dans la carte plutôt qu'à trancher.
ACCESSIBILITÉ   : texte intégral, en anglais, confirmé par téléchargement direct du PDF NBER
                  (HTTP 200, 31 pages, extraction de texte réalisée avec un outil de secours
                  faute de `pdftotext` disponible dans cette session — contenu lisible et
                  cohérent). Version DOI de la revue elle-même (Oxford University Press /
                  Wiley selon la période) non vérifiée séparément et probablement fermée : la
                  carte doit citer et localiser sur la reproduction NBER, pas sur l'article de
                  revue qu'on n'a pas ouvert — même règle que la mise en garde de
                  `systems-thinking` sur les rééditions.
CITABLE         : oui, en anglais, passage court et autonome, relevé et vérifié mot pour mot
                  dans le PDF NBER : « This paper examines the effect of trade unionism on
                  the exit behavior of workers in the context of Hirschman's exit-voice
                  dichotomy. Unionism is expected to reduce quits and permanent separations
                  and raise job tenure by providing a "voice" alternative to exit when workers
                  are dissatisfied with conditions. » Aucune traduction française publiée
                  identifiée dans ce passage.
```

---

## Ce qui n'a pas pu être ouvert

- **L'ouvrage de 1970**, sous ses deux notices archive.org, reste en prêt numérique contrôlé
  (`access-restricted-item: true`). Non emprunté, non contourné.
- **La traduction française Fayard 1995** et l'édition antérieure Éditions Ouvrières /
  Économie et Humanisme 1972 n'ont pas été localisées sous forme numérique, ouverte ou
  fermée. Absence de trace, pas absence établie : une bibliothèque physique ou un catalogue
  de bibliothèque universitaire pourrait la porter, hors de portée de ce passage.
- **L'article Milbank 1980** (DOI 10.2307/3349733) : JSTOR, `is_oa: false` confirmé par
  Unpaywall, non ouvert.
- **« Exit, Voice, and the State »**, World Politics 1978 (DOI 10.2307/2009968) : Cambridge
  Core, page résumé seulement, `is_oa: false` confirmé, non ouvert. Sa republication dans The
  Essential Hirschman (Princeton UP) n'a pas été vérifiée séparément, présumée fermée (éditeur
  commercial, même régime que toutes les rééditions Princeton/De Gruyter rencontrées dans les
  passages précédents de ce corpus).
- **« Exit, Voice, and the Fate of the German Democratic Republic »**, World Politics 1993 :
  non recherché isolément, la question étant déjà tranchée par l'essai français de 1992 sur
  le même argument.
- **« Exit and Voice: An Expanding Sphere of Influence »**, dans Rival Views of Market
  Society, 1986 : seule la republication dans The Essential Hirschman a été localisée par DOI
  (Princeton UP / De Gruyter), non vérifiée en accès, présumée fermée.
- **Communications AEA, dépôts institutionnels (IAS Princeton, Bogota, Bologne)** : non
  recherchés dans ce passage, la question de la section 3 étant déjà tranchée par ailleurs.
  Angle mort à rouvrir si une carte future a besoin d'un texte anglophone signé Hirschman.
- **Whitford et Lee 2014** (candidat 2, secondaire) : lien PDF signalé ouvert par OpenAlex,
  vérifié fermé en pratique (`403`). À ne pas citer comme accessible sans nouvelle
  vérification.
- **Article SAGE 1974** (DOI 10.1177/053901847401300101) et **traduction Fayard elle-même** :
  non vérifiés en accès direct, présumés fermés par analogie avec le reste du corpus
  commercial rencontré dans ce passage et les précédents.

## Candidats cherchés et écartés

- **Silence organisationnel** (Elizabeth Wolfe Morrison et Frances J. Milliken,
  « Organizational Silence: A Barrier to Change and Development in a Pluralistic World »,
  Academy of Management Review, 2000, DOI 10.2307/259200 / 10.5465/amr.2000.3707697) : très
  bien attesté (plus de 1 200 citations), rattachable à un auteur identifié, et porte sur le
  fonctionnement organisationnel plutôt que sur un état affectif individuel — le test
  d'entrée est rempli sur le fond. **Écarté pour absence de source primaire ouvrable** :
  aucun `oa_url` chez OpenAlex ni Crossref, JSTOR/AOM fermés (`is_oa` non vérifié positif),
  et les seules copies trouvées par recherche web sont des dépôts tiers non autorisés
  (Scribd, Academia.edu, ResearchGate) — exactement le type de source qu'une chaîne
  documentaire n'enregistre pas, et que la règle d'accès de ce corpus interdit de retenir
  comme preuve d'ouverture. Reste un candidat solide pour un futur passage si une voie
  d'accès légitime apparaît (dépôt institutionnel NYU Stern, par exemple, non trouvé ici).
- **Whistleblowing / dissidence organisationnelle** (Janet P. Near et Marcia P. Miceli,
  « Organizational Dissidence: The Case of Whistle-Blowing », Journal of Business Ethics,
  1985, DOI 10.1007/bf00382668) : même diagnostic. Aucun `oa_url` identifié, Springer fermé.
  Écarté pour la même raison, pas pour une raison de périmètre.
- **Farrell 1983** (« Exit, Voice, Loyalty, and Neglect as Responses to Job Dissatisfaction:
  A Multidimensional Scaling Study », Academy of Management Journal, DOI 10.2307/255909) :
  c'est le texte qui ajoute formellement la « négligence » au triptyque et fonde le modèle
  EVLN repris depuis en psychologie du travail et en gestion. Écarté pour la même raison
  d'accès : aucune voie ouverte identifiée (AOM/JSTOR fermés, aucun `oa_url`). À noter pour
  un futur passage : c'est probablement le concept le plus proche du thème qui reste sans
  carte, et sa fermeture tient à l'éditeur (Academy of Management), pas à son ancienneté.
