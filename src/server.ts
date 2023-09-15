import "./config";

import App from "./app";
import logger from "./config/logger";
import controllers from "./controller";
import { initConnection } from "./util/dbUtil";



process.on("uncaughtException", (e) => {
  logger.error(e);
  process.exit(1);
});
process.on("unhandledRejection", (e) => {
  logger.error(e);
  process.exit(1);
});
(async () => {
  try {
    await initConnection();
  } catch (error) {
    logger.error("Error while connecting to the database", error);
    process.exit(1);
  }

  const app = new App(controllers);
  app.listen();
})();
