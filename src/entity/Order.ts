import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import { OrderItem } from "./OrderItem";
import { Payment } from "./Payment";

@Entity()
export class Order implements AbstractEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({ nullable: true })
  public userId?: string;

  @OneToMany((type) => OrderItem, (input) => input.order)
  public orderItems: OrderItem[];

  @OneToMany((type) => Payment, (input) => input.order)
  public payments: Payment[];

  @Column({ nullable: true })
  public paymentStatus: string;

  @Column({ nullable: true })
  public deliveryStatus: string;

  @Column({ nullable: true, type: "float" })
  public amount: number;

  @Column({ nullable: true })
  public status: string;

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
