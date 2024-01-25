import { CreateProductStatusDto } from "@src/domain/dtos/product-status/create-product-status.dto";
import { GetAllProductStatusDto } from "@src/domain/dtos/product-status/get-all-product-status.dto";
import { ProductStatusRepository } from "@src/domain/repositories/product-status.repository";
import { ProductStatusDataSourceImpl, productStatusDataSource } from "@infrastructure/datasource/product-status.datasource.impl";
import { ProductStatusEntity } from "@src/domain/entities/product-status.entity";

export class ProductStatusRepositoryImpl implements ProductStatusRepository {
  constructor(private readonly dataSource: ProductStatusDataSourceImpl) {}

  create(dto: CreateProductStatusDto): Promise<GetAllProductStatusDto> {
    return this.dataSource.create(dto);
  }

  getAll(): Promise<GetAllProductStatusDto[]> {
    return this.dataSource.getAll();
  }

  checkIfExists(params: { id: typeof ProductStatusEntity.prototype.id }): Promise<GetAllProductStatusDto> {
    return this.dataSource.checkIfExists(params);
  }
}

export const productStatusRepository = new ProductStatusRepositoryImpl(productStatusDataSource);
