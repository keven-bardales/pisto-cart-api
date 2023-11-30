"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const create_user_dto_1 = require("@src/domain/dtos/user/create-user.dto");
const response_1 = require("@src/domain/wrappers/response");
class UserController {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    getUsers = async (req, res) => {
        const users = await this.userRepository.getAll();
        res.status(200).json(response_1.ApiResponse.success({
            data: users,
            message: "Users fetched successfully",
            statusCode: 200,
        }));
    };
    getById = async (req, res) => {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json(response_1.ApiResponse.error({
                message: "Id is required",
                statusCode: 400,
            }));
        }
        const user = await this.userRepository.getById(id);
        if (!user) {
            return res.status(404).json(response_1.ApiResponse.error({
                message: "User not found",
                statusCode: 404,
            }));
        }
        return res.status(200).json(response_1.ApiResponse.success({
            data: user,
            message: "User fetched successfully",
            statusCode: 200,
        }));
    };
    async create(req, res) {
        const [error, createUserDto] = create_user_dto_1.CreateUserDto.create(req.body);
        if (error) {
            return res.status(400).json(response_1.ApiResponse.error({
                message: error,
                statusCode: 400,
            }));
        }
        const user = await this.userRepository.create(createUserDto);
        return res.status(201).json(response_1.ApiResponse.success({
            data: user,
            message: "User created successfully",
            statusCode: 201,
        }));
    }
}
exports.UserController = UserController;
//# sourceMappingURL=controller.js.map