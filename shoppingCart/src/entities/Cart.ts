import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import {Product} from "./Product";

@Entity() 
export class Cart extends BaseEntity {
  @PrimaryGeneratedColumn()
  shoppingCartId!: number;

  @Column()
  userId!: string;

  @Column()
  totalPrice!: number;

  @Column()
  totalQuantity!: number;

  @OneToMany(() => Product, (product) => product.cart)
  products: Product[];
}