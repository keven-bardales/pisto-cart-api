import * as z from "zod";
export const getByIdProductSchema = z.object({
  params: z.object({
    id: z
      .number({
        required_error: "id is required",
      })
      .int({
        message: "id del producto debe ser un entero",
      }),
  }),
});
