"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bcryptAdapter = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.bcryptAdapter = {
    hash: async (password) => {
        const hash = bcrypt_1.default
            .hash(password, 10)
            .then((hash) => hash)
            .catch((err) => {
            throw new Error("Ocurrió un error al encriptar la contraseña");
        });
        return hash;
    },
    compare: (password, hashed) => {
        const result = bcrypt_1.default
            .compare(password, hashed)
            .then((result) => result)
            .catch((err) => {
            throw new Error("Ocurrió un error al comparar las contraseñas");
        });
        return result;
    },
};
//# sourceMappingURL=bcrypt.adapter.js.map