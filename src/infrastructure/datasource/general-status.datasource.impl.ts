import { prisma } from "@src/data";
import { GeneralStatusDataSource } from "@src/domain/datasources/general-status.datasource";
import { CreateGeneralStatusDto } from "@src/domain/dtos/generalStatus/create-general-status.dto";
import { GetAllGeneralStatusDto } from "@src/domain/dtos/generalStatus/get-all-general-status.dto";

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

    return generalStatuses.map((generalStatus) =>
      GetAllGeneralStatusDto.fromObject(generalStatus)
    );
  }
}

export const generalStatusDataSource = new GeneralStatusDataSourceImpl();
