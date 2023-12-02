import { ProductEntity } from "@src/domain/entities/product.entity";

export class CreateProductDto {
  constructor(
    public readonly code: typeof ProductEntity.prototype.code,
    public readonly name: typeof ProductEntity.prototype.name,
    public readonly description: typeof ProductEntity.prototype.description,
    public readonly price: typeof ProductEntity.prototype.price,
    public readonly cost: typeof ProductEntity.prototype.cost,
    public readonly stock: typeof ProductEntity.prototype.stock,
    public readonly productCategoryId: typeof ProductEntity.prototype.productCategoryId,
    public readonly productStatusId: typeof ProductEntity.prototype.productStatusId,
    public readonly imageUrl: typeof ProductEntity.prototype.imageUrl
  ) {}

  static fromObject(obj: any): CreateProductDto {
    return new CreateProductDto(
      obj?.code,
      obj?.name,
      obj?.description,
      obj?.price,
      obj?.cost,
      obj?.stock,
      obj?.productCategoryId,
      obj?.productStatusId,
      obj?.imageUrl
    );
  }
}
