import { Express } from "express";
import { taskRoutes } from "./task.route";
import { userRoutes } from "./user.route";
import * as 

const v1Routes = (app: Express): void => {
  const version: string = "/api/v1";

  app.use(version + "/tasks", authMiddleware.requireAuth, taskRoutes);
  app.use(version + "/users", userRoutes);
};

export default v1Routes;
