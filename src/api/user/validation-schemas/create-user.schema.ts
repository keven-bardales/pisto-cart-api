import * as z from "zod";

export const createUserSchema = z.object({
  body: z.object({
    googleId: z.string({
      required_error: "El usuario de google es requerido",
    }),
    firstName: z.string({
      required_error: "El nombre es requerido",
    }),
    lastName: z.string({
      required_error: "El apellido es requerido",
    }),
    email: z
      .string({
        required_error: "El email es requerido",
      })
      .email("Email no valido"),
    imageUrl: z.string({
      required_error: "La imagen es requerida",
    }),
    rolId: z.number({
      invalid_type_error: "El rol debe ser un número",
      required_error: "El rol es requerido",
    }),
    generalStatusId: z.number({
      required_error: "El estado general es requerido",
    }),
    password: z.string({
      required_error: "La contraseña es requerida",
    }),
    confirmPassword: z.string({
      required_error: "La confirmación de la contraseña es requerida",
    }),
  }),
});
