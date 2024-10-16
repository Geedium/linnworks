export enum ChannelReasonType {
    /** The reason is used when cancelling an order. */
    Cancellation = 0,
    /** The reason can be used as a reason for refunding an item. */
    ItemRefund = 1,
    /** The reason can be used as a reason for refunding the shipping cost. */
    ShippingRefund = 2,
    /** The reason can be used as a reason for refunding a service item. */
    ServiceRefund = 3,
    /** The reason can be used for any additional refunds made. */
    AdditionalRefund = 4,
}

export enum ProductFeedMessageType {
    /** Returned when there was an error during listing update/creation. */
    Error = 1,
    /** Returned when there were warning during listing update/creation. */
    Warning = 2,
    /** 
     * Returned when channel returned recommendations during listing update/  
     * creation.
     */
    Recommendation = 3,
}

export enum AttributeReadFrom {
    /** Means that the attribute will be read and added to each variation child item. */
    Child = 0,
    /** 
     * Means that the attribute will be read and added to the variation parent item (if a  
     * variation listing).
     */
    Parent = 1,
    /**
     * Means that the customer can decide themselves if it should be read from the parent  
     * or each child item..
     */
    Optional = 2,
}

export enum ExpectedType {
    /**	String */
    STRING = 1,
    /** Integer */
    INT = 2,
    /** Decimal */
    DECIMAL = 3,
    /** Boolean */
    BOOL = 4,
    /** DateTime */
    DATETIME = 5,
    /** List */
    LIST = 6,
}

export enum MustBeSpecified {
    /**
     * Means that the attribute has to be set by the customer in order to create the listing and  
     * cannot be left empty and will be auto added to the selected attributes in the attributes  
     * screen.
     */
    Required = 1,
    /** Means that the attribute value can remain empty in order to create/update the listing. */
    Desired = 2,
}

export enum GroupNameValueType {
    /** Configurator window called "General" */
    GENERAL = 1,
    /** Configurator window called "Return" */
    RETURN = 2,
    /** Configurator window called "Shipping" */
    SHIPPING = 3,
    /** Configurator window called "Payment" */
    PAYMENT = 4,
    /** Configurator window called "Variation" */
    VARIATION = 5,
}

export enum ListingValueType {
    /**	Value of type String */
    STRING = 1,
    /** Value of type Integer */
    INT = 2,
    /** Value of type Decimal */
    DECIMAL = 3,
    /** Value of type Boolean */
    BOOL = 4,
    /** Value of type DateTime */
    DATETIME = 5,
    /** Value of type list */
    LIST = 6,
}

export enum ImageTagType {
    /** Only one main image can be selected. */
    SingleTag = 1,
    /** Multiple main images can be selected. */
    MultiTag = 2,
}

export enum ValueType {
    String = "STRING",
    Integer = "INT",
    Double = "DOUBLE",
    Boolean = "BOOLEAN",
    Password = "PASSWORD",
    List = "LIST"
}

export enum ShippingRefundType {
    /** Shipping refunds are not supported. */
    NotSupported = 0,
    /** Shipping refunds are only supported when attached to an item. */
    TiedToItem = 1,
    /** Shipping refunds are supported as independent refunds. */
    Independent = 2,
}

export enum ListingUpdateType {
    /** Create listing */
    CREATE = 0,
    /** Update Listing */
    UPDATE = 1,
}

export enum ImageListingType {
    /**
     * Uses MaxImages (see {@link ListingImage}) and MaxVariantImages(see {@link ListingImage}).  
     * For non variation listings: A max of MaxVariantImages uploaded  
     * images will be taken from the stock item and a total of MaxImages  
     * images will be selected.  
     * For variation listings: The variation parent and each child item will  
     * have a section to select images. A total of MaxVariationImages  
     * uploaded images from the variation parent stock item will be  
     * added to the Main image section. Uploaded images from each  
     * variation child stock item will be added to each variation child item  
     * section. For each variation child section a max of  
     * MaxVariationImages will be taken. Starting from the variation parent  
     * images and following on to each variation child images, each Image  
     * will be marked as Selected until MaxTotalImages has been reached.
    */
    CountTogether = 1,
    /**
     * Uses MaxImages and MaxVariantImages.  
     * For non variation listings: Uploaded images will be taken from the  
     * stock item and a total of MaxImages images will be selected.  
     * For variation listings: The Main Images will be taken from the  
     * variation parent item and a total of MaxImages will be selected.  
     * Uploaded images from each variation child stock item will be  
     * added to each variation child item section and a maximum of  
     * MaxVariantImages will be selected.
     */
    CountMainVariantsSeparately = 2,
    /**
     * Uses MaxImages and MaxVariantImages.  
     * For non variation listings:Uploaded images will be taken from the  
     * stock item and a total of MaxImages images will be selected.  
     * For variation listings: The Main Images will be taken from the  
     * variation parent item and each variation child item uploaded  
     * images and a total of MaxImages will be selected. Uploaded  
     * images from each variation child stock item will be added to each  
     * variation child item section and a maximum of MaxVariantImages  
     * will be selected.
     */
    SelectVariationFromMain = 3,
}

export type PaymentStatus = "PAID" | "UNPAID" | "CANCELLED";

