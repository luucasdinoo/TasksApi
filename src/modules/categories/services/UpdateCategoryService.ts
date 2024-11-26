import { inject, injectable } from 'tsyringe';
import CategoriesRepository from '../typeorm/repositories/CategoriesRepository';
import { Category } from '../typeorm/entities/Category';


interface IRequest {
    id: number;
    name: string;
  }
  


@injectable()
export default class UpdateCategoryService {
  constructor(
    @inject(CategoriesRepository) private categoriesRepository: CategoriesRepository
  ) {}

  public async execute({id, name}: IRequest): Promise<Category> {
    const category = await this.categoriesRepository.findById(id)

    if(!category) {
        throw new Error('category not found');
    }

   const updatedCategory = await this.categoriesRepository.updateCategory(id, {
    name
   })

   return updatedCategory;

  }
}
