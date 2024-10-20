export interface Account {
    Vendor: string;
    AccountId: string;
    VendorFriendlyName: string;
}

export interface GetShippingQuoteRequest {
    pkOrderId: string;
    Accounts: Account[];
}
