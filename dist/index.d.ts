type GenericResponse = {
    ErrorMessage: string | null;
    IsError: boolean;
};

interface AddNewUserRequest {
    LinnworksUniqueIdentifier: string;
    Email: string;
    AccountName: string;
}

export type { AddNewUserRequest, GenericResponse };
