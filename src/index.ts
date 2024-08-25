require("dotenv").config();
import startServer from "./server";

const start = async() => {
  startServer();
};
start();