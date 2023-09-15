import { OrderRepository } from "../repository/OrderRepository";

export class OrderService {
  private orderRepository: OrderRepository;
  constructor(orderRepository: OrderRepository) {
    this.orderRepository = orderRepository;
  }

  public getAll() {
    return this.orderRepository.getAll();
  }

  public getById(id: string) {
    return this.orderRepository.getById(id)
  }
}
