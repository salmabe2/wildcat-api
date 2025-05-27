import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Area } from './area/entities/area.entity';
import { Publication } from './publication/entities/publication.entity';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
});


export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  url: process.env.DATABASE_URL,
  username: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.NAME,
  synchronize: true,
  logging: true,
  entities: [Area, Publication],
  subscribers: [],
  migrations: [],
});
