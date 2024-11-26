import { inject, injectable } from 'tsyringe';
import TasksRepository from '../typeorm/repositories/TasksRepository';
import ITask from '../typeorm/entities/ITask';
import { Task } from '../typeorm/entities/Task';




@injectable()
export default class UpdateTaskService {
  constructor(
    @inject(TasksRepository) private tasksRepository: TasksRepository
  ) {}

  public async execute({id, title, description, dueDate, status, user_id, categoryId}: ITask): Promise<Task> {
    const task = await this.tasksRepository.findById(id)

    if(!task) {
        throw new Error('Task not found');
    }

   const updatedTask = await this.tasksRepository.updateTask(id, {
    title,
    description,
    dueDate,
    status,
    user_id,
    categoryId
   })

   return updatedTask;

  }
}
