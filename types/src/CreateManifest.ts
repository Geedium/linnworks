export interface CreateManifestRequest {
    AuthorizationToken: string;
    OrderId: string[];
}

export interface CreateManifestResponse {
    IsError: boolean;
    ErrorMessage: string | null;
    ManifestReference: string;
}
