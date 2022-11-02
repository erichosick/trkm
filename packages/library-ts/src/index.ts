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

const library: TrkmLibrary = {
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

export default library;

