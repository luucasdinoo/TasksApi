import { inject, injectable } from 'tsyringe';
import TasksRepository from '../typeorm/repositories/TasksRepository';

interface IRequest {
    id: number;
  }

@injectable()
export default class DeleteTaskService {
  constructor(
    @inject(TasksRepository) private tasksRepository: TasksRepository
  ) {}

  public async execute({id}: IRequest): Promise<void> {
    const task = await this.tasksRepository.findById(id)

    if(!task) {
        throw new Error('Task not found');
    }

    await this.tasksRepository.deleteUser(id)

  }

}
