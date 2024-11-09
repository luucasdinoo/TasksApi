import { inject, injectable } from 'tsyringe';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import { User } from '../typeorm/entities/User';


interface IRequest {
    id: number;
  }

@injectable()
export default class ShowUserService {
  constructor(
    @inject(UsersRepository) private usersRepository: UsersRepository
  ) {}

  public async execute({id}: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if(!user){
        throw new Error('User not found');
    }

    return user;

  }
}
