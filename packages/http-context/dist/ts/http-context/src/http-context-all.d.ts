import { ObjectKeyStrValueStr } from '@trkm/types';
import { DocumentProperties } from './http-document';
export interface ContextAll {
    cookies: ObjectKeyStrValueStr;
    document: DocumentProperties;
}
export declare type HttpContextAllSignature = () => ContextAll;
declare const httpContextAll: HttpContextAllSignature;
export default httpContextAll;
//# sourceMappingURL=http-context-all.d.ts.map