import LinnworksBase from "../api/index";
import { ApiOptions } from "../types";
import { Authenticate } from "./authenticate";
import { Dashboards } from "./dashboards";

class LinnworksApi extends LinnworksBase {
    public readonly authenticate: Authenticate;
    public readonly dashboards: Dashboards;

    constructor(options: ApiOptions) {
        super(options);
        this.authenticate = new Authenticate(options);
        this.dashboards = new Dashboards(options);
    }
}

export default LinnworksApi;
