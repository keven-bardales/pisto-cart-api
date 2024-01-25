import { CreateProductDto } from "@src/domain/dtos/product/create-product.dto";
import { BadRequestException } from "@src/domain/exceptions/bad-request.exception";
import { GeneralStatusRepository } from "@src/domain/repositories/general-status.repository";
import { ProductCategoryRepository } from "@src/domain/repositories/product-category.repository";
import { ProductRepository } from "@src/domain/repositories/product-repository";
import { ProductStatusRepository } from "@src/domain/repositories/product-status.repository";

export class CreateProductUseCase {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly generalStatusRepository: GeneralStatusRepository,
    private readonly productCategoryRepository: ProductCategoryRepository,
    private readonly productStatusRepository: ProductStatusRepository
  ) {}

  async exucute(dto: CreateProductDto) {
    const productExists = await this.productRepository.findByCode(dto.code);

    if (productExists) {
      throw new Error("Ya existe un producto con ese codigo");
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

    return this.productRepository.create(dto);
  }
}
