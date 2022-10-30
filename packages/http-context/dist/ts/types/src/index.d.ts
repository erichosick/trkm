export interface ObjectKeyStrValueStr {
    [key: string]: string;
}
export declare type MutatePropertyNameSignature = (propertyName: string) => string;
export interface DataToObjectOptions {
    mutateProperty?: MutatePropertyNameSignature;
}
export declare type DataToObjectSignature = (keyValueString: string, options?: DataToObjectOptions) => ObjectKeyStrValueStr;
export declare const WP_CONTEXT_SESSION_KEY = "tm_context_session";
//# sourceMappingURL=index.d.ts.map