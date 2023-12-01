import * as z from "zod";

export const createProductStatusSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "El nombre es requerido",
    }),
  }),
});
