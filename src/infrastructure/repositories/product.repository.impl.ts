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

  update(dto: UpdateProductDto): Promise<GetAllProductDto> {
    const product = this.dataSource.update(dto);

    return product;
  }

  async findByCode(code: string): Promise<GetAllProductDto> {
    const product = await this.dataSource.findByCode(code);

    if (!product) {
      return null;
    }

    return product;
  }

  async checkIfExists(params: { id: typeof GetAllProductDto.prototype.id; code: typeof GetAllProductDto.prototype.code }): Promise<GetAllProductDto> {
    const product = await this.dataSource.checkIfExists({
      code: params.code,
      id: params.id,
    });

    if (!product) {
      return null;
    }

    return product;
  }
}
