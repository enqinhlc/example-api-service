import { Entities } from '../entity';
import { DataSource, DataSourceOptions } from 'typeorm';
import { checkEnvVariable } from './check_env_variable';

// check the variables
checkEnvVariable('DB_NAME');
checkEnvVariable('DB_USER');
checkEnvVariable('DB_PASS');
checkEnvVariable('DB_HOST');
checkEnvVariable('DB_PORT');

// create datasource for the app
const config: DataSourceOptions = {
  type: 'postgres',
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  schema: 'public',
  logging: true,
  synchronize: false,
  entities: Entities,
  subscribers: [],
  migrations: [],
};
console.log(config);
const AppDataSource = new DataSource(config);

export default AppDataSource;
