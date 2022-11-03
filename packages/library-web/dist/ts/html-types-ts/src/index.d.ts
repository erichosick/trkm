export declare type ContextConfigResultType = string | number | object | unknown[] | undefined;
export interface HtmlElementQuery {
    required?: boolean;
    tag?: string;
    name?: string;
    value?: string;
}
export interface ContextSource {
    required?: boolean;
    type?: 'context' | 'uuidV4';
    jsonPath?: string;
}
export interface InputDestination {
    required?: boolean;
    pullFrom: ContextGetConfig | string;
    destination: HtmlElementQuery | string;
}
export interface FormDestination {
    required?: boolean;
    formQuery?: HtmlElementQuery;
    destination?: InputDestination | InputDestination[];
}
export declare type ContextConfig = {
    required?: boolean;
    mapTo: string;
    default?: string | number | unknown[];
    source: ContextSource | ContextSource[];
};
export declare type ContextConfigs = ContextConfig[];
export declare type ContextGetConfig = {
    required?: boolean;
    default?: ContextConfigResultType;
    source?: ContextSource | ContextSource[];
};
export declare type ContextGetConfigs = ContextGetConfig[];
//# sourceMappingURL=index.d.ts.map