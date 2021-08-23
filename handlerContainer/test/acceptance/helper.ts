import { Event } from '../../src/types';
import { 
    getRandomNumber,
    getRandomDomain
} from "../../src/utils";

export const randomGetEventWithDomain: () => Event = () => ({
    resource: '/',
    path: '/',
    queryStringParameters: {
        domain: (getRandomNumber(0, 1) == 1 ? getRandomDomain() : undefined),
    },
    multiValueQueryStringParameters: {
        options: []
    },
    method: 'GET'
})