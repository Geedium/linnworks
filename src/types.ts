import { SUPPORTED_VERSIONS } from "./constants";

export type ApiVersion = typeof SUPPORTED_VERSIONS[number];

export interface ApiOptions {
    version?: ApiVersion;
    applicationId?: string;
    applicationSecret?: string;
    installiationToken?: string;
}

export interface AddNewUserRequest {
    /** Unique identifer of the Linnworks customer's account. Will never change. */
    LinnworksUniqueIdentifier: string;
    /** Email of the customer, subject to change. */
    Email: string;
    /**
     * Account name being integrated into the system. Will never change and 
     * on integration it is suggest that duplicates are checked for. Nb.
     * Customers may expect to have multiple integrations of the same
     * channel in Linnworks.
     */
    AccountName: string;
}

export interface AddNewUserResponse {
    /**
     * Error string if there was an issue with the call.
     * `null` or `Empty` string are valid when no error
     */
    Error: string | null;
    /**
     * If successful the authorization token string of the customer. This will be used
     * for all subsequent calls.
     */
    AuthorizationToken: string;
    /** Indicates if there is an error */
    IsError: boolean;
}
