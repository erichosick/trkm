import { ObjectKeyStrValueStr } from '@trkm/types';
import { DocumentProperties } from './http-document';
export interface WebPageContext {
    cookies: ObjectKeyStrValueStr;
    document: DocumentProperties;
}
export declare type WebPageContextSignature = () => WebPageContext;
export declare const wpContext: WebPageContextSignature;
//# sourceMappingURL=wp-context.d.ts.map