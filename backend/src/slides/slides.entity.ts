import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Slide {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  slideId: string;

  @Column()
  title: string;

  @Column()
  tag: string;

  @Column()
  img: string;
}
