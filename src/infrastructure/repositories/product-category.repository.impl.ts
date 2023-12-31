import { ProductCategoryDataSource } from "@src/domain/datasources/product-category.datasource";
import { CreateProductCategoryDto } from "@src/domain/dtos/product-category/create-product-category.dto";
import { GetAllProductCategoryDto } from "@src/domain/dtos/product-category/get-all-product-category.dto";
import { ProductCategoryRepository } from "@src/domain/repositories/product-category.repository";
import { productCategoryDataSource } from "@src/infrastructure/datasource/product-category.datasource.impl";

export class ProductCategoryImpl implements ProductCategoryRepository {
  constructor(
    private readonly productCategoryDataSource: ProductCategoryDataSource
  ) {}

  getAll(): Promise<GetAllProductCategoryDto[]> {
    return this.productCategoryDataSource.getAll();
  }
  create(dto: CreateProductCategoryDto): Promise<GetAllProductCategoryDto> {
    return this.productCategoryDataSource.create(dto);
  }
}

export const productCategoryRepository = new ProductCategoryImpl(
  productCategoryDataSource
);
