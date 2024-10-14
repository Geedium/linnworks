export interface Session {
    Id: string;
    EntityId: string;
    DatabaseName: string;
    DatabaseServer: string;
    PrivateDatabaseServer: string;
    DatabaseUser: string;
    DatabasePassword: string;
    AppName: string;
    sid_registration: string;
    UserName: string;
    Md5Hash: string;
    Locality: "EU" | "US" | "AS";
    SuperAdmin: boolean;
    TTL: number;
    Token: string;
    AccessToken: string;
    GroupName: string;
    Device: string;
    DeviceType: string;
    UserType: string;
    Status: {
        State: "AVAILABLE" | "LOCKED_BASIC" | "LOCKED_FULL" | "MAINTENANCE";
        Reason: string;
        Parameters: {};
    } | null;
    UserId: string;
    Properties: {};
    Email: string;
    Server: string;
    PushServer: string;
}