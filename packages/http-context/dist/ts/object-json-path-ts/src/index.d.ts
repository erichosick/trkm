export interface JsonPathValue {
    path: string;
    value: unknown;
}
export declare type JsonPathValues = JsonPathValue[];
export declare type insertIntoObjectInterface = (jsObj: unknown, jsonPathValues: JsonPathValue | JsonPathValues) => unknown;
export declare const insertIntoObject: insertIntoObjectInterface;
export declare const getFromObject: (jsObj: unknown, path: string) => any;
//# sourceMappingURL=index.d.ts.map