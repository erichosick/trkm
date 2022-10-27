import { UuidGenerateSignature } from '@trkm/http-uuid-generate-v4-ts';
import { DataToObjectSignature } from '@trkm/types';
import { insertIntoObjectInterface } from '@trkm/object-json-path-ts';
import { httpContextAllSignature } from './http-context-all';
export interface Trkm {
    uuidGenerateV4: UuidGenerateSignature;
    insertIntoObject: insertIntoObjectInterface;
    context: {
        all: httpContextAllSignature;
        cookies: DataToObjectSignature;
        urlParams: DataToObjectSignature;
    };
}
declare module globalThis {
    let trkm: Trkm;
}
export default globalThis;
//# sourceMappingURL=globals.d.ts.map