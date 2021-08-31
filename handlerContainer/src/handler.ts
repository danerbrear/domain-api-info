import { Request, Response } from "express";
import { DnsService } from "./dns-service";
import { QueryOptions } from "./types";

export const get = async (req: Request, res: Response) => {

    console.log(req.query);

    if (req.query.ip) {

        // Use existing options or default to all workers when IP address is specified
        const options: Array<QueryOptions> = req.query.options ? req.query.options as Array<QueryOptions> : Object.values(QueryOptions);

        if (options.includes(QueryOptions.reverseDns)) {
            const service = new DnsService(req.query.ip as string);
                service.getDomains()
                .then((data) => {
                    res.send({
                        info: data
                    })
                })
                .catch((err) => {
                    res.status(500);
                    res.send({
                        err
                    })
                })
        }
        
    } else {
        res.status(400);
        res.send({
            statusCode: 400,
            message: 'Bad Request.'
        })
    }
}