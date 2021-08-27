import { Application, Request, Response } from "express";
import {
    get
} from './handler';

export const register = async (app: Application) => {
    app.get('/', get);
}