import LinnworksBase from "../api/index";
import { ApiOptions } from "../types";
import { Authenticate } from "./authenticate";
import { Dashboards } from "./dashboards";
import { Email } from "./email";

class LinnworksApi extends LinnworksBase {
    public readonly authenticate: Authenticate;
    public readonly dashboards: Dashboards;
    public readonly email: Email;

    constructor(options: ApiOptions) {
        super(options);
        this.authenticate = new Authenticate(options);
        this.dashboards = new Dashboards(options);
        this.email = new Email(options);
    }
}

export default LinnworksApi;
