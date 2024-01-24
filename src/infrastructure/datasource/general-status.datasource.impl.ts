import { prisma } from "@src/data";
import { GeneralStatusDataSource } from "@src/domain/datasources/general-status.datasource";
import { CreateGeneralStatusDto } from "@src/domain/dtos/generalStatus/create-general-status.dto";
import { GetAllGeneralStatusDto } from "@src/domain/dtos/generalStatus/get-all-general-status.dto";
import { GeneralStatusEntity } from "@src/domain/entities/general-status.entity";

export class GeneralStatusDataSourceImpl implements GeneralStatusDataSource {
  async create(dto: CreateGeneralStatusDto): Promise<GetAllGeneralStatusDto> {
    const generalStatus = await prisma.generalStatus.create({
      data: {
        name: dto.name,
      },
    });

    return GetAllGeneralStatusDto.fromObject(generalStatus);
  }

  async getAll(): Promise<GetAllGeneralStatusDto[]> {
    const generalStatuses = await prisma.generalStatus.findMany();

    return generalStatuses.map((generalStatus) => GetAllGeneralStatusDto.fromObject(generalStatus));
  }

  async checkIfExists(params: { id: typeof GeneralStatusEntity.prototype.id }): Promise<GetAllGeneralStatusDto> {
    const generalStatus = await prisma.generalStatus.findUnique({
      where: {
        id: params.id,
      },
    });

    if (!generalStatus) {
      return null;
    }

    return GetAllGeneralStatusDto.fromObject(generalStatus);
  }
}

export const generalStatusDataSource = new GeneralStatusDataSourceImpl();
