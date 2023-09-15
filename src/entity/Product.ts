import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";

import { Category } from "./Category";
import { Brand } from "./Brand";

import { ColumnNumericTransformer } from "../util/ColumnNumericTransformer";

@Entity({ name: "product" })
export class Product {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({ nullable: false, unique: true })
  public sku: string;

  @Column({ nullable: false })
  public name: string;

  @Column({ nullable: false, default: 0 })
  public stockLimit: number;

  @Column({ nullable: false, default: 0 })
  public version: number;

  @Column("decimal", {
    scale: 2,
    precision: 12,
    transformer: new ColumnNumericTransformer(),
    nullable: true,
  })
  public retailPrice: number;

  @Column({ nullable: true })
  public description?: string;

  @Column({ nullable: true })
  public howToUse?: string;

  @Column({ nullable: true })
  public ingredients?: string;

  @Column({
    type: "jsonb",
    nullable: true,
  })
  public productImages?: JSON;

  @Column({ nullable: true })
  public categoryId?: string;

  @ManyToOne((type) => Category, (category) => category.products)
  public category?: Category;

  @Column()
  public brandId: string;

  @ManyToOne((type) => Brand, (brand) => brand.products)
  public brand?: Brand;

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

  @Column({ nullable: false, default: 0 })
  public itemSold: number;

  @Column("decimal", {
    scale: 2,
    precision: 12,
    transformer: new ColumnNumericTransformer(),
    nullable: true,
    default: 0,
  })
  public height: number;

  @Column("decimal", {
    scale: 2,
    precision: 12,
    transformer: new ColumnNumericTransformer(),
    nullable: true,
    default: 0,
  })
  public width: number;

  @Column("decimal", {
    scale: 2,
    precision: 12,
    transformer: new ColumnNumericTransformer(),
    nullable: true,
    default: 0,
  })
  public length: number;

  @Column("decimal", {
    scale: 3,
    precision: 12,
    transformer: new ColumnNumericTransformer(),
    nullable: true,
    default: 0,
  })
  public weight: number;
}