export type DiscountType = "AllEvenly" | "ItemsThenPostage" | "PostageThenItems";

export type CancelStatus = "NONE" | "CANCELED";

/**
 * In order to start creating an external channel integraiton you must first register an account with Linnworks and then log in
 * to {@link http://developer.linnworks.com} and create a Channel Integration app. This will provide you with a default manifest
 * which will require you to fill out the below properties.
 */
export interface ManifestsParameters {
    /**
     * Unique name of the channel, no spaces all upper cases.
     * 
     * Must be unique (eg. No channels that are already integrated through native implementations)
     * 
     * This will be used on order download and assigned to the orders as the Source field.
     */
    ChannelName: string;
    /** Name of the channel visible in the app store. */
    ChannelFriendlyName: string;
    /**
     * Link to channel logo
     * 
     * **Required Size:** 57 x 57px
     */
    ChannelLogoURL: string;
    /**
     * Endpoint that is called to get an access token via OAuth, using client
     * credentials flow and passing in the client id and client secret set in the
     * installation
     */
    OAuthAuthorizationEndpoint: string;
    /** 
     * Space delimited list of scopes requested when asking for an OAuth token
     * (optional).
     */
    OAuthScopesRequested?: string;
    /**
     * This is the first endpoint that will be called when a customer adds the channel
     * on to their account (if OAuth isn't used). 
     */
    AddNewUserEndpoint: string;
    /**
     * Endpoint used for adding new users. Called when a customer clicks Integrate
     * in the config screen.
     */
    UserConfigEndpoint: string;
    /** Endpoint used for either saving the user config or on every wizard step. */
    SaveConfigEndpoint: string;
    /**
     * Endpoint which should return a list of Shipping tags and friendly names from
     * the channel. For example if a customer selects "NextDay" on the channel.
     */
    ShippingTagsEndpoint: string;
    /**
     * Endpoint which should return a list of Payment tags and friendly names from
     * the channel. For example if a customer selects "Sage Pay" on the channel.
     */
    PaymentTagsEndpoint: string;
    /**
     * Endpoint which is called when a customer deletes the integration from
     * Linnworks.
     */
    ConfigDeletedEndpoint: string;
    /**
     * Endpoint which is called when a customer presses test in the channel config.
     * This should verify if the customer's integration is correct.
     */
    ConfigTestEndpoint: string;
    /**
     * Endpoint which is called with parameters of PageNumber and UTCTimeFrom
     * and expected to return orders.
     * 
     * It is suggested that using last update date of orders is used.
     * This call should return Paid and unpaid orders.
     */
    OrdersEndpoint: string;
    /**
     * Endpoint which is called with a list of orders that have been despatched
     * within Linnworks.
     */
    DespatchEndpoint: string;
    /**
     * Endpoint which is called with details of an order cancellation within
     * Linnworks.
     */
    CancelEndpoint: string;
    /** Endpoint which is called with details of an order refund within Linnworks. */
    RefundEndpoint: string;
    /**
     * Endpoint which is called with parameters of PageNumber and expected to
     * return a list of products.
     */
    ProductsEndpoint: string;
    /**
     * Endpoint which is called with a list of inventory changes to be updated on
     * the channel. Note: Linnworks will only send changesand not the whole feed.
     */
    InventoryUpdateEndpoint: string;
    /**
     * Endpoint which is called with details of how to deal with post sale actions,
     * such as refunds & cancellations
     */
    PostSaleOptions: string;
    /**
     * Endpoint which is called with a list of price changes to be updated on the
     * channel. Note: Linnworks will only send changes and not the whole feed.
     */
    PriceUpdateEndpoint: string;
    /** Defines the number of inventory updates that can be sent at one time. */
    InventoryUpdateBatchSize: number;
    /** Defines the number of price updates that can be sent at one time. */
    PriceUpdateBatchSize: number;
    /** Defines the number of despatches will be sent at one time. */
    DespatchUpdateBatchSize: number;
    /**
     * Defines if external channel supports listing functionality via Linnworks. This
     * needs to be set to True if it is supported and the below endpoints need to be
     * provided then.
     */
    IsListingSupported: boolean;
    /**
     * Endpoint which contains settings that are then used to determine the listing
     * screen layout in Linnworks, how Linnworks processes and validates data
     * provided by the customer and which customer settings are required to be
     * filled out by the customer in order to create a successful listing.
     */
    GetConfiguratorSettingsEndpoint: string;
    /**
     * Endpoint which returns a list of required variation options. This is used e.g.
     * when configurator variation window is opened. Request contains selected
     * customer category ids and filled customer settings that can be used to
     * determine the list of required variations to be returned.
     */
    GetAttributesByCategoryEndpoint: string;
    /**
     * Endpoint which returns a list of categories. This is called e.g. when 
     * configurator categories window is first opened, or when categories are
     * refreshed by customer.
     */
    GetCategoriesEndpoint: string;
    /**
     * Endpoint is used when customer selects a list of items to be created or
     * updated.
     */
    ListingUpdateEndpoint: string;
    /** Endpoint is used when customer selects a list of items to be deleted. */
    ListingDeleteEndpoint: string;
    /**
     * Endpoint that is called to check status of submitted batch for listing creation, 
     * update or deletions.
     */
    CheckFeedEndpoint: string;
}

