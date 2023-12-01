import { GetAllGeneralStatusDto } from "@domain/dtos/generalStatus/get-all-general-status.dto";
import { CreateGeneralStatusDto } from "@domain/dtos/generalStatus/create-general-status.dto";

export abstract class GeneralStatusDataSource {
  abstract getAll(): Promise<GetAllGeneralStatusDto[]>;
  abstract create(dto: CreateGeneralStatusDto): Promise<GetAllGeneralStatusDto>;
}
