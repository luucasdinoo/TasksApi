import { Repository } from 'typeorm';
import { User } from '../entities/User';
import AppDataSource from '../../../../shared/typeorm/data-source';
import { injectable } from 'tsyringe';

@injectable()
class UsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async createUser(userData: Partial<User>): Promise<User> {
    const user = this.repository.create(userData);
    await this.repository.save(user);

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  async findById(id: number): Promise<User> {
    const user = await this.repository.findOne({
      where: {
        id,
      },
      relations: ['tasks'],
    });

    return user;
  }

  async findUsers() {
    return this.repository.find({
      relations: ['tasks'],
    });
  }

  async deleteUser(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async updateUser(id: number, userData: Partial<User>): Promise<User> {
    await this.repository.update(id, userData);

    return;
  }
}

export default UsersRepository;
