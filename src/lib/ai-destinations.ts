/**
 * Les applications d'IA proposées après « Approfondir ».
 *
 * **Pourquoi une liste, alors que le système en tient déjà une.** La feuille de partage
 * d'Android classe ses cibles par usage : elle propose d'abord Gmail, WhatsApp et un réseau
 * social, et range les applications d'IA derrière « Plus ». Une page web ne peut ni filtrer
 * ni réordonner cette feuille — `navigator.share()` rend la main au système et n'accepte
 * aucun critère. Le bouton annonçait donc une intention — comprendre le concept avec une IA —
 * et ouvrait un écran qui proposait de l'envoyer à quelqu'un. C'est cette contradiction que
 * la liste supprime, et rien d'autre.
 *
 * **Ce qu'elle coûte.** Elle est écrite à la main, donc elle vieillira : une application
 * disparaîtra, une autre manquera. C'est un coût accepté, pas un oubli — et il reste borné
 * parce que la feuille du système demeure accessible juste en dessous, pour tout ce que cette
 * liste ne couvre pas.
 *
 * **Aucune détection.** Savoir ce qui est installé sur l'appareil est hors de portée d'une
 * page web, et les schémas d'application propriétaires échouent en silence quand
 * l'application manque. Ces adresses sont donc de simples liens https : le système les route
 * vers l'application quand elle est installée et revendique le domaine, vers le site sinon.
 * Les deux chemins fonctionnent, et aucun ne suppose une installation.
 *
 * **Aucun prompt dans l'adresse.** Plusieurs de ces services acceptent un paramètre de
 * pré-remplissage, mais le dossier fait 22 000 caractères — bien au-delà de ce qu'une URL
 * transporte sans être tronquée en route, et une troncature silencieuse retirerait les règles
 * documentaires sans que personne ne le voie. Le dossier passe donc par le presse-papiers,
 * qui n'a pas cette limite, et le lien n'ouvre qu'une conversation vide.
 *
 * L'ordre est alphabétique. Aucun classement par préférence : ce serait une recommandation,
 * et l'application n'en fait pas.
 */
export interface AIDestination {
  /** Le nom tel que le service se nomme lui-même. */
  name: string;
  /** L'adresse d'une conversation neuve. */
  url: string;
}

export const AI_DESTINATIONS: AIDestination[] = [
  { name: "ChatGPT", url: "https://chatgpt.com/" },
  { name: "Claude", url: "https://claude.ai/new" },
  { name: "Copilot", url: "https://copilot.microsoft.com/" },
  { name: "Gemini", url: "https://gemini.google.com/app" },
  { name: "Le Chat", url: "https://chat.mistral.ai/chat" },
];
