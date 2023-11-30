import * as z from "zod";

export const updateUserSchema = z.object({
  body: z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().email("Email no valido").optional(),
    imageUrl: z.string().optional(),
    rolId: z.string().optional(),
    generalStatusId: z.number().optional(),
  }),
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
