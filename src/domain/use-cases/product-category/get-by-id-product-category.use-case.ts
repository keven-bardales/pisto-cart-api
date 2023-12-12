import { ProductCategoryRepository } from "@src/domain/repositories/product-category.repository";

export class GetByIdProductCategoryUseCase {
  constructor(private readonly productCategoryRepository: ProductCategoryRepository) {}

  execute(id: string) {
    return this.productCategoryRepository.getById(id);
  }
}
