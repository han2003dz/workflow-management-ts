import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import * as database from "./config/database";
import v1Routes from "./"

dotenv.config();
database.connect();

const app: Express = express();

const port: number | string = process.env.PORT || 3000;

app.get("/tasks", (req: Request, res: Response) => {
  res.send("Danh sách công việc");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
