import { injectable } from 'tsyringe';
import { Task } from '../entities/Task';
import { Repository } from 'typeorm';
import AppDataSource from '../../../../shared/typeorm/data-source';
import ITask from '../entities/ITask';

@injectable()
export default class TasksRepository {
  private repository: Repository<Task>;

  constructor() {
    this.repository = AppDataSource.getRepository(Task);
  }

   async createTask(taskData: Partial<Task>): Promise<Task> {
    const task = this.repository.create(taskData);
    await this.repository.save(task);

    return task;
   }

   async findTaskByTitle(title: string): Promise<Task>{
    return await this.repository.findOne({ where: { title } });
   }
   
   async findTasks(): Promise<Task[]>{
    return await this.repository.find({
      relations: ['user_id' , 'categoryId']
    });
   }

   async findById(id: number): Promise<Task>{
    return await this.repository.findOne({
      where: { id },
    })
    
   }


   async deleteUser(id: number): Promise<void> {
    await this.repository.delete(id);
   }


   async updateTask(id: number, taskData: Partial<ITask>): Promise<Task> {
       await this.repository.update(id, taskData);

       return

   }

}
