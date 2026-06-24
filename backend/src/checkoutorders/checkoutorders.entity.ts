import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('checkout_orders')
export class CheckoutOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  address: string;

  @Column()
  postal: string;

  @Column()
  deliveryOption: string;

  @Column()
  paymentMethod: string;

  @Column('text') // storing cart items as JSON string
  cartItems: string;

  @Column('decimal')
  totalPrice: number;
}
