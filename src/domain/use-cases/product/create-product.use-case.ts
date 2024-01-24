import { CreateProductDto } from "@src/domain/dtos/product/create-product.dto";
import { ProductRepository } from "@src/domain/repositories/product-repository";

export class CreateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async exucute(dto: CreateProductDto) {
    const productExists = await this.productRepository.findByCode(dto.code);

    if (productExists) {
      throw new Error("Ya existe un producto con ese codigo");
    }

    return this.productRepository.create(dto);
  }
}
