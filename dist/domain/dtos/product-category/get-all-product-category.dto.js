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
    constructor(id, name, categoryLevel, description, imageUrl, parentCategoryId = null) {
        this.id = id;
        this.name = name;
        this.categoryLevel = categoryLevel;
        this.description = description;
        this.imageUrl = imageUrl;
        this.parentCategoryId = parentCategoryId;
    }
    static create(object) {
        return new GetAllProductCategoryDto(object?.id, object?.name, object?.categoryLevel, object?.description, object?.imageUrl, object?.parentCategoryId);
    }
}
exports.GetAllProductCategoryDto = GetAllProductCategoryDto;
//# sourceMappingURL=get-all-product-category.dto.js.map