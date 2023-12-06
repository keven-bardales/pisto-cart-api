import { prisma } from "@src/data";
import { ProductDataSource } from "@src/domain/datasources/product.datasource";
import { CreateProductDto } from "@src/domain/dtos/product/create-product.dto";
import { GetAllProductDto } from "@src/domain/dtos/product/get-all-product.dto";

export class ProductDataSourceImpl implements ProductDataSource {
  async getAll(): Promise<GetAllProductDto[]> {
    const products = await prisma.product.findMany({
      include: {
        productCategory: true,
      },
    });

    return products.map((product) => GetAllProductDto.create(product));
  }

  async create(dto: CreateProductDto): Promise<GetAllProductDto> {
    const product = await prisma.product.create({
      data: {
        ...dto,
      },
    });

    return GetAllProductDto.create(product);
  }
}

export const productDataSource = new ProductDataSourceImpl();
