import { GeneralStatusEntity } from "@src/domain/entities/general-status.entity";

export class GetAllGeneralStatusDto {
  constructor(
    public readonly id: typeof GeneralStatusEntity.prototype.id,
    public readonly name: typeof GeneralStatusEntity.prototype.name
  ) {}

  static fromObject(obj: any): GetAllGeneralStatusDto {
    return new GetAllGeneralStatusDto(obj?.id, obj?.name);
  }
}
