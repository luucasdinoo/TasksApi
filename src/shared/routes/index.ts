import { Router } from "express";
import usersRouter from "../../modules/users/routes/users.routes";
import tasksRouter from "../../modules/tasks/routes/tasks.routes";
import categoriesRouter from "../../modules/categories/routes/categories.routes";

const routes = Router();

routes.use("/api/v1", usersRouter)
routes.use("/api/v1/", tasksRouter)
routes.use("/api/v1/", categoriesRouter)

export default routes;