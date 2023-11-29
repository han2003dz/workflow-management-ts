import { Express } from "express";
import { taskRoutes } from "./task.route";
import { userRoutes } from "./user.route";
const v1Routes = (app: Express): void => {
  const version: string = "/api/v1";

  app.use(version + "/tasks", taskRoutes);
  app.use(version + "/users", userRoutes);
};

export default v1Routes;
