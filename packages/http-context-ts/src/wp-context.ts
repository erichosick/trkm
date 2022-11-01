import { ObjectKeyStrValueStr } from '@trkm/types';
import { cookiesToObj } from '@trkm/http-cookies-ts';
import { httpDocument, DocumentProperties } from './http-document';

export interface WebPageContext {
  cookies: ObjectKeyStrValueStr,
  document: DocumentProperties
}

export type WebPageContextSignature = () => WebPageContext;

/**
 * Creates an easy to use javascript object containing information about a
 * webpage such as cookies, url parameters, etc.
 * @returns A context of a webpage.
 */
export const wpContext: WebPageContextSignature = (): WebPageContext => {
  return {
    cookies: cookiesToObj(document.cookie),
    document: httpDocument(),
  }
}

