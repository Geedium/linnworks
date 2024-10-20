export type ChannelType = "CDiscount" | "Shopify" | "Magento"
    | "External" | "Walmart" | "TikTok";

export type TemplateRequestAction = "NotAllowed" | "ChannelSpecific" | "Create"
    | "Update" | "Relist" | "Delete" | "Revise";

export interface SaveTemplateFieldsRequest {
    ChannelType: ChannelType;
    ChannelName: string;
    TemplateId: number;
    FieldsToSave: Record<string, Record<string, string>>;
}

export interface TemplateRequest {
    TemplateId: number;
    Action: TemplateRequestAction;
}

export interface ProcessTemplatesRequest {
    ChannelType: ChannelType;
    ChannelName: string;
    TemplateRequests: TemplateRequest[];
}

export interface TemplatesParameters {
    SelectedRegions: string[];
    Token: string;
    InventoryItemIds: string[];
    ChannelId: number;
}

export interface TemplatesPaginationParameters {
    PageNumber: number;
    EntriesPerPage: number;
}

export interface CreateTemplatesRequest {
    ChannelType: ChannelType;
    ChannelName: string;
    Parameters: TemplatesParameters;
    PaginationParameters: TemplatesPaginationParameters;
    ConfiguratorId: number;
}

export interface CreateTemplatesResponse {
    TemplatesInfo: object[];
    AllCreatedIds: number[];
}

export interface OpenTemplatesByInventoryRequest {
    ChannelType: ChannelType;
    ChannelName: string;
    Parameters: TemplatesParameters;
    PaginationParameters: TemplatesPaginationParameters;
    SelectOnlyWithErrors: boolean;
}

export interface OpenTemplatesByInventoryResponse {
    TotalEntries: number;
    TemplatesInfo: object[];
}

export interface GetConfiguratorsInfoPagedRequest {
    ChannelType: ChannelType;
    ChannelName: string;
    PaginationParameters: TemplatesPaginationParameters;
    IsByConfiguratorIds: boolean;
    ConfiguratorIds: number[];
    SelectedRegions: string[];
    Token: string;
}

export interface GetConfiguratorsInfoPagedResponse {
    ConfiguratorsInfo: object[];
}

export interface SaveConfiguratorFieldsRequest {
    ChannelType: ChannelType;
    ChannelName: string;
    ConfiguratorId: number;
    FieldsToSave: Record<string, Record<string, string>>;
}

export interface GetConfiguratorDescriptionRequest {
    ChannelType: ChannelType;
    ChannelName: string;
    DataKey: string;
    ConfiguratorId: number;
    IgnoreCache: boolean;
}

export interface GetConfiguratorDescriptionResponse {
    Data: string;
}

export interface SaveConfiguratorDescriptionRequest {
    ChannelType: ChannelType;
    ChannelName: string;
    Description: string;
    ConfiguratorIds: number[];
}

export interface SaveConfiguratorDescriptionResponse {
    IsSaved: boolean;
    ErrorMessage: string;
}

export interface GetConfiguratorDataRequest {
    ChannelType: ChannelType;
    ChannelName: string;
    DataKey: string;
    ConfiguratorId: number;
    IgnoreCache: boolean;
}

export interface SaveConfiguratorDataRequest {
    ChannelType: ChannelType;
    ChannelName: string;
    DataKey: string;
    Ids: number[];
    Data: Record<string, string>;
    ForceSave: boolean;
}

export interface SaveConfiguratorDataResponse {
    IsSaved: boolean;
    ValidationResults: object;
}

export interface CreateConfiguratorRequest {
    ChannelType: ChannelType;
    ConfiguratorName: string;
    ChannelId: number;
    ChannelName: string;
}

export interface CreateConfiguratorResponse {
    CreatedConfiguratorInfo: object;
    CreatedConfiguratorId: number;
}

export interface DeleteConfiguratorsRequest {
    ChannelType: ChannelType;
    ChannelName: string;
    ConfiguratorIds: number[];
}

export interface DeleteConfiguratorsResponse {
    DeletedIds: number[];
}
