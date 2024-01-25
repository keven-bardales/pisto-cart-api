import { UpdateProductDto } from "@src/domain/dtos/product/update-product.dto";
import { ProductEntity } from "@src/domain/entities/product.entity";
import { ApiException, BadRequestException } from "@src/domain/exceptions/bad-request.exception";
import { GeneralStatusRepository } from "@src/domain/repositories/general-status.repository";
import { ProductCategoryRepository } from "@src/domain/repositories/product-category.repository";
import { ProductRepository } from "@src/domain/repositories/product-repository";
import { ProductStatusRepository } from "@src/domain/repositories/product-status.repository";

export class UpdateProductUseCase {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly generalStatusRepository: GeneralStatusRepository,
    private readonly productCategoryRepository: ProductCategoryRepository,
    private readonly productStatusRepository: ProductStatusRepository
  ) {}

  async execute(dto: UpdateProductDto) {
    const product = await this.productRepository.checkIfExists({ code: dto.code, id: dto.id });

    if (!product) {
      throw new Error("Producto no encontrado");
    }

    if (product.code !== dto.code) {
      throw new BadRequestException("El codigo no puede ser modificado");
    }

    const generalStatus = await this.generalStatusRepository.checkIfExists({ id: dto.generalStatusId });

    if (!generalStatus) {
      throw new BadRequestException("El estado general no existe");
    }

    const productCategory = await this.productCategoryRepository.checkIfExists({ id: dto.productCategoryId });

    if (!productCategory) {
      throw new BadRequestException("La categoria de producto no existe");
    }

    const productStatus = await this.productStatusRepository.checkIfExists({ id: dto.productStatusId });

    if (!productStatus) {
      throw new BadRequestException("El estado del producto no existe");
    }

    const updatedProduct = await this.productRepository.update(dto);

    return updatedProduct;
  }
}
