import { ObjStrKeyVal } from '@trkm/http-cookies-ts';
import { cookiesToObj } from '@trkm/http-cookies-ts';


export interface ContextAll {
  cookies: ObjStrKeyVal
}

export type httpContextAllSignature = () => ContextAll;

/**
 * Generates a uuid using URL.createObjectURL
 * @returns A string uuid.
 */
const httpContextAll: httpContextAllSignature = (): ContextAll => {
  return {
    cookies: cookiesToObj(document.cookie),
  }
}

export default httpContextAll;