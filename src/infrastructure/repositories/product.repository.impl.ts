import { ProductDataSource } from "@src/domain/datasources/product.datasource";
import { CreateProductDto } from "@src/domain/dtos/product/create-product.dto";
import { GetAllProductDto } from "@src/domain/dtos/product/get-all-product.dto";
import { ProductRepository } from "@src/domain/repositories/product-repository";
import { PaginationDto } from "@src/domain/dtos/shared/pagination.dto";
import { GetPaginatedDto } from "@src/domain/dtos/shared/get-paginated-dto";
import { UpdateProductDto } from "@src/domain/dtos/product/update-product.dto";

export class ProductRepositoryImpl implements ProductRepository {
  constructor(private readonly dataSource: ProductDataSource) {}

  async create(dto: CreateProductDto): Promise<GetAllProductDto> {
    const product = await this.dataSource.create(dto);

    return product;
  }

  async getAll(dto: PaginationDto): Promise<GetPaginatedDto<GetAllProductDto>> {
    const products = await this.dataSource.getAll(dto);

    return products;
  }

  async getById(id: number): Promise<GetAllProductDto> {
    const product = await this.dataSource.getById(id);

    return product;
  }

  update(id: number, dto: UpdateProductDto): Promise<GetAllProductDto> {
    const product = this.dataSource.update(id, dto);

    return product;
  }
}
