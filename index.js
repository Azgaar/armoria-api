const express = require("express");
const http = require("http");
const app = express();
const routes = require("./routes");
const compression = require("compression");
const PORT = process.env.PORT || "3000";

if (app.get("env") === "development") require("dotenv").config();

const db = require("./db");
db.initialize(app, "armoria_api", "claims");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(compression());
app.use(express.static("public"));
app.use("/", routes);

app.set("port", PORT);
const server = http.createServer(app);
server.listen(PORT, function () {
  console.log(`API listening at port http://localhost:${PORT}`);
});
