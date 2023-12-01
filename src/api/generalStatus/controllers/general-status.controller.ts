import { CreateGeneralStatusDto } from "@src/domain/dtos/generalStatus/create-general-status.dto";
import { CreateGeneralStatusUseCase } from "@src/domain/use-cases/general-status/create-general-status.use-case";
import { GetAllGeneralStatusUseCase } from "@src/domain/use-cases/general-status/get-all-general-status.use-case";
import { ApiResponse } from "@src/domain/wrappers/response";
import {
  GeneralStatusRepositoryImpl,
  generalStatusRepository,
} from "@src/infrastructure/repositories/general-status.repository.impl";
import { NextFunction, Request, Response } from "express";

export class GeneralStatusController {
  constructor(
    private readonly generalStatusRepository: GeneralStatusRepositoryImpl
  ) {}

  public getAll = (req: Request, res: Response, next: NextFunction) => {
    new GetAllGeneralStatusUseCase(this.generalStatusRepository)
      .execute()
      .then((generalStatuses) => {
        if (generalStatuses.length === 0) {
          return res.status(200).json(
            ApiResponse.success({
              data: generalStatuses,
              message: "No se encontraron estados generales",
              statusCode: 200,
            })
          );
        }

        return res.status(200).json(
          ApiResponse.success({
            data: generalStatuses,
            message: "Lista de estados generales",
            statusCode: 200,
          })
        );
      })
      .catch((error) => {
        next(error);
      });
  };

  public create = (req: Request, res: Response, next: NextFunction) => {
    const createGeneralStatusDto = CreateGeneralStatusDto.fromObject(req.body);

    new CreateGeneralStatusUseCase(this.generalStatusRepository)
      .execute(createGeneralStatusDto)
      .then((generalStatus) => {
        return res.status(201).json(
          ApiResponse.success({
            data: generalStatus,
            message: "Estado creado con exito",
            statusCode: 201,
          })
        );
      })
      .catch((error) => {
        next(error);
      });
  };
}

export const generalStatusController = new GeneralStatusController(
  generalStatusRepository
);
