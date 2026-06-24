import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('students')
export class Std {
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

  @Column('simple-array')
  images: string[]; // stores as comma separated values
}
