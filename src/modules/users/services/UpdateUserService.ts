import { inject, injectable } from 'tsyringe';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import { Task } from '../../tasks/typeorm/entities/Task';
import { User } from '../typeorm/entities/User';

interface IRequest {
    id: number;
    email: string;
    username: string;
    password: string;
    tasks: Task[];
  }


@injectable()
export default class UpdateUserService {
  constructor(
    @inject(UsersRepository) private usersRepository: UsersRepository
  ) {}

  public async execute({id, email, username, password, tasks}: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(id)

    if(!user) {
        throw new Error('User not found');
    }

   const updatedUser = await this.usersRepository.updateUser(id, {
    email,
    username,
    password,
    tasks,
   })

   return updatedUser;

  }
}
