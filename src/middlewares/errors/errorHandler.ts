import { NextFunction ,Request, Response} from "express";
import { HTTPException } from "../../expections/rootException";

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof HTTPException){
        res.status(err.statusCode).json({
            status: false,
            statusCode: err.statusCode,
            message: err.message,
            errorCode:err.errorCode
        })
    }
    
}