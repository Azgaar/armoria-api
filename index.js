const express = require("express");
const http = require("http");
const app = express();
const routes = require("./routes");
const compression = require("compression");

const PORT = process.env.PORT || "3000";

app.get("env") === "development" && app.use(require("easy-livereload")());

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
  console.log(`App listening at port ${PORT}`);
});
