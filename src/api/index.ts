import { ApiOptions } from "../types";
import { Session } from "../v1/authenticate/types";

export default class LinnworksBase {
    private static session: Session;

    constructor(_options: ApiOptions) {}

    protected getSession() {
        return LinnworksBase.session;
    }

    protected setSession(session: Session) {
        LinnworksBase.session = session;
    }

    get sessionServer() {
        const session = LinnworksBase.session;
        if (!session || !session.Server) {
            return "";
        }
        return session.Server;
    }

    get sessionToken() {
        const session = LinnworksBase.session;
        if (!session || !session.Token) {
            return "";
        }
        return session.Token?.replace(/-/g, '');
    }
}