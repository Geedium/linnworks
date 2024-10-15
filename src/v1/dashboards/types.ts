export interface LowStockLevel {
    ItemTitle: string;
    ItemNumber: string;
    Quantity: number;
    MinimumLevel: number;
    InBooks: number;
    Location: string;
}

export interface PerformanceTable {
    Name: string;
    Price: number;
    Currency: string;
}

export interface GetStockLevelOptions {
    /** Used to specify report location id or null for combined */
    locationId: string | null;
    /** Used to specify number of returned rows */
    numRows: number;
}

export interface GetPerformanceTableOptions {
    /** Used to specify report number of months */
    period: number;
}

export interface GetPerformanceDetailOptions {
    /** Used to specify report number of months */
    period: number;
    /** time scale */
    timeScale: number;
}

export type GetPerformanceDetail = Record<string, {
    /** date-time */
    Date: string;
    /** double */
    Value: number;
}[]>;

export interface GetTopProductsOptions {
    /** Used to specify type of report: 
     * + 1 - group result by quantity
     * + 2 - group result by turnover 
     */
    type: string;
    /** Used to specify report number of months */
    period: number;
    /** Number of rows required */
    numRows: number;
    /** Order status */
    orderStatus: number;
}

export interface TopOrderedProduct {
    RowNum: number;
    Quantity: number;
    Cost: number;
    Title: string;
    SKU: string;
    Currency: string;
}

export interface GetInventoryDataOptions {
    /** Used to specify report date or null for current period */
    date: string;
}

export interface GetInventoryLocationProductsDataOptions {
    /** Used to specify report date or null for current period */
    date: string;
    /** Used to specify report location id */
    locationId: string;
    /** Used to specify report category id */
    categoryId: string;
    /** Used to specify report page number */
    pageNumber: number;
    /** Used to specify number of entries per page in report */
    entriesPerPage: number;
}

export interface InventoryLocationProductsData {
    TotalResults: number;
    Results: {
        ItemNumber: string;
        ItemTitle: string;
        StockLevel: number;
        StockValue: number;
    }[];
}

export interface InventoryStockData {
    StockLocationId: string;
    StockLevel: number;
    StockValue: number;
}

export interface InventoryLocationData extends InventoryStockData {
    Location: string;
}

export interface InventoryLocationCategoriesData extends InventoryStockData {
    CategoryName: string;
    CategoryId: string;
}

export interface GetInventoryLocationCategoriesDataOptions {
    /** Used to specify report date or null for current period */
    date: string;
    /** Used to specify report location id */
    locationId: string;
}
