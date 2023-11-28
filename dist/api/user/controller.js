"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    getUsers = async (req, res) => {
        const users = await this.userRepository.getAll();
        res.json(users);
    };
}
exports.UserController = UserController;
//# sourceMappingURL=controller.js.map