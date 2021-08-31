import { Request, Response } from "express";
import { IPStackService } from "./ipStackService";

export const get = async (req: Request, res: Response) => {
    const ip = req.query.ip as string;
    const accessToken = req.headers['x-api-key'] as string;

    if (ip && accessToken) {
        const service = new IPStackService(accessToken);
        await service.getIpInfo(ip)
            .then((data) => {
                res.status(200);
                res.send(data);
            })
            .catch((err) => {
                res.status(err.code);
                res.send(err);
            })
    } else {
        console.error("Missing either the IP Address or the IPStack access key.")
        res.status(400);
        res.send({
            statusCode: 400,
            message: 'Bad request: Missing either the IP Address or the IPStack access key.',
        })
    }
}