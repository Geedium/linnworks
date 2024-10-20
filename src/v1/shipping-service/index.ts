import axios, { AxiosInstance } from "axios";
import LinnworksBase from "../../api";
import { ApiOptions } from "../../types";
import axiosRetry from "axios-retry";
import qs from "qs";
import { GetShippingQuoteRequest } from "./types";

export class ShippingService extends LinnworksBase {
    private axiosClient: AxiosInstance;

    constructor(options: ApiOptions) {
        super(options);
        this.axiosClient = axios.create({
            baseURL: this.sessionServer + "/api/ShippingService",
            headers: {
                Authorization: this.sessionToken,
            },
        });
        axiosRetry(this.axiosClient, {
            retries: 3,
        });
    }

    reinvalidateClient() {
        this.axiosClient.defaults.baseURL = this.sessionServer + "/api/ShippingService";
        this.axiosClient.defaults.headers.Authorization = this.sessionToken;
    }

    async getShippingQuote(params: GetShippingQuoteRequest) {
        if (!this.axiosClient) {
            throw new Error("No http (axios) client instance found.");
        }
        this.reinvalidateClient();
        const jsonString = JSON.stringify(params); // Serialize the JSON object
        const formData = qs.stringify({ request: jsonString }); // Create form-urlencoded data using qs
        const { data } = await this.axiosClient.post("GetShippingQuote", formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return data;
    }
}
