import { prisma } from "@src/data";
import { ProductDataSource } from "@src/domain/datasources/product.datasource";
import { CreateProductDto } from "@src/domain/dtos/product/create-product.dto";
import { GetAllProductDto } from "@src/domain/dtos/product/get-all-product.dto";
import { GetPaginatedDto } from "@src/domain/dtos/shared/get-paginated-dto";
import { PaginationDto } from "@src/domain/dtos/shared/pagination.dto";

export class ProductDataSourceImpl implements ProductDataSource {
  async getAll(dto: PaginationDto): Promise<GetPaginatedDto<GetAllProductDto>> {
    const products = await prisma.product.findMany({
      include: {
        productCategory: true,
      },
      skip: (dto.page - 1) * dto.limit,
      take: dto.limit,
      where: {
        name: {
          contains: dto.search,
          mode: "insensitive",
        },
        productCategory: {
          name: {
            contains: dto.search,
            mode: "insensitive",
          },
        },
      },
      orderBy: {
        [dto.column]: dto.order,
      },
    });

    const totalItems = await prisma.product.count({
      where: {
        name: {
          contains: dto.search,
          mode: "insensitive",
        },
        productCategory: {
          name: {
            contains: dto.search,
            mode: "insensitive",
          },
        },
      },
    });

    return GetPaginatedDto.fromObject<GetAllProductDto>({
      currentPage: dto.page,
      items: products.map((product) => GetAllProductDto.create(product)),
      limit: dto.limit,
      totalItems,
    });
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
