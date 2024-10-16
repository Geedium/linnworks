import axios, { AxiosInstance } from "axios";
import LinnworksBase from "../../api";
import { ApiOptions } from "../../types";
import axiosRetry from "axios-retry";
import { EmailGenerationRequest, EmailGenerationResponse, EmailTemplate, EmailTemplates, GenerateFreeTextEmailOptions } from "./types";

export class Email extends LinnworksBase {
    private axiosClient: AxiosInstance;

    constructor(options: ApiOptions) {
        super(options);
        this.axiosClient = axios.create({
            baseURL: this.sessionServer + "/api/Email",
            headers: {
                Authorization: this.sessionToken,
            },
        });
        axiosRetry(this.axiosClient, {
            retries: 3,
        });
    }

    reinvalidateClient() {
        this.axiosClient.defaults.baseURL = this.sessionServer + "/api/Email";
        this.axiosClient.defaults.headers.Authorization = this.sessionToken;
    }

    /**
     * Get the whole list of email header templates
     */
    async getEmailTemplates() {
        if (!this.axiosClient) {
            throw new Error("No http (axios) client instance found.");
        }
        this.reinvalidateClient();
        const { data } = await this.axiosClient.get<EmailTemplates[]>("GetEmailTemplates");
        return data;
    }

    /**
     * Get the full data of a specific email template
     * @param pkEmailTemplateRowId - Id of the email template to retrieve
     */
    async getEmailTemplate(pkEmailTemplateRowId: number) {
        if (!this.axiosClient) {
            throw new Error("No http (axios) client instance found.");
        }
        this.reinvalidateClient();
        const { data } = await this.axiosClient.get<EmailTemplate>("GetEmailTemplate", {
            params: { pkEmailTemplateRowId },
        });
        return data;
    }

    /**
     * Generate a custom email
     * @param options - request options
     */
    async generateAdhocEmail(options: EmailGenerationRequest) {
        if (!this.axiosClient) {
            throw new Error("No http (axios) client instance found.");
        }
        this.reinvalidateClient();
        const { data } = await this.axiosClient.post<EmailGenerationResponse>(
            "GenerateAdhocEmail", {
            request: options,
        });
        return data;
    }

    /**
     * Generate a custom email
     * @param options - request options
     */
    async generateFreeTextEmail(options: GenerateFreeTextEmailOptions) {
        if (!this.axiosClient) {
            throw new Error("No http (axios) client instance found.");
        }
        this.reinvalidateClient();
        const { data } = await this.axiosClient.post<EmailGenerationResponse>(
            "GenerateFreeTextEmail", {
            request: options,
        });
        return data;
    }
}
