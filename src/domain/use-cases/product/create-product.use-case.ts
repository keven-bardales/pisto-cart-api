import { CreateProductDto } from "@src/domain/dtos/product/create-product.dto";
import { ProductRepository } from "@src/domain/repositories/product-repository";

export class CreateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  exucute(dto: CreateProductDto) {
    return this.productRepository.create(dto);
  }
}
