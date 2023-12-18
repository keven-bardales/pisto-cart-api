import { prisma } from "@src/data";
import { Prisma } from "@prisma/client";
import { ProductDataSource } from "@src/domain/datasources/product.datasource";
import { CreateProductDto } from "@src/domain/dtos/product/create-product.dto";
import { GetAllProductDto } from "@src/domain/dtos/product/get-all-product.dto";
import { GetPaginatedDto } from "@src/domain/dtos/shared/get-paginated-dto";
import { PaginationDto } from "@src/domain/dtos/shared/pagination.dto";
import { UpdateProductDto } from "@src/domain/dtos/product/update-product.dto";

const productIncludes: Prisma.ProductInclude = {
  productCategory: {
    include: {
      parentCategory: {
        include: {
          parentCategory: {
            include: {
              parentCategory: {
                include: {
                  parentCategory: true,
                },
              },
            },
          },
        },
      },
    },
  },
  productStatus: true,
  generalStatus: true,
};

export class ProductDataSourceImpl implements ProductDataSource {
  async getAll(dto: PaginationDto): Promise<GetPaginatedDto<GetAllProductDto>> {
    const getAllProductOptions: Prisma.ProductFindManyArgs = {
      ...dto.forPrisma,
      where: {
        OR: [
          {
            name: {
              contains: dto.search,
              mode: "insensitive",
            },
          },
          {
            productCategory: {
              name: {
                contains: dto.search,
                mode: "insensitive",
              },
            },
          },
          {
            productCategory: {
              parentCategory: {
                name: {
                  contains: dto.search,
                  mode: "insensitive",
                },
              },
            },
          },
          {
            productCategory: {
              parentCategory: {
                parentCategory: {
                  name: {
                    contains: dto.search,
                    mode: "insensitive",
                  },
                },
              },
            },
          },
          {
            productCategory: {
              parentCategory: {
                parentCategory: {
                  parentCategory: {
                    name: {
                      contains: dto.search,
                      mode: "insensitive",
                    },
                  },
                },
              },
            },
          },
        ],
      },
      include: productIncludes,
    };

    if (dto.all) {
      const products = await prisma.product.findMany({
        include: getAllProductOptions.include,
      });

      return GetPaginatedDto.fromObject<GetAllProductDto>({
        currentPage: 1,
        items: products.map((product) => GetAllProductDto.create(product)),
        limit: products.length,
        totalItems: products.length,
      });
    }

    const products = await prisma.product.findMany({
      ...getAllProductOptions,
    });

    const totalItems = await prisma.product.count({
      where: getAllProductOptions.where,
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
      include: productIncludes,
    });

    return GetAllProductDto.create(product);
  }

  async getById(id: string): Promise<GetAllProductDto> {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
      include: productIncludes,
    });

    if (!product) {
      return null;
    }

    return GetAllProductDto.create(product);
  }

  async update(id: string, dto: UpdateProductDto): Promise<GetAllProductDto> {
    const product = await prisma.product.update({
      where: {
        id,
      },
      data: {
        ...dto.getValues(),
      },
      include: productIncludes,
    });

    return GetAllProductDto.create(product);
  }
}

export const productDataSource = new ProductDataSourceImpl();
