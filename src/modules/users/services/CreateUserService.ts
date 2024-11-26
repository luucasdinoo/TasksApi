import { inject, injectable } from 'tsyringe';
import { Task } from '../../tasks/typeorm/entities/Task';
import { User } from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import { hash  } from 'bcrypt'


interface IRequest {
  email: string;
  username: string;
  password: string;
  tasks: Task[];
}

@injectable()
export default class CreateUserService {

  constructor( 
   @inject(UsersRepository) private usersRepository: UsersRepository
  ) {
  }

  public async create({
    email,
    username,
    password,
    tasks,
  }: IRequest): Promise<User> {
    const emailAlreadyExists = await this.usersRepository.findByEmail(email);
    

    if (emailAlreadyExists) {
      throw new Error('Email already in use');
    }

    const passwordHash = await hash(password, 8); 

    const user = await this.usersRepository.createUser({
      email,
      username,
      password: passwordHash,
      tasks,
    });

    return user;
    

  }
}
