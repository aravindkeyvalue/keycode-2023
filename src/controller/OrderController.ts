import Controller from "../util/rest/controller";
import { Router, NextFunction, Response } from "express";
import RequestWithUser from "../util/rest/request";
import { Formatter } from "../util/formatter";
import { OrderService } from "../service/OrderService";

class OrderController implements Controller {
  public path: string = "/orders";
  public router: Router = Router();
  public orderService: OrderService;

  private fmt: Formatter = new Formatter();

  constructor(orderService: OrderService) {
    this.orderService = orderService;
    this.initializeRouter();
  }

  private initializeRouter() {
    this.router.get(`${this.path}/:id`, this.getById);
    this.router.get(`${this.path}`, this.getAll);
    
  }

  private getAll = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const resp = await this.orderService.getAll();
      response.send(
        this.fmt.formatResponse(resp, Date.now() - request.startTime, "OK", 1)
      );
    } catch (error) {
      return next(error);
    }
  };

  private getById = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const resp = await this.orderService.getById(request.params.id);
      response.send(
        this.fmt.formatResponse(resp, Date.now() - request.startTime, "OK", 1)
      );
    } catch (error) {
      return next(error);
    }
  };
}

export default OrderController;
