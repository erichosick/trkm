export interface ObjStrKeyVal {
    [key: string]: string;
}
export declare type alterName = (info: string) => string;
export interface Options {
    alter?: alterName;
}
export declare type cookiesToObjSignature = (cookies: string, options?: Options) => ObjStrKeyVal;
export declare const cookiesToObj: cookiesToObjSignature;
//# sourceMappingURL=index.d.ts.map