import { ConfigItem } from "./Config";
import ServiceProperty from "./ServiceProperty";

export interface CourierService {
    ServiceName: string;
    ServiceCode: string;
    ServiceTag: string;
    ServiceGroup: string;
    ServiceUniqueId: string;
    ConfigItems: ConfigItem[];
    ServiceProperty: ServiceProperty[];
}

export default CourierService;
