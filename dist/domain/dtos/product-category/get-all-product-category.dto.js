"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProductCategoryDto = void 0;
class GetAllProductCategoryDto {
    id;
    name;
    categoryLevel;
    description;
    imageUrl;
    parentCategoryId;
    parentCategory;
    constructor(id, name, categoryLevel, description, imageUrl, parentCategoryId = null, parentCategory) {
        this.id = id;
        this.name = name;
        this.categoryLevel = categoryLevel;
        this.description = description;
        this.imageUrl = imageUrl;
        this.parentCategoryId = parentCategoryId;
        this.parentCategory = parentCategory;
    }
    static create(object) {
        return new GetAllProductCategoryDto(object?.id, object?.name, object?.categoryLevel, object?.description, object?.imageUrl, object?.parentCategoryId, object?.parentCategory ? GetAllProductCategoryDto.create(object.parentCategory) : null);
    }
}
exports.GetAllProductCategoryDto = GetAllProductCategoryDto;
//# sourceMappingURL=get-all-product-category.dto.js.map