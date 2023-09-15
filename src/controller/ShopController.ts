import Controller from "../util/rest/controller";
import { Router, NextFunction, Response } from "express";
import RequestWithUser from "../util/rest/request";
import { Formatter } from "../util/formatter";
import { ShopService } from "../service/ShopService";

class ShopController implements Controller {
  public path: string = "/shops";
  public router: Router = Router();
  public shopService: ShopService;

  private fmt: Formatter = new Formatter();

  constructor(shopService: ShopService) {
    this.shopService = shopService;
    this.initializeRouter();
  }

  private initializeRouter() {
    this.router.get(`${this.path}`, this.getAll);
    this.router.get(`${this.path}/:id`, this.getById);
    this.router.post(`${this.path}`, this.create);
  }

  private getAll = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const resp = await this.shopService.getAll();
      response.send(
        this.fmt.formatResponse(resp, Date.now() - request.startTime, "OK", 1)
      );
    } catch (error) {
      return next(error);
    }
  };

  private create = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const resp = await this.shopService.create(request.body);
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
      const resp = await this.shopService.getById(request.params.id);
      response.send(
        this.fmt.formatResponse(resp, Date.now() - request.startTime, "OK", 1)
      );
    } catch (error) {
      return next(error);
    }
  };
}

export default ShopController;
