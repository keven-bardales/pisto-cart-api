import { ProductEntity } from "@src/domain/entities/product.entity";
import { BadRequestException } from "@src/domain/exceptions/bad-request.exception";
import { ProductRepository } from "@src/domain/repositories/product-repository";

export class DeleteProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }
  async execute(id: typeof ProductEntity.prototype.id) {
    const product = await this.productRepository.checkIfExists({ id });
    if (!product) {
      throw new BadRequestException("Producto no encontrado");
    }
    const deletedProduct = await this.productRepository.delete(id);
    return deletedProduct;
  }
}
