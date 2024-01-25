import { GetAllProductDto } from "@domain/dtos/product/get-all-product.dto";
import { CreateProductDto } from "@domain/dtos/product/create-product.dto";
import { PaginationDto } from "../dtos/shared/pagination.dto";
import { GetPaginatedDto } from "../dtos/shared/get-paginated-dto";
import { UpdateProductDto } from "../dtos/product/update-product.dto";

export abstract class ProductDataSource {
  abstract getAll(dto: PaginationDto): Promise<GetPaginatedDto<GetAllProductDto>>;
  abstract create(dto: CreateProductDto): Promise<GetAllProductDto>;
  abstract getById(id: number): Promise<GetAllProductDto>;
  abstract update(dto: UpdateProductDto): Promise<GetAllProductDto>;
  abstract delete(id: typeof GetAllProductDto.prototype.id): Promise<GetAllProductDto>;
  abstract findByCode(code: string): Promise<GetAllProductDto>;
  abstract checkIfExists(params: {
    id: typeof GetAllProductDto.prototype.id;
    code: typeof GetAllProductDto.prototype.code;
  }): Promise<GetAllProductDto>;
}
