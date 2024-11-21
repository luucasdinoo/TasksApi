import { inject, injectable } from 'tsyringe';
import TasksRepository from '../typeorm/repositories/TasksRepository';
import { Task } from '../typeorm/entities/Task';



interface IRequest {
    id: number;
  }

@injectable()
export default class ShowTaskService {
  constructor(
    @inject(TasksRepository) private tasksRepository: TasksRepository
  ) {}

  public async execute({id}: IRequest): Promise<Task> {
    const task = await this.tasksRepository.findById(id);

    if(!task){
        throw new Error('Task not found');
    }

    return task;

  }
}
