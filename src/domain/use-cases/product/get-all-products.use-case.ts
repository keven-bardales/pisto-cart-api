import { PaginationDto } from "@src/domain/dtos/shared/pagination.dto";
import { ProductRepository } from "@src/domain/repositories/product-repository";

export class GetAllProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  exucute(dto: PaginationDto) {
    return this.productRepository.getAll(dto);
  }
}
