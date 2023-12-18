import { ProductEntity } from "@domain/entities/product.entity";

export class ProductCategoryEntity {
  constructor(
    public id: string,
    public categoryCode: string,
    public name: string,
    public categoryLevel: number,
    public parentCategoryId: string | null,
    public createdAt: string,
    public updatedAt: string,
    public description: string,
    public imageUrl: string,
    public products: ProductEntity[] = [],
    public parentCategory: ProductCategoryEntity | null
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
      object.imageUrl,
      object.products ? object.products.map((product: any) => ProductEntity.fromObject(product)) : [],
      object.parentCategory ? ProductCategoryEntity.fromObject(object.parentCategory) : null
    );
  }
}
