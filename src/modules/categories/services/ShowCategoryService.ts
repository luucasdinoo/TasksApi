import { inject, injectable } from 'tsyringe';
import CategoriesRepository from '../typeorm/repositories/CategoriesRepository';
import { Category } from '../typeorm/entities/Category';

interface IRequest {
  id: number;
}

@injectable()
export default class ShowCategoryService {
  constructor(
    @inject(CategoriesRepository)
    private categoriesRepository: CategoriesRepository
  ) {}

  public async execute({ id }: IRequest): Promise<Category> {
    const category = await this.categoriesRepository.findById(id);

    if (!category) {
      throw new Error('Category not found');
    }

    return category;
  }
}
