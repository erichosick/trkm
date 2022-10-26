import { uuidGenerateSignature } from './uuid-generate';
import { cookiesToObjSignature } from '@trkm/http-cookies-ts'
import { insertIntoObjectInterface } from '@trkm/object-json-path-ts';
export interface Trkm {
  uuidGenerate: uuidGenerateSignature,
  insertIntoObject: insertIntoObjectInterface,
  context: {
    cookies: cookiesToObjSignature,
  }
};

declare module globalThis {
  let trkm: Trkm
};

export default globalThis;
