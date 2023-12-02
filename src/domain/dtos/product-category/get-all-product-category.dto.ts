import { ProductCategoryEntity } from "@src/domain/entities/product-category.entity";

export class GetAllProductCategoryDto {
  constructor(
    public readonly id: typeof ProductCategoryEntity.prototype.id,
    public readonly name: typeof ProductCategoryEntity.prototype.name,
    public readonly categoryLevel: typeof ProductCategoryEntity.prototype.categoryLevel,
    public readonly description: typeof ProductCategoryEntity.prototype.description,
    public readonly parentCategoryId: typeof ProductCategoryEntity.prototype.parentCategoryId = null
  ) {}

  static create(object: { [key: string]: any }): GetAllProductCategoryDto {
    return new GetAllProductCategoryDto(
      object?.id,
      object?.name,
      object?.categoryLevel,
      object?.description,
      object?.parentCategoryId
    );
  }
}
