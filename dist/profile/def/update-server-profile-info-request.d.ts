export interface UpdateServerProfileInfoRequest {
    userId: string;
    phone?: string;
    emailId?: string;
    phoneVerified?: boolean;
    emailVerified?: boolean;
    locationCodes?: Array<string>;
    firstName?: string;
    lastName?: string;
    framework?: {
        [key: string]: any;
    };
}
