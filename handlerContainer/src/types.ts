export type Event = {
    resource: string;
    path: string;
    queryStringParameters: {
        domain?: string;
        ip?: string;
    },
    multiValueQueryStringParameters: {
        options: string[]
    }
    method: string;
}

export type ReverseDNSResponse = {
    hostnames: Array<string>;
};

export type GeoIPResponse = {
    ip: string;
    type: string;
    continent_code: string;
    continent_name: string;
    country_code: string;
    country_name: string;
    region_code: string;
    region_name: string;
    city: string;
    zip: string;
    latitude: number;
    longitudes: number;
    location: {
        geoname_id: number;
        capital: string;
        languages: Array<{
            code: string;
            name: string;
            native: string;
        }>,
        country_flag: string;
        country_flag_emoji: string;
        country_flag_emoji_unicode: string;
        calling_code: string;
    };
}

export type FromIPResponse = {
    domains?: Array<string> | ErrorResponse;
    geoInfo?: GeoIPResponse | ErrorResponse;
};

export type FromDomainResponse = {

};

export type ErrorResponse = {
    statusCode: number;
    message: string;
};

export type APIResponse = {
    statusCode: number;
    response: FromIPResponse | FromDomainResponse
}

export enum QueryOptions {
    reverseDns = 'r',
    geoIp = 'g'
}

