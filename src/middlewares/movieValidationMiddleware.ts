import { NextFunction, Request, Response } from "express";
import err from "../errors/index.js";

export function validateSchema(schema) {
    return (req: Request, res: Response, next: NextFunction) => {
      const { error } = schema.validate(req.body, { abortEarly: false });
      if (error) {
        throw err.conflictError(error.message);
      }
  
      next();
    };
  }