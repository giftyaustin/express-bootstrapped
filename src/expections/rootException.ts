export class HTTPException extends Error {
    message:string;
    errorCode:ErrorCode;
    statusCode:number;
    error:any
    constructor(message: string, errorCode: ErrorCode, statusCode: number, error: any) {
        super(message);
        this.message = message;
        this.errorCode = errorCode;
        this.error= error;
        this.statusCode = statusCode;
    }
}


export enum ErrorCode {
    TEST_ERROR = 0
}