import { UpdateProductDto } from "@src/domain/dtos/product/update-product.dto";
import { ProductRepository } from "@src/domain/repositories/product-repository";

export class UpdateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: string, dto: UpdateProductDto) {
    const product = await this.productRepository.getById(id);

    if (!product) {
      throw new Error("Producto no encontrado");
    }

    const updatedProduct = await this.productRepository.update(id, dto);

    return updatedProduct;
  }
}
