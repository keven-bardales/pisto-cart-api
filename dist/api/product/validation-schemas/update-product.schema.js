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
exports.updateProductSchema = void 0;
const z = __importStar(require("zod"));
exports.updateProductSchema = z.object({
    body: z.object({
        id: z
            .number({
            required_error: "El id es requerido",
            invalid_type_error: "El id debe ser un entero",
        })
            .int({
            message: "El id del producto debe ser un entero",
        }),
        code: z.string({
            required_error: "El code es requerido",
            invalid_type_error: "El code debe ser un string",
        }),
        description: z.string({
            required_error: "La descripcion es requerida",
            invalid_type_error: "La descripcion debe ser un string",
        }),
        generalStatusId: z
            .number({
            required_error: "El estado es requerido",
            invalid_type_error: "El estado debe ser un entero",
        })
            .int({
            message: "El estado debe ser un entero",
        }),
        productCategoryId: z
            .number({
            required_error: "La categoria es requerida",
            invalid_type_error: "La categoria debe ser un entero",
        })
            .int({
            message: "La categoria debe ser un entero",
        }),
        productStatusId: z
            .number({
            required_error: "El estado es requerido",
            invalid_type_error: "El estado debe ser un entero",
        })
            .int({
            message: "El estado debe ser un entero",
        }),
        stock: z.number({
            required_error: "El stock es requerido",
            invalid_type_error: "El stock debe ser un entero",
        }),
    }),
});
//# sourceMappingURL=update-product.schema.js.map