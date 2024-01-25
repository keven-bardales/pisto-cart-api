import { CartOrderDetailEntity } from "@domain/entities/cart-order-detail.entity";
import { UserEntity } from "@domain/entities/user.entity";
import { PaymentMethodsEntity } from "@domain/entities/payment-methods.entity";

export class CartOrderEntity {
  constructor(
    public id: string,
    public userId: string,
    public paymentMethodId: string,
    public quantity: number,
    public total: number,
    public subTotal: number,
    public subTotalDiscount: number,
    public subTotalTax: number,
    public discount: number,
    public tax: number,
    public createdAt: string,
    public updatedAt: string,
    public user?: UserEntity | null,
    public paymentMethod?: PaymentMethodsEntity | null,
    public orderDetail?: CartOrderDetailEntity[] // Puede contener un array de OrderDetailEntity
  ) {}

  static fromObject(object: any): CartOrderEntity {
    return new CartOrderEntity(
      object.id,
      object.userId,
      object.paymentMethodId,
      object.quantity,
      object.total,
      object.subTotal,
      object.subTotalDiscount,
      object.subTotalTax,
      object.discount,
      object.tax,
      object.createdAt,
      object.updatedAt,
      object.user ? UserEntity.fromObject(object.user) : null,
      object.paymentMethod ? PaymentMethodsEntity.fromObject(object.paymentMethod) : null,
      object.orderDetail ? object.orderDetail.map((detail: any) => CartOrderDetailEntity.fromObject(detail)) : null
    );
  }
}
