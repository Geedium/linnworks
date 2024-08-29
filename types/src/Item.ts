import ExtendedProperty from "./ExtendedProperty";

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
