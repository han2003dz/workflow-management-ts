import express, { Express, Request, Response } from "express";
import {connect}
const app: Express = express();
const port: number | string = 3000;
app.get("/tasks", (req: Request, res: Response) => {
  res.send("Danh sách công việc");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
