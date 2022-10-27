import { ObjectKeyStrValueStr } from '@trkm/types';
export interface ContextAll {
    cookies: ObjectKeyStrValueStr;
    urlParams: ObjectKeyStrValueStr;
}
export declare type httpContextAllSignature = () => ContextAll;
declare const httpContextAll: httpContextAllSignature;
export default httpContextAll;
//# sourceMappingURL=http-context-all.d.ts.map