export interface AddNewUserRequest {
    /** Uniqueidentifer of the Linnworks customer's account. Will never change. */
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
    Error: string;
    /**
     * If successful the authorization token string of the customer. This will be used for
     * all subsequent calls.
     */
    AuthorizationToken: string;
}

export interface UserConfigRequest {
    /** Token that you generated for this customer. */
    AuthorizationToken: string;
}

export interface UserConfigResponse {
    /** Error string if there was an issue with the request. */
    Error: string;
    /** 
     * Current Step name, if returned "UserConfig" it will assume that the 
     * wizard is complete.
    */
    StepName: string;
    /** 
     * Account name being integrated into the system. Will never change 
     * and on integration it is suggest that duplicates are checked for. Nb.
     * Customers may expect to have multiple integrations of the same
     * channel in Linnworks.
     */
    AccountName: string;
    /** User visible title displayed on the integration wizard. */
    WizardStepDescription: string;
    ConfigItems: ConfigItem[];
}

export interface ConfigItem {
    /** Unique id of either the wizard item or config item. */
    ConfigItemId: string;
    /** 
     * Description of the config item or wizard item. Will be displayed in
     * tooltips .
     */
    Description: string;
    /** Used to group the config or wizard items. */
    GroupName: string;
    ListValues: ListValue[];
    /** Defines if the user must enter this value in the wizard or config. */
    MustBeSpecified: boolean;
    /** Visible name on the wizard or config. */
    Name: string;
    /** Defines if the field is a visible only field. */
    ReadOnly: boolean;
    /** 
     * Message that will be shown to the custmer if wizard field validation
     * does not go through.
     */
    RegexError: string;
    /** JavaScript Regex validation script. */
    RegexValidation: string;
    /**
     * Selected value either default value or value selected in the UI when
     * sent back.
     */
    SelectedValue: string;
    /** Order of config item to be displayed on the UI. */
    Sortorder: number;
    /**
     * Valid values:
     * - STRING
     * - INT
     * - DOUBLE
     * - BOOLEAN
     * - PASSWORD
     * - LIST
     */
    ValueType: ValueType;
    /** 
     * Determines whether a header-level attribute (e.g. InventorySync)
     * should be hidden from the config. Used in conjunction with the Name 
     * property, where Name identifies the attribute to hide.
     */
    HidesHeaderAttribute: boolean;
}

export interface ListValue {
    /** User friendly visible value. */
    Display: string;
    /**
     * Key value that Linnworks will then send back in the `SelectedValue` field on the
     * **SaveConfigEndpont**.
     */
    Value: string;
}

export interface SaveConfigRequest {
    /** Authorization Token from the customers integration. */
    AuthorizationToken: string;
    /** See {@link ConfigItem} */
    ConfigItems: ConfigItem[];
    /**
     * The step name Linnworks thinks it’s on. It’s good to check this field
     * incase wizards get out of sync for any reason.
     */
    StepName: string;
}

export type SaveConfigResponse = UserConfigRequest & {
    /** User visible title displayed on the integration wizard. */
    WizardStepTitle: string;
};

export interface ShippingTagsRequest {
    /** Authorization Token from the customers integration. */
    AuthorizationToken: string;
}

export interface ShippingTagsResponse {
    /** If there was an error with the request. */
    Error: string;
    /** Array of shipping tags. See {@link ShippingTag} table. */
    ShippingTags: ShippingTag[];
}

export interface ShippingTag {
    /**
     * The shipping tag that is supplied on the order.
     * Limit: 64 Characters
     */
    Tag: string;
    /**
     * Friendly name of the shipping tag.
     * Limit: 255 Characters
     */
    FriendlyName: string;
    /**
     * Site of the shipping tag, this is usually used when the channel has one set of
     * credentials however has multiple sites for example UK, DE, US and so on. Leave blank
     * if this is not applicable.
     * Limit: 25 Characters
     */
    Site: string;
}

export interface PaymentTagsRequest {
    /** Authorization Token from the customers integration. */
    AuthorizationToken: string;
}

export interface PaymentTagsResponse {
    /** If there was an error with the request. */
    Error: string;
    /** Array of payment tags. See {@link PaymentTags} table. */
    PaymentTags: PaymentTags[];
}

export interface PaymentTags {
    /** The payment tag that is supplied on the order. */
    Tag: string;
    /** Friendly name of the payment tag. */
    FriendlyName: string;
    /**
     * Site of the payment tag, this is usually used when the channel has one set of
     * credentials however has multiple sites for example UK, DE, US and so on. Leave blank
     * if this is not applicable.
     */
    Site: string;
}

export interface ConfigDeletedRequest {
    /** Authorization Token from the customers integration. */
    AuthorizationToken: string;
}

export interface ConfigDeletedResponse {
    /** Error message if there was a problem with the request. */
    Error: string;
}

export interface ConfigTestRequest {
    /** Authorization Token from the customers integration. */
    AuthorizationToken: string;
}

export interface ConfigTestResponse {
    /** Error message if there was a problem with the request. */
    Error: string;
}

