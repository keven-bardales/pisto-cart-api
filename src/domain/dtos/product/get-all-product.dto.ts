import { ProductCategoryEntity } from "@src/domain/entities/product-category.entity";
import { ProductEntity } from "@src/domain/entities/product.entity";
import { GetAllProductCategoryDto } from "../product-category/get-all-product-category.dto";
import { GetAllProductStatusDto } from "../product-status/get-all-product-status.dto";
import { GetAllGeneralStatusDto } from "../generalStatus/get-all-general-status.dto";

export class GetAllProductDto {
  constructor(
    public id: typeof ProductEntity.prototype.id,
    public code: typeof ProductEntity.prototype.code,
    public name: typeof ProductEntity.prototype.name,
    public description: typeof ProductEntity.prototype.description,
    public price: typeof ProductEntity.prototype.price,
    public stock: typeof ProductEntity.prototype.stock,
    public productCategoryId: typeof ProductEntity.prototype.productCategoryId,
    public productStatusId: typeof ProductEntity.prototype.productStatusId,
    public generalStatusId: typeof ProductEntity.prototype.generalStatusId,
    public updatedAt: typeof ProductEntity.prototype.updatedAt,
    public createdAt: typeof ProductEntity.prototype.createdAt,
    public imageUrl?: typeof ProductEntity.prototype.imageUrl,
    public productStatus?: GetAllProductStatusDto,
    public productCategory?: GetAllProductCategoryDto,
    public generalStatus?: GetAllGeneralStatusDto
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
      object?.generalStatusId,
      object?.updatedAt,
      object?.createdAt,
      object?.imageUrl,
      GetAllProductStatusDto.fromObject(object?.productStatus),
      GetAllProductCategoryDto.create(object?.productCategory),
      GetAllGeneralStatusDto.fromObject(object?.generalStatus)
    );
  }
}
