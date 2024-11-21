import { Router, Request, Response } from 'express';
import { container } from 'tsyringe';
import CategoriesController from '../controllers/CategoriesController';

const categoriesRouter = Router();
const categoriesController = container.resolve(CategoriesController);

categoriesRouter.post('/categories', async (req: Request, res: Response) => {
  await categoriesController.create(req, res);
});

categoriesRouter.get('/categories', async (req: Request, res: Response) => {
  await categoriesController.index(req, res);
});

categoriesRouter.get('/categories/:id', async (req: Request, res: Response) => {
  await categoriesController.show(req, res);
});

categoriesRouter.delete('/categories/:id', async (req: Request, res: Response) => {
  await categoriesController.delete(req, res);
});

categoriesRouter.put('/categories/:id', async (req: Request, res: Response) => {
  await categoriesController.update(req, res);
});

export default categoriesRouter;
