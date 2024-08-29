import { GenericResponse } from "./utils";

export interface AddNewUserRequest {
    LinnworksUniqueIdentifier: string;
    Email: string;
    AccountName: string;
}

export interface AddNewUserResponse extends GenericResponse {
    AuthorizationToken: string;
}
