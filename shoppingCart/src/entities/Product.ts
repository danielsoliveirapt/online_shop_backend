import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";
import {Cart} from "./Cart";
@Entity() 
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  productId!: string;

  @Column()
  price!: number;

  @Column()
  quantity!: number;

  @Column()
  cartShoppingCartId!: number;

  @ManyToOne(() => Cart, (cart) => cart.products)
    cart: Cart;
}