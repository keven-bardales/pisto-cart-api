import { CreateProductCategoryDto } from "@src/domain/dtos/product-category/create-product-category.dto";
import { ProductCategoryRepository } from "@src/domain/repositories/product-category.repository";

export class CreateProductCategoryUseCase {
  constructor(
    private readonly productCategoryRepository: ProductCategoryRepository
  ) {}
  execute(dto: CreateProductCategoryDto) {
    return this.productCategoryRepository.create(dto);
  }
}
