import { CartOrderEntity } from "@domain/entities/cart-order.entity";

export class PaymentMethodsEntity {
  constructor(
    public id: string,
    public name: string,
    public createdAt: string,
    public updatedAt: string,
    public cartOrders: CartOrderEntity[] = [] // Puede contener un array de CartOrderEntity
  ) {}

  static fromObject(object: any): PaymentMethodsEntity {
    return new PaymentMethodsEntity(object.id, object.name, object.createdAt, object.updatedAt, object.cartOrders ? object.cartOrders.map((order: any) => CartOrderEntity.fromObject(order)) : []);
  }
}
