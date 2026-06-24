import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Protego')
export class Model {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  link: string;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  reviews: number;

  @Column()
  rating: number;

  @Column()
  image: string;

  @Column('text', { array: true })
  images: string[];
}
