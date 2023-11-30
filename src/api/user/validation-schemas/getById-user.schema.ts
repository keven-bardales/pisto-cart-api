import * as z from "zod";

export const getByIdSchema = z.object({
  params: z.object({
    id: z
      .string({
        required_error: "El id del usuario es requerido",
      })
      .uuid({
        message: "El id debe ser un uuid valido",
      }),
  }),
});
