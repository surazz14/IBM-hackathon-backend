require("dotenv").config();
import startServer from "./server";
import { createConnection } from "typeorm";

const start = async() => {
  await createConnection();
  startServer();
};
start();