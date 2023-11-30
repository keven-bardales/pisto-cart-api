"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const response_1 = require("@src/domain/wrappers/response");
const zod_1 = require("zod");
const validate = (schema) => async (req, res, next) => {
    try {
        await schema.parseAsync({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        return next();
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            return res.status(400).json(response_1.ApiResponse.badRequest({
                message: "Ha ocurrido un error al validar los datos",
                errors: error.issues.map((issue) => {
                    return issue.message;
                }),
            }));
        }
    }
};
exports.validate = validate;
//# sourceMappingURL=validate-request.middleware.js.map