import { ContextConfigResultType, ContextGetConfig, ContextSource } from '@trkm/html-types-ts';
export declare type ValueFromSourceSignature = (source: ContextSource, context?: object) => ContextConfigResultType;
export declare type ContextGetSignature = (config: ContextGetConfig, context?: object) => ContextConfigResultType;
declare const contextGet: (config: ContextGetConfig, context?: object) => ContextConfigResultType;
export default contextGet;
//# sourceMappingURL=context-get.d.ts.map