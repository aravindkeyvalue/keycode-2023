import Controller from "../util/rest/controller";
import { Router, NextFunction, Response } from "express";
import RequestWithUser from "../util/rest/request";
import { Formatter } from "../util/formatter";
import { CategoryService } from "../service/CategoryService";

class CategoryController implements Controller {
  public path: string = "/categories";
  public router: Router = Router();
  public categoryService: CategoryService;

  private fmt: Formatter = new Formatter();

  constructor(categoryService: CategoryService) {
    this.categoryService = categoryService;
    this.initializeRouter();
  }

  private initializeRouter() {
    this.router.get(`${this.path}`, this.getAll);
  }

  private getAll = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const resp = await this.categoryService.getAll();
      response.send(
        this.fmt.formatResponse(resp, Date.now() - request.startTime, "OK", 1)
      );
    } catch (error) {
      return next(error);
    }
  };
}

export default CategoryController;
