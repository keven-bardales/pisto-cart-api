import * as z from "zod";

export const loginSchema = z.object({
  body: z.object({
    loginCredential: z.string({
      required_error: "El email o el nombre de usuario es requerido",
    }),
    password: z.string({
      required_error: "La contraseña es requerida",
    }),
  }),
});
