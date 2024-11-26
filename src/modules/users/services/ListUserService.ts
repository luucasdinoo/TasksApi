import { inject, injectable } from "tsyringe";
import UsersRepository from "../typeorm/repositories/UsersRepository";

@injectable()
export default class ListUsersService {
    constructor(  @inject(UsersRepository) private usersRepository: UsersRepository){}

    async list(){
        const users = await this.usersRepository.findUsers();
        return users;
    }

}