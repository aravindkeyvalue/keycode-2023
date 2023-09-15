import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import { Order } from "./Order";

@Entity()
export class Payment implements AbstractEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public status: string;

  @Column({ nullable: true })
  public externalId?: string;

  @ManyToOne((type) => Order, (input) => input.payments)
  public order: Order;

  @Column()
  public orderId: string;

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
