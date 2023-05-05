import { Request, Response } from "express";

export interface IControllerArgs {
    args: any,
    context: IContext
}

export interface IContext {
    req: IRequest,
    res: Response
}

export interface IRequest extends Request {
    socketId?: string
}