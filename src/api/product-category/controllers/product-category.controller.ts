import { CreateProductCategoryDto } from "@src/domain/dtos/product-category/create-product-category.dto";
import { ProductCategoryRepository } from "@src/domain/repositories/product-category.repository";
import { CreateProductCategoryUseCase } from "@src/domain/use-cases/product-category/create-product-category.use-case";
import { GetAllProductCategoryUseCase } from "@src/domain/use-cases/product-category/get-all-product-category.use-case";
import { GetByIdProductCategoryUseCase } from "@src/domain/use-cases/product-category/get-by-id-product-category.use-case";
import { ApiResponse } from "@src/domain/wrappers/response";
import { productCategoryRepository } from "@src/infrastructure/repositories/product-category.repository.impl";

import { NextFunction, Request, Response } from "express";

export class ProductCategoryController {
  constructor(private readonly productCategoryRepository: ProductCategoryRepository) {}

  public getAll = (req: Request, res: Response, next: NextFunction) => {
    new GetAllProductCategoryUseCase(this.productCategoryRepository)
      .execute()
      .then((productCategories) => {
        if (productCategories.length === 0) {
          return res.status(200).json(
            ApiResponse.success({
              data: productCategories,
              message: "No hay categorias de producto",
              statusCode: 200,
            })
          );
        }

        return res.status(201).json(
          ApiResponse.success({
            data: productCategories,
            message: "Categorias de producto obtenidas correctamente",
            statusCode: 201,
          })
        );
      })
      .catch((error) => {
        next(error);
      });
  };

  public create = (req: Request, res: Response, next: NextFunction) => {
    const productCategoryDto = CreateProductCategoryDto.create(req.body);

    new CreateProductCategoryUseCase(this.productCategoryRepository)
      .execute(productCategoryDto)
      .then((productCategory) => {
        return res.status(200).json(
          ApiResponse.success({
            data: productCategory,
            message: "Categoria de producto creada correctamente",
            statusCode: 200,
          })
        );
      })
      .catch((error) => {
        next(error);
      });
  };

  public getById = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    new GetByIdProductCategoryUseCase(this.productCategoryRepository)
      .execute(id)
      .then((productCategory) => {
        return res.status(200).json(
          ApiResponse.success({
            data: productCategory,
            message: "Categoria de producto obtenida correctamente",
            statusCode: 200,
          })
        );
      })
      .catch((error) => {
        next(error);
      });
  };
}

export const productCategoryController = new ProductCategoryController(productCategoryRepository);
