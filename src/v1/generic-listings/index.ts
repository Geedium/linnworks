import axios, { AxiosInstance } from "axios";
import LinnworksBase from "../../api";
import { ApiOptions } from "../../types";
import axiosRetry from "axios-retry";
import { CreateConfiguratorRequest, CreateConfiguratorResponse, CreateTemplatesRequest, CreateTemplatesResponse, DeleteConfiguratorsRequest, DeleteConfiguratorsResponse, GetConfiguratorDataRequest, GetConfiguratorDescriptionRequest, GetConfiguratorDescriptionResponse, GetConfiguratorsInfoPagedRequest, GetConfiguratorsInfoPagedResponse, OpenTemplatesByInventoryRequest, OpenTemplatesByInventoryResponse, ProcessTemplatesRequest, SaveConfiguratorDataRequest, SaveConfiguratorDataResponse, SaveConfiguratorDescriptionRequest, SaveConfiguratorDescriptionResponse, SaveConfiguratorFieldsRequest, SaveTemplateFieldsRequest } from "./types";

export class GenericListings extends LinnworksBase {
    private axiosClient: AxiosInstance;

    constructor(options: ApiOptions) {
        super(options);
        this.axiosClient = axios.create({
            baseURL: this.sessionServer + "/api/GenericListings",
            headers: {
                Authorization: this.sessionToken,
            },
        });
        axiosRetry(this.axiosClient, {
            retries: 3,
        });
    }

    reinvalidateClient() {
        this.axiosClient.defaults.baseURL = this.sessionServer + "/api/GenericListings";
        this.axiosClient.defaults.headers.Authorization = this.sessionToken;
    }

    /**
     * Use this call to manipulate the fields on a template.  
     * This can be used to modify a generic template created using the CreateTemplate endpoint.
     * @param params - Request parameters
     */
    async saveTemplateFields(params: SaveTemplateFieldsRequest) {
        if (!this.axiosClient) {
            throw new Error("No http (axios) client instance found.");
        }
        this.reinvalidateClient();
        const { data } = await this.axiosClient.post<object>("SaveTemplateFields", {
            request: params,
        });
        return data;
    }

    /**
     * Use this call to push a template that you have created to a channel.  
     * This endpoint can also be used to update, relist, delete a template from a channel.
     * @param params - Request parameters
     */
    async processTemplates(params: ProcessTemplatesRequest) {
        if (!this.axiosClient) {
            throw new Error("No http (axios) client instance found.");
        }
        this.reinvalidateClient();
        const { data } = await this.axiosClient.post<object>("ProcessTemplates", {
            request: params,
        });
        return data;
    }

    /**
     * Use this call to create a generic template based on the inventory item details and the configurator details.  
     * This template will contain the full details of the item that will be listed on the channel.
     * @param params - Request parameters
     */
    async createTemplates(params: CreateTemplatesRequest) {
        if (!this.axiosClient) {
            throw new Error("No http (axios) client instance found.");
        }
        this.reinvalidateClient();
        const { data } = await this.axiosClient.post<CreateTemplatesResponse>("CreateTemplates", {
            request: params,
        });
        return data;
    }

    /**
     * Use this call to get template details for Generic Listings using Stock Item IDs.
     * @param params - Request parameters
     */
    async openTemplatesByInventory(params: OpenTemplatesByInventoryRequest) {
        if (!this.axiosClient) {
            throw new Error("No http (axios) client instance found.");
        }
        this.reinvalidateClient();
        const { data } = await this.axiosClient.post<OpenTemplatesByInventoryResponse>("OpenTemplatesByInventory", {
            request: params,
        });
        return data;
    }

    /**
     * Use this call to get the existing Generic Listing Tool configurators.
     * @param params - Request parameters
     */
    async getConfiguratorsInfoPaged(params: GetConfiguratorsInfoPagedRequest) {
        if (!this.axiosClient) {
            throw new Error("No http (axios) client instance found.");
        }
        this.reinvalidateClient();
        const { data } = await this.axiosClient.post<GetConfiguratorsInfoPagedResponse>("GetConfiguratorsInfoPaged", {
            request: params,
        });
        return data;
    }

    /**
     * Use this call to update a configurators fields.
     * @param params - Request parameters
     */
    async saveConfiguratorFields(params: SaveConfiguratorFieldsRequest) {
        if (!this.axiosClient) {
            throw new Error("No http (axios) client instance found.");
        }
        this.reinvalidateClient();
        const { data } = await this.axiosClient.post<object>("SaveConfiguratorFields", {
            request: params,
        });
        return data;
    }

    async getConfiguratorDescription(params: GetConfiguratorDescriptionRequest) {
        if (!this.axiosClient) {
            throw new Error("No http (axios) client instance found.");
        }
        this.reinvalidateClient();
        const { data } = await this.axiosClient.post<GetConfiguratorDescriptionResponse>("GetConfiguratorDescription", {
            request: params,
        });
        return data;
    }

    async saveConfiguratorDescription(params: SaveConfiguratorDescriptionRequest) {
        if (!this.axiosClient) {
            throw new Error("No http (axios) client instance found.");
        }
        this.reinvalidateClient();
        const { data } = await this.axiosClient.post<SaveConfiguratorDescriptionResponse>("GetConfiguratorDescription", {
            request: params,
        });
        return data;
    }

    async getConfiguratorData(params: GetConfiguratorDataRequest) {
        if (!this.axiosClient) {
            throw new Error("No http (axios) client instance found.");
        }
        this.reinvalidateClient();
        const { data } = await this.axiosClient.post<object>("GetConfiguratorData", {
            request: params,
        });
        return data;
    }

    async saveConfiguratorData(params: SaveConfiguratorDataRequest) {
        if (!this.axiosClient) {
            throw new Error("No http (axios) client instance found.");
        }
        this.reinvalidateClient();
        const { data } = await this.axiosClient.post<SaveConfiguratorDataResponse>("SaveConfiguratorData", {
            request: params,
        });
        return data;
    }

    async createConfigurator(params: CreateConfiguratorRequest) {
        if (!this.axiosClient) {
            throw new Error("No http (axios) client instance found.");
        }
        this.reinvalidateClient();
        const { data } = await this.axiosClient.post<CreateConfiguratorResponse>("CreateConfigurator", {
            request: params,
        });
        return data;
    }

    async deleteConfigurators(params: DeleteConfiguratorsRequest) {
        if (!this.axiosClient) {
            throw new Error("No http (axios) client instance found.");
        }
        this.reinvalidateClient();
        const { data } = await this.axiosClient.post<DeleteConfiguratorsResponse>("DeleteConfigurators", {
            request: params,
        });
        return data;
    }
}
