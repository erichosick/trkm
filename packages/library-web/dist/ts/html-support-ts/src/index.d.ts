import { HtmlElementQuery } from '@trkm/html-types-ts';
export declare type ValidateElementSignature = (query: HtmlElementQuery, result: Element[] | HTMLElement[] | NodeListOf<HTMLElement> | HTMLCollectionOf<Element>, formName?: string) => HTMLElement | undefined;
export declare type GetElementFromQuerySignature = (query: HtmlElementQuery) => HTMLElement | undefined;
export declare const getElementFromQuery: GetElementFromQuerySignature;
export declare type GetChildElementSignature = (form: HTMLFormElement, query: HtmlElementQuery) => HTMLElement | undefined;
export declare const getChildElement: GetChildElementSignature;
export declare type GetFormSignature = (query?: HtmlElementQuery) => HTMLFormElement;
export declare const getForm: GetFormSignature;
//# sourceMappingURL=index.d.ts.map