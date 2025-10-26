import { Category } from '../../categories/entities/category.entity';
import { PrimaryColumn, Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Product {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar' })
  image: string;

  @Column({ type: 'float' })
  price: number;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;
}
