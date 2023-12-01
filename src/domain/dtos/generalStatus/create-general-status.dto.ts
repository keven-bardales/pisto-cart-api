import { GeneralStatusEntity } from "@src/domain/entities/general-status.entity";

export class CreateGeneralStatusDto {
  constructor(
    public readonly name: typeof GeneralStatusEntity.prototype.name
  ) {}

  static fromObject(obj: any): CreateGeneralStatusDto {
    return new CreateGeneralStatusDto(obj?.name);
  }
}
