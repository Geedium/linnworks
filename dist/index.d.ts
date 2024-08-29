type PackageFormat = "BOX" | "PARCEL" | "PACKET" | "LETTER";
declare enum ValueType {
    String = 0,
    Integer = 1,
    Double = 2,
    Boolean = 3,
    Password = 4,
    List = 5
}
type GenericValue = {
    Display: string;
    Value: string;
};
type GenericResponse = {
    /**
     * Error string if there was an issue with the call.
     *
     * `null` or `Empty` string are valid when no error
     */
    ErrorMessage: string | null;
    /**
     * Indicates if there is an error
     */
    IsError: boolean;
};
type ListValue = GenericValue;
type Only<T, U> = {
    [P in keyof T]: T[P];
} & {
    [P in keyof U]?: U[P];
};
type Either<T, U> = Only<T, U> | Only<U, T>;

interface AddNewUserRequest {
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
interface AddNewUserResponse extends GenericResponse {
    /**
     * If successful the authorization token string of the customer.
     * This will be used for all subsequent calls.
     */
    AuthorizationToken: string;
}

interface CancelLabelRequest {
    AuthorizationToken: string;
    OrderReference: string;
}
interface CancelLabelResponse {
    IsError: boolean;
    ErrorMessage: string | null;
}

interface Config {
}
type ConfigListItem = GenericValue;
interface ConfigItem {
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
interface ConfigItemValue {
    ConfigItemId: string;
    SelectedValue: string;
}
interface ConfigStage {
    WizardStepDescription: string;
    WizardStepTitle: string;
    ConfigItems: ConfigItem[];
}

interface ServiceProperty {
    PropertyName: string;
    PropertyValue: string;
}

interface CourierService {
    ServiceName: string;
    ServiceCode: string;
    ServiceTag: string;
    ServiceGroup: string;
    ServiceUniqueId: string;
    ConfigItems: ConfigItem[];
    ServiceProperty: ServiceProperty[];
}

interface CreateManifestRequest {
    AuthorizationToken: string;
    OrderId: string[];
}
interface CreateManifestResponse {
    IsError: boolean;
    ErrorMessage: string | null;
    ManifestReference: string;
}

interface DeleteConfigRequest {
    AuthorizationToken: string;
}
interface DeleteConfigResponse {
    IsError: boolean;
    ErrorMessage: string | null;
}

interface ExtendedProperty {
    Name: string;
    Value: string;
}

interface ExtendedPropertyMapping {
    PropertyTitle: string;
    PropertyName: string;
    PropertyDescription: string;
    PropertyType: string;
}
interface ExtPropertyMapRequest {
    AuthorizationToken: string;
}
interface ExtendedPropertyMapResponse {
    Items: ExtendedPropertyMapping[];
    IsError: boolean;
    ErrorMessage: string | null;
}
type ExtendedPropertyMappingResult = ExtendedPropertyMapResponse | ExtendedPropertyMapping;

interface OrderExtendedProperties {
    Name: string;
    Value: string;
}

interface Item {
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

type Package = Either<{
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

interface SaveConfigItem {
    ConfigItemId: string;
    SelectedValue: string;
}

interface GenerateLabelRequest {
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
interface GenerateLabelResponse extends GenericResponse {
    LeadTrackingNumber: string;
    Cost: number;
    Currency: string;
    Package: Package[];
}
type GenerateLabelResult = GenerateLabelResponse | Package;

interface PrintManifestRequest {
    AuthorizationToken: string;
    ManifestReference: string;
}
interface PrintManifestResponse extends GenericResponse {
    PDFbase64: string;
}

interface QuoteItem {
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
interface QuoteProperty {
    Title: string;
    Value: string;
}
interface QuoteServiceOption {
    OptionName: string;
    OptionValue: string;
}
interface QuoteRequest {
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
interface QuoteResponse extends GenericResponse {
    QuoteItems: QuoteItem[];
}

interface UserAvailableServicesResponse {
    Services: CourierService[];
    IsError: boolean;
    ErrorMessage: string | null;
}
type UserAvailableServicesResult = UserAvailableServicesResponse | CourierService | ConfigItem | ListValue;

type UserConfigRequest = Either<{
    AuthorizationToken: string;
    ConfigStatus: string;
    ConfigItems: ConfigItemValue[];
}, {
    /**
     * Token that you generated for this customer.
     */
    AuthorizationToken: string;
}>;
type UserConfigResponse = {
    /**
     * Identifies whether the integration profile is in Active mode.
     * Meaning the customer completed the integration wizard
     * and can use the integration.
     */
    IsConfigActive: boolean;
    /**
     * Configuration stage name.
     * You must provide the same name to the `UpdateConfig` endpoint.
     */
    ConfigStatus: string;
    /**
     * Config stage class.
     */
    ConfigStage: ConfigStage;
    /**
     * 	Description of the current wizard step.
     */
    WizardStepDescription: string;
    /**
     * Indicates if there is an error
     */
    IsError: boolean;
    /**
     * Error message
     */
    ErrorMessage: string | null;
} | GenericResponse;

export { type AddNewUserRequest, type AddNewUserResponse, type CancelLabelRequest, type CancelLabelResponse, type Config, type ConfigItem, type ConfigItemValue, type ConfigListItem, type ConfigStage, type CourierService, type CreateManifestRequest, type CreateManifestResponse, type DeleteConfigRequest, type DeleteConfigResponse, type Either, type ExtPropertyMapRequest, type ExtendedProperty, type ExtendedPropertyMapResponse, type ExtendedPropertyMapping, type ExtendedPropertyMappingResult, type GenerateLabelRequest, type GenerateLabelResponse, type GenerateLabelResult, type GenericResponse, type GenericValue, type Item, type ListValue, type Only, type OrderExtendedProperties, type Package, type PackageFormat, type PrintManifestRequest, type PrintManifestResponse, type QuoteItem, type QuoteProperty, type QuoteRequest, type QuoteResponse, type QuoteServiceOption, type SaveConfigItem, type ServiceProperty, type UserAvailableServicesResponse, type UserAvailableServicesResult, type UserConfigRequest, type UserConfigResponse, ValueType };
