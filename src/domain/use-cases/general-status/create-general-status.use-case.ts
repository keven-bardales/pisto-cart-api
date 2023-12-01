import { CreateGeneralStatusDto } from "@src/domain/dtos/generalStatus/create-general-status.dto";
import { GetAllGeneralStatusDto } from "@src/domain/dtos/generalStatus/get-all-general-status.dto";
import { GeneralStatusRepository } from "@src/domain/repositories/general-status.repository";

export type ICreateGeneralStatusUseCase = {
  execute(dto: CreateGeneralStatusDto): Promise<GetAllGeneralStatusDto>;
};

export class CreateGeneralStatusUseCase implements ICreateGeneralStatusUseCase {
  constructor(
    private readonly generalStatusRepository: GeneralStatusRepository
  ) {}

  async execute(dto: CreateGeneralStatusDto): Promise<GetAllGeneralStatusDto> {
    return this.generalStatusRepository.create(dto);
  }
}