export interface OrdersRequest {
    /** Authorization Token from the customers integration. */
    AuthorizationToken: string;
    /**
     * Utc date from Linnworks since the last time we had a successful orders
     * request. This may change from Linnworks side if the user want’s to back date
     * the sync. It is suggested that if the channels API has the availability of
     * filtering by the last time the order was updated to use this. Format: yyyy-
     * MM-dd HH:mm:ssZ
     */
    UTCTimeFrom: string;
    /** Page number of the request. Starts from 1. */
    PageNumber: number;
}

export interface OrdersResponse {
    /** If there was an error with the request. */
    Error: string;
    /** Array of orders returned from the call. See {@link Order} table */
    HasMorePages: Order[];
}

export interface Order {
    /**
     * Billing Address of the customer. If empty then shipping
     * address address must be applied.
     * See {@link Address}
     */
    BillingAddress?: Address;
    /**
     * Shipping Address of the customer. If empty then billing
     * address must be applied.
     * See {@link Address}
     */
    DeliveryAddress?: Address;
    /**
     * Array of order items relating to the order.
     * See {@link OrderItem}
     */
    OrderItems: OrderItem[];
    /**
     * Array of order extended properties relating to the order.
     * Names should be unique as they are used as a key.
     * See {@link ExtendedProperty}
     */
    ExtendedProperty: ExtendedProperty;
    /**
     * Array of order notes relating to the order.
     * See {@link Note} table.
     */
    Notes: Note[];
    /**
     * Site of the order, this is usually used when the channel has
     * one set of credentials however has multiple sites for
     * example UK, DE, US and so on. Leave blank if this is not
     * applicable. This field is used in Postal Service and
     * Payment mapping.
     */
    Site: string;
    /**
     * Shipping tag used which is used for order mapping to
     * map the channel shipping tag to the Linnworks shipping
     * service.
     */
    MatchPostalServiceTag: string;
    /**
     * Payment tag used which is used for order mapping to
     * map the channel payment tag to the Linnworks payment
     * service.
     */
    MatchPaymentMethodTag: string;
    /**
     * Payment status of the order. Valid values:
     * 
     * - `PAID` - The order will be downloaded as a paid order in Linnworks
     * - `UNPAID` - The order will be downloaded as an unpaid order in Linnworks
     * - `CANCELLED` - If the order exists in Linnworks, it will be
     * marked as cancelled. If it doesn't exist in Linnworks, it will
     * be ignored
     */
    PaymentStatus: PaymentStatus;
    /**
     * Name of the customer who bought the item. If the  
     * channel supports usernames it’s suggested to put the  
     * username instead of the actual name of the customer.
     */
    ChannelBuyerName: string;
    /**
     * Unique reference of the order. If two orders have the  
     * same reference then one will be ignored. This field will be  
     * sent back when marking orders as despatched.
     */
    ReferenceNumber: string;
    /**
     * External reference is usually the payment gateway  
     * transaction id.
     */
    ExternalReference: string;
    /** 3 digit ISO 4217 currency code of the order. */
    Currency: string;
    /**
     * Date the order was created. Where possible normalize to  
     * UTC Format: yyyy-MM-dd HH:mm:ssZ.
     */
    ReceivedDate: string;
    /**
     * Date the order was paid. Where possible normalize to  
     * UTC Format: ​yyyy-MM-dd HH:mm:ssZ.
     */
    DispatchBy: string;
    /** Postal cost of the order including tax. */
    PostalServiceCost: number;
    /** Tax rate used for the postal service. */
    PostalServiceTaxRate: number;
    /** 
     * If True Linnworks will not overwrite the  
     * PostalServiceTaxRate percentage.
     */
    UseChannelTax: boolean;
    /**
     * Discount type of the order. Valid values:
     *
     * - `AllEvenly` - The given discount amount will be split 
     * evenly across all items and any applicable postage.
     * - `ItemsThenPostage` - The discount amount will be split  
     * evenly across all items. Any remaining discount will be  
     * applied to the postage where applicable.
     * - `PostageThenItems` - he discount amount will be  
     * applied to the postage cost where applicable. Any  
     * remaining discount will be split evenly across all items.
     */
    DiscountType: DiscountType;
    /** The amount of discount. */
    Discount: number;
    /** Marketplace Tax Id. */
    MarketplaceTaxId: string;
    /** Tax number of buyer. */
    BuyerTaxNumber: string;
}

export interface Address {
    /** Customer Full Name. */
    FullName: string;
    /** Customer Company. */
    Company: string;
    /** First line of address. */
    Address1: string;
    /** Second line of address. */
    Address2: string;
    /** Third line of address. */
    Address3: string;
    /** Town. */
    Town: string;
    /** Area, County, State or Region. */
    Region: string;
    /** Postal / Zip Code. */
    PostCode: string;
    /** Country */
    Country: string;
    /** ISO 3166-2 Country Code. */
    CountryCode: string;
    /** Customer's phone number. */
    PhoneNumber: string;
    /** Email Address. */
    EmailAddress: string;
}

