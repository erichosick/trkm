import { UuidGenerateSignature } from '@trkm/http-uuid-generate-v4-ts';
import { insertIntoObjectInterface } from '@trkm/object-json-path-ts';
import { HttpContextAllSignature } from './http-context-all';

export interface Trkm {
  uuidGenerateV4: UuidGenerateSignature,
  insertIntoObject: insertIntoObjectInterface,
  context: HttpContextAllSignature,
};

declare module globalThis {
  let trkm: Trkm
};

export default globalThis;
