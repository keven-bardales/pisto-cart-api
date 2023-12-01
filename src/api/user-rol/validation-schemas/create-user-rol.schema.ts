import * as z from "zod";

export const createUserRolSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "El nombre es requerido",
    }),
  }),
});
