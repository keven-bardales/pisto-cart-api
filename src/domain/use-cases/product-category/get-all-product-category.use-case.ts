import { ProductCategoryRepository } from "@src/domain/repositories/product-category.repository";

export class GetAllProductCategoryUseCase {
  constructor(
    private readonly productCategoryRepository: ProductCategoryRepository
  ) {}

  execute() {
    return this.productCategoryRepository.getAll();
  }
}
