import { HttpWrapper } from './httpWrapper';
import { ReverseDNSResponse } from './types';

const BASE_URL: string = "http://domain-service:8082";

export class DnsService extends HttpWrapper {
    constructor(ip: string) {
        super(BASE_URL, ip);
    }

    public getDomains: () => Promise<ReverseDNSResponse> = () => this.instance.get('/');
}