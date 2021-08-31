import { HttpWrapper } from './httpWrapper';
import { GeoIPResponse } from './types';

const BASE_URL: string = "http://geo-ip-service:8084";

export class GeoIPService extends HttpWrapper {
    constructor(ip: string, access_key: string) {
        super(BASE_URL, ip, {
            'x-api-key': access_key
        });
    }

    public getGeoInfo: () => Promise<GeoIPResponse> = () => this.instance.get('/');
}