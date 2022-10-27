import { ObjStrKeyVal } from '@trkm/http-cookies-ts';
import { cookiesToObj } from '@trkm/http-cookies-ts';
import urlParams from './url-params';


export interface ContextAll {
  cookies: ObjStrKeyVal,
  urlParams: ObjStrKeyVal,
}

export type httpContextAllSignature = () => ContextAll;

/**
 * Generates a uuid using URL.createObjectURL
 * @returns A string uuid.
 */
const httpContextAll: httpContextAllSignature = (): ContextAll => {
  return {
    cookies: cookiesToObj(document.cookie),
    urlParams: urlParams(window.location.search),
  }
}

export default httpContextAll;