import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
import { User } from '../../../users/typeorm/entities/User';
import { Category } from '../../../categories/typeorm/entities/Category';

  
  @Entity('tasks')
  export class Task {
    @PrimaryGeneratedColumn('increment')
    id: number;
  
    @Column({ type: 'varchar', length: 255, unique: true })
    title: string;
  
    @Column({ type: 'varchar', length: 255 })
    description: string;
  
    @Column({ type: 'timestamp' })
    dueDate: Date;
  
    @Column({ type: 'varchar', length: 50, default: 'pending' })
    status: string;
  
    @ManyToOne(() => User, user => user.tasks)
    user_id: User;

    @ManyToOne(() => Category, (category) => category.tasks)
    categoryId: Category;
  
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
  }
  