import * as z from "zod";
export const updateProductSchema = z.object({
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
      })
      .min(1, "El estado debe ser mayor a 0"),
    productCategoryId: z
      .number({
        required_error: "La categoria es requerida",
        invalid_type_error: "La categoria debe ser un entero",
      })
      .int({
        message: "La categoria debe ser un entero",
      })
      .min(1, "El id de la categoria debe ser mayor a 0"),
    productStatusId: z
      .number({
        required_error: "El estado es requerido",
        invalid_type_error: "El estado debe ser un entero",
      })
      .int({
        message: "El estado debe ser un entero",
      })
      .min(1, "El estado de el producto debe ser mayor a 0"),

    stock: z.number({
      required_error: "El stock es requerido",
      invalid_type_error: "El stock debe ser un entero",
    }),
  }),
});
