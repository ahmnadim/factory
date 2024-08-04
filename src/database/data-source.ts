import { ConfigService } from '@nestjs/config';
import { User } from '../entity/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Machine } from '../entity/machine.entity';
import { Machine_data } from '../entity/machine-data.entity';

export const dataSourceOptions: DataSourceOptions = {
  // type: 'postgres',
  // host: process.env.DATABASE_HOST,
  // port: parseInt(process.env.DATABASE_PORT, 10),
  // username: process.env.DATABASE_USER,
  // password: `${process.env.DATABASE_PASSWORD}`,
  // database: process.env.DATABASE_NAME,
  // entities: ['dist/src/**/*.entity.js'],
  // migrations: ['dist/db/migration/*.js'],
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'tfectory',
  entities: [User, Machine, Machine_data],
  migrations: ['dist/db/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
