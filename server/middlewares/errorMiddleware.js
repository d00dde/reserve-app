import { ApiErrorHelper } from "../src/helper/ApiErrorHelper.js";

export function errorMiddleware(err, req, res, next) {
  console.log(err);
  if (err instanceof ApiErrorHelper) {
    return res.status(err.status).json({ error: err.message, errors: err.errors });
  }
  return res.status(500).json({ error: "Internal server error" });
}
