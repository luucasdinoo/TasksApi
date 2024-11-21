import { Router } from "express";
import usersRouter from "../../modules/users/routes/users.routes";
import tasksRouter from "../../modules/tasks/routes/tasks.routes";

const routes = Router();

routes.use("/api/v1", usersRouter)
routes.use("/api/v1/", tasksRouter)

export default routes;