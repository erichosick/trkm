import { ObjectKeyStrValueStr } from "@trkm/types";
export interface HttpLocation {
    hash: string;
    host: string;
    hostname: string;
    href: string;
    origin: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    urlParams: ObjectKeyStrValueStr;
}
export interface BrowserDetails {
    userAgent: string;
    cookieEnabled: boolean;
    platform: string;
}
export interface DocumentProperties {
    referrer: string;
    title: string;
    language: string;
    url: HttpLocation;
    browser: BrowserDetails;
}
export declare type HttpDocumentSignature = () => DocumentProperties;
declare const httpDocument: HttpDocumentSignature;
export default httpDocument;
//# sourceMappingURL=http-document.d.ts.map