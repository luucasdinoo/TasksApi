import { inject, injectable } from 'tsyringe';
import { Category } from '../typeorm/entities/Category';
import CategoriesRepository from '../typeorm/repositories/CategoriesRepository';

interface IRequest {
  name: string;
}

@injectable()
export default class CreateCategoryService {
  constructor(
    @inject(CategoriesRepository)
    private categoriesRepository: CategoriesRepository
  ) {}

  public async create({ name }: IRequest): Promise<Category> {
    const categoryAlreadyExists =
      await this.categoriesRepository.findCategoryByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists');
    }

    const category = this.categoriesRepository.createCategory({
      name,
    });

    return category;
  }
}
