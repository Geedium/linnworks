/**
* https://apidocs.linnworks.net/docs
* Typings for The Linnworks API
*/
export namespace Linnworks {
    /** @TODO Concat generics */
    type Only<T, U> = {
        [P in keyof T]: T[P];
    } & {
        [P in keyof U]?: U[P];
    };

    type Either<T, U> = Only<T, U> | Only<U, T>;

    export type GenericResponse = {
        ErrorMessage: string | null;
        IsError: boolean;
    }

    export type GenericValue = {
        Display: string;
        Value: string;
    }

    export interface AddNewUserRequest {
        LinnworksUniqueIdentifier: string;
        Email: string;
        AccountName: string;
    }

    export interface AddNewUserResponse extends GenericResponse {
        AuthorizationToken: string;
    }

    export interface CourierService {
        ServiceName: string;
        ServiceCode: string;
        ServiceTag: string;
        ServiceGroup: string;
        ServiceUniqueId: string;
        ConfigItems: ConfigItem[];
        ServiceProperty: ServiceProperty[];
    }

    export interface ServiceProperty {
        PropertyName: string;
        PropertyValue: string;
    }

    export interface Config {

    }

    export interface DeleteConfigRequest {
        AuthorizationToken: string;
    }

    export interface DeleteConfigResponse {
        IsError: boolean;
        ErrorMessage: string | null;
    }

    export interface UserAvailableServicesResponse {
        Services: CourierService[];
        IsError: boolean;
        ErrorMessage: string | null;
    }

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

    export type GenerateLabelResult =
        GenerateLabelResponse |
        Package;

    export interface SaveConfigItem {
        ConfigItemId: string;
        SelectedValue: string;
    }

    export interface CancelLabelRequest {
        AuthorizationToken: string;
        OrderReference: string;
    }

    export interface CancelLabelResponse {
        IsError: boolean;
        ErrorMessage: string | null;
    }

    export interface CreateManifestRequest {
        AuthorizationToken: string;
        OrderId: string[];
    }

    export interface CreateManifestResponse {
        IsError: boolean;
        ErrorMessage: string | null;
        ManifestReference: string;
    }

    export interface ExtPropertyMapRequest {
        AuthorizationToken: string;
    }

    export interface ExtendedPropertyMapResponse {
        Items: ExtendedPropertyMapping[];
        IsError: boolean;
        ErrorMessage: string | null;
    }

    export interface ExtendedPropertyMapping {
        PropertyTitle: string;
        PropertyName: string;
        PropertyDescription: string;
        PropertyType: string;
    }

    export type UserConfigRequest = Either<{
        AuthorizationToken: string;
        ConfigStatus: string;
        ConfigItems: ConfigItemValue[];
    }, {
        AuthorizationToken: string;
    }>;

    export interface ConfigItemValue {
        ConfigItemId: string;
        SelectedValue: string;
    }

    export type UserConfigResponse = {
        IsConfigActive: boolean;
        ConfigStatus: string;
        ConfigStage: ConfigStage;
        WizardStepDescription: string;
        IsError: boolean;
        ErrorMessage: string | null;
    } | GenericResponse;

    export interface ConfigStage {
        WizardStepDescription: string;
        WizardStepTitle: string;
        ConfigItems: ConfigItem[];
    }

    export enum ValueType {
        String = 0,
        Integer = 1,
        Double = 2,
        Boolean = 3,
        Password = 4,
        List = 5
    }

    export interface ConfigItem {
        ConfigItemId: string;
        Name: string;
        Description: string;
        GroupName: string;
        SortOrder: number;
        SelectedValue: string;
        RegExValidation: string | null;
        RegExError: string | null;
        MustBeSpecified: boolean;
        ReadOnly: boolean;
        ListValues: ConfigListItem[];
        ValueType: ValueType;
    }

    export type ConfigListItem = GenericValue;

    export type ListValue = GenericValue;

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

    export type PackageFormat = "BOX" | "PARCEL" | "PACKET" | "LETTER"

    export type Package = Either<{
        SequenceNumber: number;
        PackageWeight: number;
        PackageWidth: number;
        PackageHeight: number;
        PackageDepth: number;
        PackageFormat: PackageFormat;
        Items: Item[];
    }, {
        SequenceNumber: number;
        TrackingNumber: string;
        PNGLabelDataBase64: string;
        AdditionalPngsBase64?: string[];
        PDFBytesDocumentationBase64: string[];
        LabelWidth: number;
        LabelHeight: number;
    }>;

    export interface Item {
        ItemName: string;
        ProductCode: string;
        Quantity: number;
        UnitValue: number;
        UnitWeight: number;
        Height: number;
        Width: number;
        Length: number;
        ExtendedProperties: ExtendedProperty[];
    }

    /** @TODO Generics: */
    export interface ExtendedProperty {
        Name: string;
        Value: string;
    }
    export interface OrderExtendedProperties {
        Name: string;
        Value: string;
    }

    export interface QuoteResponse extends GenericResponse {
        QuoteItems: QuoteItem[];
    }

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
}
