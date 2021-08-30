import { HttpWrapper } from './httpWrapper';

const BASE_URL: string = "http://domain-service:8082";

export class DnsService extends HttpWrapper {
    constructor(ip: string) {
        super(BASE_URL, ip);
    }

    public getDomains = () => this.instance.get('/')
}