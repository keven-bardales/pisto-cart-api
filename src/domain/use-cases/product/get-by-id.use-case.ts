import { ProductEntity } from "@src/domain/entities/product.entity";
import { ProductRepository } from "@src/domain/repositories/product-repository";

export class GetByIdProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  exucute(id: string) {
    const product = this.productRepository.getById(ProductEntity.prototype.id);

    if (!product) {
      throw new Error("Producto no encontrado");
    }

    return product;
  }
}
