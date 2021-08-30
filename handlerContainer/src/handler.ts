import { Request, Response } from "express";
import { DnsService } from "./dns-service";

export const get = async (req: Request, res: Response) => {
    const service = new DnsService("64.233.191.255");

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