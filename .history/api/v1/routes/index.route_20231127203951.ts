import { Express } from "express";
import { taskRoutes } from "./task.route";

const v1Routes = (app: Express): void => {
  const version: string = "/api/v1";

  app.use(version + "/tasks", taskRoutes);
};

export default v1Routes;
