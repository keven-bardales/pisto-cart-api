"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductCategoryDto = void 0;
class CreateProductCategoryDto {
    categoryCode;
    name;
    categoryLevel;
    description;
    imageUrl;
    parentCategoryId;
    constructor(categoryCode, name, categoryLevel, description, imageUrl, parentCategoryId = null) {
        this.categoryCode = categoryCode;
        this.name = name;
        this.categoryLevel = categoryLevel;
        this.description = description;
        this.imageUrl = imageUrl;
        this.parentCategoryId = parentCategoryId;
    }
    static create(object) {
        return new CreateProductCategoryDto(object?.categoryCode, object?.name, object?.categoryLevel, object?.description, object?.imageUrl, object?.parentCategoryId);
    }
}
exports.CreateProductCategoryDto = CreateProductCategoryDto;
//# sourceMappingURL=create-product-category.dto.js.map