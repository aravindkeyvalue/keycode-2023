import Controller from "../util/rest/controller";
import { Router, NextFunction, Response } from "express";
import RequestWithUser from "../util/rest/request";
import { Formatter } from "../util/formatter";
import { ProductService } from "../service/ProductService";

class ProductController implements Controller {
  public path: string = "/products";
  public router: Router = Router();
  public productService: ProductService;

  private fmt: Formatter = new Formatter();

  constructor(productService: ProductService) {
    this.productService = productService;
    this.initializeRouter();
  }

  private initializeRouter() {
    this.router.get(`${this.path}`, this.getAll);
    this.router.post(`${this.path}`, this.create);
    this.router.post(`${this.path}/generate`, this.generate);
    this.router.get(`${this.path}/:id`, this.getById);
    
  }



  private generate = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const resp = await this.productService.generate(request.body.url);
      response.send(
        this.fmt.formatResponse(resp, Date.now() - request.startTime, "OK", 1)
      );
    } catch (error) {
      return next(error);
    }
  };

  private getAll = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const resp = await this.productService.getAll();
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
      const resp = await this.productService.create(request.body);
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
      const resp = await this.productService.getById(request.params.id);
      response.send(
        this.fmt.formatResponse(resp, Date.now() - request.startTime, "OK", 1)
      );
    } catch (error) {
      return next(error);
    }
  };
}

export default ProductController;
