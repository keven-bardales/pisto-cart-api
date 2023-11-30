import { ProductEntity } from "@domain/entities/product.entity";

export class ProductCategoryEntity {
  constructor(
    public id: string,
    public categoryCode: string,
    public name: string,
    public categoryLevel: number,
    public parentCategoryId: string | null,
    public createdAt: Date,
    public updatedAt: Date,
    public description: string,
    public products: ProductEntity[] = []
  ) {}

  static fromObject(object: any): ProductCategoryEntity {
    return new ProductCategoryEntity(
      object.id,
      object.categoryCode,
      object.name,
      object.categoryLevel,
      object.parentCategoryId || null,
      object.createdAt,
      object.updatedAt,
      object.description,
      object.products
        ? object.products.map((product: any) =>
            ProductEntity.fromObject(product)
          )
        : []
    );
  }
}
