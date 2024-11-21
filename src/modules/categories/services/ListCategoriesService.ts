import { inject, injectable } from 'tsyringe';
import CategoriesRepository from '../typeorm/repositories/CategoriesRepository';

@injectable()
export default class ListCategoriesService {
  constructor(
    @inject(CategoriesRepository)
    private categoriesRepository: CategoriesRepository
  ) {}

  async list() {
    const categories = await this.categoriesRepository.findCategories();
    return categories;
  }
}
