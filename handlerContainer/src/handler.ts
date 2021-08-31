import { Request, Response } from "express";
import { DnsService } from "./dns-service";
import { FromIPResponse, QueryOptions } from "./types";

export const get = async (req: Request, res: Response) => {

    console.log(req.query);

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
                    console.error(err);
                    res.status(500);
                    res.send({
                        err
                    })
                })
            )
        } else {
            console.error("Could not run services.");
            res.status(500);
            res.send({
                statusCode: 500,
                message: 'Could not run services.'
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