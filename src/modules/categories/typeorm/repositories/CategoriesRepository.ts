import { injectable } from 'tsyringe';
import { Repository } from 'typeorm';
import AppDataSource from '../../../../shared/typeorm/data-source';
import { Category } from '../entities/Category';

@injectable()
export default class CategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = AppDataSource.getRepository(Category);
  }

   async createCategory(categorieData: Partial<Category>): Promise<Category> {
    const categorie = this.repository.create(categorieData);
    await this.repository.save(categorie);

    return categorie;
   }

   async findCategoryByName(name: string): Promise<Category>{
    return await this.repository.findOne({ where: { name } });
   }
   
   async findCategories(): Promise<Category[]>{
    return await this.repository.find();
   }

   async findById(id: number): Promise<Category>{
    return await this.repository.findOne({
      where: { id },
    })
    
   }


   async deleteCategory(id: number): Promise<void> {
    await this.repository.delete(id);
   }


   async updateCategory(id: number, categoryData: Partial<Category>): Promise<Category> {
       await this.repository.update(id, categoryData);

       return

   }

}
