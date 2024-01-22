import { ProductStatusEntity } from "@src/domain/entities/product-status.entity";
import { ProductCategoryEntity } from "@domain/entities/product-category.entity";
import { CartOrderDetailEntity } from "@domain/entities/cart-order-detail.entity";
import { CartDetailEntity } from "@domain/entities/cart-detail.entity";
import { GeneralStatusEntity } from "./general-status.entity";
import { Prisma } from "@prisma/client";

export class ProductEntity {
  constructor(
    public id: number,
    public code: string,
    public name: string,
    public description: string,
    public price: number,
    public cost: number,
    public stock: number,
    public imageUrl: string,
    public productCategoryId: number,
    public productStatusId: number,
    public generalStatusId: number,
    public createdAt: string,
    public updatedAt: string,
    public productStatus?: ProductStatusEntity,
    public productCategory?: ProductCategoryEntity,
    public orderDetails?: CartOrderDetailEntity[],
    public cartDetails?: CartDetailEntity[],
    public generalStatus?: GeneralStatusEntity
  ) {}

  static fromObject(object: any): ProductEntity {
    return new ProductEntity(
      object.id,
      object.code,
      object.name,
      object.description,
      object.price,
      object.cost,
      object.stock,
      object.imageUrl,
      object.productCategoryId,
      object.productStatusId,
      object.generalStatusId,
      object.createdAt,
      object.updatedAt,
      ProductStatusEntity.fromObject(object?.productState),
      ProductCategoryEntity.fromObject(object?.productCategory),
      object?.orderDetails.map((orderDetail: any) => CartOrderDetailEntity.fromObject(orderDetail)),
      object?.cartDetails.map((cartDetail: any) => CartDetailEntity.fromObject(cartDetail)),
      GeneralStatusEntity.fromObject(object?.generalStatus)
    );
  }
}
