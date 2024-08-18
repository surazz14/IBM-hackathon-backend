import * as express from "express";
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import routes from "./routes";
import * as errorHandler from './middlewares/errorhandlers'

const PORT = process.env.PORT || 5000;

function startServer() {
  const app = express();
  app.use(cors())

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json());
  app.use("/api", routes);
  app.use(errorHandler.genericErrorHandler)
  app.listen(PORT, () => console.log(`App is running at port ${PORT}`));
}

export default startServer;
