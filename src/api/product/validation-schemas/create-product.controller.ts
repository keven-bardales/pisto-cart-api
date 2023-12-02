import * as z from "zod";
export const createProductSchema = z.object({
  body: z.object({
    code: z
      .string({
        invalid_type_error: "El código debe ser un texto",
        required_error: "El código es requerido",
      })
      .min(3)
      .max(255),
    name: z
      .string({
        invalid_type_error: "El nombre debe ser un texto",
        required_error: "El nombre es requerido",
      })
      .min(3)
      .max(255),
    description: z
      .string({
        invalid_type_error: "La descripción debe ser un texto",
        required_error: "La descripción es requerida",
      })
      .min(3)
      .max(255),
    price: z
      .number({
        invalid_type_error: "El precio debe ser un número",
        required_error: "El precio es requerido",
      })
      .min(0),
    productCategoryId: z
      .string({
        invalid_type_error: "La categoría debe ser un texto",
        required_error: "La categoría es requerida",
      })
      .uuid({
        message: "La categoría debe ser un UUID válido",
      }),
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
      }),
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
  }),
});
