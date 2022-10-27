export interface ObjStrKeyVal {
    [key: string]: string;
}
export declare type alterName = (info: string) => string;
export interface Options {
    alter?: alterName;
}
export declare type urlParamsSignature = (search: string, options?: Options) => ObjStrKeyVal;
declare const urlParams: urlParamsSignature;
export default urlParams;
//# sourceMappingURL=url-params.d.ts.map