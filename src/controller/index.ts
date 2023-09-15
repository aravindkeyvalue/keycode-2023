import { BrandRepository } from "../repository/BrandRepository";
import { CategoryRepository } from "../repository/CategoryRepository";
import { OrderRepository } from "../repository/OrderRepository";
import { ProductRepository } from "../repository/ProductRepository";
import { ShopRepository } from "../repository/ShopRepository";
import { BrandService } from "../service/BrandService";
import { CategoryService } from "../service/CategoryService";
import { OrderService } from "../service/OrderService";
import { ProductService } from "../service/ProductService";
import { ShopService } from "../service/ShopService";
import BrandController from "./BrandController";
import CategoryController from "./CategoryController";
import HealthController from "./HealthController";
import OrderController from "./OrderController";
import ProductController from "./ProductController";
import ShopController from "./ShopController";

const brandService = new BrandService(new BrandRepository());
const categoryService = new CategoryService(new CategoryRepository());
const productService = new ProductService(new ProductRepository());
const orderService = new OrderService(new OrderRepository());
const shopService = new ShopService(new ShopRepository());

export default [
  new HealthController(),
  new BrandController(brandService),
  new CategoryController(categoryService),
  new ProductController(productService),
  new OrderController(orderService),
  new ShopController(shopService),
];
