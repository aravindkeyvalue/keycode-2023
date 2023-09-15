import { getManager } from "typeorm";
import { Order } from "../entity/Order";

export class OrderRepository {
  private alias = "order.";

  public async getAll() {
    const [orders, total] = await getManager()
      .getRepository(Order)
      .createQueryBuilder("order")
      .leftJoinAndSelect("order.orderItems", "orderItems")
      .leftJoinAndSelect("orderItems.product", "product")
      .getManyAndCount();
    return {
      data: orders,
      length: orders.length,
      total,
    };
  }

  public async getById(id: string) {
    return getManager()
      .getRepository(Order)
      .createQueryBuilder("order")
      .leftJoinAndSelect("order.orderItems", "orderItems")
      .leftJoinAndSelect("orderItems.product", "product")
      .where({ id })
      .getOne();
  }
}
