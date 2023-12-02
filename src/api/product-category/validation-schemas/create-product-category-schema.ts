import * as z from "zod";

export const createProductCategorySchema = z.object({
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
    parentCategoryId: z
      .string({
        invalid_type_error:
          "El id de la categoría padre debe ser de tipo texto",
      })
      .uuid({
        message: "El id de la categoría padre debe ser un UUID",
      })
      .optional(),
  }),
});
