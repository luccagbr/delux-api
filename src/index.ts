import { CorsOptions } from "cors";
import express, { type Express } from "express";
import cors from "cors";

const app: Express = express();
const corsOptions: CorsOptions = {};

app.use(cors(corsOptions));

export default app;
