import { Request, Response } from "express";

export const get = (req: Request, res: Response) => {
    console.log("Handled get request.")
}