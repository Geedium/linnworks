import { ConfigItemValue, ConfigStage } from "./Config";
import { Either, GenericResponse } from "./utils";

export type UserConfigRequest = Either<{
    AuthorizationToken: string;
    ConfigStatus: string;
    ConfigItems: ConfigItemValue[];
}, {
    /**
     * Token that you generated for this customer.
     */
    AuthorizationToken: string;
}>;

export type UserConfigResponse = {
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
