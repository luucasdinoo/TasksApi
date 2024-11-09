import { inject, injectable } from 'tsyringe';
import UsersRepository from '../typeorm/repositories/UsersRepository';

interface IRequest {
    id: number;
  }

@injectable()
export default class DeleteUserService {
  constructor(
    @inject(UsersRepository) private usersRepository: UsersRepository
  ) {}

  public async execute({id}: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(id)

    if(!user) {
        throw new Error('User not found');
    }

    await this.usersRepository.deleteUser(id)

  }

}
