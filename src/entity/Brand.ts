import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";

  import { AbstractEntity } from "./AbstractEntity";
import { Product } from "./Product";

  export interface IBrand {
    id: string;
    name: string;
    description?: string;
    logo?: JSON;
  }
  
  @Entity()
  export class Brand implements IBrand, AbstractEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;
  
    @Column({ nullable: false, unique: true })
    public name: string;
  
    @Column({ nullable: true })
    public description?: string;
  
    @Column({
      type: "jsonb",
      nullable: true,

    })
    public logo?: JSON;

    @OneToMany((type) => Product, (product) => product.brand)
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
  