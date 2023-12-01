import { CreateGeneralStatusDto } from "@src/domain/dtos/generalStatus/create-general-status.dto";
import { GetAllGeneralStatusDto } from "@src/domain/dtos/generalStatus/get-all-general-status.dto";
import { GeneralStatusRepository } from "@src/domain/repositories/general-status.repository";
import { generalStatusDataSource } from "@infrastructure/datasource/general-status.datasource.impl";
import { GeneralStatusDataSource } from "@src/domain/datasources/general-status.datasource";

export class GeneralStatusRepositoryImpl implements GeneralStatusRepository {
  constructor(private readonly dataSource: GeneralStatusDataSource) {}

  create(dto: CreateGeneralStatusDto): Promise<GetAllGeneralStatusDto> {
    return this.dataSource.create(dto);
  }

  getAll(): Promise<GetAllGeneralStatusDto[]> {
    return this.dataSource.getAll();
  }
}

export const generalStatusRepository = new GeneralStatusRepositoryImpl(
  generalStatusDataSource
);