export interface OrderItem {
    /**	Customer Full Name. */
    TaxCostInclusive: boolean;
    /** Customer Company. */
    UseChannelTax: boolean;
    /** First line of address. */
    IsService: boolean;
    /**
     * Unique per order line number.  
     * Any orders with non unique or duplicates will not be saved.
     */
    OrderLineNumber: string;
    /**
     * SKU of the product (used for Mapping).  
     * Must not be empty.
     */
    SKU: string;
    /** Individual price per unit. */
    PricePerUnit: string;
    /** Quantity ordered, must be greater than zero. */
    Qty: string;
    /** Tax rate of the product. */
    TaxRate: string;
    /** Percentage line discount. */
    LinePercentDiscount: string;
    /**
     * Title of the product.  
     * Required when **IsService** is true  
     * Item title must be unique across all service items.
     */
    ItemTitle?: string;
    /**
     * Order item options, usually used for customizations.
     * 
     * Name must not exist multiple times as it's used as a key.  
     * See {@link OrderItemOption}.
     */
    Options: OrderItemOption[];
    /**
     * Cancellation status of the line item. Valid values:
     * - `NONE` - The order item will be downloaded into Linnworks.
     * - `CANCELLED` - If the order item exists in Linnworks, it will be split  
     * into a new order and cancelled. If all items are marked as  
     * cancelled it will cancel the original order. If it doesn't exist in  
     * Linnworks, it will be ignored.  
     * 
     * Currently only whole lines can be cancelled. Cancellation of  
     * partial line quantities is not supported.
     */
    CancelStatus: CancelStatus;
}

export interface OrderItemOption {
    /** Unique per order option Name. */
    Name: string;
    /** Option Value. */
    Value: string;
}

export interface ExtendedProperty {
    /** Unique per order option Name. */
    Name: string;
    /** Property value. */
    Value: string;
    /** Type of property for example "Shipping", "Tracking Number". */
    Type: string;
}

export interface Note {
    /** Note text, duplicates will be ignored. */
    Note: string;
    /** Date of the note Format: ​yyyy-MM-dd HH:mm:ssZ. */
    NoteEntryDate: string;
    /** User who entered the note, if left blank `Channel` will be entered. */
    NoteUserName: string;
    /** 
     * Indicates if the note is customer visible. For example if set to True then it will not 
     * be printed on an invoice
     */
    IsInternal: boolean;
}

export interface DespatchRequest {
    /** Authorization Token from the customers integration. */
    AuthorizationToken: string;
    /**
     * Array of dispatches, note due to splitting / cancellation functionality  
     * in Linnworks you many not receive all items from the original order.  
     * 
     * If a channel does not support line time or quantity despatch then it's  
     * suggested to mark as despatched on the first reference and ignore  
     * there after.
     * 
     * See {@link DespatchOrder}
     */
    Orders: DespatchOrder[];
}

export interface DespatchOrder {
    /** Unique reference of the order. */
    ReferenceNumber: string;
    /** 
     * Shipping Vendor / Carrier as defined by the customer in  
     * Linnworks
     */
    ShippingVendor: string;
    /**
     * Linnworks method name as defined by the customer in  
     * Linnworks
     */
    ShippingMethod: string;
    /** Tracking Number. */
    TrackingNumber: string;
    /** Additional Tracking numbers. */
    SecondaryTrackingNumbers: string[];
    /**
     * Date order was processed in UTC format.  
     * Format: yyyy-MM-dd HH:mm:ssZ
     */
    ProcessedOn: string;
    /**
     * Order items that are related to the Despatch.  
     * 
     * If the customer has used split packaging in Linnworks the  
     * order items might appear multiple times in different groups  
     * where they might exist in different packages.  
     * 
     * See {@link DespatchItem}
     */
    Items: DespatchItem[];
}

export interface DespatchItem {
    /** Channel SKU from the order item. */
    SKU: string;
    /** Unique line number from the order item. */
    OrderLineNumber: string;
    /** 
     * Quantity despatched, due to splits this might be less than the original order  
     * and additional quantity may be provided later.
     */
    DespatchedQuantity: string;
}

export interface DespatchResponse {
    /** If there was an error with the request. */
    Error: string;
    /**
     * Array of orders and the results of the despatch.  
     * 
     * If there are no errors it is still expected to return the reference with no  
     * error otherwise we assume the order was not found and do not  
     * confirm despatch back to the user.
     * 
     * See {@link DespatchOrderResponse}
     */
    Orders: DespatchOrderResponse[];
}

export interface DespatchOrderResponse {
    /** If there was an error with the individual order. */
    Error: string;
    /** Reference number of the order. */
    ReferenceNumber: string;
    /**
     * Indicates if an individual order will be retried. Will retry up to a maximum of 10  
     * times.
     */
    Retry: boolean;
}

export interface OrderRefundRequest {
    /** Authorization Token from the customers integration. */
    AuthorizationToken: string;
    /** Information about the order/items to refund. See {@link OrderRefund} */
    Refund: OrderRefund;
}

export interface OrderRefund {
    /** A collection of order items to refund on the marketplace. */
    Items: OrderRefundItem[];
    /** The order reference number within Linnworks. */
    ReferenceNumber: string;
    /**
     * The external reference number within Linnworks. This is  
     * usually the marketplace reference.
     */
    ExternalReference: string;
    /** The amount to refund for shipping. */
    RefundShippingAmount: number;
}

