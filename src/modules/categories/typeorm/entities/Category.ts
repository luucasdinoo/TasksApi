import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "../../../tasks/typeorm/entities/Task";

@Entity()
export class Category {

@PrimaryGeneratedColumn()
  id: number;


@Column({unique: true})
  name: string;

  @OneToMany(() => Task, (task) => task.category)
  tasks: Task[];


}