import express, { NextFunction, Request, Response } from "express";
import { errorHandler } from "./middlewares/errors/errorHandler";
import { tryCatch } from "./middlewares/try-catch/tryCatch";
import { ErrorCode, HTTPException } from "./expections/rootException";

const app = express();
app.use(express.json());


app.get("/", tryCatch(async (req:Request, res:Response, next:NextFunction) => {


    throw new HTTPException('test error', ErrorCode.TEST_ERROR, 404, null)
    
    res.send("Hello World!");
}))

// error handler
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
