import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import { Order } from "./Order";
import { Product } from "./Product";

@Entity()
export class OrderItem implements AbstractEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @ManyToOne((type) => Order, (input) => input.orderItems)
  public order: Order;

  @Column()
  public orderId: string;

  @OneToOne((type) => Product)
  @JoinColumn()
  public product: Product;

  @Column({ type: "uuid" })
  public productId: string;

  @Column({ default: false })
  public isArchived: boolean;

  @CreateDateColumn({ type: "timestamptz", update: false })
  public createdAt: Date;

  @Column({ nullable: true })
  public createdBy?: string;

  @UpdateDateColumn({ type: "timestamptz", update: false })
  public updatedAt: Date;

  @Column({ nullable: true })
  public updatedBy?: string;
}
