import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import next from "next";
import api from "../pages/api/image/[id]";

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();
server.use(cors({ origin: "*" }));
app.prepare().then(() => {
  server.use(bodyParser.json({ limit: "infinity" }));
  server.use("/api", api);

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3001, () => {
    console.log("Express server listening on port 3001");
  });
});
