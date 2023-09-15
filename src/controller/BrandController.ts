import Controller from "../util/rest/controller";
import { Router, NextFunction, Response } from "express";
import RequestWithUser from "../util/rest/request";
import { Formatter } from "../util/formatter";
import { BrandService } from "../service/BrandService";

class BrandController implements Controller {
  public path: string = "/brands";
  public router: Router = Router();
  public brandService: BrandService;

  private fmt: Formatter = new Formatter();

  constructor(brandService: BrandService) {
    this.brandService = brandService;
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
      const resp = await this.brandService.getAll();
      response.send(
        this.fmt.formatResponse(resp, Date.now() - request.startTime, "OK", 1)
      );
    } catch (error) {
      return next(error);
    }
  };
}

export default BrandController;
