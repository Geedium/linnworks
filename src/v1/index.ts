import LinnworksBase from "../api/index";
import { ApiOptions } from "../types";
import { Authenticate } from "./authenticate";

class LinnworksApi extends LinnworksBase {
    public readonly authenticate: Authenticate;

    constructor(options: ApiOptions) {
        super(options);
        this.authenticate = new Authenticate(options);
    }
}

export default LinnworksApi;
