export enum ValueType {
    String = 0,
    Integer = 1,
    Double = 2,
    Boolean = 3,
    Password = 4,
    List = 5
}

export interface ErrorHandler {
    /** Indicates if there is an error */
    IsError: boolean;
    /**
     * Error string if there was an issue with the call.
     * `null` or `Empty` string are valid when no error
     */
    ErrorMessage: string | null;
}

export interface ManifestParameters {
    /**
     * Unique name of the shipping courier, no spaces, all upper case - Must be unique
     * (eg. No couriers that are already integrated through native implementations). 
     * The max length for this field is 24 characters
     */
    VendorName: string;
    /**
     * Name of the vendor (eg. DPD or Royal Mail)
     */
    VendorFriendlyName: string;
    /**
     * Link to shipping logo
     * 
     * Required Size: 57 x 57px
     */
    VendorLogoURL: string;
    /**
     * Create new integration for a user and default configuration profile for the integration.
     * Note that the same customer may have multiple integrations with the same courier
     */
    AddNewUserEndpoint: string;
    /**
     * Gets the current stage of the user config. 
     * The service method returns current stage of the config, description, title and config items the user has to enter.
     * Linnworks will then render this config items on the UI and will send the config item list to the UpdateConfig
     */
    UserConfigEndpoint: string;
    /**
     * Update integration profile config stage with values entered by the user.
     * The ConfigStatus must match the current config stage status
     */
    UpdateConfigEndpoint: string;
    /**
     * Endpoint method which is called when the user deletes the integration in linnworks.net
     */
    ConfigDeletedEndpoint: string;
    /**
     * Endpoint which should return a list of available services for a given integration profile
     */
    UserAvailableServicesEndpoint: string;
    /**
     * Endpoint which generates a Label PNG and associated shipping label
     * documentation. This endpoint method accept a consignment request which
     * contains the shipping address, list of packages and shipping service
     * configuration options. The method will generate a label for each package and
     * return all packages with the matching sequence number
     */
    GenerateLabelEndpoint: string;
    /**
     * Endpoint which should cancel all labels for the consignment by OrderId. If your
     * integration does not support label cancellation implement an error message
     * from this method.
     */
    CancelLabelEndpoint: string;
    /**
     * Endpoint which is called by linnworks.net when a user files a manifest. The
     * request will contain all order Id to be manifested (filed as the end of day)
     */
    CreateManifest: string;
    /**
     * If your carrier integration requires printed version of end-of-day manifest, you
     * can generate PDF and the user will be able to print it from linnworks.net
     */
    PrintManifest: string;
    /**
     * Endpoint which should return the list of extended property mapping values
     */
    ExtPropertyMap: string;
    /**
     * Endpoint which is called in order to retrieve a list of quotes
     */
    Quote: string;
}

export interface ListValue {
    /** User friendly visible value. */
    Display: string;
    /** Drop down item value. */
    Value: string;
}

export interface ConfigItem {
    /** Unique name for the config item (MAX 20 chars) */
    ConfigItemId: string;
    /** Value displayed on the user interface */
    Name: string;
    /** Tooltip text for the config item */
    Description: string;
    /** 
     * Config item group name. Config item will be rendered on the UI
     * grouped by this value
     */
    GroupName: string;
    /**
     * Sort order of the config item. Config items will be
     * rendered on the screen in this order
     */
    SortOrder: number;
    /** Selected value */
    SelectedValue: string;
    /** RegEx validation */
    RegExValidation: string | null;
    /** Error message that will be displayed when RegEx validation fails */
    RegExError: string | null;
    /** Identifies whether the config item must have value specified */
    MustBeSpecified: boolean;
    /** Identifies whether the field is read only */
    ReadOnly: boolean;
    /**
     * List of ConfigItemListItem. The config item ValueType =5 (LIST) can
     * have a list of available values the user can select from the drop
     * down list. See Endpoint - User Config - ConfigItemList aka {@link ListValue }
     */
    ListValues: ListValue[];
}

export interface ConfigStage {
    /** Description of the configuration stage */
    WizardStepDescription: string;
    /** Title of the configuration stage */
    WizardStepTitle: string;
    /** List of ConfigItems. See Endpoint - User Config - {@link ConfigItem} */
    ConfigItems: ConfigItem[];
}

export interface ConfigItemValue {
    /** Unique config item id */
    ConfigItemId: string;
    /** Value entered by the user (MAX 255 chars) */
    SelectedValue: string;
}

export interface ServiceConfigItem {
    /** Config item Id as defined */
    ConfigItemId: string;
    /** Value specified by the user in the config */
    SelectedValue: string;
}

