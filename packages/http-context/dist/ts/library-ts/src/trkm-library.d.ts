import { UuidGenerateSignature } from '@trkm/http-uuid-generate-v4-ts';
import { insertIntoObjectInterface } from '@trkm/object-json-path-ts';
import { WebPageContextSignature } from '@trkm/http-context-ts';
import { SessionGetSignature, SessionInitSignature, SessionMergeSignature } from '@trkm/http-session-deepmerge-ts';
export interface TrkmLibrary {
    uuidGenerateV4: UuidGenerateSignature;
    insertIntoObject: insertIntoObjectInterface;
    context: WebPageContextSignature;
    session: {
        get: SessionGetSignature;
        init: SessionInitSignature;
        merge: SessionMergeSignature;
    };
}
//# sourceMappingURL=trkm-library.d.ts.map