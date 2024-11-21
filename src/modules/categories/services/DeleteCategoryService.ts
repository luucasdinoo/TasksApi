import { inject, injectable } from 'tsyringe';
import CategoriesRepository from '../typeorm/repositories/CategoriesRepository';

interface IRequest {
    id: number;
  }

@injectable()
export default class DeleteCategoryService {
  constructor(
    @inject(CategoriesRepository) private categoriesRepository: CategoriesRepository
  ) {}

  public async execute({id}: IRequest): Promise<void> {
    const category = await this.categoriesRepository.findById(id)

    if(!category) {
        throw new Error('Category not found');
    }

    await this.categoriesRepository.deleteCategory(id)

  }

}
