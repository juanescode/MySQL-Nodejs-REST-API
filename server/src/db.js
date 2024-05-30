import { createPool } from "mysql2/promise";
import { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_DATABASE } from "./config.js";

export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
});

pool
  .query("SELECT 1")
  .then(() => console.log("The connection was successful"))
  .catch((error) =>
    console.log("The connection to the database failed:", error)
  );

pool.on("error", (error) => {
  console.log("The connection to the database failed:", error);
});
