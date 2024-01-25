import { ProductCategoryEntity } from "@src/domain/entities/product-category.entity";

export class GetAllProductCategoryDto {
  constructor(
    public readonly id: typeof ProductCategoryEntity.prototype.id,
    public readonly name: typeof ProductCategoryEntity.prototype.name,
    public readonly categoryLevel: typeof ProductCategoryEntity.prototype.categoryLevel,
    public readonly description: typeof ProductCategoryEntity.prototype.description,
    public readonly imageUrl: typeof ProductCategoryEntity.prototype.imageUrl,
    public readonly parentCategoryId: typeof ProductCategoryEntity.prototype.parentCategoryId = null,
    public parentCategory?: GetAllProductCategoryDto | null
  ) {}

  static create(object: { [key: string]: any }): GetAllProductCategoryDto {
    return new GetAllProductCategoryDto(object?.id, object?.name, object?.categoryLevel, object?.description, object?.imageUrl, object?.parentCategoryId, object?.parentCategory ? GetAllProductCategoryDto.create(object.parentCategory) : null);
  }
}
