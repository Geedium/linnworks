import LinnworksBase from "../../api";
import { ApiOptions } from "../../types";
import axios, { AxiosInstance } from "axios";
import { Session } from "./types";

export class Authenticate extends LinnworksBase {
    public static readonly API_URL = "https://api.linnworks.net/api";
    private axiosClient: AxiosInstance;
    private token?: string;
    private appId: string;
    private appSecret: string;
    public session: Session | null;

    constructor(options: ApiOptions) {
        super(options);
        this.token = options.installiationToken;
        this.appId = options.applicationId || process.env.LINNWORKS_APP_ID || "";
        this.appSecret = options.applicationSecret || process.env.LINNWORKS_APP_SECRET || "";
        this.axiosClient = axios.create({
            baseURL: Authenticate.API_URL,
        });
        this.session = null;
    }

    get sessionToken() {
        if (!this.session || !this.session.Token) {
            return "";
        }
        return this.session.Token?.replace(/-/g, '');
    }

    /**
     * Returns current application subscription profile information for a given application for a specific user.
     * You can use this method to get the current application subscription after
     * AuthorizedByApplication returned a session.
     * The session will contain Id, this is the UserId you need to supply in the call.
     * If there are no current subscriptions for the application for the user. The method will
     * return null (nothing)
     * 
     * @param userId - User Id (Id field of the session)
     */
    async getApplicationProfileBySecretKey(userId = this.session?.UserId) {
        if (!this.axiosClient) {
            throw new Error("No http (axios) client instance found.");
        }
        const { data } = await this.axiosClient.post(
            "Auth/GetApplicationProfileBySecretKey",
            {
                applicationId: this.appId,
                applicationSecret: this.appSecret,
                userId,
            });
        return data;
    }

    /**
     * Generates a sesssion and provide Authorization Token and server in response.
     */
    async authorizeByApplication() {
        if (!this.axiosClient) {
            throw new Error("No http (axios) client instance found.");
        }
        const { data } = await this.axiosClient.post<Session>(
            "Auth/AuthorizeByApplication", {
            ApplicationId: this.appId,
            ApplicationSecret: this.appSecret,
            Token: this.token,
        });
        this.session = data;
        this.setSession(this.session);
        if (!this.session) {
            return null;
        }
        return data;
    }
}