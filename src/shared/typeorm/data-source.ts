import { DataSource } from 'typeorm';
import 'dotenv/config';

const AppDataSource = new DataSource({
  type: 'postgres',
  database: 'tasks_db',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  entities: ['./src/modules/**/typeorm/entities/*.ts'],
  migrations: ['src/shared/typeorm/migrations/*.ts'],
  synchronize: true,
  logging: false,
});

export default AppDataSource;
