/* Node.js libraries */
import path from "path";

/* External libraries */
import express from "express";
import morgan from "morgan";
import cors from "cors";

/* Local files */
import createRouter from "./routes.js";

function createServer() {
  const app = express();

  /* The express.json() middleware automatically parses JSON data in the body of
   * requests: http://expressjs.com/en/api.html#express.json */
  app.use(express.json());

  /* The express.urlencoded() middleware automatically parses urlencoded payloads
   * into the req.body property:
   * http://expressjs.com/en/api.html#express.urlencoded */
  app.use(express.urlencoded({ extended: false }));

  /* The morgan() middleware logs request info to the console while the server is
   * running: https://expressjs.com/en/resources/middleware/morgan.html */
  app.use(morgan("combined"));

  /* The cors() middleware allows Cross-Origin Resource Sharing when developing
   * locally: http://expressjs.com/en/resources/middleware/cors.html */
  app.use(cors());

  /* The express.static() middleware serves our static files from the pre-built
   * React app: http://expressjs.com/en/api.html#express.static */
  app.use(express.static(path.resolve("..", "client", "build")));

  /* We add our own routes as middleware on the `/api` path */
  app.use("/api", createRouter());

  /* "Redirect" all non-API GET requests to React's entry point (index.html)
   * which allows the React SPA's client side navigation library to handle full
   * page refreshes */
  app.get("*", (req, res) =>
    res.sendFile(path.resolve("..", "client", "build", "index.html"))
  );

  return app;
}

export default createServer;
