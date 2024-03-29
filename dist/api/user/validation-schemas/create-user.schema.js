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
exports.createUserSchema = void 0;
const z = __importStar(require("zod"));
exports.createUserSchema = z.object({
    body: z.object({
        googleId: z.string({
            required_error: "El usuario de google es requerido",
        }),
        firstName: z.string({
            required_error: "El nombre es requerido",
        }),
        lastName: z.string({
            required_error: "El apellido es requerido",
        }),
        email: z
            .string({
            required_error: "El email es requerido",
        })
            .email("Email no valido"),
        imageUrl: z.string({
            required_error: "La imagen es requerida",
        }),
        rolId: z.number({
            invalid_type_error: "El rol debe ser un número",
            required_error: "El rol es requerido",
        }),
        generalStatusId: z.number({
            required_error: "El estado general es requerido",
        }),
        password: z.string({
            required_error: "La contraseña es requerida",
        }),
        confirmPassword: z.string({
            required_error: "La confirmación de la contraseña es requerida",
        }),
    }),
});
//# sourceMappingURL=create-user.schema.js.map