export interface ObjectKeyStrValueStr {
    [key: string]: string;
}
export declare type MutatePropertyNameSignature = (propertyName: string) => string;
export interface DataToObjectOptions {
    mutateProperty?: MutatePropertyNameSignature;
}
export declare type DataToObjectSignature = (keyValueString: string, options?: DataToObjectOptions) => ObjectKeyStrValueStr;
//# sourceMappingURL=index.d.ts.map