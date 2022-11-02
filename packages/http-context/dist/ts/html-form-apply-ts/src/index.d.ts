import { FormDestination, HtmlElementQuery } from "@trkm/html-types-ts";
export declare const destinationSet: (form: HTMLFormElement, elementQuery: HtmlElementQuery, value: string) => void;
export declare type FormApplySignature = (formDestination: FormDestination, context?: object) => HTMLFormElement;
declare const formApply: FormApplySignature;
export default formApply;
//# sourceMappingURL=index.d.ts.map