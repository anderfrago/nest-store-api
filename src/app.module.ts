import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { Product } from './products/entities/product.entity';
import { Category } from './categories/entities/category.entity';
import { Seeder } from './database/seeder';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Product, Category],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Product, Category]),
    ProductsModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService, Seeder],
})
export class AppModule {}
