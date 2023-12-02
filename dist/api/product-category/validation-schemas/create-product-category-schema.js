"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductCategorySchema = void 0;
const z = __importStar(require("zod"));
exports.createProductCategorySchema = z.object({
    body: z.object({
        name: z.string({
            invalid_type_error: "El nombre debe ser de tipo texto",
            required_error: "El nombre es requerido",
        }),
        categoryCode: z.string({
            required_error: "El código de categoría es requerido",
        }),
        categoryLevel: z.number({
            invalid_type_error: "El nivel de categoría debe ser de tipo numérico",
            required_error: "El nivel de categoría es requerido",
        }),
        description: z
            .string({
            invalid_type_error: "La descripción debe ser de tipo texto",
            required_error: "La descripción es requerida",
        })
            .max(255, {
            message: "La descripción no debe exceder los 255 caracteres",
        }),
        imageUrl: z
            .string({
            invalid_type_error: "La url de la imagen debe ser de tipo texto",
            required_error: "La url de la imagen es requerida",
        })
            .url({
            message: "La url de la imagen debe ser una URL válida",
        }),
        parentCategoryId: z
            .string({
            invalid_type_error: "El id de la categoría padre debe ser de tipo texto",
        })
            .uuid({
            message: "El id de la categoría padre debe ser un UUID",
        })
            .optional(),
    }),
});
//# sourceMappingURL=create-product-category-schema.js.map