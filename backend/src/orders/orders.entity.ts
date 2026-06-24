import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'Unknown' }) // Default value set
  customer: string;

  @Column({ type: 'int', default: 0 })
  amount: number;

  @Column({ default: 'Pending' }) // Default status
  status: string;

  @CreateDateColumn()
  createdAt: Date; // Optional, backend timestamp
}
