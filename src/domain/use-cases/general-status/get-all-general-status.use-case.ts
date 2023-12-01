import { GetAllGeneralStatusDto } from "@src/domain/dtos/generalStatus/get-all-general-status.dto";
import { GeneralStatusRepository } from "@src/domain/repositories/general-status.repository";

export type IGetAllGeneralStatusUseCase = {
  execute(): Promise<GetAllGeneralStatusDto[]>;
};

export class GetAllGeneralStatusUseCase implements IGetAllGeneralStatusUseCase {
  constructor(
    private readonly generalStatusRepository: GeneralStatusRepository
  ) {}

  async execute(): Promise<GetAllGeneralStatusDto[]> {
    return this.generalStatusRepository.getAll();
  }
}
