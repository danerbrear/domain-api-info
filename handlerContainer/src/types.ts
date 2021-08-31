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

export type FromIPResponse = {
    domains?: Array<string>;
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
}

