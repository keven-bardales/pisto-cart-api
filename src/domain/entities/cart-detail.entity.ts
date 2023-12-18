import { ProductEntity } from "@domain/entities/product.entity";
import { CartEntity } from "@domain/entities/cart.entity";
import { ColorDiscountEntity } from "@domain/entities/color-discount.entity";
import { TaxRateEntity } from "@domain/entities/tax-rate.entity";

export class CartDetailEntity {
  constructor(
    public id: string,
    public quantity: number,
    public colorDiscountId: string,
    public productId: string,
    public taxRateId: number,
    public cartId: string,
    public createdAt: string,
    public updatedAt: string,
    public product: ProductEntity | null = null,
    public colorDiscount: ColorDiscountEntity | null = null,
    public cart: CartEntity | null = null,
    public taxRate: TaxRateEntity | null = null
  ) {}

  static fromObject(object: any): CartDetailEntity {
    return new CartDetailEntity(
      object.id,
      object.quantity,
      object.colorDiscountId,
      object.productId,
      object.taxRateId,
      object.cartId,
      object.createdAt,
      object.updatedAt,
      object.product ? ProductEntity.fromObject(object.product) : null,
      object.colorDiscount ? ColorDiscountEntity.fromObject(object.colorDiscount) : null,
      object.cart ? CartEntity.fromObject(object.cart) : null,
      object.taxRate ? TaxRateEntity.fromObject(object.taxRate) : null
    );
  }
}
