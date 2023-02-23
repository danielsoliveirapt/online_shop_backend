import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

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
}