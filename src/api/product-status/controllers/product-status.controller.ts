import { CreateProductStatusDto } from "@src/domain/dtos/product-status/create-product-status.dto";
import { CreateProductStatusUseCase } from "@src/domain/use-cases/product-status/create-product-status.use-case";
import { GetAllProductStatusUseCase } from "@src/domain/use-cases/product-status/get-all-product-status.use-case";
import { ApiResponse } from "@src/domain/wrappers/response";
import {
  ProductStatusRepositoryImpl,
  productStatusRepository,
} from "@src/infrastructure/repositories/product-status.repository.impl";
import { NextFunction, Request, Response } from "express";

export class ProductStatusController {
  constructor(
    private readonly productStatusRepository: ProductStatusRepositoryImpl
  ) {}

  public getAll = (req: Request, res: Response, next: NextFunction) => {
    new GetAllProductStatusUseCase(this.productStatusRepository)
      .execute()
      .then((productStatuses) => {
        if (productStatuses.length === 0) {
          return res.status(200).json(
            ApiResponse.success({
              data: productStatuses,
              message: "No se encontraron estados de producto",
              statusCode: 200,
            })
          );
        }

        return res.status(200).json(
          ApiResponse.success({
            data: productStatuses,
            message: "Lista de estados de producto",
            statusCode: 200,
          })
        );
      })
      .catch((error) => {
        next(error);
      });
  };

  public create = (req: Request, res: Response, next: NextFunction) => {
    const createProductStatusDto = CreateProductStatusDto.fromObject(req.body);

    new CreateProductStatusUseCase(this.productStatusRepository)
      .execute(createProductStatusDto)
      .then((productStatus) => {
        return res.status(201).json({
          data: productStatus,
          message: "Estado de producto creado con exito",
          statusCode: 201,
        });
      })
      .catch((error) => {
        next(error);
      });
  };
}

export const productStatusController = new ProductStatusController(
  productStatusRepository
);
