import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

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
  shoppingCartId!: number;
}