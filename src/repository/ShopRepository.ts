import { DeepPartial, getManager } from "typeorm";
import { Shop } from "../entity/Shop";

export class ShopRepository {
  private alias = "shop.";

  public async getAll() {
    const [shops, total] = await getManager()
      .getRepository(Shop)
      .findAndCount();
    return {
      data: shops,
      length: shops.length,
      total,
    };
  }

  public create(shop: DeepPartial<Shop>) {
    return getManager().getRepository(Shop).save(shop);
  }

  public getById(id: string){
    return getManager().getRepository(Shop).findOne(id)
  }
}
