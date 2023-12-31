import { DataSource } from 'typeorm'
import { User } from './entities/User'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'admin',
  password: 'admin123',
  database: 'typeorm',
  synchronize: true,
  logging: true,
  entities: [User],
})
