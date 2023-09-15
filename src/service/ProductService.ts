import { DeepPartial } from "typeorm";
import { ProductRepository } from "../repository/ProductRepository";
import { Product } from "../entity/Product";
import axios from "axios";
import fs from "fs";
import { promisify } from "util";
const exec_await = promisify(require("child_process").exec);

export class ProductService {
  private productRepo: ProductRepository;
  constructor(productRepo: ProductRepository) {
    this.productRepo = productRepo;
  }

  public getAll() {
    return this.productRepo.getAll();
  }

  public create(createPayload: DeepPartial<Product>) {
    return this.productRepo.create(createPayload);
  }

  public getById(id: string) {
    return this.productRepo.getById(id);
  }

  public async generate(url: string) {
    try {
      const response = await axios.get(url, { responseType: "stream" });
      const writer = fs.createWriteStream("./predict_im.jpg");
      response.data.pipe(writer);
      await new Promise((resolve, reject) => {
        writer.on("finish", resolve);
        writer.on("error", reject);
      });
    } catch (error) {
      throw error;
    }
  }
}
