import { z } from "zod";

export const paginationSchema = z.object({
  query: z
    .object({
      all: z.boolean({
        invalid_type_error: "El all debe ser un booleano",
        required_error: "El all es requerido",
      }),
    })
    .refine((data) => !data.all, {
      message: "Las otras propiedades no deben estar presentes cuando 'all' es true",
    })
    .and(
      z.object({
        page: z
          .number({
            invalid_type_error: "La página debe ser un número",
            required_error: "La página es requerida",
          })
          .int({
            message: "La página debe ser un número entero",
          }),
        limit: z
          .number({
            invalid_type_error: "El límite debe ser un número",
            required_error: "El límite es requerido",
          })
          .int({
            message: "El límite debe ser un número entero",
          }),

        search: z
          .string({
            invalid_type_error: "La búsqueda debe ser un texto",
            required_error: "La búsqueda es requerida",
          })
          .max(600),
        column: z
          .string({
            invalid_type_error: "La columna debe ser un texto",
            required_error: "La columna es requerida",
          })
          .min(3)
          .max(600),

        order: z
          .string({
            invalid_type_error: "El orden debe ser un texto",
            required_error: "El orden es requerido",
          })
          .max(600),
      })
    ),
});
