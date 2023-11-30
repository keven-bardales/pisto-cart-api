import { ColorDiscountEntity } from "@domain/entities/color-discount.entity";
import { ProductEntity } from "@domain/entities/product.entity";
import { TaxRateEntity } from "@domain/entities/tax-rate.entity";
import { CartOrderEntity } from "@domain/entities/cart-order.entity";

export class CartOrderDetailEntity {
  constructor(
    public id: string,
    public orderId: string,
    public productId: string,
    public quantity: number,
    public price: number,
    public total: number,
    public discount: number,
    public tax: number,
    public discountPercentage: number,
    public colorDiscountId: string,
    public taxRateId: number,
    public createdAt: Date,
    public updatedAt: Date,
    public product: ProductEntity | null = null,
    public order: CartOrderEntity | null = null,
    public colorDiscount: ColorDiscountEntity | null = null,
    public taxRate: TaxRateEntity | null = null
  ) {}

  static fromObject(object: any): CartOrderDetailEntity {
    return new CartOrderDetailEntity(
      object.id,
      object.orderId,
      object.productId,
      object.quantity,
      object.price,
      object.total,
      object.discount,
      object.tax,
      object.discountPerecentage,
      object.colorDiscountId,
      object.taxRateId,
      object.createdAt,
      object.updatedAt,
      object.product ? ProductEntity.fromObject(object.product) : null,
      object.order ? CartOrderEntity.fromObject(object.order) : null,
      object.colorDiscount
        ? ColorDiscountEntity.fromObject(object.colorDiscount)
        : null,
      object.taxRate ? TaxRateEntity.fromObject(object.taxRate) : null
    );
  }
}
