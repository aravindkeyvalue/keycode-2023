import { BrandRepository } from "../repository/BrandRepository";

export class BrandService {
  private brandRepo: BrandRepository;
  constructor(brandRepo: BrandRepository) {
    this.brandRepo = brandRepo;
  }

  public getAll() {
    return this.brandRepo.getAll();
  }
}
