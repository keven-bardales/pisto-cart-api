import { prisma } from "@src/data";
import { ProductDataSource } from "@src/domain/datasources/product.datasource";
import { CreateProductDto } from "@src/domain/dtos/product/create-product.dto";
import { GetAllProductDto } from "@src/domain/dtos/product/get-all-product.dto";
import { GetPaginatedDto } from "@src/domain/dtos/shared/get-paginated-dto";
import { PaginationDto } from "@src/domain/dtos/shared/pagination.dto";

export class ProductDataSourceImpl implements ProductDataSource {
  async getAll(dto: PaginationDto): Promise<GetPaginatedDto<GetAllProductDto>> {
    const { page, limit, column, order, search, all } = dto;

    if (all) {
      const products = await prisma.product.findMany({
        include: {
          productCategory: true,
        },
        where: {
          OR: [
            {
              name: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              productCategory: {
                name: {
                  contains: search,
                  mode: "insensitive",
                },
              },
            },
          ],
        },
        orderBy: {
          [column]: order,
        },
      });

      return GetPaginatedDto.fromObject<GetAllProductDto>({
        currentPage: 1,
        hasNextPage: false,
        hasPreviousPage: false,
        items: products.map((product) => GetAllProductDto.create(product)),
        limit: products.length,
        nextPage: 1,
        previousPage: 1,
        totalItems: products.length,
        totalPages: 1,
      });
    }

    const productsAndTotalCount = await prisma.product.findMany({
      include: {
        productCategory: true,
      },
      where: {
        OR: [
          {
            name: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            productCategory: {
              name: {
                contains: search,
                mode: "insensitive",
              },
            },
          },
        ],
      },
      orderBy: {
        [column]: order,
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    const totalItems = await prisma.product.aggregate({
      where: {
        OR: [
          {
            name: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            productCategory: {
              name: {
                contains: search,
                mode: "insensitive",
              },
            },
          },
        ],
      },
      _count: {
        name: true,
      },
    });

    return GetPaginatedDto.fromObject<GetAllProductDto>({
      currentPage: page,
      hasNextPage: productsAndTotalCount.length === limit,
      hasPreviousPage: page > 1,
      items: productsAndTotalCount.map((product) => GetAllProductDto.create(product)),
      limit,
      nextPage: page + 1,
      previousPage: page - 1,
      totalItems: totalItems._count.name,
      totalPages: Math.ceil(totalItems._count.name / limit),
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
