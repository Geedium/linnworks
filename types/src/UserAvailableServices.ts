import CourierService from "./CourierService";

export interface UserAvailableServicesResponse {
    Services: CourierService[];
    IsError: boolean;
    ErrorMessage: string | null;
}
