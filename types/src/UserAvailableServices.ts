import { ConfigItem } from "./Config";
import CourierService from "./CourierService";
import { ListValue } from "./utils";

export interface UserAvailableServicesResponse {
    Services: CourierService[];
    IsError: boolean;
    ErrorMessage: string | null;
}

export type UserAvailableServicesResult =
    UserAvailableServicesResponse |
    CourierService |
    ConfigItem |
    ListValue;
