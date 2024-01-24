import { ProductCategoryDataSource } from "@domain/datasources/product-category.datasource";
import { GetAllProductCategoryDto } from "@domain/dtos/product-category/get-all-product-category.dto";
import { CreateProductCategoryDto } from "@domain/dtos/product-category/create-product-category.dto";
import { ProductCategoryEntity } from "../entities/product-category.entity";
export abstract class ProductCategoryRepository {
  abstract getAll(): Promise<GetAllProductCategoryDto[]>;
  abstract create(dto: CreateProductCategoryDto): Promise<GetAllProductCategoryDto>;
  abstract getById(id: string): Promise<GetAllProductCategoryDto>;
  abstract checkIfExists(params: { id: typeof ProductCategoryEntity.prototype.id }): Promise<GetAllProductCategoryDto>;
}
