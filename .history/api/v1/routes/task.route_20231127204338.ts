import { Request, Response, Router } from "express";
import Task from "../models/task.model";

const router: Router = Router();

router.get("/", controller.index);

router.get("/detail/:id", controller.detail);

export const taskRoutes: Router = router;
