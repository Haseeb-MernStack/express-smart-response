import { NextFunction, Request, Response } from "express";
import { SmartResponseBody } from "./types";

export function smartResponseMiddleware() {
  return (req: Request, res: Response, next: NextFunction) => {
    // success
    res.success = function<T = any>(data?: T, message?: string, meta?: Record<string, any>) {
      const payload: SmartResponseBody<T> = {
        status: "success",
        message: message ?? undefined,
        data: data ?? null
      };
      // attach meta at top-level if provided (optional)
      if (meta) {
        // @ts-ignore
        payload["meta"] = meta;
      }
      // default HTTP 200 for success
      return res.status(200).json(payload);
    };

    // error
    res.error = function(message?: string, code: number = 500, errors?: any) {
      const payload: SmartResponseBody = {
        status: "error",
        message: message ?? "Internal Server Error",
        errors: errors ?? undefined,
        code
      };
      return res.status(code).json(payload);
    };

    next();
  };
}
