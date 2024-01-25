import * as z from "zod";
export const getByIdGeneralSchema = z.object({
  params: z.object({
    id: z
      .string({
        invalid_type_error: "El id debe ser un texto",
        required_error: "El id es requerido",
      })
      .uuid({
        message: "El id debe ser un UUID válido",
      }),
  }),
});
