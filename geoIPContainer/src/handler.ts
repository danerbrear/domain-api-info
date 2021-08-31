import { Request, Response } from "express";
import * as dns from 'dns';

export const get = async (req: Request, res: Response) => {
    const ip = req.query.ip as string;
    console.log("IP Address: ", ip);

    if (ip) {
        dns.reverse(ip, (err, hostnames) => {
            console.log(err, hostnames);
            
            if (!err) {
                res.status(200);
                res.send({
                    hostnames
                })
            } else {
                res.status(500);
                res.send({
                    statusCode: 500,
                    body: 'Received an error from reverse dns service.',
                })
            }
        })
    } else {
        res.status(400);
        res.send({
            statusCode: 400,
            body: 'Bad request.',
        })
    }
}