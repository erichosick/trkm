import { ObjectKeyStrValueStr } from '@trkm/types';
import { cookiesToObj } from '@trkm/http-cookies-ts';
import { urlParamsToObj } from '@trkm/http-url-ts';


export interface ContextAll {
  cookies: ObjectKeyStrValueStr,
  urlParams: ObjectKeyStrValueStr,
}

export type httpContextAllSignature = () => ContextAll;

/**
 * Generates a uuid using URL.createObjectURL
 * @returns A string uuid.
 */
const httpContextAll: httpContextAllSignature = (): ContextAll => {
  return {
    cookies: cookiesToObj(document.cookie),
    urlParams: urlParamsToObj(window.location.search),
  }
}

export default httpContextAll;