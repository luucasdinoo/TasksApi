import { Router, Request, Response } from 'express';
import { container } from 'tsyringe';
import TasksController from '../controllers/TasksController';

const tasksRouter = Router();
const tasksController = container.resolve(TasksController);

tasksRouter.post('/tasks', async (req: Request, res: Response) => {
  await tasksController.create(req, res);
});

tasksRouter.get('/tasks', async (req: Request, res: Response) => {
  await tasksController.index(req, res);
});

tasksRouter.get('/tasks/:id', async (req: Request, res: Response) => {
  await tasksController.show(req, res);
});

tasksRouter.delete('/tasks/:id', async (req: Request, res: Response) => {
  await tasksController.delete(req, res);
});

tasksRouter.put('/tasks/:id', async (req: Request, res: Response) => {
  await tasksController.update(req, res);
});

export default tasksRouter;
