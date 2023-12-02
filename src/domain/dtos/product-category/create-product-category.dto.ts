import { ProductCategoryEntity } from "@src/domain/entities/product-category.entity";

export class CreateProductCategoryDto {
  constructor(
    public readonly categoryCode: typeof ProductCategoryEntity.prototype.categoryCode,
    public readonly name: typeof ProductCategoryEntity.prototype.name,
    public readonly categoryLevel: typeof ProductCategoryEntity.prototype.categoryLevel,
    public readonly description: typeof ProductCategoryEntity.prototype.description,
    public readonly imageUrl: typeof ProductCategoryEntity.prototype.imageUrl,
    public readonly parentCategoryId: typeof ProductCategoryEntity.prototype.parentCategoryId = null
  ) {}

  static create(object: { [key: string]: any }): CreateProductCategoryDto {
    return new CreateProductCategoryDto(
      object?.categoryCode,
      object?.name,
      object?.categoryLevel,
      object?.description,
      object?.imageUrl,
      object?.parentCategoryId
    );
  }
}
