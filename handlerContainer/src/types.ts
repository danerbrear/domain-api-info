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