export interface ServiceProperty {
    /** Property Name */
    PropertyName: string;
    /** Property Value */
    PropertyValue: string;
}

export interface CourierService {
    /** Service name as appears to the user */
    ServiceName: string;
    /** Service code */
    ServiceCode: string;
    /** Service tag. Arbitrary value */
    ServiceTag: string;
    /** Service grouping name */
    ServiceGroup: string;
    /** 
     * Unique Identifier for the service. Linnworks will use this ID in the
     * generate consignment label request. It has to be unique for each 
     * service
     */
    ServiceUniqueId: string;
    /**
     * Each service can have configuration items associated with it.
     * See {@link ConfigItem}
     */
    ConfigItems: ConfigItem[];
    /**
     * Each service has a list of properties.
     * See {@link ServiceProperty}
     */
    ServiceProperty: ServiceProperty[];
}

export interface ExtendedPropertyMapping {
    /** Property title */
    PropertyTitle: string;
    /** Property Name (MAX 255 chars) */
    PropertyName: string;
    /** Property Description */
    PropertyDescription: string;
    /** Property Type: ORDER, ITEM */
    PropertyType: string;
}

export interface ExtendedProperty {
    /** Extended Property name as defined */
    Name: string;
    /** Linnworks item extended property value */
    Value: string;
}

export interface OrderExtendedProperties {
    /** Extended Property name as defined */
    Name: string;
    /** Linnworks order extended property value */
    Value: string;
}

export interface Item {
    /** Name of the product */
    ItemName: string;
    /** SKU */
    ProductCode: string;
    /** Item quantity */
    Quantity: number;
    /** Product unit cost (OrderCurrency, decimal) */
    UnitValue: number;
    /** Product unit weight (gram, decimal) */
    UnitWeight: number;
    /** Product height (cm, decimal) */
    Height: number;
    /** Product width (cm, decimal) */
    Width: number;
    /** Product length (cm, decimal) */
    Length: number;
    /** 
     * Extended property as mapped to Linnworks item extended property.
     * See {@link ExtendedProperty}
     */
    ExtendedProperties: ExtendedProperty[];
}

export interface Package {
    /** Sequence number of a package */
    SequenceNumber: number;
    /** Package weight (grams, decimal) */
    PackageWeight: number;
    /** Package width (cm, decimal) */
    PackageWidth: number;
    /** Package height (cm, decimal) */
    PackageHeight: number;
    /** Package depth (cm, decimal) */
    PackageDepth: number;
    /**
     * Packaging types: 
     * + BOX
     * + PARCEL
     * + PACKET
     * + LETTER
     */
    PackageFormat: string;
    /**
     * Property title.
     * See {@link Item}
     */
    Items: Item[];
}

