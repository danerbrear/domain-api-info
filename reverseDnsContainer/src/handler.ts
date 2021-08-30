import { Request, Response } from "express";
import * as dns from 'dns';

export const get = async (req: Request, res: Response) => {
    const ip = req.query.ip as string;
    console.log("IP Address: ", ip);

    if (ip) {
        dns.reverse(ip, (err, hostnames) => {
            console.log(err, hostnames);
            
            if (!err) {
                res.send({
                    statusCode: 200,
                    body: {
                        domain: hostnames
                    },
                    headers: {
                        'content-type': 'application/json'
                    }
                })
            } else {
                res.send({
                    statusCode: 500,
                    body: 'Received an error from reverse dns service.',
                })
            }
        })
    } else {
        res.send({
            statusCode: 400,
            body: 'Bad request.',
        })
    }

    
}