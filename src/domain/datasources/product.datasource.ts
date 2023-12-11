import { GetAllProductDto } from "@domain/dtos/product/get-all-product.dto";
import { CreateProductDto } from "@domain/dtos/product/create-product.dto";
import { PaginationDto } from "../dtos/shared/pagination.dto";

export abstract class ProductDataSource {
  abstract getAll(dto: PaginationDto): Promise<GetAllProductDto[]>;
  abstract create(dto: CreateProductDto): Promise<GetAllProductDto>;
}
