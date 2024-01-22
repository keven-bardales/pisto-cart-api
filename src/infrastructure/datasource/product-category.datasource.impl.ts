import { prisma } from "@src/data";
import { ProductCategoryDataSource } from "@src/domain/datasources/product-category.datasource";
import { CreateProductCategoryDto } from "@src/domain/dtos/product-category/create-product-category.dto";
import { GetAllProductCategoryDto } from "@src/domain/dtos/product-category/get-all-product-category.dto";

export class ProductCategoryDataSourceImpl implements ProductCategoryDataSource {
  async create(dto: CreateProductCategoryDto): Promise<GetAllProductCategoryDto> {
    const productCategory = await prisma.productCategory.create({
      data: {
        ...dto,
      },
    });

    return GetAllProductCategoryDto.create(productCategory);
  }

  async getAll(): Promise<GetAllProductCategoryDto[]> {
    const productCategories = await prisma.productCategory.findMany();

    return productCategories.map((productCategory) => GetAllProductCategoryDto.create(productCategory));
  }

  async getById(id: number): Promise<GetAllProductCategoryDto> {
    const productCategory = await prisma.productCategory.findUnique({
      where: {
        id,
      },
    });

    return GetAllProductCategoryDto.create(productCategory);
  }
}

export const productCategoryDataSource = new ProductCategoryDataSourceImpl();
