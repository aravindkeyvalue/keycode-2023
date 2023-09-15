import { AbstractEntity } from "./AbstractEntity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Product } from "./Product";

export interface ICategory {
  id: string;
  name: string;
  description?: string;
}

@Entity()
export class Category implements ICategory, AbstractEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({ nullable: false, unique: true })
  public name: string;

  @Column({ nullable: true })
  public description?: string;

  @OneToMany((type) => Product, (product) => product.category)
  public products: Product[];

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