export interface OrderRefundItem {
    /** The unique Linnworks SKU of the item. */
    SKU: string;
    /** 
     * The order item number for this item. This is usually the marketplace ID for the  
     * order item.
     */
    OrderLineNumber: string;
    /** The amount to submit as a refund for this item. */
    RefundAmount: number;
    /** 
     * If the marketplace supports tag-based refund reasons, this field will contain the  
     * selected tag. Otherwise, it will include the freetext reason submitted by the  
     * customer.
     */
    Reason: string;
    /**
     * If the marketplace supports tag-based refund reasons, this field will contain the  
     * selected sub-tag.
     */
    SecondaryReason: string;
}

export interface OrderRefundResponse {
    /** Returns the created refund reference from the marketplace. */
    RefundReference: string;
    /** Defines if there was an error with the request and returns it. */
    Error: string;
}

export interface OrderCancelRequest {
    /** Authorization Token from the customers integration. */
    AuthorizationToken: string;
    /**
     * Information about the order/items to cancel. See  
     * {@link OrderCancellation}
     */
    Cancellation: OrderCancellation;
}

export interface OrderCancellation {
    /**
     * A collection of order items to cancel on the marketplace. See  
     * {@link OrderCancellationItem}
     */
    Items: OrderCancellationItem;
    /** The order reference number within Linnworks. */
    ReferenceNumber: string;
    /** 
     * The external reference number within Linnworks. This is usually  
     * the marketplace reference.
     */
    ExternalReference: string;
}

export interface OrderCancellationItem {
    /** The unique Linnworks SKU of the item. */
    SKU: string;
    /**
     * The order item number for this item. This is usually the marketplace ID for  
     * the order item.
     */
    OrderLineNumber: string;
    /** The quantity of this item to submit for cancellation. */
    CancellationQuantity: number;
    /**
     * If the marketplace supports tag-based refund reasons, this field will contain  
     * the selected tag. Otherwise, it will include the freetext reason submitted by  
     * the customer.
     */
    Reason: string;
    /**
     * If the marketplace supports tag-based refund reasons, this field will contain  
     * the selected sub-tag.
     */
    SecondaryReason: string;
}

export interface OrderCancelResponse {
    /** Defines if there was an error with the request and returns it. */
    Error: string;
}

export interface ProductsRequest {
    /** Authorization Token from the customers integration. */
    AuthorizationToken: string;
    /** Current page number in the fetch sequence, starts from 1. */
    PageNumber: number;
}

export interface ProductsResponse {
    /**
     * If there was an error with the request.  
     * 
     * In the cases where there are no products or no more products on the call, return  
     * `HasMorePages` as `false` instead of returning an error.
     */
    Error: string;
    /**
     * Indicates if more pages are expected, if true then Linnworks will increment the  
     * page call and call again.
     */
    HasMorePages: boolean;
    /**
     * Array of products returned from the channel.  
     * 
     * See {@link Product}
     */
    Products: Product[];
}

export interface Product {
    /** Product Unique SKU, duplicates are not allowed. */
    SKU: string;
    /** Title of the product. */
    Title: string;
    /** Current quantity / stock level on the channel. */
    Quantity: number;
    /** Current price on the channel. */
    Price: number;
    /**
     * Reference from the channel e.g. internal product ID. This will be submitted alongside  
     * the SKU in inventory and price updates. If there is no reference then supply SKU  
     * **Limit 64 Chars**
     */
    Reference: string;
}

export interface InventoryUpdateRequest {
    /** Authorization Token from the customers integration. */
    AuthorizationToken: string;
    /**
     * Array of product inventory that has been updated in Linnworks  
     * and is relevant for change.  
     * 
     * See {@link ProductInventory}
     */
    Products: ProductInventory[];
}

export interface ProductInventory {
    /** Product SKU provided from the mapping call, known as Channel SKU in Linnworks */
    SKU: string;
    /** Reference provided from the mapping call. */
    Reference: string;
    /**
     * New available quantity. Linnworks calculates stock less what is in open orders (unless the  
     * order is locked) and also has settings for max listed, percentage and end when so this  
     * figure might not directly match the quantities in Linnworks.  
     * 
     * Quantities will never be negative.
     */
    Quantity: number;
}

export interface InventoryUpdateResponse {
    /** If there was a global error with the request. */
    Error: string;
    /**
     * Products process result.  
     * 
     * If there are no errors the SKU is still expected to be returned, any  
     * items not returned may be assumed to be not existing on the  
     * marketplace and therefore may be ignored on subsequent updates.  
     * 
     * See {@link ProductInventoryError}
     */
    Products: ProductInventoryError[];
}

export interface ProductInventoryError {
    /** Product SKU. */
    SKU: string;
    /** If there was an error with SKU. */
    Error: string;
}

export interface PriceUpdateRequest {
    /** Authorization Token from the customers integration. */
    AuthorizationToken: string;
    /** See {@link ProductPrice}. */
    Products: ProductPrice[];
}

export interface ProductPrice {
    /** Product SKU. */
    SKU: string;
    /** Product Reference, e.g. Internal product id. */
    Reference: string;
    /** New price. */
    Price: number;
    /** Price tag, this is free text but can be used to identify different types of Prices. */
    Tag: string;
}

export interface PriceUpdateResponse {
    /** If there was an error with the request. */
    Error: string;
    /** Product price process result. */
    Products: ProductPriceError[];
}

