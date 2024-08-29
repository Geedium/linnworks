export interface ExtendedPropertyMapping {
    PropertyTitle: string;
    PropertyName: string;
    PropertyDescription: string;
    PropertyType: string;
}

export interface ExtPropertyMapRequest {
    AuthorizationToken: string;
}

export interface ExtendedPropertyMapResponse {
    Items: ExtendedPropertyMapping[];
    IsError: boolean;
    ErrorMessage: string | null;
}

export type ExtendedPropertyMappingResult =
    ExtendedPropertyMapResponse |
    ExtendedPropertyMapping;
