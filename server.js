const express = require("express");
const path = require("node:path");
const routes = require("./routes");
const db = require("./db");

const app = express();
app.disable("x-powered-by");
app.set("query parser", "simple");
app.use((req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "X-Content-Type-Options": "nosniff",
    "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; sandbox",
    "Cache-Control": "no-store"
  });
  next();
});
app.use(express.static(path.join(__dirname, "public")));
app.use(async (req, res, next) => {
  try {
    await db.initialize(app, "armoria_api", "claims");
    next();
  } catch {
    res.status(503).json({error: "Claims database unavailable"});
  }
});
app.use("/api", routes);
app.use("/", routes);
app.use((error, req, res, next) => {
  console.error("Image request failed:", error.message);
  res.status(error.status || 400).json({error: "Unable to render the supplied image parameters"});
});

module.exports = app;