export interface ProductPriceError {
    /** Product Unique SKU. */
    SKU: string;
    /** If there was an error with the product update. */
    Error: string;
}

export interface GetPostSaleOptionsRequest {
    /** Authorization Token from the customers integration. */
    AuthorizationToken: string;
}

export interface GetPostSaleOptionsResponse {
    /** If there was an error with the product update. */
    Error: string;
    /**	Determines whether the channel allows cancelling an order. */
    CanCancel: boolean;
    /** Determines whether the channel allows cancelling individual order lines. */
    CanCancelOrderLines: boolean;
    /** Determines whether the channel allows cancelling only part of an order line (not the full quantity). */
    CanCancelOrderLinesPartially: boolean;
    /** Determines whether the channel will automatically refund an order when it is cancelled. */
    AutomaticRefundOnCancel: boolean;
    /** Determines whether the channel allows refunding an order. */
    CanRefund: boolean;
    /** Determines whether the channel allows attaching refunds to a particular order line. */
    CanAttachRefundToItem: boolean;
    /** Determines whether the channel allows attaching refunds to service lines. */
    CanAttachRefundToService: boolean;
    /** Determines how the channel deals with shipping refunds. */
    RefundShippingTypes: ShippingRefundType;
    /** Determines whether the channel allows creating refunds independent of any items/shipping. */
    CanRefundAdditionally: boolean;
    /** Determines whether the channel allows creating returns. */
    CanReturn: boolean;
    /** Provides a list of reasons for post-sale actions. */
    PostSaleReasons: PostSaleReasons[];
}

export interface PostSaleReasons {
    /** Value used when submitting to the channel, e.g. OrderedWrongSize. */
    Tag: string;
    /**
     * A user-readable version of Tag, displayed to the user, e.g. Ordered  
     * Wrong Size.
     */
    DisplayName: string;
    /**
     * The action this reason relates to, e.g. is this a reason for cancelling an  
     * order, or is it a reason for refunding shipping cost, or both etc.
     */
    Type: ChannelReasonType[];
    /** Any subreasons for the reason. */
    SubReasons: SubReason[];
}

export interface SubReason {
    /** Value used when submitting to the channel. */
    Tag: string;
    /** A user-readable version of Tag, displayed to the user. */
    DisplayName: string;
}

export interface ConfiguratorSettingsResponse {
    /**
     * See {@link CustomerSettings}. Various settings that  
     * are needed for listing creation. E.g. variation  
     * settings, returns settings etc.
     */
    Settings: CustomerSettings[];
    /**
     * Is used to validate that the description set for the  
     * listing is not above the MaxDescriptionLength  
     * when the template description is saved.
     */
    MaxDescriptionLength: number;
    /**
     * See {@link ListingImage}. Settings that will be  
     * applied to images used in listings on given  
     * selling channel.
     */
    ImageSettings: ListingImage;
    /** Currently does not get used. */
    MaxCategoryCount?: number;
    /** Currently does not get used. */
    MaxCustomAttributeLength?: number;
    /**
     * If set to true, will have the description editor on  
     * template level that will allow customers to add  
     * html descriptions.
     */
    IsCustomHtmlSupported: boolean;
    /**
     * If set to true allows the customer to add their  
     * own custom attribute and value which will be  
     * sent to the external application at the time of  
     * listing creation / update.
     */
    IsCustomAttributesAllowed: boolean;
    /**
     * If set to true, allows customers to create  
     * variation listings. If set to false, variation window  
     * on configurator and template window will not  
     * display.
     */
    IsVariationsAllowed: boolean;
    /**
     * If set to true and the item is a variation listing,  
     * sets the price on the template
     */
    HasMainVariationPrice: boolean;
    /**
     * If set to true and the item is a variation listing,  
     * each variation child item can have its own title.
     */
    IsTitleInVariation: boolean;
    /** Not being used. */
    HasVariationAttributeDisplayName?: boolean;
    /**
     * If set to true and the item is a variation listing,  
     * then each variation child item will have its own  
     * price on the template.
     */
    IsPriceInVariation: boolean;
    /**
     * If true then shipping configurator and template  
     * window will display for the customer in  
     * Configurator screen. The list of shipping  
     * methods the customer can select from will be  
     * taken from the Channel Integration -> Channel  
     * Shipping ( Shipping Tags of channel integration  
     * endpoint). It will be possible also to set a price  
     * for a specific shipping method.
     */
    IsShippingListingSpecific: boolean;
    /**
     * If true then payment configurator window will  
     * display for the customer. The list of payment  
     * methods the customer can select from will be  
     * taken from the PaymentTagsEndpoint list  
     * (channel integration endpoint).
     */
    IsPaymentListingSpecific: boolean;
    /** Dislays error if there was an error with the request and returns it. */
    Error: string;
}

export interface CustomerSettings {
    GroupName: GroupNameValueType;
    ConfigItemId: string;
    Subtitle: string;
    SubTitleSortOrder: number;
    ItemSortOrder: number;
    Description: string;
    FriendlyName: string;
    MustBeSpecified: boolean;
    ExpectedType: ListingValueType;
    ValueOptions: string[];
    InitialValues: string[];
    IsMultiOption: boolean;
    ValueFromOptionsList: boolean;
    RegExValidation: string;
    RegExError: string;
    IsWizardOnly: boolean;
}

