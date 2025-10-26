import { DataSource } from 'typeorm';
import { Product } from './src/products/entities/product.entity';
import { Category } from './src/categories/entities/category.entity';

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [Product, Category],
  migrations: [__dirname + '/src/database/migrations/*.ts'],
  synchronize: false,
});

export default AppDataSource;
