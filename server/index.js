import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import tablesRouter from "./src/router/tablesRouter.js";
import authRouter from "./src/router/authRouter.js";
import { config } from "./config/server_config.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: config.CLIENT_ORIGIN,
}));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/table", tablesRouter);
app.use(errorMiddleware);

app.listen(config.APP_PORT, () => {
  console.log(`App listening on port ${config.APP_PORT}`);
})
