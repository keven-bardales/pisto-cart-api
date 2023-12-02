import { ProductDataSource } from "@src/domain/datasources/product.datasource";
import { CreateProductDto } from "@src/domain/dtos/product/create-product.dto";
import { GetAllProductDto } from "@src/domain/dtos/product/get-all-product.dto";
import { ProductRepository } from "@src/domain/repositories/product-repository";
import { productDataSource } from "@infrastructure/datasource/product.datasource.impl";

export class ProductRepositoryImpl implements ProductRepository {
  constructor(private readonly dataSource: ProductDataSource) {}

  async create(dto: CreateProductDto): Promise<GetAllProductDto> {
    const product = await this.dataSource.create(dto);

    return product;
  }

  async getAll(): Promise<GetAllProductDto[]> {
    const products = await this.dataSource.getAll();

    return products;
  }
}

export const productRepository = new ProductRepositoryImpl(productDataSource);
