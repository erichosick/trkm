export interface HtmlElementQuery {
    tag?: string;
    name?: string;
    value?: string;
}
export interface ContextSource {
    type: 'context' | 'uuidV4';
    jsonPath?: string;
}
export interface InputDestination {
    pullFrom: ContextGetConfig;
    destination: HtmlElementQuery;
}
export interface FormDestination {
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
    default?: string | number | unknown[];
    source?: ContextSource | ContextSource[];
};
export declare type ContextGetConfigs = ContextGetConfig[];
//# sourceMappingURL=index.d.ts.map