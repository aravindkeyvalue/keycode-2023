import { CategoryRepository } from "../repository/CategoryRepository";

export class CategoryService {
  private categoryRepo: CategoryRepository;
  constructor(categoryRepo: CategoryRepository) {
    this.categoryRepo = categoryRepo;
  }

  public getAll() {
    return this.categoryRepo.getAll();
  }
}
