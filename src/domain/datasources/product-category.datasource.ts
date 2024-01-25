import { GetAllProductCategoryDto } from "@domain/dtos/product-category/get-all-product-category.dto";
import { CreateProductCategoryDto } from "../dtos/product-category/create-product-category.dto";
import { ProductCategoryEntity } from "../entities/product-category.entity";

export abstract class ProductCategoryDataSource {
  abstract getAll(): Promise<GetAllProductCategoryDto[]>;
  abstract create(dto: CreateProductCategoryDto): Promise<GetAllProductCategoryDto>;
  abstract getById(id: number): Promise<GetAllProductCategoryDto>;
  abstract checkIfExists(params: { id: typeof ProductCategoryEntity.prototype.id }): Promise<GetAllProductCategoryDto>;
}
