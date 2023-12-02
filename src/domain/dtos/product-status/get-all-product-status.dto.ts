import { ProductStatusEntity } from "@src/domain/entities/product-status.entity";

export class GetAllProductStatusDto {
  constructor(
    public readonly id: typeof ProductStatusEntity.prototype.id,
    public readonly name: typeof ProductStatusEntity.prototype.name
  ) {}

  static fromObject(obj: any): GetAllProductStatusDto {
    return new GetAllProductStatusDto(obj?.id, obj?.name);
  }
}
