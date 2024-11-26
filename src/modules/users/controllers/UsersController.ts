import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import ListUsersService from '../services/ListUserService';
import { User } from '../typeorm/entities/User';
import { container, injectable } from 'tsyringe';
import DeleteUserService from '../services/DeleteUserService';
import UpdateUserService from '../services/UpdateUserService';
import ShowUserService from '../services/ShowUserService';
import { userSchema } from '../utils/UserValidation';

@injectable()
export default class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, username, password, tasks } = req.body;

    const createUserService = container.resolve(CreateUserService);

    const validationResult = userSchema.safeParse(req.body);

    if (!validationResult.success) {
        const errors = validationResult.error.errors.map(err => err.message);
        return res.status(400).json({ errors });
      }


    const user = await createUserService.create({
      email,
      username,
      password,
      tasks,
    });

    return res.json(user);
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const listUsers = container.resolve(ListUsersService);

    const users: User[] = await listUsers.list();

    return res.json(users);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const userId = Number(id);

    const showUserService = container.resolve(ShowUserService);

    const user = await showUserService.execute({ id: userId });

    return res.json(user);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const userId = Number(id);

    const deleteUserService = container.resolve(DeleteUserService);

    await deleteUserService.execute({ id: userId });

    return res.status(200).json({ message: 'User deleted successfully' });
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const userId = Number(id);

    const { email, username, password, tasks } = req.body;

    const updateUserService = container.resolve(UpdateUserService);

    const updatedUser = await updateUserService.execute({
      id: userId,
      email,
      username,
      password,
      tasks,
    });

    return res.json(updatedUser);
  }
}
