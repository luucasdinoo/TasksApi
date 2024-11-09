import { Router } from "express";
import usersRouter from "../../modules/users/routes/users.routes";

const routes = Router();

routes.use("/api/v1", usersRouter)

export default routes;