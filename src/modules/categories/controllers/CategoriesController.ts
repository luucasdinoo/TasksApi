import { container, injectable } from "tsyringe";
import CreateCategoryService from "../services/CreateCategoryService";
import { Request, Response } from 'express';
import DeleteCategoryService from "../services/DeleteCategoryService";
import ShowCategoryService from "../services/ShowCategoryService";
import UpdateCategoryService from "../services/UpdateCategoryService";
import ListCategoriesService from "../services/ListCategoriesService";
import { categorySchema } from "../utils/CategoryValidation";

@injectable()
export default class CategoriesController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { name } = req.body;
    
        const createCategorieService = container.resolve(CreateCategoryService);
    
        const validationResult = categorySchema.safeParse(req.body);
    
        if (!validationResult.success) {
            const errors = validationResult.error.errors.map(err => err.message);
            return res.status(400).json({ errors });
          }
    
    
        const Category = await createCategorieService.create({
          name
        });
    
        return res.json(Category);
      }

      public async index(req: Request, res: Response): Promise<Response> {
        const listCategoryService = container.resolve(ListCategoriesService)

        const category = await listCategoryService.list();

        return res.json(category);
      }

      public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const CategoryId = Number(id);


        const deleteCategoryService = container.resolve(DeleteCategoryService);

        await deleteCategoryService.execute({id: CategoryId });

        return res.status(200).json({ message: 'Category deleted successfully' });
      }
      
      public async show(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const CategoryId = Number(id);

        const showCategoryService = container.resolve(ShowCategoryService);

        const Category = await showCategoryService.execute({ id: CategoryId });

        return res.json(Category);
      
      
      }

      public async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const CategoryId = Number(id);

        const updateCategoryService = container.resolve(UpdateCategoryService)

        const { name } = req.body;

        const updatedCategory = await updateCategoryService.execute({
          id: CategoryId,
          name
        });


        return res.json(updatedCategory);

      }
}