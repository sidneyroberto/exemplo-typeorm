import { Contact } from './entity/Contact'
import 'reflect-metadata'
import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'dev',
  password: 'senha123',
  database: 'agenda',
  synchronize: true,
  logging: false,
  entities: [Contact],
  migrations: [],
  subscribers: [],
})
