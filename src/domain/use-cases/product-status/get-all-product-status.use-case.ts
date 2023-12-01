import { ProductStatusRepository } from "@src/domain/repositories/product-status.repository";

export class GetAllProductStatusUseCase {
  constructor(
    private readonly productStatusRepository: ProductStatusRepository
  ) {}

  async execute() {
    const productStatuses = await this.productStatusRepository.getAll();

    return productStatuses;
  }
}
