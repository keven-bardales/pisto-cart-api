"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const compression_1 = __importDefault(require("compression"));
const express_1 = __importDefault(require("express"));
class Server {
    app = (0, express_1.default)();
    port;
    publicPath;
    routes;
    constructor(options) {
        const { port, publicPath, routes } = options;
        this.port = port;
        this.publicPath = publicPath;
        this.routes = routes;
    }
    async start() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, compression_1.default)());
        this.app.use(express_1.default.static(this.publicPath));
        this.app.use(this.routes);
        this.app.listen(this.port, () => {
            console.log(`Server is listening on port ${this.port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map