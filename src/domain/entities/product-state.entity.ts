import { ProductEntity } from "@domain/entities/product.entity";

export class ProductStateEntity {
  constructor(
    public id: string,
    public name: string,
    public createdAt: Date,
    public updatedAt: Date,
    public products?: ProductEntity[]
  ) {}

  static fromObject(object: any): ProductStateEntity {
    return new ProductStateEntity(
      object.id,
      object.name,
      object.createdAt,
      object.updatedAt,
      object?.products
        ? object.products.map((product: any) =>
            ProductEntity.fromObject(product)
          )
        : []
    );
  }
}
