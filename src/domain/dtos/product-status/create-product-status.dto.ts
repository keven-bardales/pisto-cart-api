import { ProductStatusEntity } from "@src/domain/entities/product-status.entity";

export class CreateProductStatusDto {
  constructor(
    public readonly name: typeof ProductStatusEntity.prototype.name
  ) {}

  static fromObject(obj: any): CreateProductStatusDto {
    return new CreateProductStatusDto(obj?.name);
  }
}
