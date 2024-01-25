import { ProductEntity } from "@src/domain/entities/product.entity";

export class UpdateProductDto {
  constructor(
    public id: typeof ProductEntity.prototype.id,
    public name: typeof ProductEntity.prototype.name,
    public code: typeof ProductEntity.prototype.code,
    public description: typeof ProductEntity.prototype.description,
    public price: typeof ProductEntity.prototype.price,
    public stock: typeof ProductEntity.prototype.stock,
    public productCategoryId: typeof ProductEntity.prototype.productCategoryId,
    public productStatusId: typeof ProductEntity.prototype.productStatusId,
    public imageUrl: typeof ProductEntity.prototype.imageUrl,
    public generalStatusId: typeof ProductEntity.prototype.generalStatusId
  ) {}

  static create(object: { [key: string]: any }): UpdateProductDto {
    return new UpdateProductDto(
      object?.id,
      object?.name,
      object?.code,
      object?.description,
      object?.price,
      object?.stock,
      object?.productCategoryId,
      object?.productStatusId,
      object?.imageUrl,
      object?.generalStatusId
    );
  }

  getValues() {
    const keys = Object.keys(this);

    const object: any = {};

    for (const key of keys) {
      if (this[key as keyof UpdateProductDto]) object[key] = this[key as keyof UpdateProductDto];
    }

    return object;
  }
}
