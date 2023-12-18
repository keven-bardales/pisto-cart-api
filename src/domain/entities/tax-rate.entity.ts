import { CartDetailEntity } from "@domain/entities/cart-detail.entity";
import { CartOrderDetailEntity } from "@domain/entities/cart-order-detail.entity";

export class TaxRateEntity {
  constructor(public id: number, public name: string, public rate: number, public createdAt: string, public updatedAt: string, public cartDetails: CartDetailEntity[] = [], public orderDetails: CartOrderDetailEntity[] = []) {}

  static fromObject(object: any): TaxRateEntity {
    return new TaxRateEntity(
      object.id,
      object.name,
      object.rate,
      object.createdAt,
      object.updatedAt,
      object.cartDetail ? object.cartDetails.map((detail: any) => CartDetailEntity.fromObject(detail)) : [],
      object.orderDetails ? object.orderDetail.map((detail: any) => CartOrderDetailEntity.fromObject(detail)) : []
    );
  }
}
