import { getManager } from "typeorm";
import { Category } from "../entity/Category";

export class CategoryRepository {
  private alias = "category.";

  public async getAll() {
    const [categories, total] = await  getManager().getRepository(Category).findAndCount();
    return {
        data: categories,
        length: categories.length,
        total,
      };
  }
}
