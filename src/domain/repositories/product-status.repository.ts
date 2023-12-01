import { GetAllProductStatusDto } from "@domain/dtos/product-status/get-all-product-status.dto";
import { CreateProductStatusDto } from "@domain/dtos/product-status/create-product-status.dto";

export abstract class ProductStatusRepository {
  abstract getAll(): Promise<GetAllProductStatusDto[]>;
  abstract create(dto: CreateProductStatusDto): Promise<GetAllProductStatusDto>;
}
