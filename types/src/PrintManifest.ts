import { GenericResponse } from "./utils";

export interface PrintManifestRequest {
    AuthorizationToken: string;
    ManifestReference: string;
}

export interface PrintManifestResponse extends GenericResponse {
    PDFbase64: string;
}