export interface ListingImage {
    Type: ImageListingType;
    MaxImages: number;
    MaxVariantImages: number;
    ImageTags: ImageTag[];
}

export interface ImageTag {
    /** E.g. Main Image, Thumbnail, Basket, Large Image etc. */
    Name: string;
    ImageTagType: ImageTagType;
}

export interface ProductCategoriesRequest {
    AuthorizationToken: string;
    PageNumber: number;
}

export interface ProductCategoriesResponse {
    HasMorePages: boolean;
    Categories: ListingCategory[];
    Error: string;
}

export interface ListingCategory {
    /** Category ID. */
    CategoryId: BigInt;
    /** Category Name */
    CategoryName: string;
}

export interface ProductCategoryAttributeRequest {
    AuthorizationToken: string;
    CategoryIds: string[];
    GeneralSettings: Setting[];
}

export interface Setting {
    ID: string;
    Values: string[];
}

export interface ProductCategoryAttributeResponse {
    Attributes: ListingCategoryAttribute[];
    Error: string;
}

export interface ListingCategoryAttribute {
    ID: string;
    FriendlyName: string;
    Description: string;
    MustBeSpecified: MustBeSpecified;
    ExpectedType: string;
    ValueOptions: string[];
    ValueFromOptionsList?: boolean;
    MaxAttributeUse: number;
    AttribueReadFrom: AttributeReadFrom;
    RegExValidation?: string;
    RegExError?: string;
}

export interface FeedRequest {
    ChannelFeedId: string;
    AuthorizationToken: string;
}

export interface FeedResponse {
    ProductFeeds: ProductFeed[];
    IsFeedReady: boolean;
    Error: string;
}

export interface ProductFeed {
    Messages: ProductMessage[];
    SKU: string;
    ExternalListingId: string;
    TemplateId: number;
    URL: string;
    ChannelReferences: ChannelReference[];
}

export interface ChannelReference {
    SKU: string;
    Reference: string;
}

export interface ProductMessage {
    ProductFeedMessageType: ProductFeedMessageType;
    Message: string;
}

export interface OAuthAuthorizationResponse {
    access_token: string;
    token_type: string;
    expires_in: string;
    scope: string;
}

export interface ConfigTestRequest {
    AuthorizationToken: string;
    CategoryIds: string[];
    GeneralSettings: Setting[];
}

export interface ProductCategoryVariationsResponse {
    Error: string;
    MaxVariationAttributes: number;
    NeededVariations: ListingCategoryVariation[];
}

export interface ListingCategoryVariation {
    VariationName: string;
    Description: string;
}

export interface ProductsListingsRequest {
    AuthorizationToken: string;
    Type: ListingUpdateType;
    Listings: ProductListing[];
    Settings: ConfiguratorGeneralSetting[];
}

export interface ProductListing {
    ConfiguratorId: number;
    TemplateId: number;
    ExternalListingId: number;
    SKU: string;
    Title: string;
    Description: string;
    Quantity: number;
    Images: ProductImage[];
    Price: number;
    ShippingMethods: ProductShipping[];
    Attributes: ListingAttribute[];
    Variations: ProductVariation[];
    VariationOptions: ProductOption[];
}

export interface ProductImage {
    Url: string;
    Tags: string[];
}

export interface ProductShipping {
    Price: number;
    ShippingMethodID: string;
}

export interface ListingAttribute {
    IsCustomAttribute: boolean;
    AttributeID: string;
    AttributeValue: string;
}

export interface ProductVariation {
    SKU: string;
    Title: string;
    Quantity: number;
    Images: ProductImage[];
    Price: number;
    OptionValues: VariationOption[];
    AttributeSettings: ListingAttribute[];
}

export interface VariationOption {
    Value: ProductOptionValue;
    Position: number;
    Name: string;
}

export interface ProductOptionValue {
    Position: number;
    Value: string;
}

export interface ProductOption {
    Values: ProductOptionValue;
    Position: number;
    Name: string;
}

export interface ConfiguratorGeneralSetting {
    ConfiguratorId: number;
    ProductSettings: ProductSettings;
}

export interface ProductSettings {
    SKU: string;
    Title: string;
    Quantity: number;
    Images: ProductImage[];
    Price: number;
    OptionValues: VariationOption[];
    AttributeSettings: ListingAttribute[];
}

export interface Setting {
    ID: string;
    Value: string[];
}

export interface ProductsListingResponse {
    ChannelFeedId: string;
    Error: string;
}

export interface ProductsListingDeleteRequest {
    AuthorizationToken: string;
    ExternalListingIds: ListingDeleteData[];
}

export interface ListingDeleteData {
    ChannelSKU: OrderCancellationItem;
    ExternalListingId: string;
    TemplateId: number;
}

export interface ProductsListingResponse {
    /**
     * ID for the feed that corresponds to the batch of products that were created,  
     * updated or deleted. If the channel does not use feeds, a feed id needs to be  
     * generated by the external developer.
     */
    ChannelFeedId: string;
    /** Defines if there was an error with the request and returns it. */
    Error: string;
}
