"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const envs_1 = require("./config/environment/envs");
const server_1 = require("./api/server");
const routes_1 = require("@src/api/routes");
(async () => {
    main();
})();
function main() {
    const server = new server_1.Server({
        port: envs_1.envs.PORT,
        publicPath: envs_1.envs.PUBLIC_PATH,
        routes: routes_1.AppRoutes.routes,
    });
    server.start();
}
//# sourceMappingURL=index.js.map