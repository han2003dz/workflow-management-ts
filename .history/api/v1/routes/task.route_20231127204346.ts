import { Request, Response, Router } from "express";
import Task from "../models/task.model";
import * as controller from "../controllers/task.controller";
const router: Router = Router();

router.get("/", controller.index);

router.get("/detail/:id", controller.detail);

export const taskRoutes: Router = router;
