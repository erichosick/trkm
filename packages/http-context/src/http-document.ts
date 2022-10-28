// see https://www.w3schools.com/jsref/dom_obj_document.asp

import { urlParamsToObj } from "@trkm/http-url-ts"
import { ObjectKeyStrValueStr } from "@trkm/types"

// should we put the cookies here?


/**
 * Contains detailed information about the http window object url.
 * See https://www.w3schools.com/jsref/obj_location.asp.
 */
export interface HttpLocation {
  /**
   * The anchor part (#) of a URL
   */
  hash: string

  /**
   * The hostname and port number of a URL
   */
  host: string

  /**
   * The hostname of a URL
   */
  hostname: string

  /**
   * The entire URL
   */
  href: string

  /**
   * The protocol, hostname and port number of a URL
   */
  origin: string

  /**
   * The path name of a URL
   */
  pathname: string

  /**
   * The port number of a URL
   */
  port: string

  /**
   * The protocol of a URL
   */
  protocol: string

  /**
   * The querystring part of a URL 
   */
  search: string


  /**
   * The querystring part of a url converted to an object
   */
  urlParams: ObjectKeyStrValueStr,
}

export interface BrowserDetails {

  /**
   * The user-agent header sent by the browser to the server which contains
   * information about the browser name, version and platform.
   */
  userAgent: string

  /**
   * true if cookies are enabled in the browser, otherwise false.
   */
  cookieEnabled: boolean

  /**
   * Which platform the browser is compiled (MacIntel, etc.)
   */
  platform: string

}

export interface DocumentProperties {

  /**
   * The URL of the document that loaded the current document.
   */
  referrer: string

  /**
   * The title of the document.
   */
  title: string

  /**
   * 
   */
  language: string

  /**
   * Information about the web page url pulled from the window object
   * (in browser).
   */

  url: HttpLocation

  /**
   * Details about the browser client such as userAgent, etc.
   */
  browser: BrowserDetails
}

export type HttpDocumentSignature = () => DocumentProperties;

/**
 * Generates a uuid using URL.createObjectURL
 * @returns A string uuid.
 */
const httpDocument: HttpDocumentSignature = (): DocumentProperties => {
  const loc = window.location;
  const nav = navigator;
  return {
    referrer: document.referrer,
    title: document.title,
    language: nav.language,
    url: {
      urlParams: urlParamsToObj(loc.search),
      hash: loc.hash,
      host: loc.host,
      hostname: loc.hostname,
      href: loc.href,
      origin: loc.origin,
      pathname: loc.pathname,
      port: loc.port,
      protocol: loc.protocol,
      search: loc.search
    },
    browser: {
      userAgent: nav.userAgent,
      cookieEnabled: nav.cookieEnabled,
      platform: nav.platform
    },
  }
}

export default httpDocument;
