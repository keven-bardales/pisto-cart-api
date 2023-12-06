import { ProductEntity } from "@src/domain/entities/product.entity";

export class GetAllProductDto {
  constructor(
    public readonly id: typeof ProductEntity.prototype.id,
    public readonly code: typeof ProductEntity.prototype.code,
    public readonly name: typeof ProductEntity.prototype.name,
    public readonly description: typeof ProductEntity.prototype.description,
    public readonly price: typeof ProductEntity.prototype.price,
    public readonly stock: typeof ProductEntity.prototype.stock,
    public readonly productCategoryId: typeof ProductEntity.prototype.productCategoryId,
    public readonly productStatusId: typeof ProductEntity.prototype.productStatusId,
    public readonly updatedAt: typeof ProductEntity.prototype.updatedAt,
    public readonly createdAt: typeof ProductEntity.prototype.createdAt,
    public readonly imageUrl?: typeof ProductEntity.prototype.imageUrl,
    public readonly productStatus?: typeof ProductEntity.prototype.productStatus,
    public readonly productCategory?: typeof ProductEntity.prototype.productCategory
  ) {}

  static create(object: { [key: string]: any }): GetAllProductDto {
    return new GetAllProductDto(
      object?.id,
      object?.code,
      object?.name,
      object?.description,
      object?.price,
      object?.stock,
      object?.productCategoryId,
      object?.productStatusId,
      object?.updatedAt,
      object?.createdAt,
      object?.imageUrl,
      object?.productStatus,
      object?.productCategory
    );
  }
}
