import { HttpWrapper } from './httpWrapper';
import { GeoIPResponse } from './types';

const BASE_URL = 'http://api.ipstack.com/';

export class IPStackService extends HttpWrapper {
    constructor(access_token: string) {
        super(`${BASE_URL}`, access_token);
    }

    public getIpInfo: (ip: string) => Promise<GeoIPResponse> = (ip) => this.instance.get(`/${ip}`);
}