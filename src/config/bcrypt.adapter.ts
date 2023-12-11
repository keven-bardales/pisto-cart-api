import bcrypt from "bcrypt";

export const bcryptAdapter = {
  hash: async (password: string) => {
    const hash = bcrypt
      .hash(password, 10)
      .then((hash) => hash)
      .catch((err) => {
        throw new Error("Ocurrió un error al encriptar la contraseña");
      });

    return hash;
  },

  compare: (password: string, hashed: string) => {
    const result = bcrypt
      .compare(password, hashed)
      .then((result) => result)
      .catch((err) => {
        throw new Error("Ocurrió un error al comparar las contraseñas");
      });

    return result;
  },
};
