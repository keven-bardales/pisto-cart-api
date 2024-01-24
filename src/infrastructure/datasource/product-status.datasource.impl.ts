import { prisma } from "@src/data";
import { ProductStatusDataSource } from "@src/domain/datasources/product-status.datasource";
import { CreateProductStatusDto } from "@src/domain/dtos/product-status/create-product-status.dto";
import { GetAllProductStatusDto } from "@src/domain/dtos/product-status/get-all-product-status.dto";
import { ProductStatusEntity } from "@src/domain/entities/product-status.entity";

export class ProductStatusDataSourceImpl extends ProductStatusDataSource {
  async create(dto: CreateProductStatusDto): Promise<GetAllProductStatusDto> {
    const productStatus = await prisma.productStatus.create({
      data: {
        name: dto.name,
      },
    });

    return GetAllProductStatusDto.fromObject(productStatus);
  }
  async getAll(): Promise<GetAllProductStatusDto[]> {
    const productStatuses = await prisma.productStatus.findMany();

    return productStatuses.map((productStatus) => GetAllProductStatusDto.fromObject(productStatus));
  }

  async checkIfExists(params: { id: typeof ProductStatusEntity.prototype.id }): Promise<GetAllProductStatusDto> {
    const productStatus = await prisma.productStatus.findUnique({
      where: {
        id: params.id,
      },
    });

    if (!productStatus) {
      return null;
    }

    return GetAllProductStatusDto.fromObject(productStatus);
  }
}

export const productStatusDataSource = new ProductStatusDataSourceImpl();
