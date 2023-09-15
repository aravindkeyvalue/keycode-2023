import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { AbstractEntity } from "./AbstractEntity";

@Entity()
export class Shop implements AbstractEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public name: string;

  @Column({ nullable: true, type: "jsonb" })
  metadata: JSON;

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
