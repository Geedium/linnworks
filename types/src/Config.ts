import { GenericValue, ValueType } from "./utils";

export interface Config {

}

export type ConfigListItem = GenericValue;

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

export interface ConfigItemValue {
    ConfigItemId: string;
    SelectedValue: string;
}

export interface ConfigStage {
    WizardStepDescription: string;
    WizardStepTitle: string;
    ConfigItems: ConfigItem[];
}
