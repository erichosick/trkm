export declare type SessionInitSignature = (sessionKey?: string) => void;
export declare const sessionInit: SessionInitSignature;
export declare type SessionGetSignature = (sessionKey?: string) => object;
export declare const sessionGet: SessionGetSignature;
export declare type SessionMergeSignature = (context: object, sessionKey?: string) => object;
export declare const sessionMerge: SessionMergeSignature;
//# sourceMappingURL=index.d.ts.map