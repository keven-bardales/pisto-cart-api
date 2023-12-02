import { GetAllProductDto } from "@domain/dtos/product/get-all-product.dto";
import { CreateProductDto } from "@domain/dtos/product/create-product.dto";

export abstract class ProductRepository {
  abstract getAll(): Promise<GetAllProductDto[]>;
  abstract create(dto: CreateProductDto): Promise<GetAllProductDto>;
}
