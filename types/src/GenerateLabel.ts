import OrderExtendedProperties from "./OrderExtendedProperties";
import { Package } from "./Package";
import SaveConfigItem from "./SaveConfigItem";
import { GenericResponse } from "./utils";

export interface GenerateLabelRequest {
    AuthorizationToken: string;
    Name: string;
    CompanyName: string;
    AddressLine1: string;
    AddressLine2: string;
    AddressLine3: string;
    Town: string;
    Region: string;
    CountryCode: string;
    Postalcode: string;
    DeliveryNote: string;
    Email: string;
    Phone: string;
    OrderId: number;
    OrderReference: string;
    OrderCurrency: string;
    OrderValue: number;
    PostageCharges: number;
    ServiceId: string;
    Packages: Package[];
    OrderExtendedProperties: OrderExtendedProperties[];
    SaveConfigItems: SaveConfigItem[];
}

export interface GenerateLabelResponse extends GenericResponse {
    LeadTrackingNumber: string;
    Cost: number;
    Currency: string;
    Package: Package[];
}

export type GenerateLabelResult = GenerateLabelResponse | Package;
