import { ObjectKeyStrValueStr } from '@trkm/types';
import { cookiesToObj } from '@trkm/http-cookies-ts';
import httpDocument, { DocumentProperties } from './http-document';

export interface ContextAll {
  cookies: ObjectKeyStrValueStr,
  document: DocumentProperties
}

export type HttpContextAllSignature = () => ContextAll;

/**
 * Generates a uuid using URL.createObjectURL
 * @returns A string uuid.
 */
const httpContextAll: HttpContextAllSignature = (): ContextAll => {
  return {
    cookies: cookiesToObj(document.cookie),
    document: httpDocument(),
  }
}

export default httpContextAll;