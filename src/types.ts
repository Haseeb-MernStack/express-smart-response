import { Response } from "express";

export type SmartResponseBody<T = any> = {
  status: "success" | "error";
  message?: string;
  data?: T | null;
  errors?: any;
  code?: number;
};

declare global {
  namespace Express {
    interface Response {
      success<T = any>(data?: T, message?: string, meta?: Record<string, any>): Response;
      error(message?: string, code?: number, errors?: any): Response;
    }
  }
}
