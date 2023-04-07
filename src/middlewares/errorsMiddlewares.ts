import httpStatus from "http-status";
import { NextFunction, Request, Response } from "express";


export function handleApplicationErrors(error, req: Request, res: Response, next: NextFunction) {
    if (error.name === "ConflictError") {
    return res
      .status(httpStatus.CONFLICT)
      .send({ message: error.message });
  }

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    error: "InternalServerError",
    message: "Internal Server Error",
  });
}