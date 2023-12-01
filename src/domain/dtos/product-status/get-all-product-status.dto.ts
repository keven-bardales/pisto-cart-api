import { ProductStateEntity } from "@src/domain/entities/product-state.entity";

export class GetAllProductStatusDto {
  constructor(
    public readonly id: typeof ProductStateEntity.prototype.id,
    public readonly name: typeof ProductStateEntity.prototype.name
  ) {}

  static fromObject(obj: any): GetAllProductStatusDto {
    return new GetAllProductStatusDto(obj?.id, obj?.name);
  }
}
