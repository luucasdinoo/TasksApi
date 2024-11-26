import { DataSource } from 'typeorm';
import 'dotenv/config';

const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [process.env.ENTITIES_DB],
  migrations: [process.env.MIGRATIONS_DB],
  synchronize: false,
  logging: false,
});

export default AppDataSource;
