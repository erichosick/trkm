import { UuidGenerateSignature } from '@trkm/http-uuid-generate-v4-ts';
import { InsertIntoObjectSignature } from '@trkm/object-json-path-ts';
import { WebPageContextSignature } from '@trkm/http-context-ts';
import {
  SessionGetSignature,
  SessionInitSignature,
  SessionMergeSignature
} from '@trkm/http-session-deepmerge-ts';
import { FormApplySignature } from '@trkm/html-form-apply-ts';

export interface TrkmLibrary {
  uuidGenerateV4: UuidGenerateSignature,
  insertIntoObject: InsertIntoObjectSignature,
  context: WebPageContextSignature,
  session: {
    get: SessionGetSignature,
    init: SessionInitSignature,
    merge: SessionMergeSignature,
  },
  formApply: FormApplySignature
};
