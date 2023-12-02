import { ProductRepository } from "@src/domain/repositories/product-repository";

export class GetAllProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  exucute() {
    return this.productRepository.getAll();
  }
}
