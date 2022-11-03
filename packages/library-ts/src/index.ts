import { TrkmLibrary } from './trkm-library';

import uuidGenerateV4 from "@trkm/http-uuid-generate-v4-ts";
import { insertIntoObject } from '@trkm/object-json-path-ts';
import { wpContext } from '@trkm/http-context-ts';
import {
  sessionGet,
  sessionInit,
  sessionMerge
} from '@trkm/http-session-deepmerge-ts';
import formApply from '@trkm/html-form-apply-ts';

export const library: TrkmLibrary = {
  uuidGenerateV4,
  insertIntoObject,
  context: wpContext,
  session: {
    get: sessionGet,
    init: sessionInit,
    merge: sessionMerge,
  },
  formApply: formApply
}

export { TrkmLibrary } from './trkm-library';

declare module globalThis {
  let trkm: TrkmLibrary

  // TODO: Provide debug information in development mode only?  
  // let trkmd: {
  //   form: GetFormSignature
  //   formDetails: FormDetailsSignature
  //   pirateForm: PirateSkillsSignature,
  // }
};

export default globalThis;
