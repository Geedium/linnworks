export interface DeleteConfigRequest {
    AuthorizationToken: string;
}

export interface DeleteConfigResponse {
    IsError: boolean;
    ErrorMessage: string | null;
}
