import { ProductStateEntity } from "@src/domain/entities/product-state.entity";

export class CreateProductStatusDto {
  constructor(public readonly name: typeof ProductStateEntity.prototype.name) {}

  static fromObject(obj: any): CreateProductStatusDto {
    return new CreateProductStatusDto(obj?.name);
  }
}
