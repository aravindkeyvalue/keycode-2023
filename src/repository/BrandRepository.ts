import { getManager } from "typeorm";
import { Brand } from "../entity/Brand";

export class BrandRepository {
  private alias = "brand.";

  public async getAll() {
    const [brands, total] = await  getManager().getRepository(Brand).findAndCount();
    return {
        data: brands,
        length: brands.length,
        total,
      };
  }
}
