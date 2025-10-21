import { describe, it, expect } from "vitest";
import request from "supertest";
import express from "express";
import { smartResponseMiddleware } from "../src/middleware";

describe("smartResponseMiddleware", () => {
  it("adds success & error methods", async () => {
    const app = express();
    app.use(express.json());
    app.use(smartResponseMiddleware());
    app.get("/ok", (req, res) => res.success({ a: 1 }, "done"));
    const res = await request(app).get("/ok");
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("success");
    expect(res.body.data).toEqual({ a: 1 });
  });
});
