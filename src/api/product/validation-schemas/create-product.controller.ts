import * as z from "zod";
export const createProductSchema = z.object({
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
