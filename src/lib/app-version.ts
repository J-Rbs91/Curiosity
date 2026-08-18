import { withBasePath } from "@/lib/base-path";

/**
 * La version publiée, et pourquoi il faut aller la demander.
 *
 * Une application installée n'est presque jamais fermée : le système la ramène
 * au premier plan avec le document qui tournait déjà. Ce document a été chargé
 * une fois, et il exécute le code de ce jour-là — indéfiniment. Une correction
 * publiée n'atteint donc personne tant que quelqu'un ne ferme pas
 * l'application depuis les applications récentes, ce que personne ne fait. Le
 * défaut est particulièrement traître parce qu'il ressemble à une correction
 * qui n'a pas marché : l'application se comporte exactement comme avant.
 *
 * Le service worker n'y change rien. Il va bien au réseau d'abord, mais encore
 * faut-il qu'une requête parte — et un document déjà chargé n'en émet aucune.
 * Rien, dans une application web, ne se substitue à un rechargement.
 *
 * Reste à savoir **quand** recharger. À chaque réouverture, ce serait un écran
 * qui se vide tous les matins pour rien. On demande donc l'empreinte de la page
 * d'entrée, et on ne recharge que si elle a changé.
 */

/**
 * L'empreinte de ce que l'hébergeur sert en ce moment.
 *
 * `HEAD` plutôt que `GET` : seules les en-têtes nous intéressent, et le service
 * worker ignore tout ce qui n'est pas un `GET` — la requête part donc bien au
 * réseau au lieu d'être servie par le cache, ce qui la rendrait inutile.
 */
async function empreinteServie(): Promise<string | null> {
  try {
    const reponse = await fetch(withBasePath("/"), { method: "HEAD", cache: "no-store" });
    if (!reponse.ok) return null;
    /*
     * `etag` d'abord : chez un hébergeur statique il dérive de la publication,
     * et change donc à chaque mise en ligne — y compris quand le contenu est
     * identique, ce qui fait un rechargement de trop plutôt qu'un de moins.
     * `last-modified` est le repli des hébergeurs qui n'émettent pas d'étiquette.
     */
    return reponse.headers.get("etag") ?? reponse.headers.get("last-modified");
  } catch {
    // Hors ligne, ou requête refusée : il n'y a rien à conclure, donc rien à
    // recharger. C'est le repli sûr — au pire on reste sur la version d'avant.
    return null;
  }
}

/** L'empreinte de la version qui tourne dans ce document. */
let empreinteCourante: string | null = null;

/**
 * Retient ce qui tourne. Appelé une fois par document, après son chargement :
 * c'est la référence à laquelle les réouvertures suivantes se compareront, et
 * sans elle aucune comparaison n'est possible.
 */
export async function noteRunningVersion(): Promise<void> {
  empreinteCourante ??= await empreinteServie();
}

/**
 * Une autre version est-elle publiée ?
 *
 * Faux en cas de doute — hors ligne, référence absente, hébergeur muet. On ne
 * recharge jamais sur une supposition : un rechargement injustifié coûte un
 * écran vidé sans raison, et se lit comme une panne.
 */
export async function isUpdateAvailable(): Promise<boolean> {
  if (empreinteCourante === null) return false;
  const servie = await empreinteServie();
  return servie !== null && servie !== empreinteCourante;
}
