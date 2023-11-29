import { Router } from "express";
import * as controller from "../controllers/task.controller";
const router: Router = Router();

router.get("/", controller.index);

router.get("/detail/:id", controller.detail);

router.patch("/change-status/:id", controller.changeStatus);

router.patch("/change-multi", controller.changeMulti);

router.post("/create", controller.changeMulti);
export const taskRoutes: Router = router;
