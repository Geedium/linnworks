import { GenericResponse } from "./utils";

export interface AddNewUserRequest {
    /** 
     * Unique identifer of the Linnworks customer's account. 
     * Will never change. 
     */
    LinnworksUniqueIdentifier: string;
    /**
     * Email of the customer, subject to change. 
     */
    Email: string;
    /**
     * Account name being integrated into the system.
     * Will never change and on integration it is suggest that duplicates are checked for. Nb.
     * Customers may expect to have multiple integrations of the same channel in Linnworks.
     */
    AccountName: string;
}

export interface AddNewUserResponse extends GenericResponse {
    /**
     * If successful the authorization token string of the customer. 
     * This will be used for all subsequent calls.
     */
    AuthorizationToken: string;
}
