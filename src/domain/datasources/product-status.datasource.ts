import { GetAllProductStatusDto } from "@domain/dtos/product-status/get-all-product-status.dto";
import { CreateProductStatusDto } from "@domain/dtos/product-status/create-product-status.dto";
import { ProductStatusEntity } from "../entities/product-status.entity";

export abstract class ProductStatusDataSource {
  abstract getAll(): Promise<GetAllProductStatusDto[]>;
  abstract create(dto: CreateProductStatusDto): Promise<GetAllProductStatusDto>;
  abstract checkIfExists(params: { id: typeof ProductStatusEntity.prototype.id }): Promise<GetAllProductStatusDto>;
}
