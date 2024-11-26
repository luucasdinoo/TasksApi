import { inject, injectable } from 'tsyringe';
import TasksRepository from '../typeorm/repositories/TasksRepository';
import { Task } from '../typeorm/entities/Task';
import { Category } from '../../categories/typeorm/entities/Category';
import { User } from '../../users/typeorm/entities/User';

interface IRequest {
  title: string;
  description: string;
  dueDate: Date;
  status: string;
  user_id: User;
  categoryId: Category;
}

@injectable()
export default class CreateTaskService {
  constructor(
    @inject(TasksRepository) private tasksRepository: TasksRepository
  ) {}

  public async create({
    title,
    description,
    dueDate,
    status,
    user_id,
    categoryId,
  }: IRequest): Promise<Task> {
    const taskAlreadyExists = await this.tasksRepository.findTaskByTitle(title);

    if (taskAlreadyExists) {
      throw new Error('Task with the same title already exists');
    }


    const task = this.tasksRepository.createTask({
      title,
      description,
      dueDate,
      status,
      user_id,
      categoryId,
    });

    return task;
  }
}
