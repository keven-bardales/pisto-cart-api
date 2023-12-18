import { CartOrderDetailEntity } from "@domain/entities/cart-order-detail.entity";
import { CartDetailEntity } from "@domain/entities/cart-detail.entity";

export class ColorDiscountEntity {
  constructor(public id: string, public name: string, public discountPercentage: number, public createdAt: string, public updatedAt: string, public orderDetails: CartOrderDetailEntity[] = [], public cartDetails: CartDetailEntity[] = []) {}

  static fromObject(object: any): ColorDiscountEntity {
    return new ColorDiscountEntity(
      object.id,
      object.name,
      object.discountPerecentage,
      object.createdAt,
      object.updatedAt,
      object.orderDetail ? object.orderDetails.map((detail: any) => CartOrderDetailEntity.fromObject(detail)) : [],
      object.cartDetail ? object.cartDetails.map((detail: any) => CartDetailEntity.fromObject(detail)) : []
    );
  }
}
