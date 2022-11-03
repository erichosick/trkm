import { ContextConfigResultType } from "@trkm/html-types-ts";
export interface JsonPathValue {
    path: string;
    value: unknown;
}
export declare type JsonPathValues = JsonPathValue[];
export declare type InsertIntoObjectSignature = (jsObj: object, jsonPathValues: JsonPathValue | JsonPathValues) => object;
export declare const insertIntoObject: InsertIntoObjectSignature;
export declare type GetFromObjectSignature = (jsObj: object, path: string, required?: boolean) => ContextConfigResultType;
export declare const getFromObject: GetFromObjectSignature;
//# sourceMappingURL=index.d.ts.map