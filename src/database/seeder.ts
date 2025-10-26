import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../products/entities/product.entity';
import { Category } from '../categories/entities/category.entity';
import productsData from '../../products.json';

@Injectable()
export class Seeder {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async seed() {
    const products = productsData as any[];
    for (const productData of products) {
      const category = await this.categoryRepository.findOne({ where: { id: productData.category_id } });

      if (!category) {
        console.warn(`Category with ID ${productData.category_id} not found for product ${productData.title}. Skipping.`);
        continue;
      }

      const product = this.productRepository.create({
        id: productData.id,
        name: productData.title,
        description: productData.description,
        image: productData.images,
        price: productData.price,
        category: category,
      });
      await this.productRepository.save(product);
    }
    console.log('Products seeded successfully!');
  }
}