export interface PackageLabel {
    /** Package sequence number. Must match what is in the request */
    SequenceNumber: number;
    /** Package tracking number */
    TrackingNumber: string;
    /** Base64 PNG label */
    PNGLabelDataBase64: string;
    /** Additional Base64 PNG documents */
    AdditionalPngsBase64: string[];
    /**
     * Each element is Base64 PDF document. If no document, must be
     * an empty array. Null will result in an error
     */
    PDFBytesDocumentationBase64: string[];
    /** Label width in inches (decimal) */
    LabelWidth: number;
    /** Label height in inches (decimal) */
    LabelHeight: number;
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

/**
 * See {@link UpdateUserConfigRequest}
 * for Endpoint - UpdateConfigEndpoint
 */
export interface UserConfigRequest {
    /** Token that you generated for this customer. */
    AuthorizationToken: string;
}

export interface UserConfigResponse extends ErrorHandler {
    /**
     * Identifies whether the integration profile is in Active
     * mode. Meaning the customer completed the integration
     * wizard and can use the integration
     */
    IsConfigActive: boolean;
    /**
     * Configuration stage name. You must provide the same name to the
     * UpdateConfig endpoint
     */
    ConfigStatus: string;
    /** Config stage class. See Endpoint - User Config - {@link ConfigStage} */
    ConfigStage: ConfigStage;
    /** Description of the current wizard step. */
    WizardStepDescription: string;
}

export interface UpdateUserConfigRequest {
    /** Authorization token uniquely identifying each integration profile */
    AuthorizationToken: string;
    /** Current config stage. UserConfig call returns a current stage status. The same status is sent back to the integration web service */
    ConfigStatus: string;
    /** List of config item values. See {@link ConfigItemValue} */
    ConfigItems: ConfigItemValue[];
}

export interface DeleteConfigRequest {
    /** Authorization token uniquely identifying each integration profile */
    AuthorizationToken: string;
}

export type DeleteConfigResponse = ErrorHandler;

export interface UserAvailableServicesResponse extends ErrorHandler {
    /**
     * List of available services.
     * See {@link CourierService}
     */
    Services: CourierService[];
}

export interface ExtPropertyMapRequest {
    /** Authorization token uniquely identifying each integration profile */
    AuthorizationToken: string;
}

export interface ExtendedPropertyMapResponse extends ErrorHandler {
    /**
     * List of Extended Property Mapping.
     * @see {@link ExtendedPropertyMapping}
     */
    Items: ExtendedPropertyMapping[];
}

export interface QuoteRequest {
    /** Authorization token uniquely identifying each integration profile */
    AuthorizationToken: string;
    /** Customer name */
    Name: string;
    /** Company name */
    CompanyName: string;
    /** Address Line 1 */
    AddressLine1: string;
    /** Address Line 2 */
    AddressLine2: string;
    /** Address Line 3 */
    AddressLine3: string;
    /** Address Town / City */
    Town: string;
    /** Address State / County / Region */
    Region: string;
    /** Country code ISO 3166-2 */
    CountryCode: string;
    /** Postal code / Zip code */
    Postalcode: string;
    /** Email address of the customer */
    Email: string;
    /** Phone number of the customer */
    Phone: string;
    /** 
     * List of package class.
     * See {@link Package}
     */
    Packages: Package[];
    /** Linnworks order reference number */
    OrderReference: string;
    /** Currency code (3 characters) */
    OrderCurrency: string;
    /** Order value (decimal) */
    OrderValue: number;
    /**
     * List of extended properties items mapped to order extended properties.
     * See {@link OrderExtendedProperties}
     */
    OrderExtendedProperties: OrderExtendedProperties[];
}

export interface GenerateLabelRequest {
    /** Authorization token uniquely identifying each integration profile */
    AuthorizationToken: string;
    /** Customer name */
    Name: string;
    /** Company name */
    CompanyName: string;
    /** Address Line 1 */
    AddressLine1: string;
    /** Address Line 2 */
    AddressLine2: string;
    /**	Address Line 3 */
    AddressLine3: string;
    /**	Address Town / City */
    Town: string;
    /**	Address State / County / Region */
    Region: string;
    /** Country code ISO 3166-2 */
    CountryCode: string;
    /** Postal code / Zip code */
    Postalcode: string;
    /** Delivery note */
    DeliveryNote: string;
    /** Email address of the customer */
    Email: string;
    /** Phone number of the customer */
    Phone: string;
    /** Linnworks order id */
    OrderId: number;
    /** Linnworks order reference number */
    OrderReference: string;
    /** Currency code (3 characters) */
    OrderCurrency: string;
    /** Order value (decimal) */
    OrderValue: number;
    /** Shipping cost (decimal) */
    PostageCharges: number;
    /** Unique Service Id as defined in {@link UserAvailableServicesResponse} */
    ServiceId: string;
    /** 
     * List of packages.
     * See {@link Package}
     */
    Packages: Package[];
    /**
     * List of extended properties items mapped to order extended properties.
     * See {@link OrderExtendedProperties}
     */
    OrderExtendedProperties: OrderExtendedProperties[];
    /** List of config items value as defined by the user in the service configuration. */
    SaveConfigItems: ServiceConfigItem[];
}

export interface GenerateLabelResponse extends ErrorHandler {
    /** Lead tracking number for the whole consignment */
    LeadTrackingNumber: string;
    /** Cost of all labels (decimal) */
    Cost: number;
    /** Cost currency */
    Currency: string;
    /**
     * List of Package Response classes.
     * See {@link PackageLabel}
     */
    Package: PackageLabel[];
}

export interface CancelLabelRequest {
    /** Authorization token uniquely identifying each integration profile */
    AuthorizationToken: string;
    /** The Linnworks unique order ID */
    OrderReference: string;
}

export type CancelLabelResponse = ErrorHandler;

export interface CreateManifestRequest {
    /** Authorization token uniquely identifying each integration profile */
    AuthorizationToken: string;
    /**
     * List of OrderIds. Although OrderId is int, 
     * note that this is an array of strings to avoid casting issues
     */
    OrderId: string[];
}

export interface CreateManifestResponse extends ErrorHandler {
    /** Manifest reference */
    ManifestReference: string;
}

export interface PrintManifestRequest {
    AuthorizationToken: string;
    /** Manifest reference */
    ManifestReference: string;
}

export interface PrintManifestResponse extends ErrorHandler {
    /** Base64 PDF file */
    PDFbase64: string;
}
