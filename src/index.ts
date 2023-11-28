import { envs } from "./config/environment/envs";
import { Server } from "./api/server";
import { AppRoutes } from "./api/routes";

(async () => {
  main();
})();

function main() {
  const server = new Server({
    port: envs.PORT,
    publicPath: envs.PUBLIC_PATH,
    routes: AppRoutes.routes,
  });

  server.start();
}
