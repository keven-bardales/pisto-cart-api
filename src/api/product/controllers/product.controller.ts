import { ProductStatusDataSource } from "@src/domain/datasources/product-status.datasource";
import { CreateProductDto } from "@src/domain/dtos/product/create-product.dto";
import { UpdateProductDto } from "@src/domain/dtos/product/update-product.dto";
import { PaginationDto } from "@src/domain/dtos/shared/pagination.dto";
import { GeneralStatusRepository } from "@src/domain/repositories/general-status.repository";
import { ProductCategoryRepository } from "@src/domain/repositories/product-category.repository";
import { ProductRepository } from "@src/domain/repositories/product-repository";
import { ProductStatusRepository } from "@src/domain/repositories/product-status.repository";
import { CreateProductUseCase } from "@src/domain/use-cases/product/create-product.use-case";
import { DeleteProductUseCase } from "@src/domain/use-cases/product/delete-product.use-case";
import { GetAllProductUseCase } from "@src/domain/use-cases/product/get-all-products.use-case";
import { GetByIdProductUseCase } from "@src/domain/use-cases/product/get-by-id.use-case";
import { UpdateProductUseCase } from "@src/domain/use-cases/product/update-product.use-case";
import { ApiResponse } from "@src/domain/wrappers/response";
import { GeneralStatusDataSourceImpl } from "@src/infrastructure/datasource/general-status.datasource.impl";
import { ProductCategoryDataSourceImpl } from "@src/infrastructure/datasource/product-category.datasource.impl";
import { ProductStatusDataSourceImpl } from "@src/infrastructure/datasource/product-status.datasource.impl";
import { ProductDataSourceImpl } from "@src/infrastructure/datasource/product.datasource.impl";
import { GeneralStatusRepositoryImpl } from "@src/infrastructure/repositories/general-status.repository.impl";
import { ProductCategoryImpl, productCategoryRepository } from "@src/infrastructure/repositories/product-category.repository.impl";
import { ProductStatusRepositoryImpl } from "@src/infrastructure/repositories/product-status.repository.impl";
import { ProductRepositoryImpl } from "@src/infrastructure/repositories/product.repository.impl";
import { NextFunction, Request, Response } from "express";

export class ProductController {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly generalStatusRepository: GeneralStatusRepository,
    private readonly productCategoryRepository: ProductCategoryRepository,
    private readonly productStatusRepository: ProductStatusRepository
  ) {}

  public getAll = (req: Request, res: Response, next: NextFunction) => {
    const paginationDto = PaginationDto.fromObject(req.query);

    new GetAllProductUseCase(this.productRepository)
      .exucute(paginationDto)
      .then((dto) => {
        if (dto.items.length === 0) {
          return res.status(200).json(
            ApiResponse.success({
              data: dto,
              message: "No se encontraron productos",
              statusCode: 200,
            })
          );
        }

        return res.status(200).json(
          ApiResponse.success({
            data: dto,
            message: "Productos obtenidos correctamente",
            statusCode: 200,
          })
        );
      })
      .catch((error) => {
        next(error);
      });
  };

  public create = (req: Request, res: Response, next: NextFunction) => {
    const dto = CreateProductDto.fromObject(req.body);

    new CreateProductUseCase(this.productRepository, this.generalStatusRepository, this.productCategoryRepository, this.productStatusRepository)
      .execute(dto)
      .then((product) => {
        return res.status(201).json(
          ApiResponse.success({
            data: product,
            message: "Producto creado correctamente",
            statusCode: 201,
          })
        );
      })
      .catch((error) => {
        next(error);
      });
  };

  public getById = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    new GetByIdProductUseCase(this.productRepository).exucute(id).then((product) => {
      return res.status(200).json(
        ApiResponse.success({
          data: product,
          message: "Producto obtenido correctamente",
          statusCode: 200,
        })
      );
    });
  };

  public update = (req: Request, res: Response, next: NextFunction) => {
    const updateProductDto = UpdateProductDto.create(req.body);

    new UpdateProductUseCase(this.productRepository, this.generalStatusRepository, this.productCategoryRepository, this.productStatusRepository)
      .execute(updateProductDto)
      .then((product) => {
        return res.status(200).json(
          ApiResponse.success({
            data: product,
            message: "Producto actualizado correctamente",
            statusCode: 200,
          })
        );
      })
      .catch((error) => {
        next(error);
      });
  };

  delete = (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);

    new DeleteProductUseCase(this.productRepository)
      .execute(id)
      .then((product) => {
        return res.status(200).json(
          ApiResponse.success({
            data: product,
            message: "Producto eliminado correctamente",
            statusCode: 200,
          })
        );
      })
      .catch((error) => {
        next(error);
      });
  };
}

export const productController = new ProductController(
  new ProductRepositoryImpl(new ProductDataSourceImpl()),
  new GeneralStatusRepositoryImpl(new GeneralStatusDataSourceImpl()),
  new ProductCategoryImpl(new ProductCategoryDataSourceImpl()),
  new ProductStatusRepositoryImpl(new ProductStatusDataSourceImpl())
);
