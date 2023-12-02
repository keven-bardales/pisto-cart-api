import { GetAllProductCategoryDto } from "@domain/dtos/product-category/get-all-product-category.dto";
import { CreateProductCategoryDto } from "../dtos/product-category/create-product-category.dto";

export abstract class ProductCategoryDataSource {
  abstract getAll(): Promise<GetAllProductCategoryDto[]>;
  abstract create(
    dto: CreateProductCategoryDto
  ): Promise<GetAllProductCategoryDto>;
}
