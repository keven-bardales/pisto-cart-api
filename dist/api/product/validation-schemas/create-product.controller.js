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
exports.createProductSchema = void 0;
const z = __importStar(require("zod"));
exports.createProductSchema = z.object({
    body: z.object({
        code: z
            .string({
            invalid_type_error: "El código debe ser un texto",
            required_error: "El código es requerido",
        })
            .min(3, "El código debe tener al menos 3 caracteres")
            .max(255, "El código debe tener como máximo 255 caracteres"),
        name: z
            .string({
            invalid_type_error: "El nombre debe ser un texto",
            required_error: "El nombre es requerido",
        })
            .min(3, "El nombre debe tener al menos 3 caracteres")
            .max(255, "El nombre debe tener como máximo 255 caracteres"),
        description: z
            .string({
            invalid_type_error: "La descripción debe ser un texto",
            required_error: "La descripción es requerida",
        })
            .min(3, "La descripción debe tener al menos 3 caracteres")
            .max(255, "La descripción debe tener como máximo 255 caracteres"),
        price: z
            .number({
            invalid_type_error: "El precio debe ser un número",
            required_error: "El precio es requerido",
        })
            .min(0, "El precio debe ser mayor o igual a 0"),
        productCategoryId: z
            .number({
            invalid_type_error: "La categoría debe ser un número",
            required_error: "La categoría es requerida",
        })
            .min(1, "El estado debe ser mayor a 0"),
        cost: z.number({
            invalid_type_error: "El costo debe ser un número",
            required_error: "El costo es requerido",
        }),
        productStatusId: z
            .number({
            invalid_type_error: "El estado debe ser un número",
            required_error: "El estado es requerido",
        })
            .int({
            message: "El estado debe ser un número entero",
        })
            .min(1, "El estado debe ser mayor a 0"),
        imageUrl: z
            .string({
            invalid_type_error: "La url de la imagen debe ser un texto",
            required_error: "La url de la imagen es requerida",
        })
            .url({
            message: "La url de la imagen debe ser válida",
        }),
        stock: z
            .number({
            invalid_type_error: "El stock debe ser un número",
            required_error: "El stock es requerido",
        })
            .int({
            message: "El stock debe ser un número entero",
        }),
        generalStatusId: z
            .number({
            invalid_type_error: "El estado debe ser un número",
            required_error: "El estado es requerido",
        })
            .min(1, "El estado debe ser mayor a 0"),
    }),
});
//# sourceMappingURL=create-product.controller.js.map