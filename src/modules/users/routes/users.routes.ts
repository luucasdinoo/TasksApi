import { Router, Request, Response } from "express";
import UsersController from "../controllers/UsersController";
import { container } from "tsyringe";

const usersRouter = Router();
const usersController = container.resolve(UsersController);

usersRouter.post('/users', async (req: Request, res: Response) => {
    await usersController.create(req, res);
});
usersRouter.get('/users', async (req: Request, res: Response) => {
    await usersController.index(req, res);
} )

usersRouter.delete('/users/:id', async (req: Request, res: Response) => {
    await usersController.delete(req, res);
});

usersRouter.put('/users/:id', async (req: Request, res: Response) => {
    await usersController.update(req, res);
});

usersRouter.get('/users/:id', async (req: Request, res: Response) => {
    await usersController.show(req, res);
});

export default usersRouter;
