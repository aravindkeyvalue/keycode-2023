import { DeepPartial, getManager } from "typeorm";
import { Product } from "../entity/Product";

export class ProductRepository {
  private alias = "product.";

  public async getAll() {
    const [products, total] = await getManager()
      .getRepository(Product)
      .createQueryBuilder("product")
      .leftJoinAndSelect("product.brand", "brand")
      .leftJoinAndSelect("product.category", "category")
      .getManyAndCount();
    return {
      data: products,
      length: products.length,
      total,
    };
  }

  public create(product: DeepPartial<Product>) {
    return getManager().getRepository(Product).save(product);
  }

  public getById(id: string) {
    return getManager()
      .getRepository(Product)
      .createQueryBuilder("product")
      .leftJoinAndSelect("product.brand", "brand")
      .leftJoinAndSelect("product.category", "category")
      .where({ id })
      .getOne();
  }
}
