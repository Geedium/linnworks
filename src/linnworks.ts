import LinnworksBase from "./api/index";
import { ApiOptions } from "./types";
import LinnworksApi from "./v1/index";
import LinnworksApi2 from "./v2/index";

export default class Linnworks {
    public readonly api: LinnworksBase;

    constructor(options: ApiOptions) {
        const version = options.version || 'v1';
        this.api = (() => {
            switch (version) {
                case 'v1': return new LinnworksApi(options);
                case 'v2': return new LinnworksApi2(options);
                default: throw new Error(`API version ${version} not supported.`);
            }
        })();
    }
}
