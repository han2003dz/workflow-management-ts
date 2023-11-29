import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import * as database from "./config/database";
import v1Routes from "./api/v1/routes/index.route";



dotenv.config();
database.connect();

const app: Express = express();

const port: number | string = process.env.PORT || 3000;

v1Routes(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
