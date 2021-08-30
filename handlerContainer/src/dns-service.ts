import { HttpWrapper } from './httpWrapper';

const BASE_URL: string = "http://domain-service:8082";

// export const DnsService: (ip: string) => Promise<axios> = (ip) => {
//     return axios.get(`${BASE_URL}?ip=${ip}`, (res) => {
//         console.log("Domain service response: ", res);
//     })
// }

export class DnsService extends HttpWrapper {
    constructor(ip: string) {
        super(BASE_URL, ip);
    }

    public getDomains = () => this.instance.get('/')
}