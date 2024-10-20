import { ApiOptions } from "./types";
import LinnworksApi from "./v1/index";
import LinnworksApi2 from "./v2/index";

export { Authenticate } from "./v1/authenticate";
export { Dashboards } from "./v1/dashboards";

export const Linnworks = (options: ApiOptions) => {
    switch (options.version) {
        case "v1": return new LinnworksApi(options);
        case "v2": return new LinnworksApi2(options);
        default: throw new Error(`API version ${options.version} not supported.`);
    }
};
