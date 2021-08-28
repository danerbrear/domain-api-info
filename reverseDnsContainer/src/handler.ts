import { Request, Response } from "express";

export const get = (req: Request, res: Response) => {
    res.send({
        statusCode: 200,
        body: {
            message: 'it work'
        },
        headers: {
            'content-type': 'application/json'
        }
    })
}