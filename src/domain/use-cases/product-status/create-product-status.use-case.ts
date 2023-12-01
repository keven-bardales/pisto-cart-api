import { CreateProductStatusDto } from "@src/domain/dtos/product-status/create-product-status.dto";
import { ProductStatusRepository } from "@src/domain/repositories/product-status.repository";

export class CreateProductStatusUseCase {
  constructor(
    private readonly productStatusRepository: ProductStatusRepository
  ) {}

  async execute(dto: CreateProductStatusDto) {
    return await this.productStatusRepository.create(dto);
  }
}
