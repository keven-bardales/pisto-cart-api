import { PaginationDto } from "@src/domain/dtos/shared/pagination.dto";
import { ProductRepository } from "@src/domain/repositories/product-repository";
import { CreateProductUseCase } from "@src/domain/use-cases/product/create-product.use-case";
import { GetAllProductUseCase } from "@src/domain/use-cases/product/get-all-products.use-case";
import { ApiResponse } from "@src/domain/wrappers/response";
import { productRepository } from "@src/infrastructure/repositories/product.repository.impl";
import { NextFunction, Request, Response } from "express";

export class ProductController {
  constructor(private readonly productRepository: ProductRepository) {}

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
    new CreateProductUseCase(this.productRepository)
      .exucute(req.body)
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
}

export const productController = new ProductController(productRepository);
