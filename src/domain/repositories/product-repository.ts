import { GetAllProductDto } from "@domain/dtos/product/get-all-product.dto";
import { CreateProductDto } from "@domain/dtos/product/create-product.dto";
import { PaginationDto } from "../dtos/shared/pagination.dto";
import { GetPaginatedDto } from "../dtos/shared/get-paginated-dto";
import { UpdateProductDto } from "../dtos/product/update-product.dto";

export abstract class ProductRepository {
  abstract getAll(dto: PaginationDto): Promise<GetPaginatedDto<GetAllProductDto>>;
  abstract create(dto: CreateProductDto): Promise<GetAllProductDto>;
  abstract getById(id: string): Promise<GetAllProductDto>;
  abstract update(id: string, dto: UpdateProductDto): Promise<GetAllProductDto>;
}
