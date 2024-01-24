import { UpdateProductDto } from "@src/domain/dtos/product/update-product.dto";
import { ProductEntity } from "@src/domain/entities/product.entity";
import { ApiException, BadRequestException } from "@src/domain/exceptions/bad-request.exception";
import { ProductRepository } from "@src/domain/repositories/product-repository";

export class UpdateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(dto: UpdateProductDto) {
    const product = await this.productRepository.checkIfExists({ code: dto.code, id: dto.id });

    if (!product) {
      throw new Error("Producto no encontrado");
    }

    if (product.code !== dto.code) {
      throw new BadRequestException("El codigo no puede ser modificado");
    }

    const updatedProduct = await this.productRepository.update(dto);

    return updatedProduct;
  }
}
