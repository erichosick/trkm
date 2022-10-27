import { uuidGenerateSignature } from './uuid-generate';
import { cookiesToObjSignature } from '@trkm/http-cookies-ts';
import { insertIntoObjectInterface } from '@trkm/object-json-path-ts';
import { httpContextAllSignature } from './http-context-all';
import { urlParamsSignature } from './url-params';
export interface Trkm {
    uuidGenerate: uuidGenerateSignature;
    insertIntoObject: insertIntoObjectInterface;
    context: {
        all: httpContextAllSignature;
        cookies: cookiesToObjSignature;
        urlParams: urlParamsSignature;
    };
}
declare module globalThis {
    let trkm: Trkm;
}
export default globalThis;
//# sourceMappingURL=globals.d.ts.map