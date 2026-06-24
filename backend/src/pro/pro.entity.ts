import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pro')
export class Pro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  color: string;

  @Column()
  color1: string;

  @Column()
  color2: string;

  @Column()
  price: string;

  @Column()
  reviews: number;

  @Column('float')
  rating: number;

  @Column()
  image: string;

  @Column('simple-json')
  images: string[];
}
