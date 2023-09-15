import logger from "../config/logger";
import { createConnection, getConnectionManager } from "typeorm";
import rdbmsConfig from "../config/rdbms";

export const initConnection = async () => {
  const connectionManager = getConnectionManager();
  const CONNECTION_NAME = "default";
  let connection;
  if (connectionManager.has(CONNECTION_NAME)) {
    logger.info("using existing connection ...");
    connection = await connectionManager.get(CONNECTION_NAME);
    if (!connection.isConnected) {
        connection = await connection.connect();
    }
  } else {
    logger.info("Database connection does not exist. creating one");
    connection = await createConnection(rdbmsConfig);
    logger.info("Database connected");
  }
  return connection;
};
