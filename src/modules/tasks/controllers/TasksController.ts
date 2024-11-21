import { container, injectable } from "tsyringe";
import CreateTaskService from "../services/CreateTaskService";
import { taskSchema } from "../utils/TaskValidation";
import { Request, Response } from 'express';
import ListTaskService from "../services/ListTaskService";
import { Task } from "../typeorm/entities/Task";
import DeleteTaskService from "../services/DeleteTaskService";
import ShowTaskService from "../services/ShowTaskService";
import UpdateTaskService from "../services/UpdateTaskService";

@injectable()
export default class TasksController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { title, description, dueDate, status, user_id, categoryId } = req.body;
    
        const createTaskService = container.resolve(CreateTaskService);
    
        const validationResult = taskSchema.safeParse(req.body);
    
        if (!validationResult.success) {
            const errors = validationResult.error.errors.map(err => err.message);
            return res.status(400).json({ errors });
          }
    
    
        const task = await createTaskService.create({
          title,
          description,
          dueDate,
          status,
          user_id,
          categoryId
        });
    
        return res.json(task);
      }

      public async index(req: Request, res: Response): Promise<Response> {
        const listTaskService = container.resolve(ListTaskService)

        const tasks: Task[] = await listTaskService.list();

        return res.json(tasks);
      }

      public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const taskId = Number(id);


        const deleteTaskService = container.resolve(DeleteTaskService);

        await deleteTaskService.execute({id: taskId });

        return res.status(200).json({ message: 'Task deleted successfully' });
      }
      
      public async show(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const taskId = Number(id);

        const showTaskService = container.resolve(ShowTaskService);

        const task = await showTaskService.execute({ id: taskId });

        return res.json(task);
      
      
      }

      public async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const taskId = Number(id);

        const updateTaskService = container.resolve(UpdateTaskService)

        const { title, description, dueDate, status, user_id, categoryId } = req.body;

        const updatedtask = await updateTaskService.execute({
          id: taskId,
          title,
          description,
          dueDate,
          status,
          user_id,
          categoryId
        });


        return res.json(updatedtask);

      }
}