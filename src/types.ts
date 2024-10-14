import { SUPPORTED_VERSIONS } from "./constants";

export type ApiVersion = typeof SUPPORTED_VERSIONS[number];

export interface ApiOptions {
    version?: ApiVersion;
    applicationId?: string;
    applicationSecret?: string;
    installiationToken?: string;
}
