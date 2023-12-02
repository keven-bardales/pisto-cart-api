import { ProductRepository } from "@src/domain/repositories/product-repository";
import { CreateProductUseCase } from "@src/domain/use-cases/product/create-product.use-case";
import { GetAllProductUseCase } from "@src/domain/use-cases/product/get-all-products.use-case";
import { ApiResponse } from "@src/domain/wrappers/response";
import { productRepository } from "@src/infrastructure/repositories/product.repository.impl";
import { NextFunction, Request, Response } from "express";

export class ProductController {
  constructor(private readonly productRepository: ProductRepository) {}

  public getAll = (req: Request, res: Response, next: NextFunction) => {
    new GetAllProductUseCase(this.productRepository)
      .exucute()
      .then((products) => {
        if (products.length === 0) {
          return res.status(200).json(
            ApiResponse.success({
              data: products,
              message: "No hay productos",
              statusCode: 200,
            })
          );
        }

        return res.status(200).json(
          ApiResponse.success({
            data: products,
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
