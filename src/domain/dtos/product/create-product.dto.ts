import { generalStatusConstant } from "@src/domain/constants/product-status/product-status.constant";
import { ProductEntity } from "@src/domain/entities/product.entity";

export class CreateProductDto {
  constructor(
    public code: typeof ProductEntity.prototype.code,
    public name: typeof ProductEntity.prototype.name,
    public description: typeof ProductEntity.prototype.description,
    public price: typeof ProductEntity.prototype.price,
    public cost: typeof ProductEntity.prototype.cost,
    public stock: typeof ProductEntity.prototype.stock,
    public productCategoryId: typeof ProductEntity.prototype.productCategoryId,
    public productStatusId: typeof ProductEntity.prototype.productStatusId,
    public imageUrl: typeof ProductEntity.prototype.imageUrl,
    public generalStatusId: typeof ProductEntity.prototype.generalStatusId
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
      obj?.imageUrl,
      generalStatusConstant.ACTIVE.id
    );
  }
}
