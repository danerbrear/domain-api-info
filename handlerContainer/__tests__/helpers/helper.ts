import { Event } from '../../src/types';
import { 
    getRandomNumber,
    getRandomDomain
} from "../../src/utils";
import { Request, Response } from "express";

export const randomGetEventWithDomain: () => Record<string, any> = () => ({
    method: 'GET',
    resource: '/',
    path: '/',
    params: {
        domain: (getRandomNumber(0, 1) == 1 ? getRandomDomain() : undefined),
    },
    headers: {
        'Content-Type': 'application/json'
    }
})