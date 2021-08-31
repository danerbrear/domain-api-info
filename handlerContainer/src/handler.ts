import { Request, Response } from "express";
import { DnsService } from "./dns-service";
import { GeoIPService } from "./geo-ip-service";
import { FromIPResponse, QueryOptions } from "./types";

export const get = async (req: Request, res: Response) => {

    console.debug(req.query);

    if (req.query.ip) {

        // Use existing options or default to all workers when IP address is specified
        const options: Array<QueryOptions> = req.query.options ? req.query.options as Array<QueryOptions> : Object.values(QueryOptions);

        let response: FromIPResponse = {};

        const promises: Array<Promise<any>> = [];

        if (options.includes(QueryOptions.reverseDns)) {
            const service = new DnsService(req.query.ip as string);
            promises.push(service.getDomains()
                .then((data) => {
                    response.domains = data.hostnames;
                })
                .catch((err) => {
                    console.warn("Reverse DNS service error: ", err.message);
                    response.domains = {
                        statusCode: 500,
                        message: err.message
                    }
                })
            )
        } 
        
        if (options.includes(QueryOptions.geoIp)) {
            const access_key = req.headers['x-api-key'] as string;

            if (access_key) {
                const service = new GeoIPService(req.query.ip as string, access_key);
                promises.push(service.getGeoInfo()
                    .then((data) => {
                        response.geoInfo = data;
                    })
                    .catch((err) => {
                        console.warn("Geo IP Info service error: ", err.message);
                        response.geoInfo = {
                            statusCode: err.statusCode,
                            message: err.message
                        }
                    })
                )
            } else {
                response.geoInfo = {
                    statusCode: 400,
                    message: "Please include an access key for IPStack in the request headers."
                };
            }
        } 
        
        if (options.length === 0) {
            res.status(200);
            res.send({
                statusCode: 200,
                message: 'Did not run services.'
            })
            return;
        }

        await Promise.all(promises);

        res.status(200);
        res.send(response);

        return;
        
    } else {
        res.status(400);
        res.send({
            statusCode: 400,
            message: 'Bad Request.'
        })
    }
}