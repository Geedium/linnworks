import OrderExtendedProperties from "./OrderExtendedProperties";
import { Package } from "./Package";
import { GenericResponse } from "./utils";

export interface QuoteItem {
    ServiceName: string;
    ServiceCode: string;
    ServiceId: string;
    ServiceTag: string;
    CollectionDate: Date | string;
    EstimatedDeliveryDate: Date | string;
    Cost: number;
    Tax: number;
    TotalCost: number;
    Currency: string;
    PropertyItem: QuoteProperty[];
    Options: QuoteServiceOption[];
}

export interface QuoteProperty {
    Title: string;
    Value: string;
}

export interface QuoteServiceOption {
    OptionName: string;
    OptionValue: string;
}

export interface QuoteRequest {
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
    Email: string;
    Phone: string;
    Packages: Package[];
    OrderReference: string;
    OrderCurrency: string;
    OrderValue: number;
    OrderExtendedProperties: OrderExtendedProperties[];
}

export interface QuoteResponse extends GenericResponse {
    QuoteItems: QuoteItem[];
}
