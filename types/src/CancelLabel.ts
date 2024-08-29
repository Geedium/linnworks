export interface CancelLabelRequest {
    AuthorizationToken: string;
    OrderReference: string;
}

export interface CancelLabelResponse {
    IsError: boolean;
    ErrorMessage: string | null;
}
