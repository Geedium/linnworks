import { ConfigItemValue, ConfigStage } from "./Config";
import { Either, GenericResponse } from "./utils";

export type UserConfigRequest = Either<{
    AuthorizationToken: string;
    ConfigStatus: string;
    ConfigItems: ConfigItemValue[];
}, {
    AuthorizationToken: string;
}>;

export type UserConfigResponse = {
    IsConfigActive: boolean;
    ConfigStatus: string;
    ConfigStage: ConfigStage;
    WizardStepDescription: string;
    IsError: boolean;
    ErrorMessage: string | null;
} | GenericResponse;
