import { inject, injectable } from "tsyringe";
import TasksRepository from "../typeorm/repositories/TasksRepository";


@injectable()
export default class ListTaskService {
    constructor(  @inject(TasksRepository) private tasksRepository: TasksRepository){}

    async list(){
        const tasks = await this.tasksRepository.findTasks();
        return tasks;
    }

}