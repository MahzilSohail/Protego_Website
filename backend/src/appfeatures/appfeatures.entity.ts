import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('appfeatures')
export class AppFeature {
  @PrimaryColumn()
  id: string;
  @Column()
  title: string;

  @Column()
  desc: string;

  @Column()
  icon: string;
}
