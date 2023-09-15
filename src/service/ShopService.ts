import { DeepPartial } from "typeorm";
import { ShopRepository } from "../repository/ShopRepository";
import { Shop } from "../entity/Shop";

export class ShopService {
  private shopRepo: ShopRepository;
  constructor(shopRepo: ShopRepository) {
    this.shopRepo = shopRepo;
  }

  public getAll() {
    return this.shopRepo.getAll();
  }

  public create(createPayload: DeepPartial<Shop>) {
    return this.shopRepo.create(createPayload);
  }

  public getById(id: string) {
    return this.shopRepo.getById(id);
  }
}
