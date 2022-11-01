export declare const WP_CONTEXT_SESSION_KEY = "tm_context_session";
export interface ObjectKeyStrValueStr {
    [key: string]: string;
}
export interface ObjectKeyStrValueUnk {
    [key: string]: unknown;
}
export declare type MutatePropertyNameSignature = (propertyName: string) => string;
export interface DataToObjectOptions {
    mutateProperty?: MutatePropertyNameSignature;
}
export declare type DataToObjectSignature = (keyValueString: string, options?: DataToObjectOptions) => ObjectKeyStrValueStr;
//# sourceMappingURL=index.d.ts.map